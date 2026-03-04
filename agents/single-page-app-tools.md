# Single-Page App Tools — Build Guide

How to build standalone HTML tool apps hosted at `/tools/<tool-id>`.

## Architecture

Each tool is a **single self-contained HTML file** in `public/tools/`. No framework, no build step — just HTML + inline CSS + inline JS. The Next.js site serves them via a rewrite rule.

### URL Routing
- File: `public/tools/<tool-id>.html`
- URL: `/tools/<tool-id>` (no `.html` extension)
- Rewrite in `next.config.mjs`: `source: "/tools/:path([^.]+)"` → `destination: "/tools/:path.html"`

### Registry
Add every new tool to `TOOL_META` in `app/tools/page.tsx`:
```ts
"<tool-id>": {
  name: "Display Name",
  description: "One-line description for the /tools listing page",
},
```
The key **must match** the filename (without `.html`).

### CSP (Content Security Policy)
Allowed script sources in `next.config.mjs`:
- `cdn.tailwindcss.com` — Tailwind CSS
- `cdnjs.cloudflare.com` — html2canvas, jsPDF, etc.
- `unpkg.com` is **NOT** in CSP — avoid using it. Use `cdnjs.cloudflare.com` instead
- `'unsafe-eval'` and `'unsafe-inline'` are allowed (required by Tailwind CDN)

If a new tool needs a CDN not listed above, add the domain to `script-src` in `next.config.mjs`.

Other CSP notes:
- `img-src * blob: data:` — images from anywhere + blob/data URIs allowed
- `font-src 'self' data: fonts.gstatic.com` — Google Fonts allowed
- `connect-src *` — fetch/XHR to any origin allowed
- `style-src 'self' 'unsafe-inline' fonts.googleapis.com`

---

## Visual Design System

All tools share a consistent visual language. Follow these patterns exactly.

### Base Setup
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Tool Name</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <!-- additional CDN scripts as needed -->
  <!-- Google Fonts if needed -->
</head>
<body class="bg-slate-50 min-h-screen text-slate-900 font-sans">
  <div class="max-w-[1600px] mx-auto px-4 py-4 md:py-6">
    <!-- header -->
    <!-- content -->
  </div>
</body>
```

### Color Palette
- **Background**: `bg-slate-50` (body), white cards
- **Text**: `text-slate-900` (primary), `text-slate-400`/`text-slate-500` (secondary)
- **Borders**: `border-slate-200` (cards/dividers)
- **Each tool has an accent color**:
  - Polaroid Studio: **blue** (`#2563eb`, `bg-blue-600`, `text-blue-600`)
  - PDF Kit: **red** (`#dc2626`, `bg-red-500`, `text-red-500`)
  - Resume Builder: **emerald** (`#059669`, `bg-emerald-600`, `text-emerald-600`)
- Pick a **unique accent** for each new tool to differentiate them visually

### Header Pattern
```html
<header class="mb-6 flex flex-col items-center gap-4 border-b border-slate-200 pb-5">
  <div class="flex items-center gap-4">
    <!-- Icon badge: accent-colored bg, rounded-2xl, shadow -->
    <div class="bg-{accent}-600 p-2.5 rounded-2xl shadow-lg shadow-{accent}-200">
      <svg class="w-6 h-6 text-white" ...><!-- tool icon --></svg>
    </div>
    <div>
      <h1 class="text-2xl font-black tracking-tighter text-slate-900 uppercase leading-none">
        Tool <span class="text-{accent}-600">Name</span>
      </h1>
      <p class="text-slate-400 text-[10px] font-bold uppercase tracking-widest mt-1">
        Subtitle tagline
      </p>
    </div>
  </div>
  <!-- toolbar/tabs below if needed -->
</header>
```

### Typography
- **Headings**: `font-black uppercase tracking-tighter` (main title), `tracking-widest` (subtitles/labels)
- **Labels**: `text-[10px] font-bold uppercase tracking-widest text-slate-400`
- **Section labels**: Same as labels but `text-slate-700` for emphasis
- **Body text**: Default `text-sm` or `text-xs`

### Interactive Elements

**Tab bars / mode switchers:**
```html
<div class="bg-slate-200/50 p-1.5 rounded-2xl flex gap-1">
  <button class="px-5 py-2 rounded-xl text-xs font-bold uppercase tracking-widest">Tab</button>
</div>
```
Active tab: white background, shadow (`box-shadow: 0 4px 12px rgba(0,0,0,0.05)`)

**Buttons:**
- Primary: `bg-{accent}-600 text-white rounded-xl font-black uppercase tracking-widest shadow-lg shadow-{accent}-200`
- Secondary: `border border-slate-200 text-slate-500 hover:text-{accent}-600 hover:border-{accent}-400 rounded-xl`
- Danger/remove: `text-red-400 hover:text-red-600` (text only, no bg)

**Inputs:**
```
w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-sm
focus:outline-none focus:border-{accent}-500 focus:ring-2 focus:ring-{accent}-500/10
placeholder:text-slate-300
```

**Cards:**
```
bg-white rounded-2xl border border-slate-200 shadow-sm
```

**Entry cards (repeatable items):**
```
bg-slate-50 rounded-xl p-4 space-y-2.5 border border-slate-100
```

**Add buttons (dashed):**
```
border border-dashed border-slate-300 text-slate-400
hover:text-{accent}-600 hover:border-{accent}-400 rounded-xl w-full
```

### Range inputs
```css
input[type="range"] { accent-color: #059669; } /* match tool accent */
```

### Collapsible sections
```css
.section-collapsible { max-height: 2000px; overflow: hidden; transition: max-height 0.3s ease; }
.section-collapsible.collapsed { max-height: 0; padding: 0; }
```
Toggle with chevron SVG that rotates -90deg when collapsed.

### Scrollbar styling
```css
.editor-panel::-webkit-scrollbar { width: 6px; }
.editor-panel::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 3px; }
```

### Dark toolbar (for tools with complex options)
Resume Builder uses a floating dark toolbar:
```html
<div class="bg-slate-800 rounded-2xl p-1.5 shadow-xl flex items-center gap-1">
  <!-- toolbar buttons in text-slate-300, hover:text-white -->
</div>
```
Dropdown panels from toolbar: `bg-slate-800 rounded-2xl p-5 shadow-2xl border border-slate-700`

---

## Existing Tools Reference

### Polaroid Studio Pro (`polaroid-studio.html`)
- **Accent**: Blue (`#2563eb`)
- **Layout**: Full-width, editor mode + batch print mode toggle
- **Features**: Canvas-based image editor, filters, captions, print layout
- **CDN**: Tailwind only (canvas API is native)
- **Google Font**: Caveat (handwriting for captions)

### PDF Kit (`pdf-kit.html`)
- **Accent**: Red (`#dc2626`)
- **Layout**: Centered single-column (`max-w-4xl`), tab bar for tools
- **Features**: Compress, merge, split, PDF→images, images→PDF, unlock
- **CDN**: Tailwind + `cdnjs.cloudflare.com/pdf-lib@1.17.1` + `cdnjs.cloudflare.com/pdf.js@3.11.174` (lazy-loaded)
- **Pattern**: Each sub-tool has its own accent color, drop zone, and processing UI

### Resume Builder (`resume-builder.html`)
- **Accent**: Emerald (`#059669`)
- **Layout**: Split-pane (editor left, preview right), centered header with dark toolbar
- **Features**: 6 layouts, 12 color themes, 4 fonts, photo upload with crop/zoom, PDF export, JSON import/export, localStorage persistence
- **CDN**: Tailwind + `cdnjs.cloudflare.com/html2canvas` + `cdnjs.cloudflare.com/jspdf`
- **Google Fonts**: Merriweather, Inter, Playfair Display, Source Sans 3, Roboto Slab
- **State**: All resume data + settings saved to `localStorage` under key `resume-builder`

---

## Checklist for Adding a New Tool

1. Pick a unique `<tool-id>` (kebab-case, e.g. `color-palette`)
2. Pick a unique accent color not used by existing tools
3. Create `public/tools/<tool-id>.html` following the base setup above
4. Add `TOOL_META["<tool-id>"]` entry in `app/tools/page.tsx`
5. If new CDN domains are needed, add to `script-src` in `next.config.mjs`
6. Use `localStorage.setItem('<tool-id>', ...)` for persistence (key = tool-id)
7. Test at `http://localhost:3000/tools/<tool-id>`
8. Verify it shows on `/tools` listing page

## PDF Export Pattern (html2canvas + jsPDF)

### CDN versions (verified working)
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js"></script>
```
**Important**: jsPDF `2.5.2` returns 404 — use `2.5.1`.

### Export function
```js
async function exportPDF(btnEl) {
  const btn = btnEl; // pass button explicitly, never use implicit event
  btn.disabled = true;
  try {
    const el = document.getElementById('previewElement');
    const wrapper = el.parentElement;
    // Save original styles
    const origTransform = el.style.transform;
    const origWrapperCSS = wrapper.style.cssText;

    // Move off-screen at full A4 width — avoids page zoom, styles still apply
    el.style.transform = 'none';
    el.style.transformOrigin = '';
    el.style.boxShadow = 'none';
    el.style.borderRadius = '0';
    wrapper.style.cssText = 'position:fixed;left:-9999px;top:0;z-index:-1;width:794px;height:auto;';

    await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

    const canvas = await html2canvas(el, {
      scale: 1.5,        // Good balance of quality vs size
      useCORS: true,
      backgroundColor: '#ffffff',
      logging: false,
    });

    // Restore
    el.style.transform = origTransform;
    el.style.transformOrigin = '';
    el.style.boxShadow = '';
    el.style.borderRadius = '';
    wrapper.style.cssText = origWrapperCSS;

    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageW = 210, pageH = 297;
    const pxPerMM = canvas.width / pageW;
    const pageHPx = Math.floor(pageH * pxPerMM);

    // Slice canvas into properly cropped pages — no overlap
    let yPx = 0, pageNum = 0;
    while (yPx < canvas.height) {
      if (pageNum > 0) pdf.addPage();
      const sliceH = Math.min(pageHPx, canvas.height - yPx);
      const pageCanvas = document.createElement('canvas');
      pageCanvas.width = canvas.width;
      pageCanvas.height = sliceH;
      pageCanvas.getContext('2d').drawImage(
        canvas, 0, yPx, canvas.width, sliceH, 0, 0, canvas.width, sliceH
      );
      pdf.addImage(pageCanvas.toDataURL('image/jpeg', 0.85), 'JPEG', 0, 0, pageW, sliceH / pxPerMM);
      yPx += pageHPx;
      pageNum++;
    }
    pdf.save('output.pdf');
  } finally {
    btn.disabled = false;
  }
}
```

### Key rules
- Always pass button element explicitly via `onclick="exportPDF(this)"`, never use implicit `event` global
- Use `scale: 1.5` + JPEG at 0.85 quality — keeps PDF under 500KB instead of 14MB (scale:2 + PNG)
- **Crop canvas per page** — never use negative y-offset (`pdf.addImage(img, 0, -y, ...)`) as it causes page overlap
- Move element off-screen via `position:fixed;left:-9999px` — cloning loses Tailwind CDN styles

### html2canvas gotchas
These CSS features render incorrectly in html2canvas. Avoid them in any element that gets exported to PDF:

| Don't use | Use instead | Why |
|---|---|---|
| `::before` / `::after` pseudo-elements | Real `<span>` elements | html2canvas often ignores pseudos |
| `rgba()` on dark backgrounds | Pre-computed solid `rgb()` colors | rgba renders as wrong color |
| `opacity: 0.7` on elements | Computed solid color at target opacity | opacity renders inconsistently |
| `border-bottom` on elements | Separate `<div>` with `height:2px;background:color` | Border spacing is wrong |
| `display:flex; gap:4px` | Explicit `margin` on children | gap sometimes ignored |
| `overflow: hidden` on the page element | Remove it — let content flow naturally | Clips multi-page content |

### Solid color overlay helper
For sidebar elements on dark backgrounds, convert rgba overlays to solid colors:
```js
function solidOverlay(bgHex, alpha) {
  const r = parseInt(bgHex.slice(1,3), 16);
  const g = parseInt(bgHex.slice(3,5), 16);
  const b = parseInt(bgHex.slice(5,7), 16);
  return `rgb(${Math.round(r+(255-r)*alpha)},${Math.round(g+(255-g)*alpha)},${Math.round(b+(255-b)*alpha)})`;
}
// solidOverlay('#1e293b', 0.15) → 'rgb(64,73,88)' instead of 'rgba(255,255,255,0.15)'
```
