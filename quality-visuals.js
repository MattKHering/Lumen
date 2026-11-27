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
