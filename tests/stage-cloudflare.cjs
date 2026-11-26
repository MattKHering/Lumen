'use strict';
// Separate, opt-in Cloudflare pilot. GitHub Pages continues using stage-public.cjs.
const fs=require('node:fs'),path=require('node:path'),os=require('node:os'),crypto=require('node:crypto'),assert=require('node:assert/strict'),{execFileSync}=require('node:child_process');
const origin='https://lumen-5dk.pages.dev';
const backend='https://gnxkrtylmkfvjevxwzea.supabase.co';
const version='2.119.2';
const run=(program,args,options={})=>execFileSync(program,args,{...options,stdio:['ignore','pipe','inherit'],maxBuffer:16*1024*1024});
run(process.execPath,['tests/stage-public.cjs']);
run(process.execPath,['tests/check-static.cjs']);
if(process.env.CF_PAGES!=='1'||process.env.CF_PAGES_BRANCH!=='main'||process.env.LUMEN_ACCOUNT_PILOT!=='1'){
 console.log('Guest-only output: account pilot is not enabled for this build.');
 process.exit(0);
}
const key=process.env.LUMEN_PUBLISHABLE_KEY||'';
assert(/^sb_publishable_[A-Za-z0-9_-]+$/.test(key),'Missing or invalid public Supabase key; never use a secret key.');
const temp=fs.mkdtempSync(path.join(os.tmpdir(),'lumen-sdk-'));
try{
 const pack=JSON.parse(run('npm',['pack','@supabase/supabase-js@'+version,'--ignore-scripts','--json','--registry=https://registry.npmjs.org'],{cwd:temp,encoding:'utf8'}))[0];
 assert(pack.name==='@supabase/supabase-js'&&pack.version===version&&/^[a-z0-9.-]+\.tgz$/.test(pack.filename),'Unexpected package');
 const tar=path.join(temp,pack.filename);
 const integrity='sha512-'+crypto.createHash('sha512').update(fs.readFileSync(tar)).digest('base64');
 assert(integrity===pack.integrity,'Package integrity mismatch');
 const bundle=run('tar',['-xOf',tar,'package/dist/umd/supabase.js']);
 const license=run('tar',['-xOf',tar,'package/LICENSE']);
 assert(bundle.length>10000&&bundle.length<3000000,'Unexpected SDK size');
 const sri='sha384-'+crypto.createHash('sha384').update(bundle).digest('base64');
 fs.writeFileSync('_site/supabase-client.js',bundle);
 fs.writeFileSync('_site/supabase-client-LICENSE.txt',license);
 const cfg={enabled:true,allowRegistration:false,siteOrigin:origin,url:backend,publishableKey:key,sdkIntegrity:sri};
 fs.writeFileSync('_site/account-config.js','window.LumenAccountConfig=Object.freeze('+JSON.stringify(cfg)+');\n');
 const old=fs.readFileSync('_site/index.html','utf8');
 assert(old.includes("connect-src 'none'"),'Missing original CSP');
 fs.writeFileSync('_site/index.html',old.replace("connect-src 'none'","connect-src "+backend));
 const csp=fs.readFileSync('_site/index.html','utf8').match(/http-equiv="Content-Security-Policy" content="([^"]+)"/i)?.[1];
 assert(csp&&csp.includes('connect-src '+backend),'Missing restricted pilot CSP');
 fs.writeFileSync('_site/_headers','/*\n  Content-Security-Policy: '+csp+"; frame-ancestors 'none'\n  X-Frame-Options: DENY\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: no-referrer\n  Permissions-Policy: camera=(), microphone=(), geolocation=()\n  Strict-Transport-Security: max-age=31536000\n  Cache-Control: no-store\n");
 console.log('Built invite-only pilot for the dedicated hostname; SDK '+version+' with generated SRI. Registration remains disabled.');
}finally{fs.rmSync(temp,{recursive:true,force:true});}
