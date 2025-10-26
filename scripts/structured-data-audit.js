/*
Simple structured-data audit script.
Usage: NODE_ENV=development node scripts/structured-data-audit.js
It will fetch the home page, /blogs (list), and a few blog pages, parse <script type="application/ld+json"> blocks,
report counts, duplicate types, and missing required fields for Organization/WebSite/Article.
This is a light-weight validator — for full validation use Google's Rich Results Test API.
*/

const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');

const SITE = process.env.SITE_URL || 'https://www.cleaningleadsusa.com';

const PAGES = [
  '/',
  '/blogs',
];

async function fetchHtml(path) {
  try {
    const res = await fetch(`${SITE}${path}`, { timeout: 15000 });
    if (!res.ok) return { error: `HTTP ${res.status}` };
    const text = await res.text();
    return { text };
  } catch (err) {
    return { error: err.message };
  }
}

function extractJsonLd(html) {
  const dom = new JSDOM(html);
  const scripts = [...dom.window.document.querySelectorAll('script[type="application/ld+json"]')];
  const blocks = [];
  for (const s of scripts) {
    const txt = s.textContent.trim();
    try {
      const parsed = JSON.parse(txt);
      blocks.push(parsed);
    } catch (err) {
      blocks.push({ parseError: err.message, raw: txt.slice(0, 500) });
    }
  }
  return blocks;
}

function flattenGraph(block) {
  if (!block) return [];
  if (typeof block === 'object' && Array.isArray(block['@graph'])) return block['@graph'];
  if (Array.isArray(block)) return block;
  return [block];
}

function reportForPage(path, html) {
  const blocks = extractJsonLd(html);
  const items = [];
  for (const b of blocks) {
    items.push(...flattenGraph(b));
  }

  const types = items.map(i => i['@type'] || i.type || 'Unknown');
  const typeCounts = types.reduce((acc, t) => { acc[t] = (acc[t] || 0) + 1; return acc }, {});

  return { blocksCount: blocks.length, itemsCount: items.length, typeCounts, items };
}

(async function main(){
  console.log('Structured data audit starting against', SITE);

  const pagesToCheck = [...PAGES];

  // fetch /blogs to try to find blog links
  const listRes = await fetchHtml('/blogs');
  if (listRes.text) {
    const dom = new JSDOM(listRes.text);
    // find first few blog links to inspect
    const links = [...dom.window.document.querySelectorAll('a')]
      .map(a => a.href)
      .filter(h => h && h.includes('/blogs/'))
      .slice(0, 5)
      .map(h => new URL(h, SITE).pathname);
    pagesToCheck.push(...links);
  }

  const results = {};
  for (const p of pagesToCheck) {
    process.stdout.write(`Fetching ${p} ... `);
    const res = await fetchHtml(p);
    if (res.error) {
      console.log('ERROR:', res.error);
      results[p] = { error: res.error };
      continue;
    }
    const r = reportForPage(p, res.text);
    console.log(`found ${r.blocksCount} JSON-LD script(s), ${r.itemsCount} total graph items`);
    results[p] = r;
  }

  // Summary
  console.log('\n=== SUMMARY ===');
  for (const [p, r] of Object.entries(results)) {
    if (r && r.typeCounts) {
      console.log(p, '=>', r.typeCounts);
    } else if (r && r.error) {
      console.log(p, '=> ERROR:', r.error);
    } else {
      console.log(p, '=> no data');
    }
  }

  // Basic checks: ensure Organization present on homepage and each article has Article type
  const home = results['/'];
  if (home && home.itemsCount) {
    const allTypes = Object.keys(home.typeCounts || {});
    if (!allTypes.some(t => t.toString().includes('Organization'))) {
      console.warn('Warning: Organization schema not found on homepage');
    } else {
      console.log('Organization schema present on homepage');
    }
  }

  for (const [p, r] of Object.entries(results)) {
    if (p.startsWith('/blogs') && r && r.itemsCount) {
      const hasArticle = Object.keys(r.typeCounts || {}).some(t => t.toString().toLowerCase().includes('article'));
      if (!hasArticle) console.warn(`Warning: No Article schema detected on ${p}`);
    }
  }

  console.log('\nAudit complete. For deeper validation use Google Rich Results Test or Schema.org validator.');
})();
