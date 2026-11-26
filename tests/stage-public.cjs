'use strict';
const fs=require('node:fs');
const path=require('node:path');
const assert=require('node:assert/strict');
const vm=require('node:vm');
const html=fs.readFileSync('index.html','utf8');
const files=['index.html','manifest.webmanifest','icon.svg','.nojekyll'];
for(const m of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/gi)){
 const src=m[1].match(/\bsrc=["']([^"']+)["']/i)?.[1];
 assert(src&&/^\.\/[\w.-]+\.js$/.test(src)&&!m[2].trim(),'Only local external scripts may be published');
 files.push(src.slice(2));
}
assert(new Set(files).size===files.length,'Duplicate asset');
const cfg=vm.createContext({window:{}});
new vm.Script(fs.readFileSync('account-config.js','utf8')).runInContext(cfg);
const c=cfg.window.LumenAccountConfig;
assert(c.enabled===false&&c.allowRegistration===false&&['siteOrigin','url','publishableKey','sdkIntegrity'].every(k=>c[k]===''),'Refusing to publish configured or active account pilot');
const suspicious=[/sb_secret_[A-Za-z0-9_-]{12,}/,/gh[pousr]_[A-Za-z0-9]{25,}/,/github_pat_[A-Za-z0-9_]{25,}/,/eyJ[A-Za-z0-9_-]{15,}\.eyJ[A-Za-z0-9_-]{15,}\.[A-Za-z0-9_-]{15,}/,/-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/,/postgres(?:ql)?:\/\/[^\s:@/]+:[^\s@/]+@/];
fs.rmSync('_site',{recursive:true,force:true});
fs.mkdirSync('_site');
for(const file of files){
 assert(!fs.lstatSync(file).isSymbolicLink(),'Unexpected symlink: '+file);
 const data=fs.readFileSync(file);
 assert(!suspicious.some(re=>re.test(data.toString('utf8'))),'Possible credential in '+file+'; inspect privately, do not print it');
 fs.writeFileSync(path.join('_site',file),data);
}
console.log('Public allowlist staged '+files.length+' assets. Credential pattern checks and disabled-account gate passed.');
