/* Local learning profiles only. No network, no seeded users, no cloud authentication. */
(function(){
'use strict';
const PREFIX='lumen-local-v1:', rounds=600000, encoder=()=>new TextEncoder();
let adapter,active=null,busy=false,message='',pending=0,queue=Promise.resolve(),failed=false;
const escape=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const canonical=s=>String(s).trim().toLowerCase();
const validName=s=>/^[a-z0-9][a-z0-9 _-]{0,31}$/i.test(s);
const validPassword=s=>typeof s==='string'&&s.length>=12&&s.length<=256;
const available=()=>typeof crypto!=='undefined'&&!!crypto.subtle&&typeof navigator!=='undefined'&&!!navigator.locks;
const keyFor=name=>PREFIX+canonical(name);
const bytes=n=>crypto.getRandomValues(new Uint8Array(n));
const b64=a=>{let s='';for(let i=0;i<a.length;i+=8192)s+=String.fromCharCode(...a.subarray(i,i+8192));return btoa(s)};
const un64=s=>Uint8Array.from(atob(s),x=>x.charCodeAt(0));
async function derive(password,salt){
 const material=await crypto.subtle.importKey('raw',encoder().encode(password),'PBKDF2',false,['deriveKey']);
 return crypto.subtle.deriveKey({name:'PBKDF2',salt,iterations:rounds,hash:'SHA-256'},material,{name:'AES-GCM',length:256},false,['encrypt','decrypt']);
}
const aad=name=>encoder().encode('lumen-local-v1:'+canonical(name));
async function seal(key,name,state,salt){
 const iv=bytes(12),data=encoder().encode(JSON.stringify(state));
 if(data.length>1500000)throw Error('Profile is too large for local storage.');
 const encrypted=await crypto.subtle.encrypt({name:'AES-GCM',iv,additionalData:aad(name)},key,data);
 return JSON.stringify({version:1,salt:b64(salt),iv:b64(iv),ciphertext:b64(new Uint8Array(encrypted))});
}
async function open(name,password,raw){
 const r=JSON.parse(raw);
 if(r.version!==1||typeof r.ciphertext!=='string'||r.ciphertext.length>2200000)throw Error('Invalid profile.');
 const salt=un64(r.salt),iv=un64(r.iv);
 if(salt.length!==16||iv.length!==12)throw Error('Invalid profile.');
 const key=await derive(password,salt);
 const clear=await crypto.subtle.decrypt({name:'AES-GCM',iv,additionalData:aad(name)},key,un64(r.ciphertext));
 const state=JSON.parse(new TextDecoder('utf-8',{fatal:true}).decode(clear));
 if(!state||typeof state!=='object'||Array.isArray(state))throw Error('Invalid profile.');
 return {key,salt,state};
}
function status(s){message=s;adapter?.refresh();}
function panel(){
 if(!available())return '<section class="section"><h2>Local profiles</h2><p class="muted">Local profiles require a modern browser with secure storage APIs. Guest mode still works.</p></section>';
 let body;
 if(active){
 body='<p>Unlocked: <b>'+escape(active.name)+'</b></p><p class="muted">This profile is saved encrypted in this browser, not synchronized. Lock it when finished. Export a copy before clearing browser data.</p><div class="row"><button class="secondary" data-local-action="lock" '+(busy?'disabled':'')+'>Lock / switch profile</button><button class="secondary" data-local-action="delete" '+(busy?'disabled':'')+'>Delete profile</button></div><p class="muted">'+(failed?'Save failed — export your data before leaving.':pending?'Saving encrypted progress…':'No pending saves.')+'</p>';
 }else{
 body='<form id="local-profile-form" method="post" autocomplete="off"><label>Username<input name="username" maxlength="32" required autocomplete="off"></label><label>Password<input name="password" type="password" maxlength="256" required autocomplete="off"></label><div class="row"><button class="primary" type="submit" value="unlock" '+(busy?'disabled':'')+'>Unlock profile</button><button class="secondary" type="submit" value="create" '+(busy?'disabled':'')+'>Create profile</button></div></form><p class="muted">Create a separate learning profile using a unique password of at least 12 characters. No server, recovery service or cross-device login. Usernames are visible to this browser. Do not store sensitive information on a shared device.</p>';
 }
 return '<section class="section"><div class="sectionhead"><h2>Local learning profiles</h2></div><div class="panel" aria-busy="'+busy+'">'+body+(message?'<p role="status">'+escape(message)+'</p>':'')+'</div></section>';
}
async function write(current,snapshot){
 const next=await seal(current.key,current.name,snapshot,current.salt);
 await navigator.locks.request(keyFor(current.name),()=>{
  if(localStorage.getItem(keyFor(current.name))!==current.raw)throw Error('Another tab changed this profile. Export your changes, lock, then unlock again.');
  localStorage.setItem(keyFor(current.name),next);
  current.raw=next;
 });
}
function markChanged(){
 if(!active)return false;
 const current=active;
 let snapshot;
 try{snapshot=JSON.parse(JSON.stringify(adapter.get()));}catch{failed=true;adapter.notify('Unable to prepare encrypted save. Export before leaving.');return true;}
 pending++;
 queue=queue.then(async()=>{
  if(active!==current||failed)return;
  await write(current,snapshot);
 }).catch(e=>{failed=true;adapter.notify(e.message||'Encrypted save failed. Export before leaving.');}).finally(()=>{pending--;if(!busy&&pending===0&&failed)adapter.refresh();});
 return true;
}
async function submit(e){
 if(e.target.id!=='local-profile-form')return;e.preventDefault();if(busy||active||!available())return;
 const form=new FormData(e.target),name=String(form.get('username')||'').trim(),password=String(form.get('password')||''),create=e.submitter?.value==='create';
 if(!validName(name)){status('Use 1–32 letters, numbers, spaces, underscores or hyphens.');return;}
 if(!validPassword(password)){status('Use a unique password of at least 12 characters.');return;}
 busy=true;message='';const field=e.target.querySelector('[name=password]');if(field)field.value='';
 try{
  const key=keyFor(name);let entry;
  await navigator.locks.request(key,async()=>{
   const raw=localStorage.getItem(key);
   if(create){
    if(raw!==null)throw Error('A profile with that username already exists.');
    const salt=bytes(16),derived=await derive(password,salt),state={...adapter.fresh(),onboarded:true};
    const next=await seal(derived,name,state,salt);
    localStorage.setItem(key,next);
    entry={name,key:derived,salt,state,raw:next};
   }else{
    if(raw===null)throw Error('Could not unlock profile. Check the username and password.');
    try{entry={name,...await open(name,password,raw),raw};}catch{throw Error('Could not unlock profile. Check the username and password.');}
   }
  });
  const {state,...current}=entry;active=current;failed=false;queue=Promise.resolve();
  adapter.swap(state);message=create?'Local profile created.':'Profile unlocked.';
 }catch(e){message=e.message||'Unable to access local storage.';}
 finally{busy=false;adapter.refresh();}
}
async function action(kind){
 if(!active||busy)return;
 if(kind!=='lock'&&kind!=='delete')return;
 if(kind==='delete'&&!confirm('Permanently delete this encrypted local profile and all of its learning data?'))return;
 busy=true;
 const current=active;
 try{
  await queue;
  if(kind==='lock'&&failed&&!confirm('Some progress could not be saved. Lock and discard unsaved changes? Choose Cancel to export your data first.'))return;
  if(kind==='delete'){
   await navigator.locks.request(keyFor(current.name),()=>{
    if(localStorage.getItem(keyFor(current.name))!==current.raw)throw Error('Another tab changed this profile. Lock and unlock before deleting.');
    localStorage.removeItem(keyFor(current.name));
   });
  }
  active=null;failed=false;message=kind==='delete'?'Local profile deleted.':'Profile locked. Guest progress restored.';
  adapter.swap(adapter.guest());
 }catch(e){message=e.message||'Unable to complete the action.';}
 finally{busy=false;adapter.refresh();}
}
function start(a){
 adapter=a;
 if(!available())return;
 document.addEventListener('submit',submit);
 document.addEventListener('click',e=>{const b=e.target.closest('[data-local-action]');if(b&&!b.disabled){e.preventDefault();action(b.dataset.localAction);}});
 window.addEventListener('beforeunload',e=>{if(active&&(pending||failed)){e.preventDefault();e.returnValue='';}});
}
window.LumenLocalProfiles={start,panel,markChanged,isActive:()=>!!active,derive,seal,open,validPassword};
})();
