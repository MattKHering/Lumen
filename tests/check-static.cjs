const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = process.argv[2] || '.';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
assert(scripts.length > 1, 'Expected external curriculum scripts and inline app');
const context = vm.createContext({ window: {} });
let count = 0;
for (const [, attrs, inline] of scripts) {
  const src = attrs.match(/\bsrc=["']([^"']+)["']/i)?.[1];
  if (src) {
    assert(/^\.\/[\w.-]+\.js$/.test(src), 'Unexpected script location: ' + src);
    const full = path.join(root, src);
    assert(fs.existsSync(full), 'Missing staged script: ' + src);
    const code = fs.readFileSync(full, 'utf8');
    new vm.Script(code, { filename: full }).runInContext(context, { timeout: 10000 });
    count++;
  } else {
    new vm.Script(inline, { filename: 'index.html (inline script)' });
    const start = inline.indexOf("const K='lumen-v1'");
    assert(start > 0, 'Catalog boundary missing');
    new vm.Script(inline.slice(0, start), { filename: 'catalog' }).runInContext(context, { timeout: 10000 });
    const pathStart = inline.indexOf('const subjectPaths=');
    const pathEnd = inline.indexOf('function subjectPathUI(cat){');
    assert(pathStart > start && pathEnd > pathStart, 'Path boundary missing');
    new vm.Script(inline.slice(pathStart, pathEnd), {filename:'guided paths'}).runInContext(context, {timeout:10000});
    const xpStart=inline.indexOf('const originalExperiences=[');
    const xpEnd=inline.indexOf('function filteredExperiences(){');
    assert(xpStart>start && xpEnd>xpStart, 'Experience boundary missing');
    new vm.Script(inline.slice(xpStart,xpEnd), {filename:'experience catalog'}).runInContext(context, {timeout:10000});
  }
}
for (const file of ['manifest.webmanifest', 'icon.svg', '.nojekyll']) {
  assert(fs.existsSync(path.join(root,file)), 'Missing staged asset: ' + file);
}
console.log('Validated ' + count + ' external scripts, inline app syntax, and static assets.');

const catalog = vm.runInContext('courses', context);
const paths = vm.runInContext('subjectPaths', context);
const prerequisites = vm.runInContext('prerequisites', context);
const byId = new Map(catalog.map(c => [c.id,c]));
assert.equal(byId.size, catalog.length, 'Duplicate course ID');
assert.equal(catalog.filter(c=>c.format==='Course').length,1350);
assert.equal(catalog.filter(c=>c.format==='Quick read').length,4);
assert.equal(new Set(catalog.map(c=>c.category)).size,68);
assert.equal(vm.runInContext('experienceEntries().length', context),100);
const revised = catalog.filter(c=>c.editorialRevision);
assert.equal(revised.filter(c=>c.format==='Course').length,115);
assert.equal(revised.filter(c=>c.format==='Quick read').length,1);
assert.equal(context.window.LumenQualityBatch3.length,61);
for(const c of revised) {
  assert.equal(c.slides.length,4,c.id);
  assert.equal(c.questions.length,2,c.id);
  assert(c.slides.every(s=>s.title && s.text),c.id);
  assert(c.questions.every(q=>q.q && q.why && q.options.length===3 && new Set(q.options).size===3 && Number.isInteger(q.correct) && q.correct>=0 && q.correct<3),c.id);
  assert(c.source.startsWith('https://'),c.id);
}
for (const cat of ['Physics','Computer Science','Psychology','Finance','Health']) {
  const list = catalog.filter(c=>c.category===cat&&c.format==='Course');
  assert.equal(list.length,20,cat);
  for (const [level,count] of [['Beginner',10],['Intermediate',6],['Advanced',4]]) {
    assert.equal(list.filter(c=>c.difficulty===level).length,count,cat+' '+level);
  }
  assert.equal(new Set(paths[cat]).size,20,cat+' unique path entries');
  assert(paths[cat].every(id=>byId.get(id)?.category===cat&&byId.get(id)?.format==='Course'),cat);
  assert(list.every(c=>c.editorialRevision && paths[cat].includes(c.id)),cat+' coverage');
}
for (const [id,related] of Object.entries(prerequisites)) {
  assert(byId.has(id),id);
  assert(related.every(x=>x!==id&&byId.has(x)),id+' related IDs');
}
console.log('Catalog, 116 revised titles, 5 guided paths, and background references passed.');
