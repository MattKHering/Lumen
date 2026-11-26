/* Opt-in account pilot. No network or SDK loading while disabled. */
(function(){
'use strict';
const config=window.LumenAccountConfig||{},enabled=config.enabled===true;
let api,adapter,account=null,authUser=null,busy=false,notice='',recovery=false,epoch=0,timer=null,writeInFlight=false;
const levels=['Not specified','Beginner','Intermediate','Advanced','Expert'];
const own=(o,k)=>Object.prototype.hasOwnProperty.call(o,k);
const object=v=>v!==null&&typeof v==='object'&&!Array.isArray(v);
const num=(v,max=Number.MAX_SAFE_INTEGER)=>Number.isSafeInteger(v)&&v>=0&&v<=max;
const str=(v,n=10000)=>typeof v==='string'&&v.length<=n;
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function validate(ok,label){if(!ok)throw new Error('Invalid learning data: '+label);}
function payload(input,catalog){
 validate(object(input),'profile');
 if(own(input,'schemaVersion'))validate(input.schemaVersion===1,'schema version');
 const ids=new Map(catalog.map(c=>[c.id,c])),subjects=new Set(catalog.map(c=>c.category));
 const out={schemaVersion:1,theme:'light',goal:10,interests:[],onboarded:false,progress:{},saved:{},notes:{},review:{},activity:{},knowledge:{},attempts:0,correct:0};
 if(own(input,'theme')){validate(['light','dark'].includes(input.theme),'theme');out.theme=input.theme;}
 if(own(input,'goal')){validate([5,10,15,20].includes(input.goal),'goal');out.goal=input.goal;}
 if(own(input,'interests')){validate(Array.isArray(input.interests)&&input.interests.every(x=>typeof x==='string'),'interests');out.interests=[...new Set(input.interests.filter(x=>subjects.has(x)))];}
 if(own(input,'onboarded')){validate(typeof input.onboarded==='boolean','onboarding');out.onboarded=input.onboarded;}
 for(const k of ['attempts','correct'])if(own(input,k)){validate(num(input[k]),k);out[k]=input[k];}
 validate(out.correct<=out.attempts,'quiz totals');
 function entries(k,fn){
  if(!own(input,k))return;
  validate(object(input[k]),k);
  for(const [id,v] of Object.entries(input[k])){if(['__proto__','prototype','constructor'].includes(id))throw Error('Unsafe profile key');fn(id,v);}
 }
 function course(id){if(id.startsWith('custom-'))return null;const c=ids.get(id);validate(!!c,'unknown course '+id);return c;}
 entries('progress',(id,v)=>{
  const c=course(id);if(!c)return;
  validate(object(v)&&num(v.step,1000)&&typeof v.done==='boolean','progress '+id);
  const item={step:v.step,done:v.done};
  if(own(v,'attemptVersion')){validate(str(v.attemptVersion,80),'attempt version');item.attemptVersion=v.attemptVersion;}
  if(own(v,'answers')){validate(object(v.answers),'answers');item.answers={};for(const [k,x] of Object.entries(v.answers)){validate(/^\d{1,3}$/.test(k)&&(x===0||x===1),'answer');item.answers[k]=x;}}
  if(own(v,'check')){const a=v.check;validate(object(a)&&str(a.version,80)&&num(a.total,100)&&num(a.correct,a.total)&&num(a.date),'check');item.check={version:a.version,total:a.total,correct:a.correct,date:a.date};}
  out.progress[id]=item;
 });
 function indexed(key,slide){const parts=key.split(':');validate(parts.length===2,'indexed key');const c=course(parts[0]);if(!c)return false;validate((slide?/^s\d{1,3}$/:/^\d{1,3}$/).test(parts[1]),'index');return true;}
 entries('saved',(k,v)=>{if(!indexed(k,true))return;validate(object(v)&&str(v.title,4000)&&str(v.text,10000),'bookmark');out.saved[k]={title:v.title,text:v.text};});
 entries('notes',(k,v)=>{if(!indexed(k,true))return;validate(str(v,20000),'note length');out.notes[k]=v;});
 entries('review',(k,v)=>{if(!indexed(k,false))return;validate(object(v)&&num(v.level,6)&&num(v.next),'review');out.review[k]={level:v.level,next:v.next};});
 entries('activity',(k,v)=>{validate(/^\d{4}-\d{2}-\d{2}$/.test(k)&&object(v)&&typeof v.seconds==='number'&&Number.isFinite(v.seconds)&&v.seconds>=0&&num(v.lessons),'activity');out.activity[k]={seconds:v.seconds,lessons:v.lessons};});
 entries('knowledge',(k,v)=>{
  if(!subjects.has(k))return;
  validate(object(v),'knowledge');
  const row={};if(own(v,'self')){validate(levels.includes(v.self),'knowledge level');row.self=v.self;}
  if(own(v,'useAssessment')){validate(typeof v.useAssessment==='boolean','assessment choice');row.useAssessment=v.useAssessment;}
  if(own(v,'assessment')){const a=v.assessment;validate(object(a)&&['Beginner','Intermediate','Advanced'].includes(a.level)&&num(a.total,8)&&num(a.correct,a.total)&&num(a.date),'placement');const counts={};if(object(a.counts)){for(const tier of ['Fundamentals','Applied','Deeper reasoning']){const b=a.counts[tier];if(b){validate(object(b)&&num(b.total,8)&&num(b.correct,b.total),'placement counts');counts[tier]={correct:b.correct,total:b.total};}}}row.assessment={level:a.level,correct:a.correct,total:a.total,date:a.date,counts};}
  out.knowledge[k]=row;
 });
 const json=JSON.stringify(out);
 validate(new TextEncoder().encode(json).length<=800000,'cloud profile exceeds 800 KB');
 return out;
}
function withLocalCustom(remote,local){
 const result={...adapter.fresh(),...remote,custom:Array.isArray(local?.custom)?local.custom:[]};delete result.schemaVersion;
 for(const key of ['progress','saved','notes','review'])for(const [id,v] of Object.entries(local?.[key]||{}))if(id.startsWith('custom-'))result[key][id]=v;
 return result;
}
function configValid(){return /^https:\/\/[a-z0-9-]+\.supabase\.co\/?$/.test(config.url||'')&&/^sb_publishable_[A-Za-z0-9_-]+$/.test(config.publishableKey||'');}
function storageKey(uid){return 'lumen-v1:account:'+uid;}
function readCache(uid){try{let c=JSON.parse(localStorage.getItem(storageKey(uid)));return object(c)&&object(c.state)&&(c.revision===null||num(c.revision))?c:null;}catch{return null;}}
function store(){if(!account)return;try{localStorage.setItem(storageKey(account.uid),JSON.stringify({state:adapter.get(),revision:account.revision,dirty:account.dirty,auto:account.auto,conflict:account.conflict}));}catch{notice='Account data could not be saved on this device. Export a copy before leaving.';}}
function refresh(message){if(message!==undefined)notice=message;adapter?.refresh();}
function markChanged(){
 if(!account)return false;
 account.dirty=true;store();schedule();return true;
}
function schedule(){
 clearTimeout(timer);
 if(account?.auto&&account.dirty&&!account.conflict&&!busy&&!writeInFlight)timer=setTimeout(()=>sync(),1500);
}
async function readRemote(uid){
 const {data,error}=await api.from('learning_profiles').select('revision,learning_data').eq('user_id',uid).maybeSingle();
 if(error)throw error;if(data)validate(num(data.revision),'remote revision');
 return data?{revision:data.revision,data:payload(data.learning_data,adapter.catalog())}:null;
}
async function saveRemote(client,uid,revision,data){
 const table=client.from('learning_profiles');
 const query=revision===null?table.insert({user_id:uid,learning_data:data,revision:0}):table.update({learning_data:data,revision:revision+1}).eq('user_id',uid).eq('revision',revision);
 const result=await query.select('revision').maybeSingle();
 if(result.error){if(result.error.code==='23505')return {conflict:true};throw result.error;}
 if(!result.data)return {conflict:true};
 const expected=revision===null?0:revision+1;
 validate(result.data.revision===expected,'unexpected saved revision');
 return {revision:expected};
}
function leaveAccount(){
 clearTimeout(timer);
 if(account){store();account=null;adapter.swap(adapter.guest());}
}
async function handleAuth(event,session){
 if(event==='TOKEN_REFRESHED'&&session?.user?.id===authUser?.id)return;
 if(!session){epoch++;authUser=null;recovery=false;leaveAccount();busy=false;refresh();return;}
 if(event==='PASSWORD_RECOVERY')recovery=true;
 const uid=session.user?.id;if(!uid)return;
 if(account?.uid===uid&&authUser?.id===uid){refresh();return;}
 const generation=++epoch;
 if(account&&account.uid!==uid)leaveAccount();
 authUser=null;busy=true;refresh('Checking account…');
 try{
  const {data,error}=await api.auth.getUser();
  if(generation!==epoch)return;
  if(error||data?.user?.id!==uid||!data.user.email_confirmed_at)throw Error('A verified email account is required.');
  authUser=data.user;
  if(recovery){busy=false;refresh('Choose a new password before continuing.');return;}
  const remote=await readRemote(uid);if(generation!==epoch)return;
  const cached=readCache(uid),rev=remote?.revision??null;
  const conflict=!!(cached?.dirty&&(cached.revision!==rev||cached.conflict));
  const dataToShow=cached?.dirty?payload(cached.state,adapter.catalog()):remote?.data||payload(adapter.fresh(),adapter.catalog());
  account={uid,revision:cached?.dirty?cached.revision:rev,dirty:!!cached?.dirty,auto:!!cached?.auto,conflict};
  adapter.swap(withLocalCustom(dataToShow,cached?.state));
  store();busy=false;refresh(conflict?'Cloud and local progress differ. Choose which copy to keep.':'Signed in. Guest data remains separate.');
  schedule();
 }catch(e){if(generation===epoch){busy=false;refresh('Could not load a verified account. Guest data is unchanged; retry sign-in or sign out.');}}
}
async function sync(forceRevision){
 if(!account||busy||writeInFlight||(account.conflict&&forceRevision===undefined))return;
 const current=account,uid=current.uid,revision=forceRevision===undefined?current.revision:forceRevision;
 let snapshot;
 try{snapshot=payload(adapter.get(),adapter.catalog());}catch(e){refresh(e.message);return;}
 const json=JSON.stringify(snapshot);writeInFlight=true;store();refresh('Saving account progress…');
 try{
  const result=await saveRemote(api,uid,revision,snapshot);
  if(account!==current)return;
  if(result.conflict){current.conflict=true;current.dirty=true;current.auto=false;refresh('Another device changed this profile. Choose cloud or local progress.');}
  else{current.revision=result.revision;current.conflict=false;current.dirty=JSON.stringify(payload(adapter.get(),adapter.catalog()))!==json;refresh(current.dirty?'New changes are waiting to sync.':'Cloud progress saved.');}
  store();
 }catch(e){if(account===current){current.dirty=true;store();refresh('Cloud save failed. Your local copy is retained; retry when online.');}}
 finally{writeInFlight=false;if(account===current&&current.dirty&&current.auto&&!current.conflict&&notice==='New changes are waiting to sync.')schedule();adapter?.refresh();}
}
async function resolve(useLocal){
 if(!account||busy||writeInFlight)return;
 const current=account;busy=true;refresh('Checking the latest cloud version…');
 try{
  const row=await readRemote(current.uid);if(account!==current)return;
  if(!confirm(useLocal?'Replace the current cloud learning data with this device’s copy?':'Replace this device’s synced learning data with the cloud copy? Local custom lessons are retained.')){refresh('No copy was replaced.');return;}
  if(useLocal){busy=false;await sync(row?.revision??null);return;}
  const local=adapter.get();current.revision=row?.revision??null;current.conflict=false;current.dirty=false;current.auto=false;
  adapter.swap(withLocalCustom(row?.data||payload(adapter.fresh(),adapter.catalog()),local));store();refresh('Loaded cloud progress.');
 }catch{refresh('Could not read the cloud copy. Local data was retained.');}
 finally{busy=false;adapter?.refresh();}
}
function panel(){
 if(!enabled)return '';
 let body='';
 if(recovery&&authUser){body='<form id="lumen-account-form" data-mode="password"><label>New password<input name="password" type="password" autocomplete="new-password" required minlength="8"></label><button class="primary" type="submit">Update password</button></form>';}
 else if(account){
  body='<p>'+esc(authUser?.email||'Verified account')+'</p><small>Progress stays in a separate device profile. Custom lessons stay on this device.</small><div class="row" style="flex-wrap:wrap;margin-top:12px">'+(account.conflict?'<button class="secondary" data-account-action="cloud">Use cloud copy</button><button class="secondary" data-account-action="local">Keep local copy</button>':'<button class="primary" data-account-action="sync">Sync now</button><button class="secondary" data-account-action="auto">'+(account.auto?'Turn automatic sync off':'Turn automatic sync on')+'</button>')+(account.revision===null&&!account.conflict?'<button class="secondary" data-account-action="import">Import guest progress</button>':'')+'<button class="secondary" data-account-action="signout">Sign out</button></div><p class="muted">'+(account.dirty?'Local changes not synced.':'No pending local changes.')+'</p>';
 }else if(authUser){body='<button class="secondary" data-account-action="signout">Sign out</button><button class="secondary" data-account-action="retry">Retry loading profile</button>';}
 else if(api){body='<form id="lumen-account-form"><label>Email<input name="email" type="email" required autocomplete="email"></label><label>Password<input name="password" type="password" autocomplete="current-password" required></label><div class="row"><button class="primary" type="submit" value="signin">Sign in</button><button class="secondary" type="submit" value="signup">Register</button></div><button class="link" type="button" data-account-action="recover">Forgot password?</button></form><p class="muted">Optional: accounts use Supabase to store learning progress, bookmarks, and notes. Guest learning remains available.</p>';}
 else body='<p>Accounts are not available at the moment. Continue learning as a guest.</p>';
 return '<section class="section"><div class="sectionhead"><h2>Account</h2></div><div class="panel" aria-busy="'+busy+'">'+body+(notice?'<p role="status">'+esc(notice)+'</p>':'')+'</div></section>';
}
async function action(kind){
 if(!api||busy||writeInFlight)return;
 if(kind==='sync')return sync();
 if(kind==='cloud'||kind==='local')return resolve(kind==='local');
 if(kind==='auto'&&account){if(account.auto){account.auto=false;clearTimeout(timer);}else{if(!confirm('Automatically send this account’s learning progress, bookmarks and notes to Supabase?'))return;account.auto=true;}store();refresh(account.auto?'Automatic sync enabled.':'Automatic sync disabled.');schedule();return;}
 if(kind==='import'&&account&&account.revision===null&&!account.conflict){
  if(!confirm('Replace this account’s local learning progress with your guest progress? Your original guest copy is preserved; custom lessons remain in the guest profile.'))return;
  try{adapter.swap(withLocalCustom(payload(adapter.guest(),adapter.catalog()),adapter.get()));account.dirty=true;store();refresh('Guest progress copied. Sync when ready.');schedule();}catch(e){refresh(e.message);}return;
 }
 if(kind==='retry'){const {data}=await api.auth.getSession();return handleAuth('SIGNED_IN',data?.session);}
 if(kind==='signout'){
  if(account?.dirty&&!confirm('Sign out with unsynced changes? They remain in this account’s local device profile.'))return;
  busy=true;try{const {error}=await api.auth.signOut({scope:'local'});if(error)throw error;epoch++;leaveAccount();authUser=null;recovery=false;refresh('Signed out. Guest progress restored.');}catch{refresh('Could not sign out. Try again.');}finally{busy=false;adapter?.refresh();}return;
 }
 if(kind==='recover'){const email=document.querySelector('#lumen-account-form input[name="email"]');if(!email?.reportValidity())return;busy=true;try{const {error}=await api.auth.resetPasswordForEmail(email.value,{redirectTo:location.origin+location.pathname});if(error)throw error;refresh('If the account exists, a recovery email will be sent.');}catch{refresh('Could not request recovery. Try again later.');}finally{busy=false;adapter?.refresh();}}
}
async function submit(e){
 if(e.target.id!=='lumen-account-form')return;e.preventDefault();if(!api||busy)return;
 const form=new FormData(e.target),password=String(form.get('password')||''),email=String(form.get('email')||'').trim(),mode=e.target.dataset.mode||e.submitter?.value||'signin';
 if((mode==='signup'||mode==='password')&&password.length<8){refresh('Use a password of at least eight characters.');return;}
 busy=true;
 try{
  if(mode==='password'){
   const {error}=await api.auth.updateUser({password});if(error)throw error;
   recovery=false;const {data}=await api.auth.getSession();await handleAuth('SIGNED_IN',data.session);
  }else if(mode==='signup'){
   const {error}=await api.auth.signUp({email,password,options:{emailRedirectTo:location.origin+location.pathname}});if(error)throw error;
   refresh('Check your email to verify the account before signing in.');
  }else{
   const {error}=await api.auth.signInWithPassword({email,password});if(error)throw error;refresh('Checking your account…');
  }
 }catch{refresh('Account request failed. Check your details or try again later.');}
 finally{busy=false;adapter?.refresh();}
}
async function start(a){
 adapter=a;if(!enabled)return;
 if(!configValid()){refresh('Account configuration is incomplete.');return;}
 document.addEventListener('submit',submit);
 document.addEventListener('click',e=>{const b=e.target.closest('[data-account-action]');if(b){e.preventDefault();action(b.dataset.accountAction);}});
 window.addEventListener('online',()=>schedule());
 try{
  await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='./supabase-client.js';script.onload=resolve;script.onerror=reject;document.head.append(script);});
  if(!window.supabase?.createClient)throw Error('Missing reviewed SDK');
  api=window.supabase.createClient(config.url,config.publishableKey,{auth:{storage:sessionStorage,persistSession:true,autoRefreshToken:true,detectSessionInUrl:true}});
  api.auth.onAuthStateChange((event,session)=>setTimeout(()=>handleAuth(event,session),0));
  refresh();
 }catch{refresh('Account service is unavailable. Guest mode still works.');}
}
window.LumenAccounts={start,panel,markChanged,isActive:()=>!!account,payload,saveRemote,enabled:()=>enabled};
})();
