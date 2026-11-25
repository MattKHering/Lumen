/* Lesson-specific diagrams. All data is illustrative and tied to the lesson text. */
window.LumenQualityArt=function(c,cls='cover',step=-1){
 const bg='#f1eadc',ink='#345746',gold='#bd9658',muted='#716b60',accent='#a45d49';
 const E=s=>String(s).replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
 const t=(x,y,s,size=12,anchor='middle',fill=ink)=>'<text x="'+x+'" y="'+y+'" fill="'+fill+'" font-family="system-ui,sans-serif" font-size="'+size+'" text-anchor="'+anchor+'">'+E(s)+'</text>';
 const line=(x,y,x2,y2,color=ink,width=2,extra='')=>'<line x1="'+x+'" y1="'+y+'" x2="'+x2+'" y2="'+y2+'" stroke="'+color+'" stroke-width="'+width+'" stroke-linecap="round" '+extra+'/>';
 const rect=(x,y,w,h,fill=gold,extra='')=>'<rect x="'+x+'" y="'+y+'" width="'+w+'" height="'+h+'" rx="4" fill="'+fill+'" '+extra+'/>';
 const dot=(x,y,r=4,fill=ink)=>'<circle cx="'+x+'" cy="'+y+'" r="'+r+'" fill="'+fill+'"/>';
 let a='',title='',desc='';
 switch(c.id){
 case 'depth-physics-understanding-rotational-motion':
 title='Leverage and torque';desc='A perpendicular force of 12 newtons acting half a meter from a pivot produces 6 newton meters of torque.';
 a=rect(40,77,260,35,gold,'stroke="'+ink+'" stroke-width="1.5"')+dot(48,94,9)+line(291,28,291,76,accent,3)+'<path d="M284 66l7 10 7-10" fill="none" stroke="'+accent+'" stroke-width="3"/>'+t(280,20,'F = 12 N',13,'middle',accent)+t(48,65,'Pivot')+line(48,135,291,135)+line(48,128,48,142)+line(291,128,291,142)+t(170,153,'r = 0.5 m',13)+t(180,181,'τ = rF = 6 N·m',18);
 break;
 case 'plus-mathematics-how-quadratic-equations-model-motion':
 title='Height over time';desc='The ball follows h(t)=20t−5t², reaching 20 meters at two seconds and returning to ground at four seconds.';
 a=line(45,165,322,165)+line(45,165,45,22)+t(20,24,'m',10)+t(327,179,'s',10)+[0,1,2,3,4].map(n=>line(45+n*65,165,45+n*65,170)+t(45+n*65,184,n,11)).join('')+[0,10,20].map(n=>line(40,165-6*n,45,165-6*n)+t(32,169-6*n,n,11,'end')).join('')+line(45,45,175,45,muted,1,'stroke-dasharray="4 4"')+line(175,45,175,165,muted,1,'stroke-dasharray="4 4"')+'<path d="M45 165 Q175 -75 305 165" fill="none" stroke="'+ink+'" stroke-width="3"/>'+dot(45,165)+dot(175,45,5,accent)+dot(305,165)+t(175,32,'20 m at 2 s',13,'middle',accent)+t(180,207,'h(t) = 20t − 5t²',15);
 break;
 case 'plus-health-why-health-screening-can-produce-false-alarms':
 title='What a positive result means';desc='Of 108 positive results, 9 are true positives and 99 false positives in the hypothetical screening example.';
 a=t(180,25,'1,000 people tested',16)+rect(24,42,312,20,'#c8d7c9')+rect(24,42,3.12,20,accent)+t(24,80,'10 affected',11,'start',accent)+t(336,80,'990 unaffected',11,'end')+line(180,86,180,103)+t(180,121,'108 positive results',14)+rect(24,132,312,28,gold)+rect(24,132,26,28,ink)+t(180,178,'9 true positives / 99 false positives',12)+t(180,201,'9 ÷ 108 ≈ 8.3%',17);
 break;
 case 'plus-mathematics-understanding-conditional-probability':
 title='Changing the denominator';desc='Of twenty red cards, five are marked; of ten marked cards, five are red.';
 a='<circle cx="128" cy="97" r="65" fill="#c87968" fill-opacity=".55" stroke="'+accent+'" stroke-width="2"/><circle cx="220" cy="97" r="65" fill="#e1c789" fill-opacity=".65" stroke="'+gold+'" stroke-width="2"/>'+t(97,83,'Red only',12)+t(97,103,'15',18)+t(174,83,'Both',11)+t(174,103,'5',18)+t(251,83,'Marked only',11)+t(251,103,'5',18)+t(180,176,'Marked given red: 5/20 = 25%',13)+t(180,197,'Red given marked: 5/10 = 50%',13);
 break;
 case 'plus-finance-why-rebalancing-changes-portfolio-risk':
 title='Allocation drift and rebalancing';desc='A 60 percent stock allocation drifts to 66.7 percent and is restored to 60 percent by shifting 800 dollars into bonds.';
 const bar=(y,share,label,left,right)=>t(22,y-6,label,11,'start')+rect(22,y,316,24,gold)+rect(22,y,316*share,24,ink)+t(22+158*share,y+16,left,11,'middle','#fff')+t(22+316*(share+(1-share)/2),y+16,right,11);
 a=bar(32,.6,'Initial · $10,000','$6,000','$4,000')+bar(91,2/3,'After stock growth · $12,000','$8,000','$4,000')+bar(150,.6,'After $800 transfer · $12,000','$7,200','$4,800')+rect(55,190,11,11,ink)+t(71,200,'Stocks',11,'start')+rect(195,190,11,11,gold)+t(211,200,'Bonds',11,'start');
 break;
 case 'plus-health-how-hearing-protection-reduces-exposure':
 title='NIOSH equal-dose illustration';desc='With the NIOSH 3 dB exchange rate, the recommended exposure durations at 85, 88 and 91 dBA are 8, 4 and 2 hours.';
 a=t(180,24,'Same modeled daily noise dose',14)+line(84,34,84,176)+[8,4,2].map((v,i)=>{let y=49+i*45;return t(72,y+17,(85+3*i)+' dBA',12,'end')+rect(88,y,28*v,26,i===0?ink:gold)+t(98+28*v,y+18,v+' h',12,'start')}).join('')+t(180,199,'+3 dBA → half the duration',14);
 break;
 default:return '';
 }
 return '<svg class="'+E(cls)+'" viewBox="0 0 360 220" role="img" aria-label="'+E(title+'. '+desc)+'" preserveAspectRatio="xMidYMid meet" style="background:'+bg+'"><title>'+E(title)+'</title><desc>'+E(desc)+'</desc><rect width="360" height="220" fill="'+bg+'"/>'+a+'</svg>';
};