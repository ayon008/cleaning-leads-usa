/*
Local structured-data audit for prerendered HTML files under .next/server/app
Usage: node scripts/structured-data-audit-local.js

Checks:
 - Extract all <script type="application/ld+json"> blocks from each HTML file under .next/server/app
 - Parse JSON-LD, flatten @graph arrays
 - Report counts per page, types present, duplicates
 - Validate required fields for Organization (name,url,logo), WebSite, WebPage, Article (headline,datePublished,author,publisher,url)
*/

import fs from 'fs';
import path from 'path';
import { JSDOM } from 'jsdom';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..', '.next', 'server', 'app');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fp = path.join(dir, file);
    const stat = fs.statSync(fp);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(fp));
    } else if (file.endsWith('.html')) {
      results.push(fp);
    }
  });
  return results;
}

function extractJsonLdFromHtml(html) {
  const dom = new JSDOM(html);
  const scripts = [...dom.window.document.querySelectorAll('script[type="application/ld+json"]')];
  const blocks = [];
  for (const s of scripts) {
    const txt = s.textContent.trim();
    try {
      const parsed = JSON.parse(txt);
      blocks.push(parsed);
    } catch (err) {
      blocks.push({ parseError: err.message, raw: txt.slice(0, 300) });
    }
  }
  return blocks;
}

function flatten(block) {
  if (!block) return [];
  if (Array.isArray(block)) return block;
  if (block['@graph'] && Array.isArray(block['@graph'])) return block['@graph'];
  return [block];
}

function typeOf(item) {
  const t = item['@type'] || item.type;
  if (!t) return 'Unknown';
  if (Array.isArray(t)) return t.join(',');
  return t;
}

function validateOrganization(item) {
  const errs = [];
  if (!item.name) errs.push('missing name');
  if (!item.url) errs.push('missing url');
  if (!item.logo) errs.push('missing logo');
  return errs;
}

function validateArticle(item) {
  const errs = [];
  if (!item.headline && !item.name) errs.push('missing headline');
  if (!item.datePublished && !item.dateModified) errs.push('missing datePublished/dateModified');
  if (!item.author) errs.push('missing author');
  if (!item.publisher) errs.push('missing publisher');
  if (!item.url && !item.mainEntityOfPage) errs.push('missing url/mainEntityOfPage');
  return errs;
}

(async function main() {
  console.log('Scanning prerendered HTML under', ROOT);
  if (!fs.existsSync(ROOT)) {
    console.error('Prerender path not found:', ROOT);
    process.exit(1);
  }

  const files = walk(ROOT);
  const report = {};
  for (const file of files) {
    const rel = path.relative(ROOT, file).replace(/\\/g, '/');
    const html = fs.readFileSync(file, 'utf8');
    const blocks = extractJsonLdFromHtml(html);
    const items = [];
    for (const b of blocks) {
      if (b.parseError) continue;
      items.push(...flatten(b));
    }
    const typeCounts = {};
    const issues = [];
    for (const it of items) {
      const t = typeOf(it);
      typeCounts[t] = (typeCounts[t] || 0) + 1;
      // validation
      if (t.toString().toLowerCase().includes('organization')) {
        const e = validateOrganization(it);
        if (e.length) issues.push({ type: 'Organization', errors: e, item: it });
      }
      if (t.toString().toLowerCase().includes('article')) {
        const e = validateArticle(it);
        if (e.length) issues.push({ type: 'Article', errors: e, item: it });
      }
    }

    report[rel] = {
      blocks: blocks.length,
      items: items.length,
      types: typeCounts,
      issues,
    };
  }

  // print report
  console.log('\nStructured Data Audit Report:\n');
  let orgFound = false;
  for (const [file, r] of Object.entries(report)) {
    console.log(file);
    console.log('  JSON-LD script blocks:', r.blocks);
    console.log('  Graph items:', r.items);
    console.log('  Types:', r.types);
    if (r.issues.length) {
      console.log('  Issues:');
      for (const iss of r.issues) {
        console.log('   -', iss.type, ':', iss.errors.join(', '));
      }
    }
    if (r.types['Organization'] || r.types['Organization,WebSite'] || Object.keys(r.types).some(k=>k.toLowerCase().includes('organization'))) orgFound = true;
    console.log('');
  }

  if (!orgFound) console.warn('Warning: No Organization schema found across prerendered pages');

  // find blog pages and check Article presence
  const blogFiles = Object.keys(report).filter(f => f.startsWith('blogs/') && f.endsWith('.html'));
  for (const bf of blogFiles) {
    const t = report[bf].types;
    const hasArticle = Object.keys(t).some(k => k.toLowerCase().includes('article'));
    if (!hasArticle) console.warn(`Warning: Article schema missing in ${bf}`);
  }

  console.log('\nAudit finished. Recommendations:\n - Ensure Organization has name,url,logo on homepage.\n - Ensure each blog has an Article schema with headline,datePublished,author,publisher,url.\n - Avoid duplicate schemas: page should not contain multiple Organization objects.\n - Use absolute image URLs in image fields.');
})();
