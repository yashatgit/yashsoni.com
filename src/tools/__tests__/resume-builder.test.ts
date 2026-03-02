import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import puppeteer, { Browser, Page } from 'puppeteer';
import path from 'path';

const RESUME_PATH = path.resolve(__dirname, '../../../public/tools/resume-builder.html');
const FILE_URL = `file://${RESUME_PATH}`;

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
  // Clear localStorage before each test
  await page.goto(FILE_URL, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => localStorage.clear());
  await page.reload({ waitUntil: 'domcontentloaded' });
  // Wait for initial render
  await page.waitForSelector('#resumePreview');
  await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
});

afterEach(async () => {
  await page.close();
});

// ─── Helpers ────────────────────────────────────────────────
async function switchLayout(layoutId: string) {
  await page.evaluate((id) => {
    (window as any).currentLayout = id;
    (window as any).render();
  }, layoutId);
  await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
}

async function getPreviewHTML(): Promise<string> {
  return page.evaluate(() => document.getElementById('resumePreview')!.innerHTML);
}

async function callExportPDF() {
  // Intercept window.print so it doesn't block
  await page.evaluate(() => {
    (window as any).__printCalled = false;
    window.print = () => { (window as any).__printCalled = true; };
  });
  await page.evaluate(() => (window as any).exportPDF());
  await page.evaluate(() => new Promise(r => setTimeout(r, 100)));
}

async function getPrintContainer() {
  return page.evaluate(() => {
    const pc = document.getElementById('printContainer');
    if (!pc) return null;
    return {
      exists: true,
      childCount: pc.children.length,
      display: pc.style.display,
      innerHTML: pc.innerHTML,
    };
  });
}

async function getResumeClone() {
  return page.evaluate(() => {
    const pc = document.getElementById('printContainer');
    if (!pc) return null;
    // The resume clone/wrapper is the last child of printContainer
    const clone = pc.lastElementChild as HTMLElement;
    if (!clone) return null;

    // For single-column: clone is the direct a4-page clone
    // For sidebar: clone is a wrapper with absolute sidebar + margin main
    const fc = clone.firstElementChild as HTMLElement;
    const hasFlex = fc ? fc.style.display === 'flex' : false;

    // Check for sidebar layout (wrapper with print-sidebar-bg + absolute sidebar + main)
    const sidebarBg = pc.querySelector('.print-sidebar-bg') as HTMLElement | null;
    const isSidebarLayout = !!sidebarBg;

    // Count entries with break-inside:avoid (search in wrapper/clone)
    const entries = clone.querySelectorAll('.resume-entry');
    const entriesWithBreak = Array.from(entries).filter(
      e => (e as HTMLElement).style.breakInside === 'avoid'
    ).length;

    // Count section title wrappers with break-after:avoid
    const sections = clone.querySelectorAll('.resume-section');
    const titlesWithBreak = Array.from(sections).filter(s => {
      const first = s.firstElementChild as HTMLElement;
      return first && !first.classList.contains('resume-entry') && first.style.breakAfter === 'avoid';
    }).length;

    return {
      exists: true,
      width: clone.style.width,
      transform: clone.style.transform,
      boxShadow: clone.style.boxShadow,
      fontFamily: clone.style.fontFamily,
      minHeight: clone.style.minHeight,
      hasFlex,
      isSidebarLayout,
      entryCount: entries.length,
      entriesWithBreak,
      sectionsWithTitleBreak: titlesWithBreak,
      sectionCount: sections.length,
      hasSidebarBg: !!sidebarBg,
      sidebarBgPosition: sidebarBg ? sidebarBg.style.position : null,
      sidebarBgBackground: sidebarBg ? sidebarBg.style.background : null,
      sidebarBgWidth: sidebarBg ? sidebarBg.style.width : null,
    };
  });
}

// ─── SECTION 1: Basic Structure ─────────────────────────────
describe('Resume Builder — Basic Structure', () => {
  it('loads without errors', async () => {
    const title = await page.title();
    expect(title).toBe('Resume Builder');
  });

  it('renders preview with default data', async () => {
    const html = await getPreviewHTML();
    expect(html).toContain('Alex Johnson');
    expect(html).toContain('Senior Software Engineer');
  });

  it('has no html2canvas or jsPDF script tags', async () => {
    const scripts = await page.evaluate(() =>
      Array.from(document.querySelectorAll('script[src]')).map(s => s.getAttribute('src'))
    );
    expect(scripts.some(s => s?.includes('html2canvas'))).toBe(false);
    expect(scripts.some(s => s?.includes('jspdf'))).toBe(false);
  });
});

// ─── SECTION 2: .resume-section Wrappers ────────────────────
describe('Resume Builder — Section Wrappers', () => {
  it('wraps each rendered section in .resume-section', async () => {
    const count = await page.evaluate(() =>
      document.querySelectorAll('#resumePreview .resume-section').length
    );
    // Default data has: summary, experience, education, skills, projects = 5 sections
    expect(count).toBeGreaterThanOrEqual(4);
  });

  it('summary section is wrapped in .resume-section', async () => {
    const html = await getPreviewHTML();
    expect(html).toContain('class="resume-section"');
    // Summary text should be inside a .resume-section
    const summaryInSection = await page.evaluate(() => {
      const sections = document.querySelectorAll('#resumePreview .resume-section');
      return Array.from(sections).some(s => s.textContent?.includes('Software engineer with'));
    });
    expect(summaryInSection).toBe(true);
  });

  it('experience entries are direct children of .resume-section', async () => {
    const result = await page.evaluate(() => {
      const sections = document.querySelectorAll('#resumePreview .resume-section');
      for (const section of sections) {
        const entries = section.querySelectorAll(':scope > .resume-entry');
        if (entries.length > 0) {
          // Check this is the experience section by looking for a role name
          const text = section.textContent || '';
          if (text.includes('Senior Software Engineer') || text.includes('Acme Corp')) {
            return { found: true, entryCount: entries.length };
          }
        }
      }
      return { found: false, entryCount: 0 };
    });
    expect(result.found).toBe(true);
    expect(result.entryCount).toBe(2); // default has 2 experience entries
  });

  it('.resume-section wrappers exist in sidebar layout too', async () => {
    await switchLayout('modern-left');
    const sidebarSections = await page.evaluate(() => {
      const sidebar = document.querySelector('#resumePreview [style*="background:"]');
      if (!sidebar) return 0;
      return sidebar.querySelectorAll('.resume-section').length;
    });
    expect(sidebarSections).toBeGreaterThanOrEqual(1);
  });
});

// ─── SECTION 3: Print CSS ───────────────────────────────────
describe('Resume Builder — Print CSS', () => {
  it('has @media print rules in stylesheet', async () => {
    const hasPrintRule = await page.evaluate(() => {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule instanceof CSSMediaRule && rule.conditionText === 'print') {
              return true;
            }
          }
        } catch (e) {}
      }
      return false;
    });
    expect(hasPrintRule).toBe(true);
  });

  it('print CSS hides body > div', async () => {
    const hasHideRule = await page.evaluate(() => {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule instanceof CSSMediaRule && rule.conditionText === 'print') {
              for (const inner of rule.cssRules) {
                if (inner instanceof CSSStyleRule && inner.selectorText === 'body > div') {
                  return inner.style.display === 'none';
                }
              }
            }
          }
        } catch (e) {}
      }
      return false;
    });
    expect(hasHideRule).toBe(true);
  });

  it('print CSS shows #printContainer', async () => {
    const hasShowRule = await page.evaluate(() => {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule instanceof CSSMediaRule && rule.conditionText === 'print') {
              for (const inner of rule.cssRules) {
                if (inner instanceof CSSStyleRule && inner.selectorText === '#printContainer') {
                  return inner.style.display === 'block';
                }
              }
            }
          }
        } catch (e) {}
      }
      return false;
    });
    expect(hasShowRule).toBe(true);
  });

  it('print CSS sets color-adjust: exact', async () => {
    const hasColorAdjust = await page.evaluate(() => {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule instanceof CSSMediaRule && rule.conditionText === 'print') {
              for (const inner of rule.cssRules) {
                if (inner instanceof CSSStyleRule && inner.selectorText === 'body') {
                  return inner.style.getPropertyValue('print-color-adjust') === 'exact' ||
                    inner.style.getPropertyValue('-webkit-print-color-adjust') === 'exact';
                }
              }
            }
          }
        } catch (e) {}
      }
      return false;
    });
    expect(hasColorAdjust).toBe(true);
  });

  it('break properties are set via JS not CSS (no .resume-entry rule in print CSS)', async () => {
    const hasBreakInside = await page.evaluate(() => {
      for (const sheet of document.styleSheets) {
        try {
          for (const rule of sheet.cssRules) {
            if (rule instanceof CSSMediaRule && rule.conditionText === 'print') {
              for (const inner of rule.cssRules) {
                if (inner instanceof CSSStyleRule && inner.selectorText === '.resume-entry') {
                  return true;
                }
              }
            }
          }
        } catch (e) {}
      }
      return false;
    });
    expect(hasBreakInside).toBe(false);
  });
});

// ─── SECTION 4: exportPDF — Basic Export ─────────────────────
describe('Resume Builder — exportPDF Basic', () => {
  it('calls window.print()', async () => {
    await callExportPDF();
    const called = await page.evaluate(() => (window as any).__printCalled);
    expect(called).toBe(true);
  });

  it('creates #printContainer on the page', async () => {
    await callExportPDF();
    const pc = await getPrintContainer();
    expect(pc).not.toBeNull();
    expect(pc!.exists).toBe(true);
  });

  it('clone is 210mm wide', async () => {
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone).not.toBeNull();
    expect(clone!.width).toBe('210mm');
  });

  it('clone has transform:none (no scaling)', async () => {
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.transform).toBe('none');
  });

  it('clone has no box-shadow', async () => {
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.boxShadow).toBe('none');
  });

  it('clone has min-height:auto for natural flow', async () => {
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.minHeight).toBe('auto');
  });
});

// ─── SECTION 5: exportPDF — Single Column Layout ────────────
describe('Resume Builder — exportPDF Single Column', () => {
  beforeEach(async () => {
    await switchLayout('single');
  });

  it('preserves font-family in print output', async () => {
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.fontFamily).toBeTruthy();
    expect(clone!.fontFamily).toContain('Inter');
  });

  it('contains the resume content in print output', async () => {
    await callExportPDF();
    const pc = await getPrintContainer();
    expect(pc!.innerHTML).toContain('Alex Johnson');
    expect(pc!.innerHTML).toContain('Experience');
  });

  it('single column has no sidebar background element', async () => {
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.hasSidebarBg).toBe(false);
  });
});

// ─── SECTION 6: exportPDF — Sidebar Layouts ─────────────────
describe('Resume Builder — exportPDF Sidebar Layouts', () => {
  it('sidebar-left layout uses non-flex wrapper for print pagination', async () => {
    await switchLayout('modern-left');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.isSidebarLayout).toBe(true);
    expect(clone!.hasFlex).toBe(false); // flex removed for pagination
  });

  it('sidebar-right layout uses non-flex wrapper for print pagination', async () => {
    await switchLayout('modern-right');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.isSidebarLayout).toBe(true);
  });

  it('two-col-balanced layout uses non-flex wrapper', async () => {
    await switchLayout('two-col-balanced');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.isSidebarLayout).toBe(true);
  });

  it('executive layout uses non-flex wrapper', async () => {
    await switchLayout('executive');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.isSidebarLayout).toBe(true);
  });

  it('sidebar layout creates fixed background element', async () => {
    await switchLayout('modern-left');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.hasSidebarBg).toBe(true);
    expect(clone!.sidebarBgPosition).toBe('fixed');
    expect(clone!.sidebarBgBackground).toBeTruthy();
  });
});

// ─── SECTION 7: Native Pagination — Break Properties ─────────
describe('Resume Builder — Native Pagination Break Properties', () => {
  async function addManyExperiences(count: number) {
    await page.evaluate((n) => {
      const data = (window as any).resumeData;
      data.experience = [];
      for (let i = 0; i < n; i++) {
        data.experience.push({
          company: `Company ${i + 1}`,
          role: `Role ${i + 1}`,
          dates: `Jan 202${i % 10} — Dec 202${i % 10}`,
          bullets: [
            'Led a major initiative that delivered measurable results across the organization',
            'Implemented scalable solutions processing millions of records per day',
            'Collaborated with cross-functional teams to ship critical features on time',
          ],
        });
      }
      (window as any).renderExperience();
      (window as any)._render();
    }, count);
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));
  }

  it('all resume entries have break-inside:avoid', async () => {
    await addManyExperiences(8);
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.entryCount).toBeGreaterThan(0);
    expect(clone!.entriesWithBreak).toBe(clone!.entryCount);
  });

  it('section title wrappers have break-after:avoid', async () => {
    await addManyExperiences(8);
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.sectionCount).toBeGreaterThan(0);
    expect(clone!.sectionsWithTitleBreak).toBe(clone!.sectionCount);
  });

  it('clone contains all experience entries', async () => {
    await addManyExperiences(8);
    await callExportPDF();
    const pc = await getPrintContainer();
    for (let i = 1; i <= 8; i++) {
      expect(pc!.innerHTML).toContain(`Company ${i}`);
    }
  });

  it('break properties set for default content too', async () => {
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.entryCount).toBeGreaterThan(0);
    expect(clone!.entriesWithBreak).toBe(clone!.entryCount);
    expect(clone!.sectionsWithTitleBreak).toBe(clone!.sectionCount);
  });
});

// ─── SECTION 8: Sidebar Background in Print ─────────────────
describe('Resume Builder — Sidebar Background in Print', () => {
  it('sidebar layout has fixed-position background element', async () => {
    await switchLayout('modern-left');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.hasSidebarBg).toBe(true);
    expect(clone!.sidebarBgPosition).toBe('fixed');
  });

  it('sidebar background has correct width matching sidebar column', async () => {
    await switchLayout('modern-left');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.sidebarBgWidth).toBeTruthy();
    expect(clone!.sidebarBgWidth).toContain('%');
  });

  it('sidebar layout wrapper has min-height:auto for natural pagination', async () => {
    await switchLayout('modern-left');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.minHeight).toBe('auto');
  });

  it('two-col-balanced layout also gets fixed sidebar background', async () => {
    await switchLayout('two-col-balanced');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.hasSidebarBg).toBe(true);
    expect(clone!.sidebarBgPosition).toBe('fixed');
  });

  it('executive layout also gets fixed sidebar background', async () => {
    await switchLayout('executive');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.hasSidebarBg).toBe(true);
    expect(clone!.sidebarBgPosition).toBe('fixed');
  });
});

// ─── SECTION 9: Orphaned Heading Prevention ─────────────────
describe('Resume Builder — Orphaned Heading Prevention', () => {
  it('computeBreaks first entry includes section top (prevents orphan)', async () => {
    // Test the algorithm: first entry in a section should have top = section top
    const result = await page.evaluate(() => {
      const preview = document.getElementById('resumePreview')!;

      // Create off-screen measurement clone
      const measure = document.createElement('div');
      measure.style.cssText = 'position:absolute;left:-9999px;top:0;width:210mm;visibility:hidden;';
      document.body.appendChild(measure);

      const clone = preview.cloneNode(true) as HTMLElement;
      clone.removeAttribute('id');
      clone.style.transform = 'none';
      clone.style.transformOrigin = '';
      clone.style.minHeight = 'auto';
      clone.style.boxShadow = 'none';
      clone.style.borderRadius = '0';
      measure.appendChild(clone);

      const baseTop = clone.getBoundingClientRect().top;
      const sections = clone.querySelectorAll('.resume-section');
      const results: Array<{sectionTop: number; firstEntryTop: number; match: boolean}> = [];

      sections.forEach(section => {
        const entries = section.querySelectorAll(':scope > .resume-entry');
        if (entries.length > 0) {
          const sTop = section.getBoundingClientRect().top - baseTop;
          const eTop = entries[0].getBoundingClientRect().top - baseTop;
          results.push({
            sectionTop: Math.round(sTop),
            firstEntryTop: Math.round(eTop),
            match: sTop < eTop, // section title is above the first entry
          });
        }
      });

      document.body.removeChild(measure);
      return results;
    });

    // Section top should be above (less than) first entry top — there's a title between them
    for (const r of result) {
      expect(r.match).toBe(true);
    }
  });
});

// ─── SECTION 10: Layout-Specific Export Tests ────────────────
describe('Resume Builder — Layout-Specific Export', () => {
  async function addManyExperiences(count: number) {
    await page.evaluate((n) => {
      const data = (window as any).resumeData;
      data.experience = [];
      for (let i = 0; i < n; i++) {
        data.experience.push({
          company: `Company ${i + 1}`,
          role: `Role ${i + 1}`,
          dates: `Jan 202${i % 10} — Dec 202${i % 10}`,
          bullets: [
            'Led a major initiative that delivered measurable results across the organization',
            'Implemented scalable solutions processing millions of records per day',
            'Collaborated with cross-functional teams to ship critical features on time',
          ],
        });
      }
      (window as any).renderExperience();
      (window as any)._render();
    }, count);
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));
  }

  for (const layoutId of ['single', 'compact', 'modern-left', 'modern-right', 'two-col-balanced', 'executive']) {
    it(`${layoutId}: export contains all content and has break properties`, async () => {
      await switchLayout(layoutId);
      await addManyExperiences(8);
      await callExportPDF();
      const clone = await getResumeClone();
      expect(clone).not.toBeNull();
      expect(clone!.width).toBe('210mm');
      expect(clone!.entryCount).toBeGreaterThan(0);
      expect(clone!.entriesWithBreak).toBe(clone!.entryCount);
      const pc = await getPrintContainer();
      expect(pc!.innerHTML).toContain('Company 1');
      expect(pc!.innerHTML).toContain('Company 8');
    });
  }

  it('single column export has no flex container', async () => {
    await switchLayout('single');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.hasFlex).toBe(false);
  });

  it('sidebar layout export uses non-flex wrapper', async () => {
    await switchLayout('modern-left');
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.isSidebarLayout).toBe(true);
    expect(clone!.hasFlex).toBe(false);
  });
});

// ─── SECTION 11: Edge Cases ─────────────────────────────────
describe('Resume Builder — Edge Cases', () => {
  it('handles empty resume (no entries)', async () => {
    await page.evaluate(() => {
      resumeData.contact = { fullName: '', jobTitle: '', email: '', phone: '', location: '', linkedin: '', website: '' };
      resumeData.summary = '';
      resumeData.experience = [];
      resumeData.education = [];
      resumeData.skills = [];
      resumeData.projects = [];
      populateForm();
      renderEntryLists();
      _render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));

    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone).not.toBeNull();
  });

  it('handles resume with only contact info', async () => {
    await page.evaluate(() => {
      resumeData.contact = { fullName: 'Test User', jobTitle: 'Developer', email: 'test@test.com', phone: '', location: '', linkedin: '', website: '' };
      resumeData.summary = '';
      resumeData.experience = [];
      resumeData.education = [];
      resumeData.skills = [];
      resumeData.projects = [];
      populateForm();
      renderEntryLists();
      _render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));

    await callExportPDF();
    const pc = await getPrintContainer();
    expect(pc!.innerHTML).toContain('Test User');
  });

  it('handles very long summary text', async () => {
    await page.evaluate(() => {
      resumeData.summary = 'A '.repeat(2000);
      populateForm();
      _render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));

    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone).not.toBeNull();
  });

  it('handles many skill groups', async () => {
    await page.evaluate(() => {
      resumeData.skills = [];
      for (let i = 0; i < 20; i++) {
        resumeData.skills.push({
          category: `Category ${i + 1}`,
          items: 'Skill A, Skill B, Skill C, Skill D, Skill E, Skill F',
        });
      }
      renderSkills();
      _render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));

    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone).not.toBeNull();
  });

  it('re-calling exportPDF reuses printContainer (no duplicates)', async () => {
    await callExportPDF();
    await callExportPDF();
    await callExportPDF();

    const count = await page.evaluate(() =>
      document.querySelectorAll('#printContainer').length
    );
    expect(count).toBe(1);
  });

  it('printContainer innerHTML is replaced on each export', async () => {
    await callExportPDF();
    const firstHTML = await page.evaluate(() =>
      document.getElementById('printContainer')!.innerHTML
    );

    // Change data and sync form inputs
    await page.evaluate(() => {
      resumeData.contact.fullName = 'Changed Name';
      populateForm();
      _render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    await callExportPDF();

    const secondHTML = await page.evaluate(() =>
      document.getElementById('printContainer')!.innerHTML
    );

    expect(secondHTML).toContain('Changed Name');
    expect(secondHTML).not.toBe(firstHTML);
  });
});

// ─── SECTION 12: Theme Preservation in Print ────────────────
describe('Resume Builder — Theme Preservation in Print', () => {
  it('accent color from theme is in print output', async () => {
    // Default theme is emerald with accent #059669
    await callExportPDF();
    const pc = await getPrintContainer();
    expect(pc!.innerHTML).toContain('#059669');
  });

  it('switching theme changes print output colors', async () => {
    await page.evaluate(() => {
      (window as any).currentTheme = 'blue';
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    await callExportPDF();
    const pc = await getPrintContainer();
    // Blue theme accent is #2563eb
    expect(pc!.innerHTML).toContain('#2563eb');
  });

  it('sidebar theme color is preserved in multi-page print', async () => {
    await switchLayout('modern-left');
    await page.evaluate(() => {
      (window as any).currentTheme = 'violet';
      const data = (window as any).resumeData;
      data.experience = [];
      for (let i = 0; i < 8; i++) {
        data.experience.push({
          company: `Company ${i}`, role: `Role ${i}`, dates: '2020-2021',
          bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
        });
      }
      (window as any).renderExperience();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));
    await callExportPDF();

    // Violet sidebar color is #3b1f6e — check for hex or rgb() form
    const hasSidebarColor = await page.evaluate(() => {
      const pc = document.getElementById('printContainer');
      const html = pc?.innerHTML || '';
      return html.includes('#3b1f6e') || html.includes('rgb(59, 31, 110)');
    });
    expect(hasSidebarColor).toBe(true);
  });
});

// ─── SECTION 13: computeBreaks Algorithm Correctness ────────
describe('Resume Builder — computeBreaks Algorithm', () => {
  it('breaks array starts with 0', async () => {
    await page.evaluate((n) => {
      const data = (window as any).resumeData;
      data.experience = [];
      for (let i = 0; i < n; i++) {
        data.experience.push({
          company: `Company ${i + 1}`, role: `Role ${i + 1}`, dates: '2020',
          bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
        });
      }
      (window as any).renderExperience();
      (window as any)._render();
    }, 10);
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));

    const breaks = await page.evaluate(() => {
      const preview = document.getElementById('resumePreview')!;
      const measure = document.createElement('div');
      measure.style.cssText = 'position:absolute;left:-9999px;top:0;width:210mm;visibility:hidden;';
      document.body.appendChild(measure);

      const clone = preview.cloneNode(true) as HTMLElement;
      clone.removeAttribute('id');
      clone.style.transform = 'none';
      clone.style.transformOrigin = '';
      clone.style.minHeight = 'auto';
      clone.style.boxShadow = 'none';
      clone.style.borderRadius = '0';
      measure.appendChild(clone);

      const pageH = clone.offsetWidth * (297 / 210);
      const result = (window as any).computeBreaks(clone, pageH);
      document.body.removeChild(measure);
      return result;
    });

    expect(breaks[0]).toBe(0);
    expect(breaks.length).toBeGreaterThan(1);

    // All breaks should be non-negative and increasing
    for (let i = 1; i < breaks.length; i++) {
      expect(breaks[i]).toBeGreaterThan(breaks[i - 1]);
    }
  });

  it('break points never land inside a resume-entry', async () => {
    await page.evaluate((n) => {
      const data = (window as any).resumeData;
      data.experience = [];
      for (let i = 0; i < n; i++) {
        data.experience.push({
          company: `Company ${i + 1}`, role: `Role ${i + 1}`, dates: '2020',
          bullets: ['Bullet 1', 'Bullet 2', 'Bullet 3'],
        });
      }
      (window as any).renderExperience();
      (window as any)._render();
    }, 10);
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));

    const result = await page.evaluate(() => {
      const preview = document.getElementById('resumePreview')!;
      const measure = document.createElement('div');
      measure.style.cssText = 'position:absolute;left:-9999px;top:0;width:210mm;visibility:hidden;';
      document.body.appendChild(measure);

      const clone = preview.cloneNode(true) as HTMLElement;
      clone.removeAttribute('id');
      clone.style.transform = 'none';
      clone.style.transformOrigin = '';
      clone.style.minHeight = 'auto';
      clone.style.boxShadow = 'none';
      clone.style.borderRadius = '0';
      measure.appendChild(clone);

      const pageH = clone.offsetWidth * (297 / 210);
      const breaks = (window as any).computeBreaks(clone, pageH) as number[];
      const baseTop = clone.getBoundingClientRect().top;

      // Check each break point against all entry boundaries
      const entries = Array.from(clone.querySelectorAll('.resume-entry')).map(el => {
        const rect = el.getBoundingClientRect();
        return { top: rect.top - baseTop, bottom: rect.bottom - baseTop };
      });

      const violations: Array<{breakAt: number; entryTop: number; entryBottom: number}> = [];
      for (const bp of breaks) {
        if (bp === 0) continue;
        for (const entry of entries) {
          if (bp > entry.top + 1 && bp < entry.bottom - 1) {
            violations.push({ breakAt: bp, entryTop: entry.top, entryBottom: entry.bottom });
          }
        }
      }

      document.body.removeChild(measure);
      return { breaks, violations };
    });

    expect(result.violations).toEqual([]);
  });
});

  it('sections that fit on a page are not split across pages', async () => {
    // Create data with multiple distinct sections, each small enough to fit on one page
    await page.evaluate(() => {
      const data = (window as any).resumeData;
      data.experience = [];
      // 3 experience entries — should be one section that fits on a page
      for (let i = 0; i < 3; i++) {
        data.experience.push({
          company: `Exp Company ${i + 1}`, role: `Exp Role ${i + 1}`, dates: '2020-2021',
          bullets: ['Bullet A', 'Bullet B'],
        });
      }
      data.education = [];
      for (let i = 0; i < 3; i++) {
        data.education.push({
          institution: `Edu School ${i + 1}`, degree: `Degree ${i + 1}`, dates: '2018-2020', details: 'Detail text here',
        });
      }
      data.projects = [];
      for (let i = 0; i < 3; i++) {
        data.projects.push({
          name: `Project ${i + 1}`, tech: 'Tech', description: 'Description of the project here',
        });
      }
      data.skills = [
        { category: 'Languages', items: 'JavaScript, Python, Go, Rust, TypeScript' },
        { category: 'Frameworks', items: 'React, Vue, Angular, Svelte, Next.js' },
        { category: 'Tools', items: 'Git, Docker, K8s, Terraform, AWS' },
      ];
      (window as any).populateForm();
      (window as any).renderEntryLists();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));

    const result = await page.evaluate(() => {
      const preview = document.getElementById('resumePreview')!;
      const measure = document.createElement('div');
      measure.style.cssText = 'position:absolute;left:-9999px;top:0;width:210mm;visibility:hidden;';
      document.body.appendChild(measure);

      const clone = preview.cloneNode(true) as HTMLElement;
      clone.removeAttribute('id');
      clone.style.transform = 'none';
      clone.style.transformOrigin = '';
      clone.style.minHeight = 'auto';
      clone.style.boxShadow = 'none';
      clone.style.borderRadius = '0';
      measure.appendChild(clone);

      const pageH = clone.offsetWidth * (297 / 210);
      const breaks = (window as any).computeBreaks(clone, pageH) as number[];
      const baseTop = clone.getBoundingClientRect().top;

      // For each section, check that no break point falls inside it (unless section > pageH)
      const sections = Array.from(clone.querySelectorAll('.resume-section')).map(el => {
        const rect = el.getBoundingClientRect();
        return { top: rect.top - baseTop, bottom: rect.bottom - baseTop };
      });

      const violations: Array<{breakAt: number; sectionTop: number; sectionBottom: number; sectionHeight: number}> = [];
      for (const bp of breaks) {
        if (bp === 0) continue;
        for (const section of sections) {
          const sectionHeight = section.bottom - section.top;
          // Only check sections that fit on a single page
          if (sectionHeight <= pageH) {
            // Break should not land strictly inside a section
            if (bp > section.top + 1 && bp < section.bottom - 1) {
              violations.push({ breakAt: bp, sectionTop: section.top, sectionBottom: section.bottom, sectionHeight });
            }
          }
        }
      }

      document.body.removeChild(measure);
      return { breaks, violations, sections, pageH };
    });

    expect(result.violations).toEqual([]);
  });

// ─── SECTION 14: PDF Export with Different Font Families ────
describe('Resume Builder — Font Preservation', () => {
  it('merriweather font is preserved in print output', async () => {
    await page.evaluate(() => {
      (window as any).currentFont = 'merriweather';
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    await callExportPDF();

    const clone = await getResumeClone();
    expect(clone!.fontFamily).toContain('Inter');
  });

  it('playfair font is preserved in print output', async () => {
    await page.evaluate(() => {
      (window as any).currentFont = 'playfair';
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    await callExportPDF();

    const clone = await getResumeClone();
    expect(clone!.fontFamily).toContain('Source Sans');
  });
});

// ─── SECTION 15: Experience Location & Description ──────────
describe('Resume Builder — Experience Location & Description', () => {
  it('renders location in preview when set', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.experience[0].location = 'Dubai, UAE';
      (window as any).renderExperience();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    const html = await getPreviewHTML();
    expect(html).toContain('Dubai, UAE');
  });

  it('renders company description in preview when set', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.experience[0].description = 'Leading tech company';
      (window as any).renderExperience();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    const html = await getPreviewHTML();
    expect(html).toContain('Leading tech company');
    expect(html).toContain('font-style:italic');
  });

  it('location input exists in editor', async () => {
    const exists = await page.evaluate(() =>
      !!document.querySelector('.exp-location')
    );
    expect(exists).toBe(true);
  });

  it('description textarea exists in editor', async () => {
    const exists = await page.evaluate(() =>
      !!document.querySelector('.exp-desc')
    );
    expect(exists).toBe(true);
  });

  it('location and description round-trip through collectFormData', async () => {
    await page.evaluate(() => {
      const loc = document.querySelector('.exp-location') as HTMLInputElement;
      const desc = document.querySelector('.exp-desc') as HTMLTextAreaElement;
      loc.value = 'Tokyo, Japan';
      desc.value = 'A great company';
      (window as any).collectFormData();
    });
    const result = await page.evaluate(() => {
      const data = (window as any).resumeData;
      return { location: data.experience[0].location, description: data.experience[0].description };
    });
    expect(result.location).toBe('Tokyo, Japan');
    expect(result.description).toBe('A great company');
  });

  it('location appears in PDF export', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.experience[0].location = 'Berlin, Germany';
      (window as any).renderExperience();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    await callExportPDF();
    const pc = await getPrintContainer();
    expect(pc!.innerHTML).toContain('Berlin, Germany');
  });
});

// ─── SECTION 16: Awards & Certifications ────────────────────
describe('Resume Builder — Awards & Certifications', () => {
  it('awards section exists in editor', async () => {
    const exists = await page.evaluate(() =>
      !!document.getElementById('awardsList')
    );
    expect(exists).toBe(true);
  });

  it('can add an award entry', async () => {
    await page.evaluate(() => (window as any).addAward());
    const count = await page.evaluate(() =>
      document.querySelectorAll('.award-entry').length
    );
    expect(count).toBe(1);
  });

  it('awards render in preview', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.awards = [
        { title: 'Best Developer Award', issuer: 'TechCo', date: '2023', description: 'For outstanding contributions' }
      ];
      (window as any).renderAwards();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    const html = await getPreviewHTML();
    expect(html).toContain('Best Developer Award');
    expect(html).toContain('TechCo');
  });

  it('awards appear in PDF export', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.awards = [
        { title: 'AWS Certified', issuer: 'Amazon', date: '2022', description: '' }
      ];
      (window as any).renderAwards();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    await callExportPDF();
    const pc = await getPrintContainer();
    expect(pc!.innerHTML).toContain('AWS Certified');
  });

  it('awards round-trip through JSON export/import', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.awards = [
        { title: 'Test Award', issuer: 'Test Org', date: '2024', description: 'Test desc' }
      ];
      (window as any).renderAwards();
      (window as any).collectFormData();
    });
    const exported = await page.evaluate(() => JSON.stringify((window as any).resumeData));
    const parsed = JSON.parse(exported);
    expect(parsed.awards).toHaveLength(1);
    expect(parsed.awards[0].title).toBe('Test Award');
  });

  it('can remove an award entry', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.awards = [
        { title: 'Award 1', issuer: '', date: '', description: '' },
        { title: 'Award 2', issuer: '', date: '', description: '' }
      ];
      (window as any).renderAwards();
    });
    await page.evaluate(() => (window as any).removeAward(0));
    const result = await page.evaluate(() => (window as any).resumeData.awards);
    expect(result).toHaveLength(1);
    expect(result[0].title).toBe('Award 2');
  });
});

// ─── SECTION 17: Interests ──────────────────────────────────
describe('Resume Builder — Interests', () => {
  it('interests input exists in editor', async () => {
    const exists = await page.evaluate(() =>
      !!document.getElementById('interests')
    );
    expect(exists).toBe(true);
  });

  it('interests render as pill tags in preview', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.interests = 'Hiking, Photography, Open Source';
      const el = document.getElementById('interests') as HTMLInputElement;
      if (el) el.value = 'Hiking, Photography, Open Source';
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    const html = await getPreviewHTML();
    expect(html).toContain('Hiking');
    expect(html).toContain('Photography');
    expect(html).toContain('Open Source');
    expect(html).toContain('Interests');
  });

  it('empty interests do not render section', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.interests = '';
      const el = document.getElementById('interests') as HTMLInputElement;
      if (el) el.value = '';
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    const html = await getPreviewHTML();
    expect(html).not.toContain('Interests');
  });

  it('interests appear in PDF export', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.interests = 'Cooking, Travel';
      const el = document.getElementById('interests') as HTMLInputElement;
      if (el) el.value = 'Cooking, Travel';
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    await callExportPDF();
    const pc = await getPrintContainer();
    expect(pc!.innerHTML).toContain('Cooking');
    expect(pc!.innerHTML).toContain('Travel');
  });

  it('interests persist via localStorage', async () => {
    await page.evaluate(() => {
      (window as any).resumeData.interests = 'Chess, Music';
      const el = document.getElementById('interests') as HTMLInputElement;
      if (el) el.value = 'Chess, Music';
      (window as any).saveToStorage();
    });
    const stored = await page.evaluate(() => {
      const s = JSON.parse(localStorage.getItem('resume-builder')!);
      return s.data.interests;
    });
    expect(stored).toBe('Chess, Music');
  });
});

// ─── SECTION 18: Section Reordering ─────────────────────────
describe('Resume Builder — Section Reordering', () => {
  it('section order UI exists in editor', async () => {
    const exists = await page.evaluate(() =>
      !!document.getElementById('sectionOrderList')
    );
    expect(exists).toBe(true);
  });

  it('section order list renders all sections', async () => {
    await page.evaluate(() => (window as any).renderSectionOrder());
    const count = await page.evaluate(() =>
      document.querySelectorAll('#sectionOrderList > div').length
    );
    // 7 sections + 1 reset button
    expect(count).toBeGreaterThanOrEqual(7);
  });

  it('moving a section up changes order', async () => {
    await page.evaluate(() => {
      (window as any).moveSectionDown(0); // move summary down
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    const order = await page.evaluate(() => (window as any).sectionOrder);
    expect(order).toBeTruthy();
    expect(order[0]).toBe('experience');
    expect(order[1]).toBe('summary');
  });

  it('section order affects preview rendering', async () => {
    // Move experience to top
    await page.evaluate(() => {
      (window as any).sectionOrder = ['experience','summary','education','skills','awards','projects','interests'];
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    const html = await getPreviewHTML();
    const expIdx = html.indexOf('Experience');
    const sumIdx = html.indexOf('Summary');
    expect(expIdx).toBeLessThan(sumIdx);
  });

  it('reset restores default order', async () => {
    await page.evaluate(() => {
      (window as any).sectionOrder = ['interests','projects','awards','skills','education','experience','summary'];
      (window as any).resetSectionOrder();
    });
    const order = await page.evaluate(() => (window as any).sectionOrder);
    expect(order).toBeNull();
  });

  it('section order persists to localStorage', async () => {
    await page.evaluate(() => {
      (window as any).sectionOrder = ['skills','summary','experience','education','awards','projects','interests'];
      (window as any).saveToStorage();
    });
    const stored = await page.evaluate(() => {
      const s = JSON.parse(localStorage.getItem('resume-builder')!);
      return s.sectionOrder;
    });
    expect(stored).toEqual(['skills','summary','experience','education','awards','projects','interests']);
  });

  it('applySectionOrder preserves sections not in order', async () => {
    const result = await page.evaluate(() => {
      (window as any).sectionOrder = ['skills','summary'];
      return (window as any).applySectionOrder(['summary','experience','skills']);
    });
    expect(result).toEqual(['skills','summary','experience']);
    // Cleanup
    await page.evaluate(() => { (window as any).sectionOrder = null; });
  });

  it('section order works with sidebar layouts', async () => {
    await switchLayout('modern-left');
    await page.evaluate(() => {
      (window as any).resumeData.interests = 'Test Interest';
      const el = document.getElementById('interests') as HTMLInputElement;
      if (el) el.value = 'Test Interest';
      (window as any).sectionOrder = ['interests','skills'];
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 200)));
    const html = await getPreviewHTML();
    const interestsIdx = html.indexOf('Interests');
    const skillsIdx = html.indexOf('Skills');
    expect(interestsIdx).toBeLessThan(skillsIdx);
    // Cleanup
    await page.evaluate(() => { (window as any).sectionOrder = null; });
  });
});

// ─── SECTION 19: Native Pagination — Content Integrity ───────
describe('Resume Builder — Native Pagination Content Integrity', () => {
  async function setupMultiPageSidebar() {
    await page.evaluate(() => {
      (window as any).currentLayout = 'modern-left';
      const data = (window as any).resumeData;
      data.experience = [];
      for (let i = 0; i < 5; i++) {
        data.experience.push({
          company: `Company ${i + 1}`, role: `Role ${i + 1}`,
          dates: 'Jan 2020 — Dec 2021', location: 'New York', description: '',
          bullets: ['Led major initiatives', 'Built scalable systems', 'Mentored team members'],
        });
      }
      data.education = [
        { school: 'UC Berkeley', degree: 'B.S. Computer Science', dates: '2015 — 2019', notes: 'GPA: 3.8' },
        { school: 'Stanford University', degree: 'M.S. Data Science', dates: '2019 — 2021', notes: 'Magna Cum Laude' },
      ];
      data.projects = [
        { name: 'DevDash', description: 'Open-source developer dashboard.', tech: 'React, Go, GraphQL', link: 'github.com/alex/devdash' },
        { name: 'DataPipe', description: 'ETL pipeline framework.', tech: 'Python, FastAPI, Redis', link: 'github.com/alex/datapipe' },
      ];
      (window as any).renderExperience();
      (window as any).renderEducation();
      (window as any).renderProjects();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));
  }

  it('sidebar layout export has break-inside:avoid on all entries', async () => {
    await setupMultiPageSidebar();
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.entryCount).toBeGreaterThan(0);
    expect(clone!.entriesWithBreak).toBe(clone!.entryCount);
  });

  it('sidebar layout export has break-after:avoid on section titles', async () => {
    await setupMultiPageSidebar();
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.sectionCount).toBeGreaterThan(0);
    expect(clone!.sectionsWithTitleBreak).toBe(clone!.sectionCount);
  });

  it('sidebar layout creates fixed-position background for multi-page', async () => {
    await setupMultiPageSidebar();
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.hasSidebarBg).toBe(true);
    expect(clone!.sidebarBgPosition).toBe('fixed');
    expect(clone!.sidebarBgBackground).toBeTruthy();
  });

  it('single-column layout has no sidebar background', async () => {
    await page.evaluate(() => {
      (window as any).currentLayout = 'single';
      const data = (window as any).resumeData;
      data.experience = [];
      for (let i = 0; i < 8; i++) {
        data.experience.push({
          company: `Company ${i + 1}`, role: `Role ${i + 1}`,
          dates: '2020 — 2021', location: '', description: '',
          bullets: ['Led initiatives that delivered results', 'Built scalable solutions', 'Collaborated across teams'],
        });
      }
      (window as any).renderExperience();
      (window as any)._render();
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 300)));
    await callExportPDF();
    const clone = await getResumeClone();
    expect(clone!.hasSidebarBg).toBe(false);
    expect(clone!.entriesWithBreak).toBe(clone!.entryCount);
  });

  it('all content is present in the single flowing clone', async () => {
    await setupMultiPageSidebar();
    await callExportPDF();
    const pc = await getPrintContainer();
    expect(pc!.innerHTML).toContain('Company 1');
    expect(pc!.innerHTML).toContain('Company 5');
    expect(pc!.innerHTML).toContain('UC Berkeley');
    expect(pc!.innerHTML).toContain('DevDash');
    expect(pc!.innerHTML).toContain('DataPipe');
  });
});
