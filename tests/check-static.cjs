const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const root = process.argv[2] || '.';
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
const scripts = [...html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)];
assert(scripts.length > 1, 'Expected external curriculum and app scripts');
assert(html.includes("connect-src 'none'"),'Public site must not contact a backend');
assert(html.includes("form-action 'none'"),'Public forms must not submit credentials');
assert(html.includes("script-src 'self'"),'Public CSP must block inline and remote scripts');
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
    if (src !== './app.js') {
      new vm.Script(code, { filename: full }).runInContext(context, { timeout: 10000 });
      continue;
    }
    const inline = code;
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
  } else {
    assert.fail('Inline JavaScript is forbidden by the public CSP');
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
assert.equal(revised.filter(c=>c.format==='Course').length,603);
assert.equal(context.window.LumenQualityBatch6.length,39);
assert.equal(context.window.LumenQualityBatch7.length,20);
assert.equal(context.window.LumenQualityBatch8.length,20);
for (const n of [9,10,11,12,13,14,15,16,18,19,20,21,22]) assert.equal(context.window['LumenQualityBatch'+n].length,20);
assert.equal(context.window.LumenQualityBatch17.length,19);
assert.equal(context.window.LumenQualityBatch23.length,20);
assert.equal(context.window.LumenQualityBatch24.length,20);
assert.equal(context.window.LumenQualityBatch25.length,20);
for(const row of context.window.LumenQualityBatch24){const art=context.window.LumenQualityArt(byId.get(row[0]));assert(art.includes('<svg')&&art.includes('<desc>'),row[0]+' diagram');}
for(const row of context.window.LumenQualityBatch8){const art=context.window.LumenQualityArt(byId.get(row[0]));assert(art.includes('<svg')&&art.includes('<desc>'),row[0]+' diagram');}
assert.equal(context.window.LumenQualityBatch5.length,38);
assert.equal(revised.filter(c=>c.format==='Quick read').length,2);
assert.equal(context.window.LumenQualityBatch4.length,37);
assert.equal(context.window.LumenQualityBatch3.length,61);
for(const c of revised) {
  assert.equal(c.slides.length,4,c.id);
  assert.equal(c.questions.length,2,c.id);
  assert(c.slides.every(s=>s.title && s.text),c.id);
  assert(c.questions.every(q=>q.q && q.why && q.options.length===3 && new Set(q.options).size===3 && Number.isInteger(q.correct) && q.correct>=0 && q.correct<3),c.id);
  assert(c.source.startsWith('https://'),c.id);
}
for (const cat of ['Physics','Computer Science','Psychology','Finance','Health','Mathematics','Statistics','Cybersecurity','Financial Literacy','Biology','Chemistry','Astronomy','Earth Science','Meteorology','Oceanography','Geography','Botany','Zoology','Human Biology','Neuroscience','Medicine','Food Science','Scientific Literacy','Engineering','Electronics','Materials Science','Aerospace','Technology','Architecture','Transportation']) {
  const list = catalog.filter(c=>c.category===cat&&c.format==='Course');
  assert.equal(list.length,cat==='Food Science'?19:20,cat);
  for (const [level,count] of [['Beginner',cat==='Food Science'?9:10],['Intermediate',6],['Advanced',4]]) {
    assert.equal(list.filter(c=>c.difficulty===level).length,count,cat+' '+level);
  }
  assert.equal(new Set(paths[cat]).size,cat==='Food Science'?19:20,cat+' unique path entries');
  assert(paths[cat].every(id=>byId.get(id)?.category===cat&&byId.get(id)?.format==='Course'),cat);
  assert(list.every(c=>c.editorialRevision && paths[cat].includes(c.id)),cat+' coverage');
}
for (const [id,related] of Object.entries(prerequisites)) {
  assert(byId.has(id),id);
  assert(related.every(x=>x!==id&&byId.has(x)),id+' related IDs');
}
console.log('Catalog, 605 revised titles, 30 guided paths, and background references passed.');

assert.equal(context.window.LumenAccounts.enabled(),false,'Accounts must be disabled on public main');
assert.equal(context.window.LumenAccountConfig.enabled,false);
assert.equal(context.window.LumenAccountConfig.allowRegistration,false);
for(const k of ['siteOrigin','url','publishableKey','sdkIntegrity'])assert.equal(context.window.LumenAccountConfig[k],'','Public config must be empty: '+k);
const accountSource=fs.readFileSync(path.join(root,'accounts.js'),'utf8');
const blocked=vm.createContext({window:{LumenAccountConfig:{enabled:true,siteOrigin:'https://example.github.io'}},location:{protocol:'https:',hostname:'example.github.io',origin:'https://example.github.io'}});
new vm.Script(accountSource).runInContext(blocked);
assert.equal(blocked.window.LumenAccounts.enabled(),false,'Never enable accounts on shared GitHub Pages origin');
assert.equal(context.window.LumenAccounts.isActive(),false);
const accountCore=context.window.LumenAccounts;
context.TextEncoder=TextEncoder;
const baseProfile={theme:'dark',goal:10,interests:['Physics'],onboarded:true,progress:{motion:{step:0,done:true}},saved:{},notes:{'motion:s0':'A note'},review:{},activity:{},knowledge:{},attempts:2,correct:1,custom:[{id:'custom-1'}],secret:'do not copy'};
const cloud=accountCore.payload(baseProfile,catalog);
assert.equal(cloud.theme,'dark');assert.equal(cloud.notes['motion:s0'],'A note');assert.equal(cloud.progress.motion.done,true);
assert.equal('custom' in cloud,false);assert.equal('secret' in cloud,false);
assert.throws(()=>accountCore.payload({...baseProfile,correct:3},catalog),/quiz totals/);
assert.throws(()=>accountCore.payload({...baseProfile,schemaVersion:2},catalog),/schema version/);
assert.throws(()=>accountCore.payload({...baseProfile,notes:{'motion:s0':'x'.repeat(20001)}},catalog),/note length/);
(async()=>{
 const filters=[];let written;
 const table={update(x){written=x;return this},insert(x){written=x;return this},eq(k,v){filters.push([k,v]);return this},select(){return this},async maybeSingle(){return {data:{revision:written.revision},error:null}}};
 const client={from(name){assert.equal(name,'learning_profiles');return table}};
 const result=await accountCore.saveRemote(client,'account-a',7,cloud);
 assert.equal(result.revision,8);assert.deepEqual(filters,[['user_id','account-a'],['revision',7]]);assert.equal(written.revision,8);
 table.maybeSingle=async()=>({data:null,error:null});
 assert.equal((await accountCore.saveRemote(client,'account-a',7,cloud)).conflict,true);
 table.maybeSingle=async()=>({data:null,error:{code:'23505'}});
 assert.equal((await accountCore.saveRemote(client,'account-a',null,cloud)).conflict,true);
 console.log('Disabled account pilot, payload allowlist, and mocked revision guards passed.');
})().catch(e=>{console.error(e);process.exitCode=1});

const localSource=fs.readFileSync(path.join(root,'local-profiles.js'),'utf8');
const localCtx=vm.createContext({window:{},crypto:require('node:crypto').webcrypto,TextEncoder,TextDecoder,Uint8Array,btoa,atob});
new vm.Script(localSource).runInContext(localCtx);
const local=localCtx.window.LumenLocalProfiles;
assert.equal(local.validPassword('short'),false);
assert.equal(local.validPassword('test-only-long-passphrase'),true);
(async()=>{
 const salt=localCtx.crypto.getRandomValues(new Uint8Array(16));
 const pw='test-only-long-passphrase';
 const key=await local.derive(pw,salt);
 const profile={progress:{motion:{done:true}},notes:{'motion:s0':'example private note'}};
 const raw=await local.seal(key,'Test profile',profile,salt);
 assert(!raw.includes('example private note')&&!raw.includes(pw),'No cleartext profile or password in storage record');
 const restored=await local.open('test profile',pw,raw);
 assert.equal(restored.state.notes['motion:s0'],'example private note');
 await assert.rejects(()=>local.open('test profile','wrong-test-passphrase',raw));
 await assert.rejects(()=>local.open('other profile',pw,raw));
 const modified=JSON.parse(raw);const data=Buffer.from(modified.ciphertext,'base64');data[0]^=1;modified.ciphertext=data.toString('base64');
 await assert.rejects(()=>local.open('Test profile',pw,JSON.stringify(modified)));
 assert.notEqual(JSON.parse(await local.seal(key,'Test profile',profile,salt)).iv,JSON.parse(raw).iv);
 console.log('Local profile encryption, wrong-password, tamper and random IV tests passed.');
})().catch(e=>{console.error(e);process.exitCode=1});
