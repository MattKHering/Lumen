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
    new vm.Script(code, { filename: full });
    count++;
  } else {
    new vm.Script(inline, { filename: 'index.html (inline script)' });
  }
}
for (const file of ['manifest.webmanifest', 'icon.svg', '.nojekyll']) {
  assert(fs.existsSync(path.join(root,file)), 'Missing staged asset: ' + file);
}
console.log('Validated ' + count + ' external scripts, inline app syntax, and static assets.');
