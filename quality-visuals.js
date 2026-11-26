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
 title='What a positive result means';desc='Of 585 positive results, 90 are true positives and 495 false positives in the hypothetical screening example.';
 a=t(180,25,'10,000 people tested',16)+rect(24,42,312,20,'#c8d7c9')+rect(24,42,3.12,20,accent)+t(24,80,'100 affected',11,'start',accent)+t(336,80,'9,900 unaffected',11,'end')+line(180,86,180,103)+t(180,121,'585 positive results',14)+rect(24,132,312,28,gold)+rect(24,132,312*90/585,28,ink)+t(180,178,'90 true positives / 495 false positives',12)+t(180,201,'90 ÷ 585 ≈ 15.4%',17);
 break;
 case 'plus-mathematics-understanding-conditional-probability':
 title='Changing the denominator';desc='Of twenty red cards, five are marked; of ten marked cards, five are red.';
 a='<circle cx="128" cy="97" r="65" fill="#c87968" fill-opacity=".55" stroke="'+accent+'" stroke-width="2"/><circle cx="220" cy="97" r="65" fill="#e1c789" fill-opacity=".65" stroke="'+gold+'" stroke-width="2"/>'+t(97,83,'Red only',12)+t(97,103,'15',18)+t(174,83,'Both',11)+t(174,103,'5',18)+t(251,83,'Marked only',11)+t(251,103,'5',18)+t(180,176,'Marked given red: 5/20 = 25%',13)+t(180,197,'Red given marked: 5/10 = 50%',13);
 break;
 case 'plus-finance-why-rebalancing-changes-portfolio-risk':
 title='Allocation drift and rebalancing';desc='A 60 percent stock allocation drifts to about 65.2 percent and is restored to 60 percent by shifting 600 dollars into bonds.';
 const bar=(y,share,label,left,right)=>t(22,y-6,label,11,'start')+rect(22,y,316,24,gold)+rect(22,y,316*share,24,ink)+t(22+158*share,y+16,left,11,'middle','#fff')+t(22+316*(share+(1-share)/2),y+16,right,11);
 a=bar(32,.6,'Initial · $10,000','$6,000','$4,000')+bar(91,7500/11500,'After stock growth · $11,500','$7,500','$4,000')+bar(150,.6,'After $600 transfer · $11,500','$6,900','$4,600')+rect(55,190,11,11,ink)+t(71,200,'Stocks',11,'start')+rect(195,190,11,11,gold)+t(211,200,'Bonds',11,'start');
 break;
 case 'plus-health-how-hearing-protection-reduces-exposure':
 title='NIOSH equal-dose illustration';desc='With the NIOSH 3 dB exchange rate, the recommended exposure durations at 85, 88 and 91 dBA are 8, 4 and 2 hours.';
 a=t(180,24,'Same modeled daily noise dose',14)+line(84,34,84,176)+[8,4,2].map((v,i)=>{let y=49+i*45;return t(72,y+17,(85+3*i)+' dBA',12,'end')+rect(88,y,28*v,26,i===0?ink:gold)+t(98+28*v,y+18,v+' h',12,'start')}).join('')+t(180,199,'+3 dBA → half the duration',14);
 break;
 case 'plus-psychology-how-confirmation-bias-affects-belief-updating':
 title='Evidence changes odds';desc='Prior odds of one to four become one to two with a likelihood ratio of two.';
 a=t(180,24,'Hypothesis A vs B',15)+t(26,54,'Prior odds',12,'start')+rect(26,64,62,30,ink)+rect(88,64,246,30,gold)+t(57,84,'A: 1',12,'middle','#fff')+t(211,84,'B: 4',12)+t(180,116,'Likelihood ratio × 2 for A',13)+t(26,138,'Posterior odds',12,'start')+rect(26,147,103,30,ink)+rect(129,147,205,30,gold)+t(77,167,'A: 1',12,'middle','#fff')+t(231,167,'B: 2',12)+t(180,203,'Evidence favors A; B is still more likely.',11);
 break;
 case 'plus-finance-why-sequence-of-returns-matters':
 title='Return order and withdrawals';desc='Starting with 100 dollars, a 10 dollar year-end withdrawal each year leads to 78 dollars or 74 dollars depending on return order.';
 a=t(180,24,'Start with $100',16)+t(89,51,'+20% then −20%',12)+t(271,51,'−20% then +20%',12)+rect(22,62,134,34,ink)+rect(204,62,134,34,gold)+t(89,83,'$110',17,'middle','#fff')+t(271,83,'$70',17)+line(89,96,89,132)+line(271,96,271,132)+t(180,117,'After first $10 withdrawal',10)+rect(22,134,134,38,ink)+rect(204,134,134,38,gold)+t(89,158,'$78',18,'middle','#fff')+t(271,158,'$74',18)+t(180,192,'After second $10 withdrawal',12)+t(180,207,'Same returns, different outcomes.',11);
 break;
 case 'plus-health-how-caffeine-affects-alertness':
 title='Illustrative caffeine half-life';desc='With a fixed five-hour half-life, 100 milligrams declines to 50 milligrams at five hours and 25 milligrams at ten hours.';
 a=line(44,165,328,165)+line(44,165,44,30)+[0,25,50,75,100].map(v=>t(35,169-v*1.22,v,10,'end')).join('')+t(23,19,'mg',10)+[0,5,10].map((v,i)=>t(44+i*130,184,v+' h',11)).join('')+'<path d="M44 43 Q100 74 174 104 Q230 124 304 134.5" fill="none" stroke="'+ink+'" stroke-width="3"/>'+dot(44,43,5)+dot(174,104,5)+dot(304,134.5,5)+t(178,94,'50 mg',12)+t(287,123,'25 mg',12)+t(180,204,'Model only — actual half-life varies.',11);
 break;
 case 'depth-mathematics-reading-linear-equations':
 title='Slope and intercept';desc='The line y=2x+1 crosses the vertical axis at 1 and passes through (2,5) and (6,13). Rise 8 divided by run 4 gives slope 2.';
 a=line(44,178,328,178)+line(44,178,44,20)+line(44,166,284,22,ink,3)+line(124,118,284,118,gold,2,'stroke-dasharray="5 4"')+line(284,118,284,22,gold,2,'stroke-dasharray="5 4"')+dot(44,166,4)+dot(124,118,5)+dot(284,22,5)+t(42,156,'1',11,'end')+t(117,106,'(2,5)',11)+t(271,15,'(6,13)',11)+t(204,132,'Run = 4',12)+t(293,73,'Rise = 8',11,'start')+t(180,203,'Slope = 8 ÷ 4 = 2',15);
 break;
 case 'plus-mathematics-understanding-vectors':
 title='Vector components';desc='Vector (3,4) has horizontal component 3, vertical component 4 and length 5.';
 a=line(55,170,310,170)+line(55,170,55,22)+line(55,170,160,170,gold,3)+line(160,170,160,30,gold,3,'stroke-dasharray="5 4"')+line(55,170,160,30,ink,3)+'<path d="M146 36l14 -6 -4 15" stroke="'+ink+'" fill="none" stroke-width="3"/>'+t(108,187,'3',13)+t(171,104,'4',13,'start')+t(84,88,'Length = 5',13)+t(160,21,'(3,4)',12)+t(180,210,'√(3² + 4²) = 5',15);
 break;
 case 'depth-statistics-understanding-mean-and-median':
 title='An extreme value pulls the mean';desc='The values 2, 4, 6, 8 have mean and median 5. Replacing 8 with 80 moves the mean to 23; the median remains 5.';
 a=t(180,25,'Original: 2, 4, 6, 8',14)+t(180,47,'Mean = 5   •   Median = 5',12)+line(28,80,332,80)+[2,4,6,8].map(x=>dot(28+x*3.8,80,3,ink)).join('')+t(180,110,'Replace 8 with 80',14)+line(28,143,332,143)+[2,4,6,80].map(x=>dot(28+x*3.8,143,3,ink)).join('')+dot(47,143,5,gold)+dot(115.4,143,5,accent)+t(47,164,'Median 5',11)+t(115.4,130,'Mean 23',11,'middle',accent)+t(332,163,'80',11)+t(180,203,'The middle value is much less sensitive.',11);
 break;
 case 'plus-statistics-understanding-standard-error':
 title='Sample size and precision';desc='With population standard deviation 12, sample size 36 gives standard error 2, and size 144 gives standard error 1.';
 a=t(180,25,'Same population spread: σ = 12',14)+t(22,61,'n = 36',12,'start')+rect(92,43,224,28,ink)+t(204,62,'SE = 2',13,'middle','#fff')+t(22,116,'n = 144',12,'start')+rect(92,99,112,28,gold)+t(148,117,'SE = 1',13)+t(180,166,'4× sample size → half the standard error',13)+t(180,193,'SE = σ / √n',17);
 break;
 case 'depth-cybersecurity-what-multifactor-authentication-protects':
 title='Independent authentication factors';desc='A password is a knowledge factor. A hardware key is a possession factor. Combining different factors strengthens authentication.';
 a=rect(18,38,144,65,gold)+t(90,62,'Knowledge',14)+t(90,82,'Password',12)+rect(198,38,144,65,ink)+t(270,62,'Possession',14,'middle','#fff')+t(270,82,'Hardware key',12,'middle','#fff')+t(180,77,'+',22)+line(90,103,90,125)+line(270,103,270,125)+line(90,125,270,125)+line(180,125,180,145)+rect(90,145,180,40,ink)+t(180,170,'Authentication',14,'middle','#fff')+t(180,207,'Two passwords are not two factor types.',11);
 break;
 case 'plus-cybersecurity-what-security-segmentation-achieves':
 title='Enforced network boundaries';desc='Guest devices can use an approved external path but do not need access to administrative services.';
 a=rect(22,38,134,54,gold)+t(89,61,'Guest network',13)+t(89,77,'Guest devices',11)+rect(204,38,134,54,ink)+t(271,61,'Admin network',13,'middle','#fff')+t(271,77,'Private services',11,'middle','#fff')+line(156,65,204,65,accent,2,'stroke-dasharray="4 4"')+t(180,54,'×',20,'middle',accent)+line(89,92,89,142,ink,2)+rect(22,142,134,38,ink)+t(89,165,'Approved access',12,'middle','#fff')+t(180,204,'Enforcement matters more than network names.',11);
 break;
 case 'depth-financial-literacy-how-loan-amortization-works':
 title='Same payment, changing allocation';desc='The first 300 dollar payment includes 100 dollars interest and 200 dollars principal. The next includes 98 dollars interest and 202 dollars principal.';
 a=t(22,24,'Payment 1 · $300',13,'start')+rect(22,36,316,32,gold)+rect(22,36,316/3,32,ink)+t(75,56,'$100',12,'middle','#fff')+t(233,56,'$200',12)+t(22,95,'Payment 2 · $300',13,'start')+rect(22,107,316,32,gold)+rect(22,107,316*98/300,32,ink)+t(74,127,'$98',12,'middle','#fff')+t(232,127,'$202',12)+rect(52,160,12,12,ink)+t(70,171,'Interest',12,'start')+rect(204,160,12,12,gold)+t(222,171,'Principal',12,'start')+t(180,202,'Illustrative fixed-rate monthly model',11);
 break;
 case 'plus-financial-literacy-how-a-deductible-differs-from-a-premium':
 title='Premium plus deductible';desc='Plan A costs 600 dollars per year with a 500 dollar deductible. Plan B costs 360 dollars with a 1000 dollar deductible.';
 a=t(22,25,'One covered loss above both deductibles',13,'start')+t(22,54,'A · $1,100',12,'start')+rect(22,63,316*1100/1360,30,gold)+rect(22,63,316*600/1360,30,ink)+t(92,82,'$600',12,'middle','#fff')+t(220,82,'$500',12)+t(22,116,'B · $1,360',12,'start')+rect(22,125,316,30,gold)+rect(22,125,316*360/1360,30,ink)+t(64,144,'$360',12,'middle','#fff')+t(223,144,'$1,000',12)+rect(54,180,12,12,ink)+t(72,191,'Premium',12,'start')+rect(200,180,12,12,gold)+t(218,191,'Deductible',12,'start');
 break;
 case 'depth-biology-how-enzymes-speed-reactions':
 title='Enzymes change the pathway';desc='The catalyzed reaction has a lower activation barrier than the uncatalyzed reaction, with the same starting and ending energy.';
 a=line(42,174,329,174)+line(42,174,42,25)+t(16,28,'Energy',10,'start')+'<path d="M48 130 Q100 130 150 42 T315 148" fill="none" stroke="'+gold+'" stroke-width="3"/><path d="M48 130 Q105 130 153 91 T315 148" fill="none" stroke="'+ink+'" stroke-width="3"/>'+dot(48,130,4)+dot(315,148,4)+t(158,26,'Without enzyme',12)+t(181,83,'With enzyme',12)+t(47,153,'Start',10,'start')+t(314,166,'Products',10,'end')+t(186,203,'Reaction progress →',13);
 break;
 case 'plus-biology-how-populations-exchange-genes':
 title='Allele frequency after gene flow';desc='A recipient gene pool at frequency 0.20 mixes with a 10 percent migrant contribution at frequency 0.80. The resulting frequency is 0.26.';
 a=t(22,27,'Recipient contribution: 90%',13,'start')+rect(22,38,316,23,gold)+rect(22,38,316*.2,23,ink)+t(54,54,'20%',11,'middle','#fff')+t(22,87,'Migrant contribution: 10%',13,'start')+rect(22,98,316,23,gold)+rect(22,98,316*.8,23,ink)+t(148,114,'80%',11,'middle','#fff')+t(22,147,'Mixed gene pool',13,'start')+rect(22,158,316,23,gold)+rect(22,158,316*.26,23,ink)+t(63,174,'26%',11,'middle','#fff')+t(180,205,'0.9 × 0.20 + 0.1 × 0.80 = 0.26',12);
 break;
 case 'depth-chemistry-how-chemical-equations-conserve-matter':
 title='Atoms are conserved';desc='Two hydrogen molecules plus one oxygen molecule yield two water molecules. Four hydrogen atoms and two oxygen atoms appear on both sides.';
 const mol=(x,y,type)=>type==='H'?dot(x-10,y,9,gold)+dot(x+10,y,9,gold):type==='O'?dot(x-12,y,12,accent)+dot(x+12,y,12,accent):dot(x,y,12,accent)+dot(x-13,y+12,8,gold)+dot(x+13,y+12,8,gold);
 a=t(80,26,'Reactants',14)+t(282,26,'Products',14)+mol(45,68,'H')+mol(100,68,'H')+mol(76,123,'O')+t(180,94,'→',27)+mol(248,80,'W')+mol(313,80,'W')+t(80,154,'4 H + 2 O',13)+t(280,154,'4 H + 2 O',13)+dot(95,180,6,gold)+t(107,184,'H',11,'start')+dot(237,180,6,accent)+t(249,184,'O',11,'start')+t(180,207,'2H₂ + O₂ → 2H₂O',14);
 break;
 case 'plus-chemistry-how-chromatography-separates-mixtures':
 title='Retention factor';desc='A spot traveling 3 centimeters relative to a solvent front traveling 6 centimeters has retention factor 0.50.';
 a=rect(40,22,120,160,'#ede7d5')+line(45,157,155,157,muted,1,'stroke-dasharray="4 4"')+line(45,37,155,37,ink,2,'stroke-dasharray="4 4"')+dot(100,97,9,accent)+dot(100,157,3,muted)+line(174,157,174,37,ink,2)+line(169,157,179,157)+line(169,37,179,37)+t(185,62,'6 cm front',12,'start')+line(174,157,174,97,accent,3)+line(169,97,179,97,accent)+t(185,127,'3 cm spot',12,'start')+t(100,174,'Origin',11)+t(180,206,'Rf = 3 ÷ 6 = 0.50',15);
 break;
 default:return '';
 }
 return '<svg class="'+E(cls)+'" viewBox="0 0 360 220" role="img" aria-label="'+E(title+'. '+desc)+'" preserveAspectRatio="xMidYMid meet" style="background:'+bg+'"><title>'+E(title)+'</title><desc>'+E(desc)+'</desc><rect width="360" height="220" fill="'+bg+'"/>'+a+'</svg>';
};