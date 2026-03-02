import { describe, it, expect, beforeAll, afterAll, beforeEach, afterEach } from 'vitest';
import puppeteer, { Browser, Page } from 'puppeteer';
import path from 'path';

const PDF_KIT_PATH = path.resolve(__dirname, '../../../public/tools/pdf-kit.html');
const FILE_URL = `file://${PDF_KIT_PATH}`;

let browser: Browser;
let page: Page;

beforeAll(async () => {
  browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-dev-shm-usage'] });
  page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });
});

afterAll(async () => {
  await browser.close();
});

beforeEach(async () => {
  await page.goto(FILE_URL, { waitUntil: 'domcontentloaded' });
  await page.evaluate(() => new Promise(r => setTimeout(r, 500)));
});

// ─── Helpers ────────────────────────────────────────────────

async function switchTool(toolName: string) {
  await page.evaluate((name) => (window as any).switchTool(name), toolName);
  await page.evaluate(() => new Promise(r => setTimeout(r, 100)));
}

// Pre-seed compress.sampleCanvas to skip pdf.js CDN loading during tests
// Uses addScriptTag so the code runs in the page's global scope (accesses const `compress`)
async function seedCompressSample() {
  await page.addScriptTag({
    content: `compress.sampleCanvas = document.createElement('canvas'); compress.samplePageSize = { width: 612, height: 792 };`
  });
}

// Helper to create a PDF in page context and call a handler with it
async function createPdfAndCall(handler: string, filename: string, pageCount = 1) {
  await page.evaluate(async (h, fn, pc) => {
    const doc = await (window as any).PDFLib.PDFDocument.create();
    for (let i = 0; i < pc; i++) doc.addPage([612, 792]);
    const bytes = await doc.save();
    const blob = new Blob([bytes], { type: 'application/pdf' });
    const file = new File([blob], fn, { type: 'application/pdf' });
    const dt = new DataTransfer();
    dt.items.add(file);
    await (window as any)[h](dt.files);
  }, handler, filename, pageCount);
  await page.evaluate(() => new Promise(r => setTimeout(r, 300)));
}

// Helper to create multiple PDFs and call a handler
async function createMultiplePdfsAndCall(handler: string, count: number) {
  await page.evaluate(async (h, c) => {
    const doc = await (window as any).PDFLib.PDFDocument.create();
    doc.addPage([612, 792]);
    const bytes = await doc.save();
    const dt = new DataTransfer();
    for (let i = 0; i < c; i++) {
      const blob = new Blob([bytes], { type: 'application/pdf' });
      dt.items.add(new File([blob], `file${i}.pdf`, { type: 'application/pdf' }));
    }
    await (window as any)[h](dt.files);
  }, handler, count);
  await page.evaluate(() => new Promise(r => setTimeout(r, 300)));
}

// ═══════════════════════════════════════════════════════════
//  1. PAGE LOAD & LIBRARY INITIALIZATION
// ═══════════════════════════════════════════════════════════

describe('1. Page Load & Libraries', () => {
  it('1.1 loads without page errors', async () => {
    const errors: string[] = [];
    page.on('pageerror', err => errors.push(err.message));
    await page.reload({ waitUntil: 'domcontentloaded' });
    await page.evaluate(() => new Promise(r => setTimeout(r, 500)));
    expect(errors).toEqual([]);
  });

  it('1.2 has PDFLib loaded', async () => {
    const hasPDFLib = await page.evaluate(() => typeof (window as any).PDFLib !== 'undefined');
    expect(hasPDFLib).toBe(true);
  });

  it('1.3 has PDFLib.PDFDocument available', async () => {
    const hasPDFDocument = await page.evaluate(() => typeof (window as any).PDFLib?.PDFDocument !== 'undefined');
    expect(hasPDFDocument).toBe(true);
  });

  it('1.4 loads pdf-lib from cdnjs (not unpkg)', async () => {
    const src = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      return scripts.map(s => s.getAttribute('src'));
    });
    const pdfLibSrc = src.find(s => s?.includes('pdf-lib'));
    expect(pdfLibSrc).toContain('cdnjs.cloudflare.com');
    expect(pdfLibSrc).not.toContain('unpkg.com');
  });

  it('1.5 has page title', async () => {
    const title = await page.title();
    expect(title).toContain('PDF Kit');
  });

  it('1.6 has header with PDF Kit branding', async () => {
    const headerText = await page.evaluate(() => {
      const h1 = document.querySelector('h1');
      return h1?.textContent?.trim();
    });
    expect(headerText).toContain('PDF');
    expect(headerText).toContain('Kit');
  });

  it('1.7 has privacy notice', async () => {
    const bodyText = await page.evaluate(() => document.body.textContent?.toLowerCase() || '');
    expect(bodyText).toContain('client-side');
  });
});

// ═══════════════════════════════════════════════════════════
//  2. TAB NAVIGATION
// ═══════════════════════════════════════════════════════════

describe('2. Tab Navigation', () => {
  it('2.1 has all 6 tool tabs', async () => {
    const tabs = await page.evaluate(() => {
      const btns = document.querySelectorAll('.tool-tab');
      return Array.from(btns).map(b => b.getAttribute('data-tool'));
    });
    expect(tabs).toEqual(['compress', 'merge', 'split', 'pdftoimg', 'imgtopdf', 'unlock']);
  });

  it('2.2 compress is active by default', async () => {
    const active = await page.evaluate(() => {
      const btn = document.querySelector('.tool-tab.active');
      return btn?.getAttribute('data-tool');
    });
    expect(active).toBe('compress');
  });

  it('2.3 compress panel is visible by default', async () => {
    const visible = await page.evaluate(() =>
      !document.getElementById('tool-compress')!.classList.contains('hidden'));
    expect(visible).toBe(true);
  });

  it('2.4 other panels are hidden by default', async () => {
    const hiddenTools = ['merge', 'split', 'pdftoimg', 'imgtopdf', 'unlock'];
    for (const tool of hiddenTools) {
      const hidden = await page.evaluate((t) =>
        document.getElementById('tool-' + t)!.classList.contains('hidden'), tool);
      expect(hidden).toBe(true);
    }
  });

  it('2.5 switching tabs shows correct panel', async () => {
    const tools = ['merge', 'split', 'pdftoimg', 'imgtopdf', 'unlock', 'compress'];
    for (const tool of tools) {
      await switchTool(tool);
      const isVisible = await page.evaluate((t) =>
        !document.getElementById('tool-' + t)!.classList.contains('hidden'), tool);
      expect(isVisible).toBe(true);
    }
  });

  it('2.6 switching tabs hides previous panel', async () => {
    await switchTool('merge');
    const compressHidden = await page.evaluate(() =>
      document.getElementById('tool-compress')!.classList.contains('hidden'));
    expect(compressHidden).toBe(true);
  });

  it('2.7 active tab gets .active class', async () => {
    await switchTool('split');
    const activeTab = await page.evaluate(() =>
      document.querySelector('.tool-tab.active')?.getAttribute('data-tool'));
    expect(activeTab).toBe('split');
  });

  it('2.8 only one tab is active at a time', async () => {
    await switchTool('merge');
    const activeCount = await page.evaluate(() =>
      document.querySelectorAll('.tool-tab.active').length);
    expect(activeCount).toBe(1);
  });
});

// ═══════════════════════════════════════════════════════════
//  3. DROP ZONES
// ═══════════════════════════════════════════════════════════

describe('3. Drop Zones', () => {
  it('3.1 compress has drop zone', async () => {
    const exists = await page.evaluate(() => !!document.getElementById('compressDropZone'));
    expect(exists).toBe(true);
  });

  it('3.2 merge has drop zone', async () => {
    const exists = await page.evaluate(() => !!document.getElementById('mergeDropZone'));
    expect(exists).toBe(true);
  });

  it('3.3 split has drop zone', async () => {
    const exists = await page.evaluate(() => !!document.getElementById('splitDropZone'));
    expect(exists).toBe(true);
  });

  it('3.4 pdfToImg has drop zone', async () => {
    const exists = await page.evaluate(() => !!document.getElementById('pdfToImgDropZone'));
    expect(exists).toBe(true);
  });

  it('3.5 imgToPdf has drop zone', async () => {
    const exists = await page.evaluate(() => !!document.getElementById('imgToPdfDropZone'));
    expect(exists).toBe(true);
  });

  it('3.6 unlock has drop zone', async () => {
    const exists = await page.evaluate(() => !!document.getElementById('unlockDropZone'));
    expect(exists).toBe(true);
  });

  it('3.7 each drop zone has a file input', async () => {
    const inputs = ['compressInput', 'mergeInput', 'splitInput', 'pdfToImgInput', 'imgToPdfInput', 'unlockInput'];
    for (const id of inputs) {
      const exists = await page.evaluate((inputId) => !!document.getElementById(inputId), id);
      expect(exists).toBe(true);
    }
  });

  it('3.8 PDF inputs accept application/pdf', async () => {
    const pdfInputs = ['compressInput', 'mergeInput', 'splitInput', 'pdfToImgInput', 'unlockInput'];
    for (const id of pdfInputs) {
      const accept = await page.evaluate((inputId) =>
        document.getElementById(inputId)?.getAttribute('accept'), id);
      expect(accept).toBe('application/pdf');
    }
  });

  it('3.9 image input accepts image/*', async () => {
    const accept = await page.evaluate(() =>
      document.getElementById('imgToPdfInput')?.getAttribute('accept'));
    expect(accept).toBe('image/*');
  });

  it('3.10 compress input accepts multiple files', async () => {
    const multiple = await page.evaluate(() =>
      document.getElementById('compressInput')?.hasAttribute('multiple'));
    expect(multiple).toBe(true);
  });

  it('3.11 merge input accepts multiple files', async () => {
    const multiple = await page.evaluate(() =>
      document.getElementById('mergeInput')?.hasAttribute('multiple'));
    expect(multiple).toBe(true);
  });

  it('3.12 imgToPdf input accepts multiple files', async () => {
    const multiple = await page.evaluate(() =>
      document.getElementById('imgToPdfInput')?.hasAttribute('multiple'));
    expect(multiple).toBe(true);
  });
});

// ═══════════════════════════════════════════════════════════
//  4. UTILITY FUNCTIONS
// ═══════════════════════════════════════════════════════════

describe('4. Utility Functions', () => {
  it('4.1 formatSize handles bytes', async () => {
    const result = await page.evaluate(() => (window as any).formatSize(500));
    expect(result).toBe('500 B');
  });

  it('4.2 formatSize handles kilobytes', async () => {
    const result = await page.evaluate(() => (window as any).formatSize(2048));
    expect(result).toBe('2.0 KB');
  });

  it('4.3 formatSize handles megabytes', async () => {
    const result = await page.evaluate(() => (window as any).formatSize(1048576));
    expect(result).toBe('1.00 MB');
  });

  it('4.4 isPdf identifies PDF by type', async () => {
    const result = await page.evaluate(() => (window as any).isPdf({ type: 'application/pdf', name: 'test.txt' }));
    expect(result).toBe(true);
  });

  it('4.5 isPdf identifies PDF by extension', async () => {
    const result = await page.evaluate(() => (window as any).isPdf({ type: '', name: 'test.pdf' }));
    expect(result).toBe(true);
  });

  it('4.6 isPdf rejects non-PDF', async () => {
    const result = await page.evaluate(() => (window as any).isPdf({ type: 'image/png', name: 'test.png' }));
    expect(result).toBe(false);
  });

  it('4.7 isPdf is case-insensitive for extension', async () => {
    const result = await page.evaluate(() => (window as any).isPdf({ type: '', name: 'test.PDF' }));
    expect(result).toBe(true);
  });

  it('4.8 dataUrlToUint8Array converts correctly', async () => {
    const result = await page.evaluate(() => {
      const arr = (window as any).dataUrlToUint8Array('data:text/plain;base64,SGVsbG8=');
      return String.fromCharCode(...arr);
    });
    expect(result).toBe('Hello');
  });

  it('4.9 setButtonLoading enables loading state', async () => {
    const result = await page.evaluate(() => {
      const btn = document.createElement('button');
      btn.innerText = 'Test';
      (window as any).setButtonLoading(btn, true);
      return { disabled: btn.disabled, text: btn.innerText, hasOpacity: btn.classList.contains('opacity-60') };
    });
    expect(result.disabled).toBe(true);
    expect(result.text).toBe('Processing...');
    expect(result.hasOpacity).toBe(true);
  });

  it('4.10 setButtonLoading restores normal state', async () => {
    const result = await page.evaluate(() => {
      const btn = document.createElement('button');
      (window as any).setButtonLoading(btn, true);
      (window as any).setButtonLoading(btn, false, 'Original');
      return { disabled: btn.disabled, text: btn.innerText, hasOpacity: btn.classList.contains('opacity-60') };
    });
    expect(result.disabled).toBe(false);
    expect(result.text).toBe('Original');
    expect(result.hasOpacity).toBe(false);
  });

  it('4.11 formatSize handles zero bytes', async () => {
    const result = await page.evaluate(() => (window as any).formatSize(0));
    expect(result).toBe('0 B');
  });

  it('4.12 formatSize handles large files', async () => {
    const result = await page.evaluate(() => (window as any).formatSize(5 * 1024 * 1024));
    expect(result).toBe('5.00 MB');
  });
});

// ═══════════════════════════════════════════════════════════
//  5. COMPRESS TOOL — UI
// ═══════════════════════════════════════════════════════════

describe('5. Compress Tool — UI', () => {
  it('5.1 compress settings visible by default', async () => {
    const qualityRange = await page.evaluate(() => !!document.getElementById('qualityRange'));
    const scaleRange = await page.evaluate(() => !!document.getElementById('scaleRange'));
    expect(qualityRange).toBe(true);
    expect(scaleRange).toBe(true);
  });

  it('5.2 quality slider default is 50', async () => {
    const val = await page.evaluate(() =>
      (document.getElementById('qualityRange') as HTMLInputElement).value);
    expect(val).toBe('50');
  });

  it('5.3 scale slider default is 50', async () => {
    const val = await page.evaluate(() =>
      (document.getElementById('scaleRange') as HTMLInputElement).value);
    expect(val).toBe('50');
  });

  it('5.4 quality label updates when slider changes', async () => {
    await page.evaluate(() => {
      const range = document.getElementById('qualityRange') as HTMLInputElement;
      range.value = '80';
      range.dispatchEvent(new Event('input'));
    });
    const label = await page.evaluate(() =>
      document.getElementById('qualityVal')!.innerText);
    expect(label).toBe('80%');
  });

  it('5.5 scale label updates when slider changes', async () => {
    await page.evaluate(() => {
      const range = document.getElementById('scaleRange') as HTMLInputElement;
      range.value = '75';
      range.dispatchEvent(new Event('input'));
    });
    const label = await page.evaluate(() =>
      document.getElementById('scaleVal')!.innerText);
    expect(label).toBe('75%');
  });

  it('5.6 file list hidden initially', async () => {
    const hidden = await page.evaluate(() =>
      document.getElementById('compressFileList')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('5.7 actions hidden initially', async () => {
    const hidden = await page.evaluate(() =>
      document.getElementById('compressActions')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('5.8 estimate panel hidden initially', async () => {
    const hidden = await page.evaluate(() =>
      document.getElementById('estimatePanel')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('5.9 compress_handleFiles adds PDF and shows file list', async () => {
    // Pre-seed sampleCanvas to skip pdf.js CDN loading during tests
    await seedCompressSample();
    await createPdfAndCall('compress_handleFiles', 'test.pdf');
    const listVisible = await page.evaluate(() =>
      !document.getElementById('compressFileList')!.classList.contains('hidden'));
    expect(listVisible).toBe(true);
    const listHtml = await page.evaluate(() =>
      document.getElementById('compressFileListBody')!.innerHTML);
    expect(listHtml).toContain('test.pdf');
  });

  it('5.10 compress shows actions after adding file', async () => {
    await seedCompressSample();
    await createPdfAndCall('compress_handleFiles', 'test.pdf');
    const actionsVisible = await page.evaluate(() =>
      !document.getElementById('compressActions')!.classList.contains('hidden'));
    expect(actionsVisible).toBe(true);
  });

  it('5.11 compress_clearAll hides file list', async () => {
    await seedCompressSample();
    await createPdfAndCall('compress_handleFiles', 'test.pdf');
    await page.evaluate(() => (window as any).compress_clearAll());
    const listHidden = await page.evaluate(() =>
      document.getElementById('compressFileList')!.classList.contains('hidden'));
    expect(listHidden).toBe(true);
  });

  it('5.12 compress rejects non-PDF files', async () => {
    await page.evaluate(async () => {
      const file = new File(['text content'], 'readme.txt', { type: 'text/plain' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).compress_handleFiles(dt.files);
    });
    const listHidden = await page.evaluate(() =>
      document.getElementById('compressFileList')!.classList.contains('hidden'));
    expect(listHidden).toBe(true);
  });

  it('5.13 compress handles multiple files', async () => {
    await seedCompressSample();
    await createMultiplePdfsAndCall('compress_handleFiles', 3);
    const itemCount = await page.evaluate(() =>
      document.getElementById('compressFileListBody')!.children.length);
    expect(itemCount).toBe(3);
  });

  it('5.14 compress_remove removes a file from list', async () => {
    await seedCompressSample();
    await createMultiplePdfsAndCall('compress_handleFiles', 3);
    await page.evaluate(() => (window as any).compress_remove(1));
    const itemCount = await page.evaluate(() =>
      document.getElementById('compressFileListBody')!.children.length);
    expect(itemCount).toBe(2);
  });
});

// ═══════════════════════════════════════════════════════════
//  6. MERGE TOOL
// ═══════════════════════════════════════════════════════════

describe('6. Merge Tool', () => {
  it('6.1 merge list hidden initially', async () => {
    await switchTool('merge');
    const hidden = await page.evaluate(() =>
      document.getElementById('mergeList')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('6.2 merge actions hidden initially', async () => {
    await switchTool('merge');
    const hidden = await page.evaluate(() =>
      document.getElementById('mergeActions')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('6.3 merge_handleFiles shows list after adding files', async () => {
    await switchTool('merge');
    await createPdfAndCall('merge_handleFiles', 'doc.pdf');
    const listVisible = await page.evaluate(() =>
      !document.getElementById('mergeList')!.classList.contains('hidden'));
    expect(listVisible).toBe(true);
  });

  it('6.4 merge list shows file names', async () => {
    await switchTool('merge');
    await createPdfAndCall('merge_handleFiles', 'mydocument.pdf');
    const html = await page.evaluate(() =>
      document.getElementById('mergeListBody')!.innerHTML);
    expect(html).toContain('mydocument.pdf');
  });

  it('6.5 merge shows numbered items', async () => {
    await switchTool('merge');
    await createMultiplePdfsAndCall('merge_handleFiles', 3);
    const itemCount = await page.evaluate(() =>
      document.getElementById('mergeListBody')!.children.length);
    expect(itemCount).toBe(3);
  });

  it('6.6 merge_clear hides list', async () => {
    await switchTool('merge');
    await createPdfAndCall('merge_handleFiles', 'test.pdf');
    await page.evaluate(() => (window as any).merge_clear());
    const listHidden = await page.evaluate(() =>
      document.getElementById('mergeList')!.classList.contains('hidden'));
    expect(listHidden).toBe(true);
  });

  it('6.7 merge items are draggable', async () => {
    await switchTool('merge');
    await createPdfAndCall('merge_handleFiles', 'test.pdf');
    const draggable = await page.evaluate(() =>
      document.querySelectorAll('#mergeListBody [draggable]').length);
    expect(draggable).toBeGreaterThan(0);
  });

  it('6.8 merge rejects non-PDF files', async () => {
    await switchTool('merge');
    await page.evaluate(() => {
      const file = new File(['text content'], 'readme.txt', { type: 'text/plain' });
      const dt = new DataTransfer();
      dt.items.add(file);
      (window as any).merge_handleFiles(dt.files);
    });
    const listHidden = await page.evaluate(() =>
      document.getElementById('mergeList')!.classList.contains('hidden'));
    expect(listHidden).toBe(true);
  });

  it('6.9 merge_run produces merged PDF', async () => {
    await switchTool('merge');
    await page.evaluate(() => {
      (window as any).__lastDownload = null;
      (window as any).downloadBlob = (blob: Blob, name: string) => {
        (window as any).__lastDownload = { size: blob.size, name };
      };
    });

    await page.evaluate(async () => {
      const doc1 = await (window as any).PDFLib.PDFDocument.create();
      doc1.addPage([612, 792]);
      const bytes1 = await doc1.save();
      const doc2 = await (window as any).PDFLib.PDFDocument.create();
      doc2.addPage([612, 792]);
      const bytes2 = await doc2.save();
      const dt = new DataTransfer();
      dt.items.add(new File([new Blob([bytes1], { type: 'application/pdf' })], 'a.pdf', { type: 'application/pdf' }));
      dt.items.add(new File([new Blob([bytes2], { type: 'application/pdf' })], 'b.pdf', { type: 'application/pdf' }));
      (window as any).merge_handleFiles(dt.files);
      await (window as any).merge_run();
    });

    const download = await page.evaluate(() => (window as any).__lastDownload);
    expect(download).not.toBeNull();
    expect(download.name).toBe('merged.pdf');
    expect(download.size).toBeGreaterThan(0);
  });
});

// ═══════════════════════════════════════════════════════════
//  7. SPLIT TOOL
// ═══════════════════════════════════════════════════════════

describe('7. Split Tool', () => {
  it('7.1 split controls hidden initially', async () => {
    await switchTool('split');
    const hidden = await page.evaluate(() =>
      document.getElementById('splitControls')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('7.2 split actions hidden initially', async () => {
    await switchTool('split');
    const hidden = await page.evaluate(() =>
      document.getElementById('splitActions')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('7.3 split_handleFiles shows controls', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'multi.pdf', 3);
    const controlsVisible = await page.evaluate(() =>
      !document.getElementById('splitControls')!.classList.contains('hidden'));
    expect(controlsVisible).toBe(true);
  });

  it('7.4 split shows page grid with correct count', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'test.pdf', 5);
    const gridButtons = await page.evaluate(() =>
      document.getElementById('splitPageGrid')!.children.length);
    expect(gridButtons).toBe(5);
  });

  it('7.5 split shows file info with name and page count', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'myfile.pdf', 2);
    const info = await page.evaluate(() =>
      document.getElementById('splitInfo')!.innerText);
    expect(info).toContain('myfile.pdf');
    expect(info).toContain('2 pages');
  });

  it('7.6 split_toggle selects page (visual check)', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'test.pdf', 3);
    await page.evaluate(() => (window as any).split_toggle(0));
    // First button should have violet styling when selected
    const firstBtnClasses = await page.evaluate(() =>
      document.getElementById('splitPageGrid')!.children[0].className);
    expect(firstBtnClasses).toContain('border-violet-500');
  });

  it('7.7 split_toggle deselects page', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'test.pdf', 3);
    await page.evaluate(() => {
      (window as any).split_toggle(0);
      (window as any).split_toggle(0);
    });
    const firstBtnClasses = await page.evaluate(() =>
      document.getElementById('splitPageGrid')!.children[0].className);
    expect(firstBtnClasses).toContain('border-slate-200');
  });

  it('7.8 split_selectAll selects all pages', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'test.pdf', 4);
    await page.evaluate(() => (window as any).split_selectAll());
    const selectedCount = await page.evaluate(() => {
      const grid = document.getElementById('splitPageGrid')!;
      return Array.from(grid.children).filter(c => c.className.includes('border-violet-500')).length;
    });
    expect(selectedCount).toBe(4);
  });

  it('7.9 split_selectFromInput parses range correctly', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'test.pdf', 10);
    await page.evaluate(() => {
      (document.getElementById('splitRangeInput') as HTMLInputElement).value = '1-3, 5, 8-10';
      (window as any).split_selectFromInput();
    });
    const selectedCount = await page.evaluate(() => {
      const grid = document.getElementById('splitPageGrid')!;
      return Array.from(grid.children).filter(c => c.className.includes('border-violet-500')).length;
    });
    // 1-3 = 3, 5 = 1, 8-10 = 3 → total 7
    expect(selectedCount).toBe(7);
  });

  it('7.10 split_clear hides controls', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'test.pdf', 2);
    await page.evaluate(() => (window as any).split_clear());
    const controlsHidden = await page.evaluate(() =>
      document.getElementById('splitControls')!.classList.contains('hidden'));
    expect(controlsHidden).toBe(true);
  });

  it('7.11 split_extractSelected does nothing with no selection', async () => {
    await switchTool('split');
    await createPdfAndCall('split_handleFiles', 'test.pdf', 2);
    // Should not throw
    await page.evaluate(() => (window as any).split_extractSelected());
  });

  it('7.12 split_extractSelected produces PDF for selected pages', async () => {
    await switchTool('split');
    await page.evaluate(() => {
      (window as any).__lastDownload = null;
      (window as any).downloadBlob = (blob: Blob, name: string) => {
        (window as any).__lastDownload = { size: blob.size, name };
      };
    });

    await page.evaluate(async () => {
      const doc = await (window as any).PDFLib.PDFDocument.create();
      for (let i = 0; i < 3; i++) doc.addPage([612, 792]);
      const bytes = await doc.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const file = new File([blob], 'source.pdf', { type: 'application/pdf' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).split_handleFiles(dt.files);
      (window as any).split_toggle(0);
      (window as any).split_toggle(2);
      await (window as any).split_extractSelected();
    });

    const download = await page.evaluate(() => (window as any).__lastDownload);
    expect(download).not.toBeNull();
    expect(download.name).toContain('source-pages-1,3.pdf');
    expect(download.size).toBeGreaterThan(0);
  });

  it('7.13 split rejects non-PDF files', async () => {
    await switchTool('split');
    await page.evaluate(async () => {
      const file = new File(['text content'], 'readme.txt', { type: 'text/plain' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).split_handleFiles(dt.files);
    });
    const controlsHidden = await page.evaluate(() =>
      document.getElementById('splitControls')!.classList.contains('hidden'));
    expect(controlsHidden).toBe(true);
  });
});

// ═══════════════════════════════════════════════════════════
//  8. PDF TO IMAGES TOOL
// ═══════════════════════════════════════════════════════════

describe('8. PDF to Images Tool', () => {
  it('8.1 controls hidden initially', async () => {
    await switchTool('pdftoimg');
    const hidden = await page.evaluate(() =>
      document.getElementById('pdfToImgControls')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('8.2 has format selector with PNG and JPG', async () => {
    await switchTool('pdftoimg');
    const options = await page.evaluate(() => {
      const sel = document.getElementById('pdfToImgFormat') as HTMLSelectElement;
      return Array.from(sel.options).map(o => o.value);
    });
    expect(options).toContain('png');
    expect(options).toContain('jpg');
  });

  it('8.3 has scale selector with 1x, 2x, 3x', async () => {
    await switchTool('pdftoimg');
    const options = await page.evaluate(() => {
      const sel = document.getElementById('pdfToImgScale') as HTMLSelectElement;
      return Array.from(sel.options).map(o => o.value);
    });
    expect(options).toEqual(['1', '2', '3']);
  });

  it('8.4 default scale is 2x', async () => {
    await switchTool('pdftoimg');
    const val = await page.evaluate(() =>
      (document.getElementById('pdfToImgScale') as HTMLSelectElement).value);
    expect(val).toBe('2');
  });

  it('8.5 pdftoimg_clear resets state and hides controls', async () => {
    await switchTool('pdftoimg');
    // Manually show the controls to test clear
    await page.evaluate(() => {
      document.getElementById('pdfToImgControls')!.classList.remove('hidden');
      document.getElementById('pdfToImgActions')!.classList.remove('hidden');
    });
    await page.evaluate(() => (window as any).pdftoimg_clear());
    const controlsHidden = await page.evaluate(() =>
      document.getElementById('pdfToImgControls')!.classList.contains('hidden'));
    expect(controlsHidden).toBe(true);
  });
});

// ═══════════════════════════════════════════════════════════
//  9. IMAGES TO PDF TOOL
// ═══════════════════════════════════════════════════════════

describe('9. Images to PDF Tool', () => {
  it('9.1 controls hidden initially', async () => {
    await switchTool('imgtopdf');
    const hidden = await page.evaluate(() =>
      document.getElementById('imgToPdfList')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('9.2 has page size selector with fit, a4, letter', async () => {
    await switchTool('imgtopdf');
    const options = await page.evaluate(() => {
      const sel = document.getElementById('imgToPdfPageSize') as HTMLSelectElement;
      return Array.from(sel.options).map(o => o.value);
    });
    expect(options).toContain('fit');
    expect(options).toContain('a4');
    expect(options).toContain('letter');
  });

  it('9.3 imgtopdf_handleFiles adds images and shows list', async () => {
    await switchTool('imgtopdf');
    await page.evaluate(async () => {
      const c = document.createElement('canvas');
      c.width = 100; c.height = 100;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = 'red';
      ctx.fillRect(0, 0, 100, 100);
      const blob: Blob = await new Promise(r => c.toBlob(b => r(b!), 'image/png'));
      const file = new File([blob], 'test.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).imgtopdf_handleFiles(dt.files);
    });

    const gridVisible = await page.evaluate(() =>
      !document.getElementById('imgToPdfList')!.classList.contains('hidden'));
    expect(gridVisible).toBe(true);
  });

  it('9.4 shows image thumbnails in grid', async () => {
    await switchTool('imgtopdf');
    await page.evaluate(async () => {
      const c = document.createElement('canvas');
      c.width = 100; c.height = 100;
      const ctx = c.getContext('2d')!;
      ctx.fillRect(0, 0, 100, 100);
      const blob: Blob = await new Promise(r => c.toBlob(b => r(b!), 'image/png'));
      const dt = new DataTransfer();
      for (let i = 0; i < 3; i++) {
        dt.items.add(new File([blob], `img${i}.png`, { type: 'image/png' }));
      }
      await (window as any).imgtopdf_handleFiles(dt.files);
    });

    const gridCount = await page.evaluate(() =>
      document.getElementById('imgToPdfGrid')!.children.length);
    expect(gridCount).toBe(3);
  });

  it('9.5 imgtopdf_clear removes all images', async () => {
    await switchTool('imgtopdf');
    await page.evaluate(async () => {
      const c = document.createElement('canvas');
      c.width = 100; c.height = 100;
      const ctx = c.getContext('2d')!;
      ctx.fillRect(0, 0, 100, 100);
      const blob: Blob = await new Promise(r => c.toBlob(b => r(b!), 'image/png'));
      const file = new File([blob], 'test.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).imgtopdf_handleFiles(dt.files);
      (window as any).imgtopdf_clear();
    });

    const listHidden = await page.evaluate(() =>
      document.getElementById('imgToPdfList')!.classList.contains('hidden'));
    expect(listHidden).toBe(true);
  });

  it('9.6 imgtopdf_run creates PDF from images', async () => {
    await switchTool('imgtopdf');
    await page.evaluate(() => {
      (window as any).__lastDownload = null;
      (window as any).downloadBlob = (blob: Blob, name: string) => {
        (window as any).__lastDownload = { size: blob.size, name };
      };
    });

    await page.evaluate(async () => {
      const c = document.createElement('canvas');
      c.width = 200; c.height = 300;
      const ctx = c.getContext('2d')!;
      ctx.fillStyle = '#0000ff';
      ctx.fillRect(0, 0, 200, 300);
      const blob: Blob = await new Promise(r => c.toBlob(b => r(b!), 'image/png'));
      const file = new File([blob], 'test.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).imgtopdf_handleFiles(dt.files);
      await (window as any).imgtopdf_run();
    });

    const download = await page.evaluate(() => (window as any).__lastDownload);
    expect(download).not.toBeNull();
    expect(download.name).toBe('images-combined.pdf');
    expect(download.size).toBeGreaterThan(0);
  });

  it('9.7 images are draggable', async () => {
    await switchTool('imgtopdf');
    await page.evaluate(async () => {
      const c = document.createElement('canvas');
      c.width = 100; c.height = 100;
      const ctx = c.getContext('2d')!;
      ctx.fillRect(0, 0, 100, 100);
      const blob: Blob = await new Promise(r => c.toBlob(b => r(b!), 'image/png'));
      const file = new File([blob], 'test.png', { type: 'image/png' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).imgtopdf_handleFiles(dt.files);
    });

    const draggable = await page.evaluate(() =>
      document.querySelectorAll('#imgToPdfGrid [draggable]').length);
    expect(draggable).toBeGreaterThan(0);
  });

  it('9.8 rejects non-image files', async () => {
    await switchTool('imgtopdf');
    await page.evaluate(async () => {
      const file = new File(['not an image'], 'test.txt', { type: 'text/plain' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).imgtopdf_handleFiles(dt.files);
    });
    const listHidden = await page.evaluate(() =>
      document.getElementById('imgToPdfList')!.classList.contains('hidden'));
    expect(listHidden).toBe(true);
  });
});

// ═══════════════════════════════════════════════════════════
//  10. UNLOCK TOOL
// ═══════════════════════════════════════════════════════════

describe('10. Unlock Tool', () => {
  it('10.1 controls hidden initially', async () => {
    await switchTool('unlock');
    const hidden = await page.evaluate(() =>
      document.getElementById('unlockControls')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('10.2 actions hidden initially', async () => {
    await switchTool('unlock');
    const hidden = await page.evaluate(() =>
      document.getElementById('unlockActions')!.classList.contains('hidden'));
    expect(hidden).toBe(true);
  });

  it('10.3 unlock_handleFiles shows controls for unprotected PDF', async () => {
    await switchTool('unlock');
    await createPdfAndCall('unlock_handleFiles', 'test.pdf');
    const controlsVisible = await page.evaluate(() =>
      !document.getElementById('unlockControls')!.classList.contains('hidden'));
    expect(controlsVisible).toBe(true);
  });

  it('10.4 detects unprotected PDF — no password needed', async () => {
    await switchTool('unlock');
    await createPdfAndCall('unlock_handleFiles', 'test.pdf');
    const html = await page.evaluate(() =>
      document.getElementById('unlockPasswordSection')!.innerHTML.toLowerCase());
    expect(html).toContain('no user password');
  });

  it('10.5 shows file info', async () => {
    await switchTool('unlock');
    await createPdfAndCall('unlock_handleFiles', 'locked.pdf');
    const info = await page.evaluate(() =>
      document.getElementById('unlockInfo')!.innerText);
    expect(info).toContain('locked.pdf');
  });

  it('10.6 unlock_clear hides controls', async () => {
    await switchTool('unlock');
    await createPdfAndCall('unlock_handleFiles', 'test.pdf');
    await page.evaluate(() => (window as any).unlock_clear());
    const controlsHidden = await page.evaluate(() =>
      document.getElementById('unlockControls')!.classList.contains('hidden'));
    expect(controlsHidden).toBe(true);
  });

  it('10.7 unlock_togglePw toggles password visibility', async () => {
    await switchTool('unlock');
    const initialType = await page.evaluate(() =>
      (document.getElementById('unlockPassword') as HTMLInputElement)?.type);
    expect(initialType).toBe('password');

    await page.evaluate(() => (window as any).unlock_togglePw());
    const toggledType = await page.evaluate(() =>
      (document.getElementById('unlockPassword') as HTMLInputElement)?.type);
    expect(toggledType).toBe('text');
  });

  it('10.8 unlock_run downloads unlocked PDF for unprotected file', async () => {
    await switchTool('unlock');
    await page.evaluate(() => {
      (window as any).__lastDownload = null;
      (window as any).downloadBlob = (blob: Blob, name: string) => {
        (window as any).__lastDownload = { size: blob.size, name };
      };
    });

    await page.evaluate(async () => {
      const doc = await (window as any).PDFLib.PDFDocument.create();
      doc.addPage([612, 792]);
      const bytes = await doc.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const file = new File([blob], 'mydoc.pdf', { type: 'application/pdf' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).unlock_handleFiles(dt.files);
      await (window as any).unlock_run();
    });

    const download = await page.evaluate(() => (window as any).__lastDownload);
    expect(download).not.toBeNull();
    expect(download.name).toBe('mydoc-unlocked.pdf');
    expect(download.size).toBeGreaterThan(0);
  });

  it('10.9 shows success status after unlocking', async () => {
    await switchTool('unlock');
    await page.evaluate(() => {
      (window as any).downloadBlob = () => {};
    });
    await page.evaluate(async () => {
      const doc = await (window as any).PDFLib.PDFDocument.create();
      doc.addPage([612, 792]);
      const bytes = await doc.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const file = new File([blob], 'test.pdf', { type: 'application/pdf' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).unlock_handleFiles(dt.files);
      await (window as any).unlock_run();
    });

    const statusVisible = await page.evaluate(() =>
      !document.getElementById('unlockStatus')!.classList.contains('hidden'));
    expect(statusVisible).toBe(true);
  });

  it('10.10 unlock_run without file does nothing', async () => {
    await switchTool('unlock');
    // Should not throw
    await page.evaluate(() => (window as any).unlock_run());
  });
});

// ═══════════════════════════════════════════════════════════
//  11. COMPRESS FULL FLOW
// ═══════════════════════════════════════════════════════════

describe('11. Compress Full Flow', () => {
  it('11.1 compress_run processes PDF and shows done status', async () => {
    // Pre-load pdf.js (needed for compress_run's renderPdfPageToCanvas)
    await page.evaluate(() => (window as any).loadPdfJs());
    await page.evaluate(() => new Promise(r => setTimeout(r, 3000)));

    await page.evaluate(() => {
      (window as any).__downloads = [];
      (window as any).downloadBlob = (blob: Blob, name: string) => {
        (window as any).__downloads.push({ size: blob.size, name });
      };
    });

    await seedCompressSample();
    await page.evaluate(async () => {
      const doc = await (window as any).PDFLib.PDFDocument.create();
      const pg = doc.addPage([612, 792]);
      pg.drawRectangle({ x: 50, y: 50, width: 500, height: 700, color: (window as any).PDFLib.rgb(0.2, 0.4, 0.8) });
      const bytes = await doc.save();
      const blob = new Blob([bytes], { type: 'application/pdf' });
      const file = new File([blob], 'big.pdf', { type: 'application/pdf' });
      const dt = new DataTransfer();
      dt.items.add(file);
      await (window as any).compress_handleFiles(dt.files);
    });
    await page.evaluate(() => new Promise(r => setTimeout(r, 500)));

    await page.evaluate(async () => {
      await (window as any).compress_run();
    });

    const listHtml = await page.evaluate(() =>
      document.getElementById('compressFileListBody')!.innerHTML);
    expect(listHtml.toLowerCase()).toContain('done');
  }, 60000);
});

// ═══════════════════════════════════════════════════════════
//  12. CSP COMPATIBILITY
// ═══════════════════════════════════════════════════════════

describe('12. CSP Compatibility', () => {
  it('12.1 pdf-lib loads from cdnjs.cloudflare.com', async () => {
    const html = await page.evaluate(() => document.head.innerHTML);
    expect(html).toContain('cdnjs.cloudflare.com/ajax/libs/pdf-lib');
    expect(html).not.toContain('unpkg.com');
  });

  it('12.2 pdf.js lazy loader references cdnjs', async () => {
    const inlineContent = await page.evaluate(() => {
      const scripts = document.querySelectorAll('script:not([src])');
      let content = '';
      scripts.forEach(s => content += s.textContent);
      return content;
    });
    expect(inlineContent).toContain('cdnjs.cloudflare.com/ajax/libs/pdf.js');
    expect(inlineContent).not.toContain('unpkg.com');
  });

  it('12.3 tailwind loads from cdn.tailwindcss.com', async () => {
    const src = await page.evaluate(() => {
      const scripts = Array.from(document.querySelectorAll('script[src]'));
      return scripts.map(s => s.getAttribute('src'));
    });
    const tailwindSrc = src.find(s => s?.includes('tailwind'));
    expect(tailwindSrc).toContain('cdn.tailwindcss.com');
  });
});

// ═══════════════════════════════════════════════════════════
//  13. GLOBAL DRAG-AND-DROP
// ═══════════════════════════════════════════════════════════

describe('13. Global Drag-and-Drop Prevention', () => {
  it('13.1 window prevents default on dragover', async () => {
    const prevented = await page.evaluate(() => {
      const e = new DragEvent('dragover', { cancelable: true });
      window.dispatchEvent(e);
      return e.defaultPrevented;
    });
    expect(prevented).toBe(true);
  });

  it('13.2 window prevents default on drop', async () => {
    const prevented = await page.evaluate(() => {
      const e = new DragEvent('drop', { cancelable: true });
      window.dispatchEvent(e);
      return e.defaultPrevented;
    });
    expect(prevented).toBe(true);
  });
});
