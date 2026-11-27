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
 case 'architecture':
 title="Load path";desc="Roof to beams and columns to foundation to ground.";
 a=rect(45,45,270,16,gold)+rect(75,61,20,100,ink)+rect(265,61,20,100,ink)+rect(52,161,66,18,gold)+rect(242,161,66,18,gold)+line(25,181,335,181,muted,3)+[85,180,275].map(x=>t(x,33,'↓',22)).join('')+t(180,92,'Beam transfers load')+t(180,140,'Columns ↓')+t(180,204,'Foundation → ground');
 break;
 case 'depth-architecture-how-arches-carry-loads':
 title="Compression arch";desc="Curved compression path and outward reactions resisted at abutments.";
 a='<path d="M65 170V125A115 115 0 0 1 295 125V170" fill="none" stroke="'+gold+'" stroke-width="25"/>'+rect(20,135,60,45,ink)+rect(280,135,60,45,ink)+t(180,27,'↓ Load',20)+t(45,125,'←',25)+t(315,125,'→',25)+t(180,112,'Compression')+t(180,201,'Abutments resist thrust');
 break;
 case 'depth-architecture-reading-a-floor-plan':
 title="Floor plan";desc="Walls, opening and door swing in a horizontal plan.";
 a='<path d="M40 35H320V180H40Z M180 35V100 M180 145V180" stroke="'+ink+'" stroke-width="8" fill="none"/><path d="M180 145H135 A45 45 0 0 1 180 100" stroke="'+accent+'" stroke-width="2" fill="none"/>'+t(100,85,'Room A')+t(250,85,'Room B')+t(124,158,'Door swing',10)+t(180,204,'Horizontal cut viewed from above');
 break;
 case 'depth-architecture-designing-with-daylight':
 title="Daylight distribution";desc="Light enters a high window and reaches farther into a room.";
 a='<path d="M48 35H330V185H48V120 M48 65V35" fill="none" stroke="'+ink+'" stroke-width="5"/>'+line(48,65,48,120,'#79aab9',5)+[0,1,2].map(i=>line(50,69+i*20,280-i*45,174,gold,2)).join('')+rect(120,155,130,5,muted)+t(183,149,'Work surface')+t(83,53,'Window')+t(180,205,'Light falls across the room');
 break;
 case 'depth-architecture-understanding-building-envelopes':
 title="Enclosure layers";desc="Cladding, drainage, insulation and interior layers form a coordinated assembly.";
 a=[ ['Cladding',gold,45],['Drainage','#9fbec5',28],['Insulation','#d1bd80',65],['Air control',ink,12],['Interior','#b7a991',40] ].map((p,i,arr)=>rect(45+arr.slice(0,i).reduce((a,b)=>a+b[2],0),50,p[2],105,p[1])+t(45+arr.slice(0,i).reduce((a,b)=>a+b[2],0)+p[2]/2,170+i%2*16,p[0],10)).join('')+t(180,27,'Outside → inside')+t(180,211,'Control layers must connect');
 break;
 case 'depth-architecture-why-foundations-differ':
 title="Foundation alternatives";desc="A shallow footing spreads load; a deep pile reaches supporting ground.";
 a=rect(15,105,330,85,'#d6c4a1')+rect(15,165,330,25,'#b5a17b')+rect(80,45,25,60,ink)+rect(50,100,85,20,gold)+rect(250,45,25,60,ink)+rect(233,100,59,17,gold)+rect(248,117,9,65,ink)+rect(268,117,9,65,ink)+t(93,28,'Shallow footing')+t(262,28,'Deep piles')+t(180,207,'Loads transferred into ground');
 break;
 case 'depth-architecture-the-logic-of-architectural-sections':
 title="Building section";desc="A vertical cut shows floor heights and a double-height room.";
 a='<path d="M45 180V40H315V180H45 M45 110H175" stroke="'+ink+'" stroke-width="7" fill="none"/>'+t(110,82,'Upper floor')+t(110,147,'Lower floor')+t(245,104,'Double-height')+t(245,120,'space')+line(330,40,330,180,accent,2)+t(180,205,'Vertical cut through building');
 break;
 case 'depth-architecture-adaptive-reuse-of-buildings':
 title="Adaptive reuse";desc="Retained structure with a new internal arrangement.";
 a=rect(20,60,140,100,'#d4c19d')+rect(200,60,140,100,'#d4c19d')+[40,80,120,220,260,300].map(x=>rect(x,75,9,70,ink)).join('')+line(200,111,340,111,accent,3)+t(90,44,'Existing shell')+t(270,44,'New layout')+t(180,111,'→',25)+t(180,198,'Retain sound fabric; adapt use');
 break;
 case 'plus-architecture-what-architectural-circulation-means':
 title="Circulation";desc="A main corridor branches to rooms and a separate stair route.";
 a=rect(25,35,310,150,'#d3c3a4')+rect(145,35,70,150,'#a6c3bd')+[50,105,160].map(y=>line(25,y,145,y)).join('')+[80,130].map(y=>line(215,y,335,y)).join('')+line(180,170,180,55,accent,3)+t(180,50,'↑',20)+t(85,90,'Rooms')+t(275,105,'Rooms')+t(180,205,'Primary route and side access');
 break;
 case 'plus-architecture-why-architects-study-solar-orientation':
 title="Seasonal solar angles";desc="High-angle sun is blocked by an overhang; lower-angle sun enters glazing.";
 a='<path d="M150 48H330V185H150V150 M150 80V48" stroke="'+ink+'" stroke-width="5" fill="none"/>'+line(150,80,150,150,'#79aab9',5)+rect(90,48,95,8,ink)+line(95,7,116,48,gold,3)+line(25,84,260,178,accent,3)+t(55,20,'High sun',11)+t(70,103,'Low sun',11)+t(220,205,'Overhang controls direct rays');
 break;
 case 'plus-architecture-why-buildings-use-expansion-joints':
 title="Expansion joint";desc="Two building segments can move relative to one another across a planned gap.";
 a=rect(20,70,148,95,gold)+rect(192,70,148,95,gold)+rect(152,59,56,10,ink)+t(80,55,'→',23)+t(280,55,'←',23)+line(168,180,192,180,accent,2)+t(180,199,'Movement gap')+t(180,26,'Flexible cover spans joint');
 break;
 case 'plus-architecture-how-trusses-carry-forces':
 title="Two-bar truss";desc="Symmetric 10 kN load produces 10 kN compression in each inclined bar.";
 a=line(35,170,180,86,ink,7)+line(180,86,325,170,ink,7)+dot(180,86,6,accent)+line(180,30,180,75,accent,3)+t(180,24,'10 kN ↓')+t(95,112,'10 kN',13)+t(266,112,'10 kN',13)+t(66,164,'30°')+t(294,164,'30°')+t(180,207,'Two 5 kN vertical components');
 break;
 case 'plus-architecture-understanding-cantilevers':
 title="Cantilever moment";desc="A 2 kN tip load at 3 m creates 6 kN·m at the fixed end.";
 a=rect(35,45,22,130,ink)+rect(57,85,255,15,gold)+line(310,38,310,82,accent,3)+t(310,30,'2 kN ↓')+line(57,128,312,128)+t(185,146,'3 m')+t(110,65,'Fixed support')+t(180,195,'M = 2 × 3 = 6 kN·m',16);
 break;
 case 'plus-architecture-understanding-facade-systems':
 title="Drained facade";desc="Rain passes some outer cladding and drains in a cavity before the inner barrier.";
 a=rect(100,35,30,145,gold)+rect(160,35,10,145,ink)+rect(170,35,70,145,'#d4c58e')+[60,85,110].map(y=>line(35,y,98,y,'#6c9cae',2)).join('')+line(146,55,146,166,'#6c9cae',3)+t(146,180,'↓',20)+t(116,25,'Cladding',11)+t(205,25,'Insulation',11)+t(180,207,'Drainage behind outer layer');
 break;
 case 'plus-architecture-how-modular-construction-works':
 title="Modular assembly";desc="Factory-built units connect at coordinated interfaces on site.";
 a=[0,1,2].map(i=>rect(22+i*112,60,96,88,'#d7c4a0','stroke="'+ink+'"')+rect(42+i*112,78,35,45,'#a6c3bd')+t(70+i*112,172,'Module '+(i+1))).join('')+t(126,105,'↔',18)+t(238,105,'↔',18)+t(180,29,'Connect structure and services')+t(180,205,'Allow for assembly tolerances');
 break;
 case 'plus-architecture-how-green-roofs-function':
 title="Green roof";desc="Plants, growing medium, drainage and waterproofing above the roof deck.";
 a=[60,110,160,210,260,300].map(x=>line(x,70,x,40,ink,3)+line(x,52,x-12,42,ink,2)+line(x,57,x+12,45,ink,2)).join('')+rect(35,70,290,35,'#a88b61')+rect(35,105,290,23,'#a6c3bd')+rect(35,128,290,10,accent)+rect(35,138,290,25,muted)+t(180,93,'Growing medium')+t(180,121,'Drainage')+t(180,154,'Roof deck',11,'middle','#fff')+t(180,201,'10 mm over 100 m² = 1 m³');
 break;
 case 'depth-architecture-why-columns-buckle':
 title="Column buckling";desc="Longer effective length lowers the ideal critical buckling load.";
 a=line(95,45,95,170,muted,2,'stroke-dasharray="4 4"')+'<path d="M95 45Q185 105 95 170" fill="none" stroke="'+accent+'" stroke-width="5"/>'+line(260,45,260,170,ink,5)+t(95,28,'↓ P',17)+t(260,28,'↓ P',17)+t(110,192,'Buckled')+t(260,192,'Straight')+t(180,214,'Pcr ∝ 1 / (KL)²',15);
 break;
 case 'depth-architecture-how-buildings-respond-to-earthquakes':
 title="Seismic lateral resistance";desc="A braced frame transfers lateral forces to its base.";
 a=rect(65,45,230,130,'none','stroke="'+ink+'" stroke-width="5"')+line(65,110,295,110,ink,4)+line(65,45,180,110,accent,4)+line(180,110,295,45,accent,4)+line(65,110,180,175,accent,4)+line(180,175,295,110,accent,4)+t(32,85,'→',23)+t(32,145,'→',23)+line(35,180,325,180,muted,4)+t(180,207,'Continuous lateral load path');
 break;
 case 'plus-architecture-how-acoustic-design-shapes-rooms':
 title="Room acoustics";desc="Direct and reflected sound reach a listener along different paths.";
 a=rect(25,35,310,145,'none','stroke="'+ink+'" stroke-width="4"')+dot(65,120,10,accent)+dot(285,120,10,ink)+line(75,120,275,120,accent,3)+line(65,120,180,37,gold,2)+line(180,37,285,120,gold,2)+rect(100,35,60,8,'#9bb8ad')+t(68,145,'Source')+t(285,145,'Listener')+t(180,103,'Direct')+t(180,24,'Reflected path')+t(180,203,'Absorption reduces reflections');
 break;
 case 'plus-architecture-what-passive-building-design-aims-to-do':
 title="Passive heat balance";desc="Insulation reduces heat loss while controlled solar gains and shading influence indoor loads.";
 a='<path d="M75 165V82L180 35L285 82V165Z" fill="#d7c6a4" stroke="'+ink+'" stroke-width="5"/>'+rect(75,100,12,45,'#79aab9')+rect(110,145,140,12,muted)+line(25,100,120,137,gold,3)+line(250,96,330,96,accent,2)+t(45,88,'Sun')+t(278,84,'Loss →',11)+t(180,138,'Thermal mass')+t(180,200,'Balance gains, storage and losses');
 break;
 default:return '';
 }
 return '<svg class="'+E(cls)+'" viewBox="0 0 360 220" role="img" aria-label="'+E(title+'. '+desc)+'" preserveAspectRatio="xMidYMid meet" style="background:'+bg+'"><title>'+E(title)+'</title><desc>'+E(desc)+'</desc><rect width="360" height="220" fill="'+bg+'"/>'+a+'</svg>';
};

/* Individually authored slide diagrams: Physics and Computer Science, batch 01. */
window.LumenSlideArtBatch01={
  "electricity": [
    "l 25 105 335 105;c 70 105 9;c 125 105 9;c 180 105 9;c 235 105 9;a 45 65 290 65;l 180 35 180 145;t 180 175 2 C crosses in 1 s;t 180 200 I = 2 A",
    "b 30 70 95 60 + terminal;b 235 70 95 60 − terminal;a 125 100 235 100;t 180 45 Potential difference 6 V;t 180 180 6 J per coulomb",
    "p M40 55H135L145 45L160 65L175 45L190 65L205 45L215 55H320V150H200M160 150H40V55;l 160 135 160 165;l 200 143 200 157;t 175 30 3 Ω;a 50 90 125 90;t 88 110 2 A;t 180 190 6 V source",
    "b 25 80 100 50 6 V × 2 A;a 125 105 155 105;b 155 80 75 50 12 W;a 230 105 270 105;p M280 155q-12-18 0-36t0-36M300 155q-12-18 0-36t0-36M320 155q-12-18 0-36t0-36;t 300 185 Heat"
  ],
  "motion": [
    "l 15 145 345 145;b 25 95 60 40 Cart;b 135 95 60 40 Cart;b 245 95 60 40 Cart;a 55 75 105 75;a 165 75 215 75;a 275 75 325 75;t 180 185 Equal displacement per second;t 180 205 Net force = 0",
    "b 140 80 80 55 Cart;a 220 108 330 108;a 140 108 96 108;t 275 85 10 N;t 100 85 4 N;a 145 165 211 165;t 180 195 Net 6 N right",
    "b 35 60 80 45 2 kg;a 115 82 235 82;t 275 85 3 m/s²;b 35 130 110 45 4 kg;a 145 152 205 152;t 275 155 1.5 m/s²;t 180 32 Same 6 N net force",
    "b 55 40 250 65 Cart;b 55 145 250 42 Ground;a 145 105 145 145;a 215 145 215 105;t 90 125 Down;t 270 125 Up;t 180 208 Equal forces on different objects"
  ],
  "heat": [
    "b 35 65 105 80 Hot object;b 220 65 105 80 Cool object;a 140 105 220 105;t 180 85 Heat;t 180 175 Energy crosses boundary;t 180 200 Temperature is a state",
    "r 25 100 150 80;l 65 145 270 52;l 220 74 270 52;a 125 118 195 87;t 72 168 Hot soup;t 260 35 Handle;t 218 145 Along metal",
    "b 25 40 310 145 Room;r 40 130 45 38;a 98 145 98 65;a 110 60 285 60;a 295 70 295 150;a 282 160 116 160;t 195 85 Warm air rises;t 205 135 Cool air sinks;t 63 153 Heater",
    "c 65 105 35;c 285 105 26;a 105 85 250 85;a 105 105 250 105;a 105 125 250 125;t 65 160 Sun;t 285 160 Earth;t 180 45 Radiation through vacuum"
  ],
  "waves": [
    "p M15 110Q55 45 95 110T175 110T255 110T335 110;c 95 110 7;a 95 77 95 135;a 145 40 275 40;t 210 28 Crest travels;t 95 175 Marker bobs locally",
    "p M20 110Q60 35 100 110T180 110T260 110T340 110;l 60 55 60 165;l 220 55 220 165;a 60 165 220 165;t 140 185 Wavelength λ;t 180 205 Frequency = cycles per second",
    "p M25 100Q65 45 105 100T185 100T265 100T345 100;a 65 150 225 150;t 145 175 λ = 0.4 m;t 180 35 f = 10 Hz;t 180 205 v = fλ = 4 m/s",
    "p M20 65Q60 22 100 65T180 65T260 65T340 65;p M20 145Q40 102 60 145T100 145T140 145T180 145T220 145T260 145T300 145T340 145;t 180 95 10 Hz · 0.4 m;t 180 185 20 Hz · 0.2 m;t 180 207 Same speed: 4 m/s"
  ],
  "depth-physics-energy-and-work": [
    "b 25 80 70 45 Cart;b 255 80 70 45 Cart;a 95 102 255 102;t 175 82 10 N;l 60 150 290 150;t 175 173 3 m;t 180 203 W = 30 J",
    "b 45 80 100 55 2 kg;a 145 108 310 108;t 230 87 3 m/s;t 180 165 K = ½ × 2 × 3²;t 180 195 9 J",
    "p M25 180H335M55 65H125;c 90 49 12;c 90 155 12;a 145 55 145 152;t 185 110 Δh;t 245 55 High potential;t 245 155 More motion;t 180 205 ΔU = mgΔh",
    "b 30 50 95 50 10 J motion;a 125 75 235 75;b 235 50 95 50 6 J motion;a 180 75 180 140;b 125 140 110 45 4 J heat;t 180 205 Total energy: 10 J"
  ],
  "depth-physics-how-momentum-works": [
    "b 45 80 100 55 2 kg;a 145 107 310 107;t 230 85 +4 m/s;t 180 175 p = +8 kg·m/s",
    "l 45 170 320 170;l 45 170 45 35;r 45 60 230 110;t 160 112 Area = 3 N·s;t 25 65 6 N;t 275 190 0.5 s;t 180 208 Impulse = Δp",
    "b 25 50 65 38 2 kg;a 90 69 150 69;b 185 50 120 38 6 kg;t 120 47 4 m/s;t 245 108 At rest;b 80 140 185 40 8 kg;a 265 160 325 160;t 290 145 1 m/s;t 180 205 Momentum: 8 kg·m/s",
    "r 55 45 72 120;r 205 45 72 90;r 205 135 72 30;t 91 105 16 J;t 241 90 12 J heat;t 241 155 4 J;t 91 188 Before;t 241 188 After"
  ],
  "depth-physics-why-objects-float": [
    "r 20 50 320 145;b 135 90 90 55 Object;a 180 62 180 90;a 180 190 180 145;a 110 117 135 117;a 250 117 225 117;t 180 32 Lower pressure above;t 180 207 Higher pressure below",
    "r 25 65 135 112;r 200 65 135 112;b 65 72 55 70 Object;l 200 120 335 120;t 92 48 Displacement;t 268 48 Water;t 180 195 0.002 m³ × 1000 × 9.8;t 180 211 Buoyancy ≈ 19.6 N",
    "r 25 100 310 95;b 120 70 120 65 Float;a 180 170 180 135;a 180 45 180 70;t 225 48 Weight;t 240 174 Buoyancy;t 180 208 Equal vertical forces",
    "r 20 105 320 90;p M45 80L85 150H275L315 80Z;t 180 103 Enclosed air;t 180 140 Steel hull;t 180 180 Displaced water;t 180 207 Average density matters"
  ],
  "depth-physics-how-friction-changes-motion": [
    "l 30 145 330 145;b 125 92 110 53 Box at rest;a 235 118 305 118;a 125 118 55 118;t 275 96 Push;t 75 96 Static friction;t 180 190 Friction adjusts until slip",
    "l 30 145 330 145;b 125 92 110 53 Sliding box;a 235 78 310 78;a 125 118 45 118;a 180 178 180 145;t 270 58 Velocity;t 75 99 fₖ;t 204 170 N;t 180 205 fₖ = μₖN",
    "b 130 85 100 55 Box;a 230 112 310 112;a 130 112 50 112;a 180 180 180 140;t 270 90 20 N;t 90 90 20 N;t 240 171 N = 100 N;t 180 205 μₖ = 0.2 · net force 0",
    "l 45 170 320 170;l 45 170 45 35;p M45 50L295 170;t 28 52 4;t 295 191 2 s;t 105 30 v (m/s);t 180 105 Slope −2 m/s²;t 180 208 Stops after 2 s"
  ],
  "depth-physics-how-pressure-works-in-fluids": [
    "r 65 55 230 135;a 90 78 120 78;a 90 120 165 120;a 90 170 230 170;t 180 37 Surface pressure;t 190 90 Shallow;t 240 145 Deeper;t 180 207 Gauge pressure = ρgh",
    "r 55 48 250 130;l 70 150 290 150;a 180 55 180 145;t 130 100 5 m;t 180 165 Plate: 0.02 m²;t 180 190 50 kPa × 0.02 m²;t 180 208 Force = 1000 N",
    "p M40 60V170H320V60M100 60V125H200V60;r 42 125 276 43;r 40 75 60 15;r 200 75 120 15;a 70 30 70 75;a 260 75 260 30;t 70 20 100 N;t 260 20 500 N;t 180 195 Pressure change 10 kPa",
    "p M40 45V175H320V45M100 45V135H200V45;r 40 100 60 15;r 200 65 120 15;a 70 45 70 95;a 260 65 260 55;t 115 85 5d;t 290 45 d;t 180 197 Equal displaced volume"
  ],
  "plus-physics-how-springs-store-elastic-energy": [
    "p M25 80H50L65 65L80 95L95 65L110 95L125 65L140 95L155 65L170 80H205;b 205 60 70 40 Mass;a 205 120 145 120;t 180 150 Restoring force;t 180 190 F = −kx",
    "l 45 170 320 170;l 45 170 45 35;p M45 170L285 50L285 170Z;t 170 130 U = ½kx²;t 285 42 kx;t 285 190 x;t 30 30 F",
    "r 80 140 65 35;r 215 35 65 140;t 112 130 1 J;t 247 25 4 J;t 112 195 0.10 m;t 247 195 0.20 m;t 180 210 k = 200 N/m",
    "l 45 175 320 175;l 45 175 45 35;p M45 175L185 95Q245 55 315 50;l 185 95 185 175;t 110 100 Linear range;t 260 95 Nonlinear;t 180 199 Extension"
  ],
  "plus-physics-how-oscillations-transfer-energy": [
    "p M30 100H55L70 85L85 115L100 85L115 115L130 85L145 115L160 100H200;b 200 80 70 40 Mass;a 235 145 165 145;t 180 44 a = −(k/m)x;t 180 184 T = 2π√(m/k)",
    "r 45 45 65 110;r 148 100 65 55;r 250 45 65 110;t 78 35 Spring U;t 180 90 Both;t 282 35 Motion K;t 180 180 At end → center;t 180 202 Total energy constant",
    "p M25 110Q65 35 105 110T185 110T265 110T345 110;t 180 28 ω = 20 rad/s;t 180 54 A = 0.10 m;t 180 175 Period ≈ 0.314 s;t 180 197 Maximum speed 2 m/s",
    "l 35 175 325 175;l 35 175 35 35;p M35 165Q130 160 160 70Q180 15 200 70Q230 160 325 165;p M35 165Q150 130 180 108Q210 130 325 165;t 180 30 Weak damping;t 250 105 Stronger;t 180 198 Driving frequency"
  ],
  "plus-physics-understanding-electromagnetic-induction": [
    "p M150 45Q220 45 220 105Q220 165 150 165Q110 105 150 45Z;a 35 105 120 105;a 35 75 135 75;a 35 135 135 135;a 180 105 290 105;t 80 55 B;t 260 90 Normal;t 180 185 Φ = BA cos θ",
    "b 30 75 80 60 Flux Φ₁;a 110 105 250 105;b 250 75 80 60 Flux Φ₂;t 180 78 Δt;t 180 166 ε = −NΔΦ/Δt;t 180 190 Faster change → larger emf",
    "l 45 170 315 170;l 45 170 45 35;p M45 170L285 50;t 285 42 0.4 T;t 285 190 0.2 s;t 180 92 50 turns · 0.02 m²;t 180 208 |ε| = 2 V",
    "b 30 82 95 54 N magnet;a 125 109 175 109;c 230 109 55;a 230 109 160 109;t 180 35 Approaching magnet;t 180 190 Induced field opposes flux increase"
  ],
  "plus-physics-how-electric-fields-act-on-charges": [
    "c 65 108 22;t 65 113 +;a 90 108 300 108;a 85 90 260 45;a 85 126 260 171;c 215 108 8;t 215 90 Test charge;t 180 199 E = F/q (N/C)",
    "a 30 45 330 45;a 30 85 330 85;a 30 155 330 155;c 120 115 18;t 120 120 +;c 240 115 18;t 240 120 −;a 140 115 190 115;a 220 115 170 115;t 180 200 F = qE",
    "a 30 45 330 45;t 180 30 E = 3000 N/C;c 90 90 15;t 90 95 +;a 105 90 260 90;c 270 145 15;t 270 150 −;a 255 145 100 145;t 180 78 0.006 N;t 180 166 0.006 N;t 180 205 |q| = 2 μC",
    "c 80 65 22;t 80 70 +;c 80 155 22;t 80 160 +;c 210 110 6;a 210 110 275 135;a 210 110 275 85;a 210 110 335 110;t 270 43 Vector sum;t 180 200 Components add"
  ],
  "plus-physics-why-sound-changes-pitch-with-motion": [
    "c 95 110 94;c 110 110 70;c 125 110 46;c 140 110 22;a 150 25 245 25;c 310 110 10;t 310 146 Listener;t 180 210 Fronts closer ahead",
    "p M25 65H335M25 145H335;c 90 105 15;a 105 105 185 105;c 300 105 10;l 195 65 195 145;l 230 65 230 145;l 265 65 265 145;t 130 82 vₛ;t 180 190 f′ = fv/(v−vₛ)",
    "r 45 70 70 95;r 145 59 70 106;r 245 79 70 86;t 80 60 600 Hz;t 180 49 667 Hz;t 280 69 545 Hz;t 80 185 Source;t 180 185 Toward;t 280 185 Away;t 180 205 v = 340 m/s",
    "c 55 65 13;a 70 65 140 65;c 305 65 10;t 180 40 Moving source;c 55 145 13;c 305 145 10;a 295 145 225 145;t 180 125 Moving listener;t 180 200 Different arrival-rate models"
  ],
  "plus-physics-how-lenses-bend-light": [
    "r 15 110 330 85;l 180 35 180 190;p M70 30L180 110L225 195;t 65 95 Air;t 65 140 Glass;t 200 67 Normal;t 180 210 n₁ sin θ₁ = n₂ sin θ₂",
    "p M180 25Q135 110 180 195Q225 110 180 25Z;l 20 110 340 110;p M25 60H180L290 110M25 160H180L290 110;c 290 110 5;t 290 95 Focus;t 180 215 Converging lens",
    "p M180 35Q151 110 180 185Q209 110 180 35Z;l 20 110 340 110;a 30 110 30 50;a 255 110 255 140;p M30 50H180L255 140M30 50L255 140;t 75 170 dₒ = 30 cm;t 260 170 dᵢ = 15 cm;t 180 207 f = 10 cm · m = −0.5",
    "p M180 25Q145 110 180 195Q215 110 180 25Z;l 20 110 340 110;a 130 110 130 75;a 45 110 45 40;p M130 75H180L290 133M130 75L180 110L290 187;l 45 40 130 75;t 70 28 Virtual image;t 180 211 Object inside focal length"
  ],
  "plus-physics-why-interference-creates-patterns": [
    "p M20 45Q60 5 100 45T180 45T260 45T340 45;p M20 95Q60 55 100 95T180 95T260 95T340 95;p M20 160Q60 80 100 160T180 160T260 160T340 160;t 180 205 In phase: amplitudes add",
    "l 95 30 95 82;l 95 92 95 128;l 95 138 95 190;l 310 25 310 195;p M95 87L310 110M95 133L310 110;p M95 87L310 55M95 133L310 55;t 180 45 Different paths;t 180 205 Bright: mλ · dark: (m+½)λ",
    "l 50 32 50 178;l 305 32 305 178;l 50 105 305 105;r 300 45 10 8;r 300 85 10 8;r 300 125 10 8;r 300 165 10 8;a 315 49 315 89;t 180 95 L = 2 m;t 225 195 Δy = 2 mm",
    "r 25 55 310 110;r 35 60 32 100;r 115 60 32 100;r 195 60 32 100;r 275 60 32 100;t 180 34 Alternating bright and dark;t 180 188 Intensity redistributes;t 180 207 Coherent sources required"
  ],
  "plus-physics-what-heat-capacity-means": [
    "b 35 75 115 80 Small mass;b 210 75 115 80 Large mass;a 92 35 92 75;a 267 35 267 75;t 180 22 Equal heat input;t 92 177 Larger ΔT;t 267 177 Smaller ΔT;t 180 207 Same material",
    "b 100 75 160 80 1 kg water;a 180 30 180 75;t 180 20 4186 J;t 180 177 Temperature +1 K;t 180 205 c ≈ 4186 J/(kg·K)",
    "b 60 85 100 55 0.5 kg;a 160 112 200 112;b 200 85 100 55 +10°C;t 180 45 Q = mcΔT;t 180 172 0.5 × 4186 × 10;t 180 195 ≈20.9 kJ",
    "b 35 90 110 50 1 mass;b 215 70 110 45 1 mass;b 215 115 110 45 1 mass;a 90 45 90 90;a 270 25 270 70;t 90 174 Q;t 270 174 2Q;t 180 207 Same ΔT · C = mc"
  ],
  "plus-physics-how-phase-transitions-absorb-energy": [
    "l 40 170 320 170;l 40 170 40 35;p M40 160L100 105H220L310 45;t 160 90 Melting plateau;t 22 108 0°C;t 180 192 Heat added;t 80 32 Temperature",
    "b 35 80 115 65 1 kg ice;a 150 112 210 112;b 210 80 115 65 1 kg water;t 180 67 334 kJ;t 180 175 Both at 0°C;t 180 205 Q = mL",
    "b 35 75 120 70 0.5 kg ice;a 155 110 205 110;b 205 75 120 70 0.5 kg water;t 180 58 167 kJ;t 180 181 Already at 0°C;t 180 203 Further heating is separate",
    "b 35 85 115 60 Liquid;b 210 85 115 60 Solid;a 150 105 210 105;a 210 130 150 130;t 180 75 Freezing;t 180 159 Melting;t 180 195 Freezing releases latent heat"
  ],
  "plus-physics-understanding-relative-motion": [
    "b 30 65 300 80 Train;c 180 93 12;l 180 105 180 130;l 25 165 335 165;a 75 45 285 45;t 180 30 Relative to ground;t 180 153 Passenger at rest in train;t 180 196 Ground",
    "a 35 65 235 65;a 235 65 300 65;t 135 48 Train / ground;t 267 48 Person / train;a 35 145 300 145;t 180 174 Person / ground;t 180 200 Vector addition",
    "a 55 70 305 70;a 305 100 255 100;a 55 150 255 150;t 180 55 East 10 m/s;t 280 120 West 2;t 155 175 East 8 m/s",
    "a 85 165 85 75;a 85 75 205 75;a 85 165 205 75;t 50 120 3 north;t 145 58 4 east;t 175 135 5 NE;t 180 200 Ground velocity (m/s)"
  ],
  "depth-physics-understanding-rotational-motion": [
    "l 50 100 290 100;c 50 100 10;a 290 35 290 100;t 290 25 12 N;l 50 140 290 140;t 170 160 r = 0.5 m;t 180 200 τ = 6 N·m",
    "c 90 105 42;c 90 105 5;c 110 105 9;c 270 105 42;c 270 105 5;c 310 105 9;t 90 166 r;t 270 166 2r;t 180 200 Same mass: I quadruples",
    "c 180 95 55;c 180 95 5;a 180 40 235 95;t 180 100 I = 2;t 180 175 τ = 4 N·m;t 180 199 α = 2 rad/s²",
    "c 95 95 18;l 45 95 145 95;l 95 113 95 155;c 265 95 18;l 240 95 290 95;l 265 113 265 155;a 145 95 220 95;t 95 175 Arms out;t 265 175 Arms in;t 180 202 I↓ · ω↑ · L constant"
  ],
  "algorithms": [
    "b 20 75 85 60 Names;a 105 105 135 105;b 135 75 90 60 Compare;a 225 105 255 105;b 255 75 85 60 Match?;t 180 180 Defined input → procedure → result",
    "b 20 80 52 48 A;b 87 80 52 48 M;b 154 80 52 48 C;b 221 80 52 48 K;b 288 80 52 48 Z;a 46 150 314 150;t 180 180 Check each until match or end;t 180 205 Worst case: 1,000 comparisons",
    "b 20 45 320 36 A B C D E F G H;a 180 81 260 115;b 180 115 160 35 E F G H;a 260 150 300 177;b 260 177 80 32 G H;t 100 120 Discard left half",
    "b 30 45 300 45 Unsorted: D A C B;a 180 90 180 125;b 30 125 300 45 Sorted: A B C D;t 180 195 Binary search requires ordering"
  ],
  "operating-systems": [
    "b 30 30 130 38 App A;b 200 30 130 38 App B;a 95 68 180 95;a 265 68 180 95;b 115 95 130 40 OS;a 150 135 65 165;a 180 135 180 165;a 210 135 295 165;b 20 165 90 38 CPU;b 135 165 90 38 Memory;b 250 165 90 38 Disk",
    "b 25 55 95 40 Task A;b 25 125 95 40 Task B;a 120 75 175 75;b 175 55 150 40 Waiting for I/O;a 120 145 175 145;b 175 125 150 40 Running on CPU;t 180 200 Scheduler chooses runnable work",
    "b 20 55 95 45 Virtual 5;a 115 77 135 77;b 135 55 90 45 Page table;a 225 77 245 77;b 245 55 95 45 Frame 12;b 135 135 90 40 Denied;a 180 100 180 135;t 180 200 Translation + permissions",
    "b 35 65 100 50 User;a 135 90 190 90;b 190 65 135 50 File;t 180 45 Access check;t 110 156 Read ✓;t 245 156 Write ✕;t 180 194 Login ≠ permission"
  ],
  "databases": [
    "b 25 45 145 35 Customer;b 25 80 145 35 ID / Name;b 25 115 145 35 7 / Sam;b 190 45 145 35 Order;b 190 80 145 35 ID / Customer;b 190 115 145 35 18 / 7;t 180 185 Rows store records",
    "b 45 55 270 38 ID / Name;b 45 93 270 38 7 / Sam;b 45 131 270 38 8 / Sam;t 180 195 Unique IDs, same names",
    "b 30 75 110 60 Customer 7;a 140 105 220 65;a 140 105 220 145;b 220 45 110 40 Order 18;b 220 125 110 40 Order 19;t 180 200 One customer → many orders",
    "b 20 75 100 50 Orders;a 120 100 140 100;b 140 75 80 50 JOIN;a 220 100 240 100;b 240 75 100 50 Customer;b 55 150 250 45 Commit both or roll back"
  ],
  "binary": [
    "b 40 70 70 50 1;b 110 70 70 50 0;b 180 70 70 50 1;b 250 70 70 50 1;t 75 55 8;t 145 55 4;t 215 55 2;t 285 55 1;t 180 170 Powers of two from right",
    "b 40 65 70 50 1;b 110 65 70 50 0;b 180 65 70 50 1;b 250 65 70 50 1;t 75 145 8;t 145 145 0;t 215 145 2;t 285 145 1;t 180 195 8 + 0 + 2 + 1 = 11",
    "b 20 60 40 40 1;b 60 60 40 40 1;b 100 60 40 40 1;b 140 60 40 40 1;b 180 60 40 40 1;b 220 60 40 40 1;b 260 60 40 40 1;b 300 60 40 40 1;t 180 130 11111111 = 255;t 180 170 2⁸ = 256 patterns;t 180 195 Range 0–255",
    "b 110 25 140 45 01000001;a 180 70 75 115;a 180 70 180 115;a 180 70 285 115;b 20 115 110 45 ASCII A;b 130 115 100 45 Integer 65;b 230 115 110 45 Pixel 65;t 180 196 Meaning depends on encoding"
  ],
  "compression": [
    "b 20 60 320 45 A A A A A A A A A A;a 180 105 180 140;b 110 140 140 45 A × 10;t 180 205 Run-length representation",
    "b 20 45 120 38 ABCABC;a 140 64 220 64;b 220 45 120 38 ABC × 2;a 280 83 280 128;b 220 128 120 38 ABCABC;t 180 195 Exact reconstruction",
    "r 30 65 125 85;r 205 65 125 85;c 65 95 14;c 94 98 10;c 125 105 12;c 255 105 23;a 155 108 205 108;t 92 45 Detailed;t 267 45 Approximated;t 180 190 Some information discarded",
    "r 55 65 95 95;r 210 80 95 80;r 210 45 95 35;t 102 116 Raw data;t 257 62 Header;t 257 120 Payload;t 180 190 Metadata may outweigh savings"
  ],
  "depth-computer-science-how-programming-functions-work": [
    "b 20 40 105 42 price 8;b 20 120 105 42 quantity 3;a 125 61 155 105;a 125 141 155 105;b 155 80 95 50 total();a 250 105 270 105;b 270 80 70 50 24",
    "b 25 45 135 45 price, quantity;b 200 45 135 45 8, 3;a 267 90 100 135;b 25 135 310 45 price = 8 · quantity = 3;t 180 205 Arguments bind to parameters",
    "b 25 70 110 55 total(8,3);a 135 97 210 97;b 210 70 125 55 return 24;a 272 125 272 160;t 272 180 Use in caller;t 85 165 print ≠ return",
    "b 25 45 310 45 Contract: price × quantity;b 25 120 100 52 0 × 3 = 0;b 130 120 100 52 8 × 3 = 24;b 235 120 100 52 Invalid type;t 180 202 Test boundary, typical, invalid"
  ],
  "depth-computer-science-understanding-recursion": [
    "b 105 35 150 42 solve(n);a 180 77 180 103;b 105 103 150 42 solve(n−1);a 180 145 180 165;b 105 165 150 35 Base case;t 290 120 Smaller problem",
    "b 20 45 320 40 4! = 4 × 3!;b 55 85 285 36 3! = 3 × 2!;b 90 121 250 36 2! = 2 × 1!;b 125 157 215 36 1! = 1 × 0!;t 180 210 0! = 1 → 24",
    "b 85 35 190 28 factorial(0);b 85 63 190 28 factorial(1);b 85 91 190 28 factorial(2);b 85 119 190 28 factorial(3);b 85 147 190 28 factorial(4);a 295 45 295 165;t 180 200 Five active frames",
    "b 25 55 130 115 Recursive;b 205 130 130 40 Loop;t 90 85 n frames;t 270 115 Constant stack;t 180 195 Same factorial result"
  ],
  "depth-computer-science-how-data-structures-organize-work": [
    "b 20 65 100 55 List: A B C;b 130 65 100 55 Stack: C;b 240 65 100 55 Queue: A;t 180 35 Same entries, different access;t 180 182 Choose by operation",
    "b 115 120 130 40 A;b 115 80 130 40 B;b 115 40 130 40 C;a 245 60 320 60;a 245 100 320 100;t 180 190 Pop C, then B;t 180 209 LIFO",
    "b 40 75 85 60 A;b 125 75 85 60 B;b 210 75 85 60 C;a 40 105 15 105;a 340 105 295 105;t 180 55 Oldest at left;t 180 175 Remove A, then B",
    "b 25 50 130 40 sam;b 25 110 130 40 alex;a 155 70 205 70;a 155 130 205 130;b 205 50 130 40 dark theme;b 205 110 130 40 light theme;t 180 192 Key → value"
  ],
  "depth-computer-science-why-networks-use-protocols": [
    "b 25 75 105 60 Sender;a 130 95 230 95;a 230 115 130 115;b 230 75 105 60 Receiver;t 180 50 Shared message rules;t 180 183 Both parse the same format",
    "b 60 35 240 40 Application;b 60 75 240 40 TCP ordered stream;b 60 115 240 40 IP packets;b 60 155 240 40 Link;t 180 210 Each layer provides a service",
    "b 25 45 105 40 Client A;b 25 125 105 40 Client B;a 130 65 230 90;a 130 145 230 110;b 230 75 105 55 Server :443;t 180 195 Separate connections to one service",
    "b 35 45 105 42 HTTP;b 220 45 105 42 HTTP;a 140 66 220 66;b 35 115 290 55 TLS protected channel;t 180 195 HTTPS protects HTTP messages"
  ],
  "depth-computer-science-how-software-testing-finds-defects": [
    "b 25 70 115 55 $100 + 5%;a 140 97 220 97;b 220 70 115 55 $105;t 180 45 Known input;t 180 175 Assert exact expected total",
    "b 80 45 200 45 calculateTax();a 180 90 180 130;b 80 130 200 45 Known result ✓;t 180 202 Isolated calculation",
    "b 20 70 100 60 Order API;a 120 100 135 100;b 135 70 90 60 Total;a 225 100 240 100;b 240 70 100 60 Database;t 180 175 Check cooperating components",
    "b 30 50 140 45 Old bug: zero;b 190 50 140 45 Fix applied;a 170 72 190 72;b 70 130 220 45 Retest zero + normal;t 180 205 Prevent known regressions"
  ],
  "plus-computer-science-how-stacks-and-queues-differ": [
    "b 50 100 85 36 A;b 50 64 85 36 B;a 92 64 92 25;b 190 80 65 50 A;b 255 80 65 50 B;a 190 105 155 105;a 345 105 320 105;t 92 168 Stack: one end;t 255 168 Queue: two ends",
    "b 30 55 145 45 Stack: B, C out;b 185 55 145 45 Queue: A, B out;b 65 125 75 45 A;b 220 125 75 45 C;t 180 195 Same operations, different remainder",
    "b 25 55 65 40 A;b 90 55 65 40 B;b 155 55 65 40 C;a 90 110 25 110;a 155 110 90 110;b 55 145 250 40 Deque: both ends;t 180 207 Front removal may shift array",
    "c 180 45 15;c 95 100 15;c 265 100 15;c 55 160 15;c 135 160 15;l 180 60 95 85;l 180 60 265 85;l 95 115 55 145;l 95 115 135 145;t 180 195 DFS: branch · BFS: level"
  ],
  "plus-computer-science-how-hash-tables-find-records": [
    "b 25 45 120 42 Key 10;a 145 66 215 66;b 215 45 120 42 10 mod 7;b 40 120 40 40 0;b 80 120 40 40 1;b 120 120 40 40 2;b 160 120 40 40 3;b 200 120 40 40 4;b 240 120 40 40 5;b 280 120 40 40 6;a 275 87 180 120;t 180 196 Bucket 3",
    "b 35 40 90 40 Key 10;b 235 40 90 40 Key 17;a 125 60 180 105;a 235 60 180 105;b 105 105 150 45 Bucket 3;t 180 180 Compare actual keys;t 180 203 Both hash to 3",
    "b 25 50 310 45 6 entries / 7 buckets;a 180 95 180 125;b 25 125 310 45 6 entries / 14 buckets;t 180 200 Load falls from 0.86 to 0.43",
    "b 30 50 120 45 Good spread;b 210 50 120 45 Collision chain;a 90 95 90 145;b 45 145 90 35 O(1) avg;b 210 115 120 28 Item A;b 210 143 120 28 Item B;b 210 171 120 28 Item C"
  ],
  "plus-computer-science-why-balanced-search-trees-help": [
    "c 180 50 22;t 180 55 8;c 90 135 22;t 90 140 3;c 270 135 22;t 270 140 12;l 165 65 105 120;l 195 65 255 120;t 90 180 Smaller;t 270 180 Larger",
    "c 80 40 15;t 80 45 1;c 130 80 15;t 130 85 2;c 180 120 15;t 180 125 3;c 230 160 15;t 230 165 …;l 90 50 120 70;l 140 90 170 110;l 190 130 220 150;t 180 205 Sorted inserts may form a chain",
    "c 180 45 19;t 180 50 4;c 100 95 17;t 100 100 2;c 260 95 17;t 260 100 6;l 164 55 115 85;l 196 55 245 85;l 90 110 50 145;l 110 110 150 145;l 250 110 210 145;l 270 110 310 145;t 180 190 Balanced height: O(log n)",
    "b 105 35 150 40 20 / 40 / 60;a 125 75 50 130;a 165 75 135 130;a 195 75 225 130;a 235 75 310 130;b 15 130 75 40 <20;b 95 130 75 40 20–39;b 190 130 75 40 40–59;b 270 130 75 40 ≥60;t 180 202 Multiple keys per storage page"
  ],
  "plus-computer-science-understanding-time-complexity": [
    "l 45 175 325 175;l 45 175 45 35;p M45 175L320 125;p M45 175L320 60;p M45 175Q240 170 320 35;t 275 140 n;t 250 85 n log n;t 315 25 n²;t 180 205 Input size n",
    "r 55 90 50 50;r 180 40 100 100;l 55 90 105 140;l 180 40 280 140;t 80 165 n items;t 230 165 2n items;t 180 200 n(n−1)/2 · ~4× for large n",
    "b 30 50 300 45 Sort: O(n log n);b 30 115 300 45 n lookups: O(n log n);t 180 195 Combined O(n log n)",
    "l 35 175 325 175;r 45 155 25 20;r 80 155 25 20;r 115 120 25 55;r 150 155 25 20;r 185 155 25 20;r 220 65 25 110;r 255 155 25 20;r 290 155 25 20;t 180 35 Occasional resize spikes;t 180 200 Amortized O(1) append"
  ],
  "plus-computer-science-how-indexes-speed-database-queries": [
    "b 25 45 145 45 Table scan;b 190 45 145 45 Ordered index;a 97 90 97 145;a 262 90 262 145;t 97 170 Many rows;t 262 170 Matching range;t 180 202 Index narrows search",
    "r 35 60 125 100;r 200 60 125 100;r 35 60 125 8;r 200 60 125 85;t 97 45 Few matches;t 262 45 Most match;t 97 183 Index may help;t 262 183 Scan may win",
    "b 35 45 290 40 Customer / Date;b 35 85 290 35 7 / Jan 01;b 35 120 290 35 7 / Feb 12;b 35 155 290 35 8 / Jan 05;t 180 208 Range within customer 7",
    "b 25 80 105 50 Insert row;a 130 105 190 70;a 130 105 190 150;b 190 45 145 50 Table write;b 190 125 145 50 Index update;t 180 205 Extra storage and write work"
  ],
  "plus-computer-science-how-transactions-prevent-partial-updates": [
    "b 30 55 120 45 A: $100;b 210 55 120 45 B: $50;a 150 77 210 77;t 180 60 $20;b 30 130 120 45 A: $80;b 210 130 120 45 B: $70;t 180 202 Both persist or neither",
    "b 25 45 125 45 Tx A begins;b 210 45 125 45 Tx B begins;a 87 90 87 160;a 272 90 272 160;t 180 115 Isolation rules;t 180 190 Determine visible changes",
    "b 25 45 145 35 A reads 10;b 190 45 145 35 B reads 10;b 25 80 145 35 A writes 9;b 190 115 145 35 B writes 9;a 97 115 180 175;a 262 150 180 175;t 180 195 Final 9, intended 8",
    "b 35 45 290 40 quantity = 10;a 180 85 180 105;b 35 105 290 40 Atomic decrement → 9;a 180 145 180 160;b 35 160 290 40 Atomic decrement → 8"
  ],
  "plus-computer-science-what-caching-trades-for-speed": [
    "b 20 75 100 50 Client;a 120 100 140 100;b 140 75 90 50 Cache;a 230 100 250 100;b 250 75 90 50 Origin;t 180 55 Hit: stop at cache;t 180 170 Miss: fetch origin",
    "r 40 65 224 45;r 264 65 56 45;t 152 92 80% hit;t 292 92 20%;t 152 135 2 ms;t 292 135 50 ms;t 180 195 Mean = 11.6 ms",
    "b 30 45 130 45 Cache v1;b 200 45 130 45 Source v2;a 200 67 160 67;t 180 118 Stale until validated;b 95 145 170 45 Refresh / expire",
    "b 25 50 100 40 A;b 130 50 100 40 B;b 235 50 100 40 C;a 285 90 285 145;b 220 145 130 40 Evict C;b 25 145 145 40 Insert D;t 180 205 Finite cache capacity"
  ],
  "plus-computer-science-how-processes-and-threads-differ": [
    "b 25 45 140 130 Process A;b 195 45 140 130 Process B;b 45 100 100 45 Memory A;b 215 100 100 45 Memory B;t 180 200 Separate address spaces",
    "b 30 35 300 145 One process;b 50 75 260 35 Shared heap;b 50 125 120 38 Stack A;b 190 125 120 38 Stack B;t 180 205 Separate execution state",
    "b 25 45 145 35 A reads 10;b 190 45 145 35 B reads 10;b 25 90 145 35 A writes 11;b 190 90 145 35 B writes 11;a 97 125 180 165;a 262 125 180 165;t 180 190 Final 11, expected 12",
    "b 25 45 100 45 Thread A;b 235 45 100 45 Thread B;a 125 67 180 115;a 235 67 180 115;b 110 115 140 45 Lock;t 180 190 One protected update at a time"
  ],
  "plus-computer-science-why-deadlocks-occur": [
    "b 25 55 110 45 Thread A;b 225 55 110 45 Thread B;b 25 145 110 45 Lock X;b 225 145 110 45 Lock Y;a 80 100 80 145;a 280 100 280 145;a 135 77 225 167;a 225 77 135 167;t 180 28 Holds one · waits for other",
    "b 25 40 150 55 Mutual exclusion;b 185 40 150 55 Hold + wait;b 25 120 150 55 No preemption;b 185 120 150 55 Circular wait;t 180 205 All four necessary",
    "b 25 55 125 50 Acquire X;a 150 80 210 80;b 210 55 125 50 Acquire Y;t 180 135 All threads use X then Y;t 180 182 Contradictory order prohibited",
    "b 25 35 310 45 Deadlock: blocked cycle;b 25 85 310 45 Starvation: repeatedly skipped;b 25 135 310 45 Livelock: active, no progress;t 180 206 Different failure modes"
  ],
  "plus-computer-science-how-version-control-merges-changes": [
    "c 55 105 16;c 145 105 16;c 235 105 16;a 129 105 71 105;a 219 105 161 105;b 205 145 110 38 main;a 260 145 235 121;t 180 50 Commit snapshots and parent links",
    "c 60 105 16;c 170 60 16;c 170 150 16;l 76 98 155 67;l 76 112 155 143;b 205 40 130 40 Help page;b 205 130 130 40 Calculation;t 180 205 Diverged from common base",
    "c 40 105 15;c 140 55 15;c 140 155 15;c 270 105 20;l 55 97 125 62;l 55 113 125 148;l 155 62 250 98;l 155 148 250 112;t 40 135 Base;t 270 145 Merge;t 180 202 Compare base and both tips",
    "b 30 50 135 50 Resolve edits;a 165 75 195 75;b 195 50 135 50 Run tests;a 262 100 262 145;b 195 145 135 42 Verify behavior;t 180 210 Textual success ≠ correct behavior"
  ]
};
window.LumenSlideArtBatch01Render=function renderSlide(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch01;
 if(step<0||!Number.isInteger(step)||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const esc=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49";
 const txt=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${esc(s)}</text>`;
 const ln=(x,y,x2,y2,col=ink)=>`<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;
 let body="";
 for(const cmd of data[c.id][step].split(";")){
  const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
  if(op==="t"){const label=v.slice(2).join(" ");body+=txt(x,y,label,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(label.length,1)*.55)))));}
  else if(op==="b"||op==="r"){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="4" fill="${gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.5"/>`;if(op==="b"){const label=v.slice(4).join(" ");body+=txt(x+u/2,y+w/2+4,label,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(label.length,1)*.55)))));}}
  else if(op==="c")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${gold}" fill-opacity=".18" stroke="${ink}" stroke-width="2"/>`;
  else if(op==="l")body+=ln(x,y,u,w);
  else if(op==="a"){const angle=Math.atan2(w-y,u-x),h=8;body+=ln(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(angle-.55)} ${w-h*Math.sin(angle-.55)}L${u} ${w}L${u-h*Math.cos(angle+.55)} ${w-h*Math.sin(angle+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
  else if(op==="p")body+=`<path d="${esc(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;
  else throw Error("Unknown art primitive: "+op);
 }
 const title=c.slides[step].title,desc=c.slides[step].text;
 return `<svg class="${esc(cls)}" viewBox="0 0 360 220" role="img" aria-label="${esc(title)}" preserveAspectRatio="xMidYMid meet"><title>${esc(title)}</title><desc>${esc(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch01Render(c,cls,step)||prior(c,cls,step);};})();


/* Individually authored slide diagrams: Psychology and Finance, batch 02. */
window.LumenSlideArtBatch02={
  "bias": [
    "b 20 45 92 45 Many cues;b 134 45 92 45 Shortcut;b 248 45 92 45 Decision;a 112 67 134 67;a 226 67 248 67;t 180 124 Fast judgment;r 35 146 290 18;t 180 188 Less evidence evaluated",
    "r 45 55 240 25;t 165 48 Anchor $90;r 45 101 160 25;t 125 94 Offer $60;r 45 147 107 25;t 100 140 Comparable $40;t 180 204 Compare independent prices",
    "b 25 50 135 60 Stereotype match;b 200 50 135 60 Actual frequency;a 160 80 200 80;t 180 140 Similarity ≠ probability;b 60 163 240 36 Check the base rate",
    "b 20 70 94 45 First guess;b 133 40 105 42 Base rate;b 133 110 105 42 Other evidence;a 114 92 133 61;a 114 92 133 131;a 238 61 255 92;a 238 131 255 92;b 255 70 85 45 Revise;t 180 192 Independent checks"
  ],
  "memory": [
    "b 25 65 100 55 Name: Rose;a 125 92 165 92;b 165 65 170 55 Associate with flower;p M250 148V195M250 165Q210 135 226 125Q250 125 250 153M250 165Q290 135 274 125Q250 125 250 153;t 105 182 Meaningful cue",
    "b 25 70 95 50 Encode;a 120 95 132 95;b 132 70 95 50 Retain;a 227 95 239 95;b 239 70 95 50 Retrieve;a 285 120 285 153;t 285 173 Recall attempt;t 180 205 Failed access ≠ no storage",
    "b 30 42 120 45 Original detail;b 210 42 120 45 Later suggestion;a 90 87 180 135;a 270 87 180 135;b 90 135 180 42 Reconstructed recall;t 180 202 Confidence is not accuracy",
    "b 25 70 95 48 Close notes;a 120 94 132 94;b 132 70 95 48 Recall 3 ideas;a 227 94 239 94;b 239 70 95 48 Check errors;a 286 118 286 160;a 286 160 74 160;a 74 160 74 118;t 180 183 Repeat later"
  ],
  "motivation": [
    "c 130 95 65;c 230 95 65;t 105 89 Interest;t 105 108 Intrinsic;t 255 89 Grade;t 255 108 Extrinsic;t 180 100 Both;t 180 188 Reasons can coexist",
    "b 35 40 290 45 Learn a language;a 180 85 180 120;b 70 120 220 45 Practice ten words;t 180 196 Broad goal → specific action",
    "b 25 45 145 45 Effort is useful;b 190 45 145 45 Task achievable;a 97 90 180 130;a 262 90 180 130;b 100 130 160 44 Willingness to start;t 180 202 Resources also matter",
    "l 40 170 320 170;l 40 170 40 40;p M40 145L110 105L180 125L250 75L320 55;l 40 55 320 55;t 90 45 Target;t 180 145 Setback;t 180 200 Adjust practice after feedback"
  ],
  "attention": [
    "b 25 45 100 45 Speaker A;b 25 125 100 45 Speaker B;a 125 67 200 100;a 125 147 200 110;b 200 80 135 50 Listener;t 180 195 Competing voices share attention",
    "b 25 55 140 45 Task A;b 195 55 140 45 Task B;a 95 100 180 145;a 265 100 180 145;r 75 145 210 30;t 180 164 Limited shared capacity;t 180 202 Speed or accuracy may fall",
    "b 20 60 105 55 Spreadsheet;b 235 60 105 55 Messages;a 125 80 235 80;a 235 99 125 99;t 180 58 Switch;t 180 150 Reload goal + context;t 180 190 Switching adds mental work",
    "r 35 50 290 25;t 180 44 10 min uninterrupted;r 35 113 70 25;r 125 113 75 25;r 220 113 105 25;t 180 104 10 min with interruptions;l 113 110 113 142;l 208 110 208 142;t 180 181 Compare output and errors"
  ],
  "happiness": [
    "l 35 175 325 175;p M35 125L90 65L145 140L200 85L255 145L325 80;l 35 105 325 105;t 180 36 Momentary mood varies;t 180 99 Overall satisfaction;t 180 202 Different measures",
    "b 25 45 135 42 Relationships;b 200 45 135 42 Living conditions;b 25 120 135 42 Health;b 200 120 135 42 Meaningful activity;c 180 104 18;a 160 66 175 88;a 200 66 185 88;a 160 141 175 120;a 200 141 185 120;t 180 204 Multiple influences",
    "l 35 175 325 175;l 35 175 35 35;p M35 115H95L105 45Q180 90 325 106;l 35 115 325 115;t 106 34 Change;t 235 76 Partial adaptation;t 180 200 Time → (illustrative)",
    "b 25 55 140 110 Daily diary;t 95 95 Mon Tue Wed;t 95 120 + − +;b 195 55 140 110 Weekly rating;t 265 105 Life satisfaction;t 180 200 Mood ≠ life evaluation"
  ],
  "emotion": [
    "c 180 105 46;b 20 40 105 45 Experience;b 235 40 105 45 Body;b 125 163 110 42 Interpretation;a 125 62 145 83;a 235 62 215 83;a 180 151 180 163;t 180 109 Emotion",
    "p M25 105H75L90 80L105 140L120 55L135 105H170;b 205 35 130 36 Excitement;b 205 80 130 36 Fear;b 205 125 130 36 Caffeine;a 170 105 205 53;a 170 105 205 98;a 170 105 205 143;t 180 199 One sign, several causes",
    "b 25 70 135 55 Feeling threatened;a 160 97 200 97;b 200 70 135 55 Check evidence;t 180 160 Feeling signals concern;t 180 190 It does not prove danger",
    "b 20 55 100 50 Name feeling;a 120 80 130 80;b 130 55 100 50 Check facts;a 230 80 240 80;b 240 55 100 50 Choose action;t 180 145 Evidence + personal goals;t 180 192 Emotion can inform action"
  ],
  "social-proof": [
    "b 235 70 95 70 Gate;c 45 90 12;c 85 90 12;c 125 90 12;c 165 90 12;a 177 90 235 90;c 75 165 12;a 87 155 125 117;t 180 201 Visitor observes others",
    "b 230 45 100 48 Gate 1;b 230 135 100 48 Gate 2;c 50 68 10;c 82 68 10;c 114 68 10;c 146 68 10;a 156 68 230 68;t 120 155 No queue;t 180 209 Infer information from others",
    "b 20 65 145 55 Public: agree;b 195 65 145 55 Private: disagree;a 165 92 195 92;t 180 155 Avoid disapproval;t 180 187 Agreement may not reflect belief",
    "b 120 35 120 42 Shared source;a 180 77 55 120;a 180 77 180 120;a 180 77 305 120;b 15 120 80 42 Person A;b 140 120 80 42 Person B;b 265 120 80 42 Person C;t 180 201 Three reports, one source"
  ],
  "personality": [
    "l 40 100 320 100;c 105 100 9;c 180 100 9;c 255 100 9;t 40 82 Lower;t 320 82 Higher;t 180 145 Trait on a continuum;t 180 185 Tendency, not a rigid type",
    "t 90 35 Openness;l 170 31 330 31;c 245 31 6;t 90 69 Conscientiousness;l 170 65 330 65;c 210 65 6;t 90 103 Extraversion;l 170 99 330 99;c 290 99 6;t 90 137 Agreeableness;l 170 133 330 133;c 260 133 6;t 90 171 Neuroticism;l 170 167 330 167;c 230 167 6;t 180 207 Illustrative individual profile",
    "c 90 70 15;c 270 70 15;b 25 110 130 45 Quiet at work;b 205 110 130 45 Talks with friends;t 180 40 Same person;t 180 196 Behavior depends on setting",
    "b 25 45 145 48 Self-report;b 190 45 145 48 Observations;a 97 93 180 135;a 262 93 180 135;b 85 135 190 45 Combined evidence;t 180 203 Check across time and settings"
  ],
  "anxiety": [
    "b 25 65 95 55 Uncertainty;a 120 92 132 92;b 132 65 95 55 Anticipation;a 227 92 239 92;b 239 65 95 55 Arousal;p M75 165H110L125 140L140 190L155 165H285;t 180 207 Possible harm, not certainty",
    "b 35 45 125 50 Feared situation;a 160 70 205 70;b 205 45 120 50 Avoid;a 265 95 265 135;b 205 135 120 45 Relief;a 205 157 95 157;a 95 157 95 95;t 125 199 Relief may reinforce avoidance",
    "t 95 45 Frequency;l 170 41 330 41;c 205 41 6;t 95 80 Intensity;l 170 76 330 76;c 285 76 6;t 95 115 Duration;l 170 111 330 111;c 235 111 6;t 95 150 Daily impact;l 170 146 330 146;c 260 146 6;t 180 201 Dimensions, not a diagnosis",
    "b 25 65 145 55 Persistent distress;a 170 92 190 92;b 190 65 145 55 Professional care;t 180 154 Assessment → support;t 180 192 Education is not diagnosis"
  ],
  "depth-psychology-why-first-impressions-can-mislead": [
    "r 30 65 300 70;r 30 65 45 70;t 52 103 One;t 202 103 Unobserved behavior;t 180 165 One encounter is a small sample;t 180 195 A deadline may explain haste",
    "b 25 65 135 55 Well dressed;a 160 92 200 92;b 200 65 135 55 Accurate?;t 180 153 Halo effect;t 180 191 Appearance is not evidence of accuracy",
    "b 25 40 140 42 Deadline;b 195 40 140 42 Stable tendency;a 95 82 180 125;a 265 82 180 125;b 95 125 170 45 Rushed response;t 180 200 Competing explanations",
    "b 25 65 100 50 Initial view;a 125 90 145 90;b 145 65 105 50 New evidence;a 250 90 270 90;b 270 65 70 50 Revise;t 180 157 Contradictions matter;t 180 192 Update rather than defend"
  ],
  "plus-psychology-understanding-the-availability-heuristic": [
    "b 25 50 145 60 Vivid example;b 190 50 145 60 Actual rate;t 97 145 Easy to recall;t 262 145 Need data;t 180 195 Memorability ≠ frequency",
    "b 25 45 95 40 Report 1;b 132 45 95 40 Report 2;b 239 45 95 40 Report 3;a 72 85 180 125;a 180 85 180 125;a 286 85 180 125;b 120 125 120 45 Same event;t 180 200 Repetition is not incidence",
    "r 45 65 270 25;r 45 65 27 25;t 180 55 10 / 100 = 10%;r 45 132 270 25;l 45 132 45.27 157;t 180 122 10 / 10,000 = 0.1%;t 180 195 Equal counts, different rates",
    "b 25 55 95 45 Vivid story;b 135 55 95 45 Frequency;b 245 55 90 45 Population;a 182 100 182 145;b 75 145 210 42 Rate for relevant period;t 180 205 Use reliable denominators"
  ],
  "plus-psychology-why-framing-can-change-decisions": [
    "r 30 60 270 28;r 30 60 243 28;t 180 50 90% survival;r 30 130 270 28;r 273 130 27 28;t 180 120 10% mortality;t 180 194 Same 100 people and time period",
    "l 35 110 325 110;l 180 70 180 150;a 180 110 285 110;a 180 110 75 110;t 180 58 Reference;t 75 85 Loss;t 285 85 Gain;t 180 188 Same final amount can feel different",
    "b 25 45 145 55 Gain frame;b 190 45 145 55 Loss frame;a 97 100 97 140;a 262 100 262 140;b 25 140 145 42 Choice A or B;b 190 140 145 42 Choice A or B;t 180 205 Effect varies by person and task",
    "b 25 45 310 45 Frame A: 90 of 100 survive;b 25 105 310 45 Frame B: 10 of 100 die;t 180 180 Same outcome + denominator;t 180 203 Compare uncertainty and harms"
  ],
  "plus-psychology-how-reinforcement-shapes-behavior": [
    "l 35 170 325 170;p M35 135L110 110L185 75L260 45;p M35 65L110 95L185 130L260 155;t 270 38 Increases;t 275 150 Decreases;t 180 204 Reinforcement ↑ / punishment ↓",
    "b 25 65 95 50 Behavior;a 120 90 132 90;b 132 65 95 50 Add reward;a 227 90 239 90;b 239 65 95 50 More behavior;t 180 167 Reward is reinforcing only if;t 180 188 later behavior increases",
    "b 25 70 95 50 Buckle;a 120 95 132 95;b 132 70 95 50 Alarm stops;a 227 95 239 95;b 239 70 95 50 Buckle more;t 180 190 Removing stimulus can reinforce",
    "l 35 170 325 170;r 65 125 70 45;r 225 65 70 105;t 100 115 3/day;t 260 55 7/day;t 100 190 Baseline;t 260 190 After;t 180 210 Illustrative frequency"
  ],
  "plus-psychology-why-people-infer-causes-differently": [
    "b 25 45 140 45 Personal factors;b 195 45 140 45 Situation;a 95 90 180 135;a 265 90 180 135;b 100 135 160 42 Observed behavior;t 180 205 Causes may combine",
    "c 55 95 15;c 105 95 15;c 155 95 15;c 205 95 15;c 255 95 15;t 55 100 ×;t 105 100 ×;t 155 100 ×;t 205 100 ×;t 255 100 ✓;t 180 45 Many struggle on same task;t 180 160 Investigate task conditions",
    "b 25 75 95 48 Monday;b 132 75 95 48 Tuesday;b 239 75 95 48 Friday;t 72 150 Late;t 179 150 Late;t 286 150 Late;t 180 192 Repetition in similar conditions",
    "b 25 55 145 48 Meeting A;b 190 55 145 48 Meeting B;t 97 135 Late;t 262 135 On time;t 180 190 What differs about meeting A?"
  ],
  "plus-psychology-understanding-the-spacing-effect": [
    "l 35 150 325 150;r 45 70 80 30;r 45 115 20 25;r 125 115 20 25;r 205 115 20 25;r 285 115 20 25;t 180 55 Massed practice;t 180 106 Distributed practice;t 180 183 Same total time over more days",
    "b 25 65 95 55 Study;a 120 92 132 92;b 132 65 95 55 Delay;a 227 92 239 92;b 239 65 95 55 Recall;t 180 162 Effortful retrieval + feedback;t 180 191 Strengthen later access",
    "r 40 55 240 30;t 160 45 One session: 60 min;r 40 120 55 30;r 110 120 55 30;r 180 120 55 30;r 250 120 55 30;t 180 110 Four sessions: 15 min each;t 180 190 Total = 60 minutes",
    "l 30 65 330 65;l 30 140 330 140;c 65 65 7;c 125 65 7;c 185 65 7;c 245 65 7;c 245 140 7;c 320 65 7;c 320 140 7;t 180 38 Spaced group;t 180 117 Massed group;t 180 187 Equal delay after final study;t 320 205 Test"
  ],
  "plus-psychology-what-emotional-regulation-involves": [
    "l 30 155 330 155;p M30 150Q100 35 180 65T330 145;p M30 150Q100 85 180 100T330 145;t 180 35 Intensity and timing vary;t 180 195 Regulation ≠ elimination",
    "b 25 45 310 40 Ambiguous event: no reply;b 25 120 145 48 They are angry;b 190 120 145 48 They may be busy;a 180 85 97 120;a 180 85 262 120;t 180 205 Reappraise with credible alternatives",
    "b 25 60 145 55 Outer expression;b 190 60 145 55 Inner experience;t 97 150 Hidden;t 262 150 Distress may persist;t 180 195 Expression and feeling differ",
    "b 105 35 150 40 Situation;a 180 75 60 125;a 180 75 180 125;a 180 75 300 125;b 15 125 90 50 Change it;b 135 125 90 50 Seek help;b 255 125 90 50 Tolerate;t 180 203 Choose by circumstance"
  ],
  "plus-psychology-how-confirmation-bias-affects-belief-updating": [
    "b 25 45 145 50 Supporting cases;b 190 45 145 50 Contrary cases;a 97 95 97 140;b 25 140 145 42 Belief reinforced;t 262 145 Ignored?;t 180 205 Sample both sides",
    "r 40 65 224 30;t 150 55 P(E|A) = 80%;r 40 135 112 30;t 100 125 P(E|B) = 40%;t 180 201 Likelihood ratio = 2",
    "r 35 55 45 35;r 80 55 180 35;t 148 44 Prior odds 1:4;r 35 130 90 35;r 125 130 180 35;t 170 120 Updated odds 2:4;t 180 205 A still less likely than B",
    "b 25 45 145 50 Prediction;b 190 45 145 50 Disconfirming test;a 97 95 180 140;a 262 95 180 140;b 95 140 170 42 Compare results;t 180 205 Specify failure in advance"
  ],
  "plus-psychology-understanding-cognitive-dissonance": [
    "b 25 65 145 60 Value conservation;b 190 65 145 60 Waste resources;a 170 95 190 95;t 180 155 Incompatible cognitions;t 180 190 Possible discomfort",
    "b 120 35 120 40 Conflict;a 180 75 55 125;a 180 75 180 125;a 180 75 305 125;b 15 125 80 50 Change act;b 130 125 100 50 Change belief;b 265 125 80 50 Justify;t 180 204 Several reduction routes",
    "b 25 45 100 48 Self-perception;b 130 45 100 48 Demand effects;b 235 45 100 48 Dissonance;a 75 93 180 140;a 180 93 180 140;a 285 93 180 140;b 80 140 200 40 Reports liking task",
    "b 115 30 130 42 Participants;a 180 72 95 115;a 180 72 265 115;b 25 115 140 45 Condition A;b 195 115 140 45 Condition B;t 180 195 Random assignment + same measures"
  ],
  "plus-psychology-how-expectations-affect-perception": [
    "t 180 45 Read in context;b 30 75 90 45 A;b 135 75 90 45 B / 13;b 240 75 90 45 C;b 30 135 90 45 12;b 135 135 90 45 B / 13;b 240 135 90 45 14;t 180 205 Same ambiguous symbol, different context",
    "l 30 175 330 175;p M30 175Q100 20 170 175;p M105 175Q190 20 275 175;l 150 45 150 175;l 190 45 190 175;t 100 35 Noise;t 235 35 Signal;t 180 200 Criterion can shift",
    "l 35 170 325 170;r 55 60 50 110;r 115 120 50 50;r 205 90 50 80;r 265 150 50 20;t 110 48 Liberal;t 260 78 Conservative;t 110 190 Hits / false alarms;t 260 190 Hits / false alarms",
    "b 25 45 145 45 Signal present;b 190 45 145 45 Signal absent;b 25 105 145 45 Hit or miss;b 190 105 145 45 Alarm or correct reject;t 180 194 Compare both rates"
  ],
  "plus-psychology-why-social-comparison-affects-self-evaluation": [
    "l 35 80 325 80;l 35 155 325 155;c 180 80 9;c 180 155 9;c 65 80 5;c 100 80 5;c 135 80 5;c 225 155 5;c 270 155 5;c 310 155 5;t 180 50 Novice group;t 180 125 Elite group;t 180 205 Same runner speed, different rank",
    "b 25 55 145 55 Existing mood;a 170 82 195 82;b 195 55 140 55 Chosen content;a 265 110 265 150;a 265 150 97 150;a 97 150 97 110;t 180 194 Association may run both ways",
    "b 110 30 140 40 Random assignment;a 180 70 65 120;a 180 70 180 120;a 180 70 295 120;b 15 120 100 45 Upward;b 130 120 100 45 Lateral;b 245 120 100 45 Neutral;t 180 203 Compare exposure effects",
    "l 35 110 325 110;r 65 65 30 45;r 115 110 30 35;r 165 90 30 20;r 215 110 30 55;r 265 50 30 60;t 180 32 Individual changes differ;t 180 195 Mean can hide variation"
  ],
  "compound": [
    "r 35 60 180 35;r 215 60 9 35;t 125 48 Principal;r 35 125 189 35;r 224 125 9.45 35;t 180 115 Next growth includes previous gain;t 180 195 Growth on current balance",
    "r 35 130 80 40;r 140 120 80 50;r 245 109 80 61;t 75 120 $1,000;t 180 110 $1,050;t 285 99 $1,102.50;t 75 190 Start;t 180 190 Year 1;t 285 190 Year 2",
    "b 25 65 95 55 P initial;b 132 65 95 55 × (1+r);b 239 65 95 55 Repeat n;a 120 92 132 92;a 227 92 239 92;t 180 165 A = P(1+r)ⁿ;t 180 195 Match period and rate",
    "l 35 175 325 175;p M35 150Q150 115 325 40;p M35 150L80 120L125 155L170 90L215 115L260 65L325 90;t 180 30 Hypothetical steady growth;t 180 202 Actual returns fluctuate"
  ],
  "investing": [
    "b 25 55 145 60 Shares;b 190 55 145 60 Bonds;t 97 145 Ownership;t 262 145 Lending;t 180 195 Both can lose value",
    "b 25 65 95 55 $100 start;a 120 92 132 92;b 132 65 95 55 $105 end;a 227 92 239 92;b 239 65 95 55 +$2 cash;t 180 166 $5 + $2 = $7;t 180 195 Before costs",
    "l 35 160 325 160;p M35 100L90 65L145 120L200 50L255 150L325 100;t 180 35 Uncertain market outcomes;t 180 198 Expected return ≠ guarantee",
    "l 35 80 325 80;l 35 150 325 150;p M35 80L90 130L145 75L205 65L325 45;c 95 80 6;c 305 150 6;t 95 60 Need soon;t 285 135 Longer horizon;t 180 203 Recovery is not assured"
  ],
  "diversification": [
    "r 40 65 280 55;t 180 98 One issuer;t 180 145 100% exposure;t 180 195 One company drives portfolio",
    "r 35 65 85 60;r 135 65 85 60;r 235 65 90 60;t 77 95 Stock A;t 177 95 Stock B;t 280 95 Bonds;t 180 185 Different sources of risk",
    "r 50 65 100 35;r 210 65 100 35;t 100 55 $100;t 260 55 $100;r 50 135 80 35;r 210 135 110 35;t 90 125 $80;t 265 125 $110;t 180 203 $190 total → −5%",
    "l 35 55 325 55;p M35 65L110 80L180 130L250 145L325 160;p M35 80L110 100L180 145L250 155L325 175;t 180 38 Shared market shock;t 180 202 Multiple assets can fall together"
  ],
  "budget": [
    "b 25 45 145 48 Take-home pay;b 190 45 145 48 Other receipts;a 97 93 180 140;a 262 93 180 140;b 95 140 170 45 Monthly inflows;t 180 207 Use a defined period",
    "b 25 55 95 65 Fixed;b 132 55 95 65 Variable needs;b 239 55 95 65 Discretionary;t 180 145 Include irregular bills;b 85 165 190 38 Total outflows",
    "r 35 65 290 35;t 180 55 Income $2,500;r 35 135 243.6 35;r 278.6 135 46.4 35;t 150 125 Spending $2,100;t 302 125 $400;t 180 205 Surplus before overlooked bills",
    "b 110 35 140 45 Surplus $400;a 180 80 65 130;a 180 80 180 130;a 180 80 295 130;b 15 130 100 45 Irregular;b 130 130 100 45 Emergency;b 245 130 100 45 Other goals;t 180 205 Compare plan with actual"
  ],
  "stockmarket": [
    "b 25 70 95 55 Buyer;a 120 97 132 97;b 132 70 95 55 Exchange;a 227 97 239 97;b 239 70 95 55 Seller;t 180 185 Trading venue matches orders",
    "b 25 60 145 60 Bid $20.00;b 190 60 145 60 Ask $20.10;l 97 145 262 145;t 180 170 Spread $0.10",
    "b 25 55 145 55 Market order;b 190 55 145 55 Limit order;t 97 145 Execution first;t 262 145 Price bound;t 180 193 Limit may not execute",
    "b 25 45 95 45 Stock A;b 132 45 95 45 Stock B;b 239 45 95 45 Stock C;a 72 90 180 140;a 180 90 180 140;a 286 90 180 140;b 100 140 160 45 Index measure;t 180 207 Not a share itself"
  ],
  "depth-finance-understanding-bond-prices": [
    "l 35 130 325 130;c 65 130 6;c 145 130 6;c 225 130 6;c 305 130 6;t 65 165 Issue;t 145 110 Coupon;t 225 110 Coupon;t 300 95 Principal + coupon;t 180 200 Payment depends on solvency",
    "b 25 55 145 60 $1,000 face;b 190 55 145 60 $900 price;t 97 145 Coupon $50;t 262 145 Coupon $50;t 97 178 5% rate;t 262 178 5.56% current yield",
    "l 35 170 325 170;l 35 170 35 35;p M35 50Q150 100 325 150;t 180 36 Bond price;t 180 195 Comparable market yield →;t 200 90 Inverse relationship",
    "b 25 45 145 48 Credit quality;b 190 45 145 48 Maturity;b 105 130 150 48 Bond price;a 97 93 180 130;a 262 93 180 130;t 180 205 Contract terms also matter"
  ],
  "depth-finance-why-investment-fees-matter": [
    "b 25 55 95 55 Fund fee;b 132 55 95 55 Advice;b 239 55 95 55 Trading;a 72 110 180 150;a 180 110 180 150;a 286 110 180 150;b 100 150 160 40 Total costs",
    "b 25 55 95 50 $10,000;a 120 80 132 80;b 132 55 95 50 +6% gross;a 227 80 239 80;b 239 55 95 50 −1% fee;t 180 165 Approx. $10,500;t 180 193 Simplified 5% net",
    "l 35 175 325 175;l 35 175 35 35;p M35 150Q160 120 325 40;p M35 150Q160 135 325 90;t 255 35 Gross;t 275 114 After fees;t 180 200 Growing gap over time",
    "b 25 55 95 60 Cost;b 132 55 95 60 Exposure;b 239 55 95 60 Services;t 180 150 Compare risk and value;t 180 192 Price alone is not enough"
  ],
  "depth-finance-inflation-and-real-returns": [
    "r 55 75 100 70;r 205 71.5 100 73.5;t 105 65 $100;t 255 61 $105;t 105 170 Start;t 255 170 End;t 180 205 Nominal gain 5%",
    "b 35 65 120 70 Same basket;b 205 65 120 70 Same basket;t 95 55 $100;t 265 55 $103;t 180 180 Price increase 3%",
    "b 25 70 130 55 Nominal ×1.05;a 155 97 205 97;b 205 70 130 55 Prices ÷1.03;t 180 165 1.05 / 1.03 − 1;t 180 195 Real gain ≈1.94%",
    "b 25 55 145 60 Exact: 1.94%;b 190 55 145 60 Approx: 2%;t 180 145 5% − 3% = 2%;t 180 190 Personal inflation can differ"
  ],
  "depth-finance-understanding-asset-allocation": [
    "r 35 75 125 60;r 160 75 100 60;r 260 75 65 60;t 97 105 Stocks;t 210 105 Bonds;t 292 105 Cash;t 180 182 Portfolio split by value",
    "r 35 75 174 60;r 209 75 116 60;t 122 105 $6,000;t 267 105 $4,000;t 122 158 Stocks 60%;t 267 158 Bonds 40%;t 180 200 $10,000 total",
    "l 35 175 325 175;p M35 145L90 65L145 155L200 45L255 130L325 60;p M35 145L90 125L145 130L200 105L255 110L325 90;t 180 32 Different volatility profiles;t 180 201 Illustrative, not forecast",
    "b 25 40 145 45 Time horizon;b 190 40 145 45 Loss tolerance;b 25 115 145 45 Liquidity needs;b 190 115 145 45 Goals;t 180 200 Mix depends on constraints"
  ],
  "depth-finance-how-investment-liquidity-works": [
    "b 25 65 145 55 Asset;a 170 92 195 92;b 195 65 140 55 Cash;t 180 150 How fast? At what discount?;t 180 190 Liquidity combines time and cost",
    "l 35 75 325 75;l 35 145 325 145;c 65 75 7;c 310 145 7;t 110 55 Traded stock;t 240 125 Property sale;t 180 195 Illustrative sale times",
    "b 25 55 145 48 Bid–ask spread;b 190 55 145 48 Market depth;b 25 125 145 48 Settlement;b 190 125 145 48 Withdrawal limits;t 180 205 All affect cash access",
    "l 35 170 325 170;p M35 55L110 65L185 115L260 150L325 155;t 180 40 Liquid stock price falls;t 180 199 Easy to sell ≠ stable value"
  ],
  "plus-finance-how-index-funds-track-markets": [
    "b 25 55 145 55 Index basket;a 170 82 190 82;b 190 55 145 55 Fund holdings;t 180 145 Replicate or sample;t 180 192 Goal: follow benchmark",
    "r 45 65 180 35;r 45 130 90 35;t 135 55 Company A: 2× value;t 90 120 Company B: 1×;t 180 195 A has twice the weight",
    "r 60 55 90 110;r 210 60.5 90 104.5;t 105 45 8.0%;t 255 50 7.6%;t 105 190 Index;t 255 190 Fund;t 180 210 Difference −0.4 pp",
    "r 35 65 250 48;r 285 65 40 48;t 160 92 One sector;t 180 150 Concentration can persist;t 180 195 Fees and sampling affect tracking"
  ],
  "plus-finance-why-rebalancing-changes-portfolio-risk": [
    "r 35 75 174 60;r 209 75 116 60;t 122 105 60% stocks;t 267 105 40% bonds;t 180 180 Target exposure, not prediction",
    "r 35 75 189 60;r 224 75 101 60;t 129 105 $7,500;t 274 105 $4,000;t 180 160 $11,500 total;t 180 195 Stocks now 65.2%",
    "b 25 55 145 55 Stocks $7,500;b 190 55 145 55 Bonds $4,000;a 170 82 190 82;t 180 45 $600;b 25 140 145 45 Stocks $6,900;b 190 140 145 45 Bonds $4,600;t 180 207 Restored 60/40",
    "b 25 55 145 55 Sell overweight;b 190 55 145 55 New contribution;t 97 145 Tax / fees;t 262 145 Buy underweight;t 180 192 Manage exposure, not gains"
  ],
  "plus-finance-understanding-dividend-yield": [
    "b 25 65 135 60 Company;a 160 95 200 95;b 200 65 135 60 Shareholder;t 180 75 Dividend;t 180 179 May be reduced or suspended",
    "b 25 65 145 55 $2 annual dividend;b 190 65 145 55 $50 share;t 180 165 $2 / $50 = 4%;t 180 195 If distribution continues",
    "b 25 55 145 50 $50 price;b 190 55 145 50 $25 price;t 97 140 4% yield;t 262 140 8% yield;t 180 194 Same $2, lower denominator",
    "b 25 65 95 55 Start $50;a 120 92 132 92;b 132 65 95 55 End $40;a 227 92 239 92;b 239 65 95 55 +$2 cash;t 180 165 (40+2−50) / 50;t 180 195 Total return −16%"
  ],
  "plus-finance-how-dollar-cost-averaging-works": [
    "b 25 55 145 55 $100 at low price;b 190 55 145 55 $100 at high price;c 55 145 8;c 80 145 8;c 105 145 8;c 130 145 8;c 245 145 8;c 270 145 8;t 180 195 More units when price is lower",
    "b 25 55 145 55 $100 / $10;b 190 55 145 55 $100 / $20;t 97 150 10 units;t 262 150 5 units;t 180 195 $200 buys 15 units",
    "b 25 65 145 55 Total paid $200;b 190 65 145 55 Total units 15;t 180 165 $200 / 15 ≈ $13.33;t 180 195 Not simple mean of prices",
    "l 35 175 325 175;p M35 145L105 125L175 90L245 65L325 35;c 35 145 6;c 175 90 6;c 325 35 6;t 180 195 Rising prices buy fewer units;t 180 210 Delaying cash may cost returns"
  ],
  "plus-finance-what-credit-risk-means-in-bonds": [
    "b 25 65 145 55 Promised payment;a 170 92 190 92;b 190 65 145 55 Default;t 180 150 Recovery may be partial;t 180 192 Principal and interest at risk",
    "b 25 65 145 55 2% default;b 190 65 145 55 40% loss;t 180 165 0.02 × 0.40 = 0.008;t 180 195 Expected principal loss 0.8%",
    "r 45 65 150 35;r 45 130 150 35;r 195 130 80 35;t 120 55 Benchmark;t 235 120 Spread;t 180 195 Credit, liquidity and other risk",
    "b 25 55 145 50 Expected loss;b 190 55 145 50 Actual outcome;t 97 145 Average model;t 262 145 May be much worse;t 180 193 Ratings and spreads can change"
  ],
  "plus-finance-understanding-investment-drawdowns": [
    "l 35 175 325 175;p M35 100L110 45L220 135L325 90;l 110 45 220 45;a 220 45 220 135;t 110 35 $120 peak;t 220 150 $90 trough;t 180 204 30/120 = 25% decline",
    "b 25 65 145 60 $90 trough;a 170 95 190 95;b 190 65 145 60 $120 recovery;t 180 160 $30 / $90;t 180 195 +33.3% needed",
    "l 35 170 325 170;p M35 100L85 55L130 95L180 40L230 140L275 115L325 90;l 180 40 230 40;a 230 40 230 140;t 180 200 Largest peak-to-later-trough drop",
    "l 35 170 325 170;p M35 90L90 60L145 120L200 80L260 150;l 210 35 210 170;t 115 35 Historical sample;t 270 25 Future?;t 180 200 Past losses are not a ceiling"
  ],
  "plus-finance-understanding-risk-adjusted-returns": [
    "l 35 175 325 175;p M35 120L90 65L145 150L200 45L255 125L325 85;p M35 120L90 110L145 115L200 100L255 90L325 85;t 180 32 Same end, different dispersion;t 180 199 Volatility is not all risk",
    "b 25 55 145 45 Return 9%;b 190 55 145 45 Risk-free 3%;t 180 130 Excess = 6%;t 180 160 Volatility = 12%;t 180 195 Sharpe = 6/12 = 0.5",
    "b 25 55 145 55 A: 9% / 12%;b 190 55 145 55 B: 7% / 5%;t 97 145 Sharpe 0.5;t 262 145 Sharpe 0.8;t 180 195 Same risk-free rate: 3%",
    "p M35 75L90 65L145 60L200 55L255 50L325 160;t 180 32 Rare large loss;t 180 186 Sample estimates can miss tail risk"
  ],
  "plus-finance-how-duration-relates-to-bond-sensitivity": [
    "b 25 65 95 55 Coupon;b 132 65 95 55 Coupon;b 239 65 95 55 Principal;a 72 120 180 155;a 180 120 180 155;a 286 120 180 155;t 180 178 Present value today;t 180 204 Yield changes discounting",
    "l 35 110 325 110;a 180 110 285 110;a 180 110 75 110;t 285 85 Yield ↑;t 75 85 Price ↓;t 180 165 ΔP/P ≈ −D × Δy;t 180 195 Small parallel shift",
    "b 25 65 145 55 Duration 6;b 190 65 145 55 Yield +0.005;t 180 165 −6 × 0.005 = −0.03;t 180 195 Approx. −3% price",
    "l 35 170 325 170;l 35 170 35 35;p M35 45Q150 85 325 140;l 35 50 325 165;t 180 32 Curvature vs linear estimate;t 180 195 Larger shifts need convexity"
  ],
  "plus-finance-how-inflation-linked-bonds-differ": [
    "b 25 55 145 55 CPI index;a 170 82 190 82;b 190 55 145 55 Indexed principal;t 180 150 Fixed coupon rate;t 180 195 Payment amount varies",
    "l 35 170 325 170;l 35 170 35 35;p M35 50Q150 95 325 150;t 180 32 TIPS market price;t 180 195 Real yield →;t 180 100 Price can still fall",
    "b 25 55 145 55 $1,000 principal;a 170 82 190 82;b 190 55 145 55 $1,040;t 180 45 +4%;t 180 155 2% × $1,040;t 180 195 Annualized coupon $20.80",
    "r 45 65 200 35;r 45 130 75 35;t 145 55 Nominal 4%;t 82 120 Real 1.5%;t 180 195 Difference ≈2.5% breakeven"
  ],
  "plus-finance-why-sequence-of-returns-matters": [
    "b 25 50 95 42 $100;a 120 71 132 71;b 132 50 95 42 $120;a 227 71 239 71;b 239 50 95 42 $96;b 25 130 95 42 $100;a 120 151 132 151;b 132 130 95 42 $80;a 227 151 239 151;b 239 130 95 42 $96;t 180 205 No flows, same ending balance",
    "b 25 45 95 40 $100;b 132 45 95 40 $110;b 239 45 95 40 $78;a 120 65 132 65;a 227 65 239 65;b 25 125 95 40 $100;b 132 125 95 40 $70;b 239 125 95 40 $74;a 120 145 132 145;a 227 145 239 145;t 180 205 Withdraw $10 after each year",
    "r 35 55 200 35;r 35 130 160 35;r 195 130 20 35;t 135 45 Starting capital;t 115 120 After loss;t 205 175 Withdrawal;t 180 205 Less capital remains for recovery",
    "b 25 45 145 45 Timing;b 190 45 145 45 Fees;b 25 125 145 45 Inflation;b 190 125 145 45 Spending;t 180 205 Simulated sequence ≠ guarantee"
  ]
};
window.LumenSlideArtBatch02Render=function renderSlide(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch02;
 if(step<0||!Number.isInteger(step)||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const esc=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
 const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49";
 const txt=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${esc(s)}</text>`;
 const ln=(x,y,x2,y2,col=ink)=>`<line x1="${x}" y1="${y}" x2="${x2}" y2="${y2}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;
 let body="";
 for(const cmd of data[c.id][step].split(";")){
  const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
  if(op==="t"){const label=v.slice(2).join(" ");body+=txt(x,y,label,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(label.length,1)*.55)))));}
  else if(op==="b"||op==="r"){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="4" fill="${gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.5"/>`;if(op==="b"){const label=v.slice(4).join(" ");body+=txt(x+u/2,y+w/2+4,label,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(label.length,1)*.55)))));}}
  else if(op==="c")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${gold}" fill-opacity=".18" stroke="${ink}" stroke-width="2"/>`;
  else if(op==="l")body+=ln(x,y,u,w);
  else if(op==="a"){const angle=Math.atan2(w-y,u-x),h=8;body+=ln(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(angle-.55)} ${w-h*Math.sin(angle-.55)}L${u} ${w}L${u-h*Math.cos(angle+.55)} ${w-h*Math.sin(angle+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
  else if(op==="p")body+=`<path d="${esc(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;
  else throw Error("Unknown art primitive: "+op);
 }
 const title=c.slides[step].title,desc=c.slides[step].text;
 return `<svg class="${esc(cls)}" viewBox="0 0 360 220" role="img" aria-label="${esc(title)}" preserveAspectRatio="xMidYMid meet"><title>${esc(title)}</title><desc>${esc(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch02Render(c,cls,step)||prior(c,cls,step);};})();


/* Individually authored slide diagrams: Health, batch 03. */
window.LumenSlideArtBatch03={
  "vaccines": [
    "c 65 100 38;t 65 104 Antigen;a 105 100 150 100;c 190 100 38;t 190 104 Immune cell;a 230 100 280 100;c 305 100 20;t 180 180 Recognition of selected antigen",
    "c 65 70 27;t 65 74 B cell;c 65 145 27;t 65 149 T cell;a 92 70 155 70;a 92 145 155 145;c 185 70 25;c 185 145 25;t 185 74 Memory;t 185 149 Memory;a 210 70 285 110;a 210 145 285 110;t 300 108 Later;t 300 124 response",
    "l 35 170 325 170;r 65 55 85 115;f 215 100 85 70;t 107 45 Without;t 257 90 With;t 180 195 Illustrative risk reduction, not elimination",
    "b 20 70 100 55 Evaluation;a 120 97 130 97;b 130 70 100 55 Authorization;a 230 97 240 97;b 240 70 100 55 Monitoring;t 180 178 Timing and suitability vary"
  ],
  "mindfulness": [
    "c 180 100 65;c 180 100 37;c 180 100 12;t 180 35 Present experience;t 180 190 Attend without judging",
    "p M25 100Q65 40 105 100T185 100T265 100T345 100;c 180 100 8;a 260 155 180 155;t 265 175 Attention wanders;t 135 190 Gently return to breath",
    "b 25 50 145 55 Practice;b 190 50 145 55 Comparator;a 97 105 97 140;a 262 105 262 140;t 97 160 Outcome A;t 262 160 Outcome B;t 180 203 Effects vary across studies",
    "b 25 55 145 50 Mindfulness;b 190 55 145 50 Other support;a 97 105 180 145;a 262 105 180 145;b 100 145 160 40 Individual needs;t 180 205 Not a replacement for care"
  ],
  "nutrition": [
    "b 25 35 95 50 Carb;b 132 35 95 50 Fat;b 239 35 95 50 Protein;a 72 85 180 115;a 180 85 180 115;a 286 85 180 115;b 110 115 140 40 Energy;t 180 190 Vitamins, minerals, fiber, water;t 180 207 Other essential roles",
    "r 30 55 65 105;r 108 55 65 105;r 186 55 65 105;r 264 55 65 105;f 30 55 65 30;f 108 55 65 45;f 186 55 65 25;f 264 55 65 40;t 62 180 Day 1;t 140 180 Day 2;t 218 180 Day 3;t 296 180 Day 4;t 180 207 Overall food pattern matters",
    "b 25 45 145 48 Food A: 200 kcal;b 190 45 145 48 Food B: 200 kcal;t 97 125 More fiber;t 262 125 Less fiber;t 97 152 Less sodium;t 262 152 More sodium;t 180 199 Equal energy ≠ equal nutrition",
    "b 25 45 145 50 Activity;b 190 45 145 50 Health needs;b 25 120 145 50 Allergies;b 190 120 145 50 Preferences;t 180 205 Appropriate choices differ"
  ],
  "depth-health-how-physical-activity-supports-health": [
    "c 90 55 12;l 90 67 90 115;l 90 85 60 105;l 90 85 120 70;l 90 115 55 150;l 90 115 135 140;c 270 55 12;l 270 67 270 125;l 270 85 235 60;l 270 85 305 60;l 270 125 250 165;l 270 125 290 165;l 215 60 325 60;r 215 48 10 24;r 315 48 10 24;t 90 185 Aerobic;t 270 185 Resistance",
    "l 35 175 325 175;l 35 175 35 35;p M35 150Q115 110 175 100T325 48;t 180 35 Adaptation over time;t 180 200 Repeated suitable activity",
    "r 45 140 65 30;r 145 110 65 60;r 245 80 65 90;t 77 130 Start;t 177 100 Build;t 277 70 Progress;t 180 200 Gradual increases",
    "c 100 80 45;p M70 80H85L94 65L105 100L115 80H130;b 170 50 165 55 Unusual chest pain;b 170 115 165 55 Fainting / severe breathlessness;t 180 200 Seek prompt medical evaluation"
  ],
  "depth-health-why-hydration-matters": [
    "b 25 65 95 55 Intake;a 120 92 140 92;b 140 65 80 55 Body;a 220 92 240 92;b 240 65 95 55 Losses;t 180 162 Water supports circulation;t 180 185 and temperature control",
    "b 20 45 95 45 Drinks;b 20 125 95 45 Food;a 115 67 150 105;a 115 147 150 105;c 180 105 30;a 210 105 245 48;a 210 105 245 88;a 210 105 245 128;a 210 105 245 168;t 290 50 Urine;t 290 90 Sweat;t 290 130 Breath;t 290 170 Stool",
    "c 80 80 30;t 80 84 Heat;c 180 80 30;t 180 84 Activity;c 280 80 30;t 280 84 Illness;a 80 110 180 150;a 180 110 180 150;a 280 110 180 150;b 105 150 150 40 Fluid needs",
    "l 35 105 325 105;f 125 90 110 30;r 35 90 90 30;r 235 90 90 30;t 80 75 Too little;t 180 75 Balance;t 280 75 Too much;t 180 175 Confusion or inability to drink;t 180 195 may require urgent care"
  ],
  "depth-health-how-stress-affects-the-body": [
    "b 25 55 105 50 Threat cue;a 130 80 160 80;b 160 55 175 50 Sympathetic response;p M45 155H80L90 125L102 180L115 155H300;t 180 205 Heart rate and alertness may rise",
    "l 35 170 325 170;l 35 170 35 35;p M35 145L90 45Q175 80 325 145;l 35 145 325 145;t 90 35 Challenge;t 250 110 Recovery;t 180 199 Return toward baseline",
    "l 35 165 325 165;p M35 145L70 65L105 125L140 55L175 115L210 50L245 105L280 55L325 95;t 180 35 Repeated demands;t 180 195 Sleep and mood may be affected",
    "b 25 45 145 48 Sleep routines;b 190 45 145 48 Activity;b 25 120 145 48 Social support;b 190 120 145 48 Address stressors;t 180 205 Persistent symptoms: seek evaluation"
  ],
  "depth-health-reading-nutrition-labels": [
    "b 35 35 290 42 Nutrition facts;b 35 77 290 37 Serving size: 1 cup;b 35 114 290 37 Servings per pack: 2.5;b 35 151 290 37 Calories per serving: 160",
    "r 35 60 90 50;r 135 60 90 50;r 235 60 45 50;t 80 87 160;t 180 87 160;t 257 87 80;t 180 153 160 × 2.5 = 400 kcal;t 180 190 Whole package",
    "r 35 80 290 40;f 35 80 58 40;t 64 105 20%;t 180 65 Illustrative % Daily Value;t 180 165 Reference per serving;t 180 190 Not personalized",
    "b 25 45 145 40 A: 100 g;b 190 45 145 40 B: 100 g;t 97 118 Sodium 200 mg;t 262 118 Sodium 350 mg;t 97 145 Fiber 4 g;t 262 145 Fiber 2 g;t 180 200 Compare equivalent amounts"
  ],
  "depth-health-what-preventive-care-means": [
    "l 30 105 330 105;c 95 105 7;c 220 105 7;t 95 80 Before disease;t 220 80 Earlier detection;t 95 150 Primary;t 220 150 Secondary;t 180 202 Measure meaningful outcomes",
    "r 45 65 240 30;f 45 130 180 30;t 165 55 20 per 1,000;t 135 120 15 per 1,000;t 180 195 Absolute reduction: 5 per 1,000",
    "r 45 65 240 32;f 45 65 60 32;t 180 55 5 fewer out of 20;t 180 132 Relative reduction = 25%;t 180 165 1 ÷ 0.005 = 200;t 180 197 Over five years",
    "b 25 55 145 55 Potential benefit;b 190 55 145 55 Potential harm;t 97 140 Fewer outcomes;t 262 140 False positives;t 262 160 Side effects;t 180 205 Risk group and time matter"
  ],
  "depth-health-understanding-dental-health": [
    "p M120 45Q80 35 85 85L105 170Q115 190 130 160L150 115L170 160Q185 190 195 170L215 85Q220 35 180 45Z;c 100 74 5;c 110 70 5;c 120 75 5;c 130 70 5;a 245 65 135 73;t 280 55 Plaque;t 180 205 Microbial film produces acids",
    "p M70 45H290V170H70Z;p M70 95H290M70 125H290;c 105 60 6;c 130 60 6;a 105 65 105 95;a 130 65 130 95;t 235 80 Acid;t 180 115 Enamel;t 180 150 Dentin;t 180 200 Saliva and fluoride support repair",
    "p M150 35Q110 30 115 90L140 175L160 125L180 175L205 90Q210 30 170 35Z;p M30 100Q80 80 115 110M205 110Q270 80 330 100;a 285 65 205 110;t 280 52 Inflamed gum;t 180 205 Supporting tissue may be damaged",
    "p M45 60H220V82H45Z;l 160 82 160 110;l 175 82 175 110;l 190 82 190 110;l 205 82 205 110;b 235 125 100 45 Dental visit;t 110 145 Fluoride brush;t 110 172 Clean between teeth;t 180 205 Manage risk"
  ],
  "depth-health-why-tobacco-smoke-harms-health": [
    "r 25 90 100 18;p M125 90Q155 55 185 90T245 90;p M125 105Q155 75 185 105T245 105;t 180 45 Combustion;t 270 145 CO;t 270 166 Carcinogens;t 180 204 Harmful smoke constituents",
    "p M180 40V85L120 105L90 160M180 85L240 105L270 160;p M120 85Q50 65 55 155Q85 190 140 160Z;p M240 85Q310 65 305 155Q275 190 220 160Z;t 180 205 Airways and blood vessels affected",
    "b 25 60 95 55 Nicotine;a 120 87 132 87;b 132 60 95 55 Reward signal;a 227 87 239 87;b 239 60 95 55 Repeat use;a 285 115 285 160;a 285 160 72 160;a 72 160 72 115;t 180 188 Dependence can sustain use",
    "l 35 175 325 175;p M35 45Q100 105 180 120T325 155;t 180 30 Risk can decline after stopping;t 180 195 Time after cessation →;t 180 210 Counseling and treatment may help"
  ],
  "plus-health-how-sleep-pressure-builds": [
    "l 35 165 325 165;p M35 150L245 45L325 150;p M35 95Q105 30 175 95T325 95;t 145 35 Sleep pressure;t 250 120 Circadian timing;t 180 195 Wake → sleep",
    "l 35 175 325 175;p M35 155L210 40Q265 120 325 155;t 115 95 Wake: builds;t 275 75 Sleep: falls;t 180 200 Adenosine participates",
    "l 35 170 325 170;p M35 110Q105 25 180 110T325 110;c 80 40 16;l 80 15 80 8;l 55 40 45 40;l 105 40 115 40;t 180 195 Light influences biological clock",
    "l 35 175 325 175;p M35 155L180 55L210 120L325 55;l 180 175 180 45;l 210 175 210 45;t 195 37 Nap;t 290 160 Bedtime;t 180 207 Late nap can lower pressure"
  ],
  "plus-health-why-fiber-supports-digestion": [
    "p M55 45Q20 90 55 150Q90 195 125 150Q160 90 125 45Z;p M75 55Q120 75 75 95T75 135T100 160;t 180 65 Small intestine;a 125 145 235 145;b 235 125 100 50 Fiber passes;t 180 205 Not digested by human enzymes",
    "c 85 95 22;c 85 95 35;c 85 95 48;t 85 160 Retains water;c 230 70 9;c 265 95 9;c 230 120 9;c 295 120 9;t 262 160 Fermented;t 180 200 Different fibers, different effects",
    "b 25 65 95 50 Fiber;a 120 90 135 90;c 180 90 45;t 180 94 Microbes;a 225 90 240 90;b 240 65 95 50 SCFAs;t 180 190 Fermentation produces metabolites",
    "l 35 170 325 170;p M35 150L115 145L195 105L275 55;t 180 35 Illustrative rapid increase;t 180 197 Tolerance varies by amount and type"
  ],
  "plus-health-understanding-exercise-recovery": [
    "l 35 170 325 170;p M35 80L90 140Q160 150 225 65L325 75;t 90 158 Fatigue;t 235 48 Adaptation;t 180 202 Illustrative training response",
    "b 25 45 145 50 Sleep;b 190 45 145 50 Energy;b 25 120 145 50 Nutrition;b 190 120 145 50 Spaced training;t 180 205 Recovery has multiple inputs",
    "l 35 175 325 175;p M35 125L90 90L145 130L200 80L255 95L325 60;t 145 149 Temporary dip;t 180 35 Track performance across sessions;t 180 202 One dip does not establish overtraining",
    "l 35 175 325 175;p M35 55L90 75L145 95L200 130L255 140L325 160;t 180 32 Persistent decline;t 180 197 Pain or unexplained decline warrants assessment"
  ],
  "plus-health-how-caffeine-affects-alertness": [
    "p M30 145H330M130 145V110Q180 60 230 110V145;c 180 105 22;t 180 109 Caffeine;c 65 65 18;t 65 40 Adenosine;a 85 65 135 95;t 180 190 Receptor blocked, sleep need remains",
    "l 35 175 325 175;p M35 45Q110 95 180 125T325 157;t 180 30 Illustrative elimination over hours;t 180 200 Individual metabolism varies",
    "r 45 45 70 125;r 145 107.5 70 62.5;r 245 138.75 70 31.25;t 80 35 100 mg;t 180 97 50 mg;t 280 128 25 mg;t 80 190 0 h;t 180 190 5 h;t 280 190 10 h",
    "b 25 60 145 60 More alert;b 190 60 145 60 Sleep disrupted;t 180 155 Benefit and trade-off;t 180 194 Sensitivity varies"
  ],
  "plus-health-understanding-sun-exposure-and-skin": [
    "r 25 85 310 35;r 25 120 310 65;a 95 30 95 165;a 240 30 240 112;t 95 22 UVA;t 240 22 UVB;t 180 104 Epidermis;t 180 175 Dermis;t 180 205 Both can damage skin",
    "l 35 170 325 170;f 55 110 80 60;f 225 50 80 120;t 95 100 Short exposure;t 265 40 Longer exposure;t 180 200 Same intensity, more time → more dose",
    "p M50 85Q180 0 310 85Z;l 180 85 180 175;c 180 115 15;l 180 130 180 170;b 25 140 100 42 Clothing;b 235 140 100 42 Sunscreen;t 180 205 Combine protective measures",
    "l 35 170 325 170;p M35 155L105 135L175 110L245 70L325 40;t 180 27 Repeated exposure can add damage;t 180 195 Changing lesions need assessment"
  ],
  "plus-health-how-hearing-protection-reduces-exposure": [
    "r 45 110 80 60;r 235 50 80 120;t 85 100 Lower dose;t 275 40 Higher dose;t 180 195 Intensity × exposure time matters",
    "r 55 105 90 60;f 215 45 90 120;t 100 95 1× intensity;t 260 35 2× intensity;t 180 195 +3 dB ≈ twice sound intensity",
    "b 55 35 250 45 Reduce sound at source;a 180 80 180 95;b 80 95 200 45 Limit time;a 180 140 180 155;b 105 155 150 45 Hearing protection",
    "p M55 55Q145 30 145 105Q145 160 105 175;p M205 55Q295 30 295 105Q295 160 255 175;r 95 98 36 18;r 245 90 35 35;t 100 195 Poor seal;t 260 195 Better fit"
  ],
  "plus-health-what-blood-cholesterol-measures": [
    "c 90 105 50;c 270 105 35;c 75 90 7;c 105 115 7;c 260 95 6;c 280 110 6;t 90 40 LDL particle;t 270 55 HDL particle;t 180 192 LDL-C / HDL-C measure carried cholesterol",
    "b 25 45 145 50 LDL-related measures;b 190 45 145 50 Blood pressure;b 25 120 145 50 Smoking;b 190 120 145 50 Age and other factors;t 180 205 Combined risk assessment",
    "r 35 75 290 50;f 35 75 69.05 50;t 70 105 HDL 50;t 216 105 Non-HDL 160;t 180 60 Total 210 mg/dL;t 180 177 210 − 50 = 160 mg/dL",
    "b 25 65 145 55 Lab result;a 170 92 190 92;b 190 65 145 55 Risk context;t 180 160 Units and methods matter;t 180 195 Not a diagnosis alone"
  ],
  "plus-health-why-handwashing-reduces-infection-risk": [
    "b 25 55 95 55 Surface;a 120 82 132 82;b 132 55 95 55 Hand;a 227 82 239 82;b 239 55 95 55 Face;c 75 145 5;c 95 145 5;c 180 145 5;c 285 145 5;t 180 196 Microbes transfer across contacts",
    "c 65 95 38;c 180 95 38;c 295 95 38;t 65 100 Lather;t 180 100 Rub;t 295 100 Rinse;a 103 95 142 95;a 218 95 257 95;t 180 180 Coverage + removal",
    "b 25 65 145 55 After restroom;b 190 65 145 55 Before food;a 97 120 180 155;a 262 120 180 155;t 180 180 Clean hands;t 180 203 Interrupt transmission",
    "b 25 55 145 48 Hand hygiene;b 190 55 145 48 Ventilation;b 25 125 145 48 Food safety;b 190 125 145 48 Other measures;t 180 205 Multiple layers reduce risk"
  ],
  "plus-health-how-energy-balance-relates-to-weight": [
    "b 25 75 95 55 Intake;a 120 102 140 102;b 140 75 80 55 Stores;a 220 102 240 102;b 240 75 95 55 Expenditure;t 180 190 Both intake and expenditure adapt",
    "r 40 65 40 65;r 80 65 40 65;r 120 65 40 65;r 160 65 40 65;r 200 65 40 65;r 240 65 40 65;r 280 65 40 65;t 180 52 +200 kcal each day;t 180 165 7 × 200 = 1,400 kcal;t 180 195 Accounting model only",
    "b 25 50 145 45 Body mass;b 190 50 145 45 Metabolism;a 170 72 190 72;b 25 130 145 45 Appetite;b 190 130 145 45 Activity;a 190 152 170 152;t 180 205 Dynamic feedback affects balance",
    "l 35 165 325 165;p M35 90L80 65L125 100L170 50L215 105L260 75L325 85;t 180 35 Daily scale fluctuation;t 180 195 Water, glycogen and food also vary"
  ],
  "plus-health-why-health-screening-can-produce-false-alarms": [
    "b 25 45 145 50 Condition present;b 190 45 145 50 Condition absent;t 97 125 Positive fraction;t 262 125 Negative fraction;t 97 150 Sensitivity;t 262 150 Specificity",
    "b 110 30 140 40 10,000 people;a 180 70 90 110;a 180 70 270 110;b 25 110 130 42 100 affected;b 205 110 130 42 9,900 unaffected;t 90 180 90 positive;t 270 180 495 positive",
    "r 35 80 290 50;f 35 80 44.62 50;t 57 110 90;t 202 110 495 false positives;t 180 65 585 positive tests;t 180 182 90 / 585 ≈ 15.4%",
    "b 25 70 145 55 Positive screen;a 170 97 190 97;b 190 70 145 55 Confirmatory test;t 180 160 Not automatically a diagnosis;t 180 195 Benefits and harms depend on context"
  ],
  "sleep": [
    "l 35 170 325 170;p M35 65H70V105H110V150H150V105H190V65H230V105H270V65H325;t 40 50 REM;t 70 98 NREM;t 150 165 Deep;t 180 200 Illustrative stages",
    "l 35 165 325 165;p M35 55L55 145L85 80L115 55L140 135L170 70L200 55L225 115L255 55L280 90L325 55;t 180 35 Repeated cycles;t 180 195 Stage timing varies",
    "l 35 175 325 175;p M35 155L225 40L325 155;p M35 110Q105 35 180 110T325 110;t 180 30 Sleep pressure and body clock;t 180 200 Timing affects sleep onset",
    "b 25 55 145 55 Sufficient sleep;b 190 55 145 55 Daily function;a 170 82 190 82;t 180 155 Persistent sleepiness or insomnia;t 180 195 may merit evaluation"
  ]
};
window.LumenSlideArtBatch03Render=function renderSlide(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch03;if(step<0||!Number.isInteger(step)||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch03Render(c,cls,step)||prior(c,cls,step);};})();


/* Individually authored slide diagrams: Mathematics, batch 04. */
window.LumenSlideArtBatch04={
  "depth-mathematics-understanding-fractions": [
    "f 35 70 58 55;f 93 70 58 55;f 151 70 58 55;r 209 70 58 55;r 267 70 58 55;t 180 50 3 of 5 equal parts;t 180 180 3/5",
    "f 35 55 174 30;r 209 55 116 30;l 93 55 93 85;l 151 55 151 85;l 267 55 267 85;f 35 125 174 30;r 209 125 116 30;l 64 125 64 155;l 93 125 93 155;l 122 125 122 155;l 151 125 151 155;l 180 125 180 155;l 238 125 238 155;l 267 125 267 155;l 296 125 296 155;t 180 45 3/5;t 180 115 6/10;t 180 195 Same fraction",
    "r 36 45 288 30;f 36 45 96 30;r 36 100 288 30;f 36 100 72 30;r 36 155 288 30;f 36 155 168 30;t 180 37 4/12;t 180 92 3/12;t 180 147 7/12;t 180 210 Common denominator",
    "f 35 70 210 50;r 245 70 70 50;l 175 60 175 130;t 105 150 One half;t 210 150 Half of a half;t 180 196 3/4 ÷ 1/2 = 1.5"
  ],
  "depth-mathematics-how-ratios-and-proportions-work": [
    "d 60 90 16;d 110 90 16;d 160 90 16;c 230 90 16;c 280 90 16;t 110 130 3 filled;t 255 130 2 unfilled;t 180 180 Ratio 3:2, filled fraction 3/5",
    "l 35 105 325 105;c 35 105 5;c 132 105 5;c 229 105 5;c 325 105 5;t 35 85 0;t 132 85 50;t 229 85 100;t 325 85 150 mi;t 35 135 0;t 132 135 1;t 229 135 2;t 325 135 3 h;t 180 195 50 miles/hour average",
    "b 25 65 145 50 4 servings / 6 cups;a 170 90 190 90;b 190 65 145 50 10 servings;t 180 150 6 ÷ 4 = 1.5 cups per serving;t 180 190 1.5 × 10 = 15 cups",
    "l 35 175 325 175;l 35 175 35 35;p M35 175L295 65;p M35 125L295 15;t 235 120 Proportional;t 110 78 Fixed fee;t 180 200 Only origin line has constant ratio"
  ],
  "depth-mathematics-what-functions-describe": [
    "c 55 65 18;c 55 110 18;c 55 155 18;c 300 85 22;c 300 145 22;a 73 65 278 85;a 73 110 278 85;a 73 155 278 145;t 55 35 Inputs;t 300 35 Outputs;t 180 203 Exactly one output per input",
    "b 25 50 95 48 x = 4;a 120 74 135 74;b 135 50 90 48 2x + 3;a 225 74 240 74;b 240 50 95 48 11;l 55 175 305 175;l 55 175 55 115;p M55 165L305 115;t 180 200 Formula, table or graph",
    "l 35 110 325 110;l 180 35 180 185;p M35 120Q140 135 167 185;p M193 35Q220 85 325 100;t 180 25 x = 0 excluded;t 180 205 f(x) = 1/x",
    "l 30 175 165 175;l 30 175 30 40;p M30 155Q95 40 165 155;l 95 40 95 175;d 95 97.5 5;l 195 175 330 175;l 195 175 195 40;c 260 105 45;l 260 40 260 175;d 260 60 5;d 260 150 5;t 95 200 Pass;t 260 200 Fail"
  ],
  "depth-mathematics-reading-linear-equations": [
    "l 40 175 325 175;l 40 175 40 30;p M40 145L300 45;l 105 120 170 120;l 170 120 170 95;t 137 140 Δx;t 190 110 Δy;t 65 140 b;t 180 200 Constant slope m",
    "l 35 175 325 175;l 35 175 35 30;d 115 125 6;d 275 45 6;l 115 125 275 125;l 275 125 275 45;l 35 165 295 35;t 100 115 (2,5);t 275 30 (6,13);t 195 145 Run 4;t 300 85 Rise 8;t 180 205 m = 8/4 = 2",
    "b 25 45 310 42 5 = 2(2) + b;a 180 87 180 110;b 105 110 150 42 b = 1;t 180 190 y = 2x + 1",
    "l 40 175 325 175;l 40 175 40 35;p M40 145L300 45;d 40 145 5;t 75 135 $3 start;t 240 55 +$2/mile;t 180 195 C = 3 + 2d"
  ],
  "depth-mathematics-how-exponential-growth-works": [
    "l 35 170 325 170;p M35 155L325 75;p M35 155Q220 150 325 35;t 250 100 Add constant;t 265 30 Multiply constant;t 180 200 Equal time steps",
    "r 45 140 45 25;r 115 115 45 50;r 185 65 45 100;t 67 130 100;t 137 105 200;t 207 55 400;t 67 185 0 h;t 137 185 1 h;t 207 185 2 h;t 180 205 N = 100 × 2ᵗ",
    "r 65 40 85 140;f 215 110 85 70;t 107 30 800;t 257 100 400;t 107 200 Doubling;t 257 200 Adding 100",
    "l 35 175 325 175;p M35 160Q200 145 325 35;p M35 160Q130 150 190 90T325 75;t 180 30 Ideal exponential vs limited growth;t 180 200 Resources constrain real populations"
  ],
  "depth-mathematics-understanding-geometric-area": [
    "r 80 45 200 150;l 130 45 130 195;l 180 45 180 195;l 230 45 230 195;l 80 95 280 95;l 80 145 280 145;t 180 35 4 m;t 45 125 3 m;t 180 215 Area = 12 m²",
    "r 75 55 210 120;p M75 175L285 55;l 75 175 285 175;t 180 195 Base b;t 45 115 h;t 180 35 Half the rectangle = bh/2",
    "p M60 40H280V100H160V180H60Z;l 60 100 160 100;t 170 75 Rectangle A;t 110 142 B;t 180 205 Add disjoint areas",
    "r 45 95 65 65;r 190 30 130 130;t 77 185 Area A;t 255 185 Area 4A;t 180 210 Length ×2, perimeter ×2"
  ],
  "logarithms": [
    "b 25 55 145 55 bʸ = x;a 170 82 190 82;b 190 55 145 55 logᵦ(x) = y;t 180 160 Exponent is the answer;t 180 195 x > 0, b > 0, b ≠ 1",
    "b 25 55 145 55 10³ = 1000;b 190 55 145 55 2⁻¹ = 1/2;t 97 150 log₁₀(1000) = 3;t 262 150 log₂(1/2) = −1",
    "b 25 60 145 55 Multiply x × y;a 170 87 190 87;b 190 60 145 55 Add logs;t 180 170 logᵦ(xy) = logᵦ(x) + logᵦ(y)",
    "l 35 110 325 110;c 35 110 5;c 180 110 5;c 325 110 5;t 35 90 10;t 180 90 100;t 325 90 1000;t 107 145 ×10;t 252 145 ×10;t 180 195 Two log steps, difference 990"
  ],
  "trigonometry": [
    "p M65 165H295V45Z;p M275 165V145H295;t 180 185 Adjacent;t 320 105 Opposite;t 160 90 Hypotenuse;t 85 157 θ",
    "p M65 155H265V55Z;t 165 175 Adj;t 290 105 Opp;t 140 85 Hyp;t 180 35 sin = opp/hyp;t 180 200 cos = adj/hyp · tan = opp/adj",
    "p M85 165H235V15Z;l 235 15 235 165;t 160 185 Shadow 6 m;t 270 90 6 m;t 112 155 45°;t 180 210 tan 45° = 1",
    "c 90 105 50;l 90 105 140 105;l 90 105 90 55;t 115 92 90°;c 270 105 50;l 270 105 320 105;l 270 105 270 55;t 295 92 π/2;t 180 190 Same angle, different units"
  ],
  "plus-mathematics-understanding-inequalities": [
    "l 35 105 325 105;c 145 105 7;a 153 105 325 105;t 145 85 3;t 180 170 x > 3;t 180 195 Open endpoint excludes 3",
    "b 35 40 290 42 2x + 1 ≤ 9;a 180 82 180 105;b 35 105 290 42 2x ≤ 8;a 180 147 180 165;t 180 192 x ≤ 4",
    "l 35 105 325 105;c 180 105 7;a 172 105 35 105;t 180 85 −3;t 180 160 −2x > 6 → x < −3;t 180 195 Negative division reverses sign",
    "l 35 65 325 65;d 180 65 7;a 180 65 325 65;t 180 45 x ≥ 0;l 35 145 325 145;c 180 145 7;a 188 145 325 145;t 180 125 x > 0;t 180 200 Filled includes, open excludes"
  ],
  "plus-mathematics-understanding-geometric-similarity": [
    "p M35 155H135V80Z;p M175 180H325V67.5Z;t 85 175 Same angle;t 250 200 Same angle;t 180 35 Matching shape, constant ratio",
    "p M30 155H110V95Z;p M160 175H320V55Z;t 70 175 4;t 122 125 3;t 55 113 5;t 240 195 8;t 337 115 6;t 230 90 10;t 180 28 Scale factor 2",
    "p M25 170H60V146.667Z;p M115 170H325V30Z;t 42 190 3 m;t 74 145 2 m;t 220 190 18 m;t 325 23 12 m;t 180 210 Same angle, height/shadow = 2/3",
    "r 35 90 55 55;r 120 55 110 110;p M265 95H310V140H265ZM265 95L280 80H325V125L310 140M310 95L325 80;t 180 35 Scale k = 2;t 62 165 A;t 175 185 4A;t 295 165 8V;t 180 210 Area k² · volume k³"
  ],
  "plus-mathematics-how-systems-of-equations-intersect": [
    "l 35 175 325 175;l 35 175 35 35;p M35 150L300 40;p M35 45L300 155;d 161.48 97.5 5;t 210 90 Common point;t 180 205 Satisfies both equations",
    "b 25 45 145 48 y = 2x + 1;b 190 45 145 48 y = −x + 7;a 97 93 180 125;a 262 93 180 125;b 105 125 150 40 3x = 6;t 180 195 x = 2, y = 5",
    "b 35 40 290 42 x + y = 8;b 35 82 290 42 x − y = 2;l 35 130 325 130;t 180 155 2x = 10;t 180 190 x = 5, y = 3",
    "l 25 170 165 170;l 25 170 25 40;p M25 150L165 60M25 115L165 25;l 195 170 335 170;l 195 170 195 40;p M195 150L335 60;t 95 195 None;t 265 195 Infinite"
  ],
  "plus-mathematics-what-logarithmic-graphs-reveal": [
    "l 35 175 325 175;l 35 175 35 35;p M47 170L50 145L55 130L65 115L95 100L155 85L275 70;p M50 160L80 157.5L110 155L140 150L170 140L200 120L230 80L245 50;t 275 60 log;t 260 42 exp;t 180 200 Increasing inverse functions (schematic)",
    "l 35 105 325 105;c 35 105 5;c 132 105 5;c 229 105 5;c 325 105 5;t 35 85 1;t 132 85 10;t 229 85 100;t 325 85 1000;t 180 155 Equal spacing = equal ratios",
    "l 25 170 165 170;l 25 170 25 35;p M25 155Q115 150 155 45;l 195 170 335 170;l 195 170 195 35;l 195 155 325 45;t 95 192 Ordinary scale;t 265 192 Log scale;t 180 212 log y = log A + t log b",
    "l 35 105 325 105;c 55 105 5;c 180 105 5;c 305 105 5;t 55 85 0.1;t 180 85 1;t 305 85 10;t 180 155 No zero or negative values;t 180 190 Equal ratios, unequal differences"
  ],
  "plus-mathematics-understanding-vectors": [
    "l 65 175 300 175;l 65 175 65 30;a 65 175 173 175;a 173 175 173 31;a 65 175 173 31;t 119 195 3;t 190 95 4;t 115 85 |v|=5",
    "a 80 175 152 79;a 152 79 128 31;a 80 175 128 31;t 155 137 (3,4);t 201 54 (−1,2);t 78 86 (2,6);t 180 205 Add components",
    "b 25 45 145 50 u=(2,1);b 190 45 145 50 v=(3,4);t 180 140 2×3 + 1×4 = 10;a 180 175 240 175;a 180 175 180 135;t 180 207 Perpendicular → dot product 0",
    "l 35 105 325 105;l 180 30 180 185;a 180 105 90 45;t 95 35 Negative x;t 265 95 +x;t 180 200 Magnitude is nonnegative"
  ],
  "plus-mathematics-how-permutations-and-combinations-differ": [
    "b 25 55 145 55 A then B;b 190 55 145 55 B then A;t 180 145 Ordered: different;t 180 190 Unordered: same pair",
    "b 25 55 145 55 President: 5;a 170 82 190 82;b 190 55 145 55 Secretary: 4;t 180 160 5 × 4 = 20;t 180 195 Roles distinguish outcomes",
    "b 25 60 145 55 AB;b 190 60 145 55 BA;a 97 115 180 145;a 262 115 180 145;b 105 145 150 40 Same pair;t 180 207 20/2 = 10 pairs",
    "b 25 45 310 55 P(n,r) = n! / (n−r)!;b 25 120 310 55 C(n,r) = P(n,r) / r!;t 180 205 No replacement, 0 ≤ r ≤ n"
  ],
  "derivative": [
    "l 40 175 320 175;l 40 175 40 25;p M40 175Q180 175 320 31;l 110 184 320 49;d 180 139 5;d 250 94 5;t 180 22 Secant through two points;t 180 205 h → 0 gives tangent slope",
    "b 25 45 310 45 ((x+h)² − x²) / h;b 25 105 310 45 = 2x + h;t 180 188 Limit as h → 0: 2x",
    "l 40 175 320 175;l 40 175 40 30;p M40 175Q180 175 320 31;d 264 82.84 5;l 200 148.67 310 35.53;t 180 22 s(t) = 3t²;t 264 200 4 s;t 180 215 v(4) = 24 m/s",
    "l 35 105 325 105;l 180 30 180 175;p M65 35L180 105L295 35;t 95 65 −1;t 265 65 +1;t 180 195 No unique slope at x=0"
  ],
  "integral": [
    "l 35 170 325 170;l 35 170 35 35;p M35 150Q180 110 325 45;r 55 142 40 28;r 95 132 40 38;r 135 120 40 50;r 175 107 40 63;r 215 92 40 78;r 255 75 40 95;t 180 35 Sum f(x)Δx;t 180 205 Narrower intervals → integral",
    "l 35 110 325 110;p M35 110Q105 20 180 110Q250 200 325 110;t 105 75 Positive;t 250 155 Negative;t 180 195 Distance uses speed, not signed velocity",
    "l 35 175 325 175;l 35 175 35 30;p M35 175L315 35;p M105 175V140L245 70V175Z;t 105 195 1;t 245 195 3;t 180 35 f(x)=2x;t 180 215 3² − 1² = 8",
    "l 35 170 325 170;l 35 170 35 35;f 35 75 260 95;t 165 120 12 L;t 20 77 3;t 295 190 4 min;t 180 35 Flow rate (L/min)"
  ],
  "plus-mathematics-how-matrices-transform-coordinates": [
    "b 25 50 145 60 [a b / c d];b 190 50 145 60 [x / y];t 180 145 [ax+by / cx+dy];t 180 195 Multiply rows by vector",
    "l 35 165 325 165;l 35 165 35 15;r 35 115 50 50;r 35 15 100 150;t 190 45 Scale x by 2;t 190 65 Scale y by 3;t 180 195 (x,y) → (2x,3y)",
    "l 35 105 325 105;l 180 25 180 185;a 180 105 240 65;a 180 105 140 45;t 265 55 (x,y);t 100 35 (−y,x);t 180 205 90° counterclockwise",
    "r 35 60 90 90;p M195 150L235 60H325L285 150Z;t 80 175 Original;t 260 175 Transformed;t 180 205 Signed scale ad−bc"
  ],
  "plus-mathematics-reading-sequences-and-series": [
    "b 25 55 95 55 a;a 120 82 132 82;b 132 55 95 55 ar;a 227 82 239 82;b 239 55 95 55 ar²;t 180 150 Sequence: list;t 180 185 Series: add terms",
    "r 45 145 50 20;r 115 125 50 40;r 185 85 50 80;r 255 5 50 160;t 70 138 3;t 140 118 6;t 210 78 12;t 280 178 24;t 180 205 Sum = 45",
    "f 35 80 145 50;f 180 80 72.5 50;f 252.5 80 36.25 50;f 288.75 80 18.125 50;t 180 60 r = 1/2 example;t 180 165 Finite limit if |r| < 1;t 180 195 Sum = a/(1−r)",
    "l 35 170 325 170;p M35 155Q150 80 325 75;p M35 155Q160 105 325 35;t 245 65 Geometric;t 280 25 Harmonic;t 180 200 Terms → 0 is not enough"
  ],
  "probability": [
    "r 35 65 40 55;r 85 65 40 55;r 135 65 40 55;r 185 65 40 55;r 235 65 40 55;r 285 65 40 55;t 55 96 1;t 105 96 2;t 155 96 3;t 205 96 4;t 255 96 5;t 305 96 6;t 180 180 Each fair face: 1/6",
    "r 35 65 40 55;f 85 65 40 55;r 135 65 40 55;f 185 65 40 55;r 235 65 40 55;f 285 65 40 55;t 55 96 1;t 105 96 2;t 155 96 3;t 205 96 4;t 255 96 5;t 305 96 6;t 180 180 P(even) = 3/6 = 1/2",
    "c 180 35 10;a 180 45 95 90;a 180 45 265 90;t 95 82 H;t 265 82 T;a 95 100 50 150;a 95 100 140 150;a 265 100 220 150;a 265 100 310 150;t 50 175 HH;t 140 175 HT;t 220 175 TH;t 310 175 TT;t 180 205 P(HH) = 1/4",
    "l 35 175 325 175;l 35 175 35 35;l 35 105 325 105;p M35 45L65 150L95 80L125 125L155 90L185 112L215 100L245 108L275 103L325 105;t 180 95 1/2;t 180 200 Illustrative long-run frequency"
  ]
};
window.LumenSlideArtBatch04Render=function renderSlide(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch04;if(step<0||!Number.isInteger(step)||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch04Render(c,cls,step)||prior(c,cls,step);};})();


/* Individually authored Statistics slide diagrams, batch 05. */
window.LumenSlideArtBatch05={
  "correlation": [
    "l 35 175 325 175;l 35 175 35 35;d 60 145 4;d 100 138 4;d 140 100 4;d 190 112 4;d 235 65 4;d 290 48 4;t 180 200 Paired observations (x,y)",
    "l 25 170 165 170;l 195 170 335 170;p M30 155L160 45M200 45L330 155;d 55 135 5;d 100 100 5;d 140 62 5;d 220 62 5;d 265 100 5;d 305 135 5;t 95 195 r > 0;t 265 195 r < 0",
    "b 115 35 130 40 Temperature;a 180 75 90 125;a 180 75 270 125;b 25 125 130 45 Ice cream sales;b 205 125 130 45 Swimming;t 180 200 Common cause",
    "l 25 170 165 170;l 195 170 335 170;d 35 50 4;d 65 115 4;d 95 150 4;d 125 115 4;d 155 50 4;d 205 145 4;d 220 150 4;d 235 140 4;d 250 145 4;d 320 40 5;t 95 195 Curved pattern;t 265 195 Extreme point"
  ],
  "base-rates": [
    "r 35 75 290 45;f 35 75 2.9 45;t 180 55 Population: 1,000;t 180 155 10 defective = 1%;t 180 190 Before detector evidence",
    "b 105 30 150 40 1,000 items;a 180 70 90 115;a 180 70 270 115;b 25 115 130 40 10 defective;b 205 115 130 40 990 sound;t 90 185 9 flagged;t 270 185 99 flagged",
    "r 35 75 290 50;f 35 75 24.17 50;t 180 55 108 flagged;t 180 155 9 defective / 108 flagged;t 180 190 ≈8.3%, not 90%",
    "b 25 55 100 50 Flag;a 125 80 145 80;b 145 55 190 50 Follow-up inspection;t 180 150 Weigh false alarms and missed defects"
  ],
  "sampling": [
    "c 180 105 80;c 150 90 35;d 135 80 5;d 155 95 5;d 165 72 5;d 195 140 5;d 225 75 5;t 180 20 Population;t 135 140 Sample;t 180 205 Subset informs population",
    "r 35 50 290 110;f 35 50 85 110;t 77 103 Gym members;t 220 103 Other residents;t 180 195 Large biased subset is still biased",
    "c 55 70 10;c 105 70 10;c 155 70 10;c 205 70 10;c 255 70 10;c 305 70 10;a 105 80 105 145;a 255 80 255 145;d 105 155 10;d 255 155 10;t 180 200 Select using known random mechanism",
    "b 25 55 145 45 Selected sample;a 170 77 190 77;b 190 55 145 45 Responses;t 97 150 Missing responses;t 262 150 May differ;t 180 195 Nonresponse can distort estimates"
  ],
  "depth-statistics-understanding-mean-and-median": [
    "l 35 135 325 135;d 95 135 5;d 155 135 5;d 215 135 5;d 275 135 5;t 95 120 2;t 155 120 4;t 215 120 6;t 275 120 8;l 185 75 185 150;t 185 65 Mean 5;t 180 195 (2+4+6+8)/4",
    "b 40 80 70 45 2;f 110 80 70 45;f 180 80 70 45;b 250 80 70 45 8;t 145 108 4;t 215 108 6;t 180 165 (4+6)/2 = 5",
    "l 35 135 325 135;d 42 135 4;d 49 135 4;d 56 135 4;d 325 135 5;l 118 70 118 150;l 53 90 53 150;t 118 60 Mean 23;t 65 80 Median 5;t 320 120 80;t 180 195 Extreme value shifts mean",
    "p M35 175L55 95L75 45L95 60L120 100L155 140L210 160L325 170;l 105 85 105 175;l 155 115 155 175;t 105 75 Median;t 155 105 Mean;t 180 200 Right-skewed example"
  ],
  "depth-statistics-how-standard-deviation-measures-spread": [
    "l 35 120 325 120;d 95 120 6;d 145 120 6;d 180 120 6;d 215 120 6;d 265 120 6;l 180 65 180 145;a 180 95 95 95;a 180 95 265 95;t 180 55 Mean;t 180 190 Distance around mean",
    "b 45 45 90 40 2−4=−2;b 135 45 90 40 4−4=0;b 225 45 90 40 6−4=2;r 65 115 50 45;r 245 115 50 45;t 90 105 4;t 180 155 0;t 270 105 4;t 180 195 √(8/3) ≈ 1.63",
    "b 25 65 145 50 Population: ÷ n;b 190 65 145 50 Sample: ÷ (n−1);t 180 165 Same squared deviations;t 180 195 Different variance denominators",
    "l 35 70 325 70;d 75 70 5;d 105 70 5;d 135 70 5;l 35 125 325 125;d 155 125 5;d 185 125 5;d 215 125 5;l 35 180 325 180;d 65 180 5;d 155 180 5;d 245 180 5;t 260 60 Original;t 265 115 Shifted;t 300 170 ×3"
  ],
  "depth-statistics-why-random-variation-matters": [
    "l 35 110 325 110;p M35 100L70 125L105 90L140 115L175 95L210 130L245 85L280 120L325 100;t 180 50 Stable underlying level;t 180 190 Measurements vary around it",
    "b 25 55 95 45 4 heads;b 132 55 95 45 6 heads;b 239 55 95 45 5 heads;t 180 145 Three sets of 10 fair tosses;t 180 195 Not always exactly half",
    "l 35 105 325 105;p M35 45L65 165L95 65L125 145L155 80L185 150L215 75L245 135L275 60L325 125;p M35 98L65 114L95 102L125 110L155 99L185 105L215 102L245 109L275 103L325 106;t 180 30 10 tosses vs 1,000;t 180 200 Illustrative proportions",
    "b 25 55 145 50 Sampling noise;b 190 55 145 50 Actual shift;b 25 125 145 50 Measurement error;b 190 125 145 50 Bias;t 180 205 Explain apparent changes"
  ],
  "plus-statistics-understanding-skewed-distributions": [
    "p M25 170L45 75L65 40L85 75L110 115L145 145L165 160M195 160L215 145L245 115L270 75L290 40L310 75L335 170;t 95 195 Right tail;t 265 195 Left tail",
    "r 35 65 40 100;r 80 90 40 75;r 125 125 40 40;r 170 145 40 20;r 260 155 40 10;l 102 45 102 170;l 146 45 146 170;t 90 35 Median;t 165 35 Mean;t 180 200 Rare large values pull mean",
    "r 35 100 45 70;r 80 50 45 120;r 125 100 45 70;r 215 115 45 55;r 260 80 45 90;t 180 30 Histogram: clusters and gaps;t 180 195 Appearance depends on bin width",
    "l 35 110 325 110;r 85 85 140 50;l 155 85 155 135;d 315 110 5;t 85 75 Q1;t 155 75 Median;t 225 75 Q3;t 180 185 IQR = Q3 − Q1"
  ],
  "plus-statistics-how-random-assignment-differs-from-random-sampling": [
    "c 180 90 65;d 150 65 5;d 180 65 5;d 210 65 5;d 150 110 5;d 180 110 5;d 210 110 5;a 180 155 180 178;t 180 25 Target population;t 180 205 Randomly select units",
    "b 105 35 150 40 Participants;a 180 75 95 125;a 180 75 265 125;b 25 125 140 45 Condition A;b 195 125 140 45 Condition B;t 180 203 Random allocation",
    "b 25 35 310 45 Volunteers (not random sample);a 180 80 90 125;a 180 80 270 125;b 25 125 130 45 Method A;b 205 125 130 45 Method B;t 180 200 Causal inference for study participants",
    "b 25 45 145 50 Sampling → scope;b 190 45 145 50 Assignment → cause;b 50 130 260 45 Still check response and measurement"
  ],
  "plus-statistics-understanding-statistical-confounding": [
    "b 115 35 130 40 Confounder;a 180 75 90 125;a 180 75 270 125;b 25 125 130 45 Exposure;b 205 125 130 45 Outcome;a 155 147 205 147;t 180 205 Common cause distorts association",
    "b 125 35 110 40 Age;a 180 75 90 125;a 180 75 270 125;b 25 125 130 45 Exercise;b 205 125 130 45 Health outcome;t 180 205 Age may influence both",
    "b 105 35 150 40 Randomize;a 180 75 95 125;a 180 75 265 125;b 25 125 140 45 Group A;b 195 125 140 45 Group B;t 180 205 Balance factors in expectation",
    "b 25 55 145 55 Measured factors;b 190 55 145 55 Unmeasured factors;t 97 150 Can adjust;t 262 150 May remain;t 180 195 Not all variables should be adjusted"
  ],
  "plus-statistics-how-a-sampling-distribution-works": [
    "b 105 30 150 40 Fixed population;a 180 70 65 120;a 180 70 180 120;a 180 70 295 120;b 15 120 100 45 Sample A;b 130 120 100 45 Sample B;b 245 120 100 45 Sample C;t 180 200 Compute each mean",
    "p M25 170Q95 35 165 170;p M195 170Q265 5 335 170;t 95 190 Individual values;t 265 190 Sample means;t 180 35 Different distributions",
    "l 35 170 325 170;p M35 170Q180 30 325 170;p M125 170Q180 0 235 170;l 180 60 180 175;t 180 195 Center 50;t 80 60 SD 10;t 280 60 SE 2",
    "p M35 170Q180 -100 325 170;l 180 70 180 170;l 125 125 125 170;l 235 125 235 170;t 180 195 Uncertainty of estimate;t 180 35 Approximate normality under conditions"
  ],
  "plus-statistics-understanding-standard-error": [
    "p M25 170Q95 40 165 170;p M205 170Q265 0 325 170;t 95 195 Individual SD;t 265 195 Mean SE;t 180 35 Different quantities",
    "b 45 55 270 60 SE = σ / √n;t 180 150 Independent identical draws;t 180 190 Often estimate σ using s",
    "r 65 65 90 100;f 205 115 90 50;t 110 55 SE 2;t 250 105 SE 1;t 110 185 n = 36;t 250 185 n = 144;t 180 210 σ = 12",
    "c 85 95 50;c 275 95 50;d 65 80 6;d 95 100 6;d 80 125 6;d 255 80 6;d 285 100 6;d 270 125 6;t 180 35 Clustered observations;t 180 195 Not all draws independent"
  ],
  "plus-statistics-how-outliers-affect-regression": [
    "l 35 175 325 175;p M35 155L325 65;d 100 135 5;d 150 119 5;d 200 85 5;d 310 35 5;l 310 35 310 70;t 280 30 High leverage;t 180 200 Residual = observed − predicted",
    "l 35 175 325 175;p M35 145L325 95;p M35 160L325 40;d 60 145 4;d 90 140 4;d 130 130 4;d 165 123 4;d 305 30 6;t 180 195 Extreme x and y can pull line",
    "b 25 55 145 50 Fit all data;b 190 55 145 50 Fit without point;t 180 150 Compare slopes and predictions;t 180 190 Verify the questionable record",
    "b 25 55 145 55 Original result;b 190 55 145 55 Sensitivity result;t 180 155 Explain any exclusion;t 180 195 Avoid cherry-picking"
  ],
  "plus-statistics-why-residual-plots-are-useful": [
    "l 35 175 325 175;p M35 150L325 60;d 180 105 4;d 180 55 6;a 180 105 180 55;t 235 80 14 − 11 = +3;t 180 200 Vertical residual",
    "l 35 110 325 110;d 50 50 4;d 95 95 4;d 140 145 4;d 180 155 4;d 225 140 4;d 270 90 4;d 315 50 4;t 180 195 Curved pattern suggests missed structure",
    "l 35 110 325 110;d 50 105 4;d 90 115 4;d 130 95 4;d 170 135 4;d 210 75 4;d 250 160 4;d 300 40 4;d 315 175 4;t 180 200 Funnel: changing residual spread",
    "l 35 110 325 110;d 50 95 4;d 90 130 4;d 130 100 4;d 170 85 4;d 210 120 4;d 250 95 4;d 300 140 4;t 180 195 No visible pattern ≠ proof"
  ],
  "depth-statistics-how-hypothesis-tests-work": [
    "b 25 65 145 55 H₀: reference;b 190 65 145 55 H₁: departure;t 180 165 Test statistic compares data to model",
    "p M35 170Q180 -95 325 170;l 263 100 263 170;t 263 90 Observed;t 285 150 Tail;t 180 200 P(at least as extreme  given H₀)",
    "l 35 105 325 105;d 100 105 6;l 145 65 145 145;t 100 85 p=.03;t 145 55 α=.05;t 180 190 p < α → reject H₀",
    "b 25 55 145 50 Effect size;b 190 55 145 50 Uncertainty;b 25 125 145 50 Assumptions;b 190 125 145 50 Multiple tests;t 180 205 Significance alone is insufficient"
  ],
  "depth-statistics-understanding-statistical-power": [
    "r 35 75 290 50;f 35 75 232 50;t 151 105 Reject H₀;t 296 105 Miss;t 180 55 Under specified alternative;t 180 190 Power = 1 − β",
    "b 25 55 95 55 Larger n;b 132 55 95 55 Larger effect;b 239 55 95 55 Less noise;a 72 110 180 150;a 180 110 180 150;a 286 110 180 150;t 180 180 Usually higher power",
    "r 35 75 290 50;f 35 75 232 50;t 151 105 80 reject;t 296 105 20 miss;t 180 55 100 hypothetical studies;t 180 190 80% power for stated effect",
    "b 25 45 145 50 Meaningful effect;b 190 45 145 50 Plausible variance;b 25 120 145 50 Test and α;b 190 120 145 50 Desired power;t 180 205 Plan before collecting data"
  ],
  "depth-statistics-what-regression-models-describe": [
    "l 35 175 325 175;p M35 150L325 50;d 65 135 4;d 95 145 4;d 145 95 4;d 195 110 4;d 245 65 4;d 290 80 4;t 180 200 Conditional mean + variation",
    "b 25 55 310 45 Sales = 20 + 3 ads − 2 price;b 25 120 145 45 Ads +1;b 190 120 145 45 Price fixed;t 180 200 Predicted sales +3",
    "l 35 175 325 175;p M35 150L325 50;d 95 100 5;d 195 140 5;l 95 100 95 129;l 195 140 195 95;r 95 100 29 29;r 195 95 45 45;t 180 200 Minimize sum of squared residuals",
    "b 25 55 145 50 Included predictors;b 190 55 145 50 Omitted factors;t 180 150 Coefficient is conditional;t 180 195 Not automatically causal"
  ],
  "plus-statistics-understanding-interaction-effects": [
    "l 25 175 165 175;l 25 175 25 35;p M25 150L165 80M25 115L165 45;l 195 175 335 175;l 195 175 195 35;p M195 150L335 120M195 115L335 35;t 95 195 Additive;t 265 195 Interaction",
    "b 25 55 310 45 y = 10+2x+3z+4xz;t 180 145 Δy per unit x = 2 + 4z;t 180 195 Conditional slope",
    "l 35 175 325 175;l 35 175 35 35;p M35 150L285 100M35 130L185 40;t 245 95 z=0: slope 2;t 210 35 z=1: slope 6;t 180 200 Slopes differ",
    "l 35 175 325 175;p M35 150L325 100M35 130L245 35;p M35 135L325 85M35 165L325 115;t 180 200 Plot conditional estimates with uncertainty"
  ],
  "plus-statistics-how-multiple-comparisons-create-false-positives": [
    "r 35 60 29 29;r 70 60 29 29;r 105 60 29 29;r 140 60 29 29;r 175 60 29 29;r 210 60 29 29;r 245 60 29 29;r 280 60 29 29;f 315 60 29 29;t 180 120 Many true nulls;t 180 190 More chances for false positives",
    "r 35 75 290 50;f 35 75 186.18 50;t 128 105 64.2% ≥1;t 273 105 35.8% none;t 180 55 20 independent tests, α=.05;t 180 190 1 − .95²⁰ ≈ .642",
    "b 25 65 145 55 Family α=.05;a 170 92 190 92;b 190 65 145 55 Divide by 20;t 180 170 Per-test α=.0025;t 180 195 FWER ≤ .05",
    "b 25 55 145 55 Fewer false positives;b 190 55 145 55 Lower power;t 180 155 Prespecify test family;t 180 195 Separate exploration from confirmation"
  ]
};
window.LumenSlideArtBatch05Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch05;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch05Render(c,cls,step)||prior(c,cls,step);};})();


/* Cybersecurity: dedicated slide artwork, batch 06. */
window.LumenSlideArtBatch06={
  "cyber-safety": [
    "b 25 65 100 60 Fake sender;a 125 95 235 95;b 235 65 100 60 Recipient;t 180 65 False story;t 180 145 Click / disclose / pay;t 180 195 Social engineering",
    "b 35 35 290 145 Suspicious email;t 180 65 Urgent: act now!;t 180 105 Unexpected attachment;t 180 140 Request for credentials;t 180 205 Polished appearance is not proof",
    "b 25 55 145 55 Message link;b 190 55 145 55 Known bookmark;p M55 135L140 175M140 135L55 175;a 262 110 262 165;t 262 190 Verify service directly",
    "b 25 55 100 50 Suspect message;a 125 80 145 80;b 145 55 190 50 Report to IT;t 180 145 If credentials disclosed:;t 180 180 Secure affected account promptly"
  ],
  "passwords": [
    "b 25 55 145 50 Site A breach;b 190 55 145 50 Same password;a 170 80 190 80;a 262 105 262 145;b 190 145 145 40 Other accounts;t 97 158 Exposure spreads",
    "b 25 45 110 45 Manager;a 135 67 190 67;a 135 67 190 120;a 135 67 190 175;b 190 45 145 44 Unique secret A;b 190 98 145 44 Unique secret B;b 190 151 145 44 Unique secret C",
    "b 25 65 145 55 Master secret;a 170 92 190 92;b 190 65 145 55 Encrypted vault;t 97 150 Unique + strong;t 262 150 MFA + recovery;t 180 195 Protect the manager",
    "b 25 55 145 50 Exposed secret;a 170 80 190 80;b 190 55 145 50 Replace it;t 180 150 Review affected accounts;t 180 190 MFA is an extra layer"
  ],
  "depth-cybersecurity-what-multifactor-authentication-protects": [
    "b 25 55 95 70 Know;b 132 55 95 70 Have;b 239 55 95 70 Are;t 72 145 Password;t 179 145 Key;t 286 145 Biometric;t 180 195 MFA uses distinct factors",
    "b 25 60 145 55 Stolen password;b 190 60 145 55 Security key;a 170 87 190 87;t 180 150 Missing second factor → blocked;t 180 195 Two passwords = one factor type",
    "b 25 55 145 55 Genuine origin;b 190 55 145 55 Lookalike origin;t 97 150 Key signs here;t 262 150 Wrong origin;t 180 195 Origin-bound FIDO credential",
    "b 25 55 145 55 Unexpected prompt;b 190 55 145 55 Recovery methods;t 97 150 Deny + report;t 262 150 Protect access;t 180 195 Never approve surprise logins"
  ],
  "depth-cybersecurity-how-software-patches-reduce-risk": [
    "r 35 60 120 90;p M90 60L80 90L115 110L95 150;a 155 105 205 105;r 205 60 120 90;t 95 180 Defect;t 265 180 Patched;t 180 205 Fix or reduce impact",
    "b 25 55 145 55 Patch published;b 190 55 145 55 Unpatched PC;a 170 82 190 82;t 180 150 Still exposed until installed;t 180 195 Unsupported products may lack fixes",
    "b 25 50 95 50 Inventory;a 120 75 132 75;b 132 50 95 50 Test;a 227 75 239 75;b 239 50 95 50 Deploy;t 180 150 Prioritize urgent exposures;t 180 195 Trusted channel + rollback plan",
    "b 25 60 145 55 Downloaded;b 190 60 145 55 Running version;t 180 150 Verify installation and monitor failures;t 180 195 Download ≠ installed"
  ],
  "depth-cybersecurity-the-principle-of-least-privilege": [
    "r 35 60 290 100;f 35 60 95 100;t 82 105 Needed;t 227 105 Unneeded;t 180 195 Grant only task access and duration",
    "b 25 45 145 50 Help desk;a 170 70 190 70;b 190 45 145 50 Password resets;b 190 115 145 50 Payroll edits;p M180 113L180 165;t 100 150 No access;t 180 205 Separate permission scopes",
    "b 25 60 145 55 Daily account;b 190 60 145 55 Admin role;t 97 145 Routine work;t 262 145 Elevated work;t 180 195 Separate controlled elevation",
    "b 25 55 145 50 Old duties;a 170 80 190 80;b 190 55 145 50 New duties;t 180 150 Remove obsolete grants;t 180 190 Smaller compromise impact"
  ],
  "depth-cybersecurity-why-backups-must-be-tested": [
    "b 25 60 95 60 Backup;a 120 90 145 90;b 145 60 90 60 Restore;a 235 90 255 90;b 255 60 80 60 Usable data;t 180 185 Meet recovery time and condition",
    "b 25 55 145 55 Production;b 190 55 145 55 Isolated copy;p M180 40V175;t 97 150 Incident;t 262 150 Protected copy;t 180 205 Separate failure domains",
    "b 25 60 95 55 Backup;a 120 87 132 87;b 132 60 95 55 Safe sandbox;a 227 87 239 87;b 239 60 95 55 Verify;t 180 165 Integrity, app function, time",
    "b 25 55 145 55 Job success;b 190 55 145 55 Restore test;t 97 150 Copy created;t 262 150 Data usable?;t 180 195 Record dependencies and gaps"
  ],
  "depth-cybersecurity-protecting-personal-devices": [
    "r 110 30 140 155;r 125 45 110 120;c 180 175 5;t 180 80 Updates;t 180 105 Screen lock;t 180 130 Encryption;t 180 205 Complementary layers",
    "b 25 55 145 50 Official source;a 170 80 190 80;b 190 55 145 50 Install app;t 180 145 Review requested permissions;t 180 195 Limit unnecessary access",
    "r 25 45 90 140;r 35 55 70 110;c 70 175 4;b 180 45 155 42 Remote lock;b 180 102 155 42 Backup copy;a 115 100 180 66;a 115 100 180 123;t 180 205 Configure before loss",
    "r 35 55 120 80;r 205 55 120 80;p M55 145H135M225 145H305;t 95 100 Unlocked;t 265 100 Locked;t 95 180 Active session;t 265 180 Protected;t 180 205 Lock unattended screens"
  ],
  "depth-cybersecurity-understanding-secure-network-connections": [
    "b 25 65 100 55 Browser;a 125 92 235 92;b 235 65 100 55 Server;p M135 70H225V115H135Z;t 180 65 TLS;t 180 155 Encrypted and integrity protected",
    "b 25 60 145 55 Site certificate;a 170 87 190 87;b 190 60 145 55 Hostname check;t 180 150 Verify trust and name match;t 180 195 Do not ignore warnings",
    "b 25 65 145 55 HTTPS channel;b 190 65 145 55 Site content;t 97 150 Protected in transit;t 262 150 May be unsafe;t 180 195 Connection ≠ site honesty",
    "b 25 55 95 55 Device;a 120 82 132 82;b 132 55 95 55 VPN provider;a 227 82 239 82;b 239 55 95 55 Destination;t 180 150 VPN changes trusted intermediary;t 180 195 HTTPS and warnings still matter"
  ],
  "plus-cybersecurity-why-asset-inventories-matter": [
    "b 25 45 145 45 Devices;b 190 45 145 45 Software;b 25 115 145 45 Services;b 190 115 145 45 Data;t 180 195 Record owner and purpose",
    "b 25 55 145 55 Listed laptop;b 190 55 145 55 Unknown laptop;t 97 150 Updates + logs;t 262 150 May miss both;t 180 195 Visibility enables coverage",
    "b 25 45 95 45 Discovery;b 132 45 95 45 Procurement;b 239 45 95 45 Enrollment;a 72 90 180 140;a 180 90 180 140;a 286 90 180 140;b 100 140 160 45 Reconciled list",
    "b 25 55 145 55 Critical asset;a 170 82 190 82;b 190 55 145 55 Dependencies;t 180 150 Check patch, backup, monitoring;t 180 195 Protect inventory records"
  ],
  "plus-cybersecurity-how-secure-defaults-help": [
    "b 25 55 145 55 New account;a 170 82 190 82;b 190 55 145 55 Protections on;t 180 150 Safer initial state;t 180 195 No manual opt-in required",
    "b 25 65 145 55 New private doc;a 170 92 190 92;b 190 65 145 55 Deliberate share;t 180 165 Private until authorized",
    "b 25 55 145 55 Default protection;b 190 55 145 55 Approved exception;t 97 150 Broad coverage;t 262 150 Scope + expiry;t 180 195 Do not weaken everyone",
    "b 25 55 145 55 Fresh install;b 190 55 145 55 Upgrade;t 180 150 Check control is actually on;t 180 195 Documentation is not enforcement"
  ],
  "depth-cybersecurity-understanding-ransomware-defense": [
    "b 25 55 95 55 Encryption;b 132 55 95 55 Data theft;b 239 55 95 55 Disruption;t 180 155 Restore files ≠ resolve breach",
    "r 35 45 290 30;r 55 75 250 30;r 75 105 210 30;r 95 135 170 30;t 180 64 Updates;t 180 94 MFA + access;t 180 124 Isolated backups;t 180 154 Monitoring;t 180 200 Defense layers",
    "b 25 60 95 55 Detect;a 120 87 132 87;b 132 60 95 55 Notify;a 227 87 239 87;b 239 60 95 55 Contain;t 180 165 Authorized plan + preserve evidence",
    "b 25 55 95 55 Restore;a 120 82 132 82;b 132 55 95 55 Validate;a 227 82 239 82;b 239 55 95 55 Resume;t 180 165 Investigate cause and exposure"
  ],
  "depth-cybersecurity-how-security-logs-help-investigations": [
    "b 35 45 290 40 09:00 Authentication;b 35 85 290 40 09:02 Configuration change;b 35 125 290 40 09:04 Service error;t 180 195 Observations, not complete truth",
    "l 35 110 325 110;d 75 110 6;d 180 110 6;d 285 110 6;t 75 85 Identity;t 180 145 Endpoint;t 285 85 Service;t 180 195 Correlate time + account + device",
    "b 25 65 145 55 Unusual sign-in;a 170 92 190 92;b 190 65 145 55 Privilege change;t 180 165 Investigate relationship;t 180 195 Neither alone proves intent",
    "b 25 45 145 50 Restrict access;b 190 45 145 50 Preserve records;b 25 120 145 50 Sync clocks;b 190 120 145 50 Limit retention;t 180 205 Protect evidence and privacy"
  ],
  "plus-cybersecurity-how-access-reviews-reduce-risk": [
    "b 25 55 145 55 Actual grants;b 190 55 145 55 Business needs;t 180 150 Compare; t 180 195 Keep only justified access",
    "b 25 55 145 55 Contractor left;a 170 82 190 82;b 190 55 145 55 Admin still active;t 180 155 Confirm ownership;t 180 195 Remove through approved process",
    "b 25 55 95 55 User;a 120 82 132 82;b 132 55 95 55 Group;a 227 82 239 82;b 239 55 95 55 Role;t 180 155 Indirect grants count;t 180 195 Review effective access",
    "b 25 55 95 55 Decide;a 120 82 132 82;b 132 55 95 55 Remove;a 227 82 239 82;b 239 55 95 55 Verify;t 180 165 Record owner and expiry"
  ],
  "plus-cybersecurity-what-security-segmentation-achieves": [
    "r 25 45 125 130;r 210 45 125 130;l 180 35 180 185;t 87 65 Zone A;t 272 65 Zone B;c 65 105 10;c 105 145 10;c 250 105 10;c 290 145 10;a 115 105 245 105;t 180 200 Controlled communication",
    "b 25 55 145 55 Guest Wi-Fi;b 190 55 145 55 Admin services;p M170 40V165;p M177 75L183 85M183 75L177 85;t 180 195 No unauthorized guest access",
    "b 25 55 145 55 Required flows;b 190 55 145 55 Deny others;t 97 150 Allow and log;t 262 150 Enforce boundary;t 180 195 Policy follows business needs",
    "b 25 55 145 55 Expected boundary;b 190 55 145 55 Actual reachability;t 180 150 Authorized tests reveal gaps;t 180 195 Exposed services remain at risk"
  ],
  "plus-cybersecurity-how-security-awareness-is-measured": [
    "b 25 55 145 55 Attendance;b 190 55 145 55 Prompt reporting;t 97 150 Participation;t 262 150 Behavior;t 180 195 Measure outcomes, not attendance alone",
    "b 25 55 145 55 Approved scenario;a 170 82 190 82;b 190 55 145 55 Report channel;t 180 155 Aggregate recognition and reporting;t 180 195 Avoid shaming or excess collection",
    "l 35 175 325 175;r 65 120 80 55;f 215 65 80 110;t 105 110 Before;t 255 55 After;t 180 195 More reports may mean better awareness",
    "b 25 55 145 55 Metrics;b 190 55 145 55 Feedback;a 97 110 180 150;a 262 110 180 150;t 180 178 Improve reporting process"
  ],
  "plus-cybersecurity-what-an-incident-response-plan-contains": [
    "b 25 45 145 45 Incident lead;b 190 45 145 45 Communications;b 25 115 145 45 Technical team;b 190 115 145 45 Recovery owner;t 180 195 Defined roles and escalation",
    "b 25 55 145 55 Affected services;b 190 55 145 55 Potential harm;a 97 110 180 150;a 262 110 180 150;t 180 180 Prioritize and preserve evidence",
    "b 25 55 145 55 Scenario;a 170 82 190 82;b 190 55 145 55 Tabletop team;t 180 150 Simulate handoffs;t 180 195 No live service disruption",
    "b 25 55 95 55 Lessons;a 120 82 132 82;b 132 55 95 55 Update;a 227 82 239 82;b 239 55 95 55 Retest;t 180 170 Contacts and dependencies"
  ],
  "plus-cybersecurity-understanding-threat-modeling": [
    "b 25 55 95 55 Client;a 120 82 132 82;b 132 55 95 55 Service;a 227 82 239 82;b 239 55 95 55 Data;t 180 155 Identify assets and flows;t 180 195 State scope and assumptions",
    "b 25 55 145 55 Untrusted client;b 190 55 145 55 Server check;l 180 35 180 175;a 170 82 190 82;t 180 195 Enforce policy at trust boundary",
    "r 35 45 290 130;l 180 45 180 175;l 35 110 325 110;d 255 70 7;d 105 145 7;t 180 30 Impact ↑;t 180 195 Likelihood →;t 255 95 Prioritize;t 105 165 Lower",
    "b 25 55 145 55 Proposed control;a 170 82 190 82;b 190 55 145 55 Authorized test;t 180 150 Revisit when design changes;t 180 195 Diagram alone is not proof"
  ],
  "plus-cybersecurity-understanding-session-security": [
    "b 25 55 145 55 Authenticate;a 170 82 190 82;b 190 55 145 55 Issue token;t 180 150 Subsequent requests carry token;t 180 195 Protect like access secret",
    "l 35 110 325 110;d 55 110 6;d 180 110 6;d 300 110 6;t 55 85 Issue;t 180 85 Rotate;t 300 85 Expire;t 180 175 Revoke when needed",
    "b 25 55 145 55 Cookie protections;b 190 55 145 55 Origin checks;t 180 150 Prevent script injection too;t 180 195 Multiple browser controls",
    "b 25 55 95 55 Session valid;a 120 82 132 82;b 132 55 95 55 Check grant;a 227 82 239 82;b 239 55 95 55 Allow / deny;t 180 175 Every protected operation"
  ],
  "plus-cybersecurity-how-vulnerability-prioritization-works": [
    "b 25 45 145 50 Severity;b 190 45 145 50 Exposure;b 25 120 145 50 Exploitation;b 190 120 145 50 Asset impact;t 180 205 Priority uses multiple factors",
    "b 25 55 145 55 Exposed critical;b 190 55 145 55 Isolated test;t 97 145 Active exploitation;t 262 145 Higher score;t 180 195 Critical exposure may come first",
    "b 25 55 145 55 Patch now;b 190 55 145 55 Temporary control;t 180 155 Document deadline and owner;t 180 195 Remediate when safe",
    "b 25 55 145 55 Ticket closed;b 190 55 145 55 Control verified;t 180 155 Test actual remediation;t 180 195 Reassess remaining risk"
  ],
  "plus-cybersecurity-what-a-security-baseline-does": [
    "b 25 45 145 45 Logging required;b 190 45 145 45 Admin restricted;b 75 125 210 50 Approved server baseline;t 180 205 Role-specific configuration",
    "b 25 55 145 55 Default baseline;b 190 55 145 55 Justified exception;t 180 150 Owner + mitigation + review date",
    "b 25 55 145 55 Approved settings;b 190 55 145 55 Actual settings;t 180 155 Compare for drift;t 180 195 Investigate deviations",
    "b 25 55 145 55 Config value;a 170 82 190 82;b 190 55 145 55 Functional test;t 180 155 Confirm effective protection;t 180 195 Update as threats evolve"
  ]
};
window.LumenSlideArtBatch06Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch06;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch06Render(c,cls,step)||prior(c,cls,step);};})();


/* Financial Literacy: dedicated slide artwork, batch 07. */
window.LumenSlideArtBatch07={
  "credit": [
    "b 25 65 145 55 Credit report;a 170 92 190 92;b 190 65 145 55 Score model;t 97 150 Account history;t 262 150 Numeric summary;t 180 195 Report ≠ score",
    "b 45 35 270 40 Account: own / joint;b 45 75 270 40 Balance and limit;b 45 115 270 40 Payments and inquiries;t 180 195 Reporting coverage varies",
    "b 25 65 95 55 Find error;a 120 92 132 92;b 132 65 95 55 Dispute;a 227 92 239 92;b 239 65 95 55 Verify;t 180 170 Reporting company + provider",
    "b 25 45 145 50 Report / score;b 190 45 145 50 Income;b 25 120 145 50 Collateral;b 190 120 145 50 Underwriting;t 180 205 Lender decisions use more than a score"
  ],
  "insurance": [
    "c 55 70 13;c 105 70 13;c 155 70 13;c 205 70 13;c 255 70 13;c 305 70 13;a 55 83 180 135;a 155 83 180 135;a 255 83 180 135;b 110 135 140 45 Pooled premiums;t 180 205 Pay covered losses from pool",
    "r 35 70 290 55;f 35 70 58 55;t 64 102 Deduct.;t 210 102 Covered portion;t 180 155 Exclusions and limits matter",
    "r 35 75 290 50;f 35 75 48.33 50;t 60 105 $500;t 205 105 $2,500;t 180 55 Covered loss $3,000;t 180 180 Simplified payment = $2,500",
    "b 25 55 145 55 Low premium;b 190 55 145 55 Higher premium;t 97 150 Check deductible;t 262 150 Check coverage;t 180 195 Compare whole contract"
  ],
  "banks": [
    "b 25 55 145 60 Assets;b 190 55 145 60 Liabilities;t 97 145 Loans owed to bank;t 262 145 Deposits owed to savers;t 180 195 Bank balance sheet",
    "b 20 55 100 55 Payer bank;a 120 82 130 82;b 130 55 100 55 Settlement;a 230 82 240 82;b 240 55 100 55 Payee bank;t 180 175 One transfer can involve several institutions",
    "b 25 45 145 50 Interest income;b 190 45 145 50 Funding costs;b 25 120 145 50 Operating cost;b 190 120 145 50 Credit losses;t 180 205 Revenue and risk",
    "b 25 55 145 55 Eligible deposit;b 190 55 145 55 Investment fund;t 97 150 May be insured;t 262 150 Not a deposit;t 180 195 Check institution and ownership category"
  ],
  "depth-financial-literacy-building-an-emergency-fund": [
    "b 25 65 145 55 Unexpected bill;a 170 92 190 92;b 190 65 145 55 Savings buffer;t 180 160 Reduce immediate need for costly debt",
    "r 35 75 96.67 55;r 131.67 75 96.67 55;r 228.34 75 96.66 55;t 83 107 $1,500;t 180 107 $1,500;t 277 107 $1,500;t 180 180 3 months = $4,500",
    "l 35 170 325 170;p M35 155H95V135H155V115H215V95H275V75H325;t 180 45 Small scheduled transfers;t 180 200 Adjust target to circumstances",
    "b 25 65 95 55 Save;a 120 92 132 92;b 132 65 95 55 Emergency;a 227 92 239 92;b 239 65 95 55 Refill;t 180 170 Accessible, appropriately safe savings"
  ],
  "depth-financial-literacy-reading-a-paycheck": [
    "r 35 75 290 50;f 35 75 65 50;t 67 105 Deductions;t 212 105 Net pay;t 180 55 Gross earnings;t 180 190 Gross − deductions = net",
    "r 35 75 290 55;f 35 75 58 55;t 64 107 $160;t 209 107 $640;t 180 55 40 h × $20 = $800;t 180 190 Net pay $640",
    "b 25 45 145 50 Tax withholding;b 190 45 145 50 Insurance;b 25 120 145 50 Retirement;b 190 120 145 50 Other deductions;t 180 205 Withholding ≠ final tax liability",
    "b 25 55 145 55 Your timesheet;b 190 55 145 55 Pay statement;t 180 150 Match hours, rate and pay period;t 180 195 Ask payroll about discrepancies"
  ],
  "plus-financial-literacy-how-checking-accounts-settle-payments": [
    "l 35 110 325 110;d 65 110 6;d 180 110 6;d 295 110 6;t 65 85 Authorize;t 180 85 Clear;t 295 85 Settle;t 180 175 Pending ≠ final debit",
    "r 35 75 290 50;f 35 75 80 50;t 75 105 Holds;t 220 105 Available;t 180 55 Posted balance;t 180 190 Availability depends on rules",
    "r 35 75 290 50;f 35 75 77.33 50;t 73 105 $80 hold;t 223 105 $220 available;t 180 55 Posted $300;t 180 190 Simplified authorization example",
    "l 35 110 325 110;d 65 110 6;d 180 110 6;d 295 110 6;t 65 85 Pending;t 180 85 Disappears;t 295 85 Posts;t 180 175 Track outstanding transactions"
  ],
  "plus-financial-literacy-how-overdrafts-happen": [
    "r 35 75 180 50;r 215 75 80 50;t 125 105 Available;t 255 105 Shortfall;t 180 55 Payment exceeds funds;t 180 190 If paid, overdraft can result",
    "l 35 110 325 110;l 135 85 135 135;d 295 110 6;d 75 110 6;t 135 75 $0;t 295 90 $40;t 75 90 −$15;a 295 140 75 140;t 180 175 $55 payment before fees",
    "b 25 55 145 55 Payment type;b 190 55 145 55 Account rules;t 180 150 Paid / declined / returned;t 180 195 Fees and protections vary",
    "b 25 55 145 55 Low balance alert;b 190 55 145 55 Pending bills;t 180 150 Check before payment;t 180 195 Understand transfer or decline options"
  ],
  "plus-financial-literacy-what-beneficiaries-do-in-financial-accounts": [
    "b 25 65 145 55 Account;a 170 92 190 92;b 190 65 145 55 Beneficiary;t 180 155 Applicable triggering event;t 180 190 Designation identifies recipient",
    "b 25 55 95 55 Retirement;b 132 55 95 55 Insurance;b 239 55 95 55 POD account;t 180 150 Rules and consent may differ;t 180 195 Check account-specific restrictions",
    "b 105 35 150 40 Account;a 180 75 95 125;a 180 75 265 125;b 25 125 140 45 Primary;b 195 125 140 45 Contingent;t 180 205 Contingent if primary cannot take effect",
    "b 25 55 145 55 Life change;a 170 82 190 82;b 190 55 145 55 Review records;t 180 150 Check rules and designations;t 180 195 A will may not override them"
  ],
  "plus-financial-literacy-how-automatic-saving-works": [
    "b 25 65 145 55 Paycheck;a 170 92 190 92;b 190 65 145 55 Savings;t 180 150 Scheduled allocation;t 180 195 Automatic recurring transfer",
    "l 35 170 325 170;p M35 165L325 45;t 35 190 Week 0;t 325 190 Week 52;t 300 35 $1,300;t 180 95 $25/week;t 180 210 Contributions before interest",
    "l 35 110 325 110;d 65 110 6;d 180 110 6;d 295 110 6;t 65 85 Income;t 180 85 Bills;t 295 85 Save;t 180 175 Avoid transferring unavailable funds",
    "b 25 55 145 55 Income changes;b 190 55 145 55 Expenses change;a 97 110 180 150;a 262 110 180 150;t 180 175 Adjust scheduled transfer"
  ],
  "plus-financial-literacy-how-to-recognize-recurring-charges": [
    "l 35 110 325 110;d 65 110 6;d 145 110 6;d 225 110 6;d 305 110 6;t 65 85 $12;t 145 85 $12;t 225 85 $12;t 305 85 $12;t 180 175 Repeating merchant charges",
    "r 35 75 24 45;r 59 75 24 45;r 83 75 24 45;r 107 75 24 45;r 131 75 24 45;r 155 75 24 45;r 179 75 24 45;r 203 75 24 45;r 227 75 24 45;r 251 75 24 45;r 275 75 24 45;r 299 75 24 45;t 180 55 12 months × $12;t 180 180 $144 annually",
    "l 35 110 325 110;d 35 110 6;d 325 110 6;t 35 85 Jan;t 325 85 Dec;t 180 145 Annual renewal can be missed;t 180 195 Review more than one month",
    "b 25 55 95 55 Cancel;a 120 82 132 82;b 132 55 95 55 Keep proof;a 227 82 239 82;b 239 55 95 55 Verify;t 180 175 Report unauthorized charges promptly"
  ],
  "depth-financial-literacy-how-loan-amortization-works": [
    "r 35 75 290 50;f 35 75 100 50;t 85 105 Interest;t 230 105 Principal;t 180 55 Payment split;t 180 190 Outstanding balance declines",
    "r 35 75 290 50;f 35 75 96.67 50;t 83 105 $100 interest;t 228 105 $200 principal;t 180 55 $300 payment;t 180 190 $10,000 × 1% = $100",
    "r 35 75 290 50;f 35 75 94.73 50;t 82 105 $98 interest;t 227 105 $202 principal;t 180 55 $9,800 × 1%;t 180 190 New balance $9,598",
    "l 35 175 325 175;p M35 45Q180 70 325 175;p M35 150Q180 115 325 45;t 100 45 Balance falls;t 265 75 Principal share rises;t 180 200 Model assumes fixed payment and rate"
  ],
  "depth-financial-literacy-how-credit-card-interest-accumulates": [
    "b 25 55 95 55 Purchases;b 132 55 95 55 Transfers;b 239 55 95 55 Advances;t 180 150 Different APRs and rules;t 180 195 Interest depends on balances",
    "b 25 60 145 55 $1,000 balance;b 190 60 145 55 24% APR;t 180 160 24% / 12 = 2% monthly;t 180 195 Illustrative interest $20",
    "l 35 110 325 110;d 55 110 6;d 180 110 6;d 305 110 6;t 55 85 Purchase;t 180 85 Statement;t 305 85 Due date;t 180 175 Qualifying full payment may avoid interest",
    "l 35 170 325 170;p M35 45L325 155;p M35 45Q180 70 325 100;t 260 145 Larger payments;t 270 85 Small payments;t 180 195 Illustrative balance paths"
  ],
  "plus-financial-literacy-understanding-credit-utilization": [
    "r 35 75 290 50;f 35 75 87 50;t 78 105 Balance;t 224 105 Unused limit;t 180 55 Reported balance ÷ limit;t 180 190 Individual and aggregate ratios",
    "r 35 55 200 30;f 35 55 60 30;r 35 105 100 30;f 35 105 10 30;t 265 74 $600/$2,000;t 195 124 $100/$1,000;t 180 180 $700/$3,000 ≈ 23.3%",
    "l 35 110 325 110;d 65 110 6;d 180 110 6;d 295 110 6;t 65 85 Report;t 180 85 Pay;t 295 85 View app;t 180 175 Report may lag current balance",
    "b 25 55 145 55 Utilization;b 190 55 145 55 Other factors;t 180 150 Model-dependent score impact;t 180 195 Do not pay interest just to report balance"
  ],
  "plus-financial-literacy-how-a-deductible-differs-from-a-premium": [
    "b 25 55 145 55 Premium;b 190 55 145 55 Deductible;t 97 145 Buy coverage;t 262 145 Pay covered loss share;t 180 195 Different costs",
    "r 45 65 180 35;f 45 130 108 35;t 135 55 A: $600/yr;t 99 120 B: $360/yr;t 180 195 No claims: B costs $240 less",
    "r 45 60 120 35;f 165 60 100 35;r 45 130 72 35;f 117 130 200 35;t 155 50 A: $1,100;t 181 120 B: $1,360;t 180 195 Premium + deductible for one covered loss",
    "b 25 45 145 50 Copays;b 190 45 145 50 Coinsurance;b 25 120 145 50 Limits;b 190 120 145 50 Exclusions;t 180 205 Model realistic total costs"
  ],
  "depth-financial-literacy-understanding-retirement-accounts": [
    "r 35 45 290 125;b 60 80 115 55 Stocks;b 185 80 115 55 Bonds;t 180 35 Account structure;t 180 195 Holdings determine exposure",
    "l 35 75 325 75;l 35 150 325 150;d 65 75 6;d 300 75 6;d 65 150 6;d 300 150 6;t 65 55 Contribute;t 300 55 Withdraw;t 180 95 Traditional: tax may be later;t 180 175 Roth: qualified withdrawals may be tax-free",
    "r 35 75 290 50;f 35 75 193.33 50;t 131 105 $1,000;t 277 105 $500 gain;t 180 55 $1,500 before taxes;t 180 190 After-tax proceeds depend on rules",
    "b 25 45 145 50 Match / vesting;b 190 45 145 50 Fees;b 25 120 145 50 Investments;b 190 120 145 50 Withdrawal rules;t 180 205 Compare plan design"
  ],
  "plus-financial-literacy-how-to-compare-fixed-and-variable-interest": [
    "l 35 175 325 175;p M35 100H325;p M35 140H120V110H205V65H325;t 180 90 Fixed;t 265 55 Variable;t 180 200 Contractual reset periods",
    "b 25 65 145 55 Index 4%;b 190 65 145 55 Margin 2%;t 180 165 4% + 2% = 6%;t 180 195 Before adjustments",
    "r 65 90 90 80;f 205 50 90 120;t 110 80 $600;t 250 40 $900;t 110 190 6%;t 250 190 9%;t 180 210 On $10,000 simple annual interest",
    "b 25 45 145 50 Reset timing;b 190 45 145 50 Floors / caps;b 25 120 145 50 Fees;b 190 120 145 50 Payment resets;t 180 205 Compare lifetime cost, not starting rate"
  ],
  "plus-financial-literacy-what-loan-to-value-means": [
    "r 35 75 290 50;f 35 75 203 50;t 136 105 Loan;t 280 105 Equity;t 180 55 Collateral valuation;t 180 195 LTV = loan / value",
    "r 35 60 290 30;f 35 60 232 30;r 35 130 290 30;f 35 130 261 30;t 180 50 $160k/$200k = 80%;t 180 120 $180k/$200k = 90%",
    "r 35 75 261 50;f 35 75 232 50;t 151 105 $160k loan;t 180 55 Value falls to $180k;t 180 185 LTV ≈88.9%",
    "b 25 55 145 55 LTV ratio;b 190 55 145 55 Monthly budget;t 97 150 Collateral risk;t 262 150 Affordability;t 180 195 Different underwriting considerations"
  ],
  "plus-financial-literacy-how-to-compare-currency-exchange-costs": [
    "b 25 65 145 55 USD;a 170 92 190 92;b 190 65 145 55 EUR;t 180 145 EUR per USD;t 180 190 Compare same direction and amount",
    "b 25 50 145 55 $500 × .90;b 190 50 145 55 $490 × .92;t 97 145 €450.00;t 262 145 €450.80;t 180 195 Second offer deducts $10 first",
    "b 25 65 145 55 Reference rate;b 190 65 145 55 Customer rate;t 180 150 Difference may include markup;t 180 195 Also check sending / receiving fees",
    "b 25 55 145 55 Total cost;b 190 55 145 55 Net received;t 180 150 Compare at equal total cost;t 180 195 Include speed and reliability"
  ]
};
window.LumenSlideArtBatch07Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch07;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch07Render(c,cls,step)||prior(c,cls,step);};})();


/* Biology: dedicated slide artwork, batch 08. */
window.LumenSlideArtBatch08={
  "dna": [
    "p M80 30Q300 65 80 100T80 170M280 30Q60 65 280 100T280 170;l 119 43 241 43;l 150 65 210 65;l 119 87 241 87;l 119 113 241 113;l 150 135 210 135;l 119 157 241 157;t 180 39 A–T;t 180 82 C–G;t 180 152 A–T;t 180 205 Complementary base pairing",
    "b 25 65 95 55 DNA;a 120 92 132 92;b 132 65 95 55 RNA;a 227 92 239 92;b 239 65 95 55 Protein;t 125 55 Transcribe;t 238 55 Translate;a 180 120 180 155;t 180 175 Some RNA functions directly",
    "b 25 55 145 55 Original sequence;b 190 55 145 55 Variant sequence;t 97 145 A T G C C;t 262 145 A T G T C;t 180 195 May affect product or regulation",
    "b 35 45 290 45 DNA template 3′ TAC 5′;a 180 90 180 125;b 35 125 290 45 RNA 5′ AUG 3′;t 180 200 RNA codon read by ribosome"
  ],
  "microbes": [
    "c 65 95 25;p M140 65Q195 40 220 90Q195 135 140 110Z;c 180 85 13;c 285 95 22;l 285 67 285 45;l 265 78 250 60;l 305 78 320 60;t 65 145 Bacterium;t 180 145 Fungal cell;t 285 145 Virus;t 180 195 Viruses require host cells",
    "r 25 105 100 60;p M25 125Q75 85 125 125;r 130 105 100 60;p M130 125Q155 95 180 125T230 125;r 235 105 100 60;c 285 75 18;t 75 185 Soil;t 180 185 Water;t 285 185 Host body",
    "c 65 95 35;c 180 95 35;c 180 95 15;c 295 95 25;d 65 95 5;d 295 95 5;t 65 155 No nucleus;t 180 155 Nucleus;t 295 155 No cell;t 180 200 Bacteria / fungi / viruses",
    "c 80 100 22;c 95 85 11;c 140 120 7;c 165 95 10;c 190 70 12;p M220 145Q230 60 285 60Q330 60 340 145Z;t 90 150 Yeast;t 165 145 CO₂ bubbles;t 280 175 Rising dough;t 180 205 Sugar fermentation"
  ],
  "photosynthesis": [
    "c 65 50 22;a 85 70 150 120;p M125 155Q110 55 280 75Q275 175 125 155Z;l 125 155 265 90;a 285 130 335 130;t 280 55 Leaf;t 300 120 O₂;t 180 195 Light drives chemical reactions",
    "r 35 50 290 100;r 80 65 200 18;r 80 90 200 18;r 80 115 200 18;a 125 25 125 65;a 235 25 235 65;t 180 42 Light;t 180 160 ATP + NADPH;t 180 198 Water split releases O₂",
    "c 180 100 55;a 180 20 180 45;t 235 25 CO₂;a 40 100 125 100;t 65 85 ATP/NADPH;a 235 100 320 100;t 285 85 Organic products;t 180 103 Calvin cycle;t 180 195 Carbon fixation",
    "p M180 175V70M180 100Q120 45 85 90Q135 125 180 100M180 125Q240 65 275 105Q225 145 180 125;a 35 70 100 85;a 180 205 180 175;t 55 55 CO₂ from air;t 260 180 Minerals + water;t 180 35 Most dry carbon comes from CO₂"
  ],
  "depth-biology-how-cells-divide": [
    "c 180 100 65;a 180 35 235 72;a 245 100 207 156;a 150 158 115 100;a 115 75 170 35;t 180 28 G1;t 265 104 S;t 180 180 G2;t 83 104 M;t 180 105 Cell cycle;t 180 205 Replicate DNA in S phase",
    "c 55 90 35;c 180 90 35;c 305 90 35;p M40 75L70 105M70 75L40 105M165 75L195 105M195 75L165 105M293 75L283 105M317 75L327 105;a 90 90 145 90;a 215 90 270 90;t 55 145 Condense;t 180 145 Align;t 305 145 Separate;t 180 195 Cytokinesis follows nuclear division",
    "p M65 65L65 135M145 65L205 135M205 65L145 135;a 95 100 135 100;t 65 155 One chromatid;t 175 155 Sister chromatids;d 175 100 5;t 180 190 46 chromosomes before and after S",
    "b 25 55 95 55 DNA copied;a 120 82 132 82;b 132 55 95 55 Checkpoint;a 227 82 239 82;b 239 55 95 55 Divide;t 180 150 Pause or repair if needed;t 180 195 Regulation coordinates division"
  ],
  "depth-biology-what-makes-a-cell-membrane-selective": [
    "c 50 65 10;c 90 65 10;c 130 65 10;c 170 65 10;c 210 65 10;c 250 65 10;c 290 65 10;c 50 145 10;c 90 145 10;c 130 145 10;c 170 145 10;c 210 145 10;c 250 145 10;c 290 145 10;p M45 75V105M55 75V105M85 75V105M95 75V105M125 75V105M135 75V105M165 75V105M175 75V105M205 75V105M215 75V105M245 75V105M255 75V105M285 75V105M295 75V105M45 135V110M55 135V110M85 135V110M95 135V110M125 135V110M135 135V110M165 135V110M175 135V110M205 135V110M215 135V110M245 135V110M255 135V110M285 135V110M295 135V110;t 180 35 Water-facing heads;t 180 185 Hydrophobic tails inside",
    "r 25 90 310 35;r 155 75 45 65;d 75 55 5;d 95 55 5;d 178 55 5;a 85 60 85 155;a 178 60 178 155;t 85 180 Simple diffusion;t 210 180 Channel-assisted;t 180 205 Down gradients",
    "l 180 35 180 185;d 240 65 5;d 270 90 5;d 230 130 5;d 295 155 5;d 285 65 5;a 95 100 220 100;t 90 80 Water;t 260 40 Higher effective solute;t 180 205 Water moves across membrane",
    "c 95 100 40;c 95 100 55;r 220 45 100 110;c 270 100 42;a 30 100 55 100;a 200 100 228 100;t 95 175 Animal swells;t 270 175 Plant wall resists;t 180 205 Dilute external solution"
  ],
  "depth-biology-how-enzymes-speed-reactions": [
    "l 35 175 325 175;p M35 140Q100 15 175 140T325 145;p M35 140Q100 90 175 140T325 145;t 180 30 Higher barrier;t 180 85 Lower barrier;t 180 200 Same overall energy change",
    "p M25 70H115V90H95V115H115V145H25Z;r 145 85 25 30;a 135 100 115 100;t 70 165 Active site;t 160 75 Substrate;t 180 205 Binding aligns reactants",
    "l 35 175 325 175;p M35 175Q180 -65 325 175;t 180 45 Peak activity;t 180 195 Temperature / pH (schematic);t 180 212 Extreme conditions can disrupt activity",
    "b 25 65 100 55 Lactose;a 125 92 155 92;b 155 65 75 55 Lactase;a 230 92 255 65;a 230 92 255 145;b 255 45 85 42 Glucose;b 255 125 85 42 Galactose;t 180 200 Enzyme reused"
  ],
  "depth-biology-where-cells-obtain-usable-energy": [
    "b 25 65 105 55 ATP;a 130 92 160 92;b 160 65 175 55 ADP + phosphate;t 180 150 Energy coupled to cell work;a 250 165 75 165;t 180 190 ATP replenished",
    "b 25 65 105 55 Glucose;a 130 92 155 92;b 155 65 180 55 2 pyruvate;t 180 150 Small ATP gain + NADH;t 180 195 Glycolysis",
    "r 25 90 310 35;r 90 75 60 65;r 240 75 60 65;a 120 145 120 50;a 270 50 270 145;t 120 40 H⁺ pump;t 270 165 ATP synthase;t 180 200 O₂ final electron acceptor",
    "b 25 65 105 55 Glycolysis;a 130 92 160 92;b 160 65 175 55 Fermentation;a 250 145 75 145;t 180 170 NAD⁺ regenerated;t 180 200 Allows glycolysis to continue"
  ],
  "plus-biology-why-organelles-have-membranes": [
    "c 180 100 80;c 140 85 35;c 220 120 25;c 180 45 15;t 140 88 Nucleus;t 220 123 Lysosome;t 180 205 Compartments separate reactions",
    "c 180 100 65;c 160 80 8;c 210 110 8;c 155 130 8;t 180 100 Acidic lumen;t 180 30 Membrane;t 180 195 Digestive enzymes kept inside",
    "p M30 65Q30 40 90 40H270Q330 40 330 100Q330 160 270 160H90Q30 160 30 100Z;p M55 75H90V135H120V75H150V135H180V75H210V135H240V75H270V135H300;t 180 195 Folded inner membrane increases area",
    "c 90 100 45;c 270 100 45;c 180 100 15;a 135 100 165 100;a 195 100 225 100;t 90 160 Compartment A;t 270 160 Compartment B;t 180 195 Vesicles and transport proteins"
  ],
  "plus-biology-how-fungi-obtain-food": [
    "p M40 75Q60 45 80 75T120 75M40 115Q60 85 80 115T120 115;a 130 95 195 95;c 210 70 6;c 235 95 6;c 260 120 6;a 245 95 300 95;t 80 145 Hypha;t 220 150 Digested products;t 180 200 External enzymes then absorption",
    "r 35 120 290 45;p M85 120V75L55 45M85 75L115 45M180 120V60M180 80L145 50M180 80L215 50M270 120V75L300 45;t 180 195 Decompose dead organic matter",
    "p M30 170L90 125L90 65M90 125L155 100L185 35M155 100L220 130L260 60M220 130L330 165M155 100L135 45;t 180 195 Branching hyphae form mycelium",
    "r 25 110 150 60;p M45 110L85 60L125 110M85 60L145 35;c 260 95 35;c 287 65 15;t 100 185 Wood decomposer;t 260 185 Budding yeast"
  ],
  "plus-biology-what-biological-clocks-regulate": [
    "l 35 105 325 105;p M35 105Q107.5 20 180 105T325 105;t 35 175 0 h;t 180 175 12 h;t 325 175 24 h;t 180 195 Internal timing cycle",
    "c 70 75 25;a 95 75 150 75;c 200 100 50;l 200 100 200 65;l 200 100 225 100;t 70 120 Light;t 200 165 Clock entrainment;t 180 200 Daily cues synchronize rhythms",
    "l 35 75 325 75;l 35 145 325 145;f 35 55 145 20;f 110 125 145 20;t 180 45 Internal day;t 180 115 Local day;t 180 195 Time-zone mismatch",
    "l 35 170 325 170;p M35 155L225 45L325 155;p M35 100Q105 25 180 100T325 100;t 140 40 Sleep pressure;t 245 125 Clock signal;t 180 200 Distinct interacting mechanisms"
  ],
  "depth-biology-how-meiosis-creates-variation": [
    "c 180 40 22;a 180 62 95 100;a 180 62 265 100;c 95 110 20;c 265 110 20;a 95 130 55 165;a 95 130 135 165;a 265 130 225 165;a 265 130 305 165;c 55 175 14;c 135 175 14;c 225 175 14;c 305 175 14;t 180 25 2n replicated;t 180 205 Two divisions → four haploid cells",
    "p M85 40L160 170M160 40L85 170M200 40L275 170M275 40L200 170;l 122 105 237 105;a 145 95 215 95;a 215 115 145 115;t 180 30 Homologous chromosomes;t 180 195 Corresponding segments exchanged",
    "p M45 50L95 110M95 50L45 110M135 50L185 110M185 50L135 110M230 50L280 110M280 50L230 110;l 110 35 110 145;l 205 35 205 145;t 180 165 Independent orientations of pairs;t 180 195 Different maternal/paternal mixtures",
    "b 25 55 145 45 AB (25%);b 190 55 145 45 Ab (25%);b 25 115 145 45 aB (25%);b 190 115 145 45 ab (25%);t 180 200 AaBb, independent assortment"
  ],
  "depth-biology-the-anatomy-of-a-protein": [
    "c 45 100 15;c 100 100 15;c 155 100 15;c 210 100 15;c 265 100 15;c 320 100 15;l 60 100 85 100;l 115 100 140 100;l 170 100 195 100;l 225 100 250 100;l 280 100 305 100;t 180 60 Amino acid sequence;t 180 170 Peptide bonds",
    "p M25 70Q45 30 65 70T105 70T145 70M205 45L230 75L205 105L230 135M250 45L275 75L250 105L275 135;p M45 150Q90 110 135 150T225 150;t 85 100 Helix;t 245 155 Sheet;t 180 200 Folding and subunit assembly",
    "p M35 75Q100 10 165 75L140 100L165 125Q100 190 35 125Z;p M200 80L225 100L200 120Z;a 245 100 165 100;t 100 195 Binding pocket;t 230 155 Shape + charge",
    "c 55 85 12;c 100 85 12;c 145 85 12;c 190 85 12;c 235 85 12;c 280 85 12;l 67 85 88 85;l 112 85 133 85;l 157 85 178 85;l 202 85 223 85;l 247 85 268 85;d 145 85 9;a 145 110 145 155;t 180 175 Substitution may change folding;t 180 200 Effect depends on position"
  ],
  "depth-biology-how-ecosystems-recycle-nitrogen": [
    "b 75 35 210 50 Atmospheric N₂;a 180 85 180 120;b 75 120 210 50 Fixed nitrogen;t 180 195 Most organisms cannot use N₂ directly",
    "b 25 65 95 55 N₂;a 120 92 132 92;b 132 65 95 55 NH₃/NH₄⁺;a 227 92 239 92;b 239 65 95 55 Amino acids;t 125 150 Fixation;t 240 150 Assimilation;t 180 195 Microbes make nitrogen available",
    "b 25 55 95 50 Organic N;a 120 80 132 80;b 132 55 95 50 Ammonium;a 227 80 239 80;b 239 55 95 50 Nitrate;a 286 105 286 145;b 230 145 105 40 N₂ gas;t 105 160 Decompose → nitrify;t 180 205 Denitrification returns N₂",
    "r 25 85 310 90;p M25 85Q45 65 65 85T105 85T145 85T185 85T225 85T265 85T305 85;c 95 110 8;c 125 120 8;c 155 105 8;c 185 120 8;a 55 35 90 85;t 115 35 Nutrient input;t 240 150 O₂ depletion;t 180 205 Excess nutrients can fuel algal growth"
  ],
  "plus-biology-how-mutations-arise": [
    "b 35 50 290 45 A C T G A C;b 35 120 290 45 A C T A A C;t 180 110 G → A substitution;t 180 195 Copying error or damage",
    "b 25 55 95 55 Copy error;a 120 82 132 82;b 132 55 95 55 Repair;a 227 82 239 82;b 239 55 95 55 Corrected;a 180 110 180 150;t 180 175 If missed, mutation can persist",
    "b 25 45 95 50 Same amino;b 132 45 95 50 New amino;b 239 45 95 50 Stop codon;t 180 145 Substitution outcomes;t 180 195 Insertion/deletion may shift frame",
    "b 105 35 150 40 Parent cell;a 180 75 95 125;a 180 75 265 125;b 25 125 140 45 Somatic lineage;b 195 125 140 45 Germline;t 180 205 Germline changes can be inherited"
  ],
  "plus-biology-how-cells-dispose-of-damaged-parts": [
    "p M25 70L60 100L95 70L130 100;c 215 100 45;a 130 100 170 100;t 80 145 Damaged protein;t 215 103 Organelle;t 180 195 Different degradation pathways",
    "p M35 80L60 110L85 80L110 110;d 85 60 6;d 85 45 6;a 115 95 165 95;r 165 60 80 70;a 245 95 300 95;l 285 130 300 145;l 305 130 320 145;t 85 150 Ubiquitin tag;t 205 155 Proteasome;t 300 185 Peptides",
    "c 75 100 35;c 75 100 50;a 125 100 195 100;c 245 100 50;c 245 100 18;t 75 165 Enclosed organelle;t 245 165 Lysosome;t 180 205 Autophagy delivers cargo for recycling",
    "b 25 65 95 55 Degrade;a 120 92 132 92;b 132 65 95 55 Recycle;a 227 92 239 92;b 239 65 95 55 Rebuild;t 180 165 Regulated maintenance cycle"
  ],
  "plus-biology-how-genes-are-switched-on": [
    "b 25 65 95 55 DNA;a 120 92 132 92;b 132 65 95 55 RNA;a 227 92 239 92;b 239 65 95 55 Protein;t 180 145 Control at transcription, processing;t 180 165 translation and turnover",
    "l 25 115 335 115;r 45 100 55 30;r 245 100 75 30;p M70 100Q145 20 275 100;t 72 145 Enhancer;t 282 145 Promoter;t 180 195 DNA looping enables regulatory contact",
    "p M25 65Q60 25 95 65T165 65T235 65T305 65;p M25 145Q50 105 75 145T125 145T175 145T225 145T275 145T325 145;t 180 35 Open chromatin;t 180 195 Compact chromatin, same sequence",
    "r 35 65 95 40;r 130 65 160 40;t 82 90 Regulatory DNA;t 210 90 Reporter;a 290 85 325 85;t 180 150 Compare signal under two conditions;t 180 195 Include controls"
  ],
  "plus-biology-why-proteins-need-folding": [
    "p M25 55L55 95L85 75L115 125L145 85L175 150L205 110L235 160L265 125L295 175L335 145;t 180 35 Conformations and energy;t 180 200 Sequence + environment shape folding",
    "p M35 75L65 110L95 75L125 110;a 125 95 165 95;c 205 95 40;p M190 75L220 95L190 115;a 245 95 300 95;t 80 150 Unfolded;t 205 150 Chaperone;t 300 150 Folded;t 180 195 Helps prevent aggregation",
    "p M30 75L60 110L90 75L120 110M70 55L100 90L130 55L160 90;c 250 95 45;t 95 155 Aggregated;t 250 155 Functional fold;t 180 195 Misfolding may impair function",
    "b 25 55 145 55 Before heating;b 190 55 145 55 After heating;t 97 145 Activity + structure;t 262 145 Activity + structure;t 180 195 Compare multiple measurements"
  ],
  "plus-biology-how-membranes-maintain-gradients": [
    "r 25 90 310 30;d 55 55 5;d 85 55 5;d 115 55 5;d 145 55 5;d 175 55 5;d 205 55 5;d 235 55 5;d 265 55 5;d 295 55 5;d 95 155 5;d 265 155 5;t 180 35 Higher ion concentration;t 180 185 Membrane potential also matters",
    "r 25 95 310 25;r 150 70 60 75;a 170 155 170 35;a 190 35 190 155;t 90 50 3 Na⁺ out;t 270 50 2 K⁺ in;t 180 175 ATP drives pump",
    "r 25 90 310 30;r 140 70 80 70;a 160 35 160 155;a 200 155 200 35;t 95 45 Down gradient;t 275 45 Uphill cargo;t 180 195 Coupled transport",
    "r 25 90 310 30;r 75 70 55 70;r 230 70 55 70;p M78 72L128 138M128 72L78 138;a 247 40 247 155;t 100 165 Pump blocked;t 260 165 Uptake weakens;t 180 205 Gradient dissipates over time"
  ],
  "plus-biology-how-populations-exchange-genes": [
    "c 90 100 50;c 270 100 50;d 70 80 5;d 100 120 5;d 250 80 5;d 280 120 5;a 140 100 220 100;t 90 165 Population A;t 270 165 Population B;t 180 205 Migration + reproduction transfers alleles",
    "r 35 65 261 35;f 296 65 29 35;t 165 55 90% resident, 10% migrant;t 180 145 .9 × .2 + .1 × .8;t 180 190 Mixed allele A frequency = .26",
    "c 90 100 45;c 270 100 45;a 135 85 225 85;a 225 115 135 115;t 180 45 Gene flow;t 180 165 Selection, drift and barriers matter;t 180 195 May reduce differentiation",
    "c 90 95 40;c 270 95 40;a 130 85 230 85;a 230 115 190 115;t 180 45 Asymmetric contribution;t 180 165 Simple mixing assumes no selection or drift;t 180 195 Actual populations may differ"
  ]
};
window.LumenSlideArtBatch08Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch08;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch08Render(c,cls,step)||prior(c,cls,step);};})();


/* Chemistry: dedicated slide artwork, batch 09. */
window.LumenSlideArtBatch09={
  "atoms": [
    "c 180 105 65;c 180 105 23;d 170 100 7;d 190 110 7;d 116 105 5;d 244 105 5;t 180 30 Neutral helium example;t 180 185 2 protons = 2 electrons;t 180 205 Atomic number 2",
    "c 90 95 48;c 270 95 48;t 90 78 6 p;t 90 105 6 n;t 270 78 6 p;t 270 105 8 n;t 90 165 Carbon-12;t 270 165 Carbon-14;t 180 200 Same element, different neutrons",
    "c 90 95 48;c 270 95 48;t 90 80 11 p;t 90 105 11 e;t 270 80 11 p;t 270 105 10 e;a 138 95 222 95;t 180 75 Lose e⁻;t 90 165 Na;t 270 165 Na⁺;t 180 200 Proton count unchanged",
    "b 25 65 145 55 Protons + neutrons;b 190 65 145 55 Isotope abundances;t 97 150 Mass number;t 262 150 Weighted average;t 180 195 Different mass quantities"
  ],
  "chem-bonds": [
    "c 90 100 40;c 270 100 40;a 130 100 170 100;a 230 100 190 100;t 180 35 Nuclei + electrons interact;t 180 175 Bonded state may be lower energy",
    "c 135 100 55;c 225 100 55;d 170 95 5;d 190 105 5;t 180 38 Shared electron density;t 180 177 Unequal sharing can be polar",
    "c 65 60 22;c 125 60 22;c 185 60 22;c 245 60 22;c 305 60 22;c 65 120 22;c 125 120 22;c 185 120 22;c 245 120 22;c 305 120 22;t 65 64 +;t 125 64 −;t 185 64 +;t 245 64 −;t 305 64 +;t 65 124 −;t 125 124 +;t 185 124 −;t 245 124 +;t 305 124 −;t 180 185 Extended electrostatic lattice",
    "c 60 85 18;c 115 85 32;l 78 85 83 85;t 60 89 H;t 115 89 Cl;c 230 65 22;c 290 65 22;c 230 125 22;c 290 125 22;t 230 69 Na⁺;t 290 69 Cl⁻;t 230 129 Cl⁻;t 290 129 Na⁺;t 90 160 Polar covalent;t 260 160 Ionic solid"
  ],
  "ph-scale": [
    "l 35 105 325 105;d 35 105 5;d 118 105 5;d 180 105 5;d 242 105 5;d 325 105 5;t 35 85 0;t 118 85 4;t 180 85 7;t 242 85 10;t 325 85 14;t 180 155 pH = −log₁₀(aH⁺);t 180 190 Lower pH means higher activity",
    "r 45 65 260 30;f 45 130 2.6 30;t 175 55 pH 3: 10⁻³;t 140 120 pH 5: 10⁻⁵;t 180 195 Activity ratio = 100",
    "c 95 95 40;c 265 95 40;t 95 99 H⁺;t 265 99 OH⁻;t 180 100 =;t 180 160 Neutral water: pH ≈ 7 at 25°C;t 180 195 Neutral pH varies with temperature",
    "b 35 60 290 55 [H⁺] ≈ 10⁻⁴ mol/L;t 180 155 −log₁₀(10⁻⁴) = 4;t 180 195 Dilute ideal approximation"
  ],
  "depth-chemistry-what-the-periodic-table-tells-us": [
    "r 45 45 38 35;r 83 45 38 35;r 121 45 38 35;r 159 45 38 35;r 197 45 38 35;r 235 45 38 35;r 273 45 38 35;r 45 80 38 35;r 83 80 38 35;r 121 80 38 35;r 159 80 38 35;r 197 80 38 35;r 235 80 38 35;r 273 80 38 35;a 45 135 311 135;a 25 45 25 115;t 180 155 Atomic number increases across row;t 180 195 Columns = groups, rows = periods",
    "b 70 45 220 50 Li: 2,1;b 70 120 220 50 Na: 2,8,1;t 180 200 Both have one valence electron",
    "c 65 100 42;c 145 100 32;c 225 100 23;c 305 100 15;a 45 45 315 45;t 180 35 Across typical period;t 180 160 Atomic radius tends to decrease;t 180 190 Ionization energy tends to increase",
    "c 95 100 43;c 265 100 55;d 135 100 5;d 315 100 5;t 95 104 Li;t 265 104 Na;a 135 65 175 40;a 305 65 340 40;t 180 190 Both commonly form +1 ions"
  ],
  "depth-chemistry-how-chemical-equations-conserve-matter": [
    "c 55 80 12;c 85 80 12;c 115 80 12;c 145 80 12;d 75 125 12;d 125 125 12;a 160 100 205 100;c 235 80 12;c 265 80 12;d 250 100 12;c 285 125 12;c 315 125 12;d 300 145 12;t 180 195 4 H and 2 O on each side",
    "b 25 60 145 55 2 H₂O;b 190 60 145 55 H₂O₂;t 97 150 Two molecules;t 262 150 Different species;t 180 195 Change coefficient, not subscript",
    "b 20 65 145 55 2H₂ + O₂;a 165 92 195 92;b 195 65 145 55 2H₂O;t 97 145 H:4 O:2;t 267 145 H:4 O:2;t 180 195 Atoms conserved",
    "b 25 65 95 55 2 mol H₂;b 132 65 95 55 1 mol O₂;b 239 65 95 55 2 mol H₂O;a 227 92 239 92;t 180 175 Stoichiometric ratio 2:1:2"
  ],
  "depth-chemistry-how-concentration-changes-solutions": [
    "r 110 50 140 120;f 110 90 140 80;d 135 120 5;d 175 140 5;d 215 105 5;t 180 40 Solution volume;t 180 195 M = mol solute / L solution",
    "b 25 65 145 55 0.2 mol;b 190 65 145 55 0.4 L;t 180 160 0.2 / 0.4 = 0.5 mol/L",
    "r 35 75 100 95;r 225 35 100 135;d 60 120 5;d 85 135 5;d 110 120 5;d 250 80 5;d 275 110 5;d 300 140 5;a 135 110 225 110;t 180 195 Same solute, larger volume",
    "b 25 65 145 55 100 mL × 2 M;b 190 65 145 55 Final 500 mL;t 180 155 M₂ = 2 × 100 / 500;t 180 195 0.4 M"
  ],
  "plus-chemistry-why-water-dissolves-many-salts": [
    "c 180 90 38;c 130 145 20;c 230 145 20;l 153 116 145 130;l 207 116 215 130;t 180 94 O δ−;t 130 149 H δ+;t 230 149 H δ+;t 180 195 Bent polar molecule",
    "c 90 105 26;c 270 105 26;t 90 109 +;t 270 109 −;d 90 60 8;d 45 105 8;d 135 105 8;d 90 150 8;c 270 60 8;c 225 105 8;c 315 105 8;c 270 150 8;t 90 185 O ends face +;t 270 185 H ends face −",
    "b 25 55 145 55 Lattice attraction;b 190 55 145 55 Hydration + entropy;t 180 150 Competing free-energy effects;t 180 195 Solubility varies",
    "c 65 65 19;c 105 65 19;c 65 105 19;c 105 105 19;t 65 69 +;t 105 69 −;t 65 109 −;t 105 109 +;a 130 85 205 85;c 235 60 18;c 295 130 18;t 235 64 Na⁺;t 295 134 Cl⁻;t 180 195 Dissociated hydrated ions"
  ],
  "plus-chemistry-what-a-mole-measures": [
    "b 55 60 250 70 1 mol;t 180 155 6.02214076 × 10²³;t 180 195 Specified entities, exactly",
    "b 25 65 145 55 H₂O 1 mol;b 190 65 145 55 ≈18 g;a 170 92 190 92;t 180 175 Mass = amount × molar mass",
    "b 25 65 145 55 36 g H₂O;b 190 65 145 55 ÷ 18 g/mol;t 180 150 ≈2 mol;t 180 195 ≈1.20 × 10²⁴ molecules",
    "c 90 95 23;c 136 95 23;l 113 95 113 95;t 90 99 O;t 136 99 O;c 240 95 23;c 295 95 23;t 240 99 O;t 295 99 O;t 113 155 1 mol O₂;t 267 155 2 mol O atoms;t 180 195 Specify counted entity"
  ],
  "plus-chemistry-how-gas-pressure-arises": [
    "r 35 40 290 130;d 65 90 5;d 155 65 5;d 245 115 5;d 300 70 5;a 65 90 35 60;a 155 65 175 40;a 245 115 325 150;a 300 70 325 55;t 180 195 Wall collisions transfer momentum",
    "l 35 175 325 175;l 35 175 35 30;p M60 35Q95 115 325 155;t 180 40 P ∝ 1/V;t 180 195 Fixed temperature and amount",
    "r 35 65 140 100;r 225 65 70 100;d 60 95 5;d 100 125 5;d 145 90 5;d 240 95 5;d 260 125 5;d 280 90 5;t 105 45 4 L / 100 kPa;t 260 45 2 L / 200 kPa;t 180 195 Constant temperature",
    "l 35 175 325 175;l 35 175 35 30;p M35 175L300 45;t 180 35 P ∝ T (kelvin);t 180 195 Fixed V and amount"
  ],
  "plus-chemistry-what-polymers-are-made-of": [
    "c 45 100 15;c 95 100 15;c 145 100 15;c 195 100 15;c 245 100 15;c 295 100 15;l 60 100 80 100;l 110 100 130 100;l 160 100 180 100;l 210 100 230 100;l 260 100 280 100;t 180 60 Repeating structural units;t 180 170 Polymer chain",
    "b 25 55 145 55 –CH₂–CH₂–;b 190 55 145 55 Amino acid residue;t 97 150 Polyethylene;t 262 150 Protein;t 180 195 Both are polymers",
    "p M30 60H160M30 100H160M30 140H160M60 60V100M120 100V140M210 60H330M250 60V100H300M280 60V140;t 95 175 Cross-linked;t 270 175 Branched;t 180 205 Architecture affects behavior",
    "p M25 75H155M25 100H155M25 125H155M205 60Q240 25 275 60T335 60M205 115Q240 80 275 115T335 115;t 90 175 Ordered chains;t 270 175 Disordered chains;t 180 205 Processing changes properties"
  ],
  "depth-chemistry-why-reactions-release-or-absorb-heat": [
    "r 90 55 180 115;a 180 55 180 20;t 180 105 Reaction system;t 180 195 At constant P, qₚ = ΔH",
    "l 35 175 325 175;p M35 65H125L175 140H325;p M35 140H125L175 65H325;t 80 52 Higher energy;t 270 155 Exothermic;t 265 52 Endothermic;t 180 200 ΔH sign depends on endpoint change",
    "b 25 65 145 55 −100 kJ/mol;b 190 65 145 55 2 mol reaction;t 180 160 −200 kJ total;t 180 195 Releases 200 kJ",
    "c 65 85 18;c 110 85 18;l 83 85 92 85;a 130 85 180 85;c 205 65 18;c 205 125 18;t 90 150 Bonded;t 205 150 Separated;t 180 195 Breaking costs energy, forming releases"
  ],
  "depth-chemistry-what-oxidation-and-reduction-mean": [
    "c 90 95 35;c 270 95 35;d 165 95 6;a 125 95 159 95;a 171 95 235 95;t 90 99 Donor;t 270 99 Acceptor;t 90 155 Oxidation;t 270 155 Reduction;t 180 195 Electron transfer",
    "b 25 65 145 55 Reducing agent;a 170 92 190 92;b 190 65 145 55 Oxidizing agent;t 97 145 Oxidized;t 262 145 Reduced;t 180 195 Coupled processes",
    "b 25 60 145 55 Zn → Zn²⁺;b 190 60 145 55 Cu²⁺ → Cu;a 170 87 190 87;t 180 50 2 e⁻;t 180 175 Zn 0→+2, Cu +2→0",
    "b 25 55 95 55 Battery;b 132 55 95 55 Corrosion;b 239 55 95 55 Metabolism;t 180 150 Redox across contexts;t 180 195 Oxidation numbers are formal accounting"
  ],
  "depth-chemistry-why-catalysts-change-reaction-rates": [
    "l 35 175 325 175;p M35 145Q180 -65 325 145;p M35 145Q180 25 325 145;t 180 35 Higher barrier;t 180 85 Lower barrier;t 180 200 Catalyst changes pathway",
    "l 35 175 325 175;p M35 130Q150 0 325 155;l 35 130 120 130;l 200 155 325 155;a 90 130 90 55;t 90 45 Activation;t 275 145 ΔH endpoints;t 180 200 Barrier ≠ endpoint difference",
    "l 35 175 325 175;p M35 165Q85 75 160 70H325;p M35 165Q175 90 325 70;t 110 50 Faster approach;t 275 55 Same equilibrium;t 180 200 K unchanged at fixed temperature",
    "b 25 65 95 55 Exhaust;a 120 92 132 92;r 132 65 95 55;p M140 75H220M140 90H220M140 105H220;a 227 92 239 92;b 239 65 95 55 Products;t 180 175 Catalytic surface promotes reactions"
  ],
  "plus-chemistry-how-gases-dissolve-in-liquids": [
    "r 35 100 290 75;d 75 65 5;d 130 55 5;d 205 65 5;d 275 55 5;d 95 135 5;d 230 140 5;a 130 65 130 135;a 205 135 205 65;t 180 195 Equal transfer rates at equilibrium",
    "l 35 175 325 175;l 35 175 35 35;p M35 175L300 45;t 180 35 Dissolved concentration;t 180 195 Gas partial pressure →",
    "r 65 115 90 55;f 205 60 90 110;t 110 105 .02 M;t 250 50 .04 M;t 110 190 1 atm;t 250 190 2 atm;t 180 210 Fixed temperature",
    "l 35 170 325 170;p M35 50Q160 110 325 145;t 180 30 Many gases in water;t 180 195 Temperature ↑, solubility often ↓"
  ],
  "plus-chemistry-why-molecules-have-different-shapes": [
    "c 180 100 25;c 85 100 18;c 275 100 18;l 103 100 155 100;l 205 100 257 100;a 155 60 105 60;a 205 60 255 60;t 180 35 Electron domains repel;t 180 190 Geometry reduces repulsions",
    "p M30 90H110M180 90L140 145M180 90L220 145M180 90V45M275 90L250 135M275 90L300 135M275 90V45M275 90L325 75;c 70 90 9;c 180 90 9;c 275 90 9;t 70 175 Linear;t 180 175 Trigonal planar;t 275 175 Tetrahedral (schematic)",
    "c 180 85 30;c 130 140 18;c 230 140 18;l 160 107 142 126;l 200 107 218 126;d 145 55 5;d 155 48 5;d 205 48 5;d 215 55 5;t 180 35 Two lone pairs;t 180 195 Water is bent",
    "c 65 95 22;c 180 95 28;c 295 95 22;l 87 95 152 95;l 208 95 273 95;a 150 65 87 65;a 210 65 273 65;t 65 99 O;t 180 99 C;t 295 99 O;t 180 175 Equal opposite bond dipoles cancel"
  ],
  "plus-chemistry-understanding-intermolecular-forces": [
    "c 70 100 22;c 115 100 22;c 245 100 22;c 290 100 22;l 92 100 93 100;l 267 100 268 100;p M137 100H223;t 180 65 Between molecules;t 180 175 Not covalent bonds",
    "c 85 100 45;c 275 100 45;d 110 90 6;d 115 110 6;d 245 90 6;d 240 110 6;t 85 160 Instant dipole;t 275 160 Induced dipole;t 180 195 Fluctuating electron clouds",
    "c 90 100 30;c 270 100 30;t 90 104 δ+;t 270 104 δ−;p M120 100H240;t 180 70 Attraction;t 180 165 Hydrogen bonds involve suitable;t 180 185 donor and acceptor groups",
    "c 90 70 22;c 180 120 22;c 270 70 22;c 90 160 22;c 270 160 22;l 110 80 160 110;l 200 110 250 80;l 110 150 160 130;l 200 130 250 150;t 180 35 Water hydrogen-bond network;t 180 205 Helps explain high boiling point"
  ],
  "depth-chemistry-understanding-chemical-equilibrium": [
    "b 25 65 145 55 Reactants;b 190 65 145 55 Products;a 170 80 190 80;a 190 105 170 105;t 180 150 Equal forward and reverse rates;t 180 195 Concentrations remain constant",
    "b 35 60 290 55 Q = product activities / reactant activities;t 180 155 Include stoichiometric powers;t 180 195 At equilibrium Q = K",
    "b 25 55 145 55 Q < K;b 190 55 145 55 Q > K;a 65 145 130 145;a 295 145 230 145;t 97 175 Forward;t 262 175 Reverse",
    "b 25 65 145 55 A ⇌ B;b 190 65 145 55 K = 4;t 180 150 Q = [B]/[A] = 1;t 180 195 Q < K → net B formation"
  ],
  "plus-chemistry-how-buffers-resist-ph-changes": [
    "b 25 65 145 55 Weak acid HA;b 190 65 145 55 Conjugate A⁻;a 65 45 95 65;a 295 45 265 65;t 65 35 Added base;t 295 35 Added acid;t 180 175 Pair consumes added acid/base",
    "b 25 60 310 55 pH = pKa + log₁₀([A⁻]/[HA]);t 180 155 Ratio sets approximate pH;t 180 195 Suitable buffer conditions",
    "r 35 70 145 30;r 180 70 145 30;f 35 135 26.36 30;r 61.36 135 263.64 30;t 180 55 Equal amounts: pH 4.76;t 180 125 A⁻:HA = 10:1;t 180 195 pH ≈5.76",
    "l 35 175 325 175;l 35 175 35 35;p M35 150Q145 145 210 130T325 35;t 180 105 Buffer region;t 270 40 Capacity exceeded;t 180 195 Added base → (schematic)"
  ],
  "plus-chemistry-why-reaction-rates-depend-on-temperature": [
    "l 35 175 325 175;p M35 175Q85 5 135 175;p M35 175Q150 45 325 175;l 210 45 210 175;t 210 35 Eₐ threshold;t 100 50 Cooler;t 270 95 Warmer;t 180 200 More particles above barrier",
    "b 25 55 310 55 k = A exp(−Eₐ/RT);t 180 150 T in kelvin;t 180 195 Positive Eₐ: rate constant rises with T",
    "l 35 175 325 175;p M35 165Q160 155 325 50;p M35 165Q160 160 325 100;t 180 35 Rate constant k (schematic);t 180 195 Higher barrier can mean greater sensitivity",
    "b 25 55 145 55 Rate constant k;b 190 55 145 55 Concentrations;t 180 150 Overall rate depends on rate law;t 180 195 Mechanisms and denaturation may differ"
  ],
  "plus-chemistry-how-chromatography-separates-mixtures": [
    "r 75 35 210 145;l 75 155 285 155;d 130 155 6;d 180 110 6;d 230 65 6;a 300 155 300 45;t 180 200 Stationary sheet, moving solvent",
    "r 75 35 210 145;l 75 155 285 155;d 125 130 7;d 235 65 7;t 125 115 Slow;t 235 52 Fast;t 180 200 Stronger retention → shorter travel",
    "r 95 35 170 150;l 95 165 265 165;l 95 45 265 45;d 180 105 7;l 280 165 280 45;l 80 165 80 105;t 305 105 6 cm;t 52 135 3 cm;t 180 205 Rf = 3/6 = 0.50",
    "r 65 35 230 145;l 65 155 295 155;d 120 85 6;d 180 85 6;d 240 115 6;t 120 175 Standard;t 180 175 Sample;t 240 175 Other;t 180 205 Matching retention alone is not identity"
  ]
};
window.LumenSlideArtBatch09Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch09;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch09Render(c,cls,step)||prior(c,cls,step);};})();


/* Astronomy: dedicated slide artwork, batch 10. */
window.LumenSlideArtBatch10={
  "space": [
    "c 180 105 23;p M180 30A105 75 0 1 1 179.9 30;d 285 105 8;a 285 105 285 45;a 285 105 207 105;t 270 35 Sideways v;t 235 95 Gravity;t 180 200 Orbit is continuous free fall",
    "c 180 105 20;c 180 105 80;d 260 105 7;a 260 105 200 105;a 260 105 260 45;t 230 90 r;t 275 40 v;t 180 195 v²/r = GM/r²",
    "c 70 100 12;c 70 100 24;c 250 100 12;c 250 100 96;d 94 100 5;d 346 100 5;t 70 145 r;t 250 205 4r;t 180 25 Speed ½, period 8×",
    "p M35 105A145 75 0 1 0 325 105A145 75 0 1 0 35 105;c 75 105 13;d 35 105 7;d 325 105 7;a 35 105 35 45;a 325 105 325 135;t 75 40 Faster near Sun;t 270 160 Slower far away;t 180 205 Stable elliptical path"
  ],
  "stars": [
    "c 60 95 35;c 45 80 15;c 80 110 16;a 95 95 140 95;c 180 95 30;a 210 95 255 95;c 290 95 28;t 60 150 Cloud;t 180 150 Protostar;t 290 150 Fusion;t 180 195 Gravity contracts dense gas",
    "c 180 105 65;c 180 105 24;a 180 25 180 75;a 180 185 180 135;a 100 105 150 105;a 260 105 210 105;a 180 85 180 45;a 180 125 180 165;t 180 109 Core;t 180 205 Inward gravity and pressure gradient balance",
    "c 95 95 22;c 265 95 55;t 95 145 Sun;t 265 165 10 solar masses;t 180 35 Higher mass, faster fuel use;t 180 200 Much shorter main-sequence lifetime",
    "c 180 35 15;a 180 50 80 90;a 180 50 280 90;c 80 105 23;c 280 105 35;a 80 128 80 160;a 280 140 280 160;c 80 175 10;d 280 175 12;t 80 205 White dwarf;t 280 205 Neutron star / black hole"
  ],
  "black-holes": [
    "c 180 105 60;d 180 105 45;a 235 65 310 25;a 145 105 175 105;t 180 35 Event horizon;t 180 200 No outward signal from inside",
    "c 90 100 15;c 270 100 45;t 90 140 1 M☉ ~3 km;t 270 165 3 M☉ ~9 km;t 180 35 rₛ = 2GM/c²;t 180 195 Nonrotating uncharged case",
    "c 180 105 60;d 180 105 48;l 180 105 240 105;t 210 90 ~30 km;t 180 28 Ten solar masses;t 180 195 Far field depends on mass",
    "d 180 95 25;p M85 95A95 45 0 1 0 275 95A95 45 0 1 0 85 95;d 265 80 8;p M35 160Q55 135 75 160T115 160T155 160;t 180 25 Accreting gas / orbiting stars;t 180 200 Waves and imaging give evidence"
  ],
  "eclipses": [
    "c 45 65 25;c 160 65 10;c 295 65 24;p M70 50L160 58L295 63M70 80L160 72L295 67;c 45 150 25;c 180 150 24;c 300 150 10;p M70 130L180 126L325 145M70 170L180 174L325 155;t 180 25 Solar eclipse;t 180 210 Lunar eclipse",
    "p M35 105H325M35 130L325 80;c 180 105 24;d 270 90 7;t 180 30 Orbital planes tilted ~5°;t 180 195 Most new/full Moons miss alignment",
    "p M35 105H325M50 105A130 50 0 1 0 310 105A130 50 0 1 0 50 105;d 50 105 7;d 310 105 7;c 180 105 19;t 180 30 Nodes cross orbital plane;t 180 195 Sun near node enables eclipse season",
    "c 65 85 30;p M125 65H200V105H125Z;l 162 65 162 105;a 95 85 125 85;b 235 65 100 40 Solar viewer;t 180 160 Certified viewer or indirect projection;t 180 195 Never use ordinary sunglasses"
  ],
  "depth-astronomy-how-telescopes-gather-light": [
    "a 35 55 230 55;a 35 95 230 95;a 35 135 230 135;p M230 35Q300 95 230 155;p M230 55L150 95M230 135L150 95;d 150 95 5;t 180 195 Aperture collects photons and focuses light",
    "c 95 105 30;c 265 105 60;t 95 155 D;t 265 185 2D;t 180 35 Area ∝ D²;t 180 205 Double diameter, quadruple area",
    "c 95 100 32;c 265 100 64;t 95 150 10 cm;t 265 180 20 cm;t 180 30 Four times the light;t 180 205 Equal exposure and efficiency",
    "c 95 95 25;c 265 95 10;c 290 95 10;t 95 140 Small aperture;t 265 140 Larger aperture;t 180 175 Angular resolution ∝ λ/D;t 180 205 Turbulence can blur images"
  ],
  "depth-astronomy-why-planets-have-seasons": [
    "c 180 100 26;c 60 100 17;c 300 100 17;l 50 123 70 77;l 290 123 310 77;t 180 35 Axial tilt 23.4°;t 60 150 North toward Sun;t 300 150 North away;t 180 195 Axis keeps its orientation",
    "l 35 155 165 155;l 195 155 325 155;a 80 35 80 155;a 105 35 105 155;a 195 75 275 155;a 220 75 300 155;l 80 160 105 160;l 275 160 300 160;t 95 185 High angle;t 265 185 Low angle;t 180 205 Lower angle spreads same energy",
    "c 180 100 65;l 155 40 205 160;l 115 100 245 100;a 25 60 115 60;a 25 100 115 100;a 25 140 115 140;t 180 35 June: north toward Sun;t 180 185 North longer days, south shorter",
    "c 165 100 22;p M35 100A145 55 0 1 0 325 100A145 55 0 1 0 35 100;d 35 100 7;d 325 100 7;t 45 180 January nearer;t 300 180 July farther;t 180 205 Distance cannot explain opposite seasons"
  ],
  "depth-astronomy-reading-starlight-through-spectra": [
    "a 25 105 100 105;p M100 145L150 45L200 145Z;p M150 100L320 45M150 100L320 145;t 275 35 Short λ;t 275 165 Long λ;t 180 195 Spectrograph separates wavelength",
    "r 35 65 290 25;r 35 135 290 25;l 85 65 85 90;l 155 65 155 90;l 240 65 240 90;l 85 135 85 160;l 155 135 155 160;l 240 135 240 160;t 180 55 Laboratory;t 180 125 Star;t 180 195 Matching lines identify species",
    "l 35 85 325 85;l 35 145 325 145;l 160 60 160 105;l 220 120 220 165;a 160 110 220 110;t 160 50 500 nm;t 220 180 500.1 nm;t 180 205 Δλ/λ=.0002 → ~60 km/s",
    "r 35 65 290 30;r 35 135 290 30;r 100 65 5 30;r 200 65 12 30;r 100 135 12 30;r 200 135 5 30;t 180 45 Different line strengths;t 180 195 Temperature, abundance and ionization matter"
  ],
  "depth-astronomy-how-galaxies-are-organized": [
    "p M30 105A150 40 0 1 0 330 105A150 40 0 1 0 30 105;c 180 105 35;c 180 105 90;t 180 35 Extended halo;t 180 110 Bulge;t 275 150 Disk;t 180 205 Stars, gas, dust and dark matter",
    "p M20 95Q75 35 120 95Q75 155 20 95M50 95Q75 65 100 95Q75 125 50 95;c 180 95 46;p M245 70L275 45L325 80L305 130L265 140L250 105Z;t 70 165 Spiral;t 180 165 Elliptical;t 285 165 Irregular",
    "p M35 110Q120 20 220 100T325 105M35 140Q135 55 220 130T325 135;d 90 80 5;d 145 75 5;d 235 125 5;d 280 140 5;t 180 35 Young hot stars trace spiral arms;t 180 195 Redder regions may be older or dusty",
    "c 65 60 18;c 95 90 18;c 65 120 18;c 270 70 18;c 300 100 18;c 270 130 18;p M95 90Q180 45 270 70M65 120Q180 170 270 130;t 180 195 Galaxy groups linked by filaments"
  ],
  "depth-astronomy-how-astronomers-measure-distance": [
    "c 65 160 8;c 295 160 8;c 180 160 12;d 180 45 6;l 65 160 180 45;l 295 160 180 45;l 180 45 180 160;t 65 185 Earth A;t 295 185 Earth B;t 180 28 Nearby star;t 180 205 Parallax uses Earth's orbital baseline",
    "b 25 65 145 55 p = .05 arcsec;b 190 65 145 55 d = 1/p;t 180 155 20 parsecs;t 180 195 About 65 light-years",
    "c 60 105 12;c 60 105 45;c 60 105 90;d 150 105 6;d 240 105 6;t 150 130 r;t 240 130 2r;t 180 35 Known luminosity;t 180 195 Flux falls as 1/r²",
    "r 35 150 95 25;r 95 115 115 25;r 175 80 130 25;t 82 145 Parallax;t 152 110 Variable stars;t 240 75 Supernovae;t 180 195 Overlapping distance calibrations"
  ],
  "depth-astronomy-what-exoplanets-reveal": [
    "c 180 85 48;d 180 85 12;l 35 180 325 180;p M35 155H115V170H245V155H325;t 180 30 Transit blocks star area;t 180 205 Depth ≈ (Rp/R★)²",
    "c 180 105 75;d 180 105 7.5;t 180 20 1% transit depth;t 180 195 Rp/R★ = √.01 = .1",
    "c 180 100 45;d 185 100 6;p M40 100A140 65 0 1 0 320 100A140 65 0 1 0 40 100;d 320 100 9;t 180 35 Common center of mass;t 180 195 Stellar Doppler wobble",
    "c 60 105 20;c 60 105 55;c 60 105 90;d 150 105 7;b 205 55 130 45 Atmosphere;b 205 125 130 45 Reflectivity;t 180 205 Habitable zone ≠ proof of life"
  ],
  "plus-astronomy-how-craters-form": [
    "l 25 145 335 145;d 140 35 12;a 140 47 180 135;p M180 145Q115 125 85 150M180 145Q245 125 275 150;t 180 195 Shock compresses, heats and fractures rock",
    "p M25 100H100Q180 220 260 100H335;a 115 115 60 55;a 245 115 300 55;d 55 50 5;d 305 50 5;t 180 195 Bowl excavated, ejecta beyond rim",
    "r 65 135 85 35;f 215 30 85 140;t 107 125 E;t 257 20 4E;t 107 190 v;t 257 190 2v;t 180 210 Same mass: E ∝ v²",
    "p M25 65H45Q95 155 145 65H165M190 65H205L225 100L245 120L265 90L285 120L305 100L325 65H340;t 95 165 Simple bowl;t 265 165 Terraces + peak;t 180 205 Large cavities can collapse"
  ],
  "plus-astronomy-why-the-moon-has-phases": [
    "c 70 100 30;c 265 100 55;p M265 45A55 55 0 0 0 265 155Z;a 105 75 210 75;a 105 100 210 100;a 105 125 210 125;t 70 150 Sun;t 265 175 Lit half faces Sun;t 180 205 Viewed fraction defines phase",
    "c 180 105 21;c 65 105 16;c 180 35 16;c 295 105 16;c 180 175 16;t 180 109 Earth;t 65 140 New;t 180 20 Quarter;t 295 140 Full;t 180 205 Quarter;t 35 105 Sun →",
    "l 35 110 325 110;d 35 110 6;d 107 110 6;d 180 110 6;d 252 110 6;d 325 110 6;t 35 85 New;t 107 85 First Q;t 180 85 Full;t 252 85 Third Q;t 325 85 New;t 180 175 Cycle ≈29.5 days",
    "c 60 90 24;c 180 90 21;c 300 120 12;p M84 70L180 69L325 90M84 110L180 111L325 90;t 180 160 Ordinary full Moon misses shadow;t 180 195 Eclipse requires special alignment"
  ],
  "plus-astronomy-how-comets-develop-tails": [
    "c 65 100 25;d 250 100 20;c 250 100 45;a 90 80 205 80;a 90 120 205 120;d 290 80 4;d 295 115 4;t 65 145 Sun;t 250 160 Coma;t 180 200 Sublimating ice releases gas and dust",
    "c 65 100 25;d 180 100 10;p M180 90Q250 60 335 105M180 110Q250 125 335 170;t 65 145 Sun;t 275 55 Curved dust tail;t 180 200 Dust retains orbital motion",
    "c 65 105 25;d 180 105 10;p M180 100L335 85M180 110L335 125;a 95 105 160 105;t 180 35 Solar wind;t 280 70 Ion tail;t 180 195 Charged particles swept away from Sun",
    "c 60 105 25;d 180 105 10;p M180 100L335 90M180 110L335 120;a 180 145 280 145;t 230 168 Motion outward;t 180 195 Tail can point ahead of motion"
  ],
  "plus-astronomy-what-a-supernova-leaves-behind": [
    "c 180 105 65;c 180 105 23;a 100 105 153 105;a 260 105 207 105;a 180 25 180 82;a 180 185 180 128;t 180 109 Core;t 180 205 Iron-rich core collapses",
    "c 90 100 55;d 90 100 8;c 270 100 55;d 270 100 14;t 90 170 Neutron star;t 270 170 Black hole;t 180 205 Compact survivor distinct from ejecta",
    "d 180 105 9;c 180 105 55;c 180 105 85;a 180 50 180 20;a 235 105 270 105;a 125 105 90 105;t 180 205 Expanding shocks heat gas and accelerate particles",
    "c 90 100 50;d 90 100 10;c 270 100 50;t 90 170 Core collapse;t 270 170 Normal Type Ia;t 180 195 Type Ia generally no compact survivor"
  ],
  "plus-astronomy-how-white-dwarfs-cool": [
    "c 180 105 50;c 180 105 32;a 180 20 180 55;a 260 105 230 105;a 100 105 130 105;t 180 109 C/O core;t 180 195 Electron degeneracy supports remnant",
    "c 180 105 45;a 180 60 180 25;a 225 105 280 105;a 135 105 80 105;a 180 150 180 185;t 180 109 Stored heat;t 180 205 L = 4πR²σT⁴",
    "r 65 25 85 144;f 215 160 85 9;t 107 20 16L;t 257 150 L;t 107 190 10,000 K;t 257 190 5,000 K;t 180 210 Equal radii",
    "l 35 175 325 175;p M35 40Q100 100 150 120H215Q275 145 325 165;t 180 100 Crystallization delay;t 180 195 Cooling time + progenitor lifetime"
  ],
  "plus-astronomy-what-pulsars-reveal": [
    "c 180 105 30;l 180 25 180 185;p M180 105L60 55L75 85ZM180 105L300 155L285 125Z;a 225 65 255 105;t 180 20 Spin axis;t 180 205 Beam crossing produces pulse",
    "l 35 165 325 165;p M35 165H55V55H65V165H145V55H155V165H235V55H245V165H325;l 60 40 150 40;t 105 30 P=.02 s;t 180 195 1/P = 50 rotations/s",
    "l 35 175 325 175;p M35 155L325 65;t 180 35 Period increases;t 180 200 Spin-down loses rotational energy",
    "l 35 100 325 100;d 65 100 5;d 125 95 5;d 185 110 5;d 245 105 5;d 305 90 5;t 180 70 Predicted arrival time;t 180 160 Timing residuals after corrections;t 180 195 Companions or gravitational waves"
  ],
  "plus-astronomy-how-a-planet-s-atmosphere-is-studied": [
    "c 180 100 75;c 180 100 30;d 180 100 25;a 95 100 145 100;t 180 20 Starlight;t 180 195 Atmosphere adds wavelength-dependent blocking",
    "c 80 105 55;d 80 105 48;l 128 105 135 105;t 80 180 Thin annulus;b 175 65 160 55 Δδ≈2Rpz/R★²;t 255 150 2×10,000×100 / 10¹⁰;t 255 185 200 ppm",
    "l 35 175 325 175;p M35 40Q90 110 180 145T325 170;p M35 40Q160 90 325 145;t 180 30 Density vs altitude;t 180 195 H=kT/(μg): hotter/lighter → larger H",
    "l 35 170 325 170;p M35 140L70 135L100 85L130 135L170 130L210 65L240 135L280 125L325 135;p M35 145L70 140L100 95L130 140L170 135L210 72L240 140L280 132L325 140;t 180 35 Similar spectra, different models;t 180 195 More wavelengths help distinguish"
  ],
  "plus-astronomy-why-galaxies-rotate-unexpectedly": [
    "p M35 100A145 45 0 1 0 325 100A145 45 0 1 0 35 100;d 180 100 10;d 70 100 6;d 290 100 6;a 70 100 70 60;a 290 100 290 140;t 180 195 Doppler velocities corrected for inclination",
    "l 35 175 325 175;p M55 40Q100 105 325 150;t 180 30 Fixed enclosed mass;t 180 195 v ∝ r⁻¹ᐟ² (spherical model)",
    "l 35 175 325 175;p M35 65H325;p M125 65Q180 100 285 97;d 125 65 5;d 285 65 5;t 125 50 10 kpc;t 285 50 20 kpc;t 180 190 Flat 200 km/s → double mass;t 180 208 Fixed mass predicts ~141 km/s",
    "l 35 175 325 175;p M35 165Q90 65 145 65H325;p M35 165Q90 65 145 65Q225 115 325 155;t 245 55 Observed;t 260 145 Visible matter;t 180 200 Additional gravitating mass"
  ],
  "plus-astronomy-how-gravitational-lensing-works": [
    "d 35 105 7;c 180 105 30;d 325 105 7;p M35 105Q130 25 180 65T325 105M35 105Q130 185 180 145T325 105;t 35 145 Source;t 180 40 Lens mass;t 325 145 Observer;t 180 195 Mass redirects light",
    "c 180 105 65;d 180 105 15;c 180 105 50;t 180 25 Exact alignment;t 180 195 Einstein ring radius θE",
    "c 90 100 25;c 270 100 50;d 90 100 6;d 270 100 12;t 90 150 M;t 270 170 4M;t 180 30 Ring radius doubles;t 180 205 θE ∝ √M for fixed distances",
    "c 180 105 30;p M100 50Q50 105 100 160M260 50Q310 105 260 160;p M35 35L55 45M305 35L325 25M35 180L55 165M305 180L325 195;t 180 20 Strong arcs / weak distortions;t 180 205 Infer projected mass with models"
  ],
  "plus-astronomy-how-astronomers-detect-stellar-motion": [
    "l 35 85 325 85;l 35 145 325 145;l 145 65 145 105;l 215 125 215 165;a 145 110 215 110;t 145 50 Rest λ₀;t 215 180 Observed λ;t 180 205 Positive shift = recession",
    "b 25 65 145 55 600.000 nm;b 190 65 145 55 600.006 nm;t 180 155 Δλ/λ = 0.00001;t 180 195 vr ≈ 3 km/s",
    "l 35 105 325 105;p M35 105Q107.5 35 180 105T325 105;t 180 25 Periodic velocity;t 180 175 a★ sin i = KP/(2π);t 180 200 Inclination affects amplitude",
    "b 25 45 145 50 Orbital signal;b 190 45 145 50 Starspots / drift;b 25 120 145 50 Repeat cycles;b 190 120 145 50 Activity indicators;t 180 205 Check independent evidence"
  ]
};
window.LumenSlideArtBatch10Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch10;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch10Render(c,cls,step)||prior(c,cls,step);};})();


/* Earth Science: dedicated slide artwork, batch 11. */
window.LumenSlideArtBatch11={
  "plate-tectonics": [
    "r 25 55 310 20;r 25 75 310 45;r 25 120 310 55;l 140 55 140 120;l 245 55 245 120;a 80 45 130 45;a 180 45 230 45;t 180 69 Crust;t 180 105 Rigid upper mantle;t 180 150 Asthenosphere;t 180 195 Moving lithosphere over weaker solid mantle",
    "p M25 90H75L95 65L115 90H160M200 85H335M235 85L300 165;l 25 120 160 120;a 95 115 45 115;a 95 115 145 115;a 210 60 260 60;a 335 60 285 60;t 95 185 Divergent ridge;t 270 185 Convergent subduction",
    "r 35 50 290 120;l 180 50 180 170;a 145 145 145 75;a 215 75 215 145;p M35 110H180M180 130H325;t 180 195 Transform: horizontal sliding",
    "b 25 65 145 55 5 cm/year;b 190 65 145 55 1 million years;t 180 150 5,000,000 cm;t 180 195 50 km of plate travel"
  ],
  "water-cycle": [
    "r 25 135 310 40;c 70 50 22;a 90 70 120 120;a 120 135 120 80;p M235 135V75M235 90L210 65M235 100L260 75;a 250 65 250 35;t 120 65 Evaporation;t 250 25 Transpiration;t 180 195 Solar energy drives water vapor",
    "p M35 85Q40 40 90 60Q120 15 160 65Q215 25 245 65Q315 50 325 85Z;a 90 165 90 90;d 210 120 4;d 240 140 4;d 270 155 4;t 180 35 Condensation / ice growth;t 90 185 Rising moist air;t 260 185 Precipitation",
    "p M25 85L100 50L180 100L260 70L335 95;l 25 155 335 155;a 100 60 180 100;a 180 100 270 95;a 210 105 210 155;a 210 160 290 160;t 105 120 Runoff;t 250 145 Infiltration;t 180 195 Groundwater can feed streams",
    "r 35 60 290 40;f 35 130 116 35;r 151 130 130.5 35;f 281.5 130 43.5 35;t 180 50 Input 100 mm;t 93 152 ET 40;t 216 152 Flow 45;t 303 152 15;t 180 200 Storage gain = 15 mm"
  ],
  "weather-fronts": [
    "p M35 175H325M80 175L240 45;a 65 145 125 145;a 275 110 205 110;t 95 110 Cold air;t 265 75 Warm air;t 180 195 Sloping boundary, not a wall",
    "p M25 175H335M55 60L180 175;a 35 145 150 145;a 185 155 120 75;p M95 70Q130 30 160 65Q185 40 215 75;t 80 190 Cold wedge;t 255 145 Warm air rises;t 180 205 Showers possible if moist and unstable",
    "p M25 175H335M65 175L315 70;a 285 140 285 80;a 185 130 130 95;p M105 80Q150 40 190 75Q245 30 300 65;t 110 145 Cold air;t 255 45 Warm air above;t 180 205 Precipitation may precede surface front",
    "l 35 65 325 65;p M80 65L95 85L110 65M155 65L170 85L185 65M230 65L245 85L260 65;l 35 145 325 145;p M80 145Q95 110 110 145M155 145Q170 110 185 145M230 145Q245 110 260 145;t 180 45 Cold-front triangles;t 180 190 Warm-front semicircles"
  ],
  "volcanoes": [
    "p M25 150L140 45L180 65L220 45L335 150Z;p M165 150V85L180 65L195 85V150;c 180 165 23;a 180 150 180 80;t 235 145 Magma;t 180 205 Lava reaches the surface",
    "r 50 45 105 125;r 205 45 105 125;c 80 135 5;c 110 135 5;c 85 90 9;c 115 60 15;c 235 125 18;c 280 80 25;t 102 190 Rising magma;t 258 190 Expanding gas;t 180 25 Pressure drops upward",
    "p M25 100L95 65L165 100L165 155H25Z;p M195 100L265 45L335 100V155H195Z;c 265 110 13;c 280 75 9;t 95 180 Runny basaltic;t 265 180 Viscous magma;t 180 205 Viscosity affects gas escape",
    "b 25 45 145 50 Deformation;b 190 45 145 50 Earthquakes;b 25 120 145 50 Gas emissions;b 190 120 145 50 Heat;t 180 205 Combine signals, no exact countdown"
  ],
  "glaciers": [
    "r 35 45 290 35;r 35 80 290 35;r 35 115 290 55;t 180 67 Snow;t 180 102 Firn;t 180 147 Dense glacial ice;a 180 20 180 45;t 180 195 Burial compacts snow",
    "p M25 50L120 65L230 130L335 160M25 80L120 95L230 160L335 190;a 90 75 165 115;a 190 130 250 165;l 290 130 290 185;t 290 120 Earlier terminus;t 180 205 Ice still flows while margin retreats",
    "p M25 50L75 130Q180 185 285 130L335 50;p M95 50L180 150L265 50;t 180 35 River V vs glacial U valley;t 180 200 Abrasion and quarrying reshape bedrock",
    "r 35 60 130 100;r 195 60 130 100;c 55 90 8;c 115 135 14;c 140 80 4;c 80 125 4;l 195 90 325 90;l 195 125 325 125;t 100 185 Unsorted till;t 260 185 Sorted meltwater deposits"
  ],
  "minerals": [
    "p M35 50L70 35L105 50L105 90L70 105L35 90Z;p M175 50L210 40L240 65L275 45L325 80L300 150L245 165L185 145Z;d 220 80 6;d 260 110 6;d 290 85 6;t 70 130 Mineral crystal;t 250 185 Rock: mixed materials;t 180 205 Granite: quartz, feldspar, mica",
    "r 35 60 130 100;r 195 60 130 100;p M45 65L85 155M85 65L125 155M125 65L160 155;d 205 80 3;d 225 100 3;d 245 75 3;d 265 140 3;d 285 90 3;d 305 120 3;t 100 185 Slow cooling;t 260 185 Rapid cooling;t 180 205 Grain size differs",
    "r 35 45 290 40;r 35 85 290 40;r 35 125 290 45;d 55 70 5;d 80 65 5;d 110 72 5;d 145 66 5;a 180 15 180 45;t 180 102 Compaction;t 180 150 Cemented rock;t 180 195 Burial and lithification",
    "p M35 65L135 85L35 105L135 125L35 145M225 65Q270 20 315 65T315 145Q270 190 225 145Z;a 145 105 215 105;t 85 175 Existing rock;t 270 175 Recrystallized;t 180 205 Solid-state change, not melting"
  ],
  "earthquakes": [
    "r 35 45 290 130;l 180 45 180 175;p M35 90Q150 90 180 70Q210 90 325 90M35 135Q150 135 180 115Q210 135 325 135;a 145 150 145 70;a 215 70 215 150;t 180 195 Locked fault stores elastic strain",
    "l 30 65 330 65;l 30 145 330 145;d 50 65 4;d 75 65 4;d 82 65 4;d 89 65 4;d 120 65 4;d 150 65 4;p M30 145Q55 100 80 145T130 145T180 145T230 145T280 145T330 145;a 240 35 320 35;t 180 85 P: compression parallel;t 180 190 S: shear perpendicular",
    "d 180 100 7;c 180 100 35;c 180 100 70;d 205 85 5;d 285 125 5;t 180 25 Single earthquake magnitude;t 210 60 Stronger nearby;t 285 150 Different intensity;t 180 200 Local shaking varies",
    "r 55 165 75 2;r 145 165 75 5;f 235 25 75 145;t 92 155 M4;t 182 155 M5;t 272 20 M6;t 180 195 M6 vs M4 ≈1,000× energy"
  ],
  "depth-earth-science-how-rivers-shape-landscapes": [
    "p M25 45L100 75L180 110L260 145L335 175;a 65 65 155 105;d 110 90 5;d 175 125 5;d 245 150 5;t 180 30 Flow carries abrasive grains;t 180 205 Slope and discharge affect erosion",
    "r 25 70 310 105;d 80 100 3;d 120 110 3;d 170 85 3;d 225 120 3;c 75 155 8;c 150 160 8;c 240 155 8;a 90 155 130 155;t 180 50 Suspended fine sediment;t 180 195 Coarse grains roll or hop on bed",
    "p M35 40Q300 30 255 105Q210 175 35 160M35 70Q250 60 225 105Q190 145 35 130;a 250 65 280 65;a 205 125 180 125;t 280 50 Outer erosion;t 105 110 Inner deposition;t 180 205 Meander migrates",
    "p M160 30L160 100L75 175M180 30L180 100L285 175M170 100L170 175M170 100L115 175M170 100L230 175;l 25 175 335 175;t 180 20 River;t 180 195 Delta grows when supply exceeds removal"
  ],
  "depth-earth-science-how-sedimentary-layers-tell-time": [
    "r 35 45 290 42;r 35 87 290 42;r 35 129 290 42;t 180 67 Younger;t 180 110 Intermediate;t 180 151 Older;t 180 200 Undisturbed beds: relative order",
    "r 35 45 290 40;r 35 85 290 45;r 35 130 290 45;p M155 175L215 85L235 85L175 175Z;t 180 35 Younger cover;t 260 150 Older beds;t 180 200 Dike younger than beds it cuts",
    "p M35 105L325 105L325 175H35ZM35 135L125 105M65 175L275 105M205 175L325 135;r 35 45 290 60;t 180 75 Younger horizontal beds;t 180 200 Tilt, erosion, renewed deposition",
    "r 25 55 125 110;r 210 55 125 110;l 25 105 150 105;l 210 105 335 105;d 90 105 7;d 270 105 7;l 90 105 270 105;t 180 45 Same marker fossil/ash;t 180 195 Correlate distant layers"
  ],
  "depth-earth-science-why-groundwater-matters": [
    "c 55 70 22;c 105 70 22;c 80 115 22;c 130 115 22;d 80 90 5;d 105 95 5;a 60 145 130 145;d 230 65 5;d 250 65 5;d 270 65 5;d 290 65 5;d 230 85 5;d 250 85 5;d 270 85 5;d 290 85 5;t 95 175 Larger connected pores;t 260 120 Small pores;t 180 205 Porosity ≠ permeability",
    "r 35 65 290 100;l 35 75 325 145;a 95 110 240 135;t 95 55 Higher head;t 275 55 Lower head;t 180 195 Q = KA Δh/L",
    "r 35 65 290 110;p M35 85Q135 85 180 155Q225 85 325 85;l 180 35 180 175;a 180 140 180 30;t 180 25 Pumping well;t 180 200 Cone of depression",
    "b 25 55 145 55 1 km² × 1 m;b 190 55 145 55 Specific yield .20;t 180 150 1,000,000 × 1 × .20;t 180 195 200,000 m³ drainable storage loss"
  ],
  "plus-earth-science-how-rocks-record-past-environments": [
    "c 45 90 10;c 80 90 10;c 115 90 10;c 150 90 10;p M210 60L230 80L215 115L195 100ZM255 50L300 60L310 110L265 120ZM315 130L330 145L315 160Z;t 100 150 Well sorted;t 265 180 Mixed sizes/shapes;t 180 205 Transport leaves grain clues",
    "p M25 100H335M25 135H335M25 170H335M45 135L95 100M100 135L150 100M155 135L205 100M210 135L260 100M265 135L315 100;p M25 70L55 55L85 70L115 55L145 70L175 55L205 70L235 55L265 70L295 55L325 70;t 180 35 Ripples above cross-beds;t 180 200 Migrating currents build inclined beds",
    "p M45 110Q70 45 95 110Z;p M60 105L70 70L80 105;c 230 95 35;d 230 95 8;t 70 145 Shell fossil;t 230 145 Mineral evidence;t 180 195 Independent clues to deposition",
    "p M25 125H335M25 160H335M25 195H335;p M35 115L50 105L65 115L80 105L95 115L110 105L125 115M200 130Q215 105 230 130Z;p M250 160L265 145L280 160L295 145L310 160;t 180 35 Ripples + marine shells + mud cracks;t 180 75 Periodically exposed shallow coast?;t 180 215 Check transport and bed context"
  ],
  "plus-earth-science-why-mountains-rise-and-wear-down": [
    "p M25 120L130 110L180 40L230 110L335 120L335 165H25Z;a 45 130 130 130;a 315 130 230 130;t 180 25 Collision;t 180 195 Shortens and thickens crust",
    "p M50 65L125 45L185 80L160 150L70 160Z;p M125 45L115 85L145 110L105 160;a 115 20 115 85;t 230 75 Water / roots;t 230 110 Chemical alteration;t 180 200 Weathering weakens rock in place",
    "p M25 155L85 55L145 125L200 45L275 130L335 155;a 145 120 180 170;a 200 45 200 15;t 95 190 Erosion removes material;t 270 30 Isostatic uplift;t 180 205 Both can occur together",
    "a 115 150 115 50;a 245 50 245 120;t 115 35 +1 mm/yr;t 245 140 −0.7 mm/yr;t 180 180 Net surface rise;t 180 205 0.3 mm/year"
  ],
  "plus-earth-science-how-caves-form-in-limestone": [
    "p M25 75H335M25 110H335M25 145H335;a 95 35 95 110;a 235 35 235 110;t 180 25 Rain + soil CO₂;t 180 95 Carbonic acid in water;t 180 195 Calcite dissolves",
    "p M25 45H335V175H25ZM160 45L175 85L155 125L180 175M200 45L185 85L205 125L180 175;a 180 25 180 80;t 90 110 Limestone;t 270 110 Widened joint;t 180 205 Dissolved material carried away",
    "r 25 45 310 130;p M25 125Q80 85 135 125T245 125T335 125;l 25 150 335 150;t 180 70 Air-filled passage;t 180 170 Lower water table;t 180 200 Former saturated conduit",
    "p M35 45H325M35 175H325M100 45L125 115L145 45M220 175L245 95L265 175;d 125 130 5;d 245 80 5;t 125 30 Stalactite;t 245 195 Stalagmite;t 180 215 Calcite precipitates as CO₂ escapes"
  ],
  "plus-earth-science-what-a-geological-fault-is": [
    "p M35 55H325V165H35ZM140 55L220 165M35 100H173M190 120H325;t 100 85 Bed offset;t 255 140 Displacement;t 180 195 Fault = fracture with motion",
    "p M25 60H145L225 170H25ZM155 80H335V170H235Z;a 250 65 250 120;t 90 45 Footwall;t 260 45 Hanging wall;t 180 205 Hanging wall moves down",
    "p M25 90H155L215 170H25ZM145 55H335V170H225Z;a 255 130 255 75;t 85 75 Footwall;t 270 40 Hanging wall;t 180 205 Hanging wall moves up",
    "a 80 165 170 165;a 170 165 170 45;a 80 165 170 45;t 125 185 3 m strike;t 200 105 4 m dip;t 115 80 5 m;t 180 210 Perpendicular slip components"
  ],
  "plus-earth-science-how-sand-dunes-move": [
    "l 25 155 335 155;d 65 150 4;d 105 150 4;d 145 150 4;d 185 150 4;a 35 95 280 95;a 105 145 145 120;t 180 70 Wind shear;t 180 195 Threshold depends on moisture and grain size",
    "l 25 155 335 155;p M45 150Q80 75 115 150Q150 75 185 150Q220 75 255 150;d 115 150 5;d 185 150 5;a 255 150 290 150;t 180 45 Saltation hops;t 180 195 Impact moves larger grains by creep",
    "p M25 170L230 65L280 170H335;a 80 135 200 78;a 240 85 270 155;t 130 105 Windward;t 280 65 Slip face;t 180 205 Sand transfer migrates dune downwind",
    "p M35 155L100 100L135 155M180 155L280 45L335 155;a 100 75 160 75;a 280 30 310 30;t 95 180 Small dune;t 265 180 Large dune;t 180 205 Similar flux: smaller often faster"
  ],
  "plus-earth-science-why-coastlines-change": [
    "p M25 130H190L220 50H335M25 145H190L210 165H335;p M25 100Q45 75 65 100T105 100T145 100;a 145 100 205 100;t 275 40 Cliff;t 180 195 Breaking waves move sand and erode rock",
    "p M25 130H335;l 180 130 180 60;a 55 45 105 105;a 115 45 165 105;a 215 45 265 105;a 65 150 160 150;a 195 150 290 150;t 180 35 Oblique waves;t 180 195 Alongshore transport, structure traps sand",
    "p M25 130H130L185 65L240 130H335;p M25 110Q80 85 135 110T245 110;a 110 105 230 75;t 185 50 Dune;t 280 150 Overwash;t 180 200 Storms may erode or deposit",
    "r 45 65 216 30;f 45 130 270 30;t 153 55 Gain 12,000 m³/yr;t 180 120 Loss 15,000 m³/yr;t 180 195 Net −3,000 m³/year"
  ],
  "plus-earth-science-how-soil-forms-from-rock": [
    "r 35 55 130 50;r 35 105 130 70;r 195 55 130 50;r 195 105 130 70;d 225 125 5;d 245 145 5;d 275 120 5;t 100 185 Weathered bedrock;t 260 185 Transported sediment;t 180 35 Parent material",
    "p M35 65L115 45L180 80L155 170L65 170Z;p M115 45L100 95L135 130L105 170;a 100 20 100 95;t 265 70 Physical cracks;t 265 110 Chemical changes;t 180 200 Water moves solutes and particles",
    "p M180 25V95L120 145M180 95L240 145M180 65L220 45M180 65L140 45;r 25 105 310 70;d 75 125 5;d 105 150 5;d 270 130 5;d 290 155 5;t 180 200 Litter, roots, microbes form aggregates",
    "r 75 35 160 35;r 75 70 160 30;r 75 100 160 40;r 75 140 160 40;t 155 57 A;t 155 90 E;t 155 125 B;t 155 165 C;a 260 80 260 120;t 285 95 Leach;t 285 138 Accumulate;t 180 205 Idealized soil horizons"
  ],
  "plus-earth-science-how-radiometric-dating-works": [
    "l 35 175 325 175;p M35 45Q105 110 180 145T325 165;l 130 175 130 110;t 130 195 t½;t 180 30 Parent isotope decays;t 180 210 N=N₀e^(−λt)",
    "r 35 65 290 30;r 35 105 145 30;r 35 145 72.5 30;t 180 55 Initial;t 220 125 ½ remains;t 180 165 ¼ remains;t 180 200 2 × 1.25 Ga = 2.5 Ga",
    "l 35 110 325 110;p M35 55L125 145L205 65L285 155;l 35 115 325 115;t 180 30 Heating may reset clock;t 180 195 Retention begins below closure temperature",
    "l 35 175 325 175;l 35 175 35 35;d 75 135 5;d 135 115 5;d 195 95 5;d 255 75 5;p M35 148L325 51;t 115 145 Initial intercept;t 180 200 Isochron slope constrains age"
  ],
  "plus-earth-science-understanding-metamorphic-rocks": [
    "p M35 55L130 40L160 95L130 155L45 165Z;p M215 55L310 40L335 95L305 155L220 165Z;a 160 100 215 100;l 235 75 305 75;l 235 100 305 100;l 235 125 305 125;t 100 185 Existing rock;t 275 185 New texture;t 180 205 Solid-state recrystallization",
    "r 100 65 160 95;a 180 25 180 65;a 180 195 180 160;l 120 90 240 90;l 120 110 240 110;l 120 130 240 130;t 180 15 Directed stress;t 180 215 Preferred mineral orientation",
    "c 95 100 45;c 265 100 45;p M80 85L110 85L120 110L95 130L70 110Z;p M250 65L265 135L280 65;t 95 165 Garnet;t 265 165 Sillimanite;t 180 205 Grade depends on composition and P–T",
    "c 180 100 65;c 180 100 40;d 165 85 6;d 195 110 6;a 95 50 130 75;t 75 40 Rim;t 180 105 Inclusion;t 180 195 Early inclusions and late rims record history"
  ],
  "plus-earth-science-what-seismic-waves-reveal-about-earth": [
    "l 35 65 325 65;l 35 145 325 145;d 55 65 4;d 85 65 4;d 92 65 4;d 99 65 4;d 135 65 4;p M35 145Q60 100 85 145T135 145T185 145T235 145T285 145T335 145;t 180 45 P: √((K+4G/3)/ρ);t 180 195 S: √(G/ρ), zero in liquid",
    "r 35 65 290 45;r 35 110 290 65;p M55 45L135 110L255 160M135 110L235 45;d 135 110 5;t 180 30 Reflection + refraction;t 180 195 Velocity contrasts bend paths",
    "c 180 105 85;c 180 105 42;c 180 105 20;p M110 55Q85 105 110 155M250 55Q275 105 250 155;p M130 40L150 70L145 130L130 170;t 180 105 Liquid outer core;t 180 205 S blocked, P strongly refracted",
    "c 180 100 75;l 105 70 255 130;l 105 130 255 70;l 180 25 180 175;l 130 40 230 160;c 195 110 18;t 180 15 Intersecting travel paths;t 180 195 Velocity anomalies require interpretation"
  ]
};
window.LumenSlideArtBatch11Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch11;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch11Render(c,cls,step)||prior(c,cls,step);};})();


/* Meteorology: dedicated slide artwork, batch 12. */
window.LumenSlideArtBatch12={
  "thunderstorms": [
    "p M25 165H335M95 150Q105 90 145 80Q145 30 180 45Q215 30 230 85Q270 90 275 150Z;a 180 165 180 60;t 70 190 Moisture;t 180 195 Lift;t 285 190 Instability",
    "p M75 160Q75 95 120 85Q120 25 180 25Q240 25 240 85Q285 95 285 160Z;a 180 175 180 45;d 145 60 5;d 210 60 5;t 180 200 Rising air builds ice and droplets",
    "p M75 155Q90 45 180 35Q270 45 285 155Z;a 125 175 125 65;a 225 80 225 175;a 225 175 310 175;l 240 110 240 145;l 260 110 260 145;t 180 205 Updraft + rain-cooled downdraft",
    "p M75 145Q90 45 180 35Q270 45 285 145Z;a 170 75 170 170;a 200 75 200 170;a 170 170 55 170;t 180 195 Cold outflow cuts off warm inflow"
  ],
  "depth-meteorology-why-winds-blow": [
    "l 60 45 60 160;l 95 45 95 160;l 130 45 130 160;l 205 45 205 160;l 300 45 300 160;a 60 105 190 105;t 60 30 H;t 300 30 L;t 180 195 Close isobars = strong gradient",
    "a 95 160 95 50;a 95 50 150 50;a 265 160 265 50;a 265 50 210 50;t 95 180 NH: right;t 265 180 SH: left;t 180 205 Deflection perpendicular to motion",
    "l 45 75 325 75;l 45 115 325 115;l 45 155 325 155;a 100 140 250 140;a 100 140 220 95;t 180 60 Lower pressure;t 180 195 Friction lets surface wind cross isobars",
    "r 25 130 155 45;r 180 130 155 45;a 65 115 255 115;a 255 115 255 45;a 255 45 65 45;a 65 45 65 115;t 100 155 Cooler water;t 260 155 Warm land;t 180 200 Daytime sea breeze circulation"
  ],
  "depth-meteorology-how-clouds-form": [
    "c 180 150 20;c 180 65 40;a 180 125 180 95;t 75 150 Higher pressure;t 280 65 Lower pressure;t 180 205 Expansion cools ~9.8°C/km when dry",
    "d 180 95 5;c 180 95 20;c 180 95 38;t 180 40 Water condenses on particle;t 180 160 Saturation at dew point;t 180 195 Tiny droplets scatter light",
    "p M70 90H130M100 60V120M79 69L121 111M79 111L121 69;c 250 90 25;c 235 85 5;c 260 100 5;t 100 150 Ice crystal;t 250 150 Supercooled drops;t 180 195 Deposition and freezing grow ice",
    "b 25 65 145 55 T − Td = 4°C;b 190 65 145 55 125 m/°C;t 180 155 4 × 125 = 500 m;t 180 195 Approximate cloud base"
  ],
  "depth-meteorology-reading-a-weather-map": [
    "c 180 105 25;c 180 105 45;c 180 105 65;c 180 105 85;t 180 109 L;t 180 15 Isobars;t 180 205 Closer lines indicate stronger gradient",
    "l 35 65 325 65;p M80 65L95 85L110 65M155 65L170 85L185 65M230 65L245 85L260 65;l 35 145 325 145;p M80 145Q95 110 110 145M155 145Q170 110 185 145M230 145Q245 110 260 145;t 180 35 Cold-front symbols;t 180 195 Warm-front symbols",
    "c 180 100 15;l 180 85 225 45;l 216 53 238 63;l 207 61 229 71;t 120 75 20°C;t 120 125 15°C;t 260 125 Pressure;t 180 185 Barb points toward wind source",
    "l 180 35 180 175;p M180 65L200 80L180 95M180 120L200 135L180 150;t 90 80 Cooler, drier;t 270 80 Warm, humid;a 100 145 150 115;a 260 145 230 115;t 180 200 Check multiple observations and radar"
  ],
  "depth-meteorology-how-snowflakes-develop": [
    "d 180 105 7;c 160 95 4;c 200 95 4;c 160 120 4;c 200 120 4;a 100 105 170 105;a 260 105 190 105;t 180 50 Vapor deposits on ice;t 180 180 Cold supersaturated air",
    "p M60 90L80 55L120 55L140 90L120 125L80 125Z;p M180 55L210 55L230 90L210 125L180 125L160 90Z;p M270 50V130M235 70L305 110M235 110L305 70;t 100 165 Plate;t 195 165 Column;t 270 165 Dendrite;t 180 205 Hexagonal symmetry",
    "p M75 60V135M40 80L110 115M40 115L110 80M220 55V140M185 80L255 115M185 115L255 80;c 200 75 7;c 240 100 8;c 220 125 7;t 75 165 Crystal;t 220 165 Rimed crystal;t 180 205 Droplets freeze on ice",
    "r 35 35 290 50;f 35 85 290 55;r 35 140 290 35;t 180 60 Cold cloud;t 180 110 Warm layer;t 180 160 Surface;a 80 65 80 165;t 180 205 Full temperature profile determines phase"
  ],
  "depth-meteorology-what-lake-effect-snow-is": [
    "r 25 130 230 45;p M255 130L300 75L335 130H255Z;a 35 85 240 85;a 90 125 90 60;a 150 125 150 60;t 180 35 Cold air crosses warmer water;t 180 195 Heat + moisture drive convection",
    "r 35 95 290 65;a 35 70 325 70;t 180 55 Fetch = over-water distance;t 180 185 Longer fetch often increases uptake",
    "r 25 130 195 45;p M220 130L280 75L335 100V175H220Z;p M150 75Q180 30 215 60Q250 30 280 65Q300 40 325 75Z;a 145 125 210 65;d 270 100 5;d 290 120 5;d 310 110 5;t 180 200 Moist air rises, cools, produces snow",
    "r 35 55 290 110;p M35 85H325M35 125H325;a 45 75 315 75;a 45 135 315 135;t 180 45 Shift in wind direction;t 180 190 Narrow band moves between towns"
  ],
  "plus-meteorology-how-temperature-inversions-form": [
    "l 35 175 325 175;l 35 175 35 35;p M260 175L180 120L240 65L160 35;t 180 195 Temperature →;t 100 30 Altitude;t 265 85 Inversion layer",
    "r 35 145 290 30;a 95 140 95 45;a 180 140 180 45;a 265 140 265 45;t 180 30 Clear night: infrared loss;t 180 125 Cooler air near ground;t 180 200 Ground cools fastest",
    "r 35 100 290 75;r 35 65 290 35;a 100 30 100 65;a 260 30 260 65;t 180 85 Warm stable cap;t 180 145 Cooler air below;t 180 200 Sinking air warms by compression",
    "r 35 45 290 35;r 35 80 290 90;d 75 140 4;d 100 120 4;d 140 150 4;d 175 125 4;d 230 140 4;d 280 115 4;a 180 145 180 80;t 180 65 Inversion cap;t 180 200 Traps fog and pollutants"
  ],
  "plus-meteorology-how-hailstones-grow": [
    "p M50 155Q70 80 130 65Q180 15 230 65Q290 80 310 155Z;a 180 165 180 45;d 140 75 5;d 220 80 5;c 180 95 13;t 180 195 Updraft lifts ice embryo into supercooled drops",
    "c 180 105 55;c 180 105 45;c 180 105 30;c 180 105 18;t 180 30 Layers of accreted ice;t 180 185 Wet vs dry growth changes clarity",
    "p M50 155Q80 45 180 35Q280 45 310 155Z;a 145 155 145 50;d 145 95 12;a 180 95 250 125;t 180 195 Hail may remain aloft without looping",
    "c 180 55 25;a 180 80 180 145;c 180 160 14;t 180 25 Leaves strong updraft;t 180 195 May melt in warm air on descent"
  ],
  "plus-meteorology-why-fog-forms": [
    "l 35 160 325 160;c 65 135 5;c 105 125 5;c 145 145 5;c 185 125 5;c 225 140 5;c 265 120 5;c 305 140 5;a 50 90 300 90;t 180 65 Reduced visibility;t 180 195 Suspended droplets near ground",
    "r 35 145 290 30;a 90 145 90 45;a 180 145 180 45;a 270 145 270 45;c 130 130 5;c 160 125 5;c 210 130 5;t 180 30 Clear night cooling;t 180 195 Near-surface air reaches dew point",
    "r 35 140 290 35;a 35 95 325 95;c 160 120 5;c 200 120 5;c 240 120 5;c 280 120 5;t 180 65 Moist air across colder surface;t 180 195 Advection fog",
    "p M25 170L190 80L335 80V175H25Z;a 80 145 170 95;c 220 65 5;c 250 65 5;c 280 65 5;t 180 35 Upslope cooling;t 180 200 Steam fog instead involves warm water"
  ],
  "plus-meteorology-why-freezing-rain-differs-from-sleet": [
    "p M45 70H105M75 40V100M53 48L97 92M53 92L97 48;t 180 60 Ice crystals in cloud;a 75 105 75 170;t 180 160 Temperature profile below;t 180 195 Determines final phase",
    "r 35 35 290 45;f 35 80 290 95;t 180 60 Cold cloud;t 180 125 Deep warm layer;a 75 45 75 155;c 75 155 7;t 180 195 Snow melts, stays liquid if warm below",
    "r 35 35 290 45;f 35 80 290 45;r 35 125 290 50;t 180 60 Cold;t 180 105 Warm;t 180 150 Deep cold;a 75 45 75 165;d 75 165 7;t 180 195 Drops refreeze before reaching ground",
    "r 35 35 290 45;f 35 80 290 70;r 35 150 290 25;a 75 45 75 165;l 35 175 325 175;t 180 60 Cold cloud;t 180 110 Melt layer;t 180 165 Shallow cold;t 180 200 Supercooled drops freeze on contact"
  ],
  "hurricanes": [
    "r 25 150 310 25;a 95 150 95 55;a 180 150 180 55;a 265 150 265 55;p M50 60Q100 20 150 60Q200 20 250 60Q280 35 310 60;t 180 120 Evaporation + heat transfer;t 180 195 Condensation releases latent heat",
    "c 180 100 18;p M180 35Q300 35 300 100Q300 165 180 165Q60 165 60 100Q60 55 140 55;a 65 140 125 115;a 300 60 235 85;t 180 105 Low;t 180 195 Moist air, rotation, weak shear",
    "c 180 105 18;c 180 105 45;c 180 105 75;a 135 105 135 35;a 225 105 225 35;a 180 45 180 90;t 180 109 Eye;t 180 195 Eyewall rises, eye subsides",
    "r 25 145 150 30;p M175 145L205 120L335 120V175H175Z;a 75 135 220 135;t 100 160 Warm ocean;t 260 145 Land;t 180 195 Land/cool water weakens heat engine"
  ],
  "tornadoes": [
    "a 60 155 160 155;a 60 55 260 55;p M100 115Q180 50 260 115;a 180 140 180 35;t 180 20 Updraft tilts and stretches rotation;t 180 195 Vertical wind shear",
    "p M25 60H335M130 60L155 150H205L230 60;a 55 150 155 150;a 305 150 205 150;t 180 35 Rotating updraft;t 180 195 Near-ground rotation is not guaranteed",
    "p M95 45H265L210 110L185 140L175 180L150 110Z;l 25 180 335 180;p M155 140Q180 110 205 140;t 180 30 Condensation funnel;t 180 205 Tornado requires ground contact",
    "b 25 55 145 55 Doppler radar;b 190 55 145 55 Damage survey;t 97 150 Rotation / debris;t 262 150 EF wind estimate;t 180 195 Different evidence sources"
  ],
  "depth-meteorology-how-weather-forecasts-are-made": [
    "b 25 45 145 45 Observations;b 190 45 145 45 Prior model;a 97 90 180 135;a 262 90 180 135;b 95 135 170 45 Assimilation;t 180 205 Account for uncertainty",
    "r 35 45 290 130;l 35 88 325 88;l 35 131 325 131;l 107 45 107 175;l 180 45 180 175;l 252 45 252 175;a 72 66 140 105;a 215 65 280 150;t 180 200 Grid solves approximate atmospheric equations",
    "r 35 75 290 50;f 35 75 217.5 50;t 143 105 15 rain runs;t 288 105 5 dry;t 180 55 20 equally weighted runs;t 180 190 Raw frequency 75%",
    "l 35 175 325 175;p M35 105L105 100L175 80L245 45L325 30;p M35 105L105 110L175 130L245 155L325 170;t 180 195 Forecast spread grows with lead time"
  ],
  "plus-meteorology-how-cold-fronts-trigger-storms": [
    "p M25 175H335M55 60L180 175;a 35 145 150 145;a 185 155 120 75;t 80 190 Cold wedge;t 260 120 Warm moist air;t 180 205 Lift may reach free convection",
    "b 25 55 145 55 Humid unstable;b 190 55 145 55 Dry stable;t 97 145 Storm possible;t 262 145 Little rain possible;t 180 195 Front alone is insufficient",
    "a 40 145 140 145;a 40 45 280 45;p M120 155Q145 55 220 55Q270 80 260 155Z;a 165 155 165 65;a 240 85 240 155;t 180 200 Shear may separate updraft and rain",
    "b 25 55 145 55 Moist + unstable;b 190 55 145 55 Dry + stable;t 97 145 Strong shear;t 262 145 Weak storm potential;t 180 195 Compare ingredients, not certainty"
  ],
  "plus-meteorology-what-a-jet-stream-is": [
    "a 25 65 335 65;a 25 100 335 100;t 180 40 Upper tropospheric winds;t 180 145 Cold side / warm side;t 180 195 Jet linked to temperature contrast",
    "l 35 175 325 175;a 70 145 130 145;a 70 90 200 90;a 70 35 300 35;t 180 195 Wind changes with height;t 180 15 Strong thermal gradient",
    "p M25 105Q100 20 180 105T335 105;t 95 50 Ridge;t 260 155 Trough;t 180 195 Rossby waves steer storm tracks",
    "a 25 95 120 95;a 120 95 280 95;a 280 95 335 95;a 245 85 310 45;a 245 105 310 145;t 180 65 Jet streak;t 180 195 Divergence can favor ascent"
  ],
  "plus-meteorology-understanding-heat-index": [
    "r 110 110 140 55;c 150 95 6;c 180 95 6;c 210 95 6;a 150 90 150 40;a 210 90 210 40;t 180 30 Evaporation removes heat;t 180 195 Humidity reduces evaporation",
    "b 25 65 145 55 Air temperature;b 190 65 145 55 Relative humidity;a 97 120 180 155;a 262 120 180 155;t 180 185 Apparent temperature in shade",
    "b 25 65 145 55 90°F air;b 190 65 145 55 RH 70%;t 180 155 Standard heat index;t 180 195 ≈106°F",
    "b 25 45 145 50 Direct sun;b 190 45 145 50 Activity;b 25 120 145 50 Clothing;b 190 120 145 50 Physiology;t 180 205 Heat index ≠ core temperature"
  ],
  "depth-meteorology-how-humidity-works": [
    "r 35 75 290 50;f 35 75 145 50;t 107 105 Actual e;t 252 105 Capacity;t 180 55 Saturation vapor pressure eₛ;t 180 190 RH = 100e/eₛ(T)",
    "l 35 175 325 175;p M35 165Q180 145 325 35;l 35 145 325 145;t 180 25 Saturation pressure rises with T;t 180 195 Fixed e: warmer air has lower RH",
    "r 35 60 290 35;f 35 60 145 35;r 35 125 145 35;f 35 125 145 35;t 180 45 eₛ=2.4 kPa, e=1.2;t 200 148 Cool until eₛ=1.2;t 180 195 RH 50% → saturation at dew point",
    "l 35 175 325 175;l 35 175 35 35;p M35 165Q180 145 325 35;l 65 158 295 47;d 180 102.5 5;t 180 35 Nonlinear saturation curve;t 180 195 Mixing can cause condensation"
  ],
  "plus-meteorology-understanding-atmospheric-stability": [
    "c 95 100 35;c 265 100 35;a 95 65 95 25;a 265 135 265 175;t 95 105 Warmer;t 265 105 Colder;t 95 195 Buoyant rises;t 265 195 Returns downward",
    "l 35 175 325 175;l 35 175 35 35;p M280 175L95 35M280 175L130 35M280 175L170 35;t 95 25 Dry;t 130 45 Env.;t 195 35 Moist;t 180 200 Cooling slopes determine stability",
    "l 180 175 180 35;l 35 175 325 175;p M180 175Q100 145 180 115Q300 75 180 35;t 105 145 CIN;t 265 75 CAPE;t 180 195 Integrals of buoyancy (J/kg)",
    "b 25 55 145 55 Dry: −9.8°C;b 190 55 145 55 Moist: −6°C;t 180 145 Environment: −8°C at 1 km;t 97 180 1.8°C colder;t 262 180 2°C warmer"
  ],
  "plus-meteorology-how-radar-estimates-precipitation": [
    "c 45 145 12;p M45 145L300 60M45 145L300 95;a 100 125 245 75;a 245 90 100 135;d 300 78 8;t 180 35 Transmit + receive echo;t 180 195 Range = c × round-trip time / 2",
    "c 100 95 15;c 260 95 30;t 100 135 D;t 260 145 2D;t 180 35 For small spherical drops: Z ∝ D⁶;t 180 195 Double diameter contributes 64×",
    "c 75 100 12;a 90 100 220 100;a 220 115 90 115;p M250 65V135M220 100H280;t 150 55 Doppler velocity;t 265 160 Dual-pol;t 180 195 Phase shift and scattering shape",
    "p M35 175Q180 145 325 70;p M35 175Q180 125 325 45;l 35 175 325 175;d 285 155 6;t 180 35 Beam rises with range;t 180 200 May miss shallow precipitation"
  ],
  "plus-meteorology-how-wind-chill-relates-to-heat-loss": [
    "r 130 75 100 70;a 20 60 120 60;a 20 95 120 95;a 20 130 120 130;a 230 110 325 110;t 180 110 Skin;t 180 175 Wind thins boundary layer;t 180 195 Q=hA(Tskin−Tair)",
    "b 25 65 145 55 Air temperature;b 190 65 145 55 Wind speed;t 180 155 Standard exposed-face index;t 180 195 Equivalent cold exposure",
    "b 25 65 145 55 20°F;b 190 65 145 55 15 mph;t 180 155 US wind-chill formula;t 180 195 ≈6°F",
    "l 35 175 325 175;l 35 175 35 35;l 35 145 325 145;p M35 45Q95 135 325 145;p M35 45Q185 105 325 145;t 180 155 Ambient temperature;t 180 195 Wind speeds approach, not below ambient"
  ]
};
window.LumenSlideArtBatch12Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch12;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch12Render(c,cls,step)||prior(c,cls,step);};})();


/* Oceanography: dedicated slide artwork, batch 13. */
window.LumenSlideArtBatch13={
  "ocean-currents": [
    "p M35 45L95 45L110 95L80 175H35ZM325 45L265 45L250 95L280 175H325Z;a 120 70 240 70;a 240 70 240 145;a 240 145 120 145;a 120 145 120 70;t 180 30 Wind and continents guide currents",
    "r 25 45 310 130;a 75 55 75 150;a 75 150 275 150;a 275 150 275 55;a 275 55 75 55;t 180 80 Surface return;t 180 140 Deep flow;t 180 200 Dense water sinks, mixing returns water",
    "c 180 105 80;l 100 105 260 105;a 150 105 150 45;a 210 45 210 105;t 180 30 Poleward heat transport;t 180 200 Warm poleward / cool equatorward",
    "b 25 65 145 55 0.5 m/s;b 190 65 145 55 86,400 s/day;t 180 160 43,200 m ≈43 km;t 180 195 Constant speed and direction"
  ],
  "ocean-tides": [
    "c 150 105 55;c 295 105 15;a 100 105 90 105;a 200 105 220 105;a 150 55 150 70;a 150 155 150 140;t 150 30 Differential acceleration;t 295 145 Moon;t 180 195 Ocean responds dynamically",
    "l 35 105 325 105;p M35 105Q71.25 20 107.5 105T180 105T252.5 105T325 105;t 35 180 0 h;t 315 180 24 h 50 min;t 180 195 Many coasts: two highs and lows",
    "c 180 105 25;c 65 105 18;c 295 105 12;c 180 45 12;l 65 105 295 105;l 180 45 180 105;t 65 145 Sun;t 295 145 Spring alignment;t 180 25 Neap at quarter;t 180 195 Lunar and solar tidal effects",
    "l 35 175 325 175;p M35 120Q107.5 50 180 120T325 120;p M35 100Q107.5 30 180 100T325 100;t 180 25 Storm surge can raise water;t 180 195 Observed level differs from tide prediction"
  ],
  "depth-oceanography-why-seawater-is-salty": [
    "r 35 75 290 50;f 35 75 10.15 50;t 180 55 1 kg seawater;t 180 155 ~35 g dissolved salts;t 180 195 Mainly chloride and sodium ions",
    "p M25 125L75 45L145 125L200 95L335 145;a 95 90 180 125;a 180 125 285 145;t 75 30 Weathering;t 260 175 Ocean;t 180 205 Rivers carry dissolved ions",
    "r 35 80 290 95;a 100 80 100 35;a 260 80 260 35;d 75 125 5;d 120 140 5;d 220 125 5;d 270 145 5;t 180 30 Water evaporates;t 180 195 Most dissolved salt remains",
    "r 25 80 155 85;r 180 80 155 85;a 75 35 75 80;a 270 80 270 35;t 102 125 Fresh inflow;t 257 125 Evaporation;t 180 195 Dilution vs concentration"
  ],
  "depth-oceanography-how-ocean-depth-changes-light": [
    "r 35 45 290 130;a 95 25 95 120;a 180 25 180 100;a 265 25 265 80;l 35 45 325 45;t 180 195 Absorption and scattering reduce light",
    "r 35 45 290 130;a 100 45 100 80;a 260 45 260 155;t 100 35 Red;t 260 35 Blue;t 180 195 Clear ocean: blue penetrates deeper",
    "r 35 45 290 45;r 35 90 290 85;t 180 67 Euphotic zone;t 180 115 ~1% surface-light boundary;t 180 195 Depth depends on water clarity",
    "r 35 45 290 130;d 75 65 4;d 95 90 4;d 115 115 4;d 135 140 4;a 115 70 115 145;c 265 145 12;t 100 40 Sinking organic matter;t 265 120 Local light;t 180 195 Deep life uses food or chemical energy"
  ],
  "depth-oceanography-understanding-the-continental-shelf": [
    "p M25 45L85 75H210L250 145L335 175;l 25 75 335 75;t 135 105 Shelf;t 255 130 Slope;t 180 205 Shallow submerged continent",
    "p M25 65H150L210 155H335;p M145 65L175 90L190 155;a 170 85 210 150;t 95 50 Shelf;t 175 55 Break;t 280 175 Deep basin;t 180 205 Canyons carry sediment downslope",
    "p M25 40L85 95H220L260 165H335;l 25 60 335 60;l 25 110 335 110;t 265 50 Higher sea level;t 265 102 Lower level;t 180 200 Ice-age shelves could be exposed",
    "r 25 55 310 120;p M25 100H180L250 175H335;a 85 55 85 100;a 145 55 145 100;d 120 85 5;d 160 85 5;t 125 125 Shallow shelf;t 180 195 Light and nutrients support productivity"
  ],
  "depth-oceanography-how-ocean-waves-move-energy": [
    "p M25 115Q65 60 105 115T185 115T265 115T345 115;a 35 40 300 40;a 105 115 105 155;t 180 30 Wind transfers energy;t 180 195 Gravity restores disturbed surface",
    "p M25 65Q65 25 105 65T185 65T265 65T345 65;c 95 95 24;c 180 130 14;c 265 160 7;a 125 35 255 35;t 180 195 Orbital motion decreases with depth",
    "p M25 70Q100 20 175 70T325 70;p M25 145Q50 120 75 145T125 145T175 145T225 145T275 145T325 145;t 180 95 Long period, faster;t 180 185 Short period, slower (deep water)",
    "p M25 170H130L335 100;p M25 75Q75 35 125 75T225 75Q245 25 265 75T305 75;t 180 195 Shoaling: slower, shorter, steeper waves"
  ],
  "depth-oceanography-what-upwelling-brings-to-the-surface": [
    "r 25 55 310 120;p M285 55L335 25V175H285Z;a 260 75 75 75;a 245 155 245 65;t 135 40 Surface offshore transport;t 180 195 Deep water replaces displaced surface water",
    "r 25 45 310 130;d 75 145 5;d 105 145 5;d 135 145 5;a 105 140 105 65;a 225 140 225 65;t 180 35 Nutrients reach light;t 180 195 Remineralization supplies deep nitrate/phosphate",
    "d 70 100 5;d 85 100 5;d 100 100 5;a 110 100 145 100;c 180 100 20;a 200 100 235 100;p M245 100L275 80L305 100L275 120L245 100Z;t 85 150 Plankton;t 180 150 Zooplankton;t 275 150 Fish;t 180 195 Nutrients support productive food webs",
    "r 25 55 310 120;a 180 150 180 55;t 90 95 Cold;t 270 95 Lower O₂ possible;t 180 35 Upwelled water;t 180 195 Winds and climate alter strength"
  ],
  "depth-oceanography-why-coral-reefs-are-vulnerable": [
    "p M65 170V95L40 65M65 120L95 75M180 170V65M180 100L145 75M180 125L215 85M280 170V110L310 75;d 75 105 5;d 175 95 5;d 280 130 5;t 180 35 Symbiotic algae provide energy;t 180 195 CaCO₃ skeleton builds reef",
    "p M95 170V65M95 100L55 65M95 130L135 90M265 170V65M265 100L225 65M265 130L305 90;d 80 95 6;d 105 115 6;a 145 100 215 100;t 95 190 Healthy;t 265 190 Bleached;t 180 30 Prolonged heat disrupts symbiosis",
    "b 25 45 145 50 Acidification;b 190 45 145 50 Sediment;b 25 120 145 50 Disease;b 190 120 145 50 Physical damage;t 180 205 Multiple stressors impair growth",
    "l 35 175 325 175;p M35 55L105 145Q180 70 255 95L300 155;t 100 160 Heat event;t 205 65 Recovery possible;t 180 195 Repeated heat reduces recovery time"
  ],
  "plus-oceanography-how-thermoclines-separate-water-layers": [
    "r 35 45 290 40;r 35 85 290 40;r 35 125 290 50;t 180 67 Warm surface;t 180 107 Rapid temperature change;t 180 150 Cold deep water;t 180 195 Thermocline is a depth interval",
    "r 35 45 290 60;r 35 105 290 70;a 180 85 180 130;t 180 70 Less dense;t 180 150 More dense;t 180 195 Stable density gradient resists mixing",
    "r 25 45 145 40;r 25 85 145 90;r 190 45 145 90;r 190 135 145 40;t 97 67 Summer shallow;t 262 90 Winter deeper;t 180 195 Seasonal mixing depth differs",
    "l 35 45 325 45;l 35 45 35 175;p M285 65L285 85L135 145L135 175;t 285 55 20°C;t 135 155 10°C;t 70 85 50 m;t 70 145 150 m;t 180 205 (10−20)/(150−50) = −0.1°C/m"
  ],
  "plus-oceanography-what-ocean-mixed-layers-are": [
    "r 35 55 290 65;r 35 120 290 55;p M60 85Q95 55 130 85T200 85T270 85;t 180 45 Wind + waves stir water;t 180 105 Nearly uniform layer;t 180 195 Stratified below",
    "r 25 55 145 35;r 25 90 145 85;r 190 55 145 85;r 190 140 145 35;t 97 75 Heated surface;t 262 100 Storm mixing;t 180 195 Cooling and wind can deepen layer",
    "r 25 55 145 45;r 190 55 145 110;a 97 30 97 55;a 262 30 262 55;t 97 80 Shallow;t 262 115 Deep;t 180 195 Same heat spread through more water",
    "l 35 45 325 45;l 35 45 35 175;p M280 45V90L140 160;t 280 35 Surface T;l 255 45 255 175;d 255 102.5 5;t 180 195 Chosen threshold estimates depth"
  ],
  "depth-oceanography-how-ocean-acidification-works": [
    "r 35 105 290 70;a 180 35 180 105;t 180 25 Atmospheric CO₂;t 180 130 Dissolved inorganic carbon;t 180 155 H⁺ tends to increase",
    "b 25 65 145 55 pH 8.2;b 190 65 145 55 pH 8.1;t 180 155 10^0.1 ≈ 1.26;t 180 195 H⁺ activity +26%, still alkaline",
    "b 25 65 145 55 CO₃²⁻ + H⁺;a 170 92 190 92;b 190 65 145 55 HCO₃⁻;t 180 155 Less carbonate available;t 180 195 CaCO₃ saturation may decline",
    "b 25 55 145 55 Species sensitivity;b 190 55 145 55 Water chemistry;t 180 150 Food, temperature and O₂ matter;t 180 195 Lower pH ≠ universal shell dissolution"
  ],
  "depth-oceanography-how-hydrothermal-vents-support-life": [
    "r 25 75 310 100;p M90 75L115 150L180 160L245 75;a 90 35 90 75;a 115 100 115 145;a 245 150 245 35;t 180 150 Hot rock;t 180 195 Seawater heats and reacts in crust",
    "p M130 175L150 75H210L230 175Z;a 180 75 180 30;a 60 60 150 60;a 300 60 210 60;t 180 20 Reduced chemicals;t 80 45 O₂ seawater;t 180 200 Mixing releases chemical energy",
    "b 25 65 95 55 Chemicals;a 120 92 132 92;b 132 65 95 55 Microbes;a 227 92 239 92;b 239 65 95 55 Biomass;t 180 155 Chemosynthesis fixes carbon;t 180 195 Supports vent food webs",
    "p M140 175L160 65H200L220 175Z;c 120 125 8;c 100 145 8;c 240 125 8;c 260 145 8;a 180 65 180 25;t 180 15 Hot fluid;t 180 195 Animals cluster in suitable mixing zones"
  ],
  "plus-oceanography-how-ocean-oxygen-varies-with-depth": [
    "r 35 80 290 95;a 95 35 95 80;a 265 35 265 80;d 150 105 5;d 180 110 5;d 210 105 5;t 95 25 Air–sea exchange;t 265 25 Photosynthesis;t 180 195 Surface oxygen sources",
    "r 35 45 290 130;d 100 60 5;d 100 95 5;d 100 130 5;a 100 65 100 155;c 240 135 20;t 100 185 Sinking carbon;t 240 165 Microbes;t 180 205 Respiration consumes O₂",
    "r 25 45 310 130;a 80 55 80 150;a 80 150 280 150;t 80 35 Cold dense water;t 180 135 Deep ventilation;t 180 195 Age, respiration and mixing matter",
    "l 35 45 325 45;l 35 45 35 175;p M280 45Q100 85 120 110T240 175;t 120 102 O₂ minimum;t 180 195 Consumption exceeds resupply"
  ],
  "plus-oceanography-how-ocean-sediments-accumulate": [
    "p M25 75L80 40L140 90H335;l 25 170 335 170;a 100 90 160 160;d 200 70 5;d 235 85 5;d 270 100 5;a 235 90 235 160;t 75 190 Land grains;t 250 190 Biogenic sediment",
    "r 35 45 290 130;c 85 65 13;c 245 65 5;a 85 80 85 160;a 245 70 245 115;t 85 190 Larger grains;t 245 190 Fine grains;t 180 210 Currents also redistribute sediment",
    "r 35 45 290 45;r 35 90 290 85;c 90 60 10;c 150 70 10;c 240 65 10;a 150 80 150 130;t 180 150 Carbonate may dissolve;t 180 195 Supply and selective preservation",
    "r 75 45 70 120;l 75 105 145 105;t 110 35 Core;t 205 95 20 cm / 2 cm per kyr;t 205 135 = 10 kyr;t 180 195 Ideal steady accumulation"
  ],
  "plus-oceanography-how-sea-ice-affects-ocean-conditions": [
    "r 25 85 310 90;f 25 60 310 25;d 75 115 5;d 105 135 5;d 135 115 5;d 225 130 5;d 275 115 5;t 180 45 Sea ice;t 180 195 Most salt rejected during freezing",
    "f 35 45 290 30;r 35 75 290 100;a 95 75 95 155;a 265 75 265 155;t 180 65 Freezing ice;t 180 135 Denser brine sinks;t 180 195 Melting adds fresher surface water",
    "r 25 125 145 45;f 190 125 145 45;a 95 25 95 120;a 265 25 265 120;a 270 120 330 35;t 97 150 Dark water;t 262 150 Bright ice;t 180 195 Ice reflects more sunlight",
    "f 25 45 310 30;r 25 75 310 100;d 75 85 5;d 105 85 5;d 135 85 5;c 260 120 15;t 180 35 Ice habitat;t 180 195 Light and exchange change seasonally"
  ],
  "plus-oceanography-why-coastal-estuaries-mix-fresh-and-salt-water": [
    "p M25 65L115 100L200 65L335 45M25 145L115 110L200 145L335 175;a 35 105 155 105;a 325 120 190 120;t 70 55 River;t 275 30 Sea;t 180 195 Fresh and salt water meet",
    "r 35 55 290 110;l 35 110 325 110;a 65 80 285 80;a 285 140 65 140;t 180 70 Fresher outflow;t 180 155 Saltier inflow;t 180 195 Turbulence can weaken layers",
    "b 25 65 145 55 10,000,000 m³;b 190 65 145 55 100 m³/s;t 180 155 V/Q = 100,000 s;t 180 195 ≈1.2 days nominal flushing",
    "r 35 75 290 50;f 35 75 145 50;t 107 105 Fresh;t 252 105 Saltier;t 180 155 Salinity and oxygen vary;t 180 195 Excess nutrients can deplete oxygen"
  ],
  "plus-oceanography-why-ocean-gyres-rotate": [
    "a 120 60 260 60;a 190 80 190 160;t 190 45 Wind east;t 260 120 Transport south;t 180 195 Ideal NH Ekman: 90° right of wind",
    "p M25 155Q180 50 335 155;a 35 95 135 95;a 325 95 225 95;t 180 45 Raised sea surface;t 180 195 Convergence produces pressure gradient",
    "r 35 45 290 130;a 55 150 55 55;a 120 65 290 65;a 290 65 290 150;a 290 150 120 150;t 85 35 Narrow strong west flow;t 180 195 Latitude-dependent Coriolis shapes gyre",
    "c 90 100 55;c 270 100 55;a 90 45 130 65;a 270 45 230 65;a 90 155 50 135;a 270 155 310 135;t 90 180 NH clockwise;t 270 180 SH counterclockwise;t 180 205 Typical subtropical gyres"
  ],
  "plus-oceanography-understanding-tsunamis-in-the-ocean": [
    "r 25 60 310 115;p M25 155H140L180 140H335;a 180 140 180 60;p M25 60Q100 35 175 60T325 60;t 180 195 Seafloor displacement creates long wave",
    "b 25 65 145 55 h = 4,000 m;b 190 65 145 55 c = √(gh);t 180 155 ≈198 m/s;t 180 195 ≈713 km/h",
    "p M25 175H100L335 85;p M25 60Q85 35 145 60T265 60Q285 15 305 60;t 180 195 Shallower water slows and shortens waves",
    "r 25 55 310 120;d 95 160 7;d 285 60 7;a 95 160 95 85;t 95 180 Pressure sensor;t 285 45 Tide gauge;t 180 205 Confirm waves and model bathymetry"
  ],
  "plus-oceanography-how-ocean-eddies-transport-water": [
    "c 180 100 65;p M180 50Q230 50 230 100Q230 150 180 150Q130 150 130 100;a 130 100 145 65;d 180 100 8;t 180 25 Rotating water feature;t 180 195 Can trap or exchange water",
    "c 90 105 55;c 270 105 55;a 90 50 130 70;a 270 50 230 70;t 90 110 High;t 270 110 Low;t 90 180 NH clockwise;t 270 180 NH counterclockwise",
    "p M25 135Q95 45 165 135M195 85Q265 175 335 85;l 25 105 165 105;l 195 105 335 105;t 95 45 Dome;t 265 175 Depression;t 180 200 Cyclonic vs anticyclonic displacement",
    "b 25 65 145 55 .05 m/s;b 190 65 145 55 30 days;t 180 155 .05 × 2,592,000 s;t 180 195 ≈130 km"
  ],
  "plus-oceanography-how-ocean-floats-measure-conditions": [
    "r 25 45 310 130;p M55 45V115H180V165L285 45;a 55 50 55 110;a 180 115 180 160;a 200 145 280 55;t 95 105 Drift;t 280 35 Transmit;t 180 195 Typical ~10 days, profiles to 2,000 m",
    "b 25 45 95 45 Conductivity;b 132 45 95 45 Temperature;b 239 45 95 45 Pressure;a 72 90 180 135;a 180 90 180 135;a 286 90 180 135;b 95 135 170 45 Derived profile;t 180 205 Surface satellite transmission",
    "l 35 45 325 45;l 35 45 35 175;p M260 45L235 80L180 115L125 175;p M270 45L245 80L190 115L135 175;t 180 35 Sensor drift shifts profile;t 180 195 Compare references and neighbors",
    "b 25 45 145 45 ρ=1025;b 190 45 145 45 cp=4000;b 25 110 145 45 ΔT=.1°C;b 190 110 145 45 Depth=100 m;t 180 195 ρcpΔTz ≈41 MJ/m²"
  ]
};
window.LumenSlideArtBatch13Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch13;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch13Render(c,cls,step)||prior(c,cls,step);};})();


/* Geography: dedicated slide artwork, batch 14. */
window.LumenSlideArtBatch14={
  "maps": [
    "c 90 100 55;p M35 100H145M90 45Q55 100 90 155M90 45Q125 100 90 155;r 205 55 125 90;l 205 85 330 85;l 205 115 330 115;l 247 55 247 145;l 289 55 289 145;a 145 100 205 100;t 180 195 Curved Earth to flat coordinates",
    "r 35 45 290 130;l 35 60 325 60;l 35 90 325 90;l 35 105 325 105;l 35 120 325 120;l 35 150 325 150;l 107 45 107 175;l 180 45 180 175;l 253 45 253 175;t 180 35 Polar areas stretch;t 180 195 Mercator preserves local angles",
    "r 55 65 70 70;p M210 80L308 80L280 130L182 130Z;t 90 155 Square: area 4,900;t 245 155 Same area: 98 × 50;t 180 195 Equal-area projections may change shape",
    "b 25 55 95 55 Navigation;b 132 55 95 55 Area compare;b 239 55 95 55 Local design;t 180 155 Choose projection for purpose;t 180 195 Centering a region can limit distortion"
  ],
  "depth-geography-latitude-and-longitude": [
    "c 180 105 75;p M105 105H255M120 65Q180 85 240 65M120 145Q180 125 240 145;t 180 30 90°N;t 180 190 90°S;t 280 109 0°;t 180 205 Parallels measure N/S angle",
    "c 180 105 75;p M180 30Q105 105 180 180M180 30Q255 105 180 180M180 30V180;t 180 20 Pole;t 180 195 Meridians converge at poles",
    "c 180 100 75;l 105 100 255 100;p M180 25Q105 100 180 175;d 128 55 6;t 110 40 45°N;t 110 150 90°W;t 180 195 ~111 km per degree latitude",
    "r 25 55 310 100;l 25 85 335 85;l 25 125 335 125;l 90 55 90 155;l 270 55 270 155;t 180 75 At equator: 111 km;t 180 115 At 60°: 55.5 km;t 180 195 111 × cos60° = 55.5 km"
  ],
  "depth-geography-reading-contour-maps": [
    "c 180 105 75;c 180 105 50;c 180 105 25;t 245 115 100 m;t 215 105 120 m;t 180 105 140 m;t 180 195 Contour interval: 20 m",
    "p M35 175L45 45M50 175L60 45M65 175L75 45M80 175L90 45M155 175L165 45M215 175L225 45M275 175L285 45M335 175L345 45;t 65 195 Steep;t 245 195 Gentle;t 180 25 Same interval and map scale",
    "p M25 70L180 35L335 70M25 110L180 75L335 110M25 150L180 115L335 150;a 180 45 180 175;t 180 195 Valley contours point upstream",
    "p M50 175H310L310 75Z;l 50 150 115 150;l 115 125 180 125;l 180 100 245 100;t 180 195 Run 400 m;t 325 125 Rise 80 m;t 180 215 Grade = 80/400 = 20%"
  ],
  "depth-geography-why-time-zones-exist": [
    "c 180 105 65;l 180 40 180 170;l 115 105 245 105;a 180 40 225 55;c 315 105 18;t 180 20 360° / 24 h;t 180 195 Earth rotates ~15° per hour",
    "r 35 45 290 130;l 107 45 107 175;l 180 45 180 175;l 253 45 253 175;p M175 45L195 75L170 110L190 145L180 175;t 180 35 Ideal vs legal zone boundary;t 180 195 Political borders bend time zones",
    "b 25 65 145 55 30° longitude;b 190 65 145 55 15° per hour;t 180 155 30 / 15 ≈ 2 hours;t 180 195 Local solar time, not official clocks",
    "l 180 35 180 175;a 100 85 260 85;a 260 130 100 130;t 90 70 Westward + day;t 265 150 Eastward − day;t 180 205 Date Line conventions, seasonal clock rules vary"
  ],
  "depth-geography-reading-river-basins": [
    "p M35 45L110 35L180 55L250 35L325 45L280 100L180 175L80 100Z;p M80 75L180 145L180 175M280 75L180 145M135 55L135 115M225 55L225 115;d 180 175 5;t 180 195 Common outlet;t 180 25 Divide follows high ground",
    "p M35 45L180 135L180 175M325 45L180 135M90 35L90 78M270 35L270 78;a 180 145 180 175;t 180 195 Tributaries increase upstream contributing area",
    "p M25 70L180 35L335 70M25 110L180 75L335 110M25 150L180 115L335 150;a 180 45 180 175;t 180 195 Contour V points toward upstream, flow down",
    "p M25 35L180 25L335 35L275 125L180 180L85 125Z;p M45 50L180 45L180 125L85 100Z;p M80 65L180 125L180 180M280 65L180 125;t 180 205 Tributary basin nested inside main basin"
  ],
  "depth-geography-how-deserts-form": [
    "r 65 135 90 35;f 205 50 90 120;t 110 125 Rainfall;t 250 40 Water demand;t 180 195 Desert: low precipitation relative to demand",
    "c 180 105 75;p M180 35Q250 55 240 105Q230 140 180 175M180 35Q110 55 120 105Q130 140 180 175;a 245 65 245 115;a 115 65 115 115;t 180 28 Subtropical descent near 30°;t 180 195 Compression warms and dries air",
    "p M25 170L180 45L335 170;a 65 125 155 60;a 205 60 300 145;d 100 95 4;d 120 80 4;d 140 65 4;t 90 185 Wet windward;t 270 185 Dry lee;t 180 205 Rain shadow",
    "r 25 115 130 60;p M155 115H335V175H155Z;a 95 60 180 60;t 90 145 Cold current;t 245 145 Inland;t 180 195 Stable coastal air and inland distance"
  ],
  "plus-geography-how-latitude-affects-daylight": [
    "c 180 105 65;l 155 45 205 165;l 115 105 245 105;a 25 65 115 65;a 25 105 115 105;a 25 145 115 145;t 180 30 Tilt ≈23.4°;t 180 195 Northern hemisphere tilted toward Sun",
    "l 35 175 325 175;p M35 105H325;p M35 140Q107 35 180 140T325 140;t 180 95 Equator ~12 h;t 180 30 High latitude varies strongly;t 180 195 Seasonal daylight",
    "c 180 105 65;l 155 45 205 165;a 25 65 115 65;a 25 105 115 105;a 25 145 115 145;t 270 75 North longer;t 270 150 South shorter;t 180 195 June solstice",
    "c 180 105 65;l 180 40 180 170;a 25 65 115 65;a 25 105 115 105;a 25 145 115 145;t 180 25 Equinox schematic;t 180 195 Nearly equal day and night"
  ],
  "plus-geography-why-rivers-create-deltas": [
    "p M35 80H140L325 45M35 120H140L325 165;a 45 100 130 100;a 140 100 220 100;d 240 85 4;d 260 110 4;d 285 125 4;t 180 195 River spreads, velocity drops, sediment settles",
    "p M170 30V100L75 175M170 100L180 175M170 100L285 175M170 100L125 175M170 100L235 175;l 25 175 335 175;t 180 20 River;t 180 195 Distributaries build delta plain",
    "p M180 35V105L80 165M180 105L280 165;a 45 150 115 150;a 315 150 245 150;t 180 20 River supply;t 180 195 Waves and tides redistribute sediment",
    "p M25 100H140L180 165H335;l 110 65 110 135;a 60 95 95 95;a 260 100 260 65;t 110 50 Dam traps sediment;t 260 85 Relative sea-level rise;t 180 195 Deposition may not keep pace"
  ],
  "plus-geography-how-islands-develop": [
    "p M25 95L110 75L175 135L240 75L335 95L335 175H25Z;l 25 105 335 105;t 70 65 Mainland;t 275 65 Island;t 180 195 Rising sea separates continental land",
    "p M25 175H335M75 175L180 35L285 175;l 25 105 335 105;t 180 25 Volcanic summit;t 180 195 Submarine eruptions build above sea level",
    "c 180 100 75;c 180 100 48;t 180 105 Lagoon;t 180 18 Reef ring;t 180 195 Atoll develops around subsiding foundation",
    "p M35 165L95 45L155 165M205 165L265 105L325 165;l 25 125 335 125;t 95 35 Higher island;t 265 95 Lower island;t 180 195 Erosion, subsidence and sea level reshape land"
  ],
  "plus-geography-how-mountain-passes-shape-movement": [
    "p M25 155L90 40L180 115L270 35L335 155;a 180 165 180 115;t 180 100 Pass;t 180 195 Low crossing between peaks",
    "p M25 175L95 45L140 90L190 70L335 175;p M35 175L75 130L110 130L125 90L150 90L175 80;t 180 30 Travel costs include grade and curvature;t 180 200 Low pass may have difficult access",
    "p M35 35L180 100L325 35M35 165L180 100L325 165;d 180 100 8;t 180 75 Pass;t 180 195 Roads converge at limited crossings",
    "p M35 35L180 100L325 35M35 165L180 100L325 165;p M160 80L200 120M200 80L160 120;t 180 75 Winter closure;t 180 195 Seasonal disruption changes travel cost"
  ],
  "depth-geography-what-shapes-climate-regions": [
    "c 180 105 75;a 25 105 105 105;a 25 65 120 65;a 25 145 120 145;t 180 20 Sun angle varies by latitude;t 180 195 Latitude affects solar input, not climate alone",
    "r 25 70 150 100;p M175 70H335V170H175Z;a 45 100 150 100;a 150 135 45 135;t 100 55 Ocean currents;t 255 120 Land;t 180 195 Oceans moderate coastal temperatures",
    "p M25 175L180 45L335 175;a 65 135 155 60;d 100 95 4;d 120 80 4;t 90 190 Windward;t 275 190 Lee;t 180 205 Elevation and relief alter temperature and rain",
    "l 25 170 165 170;l 195 170 335 170;r 35 85 25 85;r 75 100 25 70;r 115 90 25 80;r 205 45 25 125;r 245 145 25 25;r 285 120 25 50;t 95 190 Wet regime;t 265 190 Seasonal dry;t 180 30 Climate classes use long-term patterns"
  ],
  "depth-geography-how-borders-are-drawn": [
    "r 35 45 290 130;p M160 45Q205 75 160 105T160 175;l 260 45 260 175;t 100 100 Region A;t 210 100 B;t 292 100 C;t 180 195 River boundary vs surveyed line",
    "r 35 45 290 130;l 180 45 180 175;t 180 30 Surveyed boundary;t 180 195 Straight lines may reflect negotiated decisions",
    "l 180 35 180 175;a 65 75 295 75;a 295 130 65 130;t 180 195 Jurisdiction line may allow or restrict crossings",
    "r 35 45 290 130;p M160 45L195 175M195 45L160 175;t 180 30 Different claimed boundaries;t 180 195 Distinguish claims, control, and recognition"
  ],
  "depth-geography-how-scale-changes-maps": [
    "l 65 105 295 105;l 65 95 65 115;l 295 95 295 115;t 180 85 Map: 1 cm;t 180 150 Ground: 50,000 cm = 500 m;t 180 195 Scale 1:50,000",
    "r 25 45 145 130;r 190 45 145 130;p M35 145L90 70L155 100M35 95H150M75 55V165;p M200 145L255 70L320 100;t 97 195 1:10,000;t 262 195 1:1,000,000;t 180 25 Larger scale shows more detail",
    "p M25 55L45 75L65 60L85 100L105 80L125 120L145 95L165 145M195 55L250 90L290 110L335 145;t 95 175 Detailed coast;t 265 175 Generalized;t 180 205 Smaller-scale map simplifies detail",
    "l 45 105 325 105;l 45 95 45 115;l 325 95 325 115;t 180 85 4 cm on map;t 180 150 4 × 25,000 = 100,000 cm;t 180 195 1 km on ground"
  ],
  "plus-geography-understanding-coastal-erosion": [
    "p M25 130H190L220 50H335M25 145H190L210 165H335;p M25 100Q45 75 65 100T105 100T145 100;a 145 100 205 100;t 275 40 Cliff;t 180 195 Wave action and weathering weaken rock",
    "p M35 45H165L200 90L165 135H35;p M320 45Q260 75 225 90Q260 105 320 135;a 280 90 205 90;t 100 30 Resistant headland;t 180 195 Refraction can focus wave energy",
    "a 35 85 145 85;a 215 85 325 85;r 145 65 70 80;t 90 70 Input;t 270 70 Output;t 180 165 Beach sediment budget;t 180 195 Long-term deficit can shrink beach",
    "l 65 55 65 160;l 185 55 185 160;a 65 105 185 105;t 125 90 12 m inland;t 65 40 Survey 1;t 185 40 Survey 2;t 180 195 12 m / 6 years = 2 m/year"
  ],
  "plus-geography-reading-land-use-maps": [
    "r 25 55 145 95;r 190 55 145 95;l 35 75 160 75;l 35 100 160 100;l 200 75 325 75;l 200 100 325 100;t 97 175 Park;t 262 175 Pasture;t 180 195 Similar grass cover, different human uses",
    "r 35 45 290 130;l 35 90 325 90;l 35 135 325 135;l 130 45 130 175;l 230 45 230 175;t 82 70 Forest;t 180 70 Housing;t 277 70 Crops;t 180 115 Mixed-use;t 180 195 Classification depends on source and definitions",
    "r 65 70 80 100;f 215 45 80 125;t 105 60 40 km²;t 255 35 50 km²;t 180 195 +10 km² = 25% increase",
    "r 25 55 145 95;r 190 55 145 95;l 25 100 170 100;l 190 100 335 100;l 95 55 95 150;l 260 55 260 150;d 80 85 5;d 275 125 5;t 97 175 Zoning;t 262 175 Actual use;t 180 195 Ground checks reveal discrepancies"
  ],
  "plus-geography-why-cities-develop-at-river-crossings": [
    "p M150 25Q130 100 150 195M210 25Q230 100 210 195;l 25 105 335 105;r 145 95 70 20;t 180 85 Bridge;t 180 210 Routes converge at crossing",
    "p M150 25Q130 100 150 195M210 25Q230 100 210 195;l 25 105 335 105;r 95 65 35 25;r 230 125 35 25;t 100 55 Market;t 270 160 Warehouse;t 180 205 Transfer between land and river routes",
    "p M25 150H335M120 150L150 80H210L240 150;l 25 115 335 115;t 180 70 Bridge approach;t 180 105 Flood level;t 180 195 Flood risk and bank stability affect suitability",
    "p M150 25Q130 100 150 195M210 25Q230 100 210 195;l 25 75 335 75;l 25 155 335 155;d 125 75 8;d 235 155 8;t 95 55 Old town;t 265 140 New bypass;t 180 210 Network changes can shift growth"
  ],
  "depth-geography-how-geographic-information-systems-work": [
    "r 25 45 145 125;d 55 70 5;p M55 70L120 95L145 145Z;r 190 45 145 125;l 190 85 335 85;l 190 125 335 125;l 238 45 238 170;l 286 45 286 170;f 238 85 48 40;t 97 195 Vector;t 262 195 Raster",
    "r 25 55 145 100;r 190 55 145 100;p M35 140L85 80L155 115M200 140L250 80L320 115;d 85 80 5;d 250 80 5;t 97 175 Layer A;t 262 175 Layer B;t 180 195 Align coordinate reference systems",
    "p M25 155L120 45L210 135L335 55;p M25 175L120 65L210 155L335 75M25 135L120 25L210 115L335 35;d 95 95 5;d 250 65 5;t 180 195 Buffer around line, then spatially join points",
    "p M35 100Q100 45 180 100T325 100;p M35 125Q100 70 180 125T325 125;p M35 75Q100 20 180 75T325 75;d 100 70 5;d 220 100 5;d 285 155 5;t 180 180 500 m river buffer in metric CRS;t 180 205 Count intersecting homes"
  ],
  "plus-geography-understanding-map-overlays": [
    "r 25 45 145 115;r 190 45 145 115;p M35 145L95 55L155 110M200 145L260 55L320 110;t 97 180 Layer 1;t 262 180 Layer 2;t 180 205 Match grid or geometry before overlay",
    "c 135 100 60;c 225 100 60;t 100 100 Low slope;t 260 100 No flood;t 180 100 AND;t 180 195 Intersection meets both constraints",
    "b 25 55 145 55 .6 × .8 = .48;b 190 55 145 55 .4 × .5 = .20;t 180 155 Weighted score = .68;t 180 195 Weights are assumptions",
    "b 25 55 145 55 Weight set A;b 190 55 145 55 Weight set B;t 97 145 Map result A;t 262 145 Map result B;t 180 195 Test alternatives and exclusion constraints"
  ],
  "plus-geography-what-a-choropleth-map-shows": [
    "r 35 55 100 110;f 135 55 75 50;r 135 105 75 60;f 210 55 115 110;t 85 110 Low;t 172 82 High;t 267 110 High;t 180 195 Geographic units shaded by rate",
    "b 25 55 145 55 1,000 / 100,000;b 190 55 145 55 200 / 10,000;t 97 150 1%;t 262 150 2%;t 180 195 More cases can mean lower rate",
    "l 35 75 325 75;l 107 65 107 85;l 180 65 180 85;l 253 65 253 85;l 35 145 325 145;l 85 135 85 155;l 125 135 125 155;l 260 135 260 155;t 180 55 Equal intervals;t 180 125 Quantile boundaries;t 180 195 Same data, different classification",
    "r 25 55 145 100;l 95 55 95 155;r 190 55 145 100;l 190 105 335 105;d 55 80 5;d 135 130 5;d 220 80 5;d 300 130 5;t 180 195 Aggregation changes area averages"
  ],
  "plus-geography-how-geographers-study-accessibility": [
    "p M155 25Q130 100 155 195M205 25Q230 100 205 195;d 100 80 7;d 260 80 7;l 100 80 260 80;p M100 80V155H260V80;t 180 65 Straight distance;t 180 180 Actual road via bridge;t 180 205 Proximity ≠ access",
    "d 55 105 7;d 180 55 7;d 180 155 7;d 305 105 7;l 55 105 180 55;l 180 55 305 105;l 55 105 180 155;l 180 155 305 105;t 115 65 8 min;t 245 65 8 min;t 115 150 5 min;t 245 150 15 min;t 180 195 Shortest time = 16 min",
    "c 180 105 80;c 180 105 50;d 160 85 5;d 205 110 5;d 175 135 5;d 245 85 5;d 115 125 5;t 180 20 30 min range;t 180 195 3 clinics ≤20 min, 5 ≤30 min",
    "l 35 175 325 175;l 35 175 35 35;p M35 45Q120 115 325 160;t 180 35 Opportunity weight;t 180 195 Travel time ↑, e^(−βt) ↓"
  ]
};
window.LumenSlideArtBatch14Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch14;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch14Render(c,cls,step)||prior(c,cls,step);};})();


/* Botany: dedicated slide artwork, batch 15, first five courses. */
window.LumenSlideArtBatch15={
  "pollination": [
    "p M85 150V55M85 75L45 45M85 75L125 45M85 100L45 85M85 100L125 85;p M250 150V55M250 75L210 45M250 75L290 45M250 100L210 85M250 100L290 85;d 125 45 5;d 145 48 4;d 170 50 4;a 145 48 247 54;t 85 175 Anther;t 250 175 Stigma;t 180 200 Pollen transfer precedes fertilization",
    "p M70 150V70M70 80L40 60M70 80L100 60;d 110 65 4;d 130 60 4;d 150 68 4;a 95 45 160 45;c 260 85 15;c 237 85 12;p M260 70L275 50L290 70M260 100L275 120L290 100;t 75 180 Wind;t 260 180 Animal visitor;t 180 200 Flower structure influences transport",
    "p M160 35H200L195 75V150Q180 190 165 150V75Z;d 180 42 6;p M180 48V145L190 155;c 190 155 8;a 210 50 185 70;t 260 50 Stigma;t 265 105 Pollen tube;t 265 155 Ovule;t 180 205 Sperm travel to ovule through tube",
    "p M90 165V75M90 85L55 55M90 85L125 55M270 165V75M270 85L235 55M270 85L305 55;p M55 55Q40 20 90 75;p M125 55Q180 15 270 75;t 90 190 Self;t 270 190 Cross;t 180 210 Pollen may come from same or another plant"
  ],
  "tree-water": [
    "p M150 35V105L75 175M150 105L215 175M150 130L120 175M180 130L250 175;d 65 145 5;d 100 155 5;d 260 150 5;a 65 145 120 145;a 260 150 215 150;t 180 25 Xylem;t 180 195 Water enters roots along water-potential gradient",
    "r 100 35 60 145;r 200 35 60 145;l 100 80 160 80;l 100 125 160 125;l 200 80 260 80;l 200 125 260 125;a 130 165 130 45;a 230 165 230 45;t 180 20 Xylem pathways;t 180 205 Hollow connected conducting cells",
    "p M170 170V55M190 170V55M180 80Q95 20 70 65Q110 115 180 80M180 80Q265 20 290 65Q250 115 180 80;a 180 160 180 50;a 100 65 100 25;a 260 65 260 25;t 180 195 Evaporation pulls cohesive water column upward",
    "r 75 35 70 140;r 215 35 70 140;c 110 105 22;a 250 160 250 50;t 110 195 Gas blockage;t 250 195 Open conduit;t 180 20 Drought tension can interrupt flow"
  ],
  "seed-dispersal": [
    "p M80 155V65M80 80L45 50M80 80L115 50;p M270 155V120M270 125L250 105M270 125L290 105;d 115 65 5;d 150 85 5;d 190 110 5;a 115 65 230 110;t 80 180 Parent;t 270 180 New site;t 180 205 Dispersal reduces local competition",
    "p M65 60L90 110L115 60M90 110V145;a 120 70 170 70;r 200 115 130 40;c 240 105 14;a 255 125 315 125;t 90 175 Wind-carried seed;t 265 175 Floating seed;t 180 200 Transport depends on survival",
    "c 70 95 25;d 70 95 6;p M155 65Q180 95 155 125L195 125Q170 95 195 65Z;p M270 75L255 110L270 145M270 75L285 110L270 145;a 270 110 325 75;t 70 165 Fruit eaten;t 175 165 Hook attaches;t 280 165 Fruit ejects;t 180 205 Different dispersal mechanisms",
    "c 85 95 10;c 260 95 30;a 85 110 140 155;a 260 125 285 155;t 85 55 Small seed;t 260 55 Large reserves;t 180 195 Establishment still requires suitable conditions"
  ],
  "depth-botany-why-leaves-have-pores": [
    "p M85 45Q35 105 85 165Q155 165 155 105Q155 45 85 45Z;p M275 45Q325 105 275 165Q205 165 205 105Q205 45 275 45Z;a 180 25 180 80;a 180 130 180 190;t 180 15 CO₂ in;t 180 205 O₂ and water vapor out",
    "p M65 65Q25 105 65 145Q115 145 115 105Q115 65 65 65ZM145 65Q185 105 145 145Q95 145 95 105Q95 65 145 65Z;p M225 65Q185 105 225 145Q255 145 255 105Q255 65 225 65ZM275 65Q315 105 275 145Q245 145 245 105Q245 65 275 65Z;t 105 175 Turgid / open;t 250 175 Less turgid / closed;t 180 205 Water movement changes guard-cell shape",
    "p M35 95Q180 25 325 95Q180 165 35 95Z;a 90 25 90 75;a 180 115 180 180;a 270 115 270 180;t 90 18 CO₂;t 230 190 Water vapor;t 180 205 Carbon uptake trades off with water loss",
    "c 75 55 22;p M45 115Q75 80 105 115M45 145Q75 180 105 145;c 275 55 22;p M245 115Q275 80 305 115M245 120Q275 155 305 120;t 75 195 Light: often open;t 275 195 Drought: often closed;t 180 210 CAM plants may open mainly at night"
  ],
  "depth-botany-how-roots-explore-soil": [
    "p M135 35H225V115Q225 180 180 180Q135 180 135 115Z;r 145 55 70 45;r 145 100 70 35;a 180 140 180 165;t 180 28 Growing root;t 180 80 Elongation;t 180 123 Division;t 180 200 Root cap protects tip",
    "p M140 35H220V175H140Z;l 140 65 90 50;l 140 85 80 75;l 140 105 85 115;l 140 125 95 145;l 220 65 270 50;l 220 85 280 75;l 220 105 275 115;l 220 125 265 145;d 80 50 5;d 280 145 5;t 180 195 Root hairs increase soil contact area",
    "p M180 25V175M180 65L110 110L75 150M180 95L260 135L305 155M110 110L95 165M260 135L250 175;t 180 20 Parent root;t 180 200 Lateral roots branch in response to local conditions",
    "r 25 45 145 125;r 190 45 145 125;p M100 50V145M100 80L55 120M100 95L145 145M260 50V85M260 75L230 90;l 190 100 335 100;t 97 190 Porous soil;t 262 190 Compacted layer;t 180 210 Low oxygen and dense soil can restrict growth"
  ]
};
window.LumenSlideArtBatch15Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch15;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch15Render(c,cls,step)||prior(c,cls,step);};})();


/* Botany: remaining dedicated slide artwork, batch 16. */
window.LumenSlideArtBatch16={
  "depth-botany-the-two-vascular-transport-systems": [
    "r 80 35 75 140;l 95 35 95 175;l 140 35 140 175;a 117 165 117 45;t 240 65 Leaves;t 240 155 Roots;t 180 200 Lignified xylem conducts water upward",
    "r 85 35 75 140;l 85 75 160 75;l 85 125 160 125;r 165 45 35 55;r 165 115 35 55;a 123 50 123 160;t 265 75 Companion cells;t 265 130 Sieve plates;t 180 200 Living phloem transports sugars",
    "p M180 175V50M180 70Q85 20 60 70Q110 110 180 70M180 105L260 105;c 270 105 20;a 100 75 175 75;a 180 85 180 165;a 185 100 245 100;t 90 35 Source leaf;t 270 145 Fruit sink;t 180 200 Roots and storage can be sinks or sources",
    "r 35 45 85 130;r 240 45 85 130;a 77 165 77 55;a 282 55 282 165;a 120 65 240 65;t 180 35 Sugar loading;t 180 85 Water enters phloem;t 77 195 Xylem tension;t 282 195 Phloem pressure"
  ],
  "depth-botany-how-plants-respond-to-light": [
    "c 60 65 22;a 85 65 165 65;a 85 85 165 85;p M190 170V75Q190 35 245 45Q245 85 190 85;t 180 25 Blue light detected by phototropins;t 180 200 Directional shoot growth",
    "p M220 175Q220 95 150 45M240 175Q240 80 165 30;a 40 65 130 65;l 230 145 230 95;t 90 45 Light;t 285 120 Longer cells;t 180 200 Shaded side elongates more",
    "b 25 60 145 55 Red light;b 190 60 145 55 Far-red light;a 170 78 190 78;a 190 100 170 100;t 180 150 Phytochrome states shift;t 180 195 Germination and shade responses",
    "r 70 145 80 30;r 230 145 80 30;p M110 145Q110 80 65 55M270 145Q270 80 315 55;a 25 65 60 65;a 335 65 320 65;t 110 195 Before rotation;t 270 195 New growth bends after rotation"
  ],
  "depth-botany-how-plants-survive-winter": [
    "l 35 175 325 175;p M35 60Q180 75 325 145;p M35 85Q180 100 325 165;t 100 45 Day length;t 255 125 Temperature;t 180 200 Short days and cooling can cue dormancy",
    "p M180 165V75M180 90L110 45M180 115L250 65;p M180 75Q145 40 180 25Q215 40 180 75Z;p M110 45L100 30L125 35Z;t 250 40 Protected bud;t 180 195 Leaf loss reduces exposed tissue",
    "r 45 45 125 125;c 107 107 35;d 95 100 5;d 120 110 5;p M205 60L230 85L205 110L230 135L205 160;t 107 185 Sugar accumulation;t 270 185 Ice outside cell;t 180 205 Intracellular ice can damage cells",
    "l 35 110 325 110;d 65 110 6;d 180 110 6;d 295 110 6;t 65 85 Chill;t 180 85 Warmth;t 295 85 Budbreak;t 180 170 Early warming may increase frost exposure"
  ],
  "depth-botany-what-fruits-actually-are": [
    "p M90 145V80Q50 35 90 30Q130 35 90 80;c 90 115 22;a 130 105 220 105;c 270 105 45;d 255 100 6;d 285 110 6;t 90 175 Flower ovary;t 270 175 Mature fruit;t 180 205 Ovary develops around seeds",
    "c 180 105 75;c 180 105 58;c 180 105 35;d 180 105 12;a 265 45 237 65;t 290 35 Pericarp;t 180 195 Ovary wall may form multiple layers",
    "c 65 105 35;d 55 95 4;d 75 115 4;p M135 65Q180 30 225 65Q180 135 135 65Z;c 160 68 6;c 180 68 6;c 200 68 6;c 290 105 38;c 290 105 13;t 65 165 Tomato berry;t 180 165 Pea pod;t 290 165 Apple accessory;t 180 195 Botanical fruit categories",
    "c 65 95 32;d 65 95 12;c 180 95 32;d 165 85 5;d 195 85 5;d 180 110 5;c 295 95 32;t 65 145 One seed;t 180 145 Many seeds;t 295 145 Seedless;t 180 195 Fruit identity is based on origin"
  ],
  "plus-botany-why-leaves-change-color-in-autumn": [
    "p M35 105Q100 35 165 105Q100 175 35 105ZM195 105Q260 35 325 105Q260 175 195 105Z;l 35 105 165 105;l 195 105 325 105;d 65 95 5;d 85 110 5;d 105 85 5;d 125 115 5;d 245 100 5;t 100 165 Many chlorophylls;t 260 165 Fewer;t 180 195 Nutrient recovery during senescence",
    "r 35 55 290 35;f 35 90 290 35;f 35 150 290 25;t 180 75 Chlorophyll masks other pigments;t 180 112 Carotenoids present already;t 180 142 Chlorophyll declines;t 180 195 Yellow and orange become visible",
    "b 25 45 145 50 Light;b 190 45 145 50 Sugars;b 25 110 145 50 Temperature;b 190 110 145 50 Genetics;t 180 195 Anthocyanin synthesis can produce red/purple",
    "p M35 125H150L180 95Q245 30 315 95Q245 160 180 95;l 150 110 150 140;a 180 125 180 175;t 100 105 Stem;t 180 200 Abscission layer releases leaf"
  ],
  "depth-botany-how-plants-reproduce-without-seeds": [
    "p M55 150V70M55 85L25 55M55 85L85 55M55 150Q135 100 215 150M215 150V85M215 95L185 65M215 95L245 65;c 285 135 22;d 285 115 5;t 135 170 Runner;t 285 175 Tuber;t 180 200 Vegetative offspring form without fertilization",
    "c 180 55 22;d 180 55 5;a 165 75 95 120;a 195 75 265 120;c 95 140 22;c 265 140 22;d 95 140 5;d 265 140 5;t 180 195 Mitosis copies genome, mutations still possible",
    "b 25 50 95 55 Sporophyte;a 120 77 132 77;b 132 50 95 55 Spores;a 227 77 239 77;b 239 50 95 55 Gametophyte;a 285 105 180 155;a 180 155 72 105;t 180 175 Fertilization returns sporophyte;t 180 200 Meiosis makes spores",
    "c 90 90 30;c 270 90 30;d 80 90 5;d 100 90 5;d 260 80 5;d 280 100 5;t 90 145 Similar clones;t 270 145 Variable offspring;t 180 195 Rapid establishment versus shared vulnerability"
  ],
  "plus-botany-how-plant-stems-support-growth": [
    "p M160 175V70Q180 30 200 70V175;l 160 100 200 100;l 160 140 200 140;a 180 70 180 25;t 250 55 Apical meristem;t 250 120 Internode;t 180 195 Division and elongation lengthen stem",
    "p M50 50Q95 20 140 50V175H50Z;p M220 50Q265 20 310 50V175H220Z;l 70 60 70 170;l 120 60 120 170;l 240 60 240 170;l 290 60 290 170;t 95 195 Flexible tissue;t 265 195 Lignified tissue;t 180 25 Turgor and cell walls support shoots",
    "c 180 100 75;c 180 100 58;c 180 100 48;c 180 100 20;a 180 45 180 70;a 235 100 250 100;t 180 35 Cambium;t 180 100 Xylem inward;t 180 195 Phloem outward during secondary growth",
    "c 90 100 25;c 270 100 50;t 90 145 r;t 270 170 2r;t 180 35 Ideal solid beam;t 180 200 Bending stiffness ∝ r⁴, 16× at 2r"
  ],
  "plus-botany-what-tree-rings-record": [
    "r 35 55 150 110;r 185 55 140 110;c 65 80 18;c 115 80 18;c 65 135 18;c 115 135 18;c 205 75 8;c 230 75 8;c 255 75 8;c 280 75 8;c 205 105 8;c 230 105 8;c 255 105 8;c 280 105 8;t 110 185 Earlywood;t 255 185 Latewood;t 180 205 Large thin walls vs smaller thick walls",
    "c 180 105 75;c 180 105 62;c 180 105 55;c 180 105 30;t 180 20 Annual rings often form;t 180 200 False or missing rings can disrupt counts",
    "r 35 50 40 35;r 75 50 15 35;r 90 50 65 35;r 155 50 25 35;r 180 50 50 35;r 230 50 15 35;r 90 125 65 35;r 155 125 25 35;r 180 125 50 35;r 230 125 15 35;r 245 125 70 35;l 90 85 90 125;l 155 85 155 125;l 180 85 180 125;t 180 195 Match overlapping wide and narrow ring patterns",
    "l 35 175 325 175;p M35 145L85 75L135 120L185 45L235 100L285 65L325 95;t 180 30 Ring width varies;t 180 195 Moisture, temperature, age and competition"
  ],
  "plus-botany-why-roots-associate-with-fungi": [
    "r 140 40 80 135;p M140 65L75 45L35 80M140 95L75 125L35 105M220 70L285 45L325 80M220 115L285 145L325 115;t 180 105 Root;t 180 195 Hyphae extend into surrounding soil",
    "b 25 65 145 55 Fungus;b 190 65 145 55 Plant;a 170 80 190 80;a 190 105 170 105;t 180 55 P / N;t 180 145 Carbon compounds;t 180 195 Exchange varies with partners",
    "l 35 175 325 175;r 65 65 80 110;r 215 100 80 75;t 105 55 Nutrient gain;t 255 90 Carbon cost;t 180 195 Net benefit depends on conditions",
    "b 25 45 145 50 Low P + fungus;b 190 45 145 50 Low P control;b 25 115 145 50 High P + fungus;b 190 115 145 50 High P control;t 180 195 Compare biomass and phosphorus uptake"
  ],
  "plus-botany-how-bulbs-store-energy": [
    "p M180 30Q75 75 85 150Q180 195 275 150Q285 75 180 30Z;p M180 45Q110 90 115 150M180 45Q250 90 245 150M180 45V160;l 115 160 245 160;t 180 20 Shoot bud;t 180 200 Fleshy leaf bases surround short basal stem",
    "p M180 165V40M180 65Q100 15 65 55Q110 100 180 65M180 80Q260 30 295 70Q250 115 180 80;c 180 160 25;a 105 65 165 135;a 255 80 195 135;t 180 205 Leaves export sugars to storage",
    "c 180 145 40;p M180 120V35M180 70L145 45M180 85L220 55;a 180 150 180 85;t 180 20 Emerging shoot;t 180 205 Stored carbon fuels growth before leaves mature",
    "p M90 165V45M90 75L45 35M90 90L135 50M270 165V110;c 90 150 25;c 270 150 25;t 90 190 Leaves retained;t 270 190 Leaves removed;t 180 210 Reserve replenishment depends on photosynthesis"
  ],
  "plus-botany-how-vines-climb": [
    "l 65 35 65 175;p M40 165Q100 145 40 125T40 85T40 45;l 180 35 180 175;p M135 125Q210 125 180 85Q145 65 180 55;l 295 35 295 175;p M245 175V50M245 75L295 75M245 110L295 110;t 65 195 Twining;t 180 195 Tendril;t 275 195 Adhesive roots",
    "l 270 35 270 175;p M90 175Q95 80 160 70Q225 70 220 115Q215 150 170 120;a 220 115 270 115;t 180 30 Growing tip sweeps space;t 180 195 Circumnutation increases contact chance",
    "l 225 35 225 175;p M35 135Q120 135 180 80Q225 40 250 80Q260 115 225 120;t 95 115 Tendril;a 170 40 210 60;t 155 25 Touch;t 180 200 Contact triggers asymmetric growth and coiling",
    "l 255 25 255 175;p M240 175Q280 150 240 125T240 75T240 25;p M65 175V45M65 70L35 55M65 90L95 55;t 65 195 Self-support;t 255 195 External support;t 180 215 Climbing reduces trunk investment but adds dependency"
  ],
  "plus-botany-why-flowers-have-different-shapes": [
    "p M35 55Q90 30 145 55L120 145H60Z;p M195 105Q260 35 325 105Q260 175 195 105Z;d 90 135 6;d 260 105 6;a 90 35 90 125;a 260 35 260 95;t 90 175 Tubular;t 260 175 Open;t 180 205 Geometry positions nectar, anthers and stigma",
    "c 75 95 20;p M95 95L135 125;p M130 135L170 155L210 135;d 145 125 5;a 180 95 260 95;c 280 95 20;t 180 35 Effective pollen transfer;t 180 195 Reproductive success can favor floral variants",
    "p M35 55H115L100 155H50Z;a 75 30 75 145;p M200 140V70M200 85L250 55M200 100L280 85;d 250 55 5;d 280 85 5;a 280 55 325 55;t 75 180 Long visitor reach;t 260 180 Exposed wind pollen",
    "r 45 65 100 90;r 215 110 100 45;t 95 55 Many visits;t 265 100 Few visits;t 95 175 Low pollen delivery;t 265 175 High delivery possible;t 180 205 Measure pollen and seed set, not visits alone"
  ],
  "plus-botany-how-plant-hormones-guide-growth": [
    "b 25 45 95 45 Auxin;b 132 45 95 45 Cytokinin;b 239 45 95 45 Gibberellin;b 65 110 110 45 ABA;b 185 110 110 45 Ethylene;t 180 195 Overlapping receptor and signaling networks",
    "r 115 35 130 45;r 115 85 130 45;r 115 135 130 45;a 180 60 180 105;a 180 110 180 155;d 180 73 5;d 180 123 5;t 65 105 Auxin flow;t 285 105 Polar carriers;t 180 205 Asymmetric transport creates gradients",
    "b 25 60 145 55 Auxin-rich;b 190 60 145 55 Cytokinin-rich;p M95 120V175M95 140L65 170M95 145L125 175M265 175V125M265 140L235 120M265 150L295 120;t 180 205 Relative signals can influence organs in culture",
    "b 25 55 145 55 Solvent control;b 190 55 145 55 Transport inhibited;a 35 140 85 140;a 200 140 250 140;t 180 180 One-sided light in both groups;t 180 205 Compare bending and overall growth"
  ],
  "plus-botany-how-plants-defend-themselves": [
    "p M35 105Q100 35 165 105Q100 175 35 105Z;l 35 105 165 105;p M235 170V45M235 75L280 55L235 90M235 120L195 95L235 135;t 100 175 Waxy cuticle;t 260 185 Spines / bark;t 180 205 Pre-existing physical and chemical barriers",
    "b 25 65 95 55 Damage cue;a 120 92 132 92;b 132 65 95 55 Receptor;a 227 92 239 92;b 239 65 95 55 Defense genes;t 180 155 Wall reinforcement and defense compounds",
    "b 25 65 145 55 Jasmonate;b 190 65 145 55 Salicylic acid;t 97 150 Chewing herbivores;t 262 150 Biotrophic pathogens;t 180 195 Pathways overlap, with exceptions",
    "b 25 45 145 50 Damaged / normal;b 190 45 145 50 Damaged / altered;b 25 115 145 50 Intact / normal;b 190 115 145 50 Intact / altered;t 180 195 Factorial test of jasmonate and damage"
  ],
  "plus-botany-why-stomata-close-during-drought": [
    "p M35 105Q100 45 165 105Q100 165 35 105Z;p M195 105Q260 45 325 105Q260 165 195 105Z;a 100 105 100 35;a 260 105 260 75;t 100 185 Open: higher loss;t 260 185 Closed: less loss;t 180 205 Dry soil raises hydraulic risk",
    "b 25 65 95 55 ABA;a 120 92 132 92;b 132 65 95 55 Receptor;a 227 92 239 92;b 239 65 95 55 Ion channels;t 180 150 Anion loss alters membrane potential;t 180 195 Potassium movement follows",
    "c 90 100 50;c 270 100 35;a 140 100 225 100;a 90 55 90 25;a 270 65 270 35;t 90 160 Turgid;t 270 160 Reduced turgor;t 180 195 Solute loss draws water out, pore narrows",
    "b 25 55 145 55 A=12, gs=.3;b 190 55 145 55 A=9, gs=.1;t 97 145 A/gs=40;t 262 145 A/gs=90;t 180 195 Water-use efficiency rises while carbon gain falls"
  ]
};
window.LumenSlideArtBatch16Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch16;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch16Render(c,cls,step)||prior(c,cls,step);};})();


/* Zoology: dedicated slide artwork, batch 17. */
window.LumenSlideArtBatch17={
  "migration": [
    "c 90 95 45;c 270 95 45;a 135 80 225 80;a 225 110 135 110;t 90 100 Summer;t 270 100 Winter;t 180 180 Repeated directional movement between habitats",
    "p M35 155L95 80L155 155M205 155L265 115L325 155;c 95 45 15;a 145 65 245 65;t 95 175 Summer breeding;t 265 175 Winter food;t 180 205 Seasonal resources differ",
    "d 35 105 7;d 130 105 7;d 230 105 7;d 325 105 7;a 42 105 123 105;a 137 105 223 105;a 237 105 318 105;t 130 85 Refuel;t 230 85 Refuel;t 180 170 Stopovers reduce fuel constraints",
    "c 90 95 45;c 270 95 45;a 90 50 270 50;c 90 95 20;t 90 100 Resident;t 270 100 Migrant;t 180 190 Inherited and learned strategies"
  ],
  "animal-communication": [
    "c 65 100 25;c 295 100 25;p M95 80Q120 100 95 120M115 65Q155 100 115 135M140 50Q195 100 140 150;a 195 100 260 100;t 65 145 Sender;t 295 145 Receiver;t 180 195 Signal changes behavior",
    "p M35 65Q60 40 85 65T135 65;c 180 65 20;d 235 65 5;d 265 65 5;d 295 65 5;t 85 100 Sound;t 180 100 Visual;t 265 100 Chemical;t 180 165 Channels differ in range and persistence",
    "b 25 55 145 55 Alarm call;b 190 55 145 55 Courtship display;a 95 110 95 155;a 265 110 265 155;t 95 180 Hide;t 265 180 Approach;t 180 205 Context shapes response",
    "l 35 175 325 175;p M35 150L300 45;p M35 150L300 110;t 235 35 Honest cost/constraint;t 265 100 Deception possible;t 180 195 Reliability depends on incentives"
  ],
  "camouflage": [
    "r 25 50 145 120;r 190 50 145 120;d 45 75 5;d 75 105 5;d 105 80 5;d 135 145 5;p M55 100Q95 65 135 100Q95 135 55 100Z;p M220 100Q260 65 300 100Q260 135 220 100Z;d 80 95 5;d 110 105 5;t 97 190 Matched pattern;t 262 190 Mismatched",
    "p M35 105Q95 45 155 105Q95 165 35 105Z;p M205 105Q265 45 325 105Q265 165 205 105Z;l 65 75 85 135;l 110 65 135 125;l 230 75 280 145;l 275 65 315 115;t 95 175 Uniform outline;t 265 175 Disruptive markings;t 180 205 Contrast can obscure the boundary",
    "p M35 55H325M35 85H325M35 115H325M35 145H325;p M70 70Q130 55 190 70Q130 85 70 70Z;p M240 55Q255 115 240 175Q225 115 240 55Z;t 180 195 Orienting along background features reduces contrast",
    "r 45 95 100 75;r 215 45 100 125;t 95 85 Mismatched;t 265 35 Matched;t 180 195 Compare detection times, control visual system"
  ],
  "social-insects": [
    "c 180 100 30;c 70 65 20;c 290 65 20;c 70 145 20;c 290 145 20;l 150 90 90 70;l 210 90 270 70;l 150 110 90 140;l 210 110 270 140;t 180 104 Queen;t 70 35 Brood care;t 290 35 Defense;t 70 180 Forage;t 290 180 Tasks vary",
    "d 45 105 10;d 315 105 10;p M55 105Q180 45 305 105;d 90 85 4;d 130 70 4;d 170 65 4;d 210 70 4;d 250 85 4;a 95 85 250 85;t 45 145 Nest;t 315 145 Food;t 180 195 Local pheromone cues guide workers",
    "d 45 105 8;d 315 105 8;p M53 105Q180 5 307 105M53 105Q180 185 307 105;d 95 75 5;d 135 55 5;d 180 55 5;d 225 65 5;d 265 85 5;d 180 145 3;t 180 25 Reinforced route;t 180 190 Unused trail fades",
    "b 25 55 145 55 Specialist workers;b 190 55 145 55 Flexible tasks;t 97 150 Efficient;t 262 150 Adaptable;t 180 195 Allocation shifts as needs change"
  ],
  "depth-zoology-how-animals-regulate-body-temperature": [
    "c 95 95 35;c 265 95 35;a 95 95 95 40;a 265 35 265 60;t 95 150 Metabolic heat;t 265 150 External heat;t 180 195 Dominant heat source differs",
    "c 180 100 45;a 180 55 180 20;a 225 100 310 100;a 135 100 50 100;a 180 145 180 185;t 180 15 Radiation;t 300 85 Convection;t 60 85 Conduction;t 180 205 Evaporation",
    "c 70 50 22;p M35 140H165M195 140H325M195 75H325;p M60 130L105 120L145 130M220 130L265 120L305 130;t 95 175 Bask;t 265 175 Shade;t 180 205 Move between microclimates",
    "l 35 175 325 175;l 35 175 35 35;p M35 45L180 150L325 55;t 180 30 Metabolic cost (schematic);t 180 195 Insulation reduces heat loss"
  ],
  "depth-zoology-how-animals-breathe": [
    "l 180 35 180 175;d 85 70 5;d 110 95 5;d 135 125 5;d 245 95 5;a 115 80 245 80;a 245 135 115 135;t 180 25 Thin moist surface;t 180 65 O₂ →;t 180 155 ← CO₂;t 180 195 Diffusion follows partial pressure gradients",
    "p M180 35V75L120 105L85 145M180 75L240 105L275 145;c 85 145 22;c 275 145 22;p M35 175Q85 185 135 175M225 175Q275 185 325 175;a 85 145 85 175;t 180 25 Airway;t 180 205 Alveoli exchange gases with blood",
    "r 35 65 290 90;a 45 85 315 85;a 315 135 45 135;l 35 110 325 110;a 95 88 95 130;a 180 88 180 130;a 265 88 265 130;t 180 50 Water →;t 180 175 ← Blood;t 180 205 Countercurrent maintains O₂ gradient",
    "p M50 95H165L215 45M165 95L215 95M165 95L215 145;c 240 45 10;c 240 95 10;c 240 145 10;t 50 75 Spiracle;t 180 190 Tracheae deliver air near insect tissues"
  ],
  "depth-zoology-why-animals-have-different-teeth": [
    "p M45 55H105V100L75 145L45 100Z;p M145 55H205L175 155Z;p M245 55Q260 35 275 55Q290 35 305 55V130H245Z;t 75 175 Incisor cuts;t 175 175 Canine grips;t 275 175 Molar grinds",
    "p M35 65H155V125H35Z;p M45 70L65 90L85 70L105 90L125 70L145 90;p M205 65L230 125L255 65L280 125L305 65L325 125;t 95 160 Grinding;t 265 160 Shearing;t 180 195 Diet and ancestry influence tooth shape",
    "p M65 50L90 130L115 50M65 135L90 175L115 135;p M245 170Q210 90 260 45Q295 35 305 65;a 245 165 260 80;t 90 195 Replacement;t 270 195 Continuous growth",
    "p M55 55H135V145H55Z;l 65 70 125 95;l 65 95 125 120;b 190 55 145 45 Microwear;b 190 120 145 45 Isotope ratios;t 180 195 Combine fossil clues to infer diet"
  ],
  "depth-zoology-how-animals-sense-their-surroundings": [
    "p M25 95Q45 60 65 95T105 95;a 105 95 145 95;c 180 95 25;a 205 95 310 95;t 65 145 Stimulus;t 180 145 Receptor;t 275 145 Neural signal;t 180 195 Sensory transduction",
    "l 35 175 325 175;l 35 175 35 35;p M35 140L65 145L95 135L125 145L155 130L185 65L215 140L245 135L275 145L325 140;l 35 100 325 100;t 180 90 Detection threshold;t 180 195 Weak signals can be masked by noise",
    "c 70 100 18;p M40 70Q70 45 100 70M140 70Q180 100 140 130M220 80Q250 50 280 80M220 120Q250 150 280 120;t 70 155 Infrared pit;t 165 155 Electric field;t 270 155 Echo;t 180 195 Specialized receptor systems",
    "r 25 45 145 125;r 190 45 145 125;d 75 95 8;d 240 95 8;c 125 145 12;c 290 145 12;t 97 185 Stimulus;t 262 185 Control;t 180 205 Randomize positions and match other cues"
  ],
  "plus-zoology-why-birds-have-specialized-feathers": [
    "p M180 180V30M180 40L120 75M180 55L105 95M180 70L100 120M180 85L115 145M180 40L230 65M180 55L245 90M180 70L250 115M180 85L235 145;t 180 20 Shaft;t 75 95 Barbs;t 280 115 Vane;t 180 205 Barbules interlock neighboring barbs",
    "p M35 105Q110 25 185 105Q110 140 35 105ZM220 65L320 45L290 165L220 105Z;a 65 45 150 45;a 265 165 265 195;t 110 155 Asymmetric wing;t 270 30 Tail feathers;t 180 210 Wing surface and tail steering",
    "p M95 170V65M95 95L50 55M95 105L140 65M95 125L45 105M95 135L145 115;p M265 170V65Q195 105 265 155Q335 105 265 65Z;t 95 195 Loose down;t 265 195 Contour vane;t 180 215 Down traps insulating air",
    "p M90 170V40M90 60L45 100M90 80L140 125M90 110L55 145;p M270 170V40M270 60L225 85M270 80L225 105M270 100L315 125M270 120L315 145;a 145 100 215 100;t 90 195 Worn;t 270 195 Aligned vane;t 180 215 Preening and molting maintain feathers"
  ],
  "plus-zoology-how-beak-shapes-relate-to-feeding": [
    "p M25 75L145 100L25 125ZM205 55Q325 65 325 125L280 95L205 125Z;t 85 165 Straight probe;t 265 165 Curved grip;t 180 195 Keratin covers jaw structures",
    "p M25 75L100 105L25 135Z;c 110 105 10;p M135 90L225 105L135 120Z;p M245 75Q335 75 320 135L300 105L245 125Z;t 65 175 Seed crack;t 180 175 Probe;t 285 175 Tear;t 180 205 Form changes feeding mechanics",
    "d 90 100 8;l 90 100 290 100;a 135 45 135 95;a 290 100 290 145;t 90 125 Pivot;t 145 35 Muscle;t 285 165 Bite;t 180 200 Jaw leverage and muscle size affect force",
    "l 35 175 325 175;p M35 175Q105 25 175 175;p M135 175Q215 25 295 175;t 105 35 Earlier;t 215 35 Later;t 180 195 Heritable beak distributions can shift across generations"
  ],
  "depth-zoology-how-parental-care-evolves": [
    "c 180 65 24;c 130 140 12;c 180 140 12;c 230 140 12;a 180 89 130 125;a 180 89 180 125;a 180 89 230 125;t 180 35 Parent invests food or protection;t 180 195 Time and energy unavailable elsewhere",
    "r 45 65 120 95;r 195 105 120 55;t 105 55 Offspring benefit;t 255 95 Future cost;t 180 195 Care favored when fitness benefit exceeds cost",
    "c 65 65 20;c 135 65 20;c 225 65 20;c 295 65 20;c 100 145 12;c 260 145 12;a 65 85 100 130;a 135 85 100 130;a 225 85 260 130;t 100 180 Both parents;t 260 180 One caregiver;t 180 205 Helpers may also contribute",
    "c 85 80 8;c 105 80 8;c 125 80 8;c 85 110 8;c 105 110 8;c 125 110 8;c 265 95 18;t 105 145 Many young;t 265 145 Few young;t 180 195 Compare related species, not simple universal rules"
  ],
  "depth-zoology-understanding-animal-social-groups": [
    "c 180 105 20;c 120 75 13;c 240 75 13;c 120 135 13;c 240 135 13;a 120 75 65 45;a 240 75 295 45;a 120 135 65 165;a 240 135 295 165;t 180 195 More observers can detect danger",
    "c 90 85 12;c 115 85 12;c 140 85 12;c 90 115 12;c 115 115 12;c 140 115 12;c 265 100 25;t 115 155 Many competitors;t 265 155 Shared food;t 180 195 Larger groups can increase conflict and disease",
    "c 180 50 18;c 105 110 18;c 255 110 18;c 180 160 18;l 180 68 105 92;l 180 68 255 92;l 105 128 180 142;l 255 128 180 142;l 123 110 237 110;t 180 195 Kinship, rank and changing membership",
    "d 60 75 9;c 110 75 9;c 160 75 9;c 210 75 9;c 260 75 9;c 60 125 9;c 110 125 9;c 160 125 9;c 210 125 9;c 260 125 9;t 180 170 One randomly targeted individual out of ten;t 180 195 Conditional selection chance 1/10"
  ],
  "plus-zoology-how-echolocation-supports-animal-navigation": [
    "c 55 105 18;r 285 65 25 80;a 75 85 280 85;a 280 125 75 125;p M95 65Q115 85 95 105M135 65Q155 85 135 105;t 180 45 Outgoing pulse;t 180 160 Returning echo;t 180 195 Sound travels to target and back",
    "c 55 100 15;r 290 65 20 70;a 75 80 285 80;a 285 120 75 120;t 180 65 .02 s round trip;t 180 155 343 × .02 / 2;t 180 195 Target distance = 3.43 m",
    "c 95 65 15;c 95 145 15;d 280 90 10;l 110 65 280 90;l 110 145 280 90;t 95 35 Ear A;t 95 175 Ear B;t 280 65 Target;t 180 200 Delay and level differences reveal direction",
    "d 35 105 10;d 175 105 7;d 325 105 3;p M55 80Q75 105 55 130M95 70Q130 105 95 140M150 60Q195 105 150 150;t 180 35 Echo weakens with distance;t 180 195 Clutter and reflectivity affect detection"
  ],
  "plus-zoology-how-animal-migration-uses-environmental-cues": [
    "r 35 65 290 35;f 35 65 190 35;r 35 125 290 35;f 35 125 105 35;t 180 55 Long photoperiod;t 180 115 Short photoperiod;t 180 195 Seasonal cue can initiate migration",
    "c 180 105 65;l 180 45 180 165;l 120 105 240 105;a 180 105 215 65;t 180 35 N;t 180 185 Compass gives direction, map gives position",
    "p M35 145Q100 45 180 105T325 55;d 35 145 5;d 180 105 5;d 325 55 5;t 90 35 Inherited bearing;t 255 150 Learned landmarks;t 180 195 Experience can modify routes",
    "c 95 100 45;c 265 100 45;a 95 100 95 55;a 265 100 305 100;t 95 165 Normal field;t 265 165 Rotated field;t 180 195 Compare bearings while controlling other cues"
  ],
  "plus-zoology-how-insect-metamorphosis-changes-body-form": [
    "c 45 95 12;c 135 95 20;c 225 95 28;c 315 95 35;a 57 95 115 95;a 155 95 197 95;a 253 95 280 95;t 45 145 Egg;t 135 145 Nymph;t 225 145 Nymph;t 315 145 Adult;t 180 195 Successive molts retain basic body plan",
    "c 45 95 10;p M95 95Q110 65 125 95T155 95;c 225 95 25;p M290 95Q260 45 300 65L315 95L330 65Q370 45 340 95;t 45 145 Egg;t 125 145 Larva;t 225 145 Pupa;t 315 145 Adult;t 180 195 Complete metamorphosis changes niches",
    "l 35 175 325 175;p M35 155L75 155L90 45L105 155L165 155L180 45L195 155L255 155L270 45L285 155L325 155;p M35 65L165 65L195 140L325 140;t 180 30 Ecdysteroid pulses trigger molts;t 180 195 Juvenile hormone helps determine stage",
    "p M70 45Q110 20 150 45V150Q110 180 70 150Z;c 110 85 18;d 105 130 8;a 150 95 205 95;p M255 95Q210 40 245 55L270 95L295 55Q330 40 285 95L310 145L270 115L230 145Z;t 110 190 Pupal tissues;t 270 190 Adult structures;t 180 210 Some cells survive and remodel"
  ],
  "plus-zoology-why-animals-use-warning-coloration": [
    "c 80 100 35;l 55 80 105 80;l 48 100 112 100;l 55 120 105 120;a 115 100 230 100;c 265 100 30;t 80 155 Warning pattern;t 265 155 Predator learns;t 180 195 Signal advertises a defense",
    "l 35 175 325 175;p M35 60Q100 160 325 165;t 180 35 Attack frequency across encounters;t 180 195 Initial visibility can increase detection",
    "c 65 100 30;c 180 100 30;c 295 100 30;l 45 95 85 95;l 160 95 200 95;l 275 95 315 95;t 65 150 Defended;t 180 150 Undefended mimic;t 295 150 Defended mimic;t 180 195 Batesian vs Müllerian",
    "r 25 50 145 115;r 190 50 145 115;c 95 105 24;c 265 105 24;l 75 105 115 105;l 265 85 265 125;t 97 185 Pattern A;t 262 185 Pattern B;t 180 205 Compare attacks after controlled experience"
  ],
  "plus-zoology-how-fish-regulate-salt-and-water": [
    "p M45 95Q100 40 155 95Q100 150 45 95L25 70V120ZM205 95Q260 40 315 95Q260 150 205 95L185 70V120Z;a 100 25 100 65;a 260 65 260 25;t 100 155 Freshwater: gains water;t 260 155 Marine: loses water;t 180 195 Gradients differ for typical bony fish",
    "p M75 105Q180 25 285 105Q180 185 75 105L35 65V145Z;a 180 25 180 75;a 255 55 230 85;a 180 140 180 190;t 180 20 Water enters;t 270 45 Ion uptake;t 180 205 Dilute urine removes excess water",
    "p M75 105Q180 25 285 105Q180 185 75 105L35 65V145Z;a 335 105 285 105;a 230 85 270 45;a 180 65 180 25;t 310 90 Drink;t 290 35 Salt out;t 180 195 Marine bony fish replace lost water",
    "b 25 55 145 55 Shark: urea retention;b 190 55 145 55 Euryhaline fish;t 97 150 Osmolality near seawater;t 262 150 Remodel ion transport;t 180 195 Different lineages use different mechanisms"
  ],
  "plus-zoology-how-mammals-conserve-water": [
    "c 180 105 35;a 45 65 145 95;a 45 140 145 115;a 215 95 315 65;a 215 115 315 145;t 75 50 Drink / food;t 75 160 Metabolism;t 285 50 Urine / feces;t 285 160 Vapor;t 180 195 Water budget",
    "p M70 35V140Q70 175 110 175Q150 175 150 140V35;l 260 35 260 175;a 260 85 210 85;a 260 135 210 135;t 110 20 Loop of Henle;t 260 195 Collecting duct;t 180 65 Medullary gradient;t 180 210 ADH increases water permeability",
    "r 65 115 90 55;r 205 60 90 110;t 110 105 .25 L;t 250 50 .5 L;t 110 190 1,200 mOsm/L;t 250 190 600 mOsm/L;t 180 210 Same 300 mOsm solute load",
    "c 70 60 25;p M70 60Q90 35 95 65;p M130 85Q180 35 230 85L205 110H155Z;a 175 85 175 45;t 70 120 Nocturnal;t 180 135 Nasal recovery;t 180 195 Dry feces and reduced evaporative losses"
  ],
  "plus-zoology-how-hibernation-changes-energy-use": [
    "l 35 175 325 175;p M35 45L65 150H145L160 45L175 150H250L265 45L280 150H325;t 180 30 Arousal spikes;t 180 195 Prolonged regulated torpor with arousals",
    "r 65 45 90 125;r 205 157.5 90 12.5;t 110 35 100 units/day;t 250 148 10 units/day;t 110 190 Active rest;t 250 190 Torpor;t 180 210 90% daily energy reduction",
    "l 35 175 325 175;p M35 155H125L145 45L165 155H245L265 45L285 155H325;t 145 35 Rewarm;t 265 35 Rewarm;t 180 195 Arousal consumes substantial energy",
    "b 25 55 145 55 Neural regulation;b 190 55 145 55 Hormonal regulation;a 97 110 180 145;a 262 110 180 145;b 105 145 150 40 Torpor state;t 180 205 Active regulation, not uncontrolled cooling"
  ],
  "plus-zoology-why-animal-signals-can-be-costly": [
    "c 75 100 30;a 105 100 235 100;c 265 100 30;t 75 150 Sender;t 265 150 Receiver;t 180 65 Display requires energy or risk;t 180 195 Cost alone does not ensure honesty",
    "l 35 175 325 175;l 35 175 35 35;p M35 165Q180 155 325 95;p M35 165Q180 125 325 35;t 265 95 High condition;t 265 35 Low condition;t 180 195 Cost of equal display may depend on condition",
    "r 35 55 145 40;r 190 55 145 40;t 107 80 Benefit 5;t 262 80 Benefit 5;r 35 115 58 35;r 190 115 145 35;t 107 145 Cost 2;t 262 140 Cost 7;t 97 185 Net +3;t 262 185 Net −2",
    "b 25 55 145 55 Manipulate condition;b 190 55 145 55 Control / match;t 180 150 Measure signal, response and fitness;t 180 195 Distinguish cost from social enforcement"
  ]
};
window.LumenSlideArtBatch17Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch17;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch17Render(c,cls,step)||prior(c,cls,step);};})();


/* Human Biology: dedicated slide artwork, batch 18. */
window.LumenSlideArtBatch18={
  "heart": [
    "b 25 65 125 55 Right heart;b 210 65 125 55 Left heart;b 125 25 110 30 Lungs;b 125 155 110 30 Body;a 90 65 125 40;a 235 40 270 65;a 270 120 235 170;a 125 170 90 120;t 180 205 Pulmonary and systemic circuits",
    "p M80 45V175M150 45V175M80 100L115 125L150 100;a 115 45 115 85;p M210 45V175M280 45V175M210 100L245 75L280 100;a 245 150 245 115;t 115 195 Forward flow;t 245 195 Backflow closes valve;t 180 20 Pressure differences control valve motion",
    "p M60 65Q60 30 115 50Q180 20 245 50Q300 30 300 65V120Q270 170 180 185Q90 170 60 120Z;d 85 60 6;d 180 100 6;a 85 60 180 100;a 180 100 180 160;a 180 160 110 135;a 180 160 250 135;t 100 40 SA node;t 210 90 AV delay;t 180 205 Ventricular activation follows atrial activation",
    "b 25 65 145 55 70 beats/min;b 190 65 145 55 70 mL/beat;t 180 155 70 × 70 = 4,900 mL/min;t 180 195 Cardiac output 4.9 L/min"
  ],
  "kidneys": [
    "c 120 95 48;p M65 70Q120 30 175 70Q65 100 175 125Q120 165 65 125;c 120 95 60;a 130 150 200 150;d 100 70 6;d 140 105 6;t 250 80 Blood cells stay;t 250 110 Water + solutes filter;t 180 195 Glomerulus inside Bowman capsule",
    "p M35 80H130Q160 80 160 110T190 140H325;l 35 45 325 45;a 95 80 95 45;a 160 110 160 45;a 245 140 245 45;t 180 30 Blood;t 180 175 Filtered glucose, ions and water return",
    "p M65 35V135Q65 175 105 175Q145 175 145 135V35;l 270 35 270 175;a 270 85 220 85;a 270 135 220 135;t 105 20 Loop of Henle;t 270 195 Collecting duct;t 210 65 ADH increases;t 210 155 Water uptake",
    "b 25 45 145 50 Fluid volume;b 190 45 145 50 Electrolytes;b 25 115 145 50 Acid-base;b 190 115 145 50 Waste removal;t 180 195 Renin, EPO and vitamin D activation"
  ],
  "hormones": [
    "c 55 80 25;a 80 80 140 80;r 140 60 60 105;d 170 90 5;d 170 120 5;a 200 90 245 90;c 275 90 30;c 275 145 18;t 55 120 Gland;t 170 45 Blood;t 275 40 Receptor;t 180 195 Only responsive cells act on signal",
    "c 95 105 52;c 265 105 52;d 95 55 7;a 95 25 95 48;a 265 25 265 100;d 265 105 7;t 95 175 Surface receptor;t 265 175 Intracellular receptor;t 180 205 Peptide vs steroid pathways",
    "b 25 65 95 50 Hypothalamus;a 120 90 132 90;b 132 65 95 50 Pituitary;a 227 90 239 90;b 239 65 95 50 Thyroid;a 285 115 285 150;a 285 150 75 150;a 75 150 75 115;t 180 140 Negative feedback;t 180 195 Thyroid hormone limits stimulation",
    "l 35 175 325 175;p M35 140Q100 35 160 90T325 145;p M35 160Q100 75 160 110T325 160;t 95 35 Meal raises glucose;t 180 65 Insulin rises;t 180 195 Between meals glucagon supports glucose"
  ],
  "depth-human-biology-how-the-lungs-exchange-gases": [
    "p M35 45Q95 25 155 45V145Q95 175 35 145ZM205 45Q265 25 325 45V145Q265 125 205 145Z;p M35 145Q95 175 155 145M205 145Q265 95 325 145;a 95 95 95 165;a 265 145 265 105;t 95 195 Inhale: diaphragm down;t 265 195 Exhale: recoil",
    "c 180 95 55;p M100 155Q180 185 260 155;l 180 150 180 170;a 160 130 160 165;t 180 40 Alveolus;t 180 195 Thin air-blood barrier enables diffusion",
    "l 180 35 180 175;d 75 65 5;d 105 85 5;d 135 115 5;a 95 80 260 80;a 260 135 95 135;t 100 40 Alveolar air;t 270 40 Blood;t 180 70 O₂;t 180 155 CO₂;t 180 195 Partial pressures drive opposite flows",
    "c 90 95 35;c 270 95 35;a 90 25 90 60;a 270 25 270 60;l 35 150 145 150;l 215 150 325 150;a 35 150 145 150;t 90 175 Ventilation + blood;t 270 175 Air but little blood;t 180 205 Both ventilation and perfusion matter"
  ],
  "depth-human-biology-how-muscles-contract": [
    "l 35 65 35 155;l 325 65 325 155;l 35 85 145 85;l 215 85 325 85;l 35 135 145 135;l 215 135 325 135;r 100 100 160 20;t 180 40 Sarcomere;t 85 75 Actin;t 180 95 Myosin;t 180 195 Overlapping thin and thick filaments",
    "p M25 65H100L120 90L100 115H25Z;d 135 80 4;d 135 95 4;d 135 110 4;l 155 45 155 155;a 145 95 155 95;a 160 95 220 95;c 260 95 35;d 245 85 4;d 275 105 4;t 70 145 Motor neuron;t 180 35 Muscle action potential;t 260 150 Ca²⁺ release",
    "l 35 65 325 65;l 35 155 325 155;r 95 105 170 15;p M125 105L140 70L155 80M185 105L200 70L215 80;a 95 45 140 45;a 265 45 220 45;t 180 25 Actin slides inward;t 180 180 Ca²⁺ exposes sites, ATP cycles myosin",
    "l 35 75 325 75;l 35 145 325 145;d 110 100 5;d 140 110 5;d 170 95 5;r 220 85 75 45;a 170 100 220 100;t 260 110 Ca²⁺ store;t 180 180 Calcium pumped back;t 180 205 Force need not involve shortening"
  ],
  "depth-human-biology-how-the-digestive-system-absorbs-food": [
    "b 25 65 95 55 Food;a 120 92 132 92;b 132 65 95 55 Enzymes;a 227 92 239 92;b 239 65 95 55 Nutrients;t 180 155 Mixing and hydrolysis;t 180 195 Most absorption occurs in small intestine",
    "p M35 175V85Q65 15 95 85V175M95 175V85Q125 15 155 85V175M155 175V85Q185 15 215 85V175M215 175V85Q245 15 275 85V175M275 175V85Q305 15 335 85V175;t 180 25 Villi and microvilli increase area;t 180 205 Epithelial transporters absorb nutrients",
    "p M100 175V60Q180 5 260 60V175;l 150 80 150 175;l 210 80 210 175;a 60 90 150 90;a 300 120 210 120;t 90 65 Sugars / amino acids;t 270 100 Long-chain fat;t 150 195 Capillaries;t 230 195 Lacteal",
    "p M55 65H305V160H55V65M90 95H270V130H90Z;a 110 80 110 35;a 180 80 180 35;a 250 80 250 35;d 120 110 5;d 150 115 5;d 210 110 5;t 180 25 Water and electrolytes;t 180 195 Colonic microbes ferment some leftovers"
  ],
  "depth-human-biology-what-the-liver-does": [
    "p M140 45Q270 15 325 75Q300 150 140 155Z;a 25 85 140 85;a 65 135 140 135;t 80 70 Portal blood;t 70 155 Artery;t 235 95 Liver;t 180 195 Nutrient-rich and oxygenated blood inputs",
    "b 25 65 145 55 Blood glucose;b 190 65 145 55 Liver glycogen;a 170 80 190 80;a 190 105 170 105;t 180 155 Storage and release;t 180 195 Also processes amino acids and lipids",
    "b 25 45 145 50 Bile → intestine;b 190 45 145 50 Bilirubin → bile;b 25 120 145 50 Ammonia → urea;b 190 120 145 50 Urea → kidneys;t 180 195 Digestion and waste processing",
    "b 25 65 95 55 Drug;a 120 92 132 92;b 132 65 95 55 Enzymes;a 227 92 239 92;b 239 65 95 55 Metabolite;t 180 155 Can activate or inactivate;t 180 195 Metabolism does not guarantee harmlessness"
  ],
  "depth-human-biology-how-skin-protects-the-body": [
    "r 35 45 290 35;r 35 80 290 45;r 35 125 290 50;l 35 62 325 62;l 85 45 85 62;l 145 45 145 62;l 205 45 205 62;l 265 45 265 62;t 180 35 Flattened cells + lipids;t 180 105 Epidermis;t 180 155 Dermis;t 180 195 Outer barrier limits water loss",
    "r 35 65 290 110;d 75 50 5;d 105 50 5;d 145 50 5;c 95 115 15;c 245 145 15;a 180 25 180 65;t 180 15 Incoming microbe;t 180 195 Resident microbes and immune cells defend skin",
    "r 35 65 290 110;p M70 155Q100 95 130 155M220 155Q260 115 290 155;p M180 155Q155 145 180 130T180 105V65;a 180 60 180 25;t 180 15 Sweat evaporates;t 95 195 Blood vessel;t 260 195 Sensory ending",
    "r 35 65 290 110;p M130 65L180 125L230 65;d 160 80 5;d 180 95 5;d 200 80 5;a 85 145 160 125;a 275 145 200 125;t 180 40 Clot and inflammation;t 180 195 Cells and matrix restore barrier"
  ],
  "plus-human-biology-how-taste-and-smell-combine": [
    "p M35 100Q180 25 325 100Q180 175 35 100Z;d 100 95 5;d 140 105 5;d 180 95 5;d 220 105 5;d 260 95 5;t 180 40 Taste receptor cells;t 180 195 Sweet, sour, salty, bitter, umami",
    "p M75 150Q120 150 120 95L200 95L200 45H270L250 115L190 115L190 150Z;a 145 135 180 105;a 180 105 215 65;t 180 30 Olfactory receptors;t 180 195 Volatiles reach nose from mouth",
    "b 25 45 145 50 Taste;b 190 45 145 50 Smell;b 25 115 145 50 Texture;b 190 115 145 50 Temperature / heat;t 180 195 Brain integrates flavor cues",
    "p M35 65H150V155H35ZM210 65H325V155H210Z;a 60 135 125 80;p M230 80L300 140M300 80L230 140;t 92 175 Normal airflow;t 267 175 Congestion;t 180 205 Smell reduced while taste can remain"
  ],
  "plus-human-biology-why-muscles-need-tendons": [
    "p M25 65Q100 35 175 65V115Q100 145 25 115Z;r 175 80 70 20;r 245 65 90 50;a 65 45 145 45;t 100 155 Muscle;t 210 140 Tendon;t 290 140 Bone;t 180 195 Collagen transfers tensile force",
    "d 85 105 8;l 85 105 305 105;a 130 45 130 100;l 85 125 130 125;t 85 150 Joint;t 135 35 Force;t 107 145 Arm;t 180 195 Torque = force × perpendicular moment arm",
    "p M35 95H85L95 70L105 120L115 70L125 120L135 95H165M195 95H225L235 70L245 120L255 70L265 120L275 95H325;a 35 140 15 140;a 165 140 185 140;t 100 175 Loaded stretch;t 260 175 Recoil;t 180 205 Tendon stores and returns elastic energy",
    "p M35 60H125V90H35ZM35 130H125V160H35Z;r 125 70 50 10;r 125 140 50 10;p M175 75L245 145M175 145L245 75;t 80 40 Muscle–bone;t 255 175 Bone–bone;t 180 205 Tendon vs ligament, both have loading limits"
  ],
  "depth-human-biology-how-bones-remodel": [
    "r 35 95 290 80;c 100 80 22;c 245 80 15;p M80 95L100 125L120 95;t 100 40 Osteoclast;t 245 40 Osteoblast;t 180 195 Resorb old bone, form new matrix",
    "l 35 155 325 155;p M35 75H100L125 130H170L195 75H325;a 75 45 125 45;a 195 45 245 45;t 95 35 Resorption;t 250 35 Formation;t 180 180 Local cycle fills resorption pit",
    "l 35 175 325 175;r 65 65 90 110;r 205 100 90 75;t 110 55 Loaded;t 250 90 Reduced load;t 180 195 Bone loss can follow reduced loading",
    "r 35 55 130 110;r 195 55 130 110;l 55 65 145 155;l 55 155 145 65;l 215 65 305 155;l 215 155 305 65;l 260 65 260 155;t 100 185 Architecture;t 260 185 Mineral density;t 180 205 DXA does not capture every fracture-risk factor"
  ],
  "depth-human-biology-how-blood-carries-oxygen": [
    "c 180 105 65;c 180 105 35;d 145 85 7;d 215 85 7;d 145 125 7;d 215 125 7;t 180 35 Red blood cell;t 180 190 Hemoglobin binds most transported O₂",
    "b 25 65 145 55 Lung: high PO₂;b 190 65 145 55 Tissue: low PO₂;a 170 92 190 92;t 97 150 Hb loads O₂;t 262 150 Hb unloads O₂;t 180 195 Active tissues can favor release",
    "r 35 75 290 50;f 35 75 282 50;t 175 105 Hemoglobin-bound oxygen;t 180 55 O₂ content (mL/dL);t 180 155 1.34 × Hb × saturation;t 180 195 + 0.003 × PaO₂ (dissolved)",
    "r 65 45 90 125;r 205 103.38 90 66.62;t 110 35 19.7 mL/dL;t 250 93 10.5 mL/dL;t 110 190 Hb 15 g/dL;t 250 190 Hb 8 g/dL;t 180 210 Both at 98% saturation"
  ],
  "plus-human-biology-how-the-lymphatic-system-returns-fluid": [
    "r 35 45 290 35;r 35 145 290 30;a 100 80 100 115;a 230 115 230 145;d 130 115 5;d 180 120 5;t 180 35 Blood capillary;t 180 105 Interstitial fluid;t 180 165 Lymph capillary;t 180 195 Excess fluid and protein enter lymph",
    "r 130 35 100 145;p M130 80L180 105L230 80M130 130L180 155L230 130;a 180 165 180 45;t 180 195 Valves and contractions support one-way flow",
    "b 25 55 145 55 Lymph node;b 190 55 145 55 Intestinal lacteal;t 97 150 Immune surveillance;t 262 150 Chylomicron uptake;t 180 195 Lymph connects tissues and circulation",
    "r 35 45 290 30;r 35 150 290 25;a 100 75 100 135;a 260 135 260 150;c 135 120 8;c 165 110 8;c 195 125 8;c 225 115 8;t 180 95 Fluid accumulates;t 180 195 Edema when filtration exceeds drainage"
  ],
  "plus-human-biology-why-the-pancreas-has-two-jobs": [
    "p M35 90Q100 25 175 65T300 95Q250 165 100 145Z;l 75 100 300 100;a 300 100 335 140;t 180 45 Exocrine tissue;t 180 195 Ducts deliver secretions to duodenum",
    "b 25 45 145 45 Amylase;b 190 45 145 45 Lipase;b 25 115 145 45 Protease precursors;b 190 115 145 45 Bicarbonate;t 180 195 Starch, fat, protein and acid neutralization",
    "c 180 100 65;c 150 85 15;c 210 115 15;a 150 70 150 35;a 210 130 210 170;t 150 20 Insulin;t 210 190 Glucagon;t 180 105 Islet;t 180 210 Endocrine cells release hormones into blood",
    "b 25 55 145 55 Exocrine function;b 190 55 145 55 Endocrine function;t 97 145 Digestion;t 262 145 Glucose regulation;t 180 195 Either can be impaired independently"
  ],
  "plus-human-biology-how-balance-works-in-the-inner-ear": [
    "c 155 85 45;c 205 85 45;p M180 40Q100 15 100 100Q100 145 180 130Q260 145 260 100Q260 15 180 40;a 115 80 115 120;t 180 160 Three canal planes;t 180 195 Endolymph motion signals angular acceleration",
    "r 35 70 290 30;d 75 60 6;d 125 60 6;d 175 60 6;d 225 60 6;d 275 60 6;l 75 100 90 145;l 125 100 140 145;l 175 100 190 145;l 225 100 240 145;l 275 100 290 145;a 95 35 265 35;t 180 25 Weighted membrane shifts;t 180 195 Hair-cell deflection signals gravity and acceleration",
    "c 180 105 65;c 155 95 12;c 205 95 12;a 125 40 235 40;a 235 135 125 135;t 180 25 Head turns;t 180 155 Eyes move opposite;t 180 195 Vestibulo-ocular reflex stabilizes gaze",
    "b 25 55 145 55 Visual cue: still;b 190 55 145 55 Vestibular cue: moving;a 97 110 180 150;a 262 110 180 150;t 180 175 Conflicting motion information;t 180 200 Can contribute to motion sickness"
  ],
  "plus-human-biology-how-red-blood-cells-are-replaced": [
    "c 65 95 30;d 65 95 12;a 95 95 145 95;c 180 95 24;c 180 95 7;a 204 95 260 95;c 290 95 25;c 290 95 12;t 65 145 Precursor;t 180 145 Maturing;t 290 145 Mature RBC;t 180 195 Nucleus lost, lifespan ~120 days",
    "b 25 65 95 55 Low O₂;a 120 92 132 92;b 132 65 95 55 Kidney EPO;a 227 92 239 92;b 239 65 95 55 Bone marrow;t 180 155 EPO supports erythroid maturation",
    "c 70 95 25;c 180 95 40;c 180 95 15;a 95 95 140 95;a 220 80 285 45;a 220 110 285 145;t 70 145 Old RBC;t 180 155 Macrophage;t 285 30 Iron reused;t 285 165 Bilirubin;t 180 200 Spleen and liver clear aging cells",
    "b 25 65 145 55 25 trillion RBCs;b 190 65 145 55 120-day lifespan;t 180 155 ≈208 billion/day;t 180 195 ≈2.4 million/second replaced"
  ],
  "plus-human-biology-how-the-autonomic-nervous-system-regulates-organs": [
    "b 25 65 95 55 CNS;a 120 92 132 92;c 180 92 35;a 215 92 250 92;b 250 65 85 55 Organ;t 180 95 Ganglion;t 180 155 Preganglionic → postganglionic;t 180 195 Autonomic pathways regulate visceral organs",
    "b 25 45 95 45 CNS;b 132 45 95 45 Ganglion;b 239 45 95 45 Organ;a 120 67 132 67;a 227 67 239 67;t 126 35 ACh;t 233 35 NE often;b 25 115 95 45 CNS;b 132 115 95 45 Ganglion;b 239 115 95 45 Organ;a 120 137 132 137;a 227 137 239 137;t 126 105 ACh;t 233 105 ACh;t 180 195 Sympathetic vs parasympathetic transmitters",
    "b 25 55 145 55 Adrenergic receptor;b 190 55 145 55 Muscarinic receptor;t 97 150 Variable effects;t 262 150 Heart rate slows;t 180 195 Receptor and organ determine response",
    "b 25 45 145 50 Pressure falls;b 190 45 145 50 Baroreceptor firing falls;a 170 70 190 70;a 262 95 262 130;b 190 130 145 45 Brainstem response;a 190 152 170 152;b 25 130 145 45 HR / resistance rise;t 180 205 Negative feedback supports arterial pressure"
  ],
  "plus-human-biology-how-the-eye-focuses-light": [
    "p M90 45Q20 105 90 165Q250 190 325 105Q250 20 90 45Z;p M150 60Q115 105 150 150Q185 105 150 60Z;p M25 65L90 80L150 90L325 105M25 145L90 130L150 120L325 105;t 90 35 Cornea;t 150 175 Lens;t 300 195 Retina",
    "p M90 45Q50 105 90 165Q130 105 90 45ZM270 45Q250 105 270 165Q290 105 270 45Z;l 35 45 65 70;l 145 45 115 70;l 210 45 255 75;l 330 45 285 75;t 90 190 Near: rounder;t 270 190 Far: flatter;t 180 210 Ciliary muscle changes zonular tension",
    "p M25 65L125 105L165 145M25 145L125 105L165 65M195 65L335 105M195 145L335 105;l 165 45 165 165;l 305 45 305 165;t 95 185 Myopia: focus before retina;t 265 185 Hyperopia: behind retina;t 180 205 Diverging vs converging correction",
    "p M180 45Q145 105 180 165Q215 105 180 45Z;p M35 65H165L300 105M35 145H165L300 105;d 300 105 5;l 180 185 300 185;t 240 175 f=.5 m;t 180 25 +2 diopters;t 180 205 Optical power = 1/f (meters)"
  ],
  "plus-human-biology-how-the-body-regulates-temperature": [
    "c 180 100 45;a 180 20 180 55;a 225 100 325 100;a 135 100 35 100;a 180 145 180 185;t 180 15 Metabolic heat;t 270 85 Radiation;t 85 85 Convection;t 180 205 Evaporation / conduction affect heat storage",
    "b 105 30 150 45 Hypothalamus;a 180 75 95 125;a 180 75 265 125;b 25 125 140 45 Heat response;b 195 125 140 45 Cold response;t 95 195 Sweat / dilate;t 265 195 Shiver / constrict",
    "b 25 65 145 55 2.4 kJ per g;b 190 65 145 55 100 g evaporated;t 180 155 240 kJ heat removed;t 180 195 Dripping sweat provides less cooling",
    "l 35 175 325 175;l 35 105 325 105;p M35 105L125 65H325;p M35 105Q180 95 325 40;t 145 55 Fever: defended level rises;t 260 30 Heat overload;t 180 195 Hyperthermia lacks same regulated set-point shift"
  ],
  "plus-human-biology-how-the-small-intestine-moves-food": [
    "r 35 55 290 110;r 45 75 270 70;l 75 55 75 165;l 125 55 125 165;l 175 55 175 165;l 225 55 225 165;l 275 55 275 165;t 180 35 Circular muscle bands;t 180 195 Longitudinal fibers run along gut",
    "p M25 55H335M25 145H335M65 55Q80 105 95 55M65 145Q80 95 95 145M205 55Q220 105 235 55M205 145Q220 95 235 145;a 120 100 165 100;a 165 120 120 120;t 180 195 Alternating segmentation mixes chyme",
    "p M25 55H120Q150 95 180 55H335M25 145H120Q150 105 180 145H335;c 235 100 23;a 258 100 315 100;t 145 35 Contract behind;t 265 35 Relax ahead;t 180 195 Peristaltic reflex propels contents",
    "l 35 175 325 175;p M35 160H60L75 60L90 160H160L175 60L190 160H260L275 60L290 160H325;t 180 35 Periodic fasting motor activity;t 180 195 Feeding changes the motility pattern"
  ]
};
window.LumenSlideArtBatch18Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch18;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch18Render(c,cls,step)||prior(c,cls,step);};})();


/* Neuroscience: dedicated slide artwork, batch 19. */
window.LumenSlideArtBatch19={
  "neural-signals": [
    "r 35 75 290 50;d 65 55 5;d 95 55 5;d 125 55 5;d 250 150 5;d 280 150 5;t 180 45 Na⁺ high outside;t 180 165 K⁺ high inside;t 180 195 Selective permeability gives negative resting voltage",
    "l 35 175 325 175;p M35 145H105L130 120L150 35L175 145L200 165L235 145H325;l 35 120 325 120;t 75 110 Threshold;t 150 25 Na⁺ entry;t 225 180 K⁺ exit;t 180 205 Depolarization and repolarization",
    "r 25 85 310 40;d 70 105 7;d 145 105 7;d 220 105 7;a 75 65 140 65;a 150 65 215 65;a 225 65 290 65;t 180 45 Local current regenerates spike;t 180 195 Refractory region behind wave",
    "l 35 75 325 75;l 35 155 325 155;p M65 75V35V75M165 75V35V75M265 75V35V75M55 155V115V155M105 155V115V155M155 155V115V155M205 155V115V155M255 155V115V155M305 155V115V155;t 180 195 Stronger stimulus may raise rate, not spike height"
  ],
  "plasticity": [
    "c 65 95 25;c 295 95 25;l 90 95 270 95;l 90 100 270 100;t 180 75 Synaptic strength changes;t 180 170 Connections may remodel",
    "l 35 175 325 175;p M35 135H120V65H325;p M35 135H120V160H325;t 240 55 Potentiation;t 240 150 Depression;t 180 195 Activity-dependent changes in efficacy",
    "c 75 65 14;c 75 145 14;c 180 105 18;c 285 65 14;c 285 145 14;l 89 65 162 105;l 89 145 162 105;l 198 105 271 65;l 198 105 271 145;t 180 35 Practice refines timing and selection;t 180 195 Existing networks can coordinate better",
    "p M35 65H145M35 145H145M205 65H325M205 145H325M145 65L205 145M145 145L205 65;p M165 45L195 85M195 45L165 85;t 180 195 Alternative pathways may compensate, not guarantee recovery"
  ],
  "depth-neuroscience-how-brain-regions-cooperate": [
    "c 180 105 65;c 130 75 17;c 230 75 17;c 130 135 17;c 230 135 17;l 147 75 213 75;l 130 92 130 118;l 230 92 230 118;l 147 135 213 135;t 180 25 Reading recruits distributed networks;t 130 78 V;t 230 78 L;t 130 138 A;t 230 138 M;t 180 195 Vision, language, attention and memory",
    "c 65 95 30;c 295 95 30;c 180 150 20;a 95 80 265 80;a 265 105 95 105;a 85 120 160 150;a 200 150 275 120;t 180 45 White-matter axons;t 180 195 Relays and feedback connect regions",
    "l 35 75 325 75;l 35 145 325 145;p M55 75V45V75M135 75V45V75M215 75V45V75M65 145V115V145M145 145V115V145M225 145V115V145;t 180 195 Relative timing can coordinate neural populations",
    "b 25 45 145 45 Activity imaging;b 190 45 145 45 Lesion evidence;b 25 115 145 45 Stimulation;b 190 115 145 45 Recordings;t 180 195 Activity alone does not establish causal necessity"
  ],
  "depth-neuroscience-how-synapses-communicate": [
    "p M35 35H145V95Q180 125 215 95V35H325;l 35 165 325 165;c 165 80 12;c 195 80 12;d 165 130 4;d 195 140 4;a 105 45 145 85;t 180 20 Spike opens Ca²⁺ channels;t 180 195 Vesicle fusion releases transmitter",
    "l 35 65 325 65;l 35 145 325 145;d 95 95 5;d 265 95 5;r 80 130 30 30;r 250 130 30 30;a 95 100 95 135;a 265 100 265 135;t 95 185 Ion channel;t 265 185 Signaling receptor;t 180 205 Receptor types have different effects",
    "c 180 105 35;a 50 55 150 90;a 50 155 150 120;a 210 105 315 105;t 50 40 Excite;t 50 175 Inhibit;t 280 85 Spike?;t 180 200 Timing and location affect threshold",
    "l 35 65 325 65;l 35 145 325 145;d 95 95 5;d 150 105 5;d 230 105 5;a 95 95 95 65;a 230 105 300 105;t 95 45 Reuptake;t 270 90 Diffusion;t 180 195 Transporters and enzymes end signal"
  ],
  "depth-neuroscience-what-myelin-does": [
    "r 35 95 290 20;r 55 70 75 70;r 145 70 75 70;r 235 70 75 70;t 180 45 Insulating multilayer sheath;t 180 195 CNS oligodendrocytes / PNS Schwann cells",
    "r 35 95 290 20;r 55 75 75 60;r 155 75 75 60;r 255 75 55 60;d 142 105 5;d 242 105 5;a 142 45 142 95;t 142 35 Node of Ranvier;t 180 195 Channels cluster at exposed gaps",
    "r 35 95 290 20;r 55 75 75 60;r 155 75 75 60;r 255 75 55 60;a 42 60 142 60;a 142 60 242 60;t 180 35 Saltatory conduction;t 180 195 Spikes regenerate at nodes",
    "r 35 95 290 20;r 55 75 75 60;r 255 75 55 60;a 130 105 210 105;a 175 105 175 45;t 180 35 Current leaks at damaged region;t 180 195 Conduction may slow or block"
  ],
  "depth-neuroscience-how-sensory-adaptation-works": [
    "l 35 175 325 175;p M35 155H75V65H325;p M35 155H75V35Q120 100 325 145;t 220 55 Constant stimulus;t 220 130 Response falls;t 180 195 Strong initial response adapts",
    "l 35 75 325 75;l 35 155 325 155;p M65 75V35V75M285 75V35V75M65 155V115V155M105 155V125V155M145 155V125V155M185 155V125V155M225 155V125V155M265 155V125V155;t 180 95 Rapid vs sustained receptor firing;t 180 195 Same maintained pressure",
    "b 25 65 95 55 Receptor;a 120 92 132 92;b 132 65 95 55 Synapse;a 227 92 239 92;b 239 65 95 55 Cortex;t 180 155 Adaptation can occur at several levels",
    "r 100 55 160 110;r 145 70 70 75;c 180 107 25;t 180 110 Watch;t 180 195 Pressure persists as salience fades;a 260 80 300 80;t 285 65 Shift restores salience"
  ],
  "plus-neuroscience-how-reflex-pathways-respond-quickly": [
    "b 25 65 95 55 Spindle;a 120 92 132 92;b 132 65 95 55 Spinal cord;a 227 92 239 92;b 239 65 95 55 Motor neuron;t 180 155 Stretch evokes contraction of same muscle",
    "c 180 45 18;a 180 63 95 110;a 180 63 265 110;b 25 110 140 45 Agonist;b 195 110 140 45 Antagonist;t 95 175 Excite;t 265 175 Inhibit;t 180 200 Reciprocal inhibition coordinates response",
    "b 25 65 110 55 Sensory input;a 135 92 165 92;b 165 65 170 55 Spinal response;a 205 65 205 30;t 270 30 Cortex;t 180 165 Higher centers receive and modulate signal",
    "p M75 45L135 105L235 105L285 155;l 135 105 135 165;a 180 35 180 90;t 180 25 Tendon tap;t 180 195 Brief stretch activates spindle and contraction"
  ],
  "plus-neuroscience-what-the-blood-brain-barrier-does": [
    "r 35 65 290 45;l 95 65 95 110;l 155 65 155 110;l 215 65 215 110;l 275 65 275 110;d 155 88 5;d 215 88 5;c 180 150 18;t 180 45 Endothelial tight junctions;t 180 195 Pericytes and astrocyte-associated structures",
    "r 35 80 290 35;r 160 70 40 55;a 80 45 80 150;a 180 45 180 150;a 280 150 280 45;t 80 170 Lipid soluble;t 180 170 Glucose carrier;t 280 170 Efflux;t 180 205 Selective entry and removal",
    "r 35 75 290 35;d 65 45 5;d 95 45 5;d 125 45 5;d 255 45 5;d 285 45 5;c 180 150 25;t 180 45 Circulating substances;t 180 195 Barrier stabilizes neuronal environment",
    "r 35 65 130 45;r 195 65 130 45;p M250 65V110M265 65V110;a 257 45 257 145;t 100 155 Intact;t 260 155 Altered;t 180 195 Regional variation and injury affect permeability"
  ],
  "plus-neuroscience-how-sensory-maps-represent-the-body": [
    "p M65 50V155M65 80L35 110M65 80L95 110M65 155L35 185M65 155L95 185;r 200 45 110 135;l 200 80 310 80;l 200 120 310 120;a 95 110 200 100;t 255 25 Cortex;t 180 205 Nearby skin areas often map nearby",
    "r 35 75 290 50;f 35 75 105 50;f 250 75 75 50;t 87 105 Fingers;t 195 105 Trunk;t 287 105 Lips;t 180 195 Representation size reflects sampling, not body size",
    "r 35 55 130 105;r 195 55 130 105;l 35 90 165 90;l 195 120 325 120;a 165 105 195 105;t 100 180 Map A;t 260 180 Map B;t 180 205 Texture, position and movement integrate",
    "r 35 70 290 35;r 35 130 290 35;l 135 70 135 105;l 195 130 195 165;t 180 55 Before altered input;t 180 120 After practice;t 180 195 Functional map boundaries can shift"
  ],
  "plus-neuroscience-understanding-habituation-and-sensitization": [
    "l 35 175 325 175;r 45 55 35 120;r 105 95 35 80;r 165 125 35 50;r 225 145 35 30;r 285 155 35 20;t 180 30 Repeated harmless stimulus;t 180 195 Behavioral response declines",
    "l 35 175 325 175;r 65 135 85 40;r 215 55 85 120;t 107 125 Before;t 257 45 After strong event;t 180 195 Sensitization increases later response",
    "l 35 175 325 175;p M35 65L95 110L155 145L215 160L275 55;t 275 45 Novel sound;t 180 195 Response returns, distinguishing fatigue",
    "c 75 95 25;c 285 95 25;d 150 95 5;d 180 95 5;d 210 95 5;a 100 95 260 95;t 180 45 Transmitter release can change;t 180 195 Modulatory pathways alter defensive reflexes"
  ],
  "depth-neuroscience-how-motor-control-is-coordinated": [
    "b 25 65 95 55 Goal;a 120 92 132 92;b 132 65 95 55 Cortex;a 227 92 239 92;b 239 65 95 55 Spinal motor;t 180 155 Muscle activation executes selected movement",
    "b 25 65 145 55 Cortex;b 190 65 145 55 Basal ganglia;a 170 80 190 80;a 190 105 170 105;t 180 155 Via thalamic / brainstem relays;t 180 195 Supports action selection and reinforcement",
    "b 25 55 145 55 Predicted movement;b 190 55 145 55 Sensory outcome;a 97 110 180 150;a 262 110 180 150;t 180 175 Cerebellar error comparison;t 180 200 Updates timing and prediction",
    "p M35 145L125 65L225 95L325 45;p M125 65L225 135L325 45;t 125 55 Plan;t 225 155 Actual heavy object;t 180 195 Feedback error guides next attempt"
  ],
  "depth-neuroscience-how-the-brain-encodes-memory": [
    "b 25 65 95 55 Input;a 120 92 132 92;b 132 65 95 55 Attention;a 227 92 239 92;b 239 65 95 55 Encoding;t 180 155 Meaning and prior knowledge affect representation",
    "c 180 105 35;c 65 55 15;c 295 55 15;c 65 155 15;c 295 155 15;l 80 55 155 90;l 280 55 205 90;l 80 155 155 120;l 280 155 205 120;t 180 105 Hippocampus;t 180 200 Binds elements of episodic experience",
    "l 35 175 325 175;p M35 145Q100 95 180 90T325 65;d 95 105 5;d 180 90 5;d 265 75 5;t 180 35 Consolidation over time;t 180 195 Sleep and retrieval can support stability",
    "c 65 95 22;c 180 95 22;c 295 95 22;a 87 95 158 95;a 202 95 273 95;t 65 140 Cue;t 180 140 Reactivate;t 295 140 Recall;t 180 195 Recognition and recall use different supports"
  ],
  "depth-neuroscience-what-reward-learning-means": [
    "b 25 65 145 55 Expected value;b 190 65 145 55 Received value;t 180 155 Prediction error = received − expected;t 180 195 Updates future expectation",
    "l 35 75 325 75;l 35 155 325 155;p M245 75V35V75M95 155V115V155;t 95 95 Cue;t 245 95 Reward;t 180 195 Learned cue can evoke earlier dopamine response",
    "b 25 65 145 55 V=4, r=8;b 190 65 145 55 α=.25;t 180 155 4 + .25(8−4) = 5;t 180 195 Simplified expectation update",
    "b 25 45 145 45 Timing;b 190 45 145 45 Context;b 25 115 145 45 Motivation;b 190 115 145 45 Competing goals;t 180 195 Reinforcement is not identical to pleasure"
  ],
  "depth-neuroscience-how-neurons-use-energy": [
    "r 35 95 290 25;r 150 75 60 65;a 170 155 170 35;a 190 35 190 155;t 90 55 3 Na⁺ out;t 270 55 2 K⁺ in;t 180 195 ATP maintains ion gradients",
    "r 35 45 290 45;c 180 145 35;a 100 90 155 125;a 260 90 205 125;t 180 70 Blood: O₂ + glucose;t 180 150 Neuron;t 180 195 Astrocytes help provide metabolic support",
    "b 25 55 95 55 Resting pumps;b 132 55 95 55 Spikes;b 239 55 95 55 Synapses;t 180 155 Each requires ATP;t 180 195 Quiet circuits still consume energy",
    "c 80 95 25;r 175 70 150 50;a 105 95 175 95;t 80 145 Neural activity;t 250 95 Blood response;t 180 195 BOLD fMRI indirectly measures oxygenation changes"
  ],
  "plus-neuroscience-how-attention-selects-sensory-information": [
    "c 70 95 20;c 180 95 35;c 290 95 20;d 180 95 10;t 180 40 Selected target;t 180 195 Present stimuli receive unequal processing",
    "b 25 55 145 55 Goal: find target;b 190 55 145 55 Sudden flash;a 97 110 180 145;a 262 110 180 145;t 180 175 Competing priorities;t 180 200 Top-down and bottom-up interact",
    "l 35 175 325 175;p M35 155Q180 35 325 155;p M35 155Q180 95 325 155;t 180 40 Higher response gain;t 180 195 Attention changes population competition",
    "r 25 55 145 95;r 190 55 145 95;a 60 100 130 100;a 225 100 295 100;d 135 100 6;d 225 120 6;t 97 175 Valid cue;t 262 175 Invalid cue;t 180 205 Compare reaction times, control expectation"
  ],
  "plus-neuroscience-how-the-brain-processes-visual-motion": [
    "c 95 105 30;c 265 105 30;a 50 105 140 105;a 310 105 220 105;t 95 160 Preferred motion;t 265 160 Opposite motion;t 180 195 Direction-selective response differs",
    "c 180 100 55;l 140 140 220 60;a 180 100 220 140;a 180 100 240 100;t 180 25 Edge seen through aperture;t 180 195 Only perpendicular motion is unambiguous",
    "a 45 65 120 95;a 45 145 120 115;a 125 95 230 105;a 125 115 230 105;c 265 105 35;t 265 105 MT/V5;t 180 195 Local signals integrate into motion estimate",
    "r 25 55 145 100;r 190 55 145 100;a 45 75 75 75;a 85 100 115 100;a 115 130 145 130;a 210 75 240 75;a 250 100 250 75;a 285 130 265 145;t 97 175 High coherence;t 262 175 Low coherence;t 180 205 Measure direction discrimination"
  ],
  "plus-neuroscience-understanding-inhibitory-neural-signals": [
    "r 35 85 290 35;r 95 75 40 55;r 225 75 40 55;a 115 45 115 155;a 245 155 245 45;t 115 35 Cl⁻ conductance;t 245 35 K⁺ conductance;t 180 195 GABA-A channel vs GABA-B signaling",
    "l 35 105 325 105;d 95 105 6;d 245 105 6;a 100 75 240 75;t 95 130 Vm;t 245 130 Erev;t 180 55 Driving force = Vm − Erev;t 180 195 Conductance × driving force gives current",
    "l 35 175 325 175;p M35 145H100Q150 35 220 145H325;p M35 145H100Q150 105 220 145H325;t 155 45 Excitation alone;t 230 120 With shunt;t 180 195 Higher conductance reduces voltage deflection",
    "c 65 105 22;c 180 105 22;c 295 105 22;l 87 105 158 105;l 202 105 273 105;l 150 95 150 115;l 265 95 265 115;t 65 145 Inhibitor;t 180 145 Inhibitor;t 295 145 Target;t 180 195 Inhibiting an inhibitor can disinhibit target"
  ],
  "plus-neuroscience-why-working-memory-has-limits": [
    "b 25 65 145 55 Current items;b 190 65 145 55 Task operation;a 170 92 190 92;t 180 155 Temporary maintenance and manipulation;t 180 195 Interference limits performance",
    "r 35 60 65 65;r 110 60 65 65;r 185 60 65 65;r 260 60 65 65;d 67 92 8;d 142 92 8;d 217 92 8;d 292 92 8;t 180 160 Few independent objects in some tasks;t 180 195 Capacity and precision models differ",
    "c 80 105 30;c 180 65 30;c 280 105 30;l 110 95 150 75;l 210 75 250 95;l 110 115 250 115;t 80 150 Sensory;t 180 25 Frontal;t 280 150 Parietal;t 180 195 Distributed retention and dynamic activity",
    "l 35 175 325 175;p M35 45L105 65L175 95L245 130L325 155;t 180 30 Recall precision;t 180 195 Increasing set size often lowers accuracy"
  ],
  "plus-neuroscience-how-neural-circuits-regulate-alertness": [
    "c 180 55 25;c 75 145 25;c 180 145 25;c 285 145 25;a 75 120 160 75;a 180 120 180 80;a 285 120 200 75;t 180 25 Cortex;t 75 185 Brainstem;t 180 185 Hypothalamus;t 285 185 Basal forebrain",
    "l 35 175 325 175;p M35 155L225 45L325 155;p M35 100Q105 25 180 100T325 100;t 145 35 Sleep pressure;t 250 125 Circadian signal;t 180 195 Adenosine and SCN participate in distinct processes",
    "b 25 65 145 55 Orexin arousal;b 190 65 145 55 Sleep-promoting;a 170 80 190 80;a 190 105 170 105;t 180 155 Opposing networks stabilize states;t 180 195 Not a single alertness switch",
    "l 35 75 325 75;p M35 75L55 45L75 85L95 65L115 85L135 45L155 75L175 85L195 45L215 75L235 85L255 55L275 75L325 65;l 35 155 325 155;d 85 155 5;d 145 155 5;d 285 155 5;t 180 30 EEG patterns;t 180 195 Reaction time can reveal lapses"
  ],
  "plus-neuroscience-how-the-brain-integrates-multisensory-cues": [
    "c 90 95 30;c 270 95 30;a 120 95 180 145;a 240 95 180 145;t 90 55 Vision;t 270 55 Hearing;t 180 170 Combined estimate;t 180 195 Common-event cues can reduce uncertainty",
    "r 35 75 290 50;f 35 75 232 50;t 151 105 Vision .8;t 296 105 Aud. .2;t 180 55 Variances 1 and 4;t 180 195 Weights proportional to inverse variance",
    "l 35 105 325 105;d 95 105 6;d 145 105 6;d 345 105 6;t 95 85 Visual 10;t 145 140 Fused 11;t 325 85 Audio 15;t 180 195 .8×10 + .2×15 = 11",
    "c 65 95 20;c 295 95 20;t 65 145 Flash;t 295 145 Sound;t 180 65 Large space/time mismatch;t 180 195 Separate causes may be inferred"
  ]
};
window.LumenSlideArtBatch19Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch19;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch19Render(c,cls,step)||prior(c,cls,step);};})();


/* Medicine: dedicated slide artwork, batch 20. */
window.LumenSlideArtBatch20={
  "drug-action": [
    "c 65 95 18;a 85 95 145 95;p M145 60H230V80H200V110H230V135H145Z;t 65 135 Drug;t 190 155 Receptor pocket;t 180 195 Target interaction determines part of response",
    "p M45 65H145V85H115V115H145V145H45Z;p M215 65H315V85H285V115H315V145H215Z;r 115 85 25 30;r 285 85 25 30;a 95 35 125 75;t 95 175 Agonist activates;t 265 175 Antagonist blocks;t 180 205 Different receptor effects",
    "l 35 175 325 175;l 35 175 35 35;p M35 165Q95 80 180 65H325;p M35 170Q200 165 325 50;t 200 55 Desired effect;t 250 125 Adverse effects;t 180 195 Exposure → (schematic)",
    "b 25 45 145 45 Absorption;b 190 45 145 45 Metabolism;b 25 115 145 45 Genetics / age;b 190 115 145 45 Other medicines;t 180 195 Exposure and response vary"
  ],
  "immune-system": [
    "r 35 80 290 70;l 35 80 325 80;p M60 80V55M85 80V55M110 80V55M135 80V55M160 80V55M185 80V55M210 80V55M235 80V55M260 80V55M285 80V55;d 95 40 5;d 180 40 5;d 265 40 5;t 180 120 Epithelial barrier;t 180 195 Skin, mucus, cilia limit entry",
    "c 180 105 55;c 180 105 15;d 195 90 6;d 80 95 6;a 86 95 125 95;t 180 35 Phagocyte engulfs microbe;t 180 195 Innate recognition and inflammatory coordination",
    "c 90 95 35;c 270 95 35;p M65 50L80 70L95 50M100 50L115 70L130 50;p M245 95L260 80L275 95L290 80;t 90 150 B cell: antibodies;t 270 150 T cell: recognition;t 180 195 Adaptive responses are antigen-specific",
    "l 35 175 325 175;p M35 165Q95 65 150 155L195 155Q235 15 325 115;t 100 55 First exposure;t 250 35 Later exposure;t 180 195 Memory can accelerate response, regulation limits harm"
  ],
  "depth-medicine-what-inflammation-does": [
    "d 180 90 10;c 95 105 24;c 265 105 24;a 170 90 119 105;a 190 90 241 105;t 180 65 Damage signal;t 95 150 Resident cell;t 265 150 Resident cell;t 180 195 Infection or sterile injury can trigger response",
    "r 35 75 290 55;r 35 85 290 35;d 100 105 5;d 180 105 5;d 260 105 5;a 100 130 100 165;a 260 130 260 165;t 180 55 Increased blood flow;t 180 195 Permeability allows fluid and protein out",
    "r 35 45 290 40;c 100 65 12;c 180 65 12;c 260 65 12;a 180 85 180 140;d 180 150 8;t 180 35 Circulating cells;t 180 175 Affected tissue;t 180 205 Adhesion and gradients guide recruitment",
    "l 35 175 325 175;p M35 165Q100 30 165 100T325 165;p M165 100Q235 70 325 85;t 260 155 Resolution;t 265 70 Persistent inflammation;t 180 195 Repair or ongoing injury depends on regulation"
  ],
  "depth-medicine-how-antibiotics-work": [
    "p M70 65Q35 105 70 145H290Q325 105 290 65Z;p M85 80Q60 105 85 130H275Q300 105 275 80Z;d 150 95 7;d 185 115 7;p M220 85L245 120L270 85;t 180 45 Cell-wall synthesis;t 150 160 Ribosomes;t 260 160 DNA;t 180 195 Different susceptible bacterial targets",
    "l 35 175 325 175;p M35 65L325 155;p M35 95H325;t 255 145 Killing;t 255 85 Growth inhibition;t 180 195 Viable bacteria over time at specified exposure",
    "c 90 105 40;c 270 105 40;d 90 105 8;d 270 105 8;a 270 105 320 60;p M50 55L130 155M130 55L50 155;t 90 170 Susceptible;t 270 170 Resistant survives;t 180 195 Selection favors resistance mechanisms",
    "c 90 105 45;c 270 105 30;d 90 105 8;l 270 75 270 50;l 240 105 215 105;l 300 105 325 105;t 90 165 Bacterium;t 270 165 Virus;t 180 195 Antibiotics do not treat viral infections themselves"
  ],
  "depth-medicine-how-pain-signals-are-processed": [
    "p M35 150L90 95L145 150;l 90 95 90 45;a 90 45 240 45;c 270 45 15;t 90 175 Noxious stimulus;t 270 75 Neural signal;t 180 195 Nociception is not identical to experienced pain",
    "b 25 65 95 55 Peripheral nerve;a 120 92 132 92;b 132 65 95 55 Spinal cord;a 227 92 239 92;b 239 65 95 55 Brain networks;t 180 155 Ascending pathways convey different features",
    "c 180 105 25;a 40 105 155 105;a 180 30 180 80;a 205 105 315 105;t 80 85 Incoming;t 180 20 Descending modulation;t 275 85 Outgoing;t 180 195 Amplification or inhibition changes transmission",
    "l 35 175 325 175;p M35 45Q100 125 325 165;p M35 60Q100 100 325 100;t 260 150 Tissue healing;t 260 90 Persistent pain;t 180 195 Pain and tissue damage can follow different paths"
  ],
  "depth-medicine-what-medical-imaging-reveals": [
    "a 25 105 90 105;c 125 105 25;c 155 105 25;l 190 65 190 145;c 270 105 45;l 225 105 315 105;l 270 60 270 150;t 105 175 Projection overlap;t 270 175 CT cross-section;t 180 205 CT reconstructs multiple X-ray views",
    "p M65 45H295V165H65Z;c 180 105 55;p M155 105Q180 65 205 105Q180 145 155 105Z;a 80 105 125 105;t 180 30 Magnetic field + RF;t 180 195 MRI contrast depends on sequence, no ionizing radiation",
    "c 50 105 12;p M62 105L270 65M62 105L270 145;l 270 55 270 155;a 85 95 245 75;a 245 125 85 115;t 180 45 Acoustic pulse;t 180 175 Returning echoes;t 180 205 Ultrasound Doppler can estimate motion",
    "b 25 45 95 55 X-ray / CT;b 132 45 95 55 MRI;b 239 45 95 55 Ultrasound;t 180 145 Different tissue contrasts and risks;t 180 195 Clinical context determines usefulness"
  ],
  "depth-medicine-understanding-blood-pressure": [
    "l 35 175 325 175;p M35 145L75 145Q105 35 145 145L185 145Q215 35 255 145H325;t 105 30 Systolic peak;t 250 160 Diastolic trough;t 180 195 Pressure changes across cardiac cycle",
    "b 25 65 145 55 Cardiac output;b 190 65 145 55 Vascular resistance;t 180 155 Mean arterial pressure depends on both;t 180 195 Volume and elasticity also matter",
    "r 95 65 170 70;r 140 55 80 90;p M140 100L105 160L180 160;c 180 160 18;t 180 35 Correct cuff and posture;t 180 195 Repeated standardized measurements improve context",
    "l 35 65 325 65;l 35 145 325 145;a 180 65 180 145;t 180 55 120 mmHg;t 180 165 80 mmHg;t 180 195 Pulse pressure = 40 mmHg"
  ],
  "depth-medicine-why-rehabilitation-matters": [
    "b 25 55 145 55 Baseline ability;a 170 82 190 82;b 190 55 145 55 Functional goal;t 180 150 Tasks chosen for individual needs;t 180 195 Participation and independence",
    "l 35 175 325 175;p M35 150L85 135L135 145L185 105L235 80L285 65L325 55;t 180 35 Appropriately graded practice;t 180 195 Adaptation may include compensation",
    "b 25 45 145 45 Physical therapy;b 190 45 145 45 Occupational therapy;b 25 115 145 45 Speech therapy;b 190 115 145 45 Assistive technology;t 180 195 Different barriers need coordinated support",
    "r 65 115 90 55;r 205 60 90 110;t 110 105 100 m;t 250 50 200 m;t 110 190 Baseline;t 250 190 Follow-up;t 180 210 Illustrative functional walking measure"
  ],
  "plus-medicine-what-medical-triage-means": [
    "b 25 45 145 45 Arrival order;b 190 45 145 45 Clinical urgency;a 97 90 180 140;a 262 90 180 140;t 180 165 Urgency and resources guide priority;t 180 195 Not simply first come, first served",
    "b 25 45 145 45 Immediate threats;b 190 45 145 45 Vital signs;b 25 115 145 45 Symptoms;b 190 115 145 45 Clinical context;t 180 195 Defined system categories differ by setting",
    "l 35 105 325 105;d 65 105 7;d 180 105 7;d 295 105 7;t 65 85 Initial;t 180 85 Reassess;t 295 85 Reclassify;t 180 175 Priority can change as condition changes",
    "b 25 65 145 55 Triage category;a 170 92 190 92;b 190 65 145 55 Diagnostic assessment;t 180 155 Priority is not a final diagnosis;t 180 195 Urgent symptoms need clinical evaluation"
  ],
  "plus-medicine-what-informed-consent-involves": [
    "b 25 45 145 45 Expected benefits;b 190 45 145 45 Material risks;b 25 115 145 45 Alternatives;b 190 115 145 45 Option to decline;t 180 195 Explain information relevant to decision",
    "b 25 65 145 55 Explain;a 170 80 190 80;a 190 105 170 105;b 190 65 145 55 Teach-back;t 180 150 Questions and interpreters support understanding;t 180 195 Signature alone is insufficient",
    "c 90 95 40;c 270 95 40;t 90 100 Voluntary;t 270 100 Capacity;t 180 155 Both relevant to decision;t 180 195 Authorized surrogate may be appropriate",
    "l 35 105 325 105;d 65 105 7;d 180 105 7;d 295 105 7;t 65 85 Explain;t 180 85 Decide;t 295 85 Revisit;t 180 175 Consent can change during ongoing care"
  ],
  "depth-medicine-how-diagnostic-tests-are-evaluated": [
    "r 35 45 145 120;r 180 45 145 120;l 35 105 325 105;t 107 65 Condition +;t 252 65 Condition −;t 107 95 True +;t 252 95 False +;t 107 145 False −;t 252 145 True −;t 180 195 Sensitivity: TP/(TP+FN), specificity: TN/(TN+FP)",
    "r 35 75 290 50;f 35 75 87 50;t 78 105 True +;t 210 105 False +;t 180 55 Among positive tests;t 180 195 PPV depends on prevalence",
    "b 25 45 145 50 100 cases;b 190 45 145 50 900 noncases;t 97 130 90 true positives;t 262 130 90 false positives;t 180 170 PPV = 90/180;t 180 195 50%",
    "l 35 175 325 175;p M35 175Q115 15 325 175;p M95 175Q205 15 325 175;l 180 35 180 175;t 180 25 Decision threshold;t 180 195 Shifting threshold trades error types"
  ],
  "depth-medicine-why-clinical-trials-use-controls": [
    "l 35 175 325 175;p M35 150L325 65;p M35 150L325 95;t 260 55 Treated;t 260 110 Control;t 180 195 Compare improvement beyond background changes",
    "b 105 35 150 45 Participants;a 180 80 95 125;a 180 80 265 125;b 25 125 140 45 Random group A;b 195 125 140 45 Random group B;t 180 205 Balance prognostic factors in expectation",
    "b 25 55 95 55 Placebo;b 132 55 95 55 Usual care;b 239 55 95 55 Active drug;t 180 155 Comparator defines the question;t 180 195 Must be ethically appropriate",
    "r 45 65 100 100;r 215 100 100 65;t 95 55 Outcome A;t 265 90 Outcome B;t 180 195 Between-group difference, account for missing data"
  ],
  "plus-medicine-how-medicines-are-absorbed": [
    "b 25 45 145 50 Oral dose;a 97 95 97 145;b 25 145 145 40 Gut → blood;b 190 45 145 50 IV dose;a 262 95 262 145;b 190 145 145 40 Direct blood;t 180 205 IV bypasses absorption step",
    "r 35 90 290 35;r 150 75 60 65;a 95 45 95 165;a 180 45 180 165;t 95 35 Diffusion;t 180 35 Carrier;t 270 75 Dissolution;t 180 195 Ionization and formulation influence uptake",
    "b 25 65 95 55 Gut;a 120 92 132 92;b 132 65 95 55 Liver;a 227 92 239 92;b 239 65 95 55 Systemic blood;a 180 120 180 155;t 180 175 First-pass metabolism can reduce exposure",
    "r 35 75 290 50;f 35 75 174 50;t 122 105 60 mg systemic;t 267 105 40 mg other;t 180 55 Hypothetical 100 mg dose, F=.6;t 180 195 Illustration only, not a dose recommendation"
  ],
  "plus-medicine-why-drugs-have-half-lives": [
    "l 35 175 325 175;p M35 45Q105 125 180 150T325 170;t 180 30 First-order elimination;t 180 195 Constant fraction, not amount, per time",
    "l 35 175 325 175;p M35 45L107.5 110L180 142.5L252.5 158.75L325 166.9;d 35 45 5;d 107.5 110 5;d 180 142.5 5;t 35 35 C₀;t 107 100 C₀/2;t 180 132 C₀/4;t 180 195 C(t)=C₀×2^(−t/t½)",
    "r 35 55 280 30;r 35 95 140 30;r 35 135 70 30;r 35 175 35 25;t 175 75 80 units;t 200 115 40 at 4h;t 155 155 20 at 8h;t 180 195 10 at 12h",
    "l 35 175 325 175;p M35 165L60 100L85 145L110 75L135 125L160 55L185 115L210 45L235 105L260 40L285 100L310 40;t 180 25 Repeated exposure approaches steady state;t 180 195 Approximate linear model, not dosing guidance"
  ],
  "plus-medicine-what-placebo-controlled-trials-test": [
    "b 25 55 145 55 Active intervention;b 190 55 145 55 Matched placebo;t 180 150 Shared expectations and procedures;t 180 195 Difference estimates specific treatment effect",
    "c 90 95 35;c 270 95 35;l 55 95 125 95;l 235 95 305 95;t 90 150 Participant masked;t 270 150 Assessor masked;t 180 195 Side effects may reveal group",
    "l 35 175 325 175;p M35 150L325 70;t 180 45 Placebo-group improvement;t 180 195 Recovery, regression and context can contribute",
    "b 25 55 145 55 Placebo design;b 190 55 145 55 Active comparator;t 97 150 Ethical justification;t 262 150 Existing treatment;t 180 195 Choose comparison appropriate to clinical question"
  ],
  "plus-medicine-how-blood-tests-use-reference-intervals": [
    "l 35 175 325 175;p M35 175Q180 -95 325 175;l 75 100 75 175;l 285 100 285 175;t 180 70 Central 95%;t 55 165 2.5%;t 305 165 2.5%;t 180 195 Reference interval is not disease boundary",
    "b 25 45 145 45 Age / sex;b 190 45 145 45 Pregnancy;b 25 115 145 45 Assay method;b 190 115 145 45 Collection timing;t 180 195 Appropriate intervals differ",
    "r 35 75 290 50;f 35 75 186 50;t 128 105 64% ≥1 outside;t 273 105 36% none;t 180 55 20 independent central 95% tests;t 180 195 1 − .95²⁰ ≈ .64",
    "l 35 105 325 105;l 100 65 100 145;l 245 65 245 145;d 280 105 6;t 100 55 Ref. low;t 245 55 Ref. high;t 280 135 Result;t 180 195 Symptoms, trends and decision limits matter"
  ],
  "plus-medicine-how-drug-interactions-occur": [
    "l 35 175 325 175;p M35 155Q95 35 150 85T325 155;p M35 155Q95 15 180 55T325 110;t 240 95 Lower clearance;t 240 145 Baseline;t 180 195 Pharmacokinetic interaction changes exposure",
    "b 25 65 145 55 Drug A effect;b 190 65 145 55 Drug B effect;a 97 120 180 150;a 262 120 180 150;t 180 175 Shared physiological effect;t 180 200 Concentrations need not change",
    "r 65 105 90 65;r 205 40 90 130;t 110 95 Cavg;t 250 30 2× Cavg;t 110 190 Clearance CL;t 250 190 Clearance CL/2;t 180 210 Fixed input, simplified linear model",
    "b 25 45 145 45 Medicines / timing;b 190 45 145 45 Dose;b 25 115 145 45 Patient factors;b 190 115 145 45 Therapeutic window;t 180 195 Clinician review assesses actual interaction relevance"
  ],
  "plus-medicine-understanding-anemia-as-a-clinical-finding": [
    "r 65 45 90 125;r 205 95 90 75;t 110 35 Higher Hb;t 250 85 Lower Hb;t 180 195 Lower hemoglobin reduces oxygen-carrying capacity",
    "b 25 55 95 55 Low production;b 132 55 95 55 Blood loss;b 239 55 95 55 Destruction;t 180 155 Different routes to low hemoglobin",
    "c 65 95 22;c 180 95 32;c 295 95 42;t 65 155 Microcytic;t 180 155 Normocytic;t 295 155 Macrocytic;t 180 195 Cell size and marrow response narrow possibilities",
    "b 25 45 145 45 Ferritin;b 190 45 145 45 Other iron tests;b 25 115 145 45 Inflammation;b 190 115 145 45 History / testing;t 180 195 Ferritin reflects stores but can rise with inflammation"
  ],
  "plus-medicine-how-blood-clotting-is-regulated": [
    "r 35 75 290 70;p M145 75L180 115L215 75;d 155 105 6;d 170 100 6;d 185 105 6;d 200 100 6;t 180 45 Vessel injury;t 180 195 Platelet adhesion and aggregation form initial plug",
    "b 25 65 95 55 Thrombin;a 120 92 132 92;b 132 65 95 55 Fibrinogen;a 227 92 239 92;b 239 65 95 55 Fibrin;p M250 135L310 175M310 135L250 175M260 135L320 175;t 180 195 Fibrin mesh stabilizes platelet plug",
    "p M35 65L145 145M35 105L145 65M35 145L145 105M215 65L260 100M280 125L325 145;a 155 105 205 105;t 95 175 Fibrin mesh;t 270 175 Breakdown;t 180 205 Natural anticoagulants and plasmin limit clotting",
    "p M35 105H325;l 180 65 180 145;c 95 105 22;c 265 105 22;t 95 160 Bleeding risk;t 265 160 Thrombosis risk;t 180 195 Hemostasis requires balanced regulation"
  ],
  "plus-medicine-how-medical-devices-are-evaluated": [
    "b 25 55 145 55 External simple tool;b 190 55 145 55 Life-support implant;t 97 150 Lower complexity;t 262 150 Higher potential harm;t 180 195 Evidence depends on intended use and risk",
    "b 25 55 145 55 Bench testing;b 190 55 145 55 Usability test;t 97 150 Performance / durability;t 262 150 Realistic operator tasks;t 180 195 Engineering and human factors complement each other",
    "b 25 45 145 45 Diagnostic accuracy;b 190 45 145 45 Functional outcomes;b 25 115 145 45 Adverse events;b 190 115 145 45 Comparator;t 180 195 Clinical evidence must match intended population",
    "l 35 105 325 105;d 65 105 7;d 180 105 7;d 295 105 7;t 65 85 Launch;t 180 85 Monitor;t 295 85 Improve;t 180 175 Rare and long-term failures may emerge later"
  ]
};
window.LumenSlideArtBatch20Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch20;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch20Render(c,cls,step)||prior(c,cls,step);};})();


/* Food Science: dedicated slide artwork, batch 21. */
window.LumenSlideArtBatch21={
  "fermentation": [
    "b 25 65 95 55 Sugars;a 120 92 132 92;b 132 65 95 55 Microbes;a 227 92 239 92;b 239 65 95 55 Products;t 180 165 Microbial metabolism changes food",
    "c 70 95 23;c 85 75 12;c 135 85 7;c 155 65 10;c 175 45 13;p M220 65L240 85L260 65L280 85L300 65;t 95 150 Yeast → CO₂ + ethanol;t 260 150 Bacteria → acids;t 180 195 Bread vs yogurt fermentation",
    "b 25 45 145 50 Temperature;b 190 45 145 50 Salt / acidity;b 25 115 145 50 Oxygen;b 190 115 145 50 Starter culture;t 180 195 Control conditions for desired microbes",
    "l 35 175 325 175;p M35 65Q120 155 325 160;t 180 35 pH may decrease;t 180 195 Acid alone does not establish food safety"
  ],
  "maillard": [
    "b 25 55 145 50 Reducing sugar;b 190 55 145 50 Amino group;a 97 105 180 150;a 262 105 180 150;t 180 175 Aromas and brown pigments;t 180 200 Maillard reaction",
    "r 35 100 130 65;r 195 100 130 65;a 70 95 70 45;a 105 95 105 45;d 70 80 5;d 105 80 5;t 100 185 Wet surface;t 260 185 Dry surface;t 180 25 Evaporation consumes heat",
    "b 25 65 145 55 Sugar + amino;b 190 65 145 55 Sugar alone;t 97 150 Maillard;t 262 150 Caramelization;t 180 195 Both may occur during cooking",
    "r 35 75 120 80;r 205 75 120 80;d 65 90 5;d 100 105 5;d 125 90 5;a 155 115 205 115;t 95 175 Excess moisture;t 265 175 Drier surface;t 180 195 Drying can promote browning"
  ],
  "depth-food-science-why-emulsions-hold-together": [
    "r 35 45 130 130;r 35 45 130 55;r 195 45 130 130;c 225 65 8;c 285 85 8;c 245 130 8;c 305 150 8;t 100 195 Two phases;t 260 195 Dispersed droplets",
    "c 90 100 50;a 140 100 190 100;c 220 65 20;c 280 65 20;c 220 135 20;c 280 135 20;t 180 30 Breaking droplets increases interface;t 180 195 Unprotected drops may merge",
    "c 180 100 55;c 180 100 40;p M180 45V60M235 100H220M180 155V140M125 100H140;t 180 105 Oil;t 180 25 Water-facing emulsifier heads;t 180 195 Protective interfacial film reduces coalescence",
    "r 35 45 130 130;r 195 45 130 130;c 65 65 10;c 95 65 10;c 125 65 10;c 230 90 22;c 285 110 32;t 100 195 Creaming;t 260 195 Coalescence;t 180 25 Migration without merging vs merged drops"
  ],
  "depth-food-science-how-starch-thickens-food": [
    "c 180 100 60;p M140 80L160 65L180 80L200 65L220 80M140 110L160 95L180 110L200 95L220 110M180 110L180 140L210 145;t 180 25 Starch granule;t 180 195 Linear amylose and branched amylopectin",
    "c 90 95 25;c 270 95 55;a 115 95 215 95;p M240 80L250 110L270 80L290 110;t 90 150 Dry granule;t 270 165 Swollen granule;t 180 195 Heat + water disrupt ordered structure",
    "p M35 70L65 100L95 70L125 100M35 130L65 160L95 130L125 160M205 85L235 100L265 85L295 100M205 110L235 125L265 110L295 125;t 95 185 Dispersed chains;t 265 185 Reassociated chains;t 180 205 Cooling can firm gel and expel water",
    "r 35 60 130 105;r 195 60 130 105;d 65 85 5;d 95 125 5;d 135 145 5;c 260 105 30;t 100 185 Cold slurry;t 260 185 Dry starch in hot liquid;t 180 205 Hydrated outer layer can trap dry interior"
  ],
  "depth-food-science-why-freezing-changes-texture": [
    "r 35 45 290 130;p M80 75V135M50 105H110M60 85L100 125M60 125L100 85;d 180 80 5;d 215 100 5;d 260 135 5;t 180 25 Ice excludes solutes;t 180 195 Remaining liquid becomes concentrated",
    "c 70 90 35;c 135 130 25;c 225 65 10;c 255 95 10;c 295 65 10;c 225 135 10;c 270 140 10;c 305 115 10;t 95 185 Slow freezing;t 265 185 Rapid freezing;t 180 205 Faster heat removal often favors smaller crystals",
    "r 35 55 130 110;r 195 55 130 110;l 35 110 165 110;l 100 55 100 165;p M195 110L240 105L250 130L280 95L325 110M260 55L250 130L260 165;d 280 180 7;t 100 40 Intact cells;t 260 40 Damaged cells;t 180 205 Thawing can release liquid and soften tissue",
    "c 75 85 12;c 110 115 12;c 145 85 12;a 160 100 215 100;c 270 105 45;t 110 170 Small crystals;t 270 170 Larger crystal;t 180 195 Temperature cycling promotes recrystallization"
  ],
  "depth-food-science-how-gluten-affects-dough": [
    "p M35 65L90 110L145 65L200 110L255 65L325 110M35 135L90 90L145 135L200 90L255 135L325 90;l 90 110 90 90;l 200 110 200 90;t 180 35 Hydrated gluten protein network;t 180 195 Stretch and elastic recovery",
    "r 35 85 130 40;r 195 85 130 40;a 55 65 145 65;a 215 65 305 65;t 100 150 Mix to develop;t 260 150 Rest to relax;t 180 195 Hydration and deformation change network",
    "r 35 45 290 130;c 95 90 30;c 180 135 25;c 265 80 25;p M35 110L65 110M125 90L240 80M205 135L325 130;t 180 25 Expanding gas held by gluten;t 180 195 Baking sets network and starch",
    "p M35 70L80 115L125 70L165 115M35 130L80 85L125 130L165 85M195 70L225 90M270 120L325 100;t 100 175 Bread network;t 260 175 Tender pastry;t 180 205 Texture goals require different gluten development"
  ],
  "depth-food-science-what-makes-food-go-stale": [
    "b 25 65 145 55 Staling;b 190 65 145 55 Spoilage;t 97 150 Texture / flavor;t 262 150 Microbial growth;t 180 195 Distinct changes can coexist",
    "p M35 70L65 100L95 70L125 100M195 85L225 100L255 85L285 100M195 110L225 125L255 110L285 125;a 140 100 185 100;t 95 155 Fresh crumb;t 250 155 Ordered starch;t 180 195 Retrogradation contributes to firming",
    "r 35 95 290 55;d 85 50 5;d 140 50 5;d 195 50 5;d 250 50 5;a 85 55 85 95;a 195 55 195 95;t 180 35 Humid air;t 180 195 Absorbed water reduces brittleness",
    "l 35 175 325 175;p M35 65H110L145 150H200L245 90L325 65;t 100 50 Stale;t 170 165 Reheated;t 285 55 Cooled;t 180 195 Temporary softening does not establish safety"
  ],
  "depth-food-science-why-salt-changes-food": [
    "b 25 65 145 55 NaCl;a 170 92 190 92;c 225 90 22;c 295 90 22;t 225 94 Na⁺;t 295 94 Cl⁻;t 180 165 Dissolved ions interact with water and proteins",
    "r 110 65 140 90;d 60 80 5;d 60 120 5;d 300 85 5;d 300 120 5;a 110 95 60 95;a 250 95 300 95;t 180 110 Tissue;t 180 195 Salt changes water chemical potential",
    "p M35 75Q80 45 125 75T215 75T325 75;p M35 135Q80 105 125 135T215 135T325 135;d 95 105 5;d 180 105 5;d 265 105 5;t 180 35 Ions affect protein interactions;t 180 195 Salt can modify texture and bitterness",
    "r 35 75 290 50;f 35 75 120 50;t 95 105 Lower aw;t 230 105 Higher aw;t 180 55 Water availability affects growth;t 180 195 Seasoning alone is not validated preservation"
  ],
  "depth-food-science-why-fruit-ripens": [
    "c 90 100 45;c 270 100 45;a 135 100 225 100;t 90 160 Firm / unripe;t 270 160 Soft / ripe;t 180 195 Pigments, aroma, sweetness and acidity change",
    "l 35 175 325 175;p M35 150Q100 150 150 45T325 150;p M35 160Q125 160 180 70T325 145;t 180 30 Climacteric rise;t 180 195 Respiration and ethylene increase during ripening",
    "r 35 55 130 100;r 195 55 130 100;p M45 80H155M45 110H155M75 55V155M115 55V155;p M205 80H255M275 80H315M205 110H245M265 110H315;t 100 175 Intact walls;t 260 175 Modified walls;t 180 205 Starch may also convert to sugars",
    "c 95 95 40;c 265 95 40;p M70 65L95 40L120 65M240 65L265 40L290 65;t 95 150 Banana: can ripen;t 265 150 Strawberry: limited;t 180 195 After-harvest ripening varies by species"
  ],
  "plus-food-science-how-proteins-set-when-heated": [
    "p M35 65Q85 25 130 65Q150 125 85 140Q35 120 65 90;a 150 100 195 100;p M205 55L225 85L245 65L265 125L285 95L325 145;t 95 175 Folded;t 265 175 Unfolded;t 180 205 Heat disrupts folding interactions",
    "p M35 60L80 110L125 60L170 110M35 150L80 100L125 150L170 100M195 60L240 110L285 60L325 110M195 150L240 100L285 150L325 100;l 170 110 195 60;l 170 100 195 150;t 180 35 Unfolded proteins associate;t 180 195 Egg white forms an opaque network",
    "r 35 55 130 105;r 195 55 130 105;p M45 70L155 145M45 145L155 70M205 80L315 135M205 135L315 80;d 100 105 8;d 260 175 8;a 260 135 260 170;t 100 185 Water retained;t 260 195 Water expelled",
    "b 25 65 95 55 Egg;b 132 65 95 55 Meat;b 239 65 95 55 Dairy;t 180 155 Different proteins, different heat response;t 180 195 Texture alone does not establish microbial safety"
  ],
  "plus-food-science-why-pectin-helps-jams-gel": [
    "p M35 95L80 65L125 95L170 65L215 95L260 65L305 95;d 80 65 5;d 170 65 5;d 260 65 5;t 180 35 Galacturonic acid polymer;t 180 160 Esterification changes interactions",
    "p M35 65L95 90L155 65L215 90L275 65L325 90M35 125L95 150L155 125L215 150L275 125L325 150;l 95 90 95 150;l 215 90 215 150;t 180 35 Sugar + acid support chain association;t 180 195 High-methoxyl pectin gel",
    "p M35 65H325M35 145H325;c 95 105 12;c 180 105 12;c 265 105 12;l 95 65 95 93;l 95 117 95 145;l 180 65 180 93;l 180 117 180 145;l 265 65 265 93;l 265 117 265 145;t 180 105 Ca²⁺;t 180 195 Calcium bridges low-methoxyl pectin chains",
    "b 25 45 145 45 Sugar;b 190 45 145 45 pH;b 25 115 145 45 Calcium;b 190 115 145 45 Heating;t 180 195 Gel success does not validate canning safety"
  ],
  "plus-food-science-why-food-oxidizes": [
    "b 25 65 145 55 Food molecule;a 170 92 190 92;b 190 65 145 55 Oxidized product;t 180 155 Electron loss / oxidation-state change;t 180 195 Oxygen participates in many reactions",
    "b 25 65 95 55 Unsaturated fat;a 120 92 132 92;b 132 65 95 55 Hydroperoxide;a 227 92 239 92;b 239 65 95 55 Volatiles;t 180 165 Radical chain reactions produce rancid odors",
    "b 25 45 145 45 Heat / light;b 190 45 145 45 Oxygen / metals;a 97 90 180 135;a 262 90 180 135;b 105 135 150 45 Oxidation rate;t 180 205 Antioxidants may interrupt pathways",
    "b 25 65 145 55 Oxidative rancidity;b 190 65 145 55 Microbial spoilage;t 180 150 Distinct quality and safety processes;t 180 195 Lack of odor does not prove safety"
  ],
  "plus-food-science-how-foams-hold-air": [
    "r 35 45 290 130;c 85 85 23;c 155 120 26;c 235 80 20;c 285 140 18;t 180 25 Gas dispersed in matrix;t 180 195 Foam creates large interfacial area",
    "c 180 100 60;c 180 100 48;d 180 42 4;d 238 100 4;d 180 158 4;d 122 100 4;t 180 105 Gas;t 180 25 Protein film;t 180 195 Adsorbed molecules resist bubble merging",
    "c 85 85 25;c 140 85 25;c 265 100 45;a 112 115 112 165;a 170 85 220 85;t 100 185 Film drains;t 265 165 Larger bubble;t 180 205 Drainage, merging and gas transfer change foam",
    "c 90 95 40;c 270 95 40;d 55 95 5;d 125 95 5;d 90 55 5;d 270 135 8;d 285 130 8;d 295 120 8;t 90 155 Stable cream foam;t 270 155 Fat aggregation;t 180 195 Excess whipping can destabilize structure"
  ],
  "plus-food-science-what-makes-ice-cream-smooth": [
    "r 35 45 290 130;c 95 85 20;c 235 130 22;p M145 55L165 75L145 95L125 75ZM270 60L290 80L270 100L250 80Z;d 155 140 5;d 180 130 5;t 180 25 Ice crystals, air, fat, liquid;t 180 195 Sizes and proportions determine texture",
    "l 35 175 325 175;p M35 55L325 145;t 180 35 Freezing temperature;t 180 195 More dissolved solute generally lowers freezing point",
    "c 85 100 30;c 145 80 10;c 145 135 10;c 225 70 10;c 255 100 10;c 285 135 10;a 170 100 205 100;t 105 175 Coarse crystals;t 260 175 Fine crystals;t 180 205 Rapid cooling and agitation help structure",
    "c 75 90 10;c 105 115 10;c 135 85 10;a 155 100 210 100;c 270 100 45;t 105 170 Small crystals;t 270 170 Recrystallized;t 180 195 Stable cold storage limits crystal growth"
  ],
  "plus-food-science-why-browning-fruit-is-not-always-spoilage": [
    "p M35 65H125V155H35ZM235 65H325V155H235Z;p M80 65L100 95L80 125;a 125 110 235 110;d 255 90 5;d 275 110 5;d 295 130 5;t 80 175 Cell rupture;t 280 175 Brown pigments;t 180 205 PPO + phenolics + oxygen",
    "b 25 45 145 45 Acidity;b 190 45 145 45 Antioxidants;b 25 115 145 45 Less oxygen;b 190 115 145 45 Heat treatment;t 180 195 Can reduce enzyme-driven browning",
    "c 95 95 45;c 265 95 45;d 85 90 5;d 100 110 5;d 245 75 5;d 270 95 5;d 280 115 5;t 95 160 Enzymatic color;t 265 160 Microbial changes;t 180 195 Similar appearance can have different causes",
    "b 25 65 145 55 Appearance;b 190 65 145 55 Storage history;t 180 155 Check time and temperature guidance;t 180 195 Color cannot prove food safety"
  ],
  "depth-food-science-how-chocolate-is-tempered": [
    "p M35 65H145M35 90H145M35 115H145M35 140H145M205 65L235 90L265 65L295 90M205 115L235 140L265 115L295 140;t 95 175 Ordered packing;t 265 175 Alternate packing;t 180 205 Cocoa butter has several crystal forms",
    "l 35 175 325 175;p M35 75L95 35L180 145L245 95H325;t 95 25 Heat;t 180 165 Cool;t 280 85 Rewarm;t 180 205 Tempering selects crystal populations, temperatures vary",
    "p M155 85L180 60L205 85L180 110ZM115 125L140 100L165 125L140 150ZM195 125L220 100L245 125L220 150Z;a 140 100 165 85;a 220 100 195 85;t 180 35 Seed crystals promote growth;t 180 195 Excess reheating can melt useful seeds",
    "r 35 65 130 85;r 195 65 130 85;d 65 85 5;d 95 110 5;d 125 90 5;p M210 75L225 90L240 75M260 100L275 115L290 100;t 100 175 Fat bloom;t 260 175 Sugar bloom;t 180 205 Different physical processes can whiten surface"
  ],
  "plus-food-science-understanding-water-activity": [
    "r 35 75 130 90;r 195 75 130 90;d 65 55 5;d 95 55 5;d 125 55 5;d 250 55 5;t 100 120 Pure water;t 260 120 Food;t 180 195 aw = vapor pressure ratio at same temperature",
    "r 35 65 130 95;r 195 65 130 95;d 220 95 5;d 250 115 5;d 280 90 5;t 100 175 Less solute;t 260 175 More solute;t 180 205 Same moisture can have different water activity",
    "r 35 75 290 50;f 35 75 217.5 50;t 143 105 75% RH;t 180 55 Equilibrium;t 180 195 aw .75 × 100 = 75% RH",
    "l 35 105 325 105;d 95 105 6;d 180 105 6;d 265 105 6;t 95 85 Organism A;t 180 130 Organism B;t 265 85 Organism C;t 180 195 Growth requirements differ, other controls matter"
  ],
  "plus-food-science-why-oils-have-different-melting-behavior": [
    "p M60 45V165M60 65H300M60 105H300M60 145H300;t 180 25 Triacylglycerol schematic;t 180 195 Three fatty-acid chains affect packing",
    "p M35 65H150M35 90H150M35 115H150M35 140H150M205 65L250 65L275 90L325 90M205 115L250 115L275 140L325 140;t 95 175 Straight saturated;t 265 175 Bent cis unsaturated;t 180 205 Cis bends often reduce packing efficiency",
    "l 35 175 325 175;p M35 45Q120 50 180 105T325 165;t 180 35 Solid fraction decreases over range;t 180 195 Natural fats contain multiple molecular species",
    "r 35 75 290 50;f 35 75 115 50;t 92 105 Solid fraction;t 235 105 Liquid fraction;t 180 55 At a specified temperature;t 180 195 Thermal history affects spreadability"
  ],
  "plus-food-science-how-pressure-cooking-changes-boiling": [
    "l 35 175 325 175;l 35 175 35 35;p M35 165Q180 145 325 35;l 35 105 325 105;d 250 105 5;t 180 25 Vapor pressure rises with temperature;t 180 195 Boiling when vapor pressure equals surroundings",
    "r 75 75 210 95;l 75 75 285 75;c 180 55 12;a 180 75 180 35;t 180 110 Retained steam;t 180 150 Heated water;t 180 195 Regulated higher pressure raises boiling temperature",
    "r 65 70 90 100;r 205 50 90 120;t 110 60 100°C;t 250 40 ~120°C;t 110 190 1 atm absolute;t 250 190 2 atm absolute;t 180 210 Approximate pure water saturation temperatures",
    "b 25 65 145 55 Pressure cooking;b 190 65 145 55 Pressure canning;t 180 155 Different equipment and validation;t 180 195 Boiling calculation cannot establish preservation safety"
  ]
};
window.LumenSlideArtBatch21Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch21;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch21Render(c,cls,step)||prior(c,cls,step);};})();


/* Scientific Literacy: dedicated slide artwork, batch 22. */
window.LumenSlideArtBatch22={
  "research-methods": [
    "b 25 45 145 50 Population: seedlings;b 190 45 145 50 Outcome: height;b 25 115 145 50 Comparison: light;b 190 115 145 50 Time: 14 days;t 180 195 Specify measurable question",
    "b 105 35 150 40 Eligible sample;a 180 75 95 120;a 180 75 265 120;b 25 120 140 45 Randomized treatment;b 195 120 140 45 Randomized control;t 180 195 Observational designs require different assumptions",
    "l 35 105 325 105;l 75 95 75 115;l 250 95 250 115;l 75 105 250 105;d 162 105 6;t 162 85 Estimate;t 180 170 Uncertainty around measured effect;t 180 195 Significance does not eliminate bias",
    "b 25 45 145 45 Methods;b 190 45 145 45 Data access;b 25 115 145 45 Analysis decisions;b 190 115 145 45 Limitations;t 180 195 Transparent record enables scrutiny"
  ],
  "depth-scientific-literacy-what-makes-a-claim-testable": [
    "p M95 175V85M95 100L65 70M95 100L125 70M265 175V50M265 80L235 50M265 80L295 50;l 35 175 325 175;t 95 195 Control;t 265 195 Light treatment;t 180 25 Predict a measurable height difference",
    "b 25 55 145 50 Light condition A;b 190 55 145 50 Light condition B;a 97 105 97 145;a 262 105 262 145;t 180 170 Measure height at day 14;t 180 195 Specify procedure before collecting data",
    "l 35 105 325 105;d 95 105 6;d 265 105 6;t 95 85 No increase;t 265 85 Increase;t 180 155 Prediction permits contradictory evidence;t 180 195 Not every possible result can support it",
    "b 25 45 145 45 Hypothesis;b 190 45 145 45 Test conditions;b 25 115 145 45 Measurement;b 190 115 145 45 Replication;t 180 195 Failed prediction has multiple possible causes"
  ],
  "depth-scientific-literacy-reading-a-scientific-paper": [
    "r 85 35 190 140;f 95 45 170 35;l 95 95 265 95;l 95 115 265 115;l 95 135 265 135;t 180 67 Abstract;t 180 195 Identify question, sample and main finding",
    "b 25 55 95 55 Recruit;a 120 82 132 82;b 132 55 95 55 Measure;a 227 82 239 82;b 239 55 95 55 Analyze;t 180 150 Check controls, exclusions and allocation;t 180 195 Methods determine what can be inferred",
    "l 35 105 325 105;l 75 95 75 115;l 245 95 245 115;l 75 105 245 105;d 160 105 6;t 160 80 Effect estimate;t 180 165 Examine interval and actual figure;t 180 195 Separate planned and exploratory results",
    "r 35 55 290 110;r 95 80 170 60;t 180 115 Studied population;t 180 40 Conclusions beyond this boundary need support;t 180 195 Discussion should recognize limitations"
  ],
  "depth-scientific-literacy-understanding-peer-review": [
    "b 25 65 110 55 Manuscript;a 135 92 165 92;b 165 65 170 55 Expert review;t 180 155 Methods, reasoning and contribution;t 180 195 Procedures differ between journals",
    "b 25 55 95 55 Review;a 120 82 132 82;b 132 55 95 55 Revise;a 227 82 239 82;b 239 55 95 55 Editor;t 180 155 Clarify analyses or narrow conclusions;t 180 195 Editor considers reviews",
    "r 35 65 290 95;r 65 85 90 55;t 110 115 Reviewed;t 240 115 Not independently replicated;t 180 195 Review can miss errors and bias",
    "l 35 105 325 105;d 55 105 6;d 145 105 6;d 235 105 6;d 325 105 6;t 55 85 Publish;t 145 85 Replicate;t 235 85 Reanalyze;t 315 85 Correct;t 180 195 Evidence evaluation continues after publication"
  ],
  "depth-scientific-literacy-why-replication-matters": [
    "r 35 55 130 110;r 195 55 130 110;d 65 95 5;d 95 75 5;d 125 115 5;d 225 85 5;d 255 115 5;d 285 75 5;t 100 185 Original data;t 260 185 New independent data",
    "b 25 55 145 55 Same procedure;b 190 55 145 55 Different measure;t 97 150 Direct replication;t 262 150 Conceptual replication;t 180 195 Both test the underlying finding",
    "l 35 105 325 105;l 85 65 245 65;l 100 145 270 145;d 165 65 5;d 185 145 5;t 180 30 Different estimates can be compatible;t 180 195 Sampling and methods change results",
    "l 35 35 35 175;l 180 35 180 175;l 90 65 240 65;d 165 65 5;l 130 105 270 105;d 200 105 5;l 150 145 230 145;d 190 145 5;t 180 195 Compare study estimates and uncertainty"
  ],
  "depth-scientific-literacy-distinguishing-a-theory-from-a-guess": [
    "b 25 55 145 50 Observations;a 170 80 190 80;b 190 55 145 50 Theory;a 262 105 262 145;b 190 145 145 40 Predictions;t 180 205 Explanation links evidence to new predictions",
    "b 25 65 95 55 Theory;a 120 92 132 92;b 132 65 95 55 Hypothesis;a 227 92 239 92;b 239 65 95 55 Test;t 180 165 Revise when evidence conflicts",
    "b 25 65 145 55 Law: F = ma;b 190 65 145 55 Theory: mechanics;t 97 150 Describes relation;t 262 150 Explains patterns;t 180 195 Theories do not mature into laws",
    "l 35 175 325 175;p M35 155L325 65;p M35 155Q180 110 325 35;t 95 145 Low-speed agreement;t 255 30 High-speed divergence;t 180 195 Newtonian model useful within limits"
  ],
  "depth-scientific-literacy-how-controls-isolate-effects": [
    "l 35 175 325 175;p M35 155L325 60;p M35 155L325 105;t 265 50 Treatment;t 265 120 Reference;t 180 195 Compare change against background",
    "r 35 65 130 85;r 195 65 130 85;d 95 105 5;d 115 105 5;t 100 175 No active factor;t 260 175 Baseline response;t 180 205 Negative control detects artifacts",
    "r 35 65 130 85;r 195 65 130 85;d 95 105 5;d 115 105 5;d 225 90 5;d 250 110 5;d 280 85 5;d 300 120 5;t 100 175 Unknown condition;t 260 175 Known response;t 180 205 Positive control checks whether method works",
    "b 25 55 145 50 Group A;b 190 55 145 50 Group B;t 180 145 Same timing, measurement and setting;t 180 195 Randomize when appropriate"
  ],
  "depth-scientific-literacy-how-scientific-consensus-develops": [
    "b 25 45 95 45 Method A;b 132 45 95 45 Method B;b 239 45 95 45 Method C;a 72 90 180 135;a 180 90 180 135;a 286 90 180 135;b 100 135 160 45 Shared conclusion;t 180 205 Convergence across lines of evidence",
    "l 35 65 325 65;l 35 105 325 105;l 35 145 325 145;l 90 65 245 65;d 170 65 5;l 130 105 260 105;d 195 105 5;l 110 145 225 145;d 168 145 5;t 180 195 Independent methods give compatible estimates",
    "c 180 105 55;c 180 105 28;t 180 105 Core claim;t 180 30 Open questions around core;t 180 195 Consensus can coexist with debate on details",
    "l 35 105 325 105;d 65 105 6;d 180 105 6;d 295 105 6;t 65 85 Evidence;t 180 85 Evaluate;t 295 85 Revise;t 180 175 New strong evidence can change consensus"
  ],
  "depth-scientific-literacy-recognizing-conflicts-of-interest": [
    "b 25 55 145 55 Primary judgment;b 190 55 145 55 Secondary interest;a 262 110 180 150;a 97 110 180 150;t 180 175 Potential conflict;t 180 200 Incentive can influence judgment",
    "r 85 35 190 140;l 95 65 265 65;l 95 95 265 95;l 95 125 265 125;t 180 55 Funding;t 180 85 Relationships;t 180 115 Sponsor role;t 180 195 Disclosure makes potential influence visible",
    "b 25 45 145 45 Design;b 190 45 145 45 Comparator;b 25 115 145 45 Analysis;b 190 115 145 45 Publication;t 180 195 Incentives can influence multiple stages",
    "b 25 45 145 45 Preregistration;b 190 45 145 45 Data access;b 25 115 145 45 Independent tests;b 190 115 145 45 Evidence vs claims;t 180 195 Conflict prompts scrutiny, not automatic rejection"
  ],
  "plus-scientific-literacy-how-to-read-a-scientific-figure": [
    "l 35 175 325 175;l 35 175 35 35;p M35 155L120 145L210 95L325 65;t 180 25 Outcome (units);t 180 195 Time (days);t 180 210 Check axis range and scale",
    "l 35 175 325 175;d 75 125 4;d 95 95 4;d 115 115 4;d 255 75 4;d 275 100 4;d 295 65 4;l 65 112 125 112;l 245 80 305 80;t 95 195 Group A;t 275 195 Group B;t 180 35 Dots are observations, lines are means",
    "l 35 175 325 175;r 65 100 80 75;r 215 70 80 105;l 105 80 105 120;l 95 80 115 80;l 95 120 115 120;l 255 40 255 100;l 245 40 265 40;l 245 100 265 100;t 180 195 Check whether error bars are SD, SE or CI",
    "r 65 70 90 100;r 205 50 90 120;t 110 60 10 units;t 250 40 12 units;t 180 195 Difference = 2 units, whatever axis range"
  ],
  "depth-scientific-literacy-understanding-measurement-uncertainty": [
    "l 35 105 325 105;d 155 105 5;d 170 105 5;d 180 105 5;d 190 105 5;d 205 105 5;t 180 75 Repeated readings vary;t 180 175 Spread describes consistency under conditions",
    "c 90 105 50;c 90 105 25;c 270 105 50;c 270 105 25;d 85 100 4;d 95 110 4;d 90 105 4;d 290 80 4;d 295 85 4;d 285 85 4;t 90 175 Accurate and precise;t 270 175 Precise but biased",
    "b 25 65 145 55 Independent u₁;b 190 65 145 55 Independent u₂;t 180 155 Combined u=√(u₁²+u₂²);t 180 195 Correlated errors need covariance",
    "p M85 165H175V45Z;t 130 185 3 mm;t 205 105 4 mm;t 115 85 5 mm;t 180 210 √(3²+4²) = 5 mm standard uncertainty"
  ],
  "plus-scientific-literacy-understanding-systematic-reviews": [
    "b 25 45 145 45 Population;b 190 45 145 45 Intervention;b 25 115 145 45 Comparator;b 190 115 145 45 Outcome;t 180 195 Define question and eligibility before searching",
    "p M35 45H325L255 100L215 165H145L105 100Z;t 180 65 Retrieved records;t 180 100 Screen criteria;t 180 150 Included studies;t 180 195 Document search and exclusions",
    "b 25 55 145 55 Study A: bias;b 190 55 145 55 Study B: same bias;t 180 150 Shared weakness is not cured by count;t 180 195 Appraise methods and relevance",
    "b 25 55 145 55 Narrative synthesis;b 190 55 145 55 Quantitative pool;t 180 150 Choose according to comparability;t 180 195 Report heterogeneity and missing evidence"
  ],
  "plus-scientific-literacy-why-pre-registration-matters": [
    "l 35 105 325 105;d 65 105 6;d 180 105 6;d 295 105 6;t 65 85 Plan;t 180 85 Collect;t 295 85 Analyze;t 180 175 Timestamp plan before results",
    "c 180 45 12;a 180 57 65 125;a 180 57 180 125;a 180 57 295 125;b 15 125 100 45 Exclude;b 130 125 100 45 Transform;b 245 125 100 45 Select model;t 180 195 Flexibility can favor chance findings",
    "b 25 55 145 55 Prespecified plan;b 190 55 145 55 Actual analysis;t 180 150 Record reason for deviation;t 180 195 Label exploratory analyses",
    "b 25 55 145 55 Plan timestamp;b 190 55 145 55 Study execution;t 97 150 Transparency;t 262 150 Actual validity;t 180 195 Preregistration cannot fix poor design"
  ],
  "plus-scientific-literacy-how-operational-definitions-shape-research": [
    "b 105 35 150 45 Sleep quality;a 180 80 95 125;a 180 80 265 125;b 25 125 140 45 Questionnaire;b 195 125 140 45 Sleep efficiency;t 180 205 Abstract concept becomes observable variable",
    "c 90 105 45;c 270 105 45;d 90 105 5;d 290 85 5;t 90 165 Intended measure;t 270 165 Wrong construct;t 180 195 Reliable readings can lack construct validity",
    "b 25 55 145 55 Steps per day;b 190 55 145 55 Aerobic fitness;t 180 150 Both relate to activity differently;t 180 195 Different definitions can yield different results",
    "b 25 45 145 45 Repeatability;b 190 45 145 45 Criterion validity;b 25 115 145 45 Other indicators;b 190 115 145 45 Across populations;t 180 195 Test proxy rather than assuming equivalence"
  ],
  "plus-scientific-literacy-why-negative-results-are-informative": [
    "b 25 55 95 55 Near zero;b 132 55 95 55 Not significant;b 239 55 95 55 Opposite result;t 180 165 Different meanings of negative finding",
    "l 35 65 325 65;l 45 105 315 105;l 155 145 205 145;d 180 105 5;d 180 145 5;t 180 45 Zero effect;t 180 175 Wide vs narrow confidence interval",
    "l 35 75 325 75;l 35 65 35 85;l 325 65 325 85;d 180 75 5;l 165.5 145 194.5 145;d 180 145 5;t 35 55 −10;t 325 55 +10;t 180 130 −1 to +1;t 180 195 Narrow interval constrains smaller effects",
    "b 25 55 145 55 Failed prediction;a 170 82 190 82;b 190 55 145 55 Revise theory;t 180 150 Report methods and uncertainty;t 180 195 Avoid repeating uninformative failures"
  ],
  "plus-scientific-literacy-how-conflicts-of-interest-are-managed": [
    "b 25 55 145 55 Relationship;b 190 55 145 55 Decision affected;t 180 150 Assess relevance and influence;t 180 195 Risk depends on connection to work",
    "b 25 45 145 45 Independent analysis;b 190 45 145 45 Prespecified outcomes;b 25 115 145 45 Monitoring;b 190 115 145 45 Publication rights;t 180 195 Structural safeguards limit control",
    "b 25 55 95 55 Disclose;a 120 82 132 82;b 132 55 95 55 Assess;a 227 82 239 82;b 239 55 95 55 Recuse if needed;t 180 175 Disclosure alone may be insufficient",
    "r 35 55 130 105;r 195 55 130 105;l 45 85 155 85;l 45 115 155 115;l 205 85 315 85;l 205 115 315 115;t 100 180 Registered plan;t 260 180 Published report;t 180 205 Check safeguards were implemented"
  ],
  "plus-scientific-literacy-how-to-evaluate-a-causal-claim": [
    "b 105 35 150 45 Same target group;a 180 80 95 125;a 180 80 265 125;b 25 125 140 45 Outcome if treated;b 195 125 140 45 Outcome if untreated;t 180 205 Counterfactual outcomes cannot both be observed",
    "b 115 35 130 40 Common cause;a 180 75 90 125;a 180 75 270 125;b 25 125 130 45 Exposure;b 205 125 130 45 Outcome;a 155 147 205 147;t 180 205 Confounding distorts observed association",
    "b 25 55 145 55 Random assignment;b 190 55 145 55 Observational design;t 97 150 Exchangeability;t 262 150 Adjustment / assumptions;t 180 195 Each design has identification conditions",
    "b 25 45 145 45 Effect estimate;b 190 45 145 45 Uncertainty;b 25 115 145 45 Bias risks;b 190 115 145 45 Target population;t 180 195 Association plus mechanism does not prove causality"
  ],
  "plus-scientific-literacy-what-meta-analysis-combines": [
    "b 25 55 145 55 Study A: risk ratio;b 190 55 145 55 Study B: risk ratio;a 97 110 180 150;a 262 110 180 150;t 180 175 Pool comparable estimands;t 180 200 Convert to common measure first",
    "l 35 65 325 65;l 35 145 325 145;l 145 65 215 65;d 180 65 8;l 75 145 285 145;d 180 145 4;t 180 40 Precise study gets more weight;t 180 195 Weight ∝ inverse sampling variance",
    "r 35 75 290 50;f 35 75 217.5 50;t 143 105 Weight 3 × effect 2;t 288 105 1 × 4;t 180 55 Weighted sum = 10;t 180 195 Divide by total weight 4 → 2.5 units",
    "l 35 35 35 175;l 180 35 180 175;l 65 65 145 65;d 105 65 5;l 195 105 295 105;d 245 105 5;l 130 145 230 145;d 180 145 5;t 180 195 Heterogeneity may require between-study variance"
  ],
  "plus-scientific-literacy-how-publication-bias-distorts-evidence": [
    "r 35 55 130 105;r 195 55 130 105;d 65 85 5;d 95 105 5;d 125 125 5;d 225 85 5;t 100 180 All studies;t 260 180 Visible subset;t 180 205 Availability can depend on result",
    "l 35 175 325 175;p M35 155Q120 35 205 155;p M155 155Q235 35 315 155;t 105 35 All evidence;t 255 35 Selected evidence;t 180 195 Missing weak studies may inflate pooled effects",
    "p M180 35L55 175H305Z;d 180 50 4;d 165 80 4;d 205 90 4;d 240 125 4;d 270 150 4;d 190 145 4;t 180 195 Funnel asymmetry is not proof of publication bias",
    "b 25 45 145 45 Trial registries;b 190 45 145 45 Protocols;b 25 115 145 45 Unpublished results;b 190 115 145 45 Sensitivity analysis;t 180 195 Search missing evidence and compare outcomes"
  ],
  "plus-scientific-literacy-understanding-effect-sizes": [
    "r 65 95 90 75;r 205 60 90 110;t 110 85 Outcome A;t 250 50 Outcome B;t 180 195 Quantify magnitude, not merely significance",
    "r 65 70 90 100;r 205 90 90 80;t 110 60 10% risk;t 250 80 8% risk;t 180 175 Absolute reduction: 2 percentage points;t 180 200 Relative reduction: 20%",
    "b 25 65 145 55 Mean difference 4;b 190 65 145 55 Pooled SD 8;t 180 155 Standardized difference = 4/8;t 180 195 0.5 SD units",
    "l 35 105 325 105;l 125 95 125 115;l 220 95 220 115;l 125 105 220 105;d 172 105 5;l 270 65 270 145;t 270 55 Meaningful size;t 180 195 Small p-value need not imply useful effect"
  ]
};
window.LumenSlideArtBatch22Render=function renderer(c,cls="cover",step=-1){
 const data=window.LumenSlideArtBatch22;if(step<0||!Object.prototype.hasOwnProperty.call(data,c.id)||!data[c.id][step])return "";
 const E=v=>String(v).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));const ink="#345746",gold="#d7bd86",bg="#f1eadc",accent="#a45d49",green="#98b6a2";
 const t=(x,y,s,size=12)=>`<text x="${x}" y="${y}" text-anchor="middle" font-family="system-ui,sans-serif" font-size="${size}" fill="${ink}">${E(s)}</text>`;
 const line=(x,y,u,w,col=ink)=>`<line x1="${x}" y1="${y}" x2="${u}" y2="${w}" stroke="${col}" stroke-width="2" stroke-linecap="round"/>`;let body="";
 for(const cmd of data[c.id][step].split(";")){const [op,...v]=cmd.trim().split(" ");const [x,y,u,w]=v.map(Number);
 if(op==="t"){const s=v.slice(2).join(" ");body+=t(x,y,s,Math.min(12,Math.max(8,Math.floor((2*Math.min(x,360-x)-4)/(Math.max(s.length,1)*.55)))));}
 else if(["b","r","f"].includes(op)){body+=`<rect x="${x}" y="${y}" width="${u}" height="${w}" rx="3" fill="${op==="f"?green:gold}" fill-opacity="${op==="b"?".65":".85"}" stroke="${ink}" stroke-width="1.3"/>`;if(op==="b"){const s=v.slice(4).join(" ");body+=t(x+u/2,y+w/2+4,s,Math.min(12,Math.max(8,Math.floor((u-6)/(Math.max(s.length,1)*.55)))));}}
 else if(op==="c"||op==="d")body+=`<circle cx="${x}" cy="${y}" r="${u}" fill="${op==="d"?accent:gold}" fill-opacity="${op==="d"?1:.18}" stroke="${ink}" stroke-width="1.7"/>`;
 else if(op==="l")body+=line(x,y,u,w);
 else if(op==="a"){const theta=Math.atan2(w-y,u-x),h=8;body+=line(x,y,u,w,accent)+`<path d="M${u-h*Math.cos(theta-.55)} ${w-h*Math.sin(theta-.55)}L${u} ${w}L${u-h*Math.cos(theta+.55)} ${w-h*Math.sin(theta+.55)}" stroke="${accent}" stroke-width="2" fill="none"/>`;}
 else if(op==="p")body+=`<path d="${E(v.join(" "))}" stroke="${ink}" stroke-width="2" fill="none" stroke-linejoin="round"/>`;else throw Error("Unknown art primitive "+op);}
 const title=c.slides[step].title,desc=c.slides[step].text;return `<svg class="${E(cls)}" viewBox="0 0 360 220" role="img" aria-label="${E(title)}" preserveAspectRatio="xMidYMid meet"><title>${E(title)}</title><desc>${E(desc)}</desc><rect width="360" height="220" fill="${bg}"/>${body}</svg>`;
};
(function(){const prior=window.LumenQualityArt;window.LumenQualityArt=function(c,cls='cover',step=-1){return window.LumenSlideArtBatch22Render(c,cls,step)||prior(c,cls,step);};})();
