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

 case 'plus-astronomy-how-craters-form':
 title='Impact excavation and modification';desc='An incoming projectile produces a cavity, an ejecta blanket and, in large craters, possible central uplift.';
 a=line(20,52,340,52,muted,1)+dot(108,19,7,accent)+line(110,25,145,48,accent,3)+t(65,18,'Projectile',11)+ '<path d="M20 110H87Q180 192 273 110H340V192H20Z" fill="#d5ba8b" stroke="'+ink+'"/><path d="M87 110Q180 192 273 110" fill="none" stroke="'+ink+'" stroke-width="3"/>'+line(145,61,74,88,accent,2)+line(166,63,266,88,accent,2)+t(180,102,'Excavation',12)+t(58,99,'Ejecta',11)+t(301,99,'Ejecta',11)+t(180,207,'Cavity wider than projectile',13);
 break;
 case 'plus-astronomy-why-the-moon-has-phases':
 title='Lunar viewing geometry';desc='Sunlight comes from the left. New Moon lies between Earth and Sun; full Moon lies opposite. Quarter positions are perpendicular.';
 a=t(30,27,'Sunlight',11)+[55,90,125,160].map(y=>line(12,y,56,y,gold,2)+t(61,y+4,'›',14)).join('')+'<circle cx="200" cy="110" r="75" fill="none" stroke="'+muted+'" stroke-dasharray="4 4"/>'+dot(200,110,16,ink)+t(200,114,'Earth',9,'middle','#fff')+[ [125,110],[200,35],[275,110],[200,185] ].map(([x,y])=>dot(x,y,13,'#777')+'<path d="M'+x+' '+(y-13)+'a13 13 0 0 0 0 26Z" fill="'+gold+'"/>').join('')+t(100,136,'New',12)+t(200,15,'Quarter',11)+t(303,136,'Full',12)+t(200,211,'Quarter',11);
 break;
 case 'plus-astronomy-how-comets-develop-tails':
 title='Two comet tails';desc='The ion tail extends roughly away from the Sun; the dust tail curves as grains retain orbital motion.';
 a=dot(43,111,26,gold)+t(43,151,'Sun',13)+line(77,111,156,111,gold,2)+dot(168,111,13,ink)+'<circle cx="168" cy="111" r="23" fill="none" stroke="'+muted+'"/><path d="M178 105L337 91L337 123L178 117Z" fill="#a6cbd8" opacity=".8"/><path d="M175 115Q250 126 332 188Q263 157 175 125Z" fill="'+gold+'" opacity=".8"/>'+t(270,78,'Ion tail',13)+t(270,200,'Curved dust tail',13)+t(168,77,'Nucleus / coma',11);
 break;
 case 'plus-astronomy-what-a-supernova-leaves-behind':
 title='Core-collapse remnant';desc='Expanding ejecta surround a possible compact remnant; a normal Type Ia explosion generally leaves no compact survivor.';
 a='<circle cx="180" cy="101" r="73" fill="#d9b77e" opacity=".45" stroke="'+accent+'" stroke-width="2"/><circle cx="180" cy="101" r="49" fill="none" stroke="'+accent+'" stroke-dasharray="4 4"/>'+dot(180,101,9,ink)+line(190,101,286,58)+t(290,47,'Compact core',11)+line(110,80,48,49,accent)+t(47,35,'Ejecta',11)+t(180,185,'Expanding shocked gas',13)+t(180,204,'Normal Type Ia: usually no compact survivor',11);
 break;
 case 'plus-astronomy-how-white-dwarfs-cool':
 title='Same radius, different luminosity';desc='At equal radius, a white dwarf at 10,000 K radiates sixteen times as much power as one at 5,000 K.';
 a=dot(92,58,21,'#e6d9aa')+dot(268,58,21,'#ba8358')+t(92,94,'10,000 K',13)+t(268,94,'5,000 K',13)+rect(31,115,128,24,ink)+rect(207,115,8,24,accent)+t(92,158,'16 units',13)+t(268,158,'1 unit',13)+t(180,199,'L ∝ T⁴ at fixed radius',16);
 break;
 case 'plus-astronomy-what-pulsars-reveal':
 title='Pulsar timing';desc='A rotating beam crosses the observer every 0.02 seconds in this example, giving a 50 hertz pulse rate.';
 a=line(35,154,331,154)+line(35,154,35,31)+[0,1,2,3].map(n=>'<path d="M'+(48+n*82)+' 154l8 -86 8 86" fill="none" stroke="'+ink+'" stroke-width="2.5"/>').join('')+[0,1,2,3].map(n=>t(56+n*82,173,(n*.02).toFixed(2),11)).join('')+t(13,27,'Signal',10,'start')+t(180,190,'Time (seconds)',11)+t(180,209,'P = 0.02 s → 50 Hz',14);
 break;
 case 'plus-astronomy-how-a-planet-s-atmosphere-is-studied':
 title='Transmission depth';desc='The thin atmosphere adds a wavelength-dependent annulus to the opaque planetary disk during transit.';
 a=dot(112,100,72,gold)+dot(112,100,26,'#9ebfc1')+dot(112,100,20,ink)+line(134,88,243,48)+t(246,39,'Atmosphere',12)+line(116,104,243,112)+t(258,128,'Opaque disk',12)+t(180,190,'Δδ ≈ 2Rₚz / R★²',17)+t(180,208,'Example: 200 ppm',12);
 break;
 case 'plus-astronomy-why-galaxies-rotate-unexpectedly':
 title='Illustrative rotation curve';desc='At ten kiloparsecs both models have 200 km/s; at twenty kiloparsecs a fixed enclosed mass predicts about 141 km/s while a flat curve remains at 200.';
 a=line(45,169,329,169)+line(45,169,45,27)+t(15,22,'km/s',10,'start')+t(325,188,'kpc',10)+[0,100,200].map(n=>t(39,173-n*.6,n,10,'end')).join('')+line(45,49,325,49,muted,1,'stroke-dasharray="3 5"')+line(180,49,320,49,ink,3)+'<path d="M180 49Q240 72 320 84.4" fill="none" stroke="'+accent+'" stroke-width="3"/>'+t(250,39,'Flat: 200',11)+t(264,102,'Fixed mass: 141',11)+t(180,185,'10',11)+t(320,185,'20',11)+t(180,207,'Spherical approximation',12);
 break;
 case 'plus-astronomy-how-gravitational-lensing-works':
 title='Ideal gravitational lens';desc='Light from a source bends around a foreground lens toward an observer, creating a ring in the aligned case.';
 a=dot(35,105,9,gold)+dot(180,105,20,ink)+dot(325,105,7,accent)+'<path d="M35 105Q105 35 180 55Q250 75 325 105M35 105Q105 175 180 155Q250 135 325 105" fill="none" stroke="'+gold+'" stroke-width="3"/>'+t(35,133,'Source',11)+t(180,111,'Lens',10,'middle','#fff')+t(325,133,'Observer',11)+t(180,189,'Aligned point lens: Einstein ring',13)+t(180,207,'θE ∝ √M (fixed distances)',12);
 break;
 case 'plus-astronomy-how-astronomers-detect-stellar-motion':
 title='A small Doppler redshift';desc='The observed absorption line at 600.006 nm lies to the red of the laboratory line at 600.000 nm.';
 a=rect(33,45,294,34,'#d8b981')+rect(33,106,294,34,'#d8b981')+rect(110,45,4,34,ink)+rect(250,106,4,34,accent)+t(33,35,'Laboratory',12,'start')+t(33,96,'Observed',12,'start')+line(112,151,252,151,ink,2)+t(112,169,'600.000',11)+t(252,169,'600.006 nm',11)+t(180,200,'Δλ > 0 → about 3 km/s away',13);
 break;
 case 'plate-tectonics':
 title="Plate boundary motion";desc="Divergent plates separate; convergent plates approach; transform plates slide past.";
 a=t(60,25,'Divergent')+rect(12,75,42,24,ink)+rect(66,75,42,24,ink)+t(60,65,'←  →',20)+t(180,25,'Convergent')+rect(130,75,50,24,ink)+rect(180,75,50,24,gold)+t(180,65,'→  ←',20)+t(300,25,'Transform')+rect(252,55,44,100,ink)+rect(304,55,44,100,gold)+t(274,110,'↑',24,'middle','#fff')+t(326,110,'↓',24)+t(180,195,'Three relative motions',14);
 break;
 case 'water-cycle':
 title="Water storage budget";desc="100 mm input, 40 mm evapotranspiration and 45 mm outflow leave 15 mm stored.";
 a=t(180,25,'100 mm rain')+line(180,35,180,80,accent,3)+rect(85,80,190,64,'#a6c3bd')+t(180,109,'Watershed',16)+t(180,131,'+15 mm',17)+line(85,100,28,55)+t(55,44,'40 mm ET')+line(275,120,335,120)+t(305,109,'45 mm out',10)+t(180,193,'100 − 40 − 45 = 15 mm',16);
 break;
 case 'weather-fronts':
 title="Frontal lifting";desc="Cold air wedges under warm air; warm air glides over cooler air.";
 a=t(90,25,'Cold front')+t(270,25,'Warm front')+'<path d="M12 150V63L155 150Z M192 150L348 92V150Z" fill="#a6c5d3" stroke="'+ink+'"/>'+t(51,136,'Cold')+t(130,76,'Warm')+t(270,75,'Warm')+t(306,138,'Cold')+line(128,112,96,70,accent,3)+line(227,120,293,94,accent,3)+t(90,190,'Steeper lift')+t(270,190,'Gentler lift');
 break;
 case 'volcanoes':
 title="Gas expansion in magma";desc="Gas bubbles expand as magma rises toward lower pressure.";
 a='<path d="M15 150L150 55L170 66L190 66L210 55L345 150Z" fill="#cfb991" stroke="'+ink+'"/><ellipse cx="180" cy="170" rx="60" ry="24" fill="'+accent+'"/><path d="M180 160V67" stroke="'+accent+'" stroke-width="19"/>'+[ [180,141,3],[180,115,5],[180,88,8] ].map(([x,y,r])=>dot(x,y,r,'#f7ebd2')).join('')+t(180,207,'Magma reservoir')+t(252,86,'Expanding gas')+line(190,90,235,90)+t(78,35,'Lower pressure');
 break;
 case 'glaciers':
 title="Ice flow versus retreat";desc="Ice moves downslope while the terminus retreats if loss exceeds supply.";
 a='<path d="M15 45L330 170L330 205H15Z" fill="#c9b790"/><path d="M20 35Q130 75 282 151L248 158L15 62Z" fill="#a7c6d5" stroke="'+ink+'"/>'+line(75,60,192,112,ink,3)+t(128,65,'Ice flow →')+line(280,153,316,169,muted,2,'stroke-dasharray="3 4"')+t(286,145,'Old margin',10)+t(215,177,'New margin',11)+t(180,205,'Retreat ≠ reversed ice flow');
 break;
 case 'minerals':
 title="Rock transformation";desc="Rock can be weathered, buried, metamorphosed or melted and recrystallized.";
 a=rect(15,35,125,36,ink)+t(77,57,'Igneous',13,'middle','#fff')+rect(220,35,125,36,gold)+t(282,57,'Sedimentary')+rect(118,151,124,36,accent)+t(180,174,'Metamorphic',13,'middle','#fff')+line(140,53,220,53)+t(180,43,'→',18)+t(180,22,'Weather / deposit',10)+line(253,72,213,151)+t(272,115,'Heat / pressure',11)+line(136,151,90,72)+t(62,113,'Melt / cool',11)+t(180,207,'Many possible paths');
 break;
 case 'earthquakes':
 title="Focus and epicenter";desc="Seismic waves spread from rupture; the epicenter is the surface point above the focus.";
 a=rect(15,48,330,137,'#d6c29c')+line(80,185,260,48,ink,4)+[24,45,68].map(r=>'<circle cx="172" cy="115" r="'+r+'" fill="none" stroke="'+accent+'"/>').join('')+dot(172,115,6)+line(172,115,172,48,muted,1,'stroke-dasharray="4 4"')+dot(172,48,5,accent)+t(172,34,'Epicenter')+t(222,122,'Focus')+t(58,171,'Fault')+t(180,205,'Waves spread outward');
 break;
 case 'depth-earth-science-how-rivers-shape-landscapes':
 title="Meander cross-section";desc="The outer cut bank erodes while the inner point bar accumulates sediment.";
 a='<path d="M12 65Q180 240 348 65" fill="none" stroke="#a6c5d3" stroke-width="50"/><path d="M12 65Q180 240 348 65" fill="none" stroke="'+ink+'" stroke-dasharray="4 4"/>'+line(180,175,180,210,accent,3)+t(180,215,'Outer cut bank',11)+line(180,105,180,65,gold,3)+t(180,50,'Inner point bar')+t(180,20,'Plan view of a bend');
 break;
 case 'depth-earth-science-how-sedimentary-layers-tell-time':
 title="Cross-cutting relationships";desc="An intrusion cuts older beds but is truncated below a younger bed.";
 a=rect(25,110,310,30,'#c9a875')+rect(25,140,310,30,'#a9b7a5')+rect(25,170,310,30,'#d8c7a1')+'<path d="M95 200L190 110H220L125 200Z" fill="'+accent+'"/><path d="M25 110Q60 100 95 110T165 110T235 110T305 110L335 110" stroke="'+ink+'" fill="none" stroke-width="2"/>'+rect(25,62,310,39,'#b1c8d1')+t(180,85,'Younger bed')+t(270,127,'Older beds')+line(155,159,72,154)+t(65,147,'Dike')+t(180,25,'Truncation separates events');
 break;
 case 'depth-earth-science-why-groundwater-matters':
 title="Pumping drawdown";desc="A well lowers the water table nearby; groundwater moves toward lower hydraulic head.";
 a=rect(15,60,330,138,'#d6c4a1')+'<path d="M15 95Q115 95 180 151Q245 95 345 95V198H15Z" fill="#a6c5d3"/>'+line(15,95,345,95,muted,1,'stroke-dasharray="4 4"')+rect(174,42,12,142,ink)+line(180,70,180,30,accent,3)+t(180,20,'Pumping well')+t(70,83,'Original level')+t(265,132,'Drawdown')+t(180,213,'Water flows toward lower head');
 break;
 case 'plus-earth-science-how-rocks-record-past-environments':
 title="Independent sedimentary clues";desc="Ripple marks, shells and mud cracks provide separate evidence about a past environment.";
 a=rect(25,40,310,48,'#c4ad80')+'<path d="M30 70Q45 48 60 70T90 70T120 70T150 70T180 70T210 70T240 70T270 70T300 70T330 70" stroke="'+ink+'" fill="none"/>'+rect(25,90,310,48,'#b1c7d1')+[70,135,200,265].map(x=>'<path d="M'+(x-12)+' 122Q'+x+' 94 '+(x+12)+' 122Z" stroke="'+ink+'" fill="#f5e9d2"/>').join('')+rect(25,140,310,48,'#bda27b')+'<path d="M35 145L75 165L60 185M75 165L125 150L150 177L205 157L245 180L295 151L330 170" stroke="'+ink+'" fill="none"/>'+t(180,24,'Ripples / shells / mud cracks')+t(180,207,'Interpret clues together');
 break;
 case 'plus-earth-science-why-mountains-rise-and-wear-down':
 title="Elevation balance";desc="1 mm/year uplift minus 0.7 mm/year erosion gives 0.3 mm/year surface rise.";
 a='<path d="M20 165L110 90L150 112L220 40L340 165Z" fill="#c7b28b" stroke="'+ink+'"/>'+line(120,180,120,117,ink,4)+t(90,198,'Uplift 1')+line(225,40,276,83,accent,3)+t(290,54,'Erosion 0.7')+t(180,213,'Net +0.3 mm/year',15);
 break;
 case 'plus-earth-science-how-caves-form-in-limestone':
 title="Dissolution and precipitation";desc="Carbonated water enlarges fractures; calcite can precipitate from cave drips.";
 a=rect(18,50,324,149,'#c7b58f')+'<path d="M65 50L100 102L150 90L175 130L230 98" fill="none" stroke="#79aab9" stroke-width="6"/><ellipse cx="202" cy="144" rx="111" ry="44" fill="#f7efdf"/><path d="M170 105L182 148L194 105M228 186L240 155L252 186" fill="'+gold+'"/>'+line(182,150,182,163,'#79aab9',2)+t(75,35,'CO₂-rich water')+t(258,118,'Stalactite',11)+t(270,180,'Stalagmite',11)+t(180,213,'Dissolve above; precipitate in cave');
 break;
 case 'plus-earth-science-what-a-geological-fault-is':
 title="Oblique slip components";desc="Perpendicular strike-slip of 3 m and dip-slip of 4 m combine to 5 m total displacement.";
 a=line(85,165,175,165,ink,3)+line(175,165,175,45,ink,3)+line(85,165,175,45,accent,3)+t(130,186,'3 m strike-slip')+t(239,105,'4 m dip-slip')+t(105,92,'5 m total')+t(180,25,'Vector components')+t(180,210,'√(3² + 4²) = 5 m',16);
 break;
 case 'plus-earth-science-how-sand-dunes-move':
 title="Dune migration";desc="Wind carries sand up the gentle slope; grains avalanche down the steep lee face.";
 a='<path d="M12 170Q95 165 230 65L287 170H348Z" fill="#d5b67f" stroke="'+ink+'"/><path d="M75 145q16 -28 32 -12q16 -28 32 -12q16 -28 32 -12" stroke="'+accent+'" stroke-width="2" fill="none"/>'+line(30,48,182,48,ink,3)+t(105,35,'Wind →')+line(238,83,274,151,accent,3)+t(300,100,'Slip face')+t(101,184,'Windward')+t(180,210,'Sand moves downwind');
 break;
 case 'plus-earth-science-why-coastlines-change':
 title="Coastal sediment budget";desc="12,000 cubic meters enters and 15,000 leaves per year, a net deficit of 3,000.";
 a=rect(15,35,330,64,'#a6c5d3')+rect(15,99,330,70,'#d9bd88')+line(25,110,140,110,ink,4)+line(210,110,334,110,accent,4)+t(83,92,'12,000 in →')+t(272,92,'15,000 out →')+t(180,143,'Beach reach')+t(180,200,'Net −3,000 m³/year',17);
 break;
 case 'plus-earth-science-how-soil-forms-from-rock':
 title="Ideal soil horizons";desc="Organic-rich A, leached E, accumulation-rich B and relatively unaltered C material.";
 a=rect(45,25,165,37,'#71624b')+rect(45,62,165,35,'#d8d1b9')+rect(45,97,165,52,'#a66c47')+rect(45,149,165,47,'#bfb399')+t(127,47,'A',15,'middle','#fff')+t(127,84,'E',15)+t(127,128,'B',15,'middle','#fff')+t(127,177,'C',15)+t(225,47,'Organic-rich',11,'start')+t(225,84,'Leached',11,'start')+t(225,128,'Accumulation',11,'start')+t(225,177,'Parent material',11,'start')+t(180,213,'Real profiles vary');
 break;
 case 'plus-earth-science-how-radiometric-dating-works':
 title="Radioactive decay";desc="Successive half-lives reduce parent fraction from 100% to 50%, 25% and 12.5%.";
 a=line(38,171,332,171)+line(38,171,38,25)+[100,50,25,12.5].map((n,i)=>rect(55+i*70,171-n*1.35,32,n*1.35,ink)+t(71+i*70,164-n*1.35,n+'%',11)+t(71+i*70,188,i,11)).join('')+t(180,207,'Elapsed half-lives');
 break;
 case 'plus-earth-science-understanding-metamorphic-rocks':
 title="Preferred mineral orientation";desc="In this schematic example differential compression produces aligned platy minerals.";
 a=rect(65,42,230,132,'#c9b89f')+[0,1,2,3].map(i=>[0,1,2].map(j=>'<ellipse cx="'+(95+i*56)+'" cy="'+(66+j*43)+'" rx="19" ry="5" fill="'+ink+'"/>').join('')).join('')+t(180,29,'↓ Compression ↓',14)+t(180,193,'↑ Compression ↑',14)+t(180,212,'Preferred mineral alignment');
 break;
 case 'plus-earth-science-what-seismic-waves-reveal-about-earth':
 title="Seismic core evidence";desc="P waves can travel through the outer core; direct S waves cannot travel through its liquid.";
 a=dot(180,104,86,'#c8b58f')+dot(180,104,48,'#d5a56b')+dot(180,104,23,accent)+'<path d="M100 71Q148 50 164 83L196 125Q220 155 260 137" fill="none" stroke="'+ink+'" stroke-width="3"/><path d="M100 71Q130 70 139 87" fill="none" stroke="#5d829b" stroke-width="3"/>'+dot(100,71,5,accent)+t(88,51,'Source',11)+t(252,159,'P path',11)+t(83,102,'S stops',11)+t(180,105,'Core',10,'middle','#fff')+t(180,207,'Liquid outer core blocks bulk S waves');
 break;
 default:return '';
 }
 return '<svg class="'+E(cls)+'" viewBox="0 0 360 220" role="img" aria-label="'+E(title+'. '+desc)+'" preserveAspectRatio="xMidYMid meet" style="background:'+bg+'"><title>'+E(title)+'</title><desc>'+E(desc)+'</desc><rect width="360" height="220" fill="'+bg+'"/>'+a+'</svg>';
};