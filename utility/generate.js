const fs = require('fs');
const path = require('path');
const handlebars = require('handlebars');
const puppeteer = require('puppeteer');
const { generateUniqueFilename } = require('./service');

const DEFAULT_MARGIN = { top: '20px', right: '20px', bottom: '20px', left: '20px' };

// Puppeteer's `margin` option overrides CSS @page margins, so mirror
// whatever the template declared in its @page block back into Puppeteer.
function extractPageMargin(content) {
  const m = content.match(/@page\s*\{[\s\S]*?margin\s*:\s*([^;}]+)/);
  if (!m) return null;
  const parts = m[1].trim().split(/\s+/);
  let top, right, bottom, left;
  if (parts.length === 1) [top, right, bottom, left] = [parts[0], parts[0], parts[0], parts[0]];
  else if (parts.length === 2) [top, right, bottom, left] = [parts[0], parts[1], parts[0], parts[1]];
  else if (parts.length === 3) [top, right, bottom, left] = [parts[0], parts[1], parts[2], parts[1]];
  else if (parts.length >= 4) [top, right, bottom, left] = parts;
  else return null;
  return { top, right, bottom, left };
}

function pxValue(str) {
  const m = String(str).match(/(\d+(?:\.\d+)?)\s*px/);
  return m ? parseFloat(m[1]) : 0;
}

function extractTag(html, tagName) {
  // Only scan inside <body> — this avoids matching tag-like text that appears
  // in CSS comments inside <style> (e.g. "/* extracts <header>/<footer> */"),
  // which would otherwise lazy-match all the way to the real closing tag and
  // tear out the <style> block with it.
  const bodyStart = html.search(/<body\b[^>]*>/i);
  const haystack = bodyStart >= 0 ? html.slice(bodyStart) : html;
  const re = new RegExp(`<${tagName}\\b[^>]*>[\\s\\S]*?<\\/${tagName}>`, 'i');
  const match = haystack.match(re);
  return match ? match[0] : null;
}

function extractStyleContent(html) {
  const m = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  return m ? m[1] : '';
}

async function generatePDF({content, attachments}, data) {
  try {
    const fileName = generateUniqueFilename();
    let outputFilePath = `/home/app/docs/${fileName}.pdf`;
    const NODE_ENV = process.env.NODE_ENV || 'local';
    console.log("NODE_ENV: ", NODE_ENV);
    console.log("Output File Path: ", outputFilePath);
    if (NODE_ENV === 'local') {
      outputFilePath = `PDFs/${fileName}.pdf`;
    }
    console.log("Output File Path: ", outputFilePath);

    data.attachments = attachments;

    const template = handlebars.compile(content);
    let html = template({ data });

    // Determine page margins from the template's CSS @page rule.
    const margin = extractPageMargin(content) || DEFAULT_MARGIN;
    console.log('PDF margin:', margin);

    // Opt-in: only repeat header/footer when @page reserves space for them.
    // Other templates (with 20px margins) keep their existing inline rendering.
    const repeatHF = pxValue(margin.top) >= 50 || pxValue(margin.bottom) >= 50;
    console.log('Repeat header/footer per page:', repeatHF);

    let displayHeaderFooter = false;
    let headerTemplate = '<div></div>';
    let footerTemplate = '<div></div>';

    if (repeatHF) {
      const headerHTML = extractTag(html, 'header');
      const footerHTML = extractTag(html, 'footer');

      // Strip from the body so they don't render twice.
      if (headerHTML) html = html.replace(headerHTML, '');
      if (footerHTML) html = html.replace(footerHTML, '');

      // Puppeteer wraps each template in an internal flex container that
      // (a) vertically centers the child and (b) adds ~0.4cm side padding.
      // We neutralize (a) by making the wrap's height = 100% so it fills
      // the entire margin band (no slack to center). The horizontal padding
      // is offset by negative margins so content goes edge-to-edge of the page.
      const headerWrap = (inner) => `<div style="width: 100%; height: 100%; margin: 0 -0.4cm; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; color: #333; -webkit-print-color-adjust: exact;">${inner}</div>`;
      const footerWrap = (inner) => `<div style="width: 100%; height: 100%; margin: 0 -0.4cm; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; color: #666; -webkit-print-color-adjust: exact;">${inner}</div>`;

      if (headerHTML) headerTemplate = headerWrap(headerHTML);
      if (footerHTML) footerTemplate = footerWrap(footerHTML);
      displayHeaderFooter = !!(headerHTML || footerHTML);
    }

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    await page.setViewport({ width: 900, height: 1200 });
    await page.pdf({
      path: outputFilePath,
      format: 'A4',
      printBackground: true,
      displayHeaderFooter,
      headerTemplate,
      footerTemplate,
      margin
    });

    await browser.close();
    console.log(`✅ PDF generated: ${outputFilePath}`);
    return { error: false, message: `PDF generated successfully`, path: outputFilePath, fileName: fileName };
  } catch (err) {
    console.error(`❌ Error generating PDF: ${err.message}`);
    throw err;
  }
}

module.exports = {
  generatePDF
};
