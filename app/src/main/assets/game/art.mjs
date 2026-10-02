const INK='#75585b';
export function svg(body,box='0 0 48 48'){return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${box}" fill="none" stroke="${INK}" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;}
const paths={
 heart:'<path fill="#e9a6af" d="M24 39S5 28 5 16C5 5 20 3 24 14 29 3 43 5 43 16 43 28 24 39 24 39Z"/>',
 star:'<path fill="#eed085" d="m24 4 6 13 14 2-10 10 2 15-12-7-12 7 2-15L4 19l14-2Z"/>',
 coin:'<circle cx="24" cy="24" r="19" fill="#f3d18c"/><circle cx="24" cy="24" r="13" stroke="#d1a963"/><path d="m24 15 2 6 7 1-5 4 1 7-5-4-6 4 2-7-5-4 7-1Z" fill="#ffe8ab" stroke="#c99d61"/>',
 home:'<path fill="#e9b6a8" d="M8 22h32v21H8z"/><path fill="#b4a1cb" d="m3 23 21-18 21 18Z"/><path d="M20 43V28h9v15" fill="#fff2d6"/><rect x="11" y="27" width="6" height="7" rx="2" fill="#e2efd9"/>',
 cafe:'<path fill="#ecd3a2" d="M8 19h32v24H8z"/><path fill="#e5a2b1" d="M4 20 9 8h30l5 12c0 8-10 8-10 0 0 8-10 8-10 0 0 8-10 8-10 0 0 8-10 8-10 0Z"/><rect x="12" y="28" width="10" height="10" rx="2" fill="#fff5df"/><path d="M29 43V27h8v16"/>',
 leaf:'<path fill="#acc69b" d="M9 38C-2 10 25 8 41 7c1 18-9 40-31 30Z"/><path d="m9 40 22-23m-12 11-1-8m1 8 9 1"/>',
 garden:'<path fill="#b9cfa2" d="M6 38c-9-14 4-24 12-20-8-21 25-22 18-1 17-2 16 25 0 23Z"/><path d="M24 44V20m0 10 8-6m-8 11-8-7"/>',
 snack:'<path fill="#edc896" d="M10 20h28l-4 23H14Z"/><path fill="#f4b8be" d="M7 20c-2-7 3-11 9-10 1-13 20-10 18 0 9-1 14 12 6 15H11c-3 0-4-2-4-5Z"/><path d="m17 30 1 7m6-7v7m7-7-1 7"/><circle cx="24" cy="7" r="4" fill="#de8394"/>',
 berry:'<path fill="#e79ca0" d="M7 17c0-14 34-14 34 0 0 13-12 26-17 26S7 30 7 17Z"/><path fill="#aac69b" d="m24 13-11-7 10 1 3-7 3 8 10-2-7 10Z"/><path d="m15 21 1 1m13-2 1 1m-8 8 1 1m8 3 1 1m-11 3 1 1" stroke="#fff1c6" stroke-width="3"/>',
 water:'<path fill="#acd4df" d="M24 3S7 21 7 30a17 17 0 0 0 34 0C41 21 24 3 24 3Z"/><path d="M14 29c0 5 3 9 7 10" stroke="#effaff" stroke-width="4"/>',
 moon:'<path fill="#efd28f" d="M32 4C12 0 0 19 9 35c11 19 37 10 36-8C22 38 15 12 32 4Z"/><path d="m38 6 2 5 5 2-5 2-2 5-2-5-5-2 5-2Z" fill="#c7b3df"/>',
 ball:'<circle cx="24" cy="24" r="20" fill="#e6b2b9"/><path d="M7 13c12 6 14 20 12 31M23 4c-5 8-5 13 1 20s13 5 20 5M39 11c-2 10-10 14-15 13" fill="#ead3a2"/>',
 shirt:'<path fill="#b7a2d4" d="m14 6 10 5 10-5 12 13-9 7-4-5v23H15V21l-4 5-9-7Z"/><path d="M17 8c0 10 14 10 14 0"/><path fill="#f5d6bb" d="m24 22 3 5 6 1-5 4 1 6-5-3-5 3 1-6-5-4 6-1Z"/>',
 bubbles:'<circle cx="19" cy="28" r="15" fill="#c4dae5"/><circle cx="34" cy="12" r="9" fill="#d6c3e6"/><circle cx="38" cy="36" r="6" fill="#ecc8cf"/><path d="M12 21q2-4 6-4m13-8 3-1" stroke="#fff" stroke-width="3"/>',
 sound:'<path fill="#ccb8da" d="M6 18h8L27 7v34L14 30H6Z"/><path d="M34 16q10 8 0 16m6-24q16 16 0 32"/>',
 mute:'<path fill="#ccb8da" d="M6 18h8L27 7v34L14 30H6Z"/><path d="m34 18 10 12m0-12L34 30"/>',
 help:'<circle cx="24" cy="24" r="20" fill="#e6dce9"/><path d="M17 17c0-10 16-10 16 0 0 6-9 6-9 12"/><circle cx="24" cy="36" r="1.5" fill="#75585b"/>',
 smile:'<circle cx="24" cy="24" r="20" fill="#f2d7a2"/><path d="M13 27q11 15 22 0"/><path d="M16 17v3m16-3v3" stroke-width="3.5"/>',
 flower:'<path d="M24 43V23m0 13-10-5m10 7 9-9" stroke="#91aa83"/><path fill="#e8b0c7" d="M24 10C12-5 2 14 14 19-1 26 18 38 23 25c8 16 22-1 12-7C48 10 28-1 24 10Z"/><circle cx="24" cy="18" r="6" fill="#f6d99d"/>',
 rug:'<ellipse cx="24" cy="26" rx="22" ry="13" fill="#d5bbdf"/><ellipse cx="24" cy="26" rx="15" ry="8" stroke="#f9e6f3"/><path d="m24 21 2 3 4 2-4 1-2 4-2-4-4-1 4-2Z" fill="#f9e6f3" stroke="none"/>',
 lights:'<path d="M3 5q21 26 42 0"/><path d="M11 12v7m13 0v7m13-14v7"/><circle cx="11" cy="23" r="5" fill="#f8d698"/><circle cx="24" cy="31" r="5" fill="#e7b4c1"/><circle cx="37" cy="23" r="5" fill="#bdcfa5"/>'
};
export function icon(name){return svg(paths[name]||paths.heart);}
export function character(info,state,headOnly=false){
 const {kind,color,inner}=info;let ears='',tail='';
 if(kind==='bunny')ears=`<path d="M48 54C27-16 72-8 70 53M83 52C76-11 119-16 105 59" fill="${color}"/><path d="M53 39Q43 3 56 9L63 42M92 39Q94 1 104 9L99 45" stroke="${inner}" stroke-width="9"/>`;
 if(kind==='cat')ears=`<path d="m28 71 3-45 37 27m27-1 30-28 3 47" fill="${color}"/><path d="m38 57 1-19 15 16m52 1 13-17 2 19" fill="${inner}" stroke="none"/>`;
 if(kind==='bear'||kind==='panda')ears=`<circle cx="39" cy="49" r="20" fill="${color}"/><circle cx="117" cy="49" r="20" fill="${color}"/><circle cx="39" cy="49" r="11" fill="${inner}" stroke="none"/><circle cx="117" cy="49" r="11" fill="${inner}" stroke="none"/>`;
 if(kind==='panda')tail=`<path d="M105 171c48 10 53-23 33-30-13-3-19 17-40 4" fill="${color}" stroke-width="12"/><path d="m119 168 7-18m7 15 9-13" stroke="${inner}" stroke-width="9"/>`;
 if(kind==='cat')tail=`<path d="M105 171q47 5 29-31" stroke="${color}" stroke-width="16"/>`;
 let eyes=`<ellipse cx="56" cy="82" rx="7" ry="9" fill="#624e53" stroke="none"/><ellipse cx="100" cy="82" rx="7" ry="9" fill="#624e53" stroke="none"/><circle cx="58" cy="79" r="2.4" fill="white" stroke="none"/><circle cx="102" cy="79" r="2.4" fill="white" stroke="none"/>`;
 let mouth='<path d="M69 102q9 12 18 0" fill="#dc91a1"/>';
 if(state.emotion==='sleepy'){eyes='<path d="M48 84q8 7 16 0m28 0q8 7 16 0"/>';mouth='<path d="M73 104h10"/>';}
 if(state.emotion==='sad'){eyes='<path d="m49 76 13-4m32 0 13 4"/>'+eyes;mouth='<path d="M71 108q7-9 15 0"/>';}
 if(state.emotion==='love')eyes='<path d="M56 89S39 77 48 73q6-3 8 4c6-12 18-4 0 12Zm44 0S83 77 92 73q6-3 8 4c6-12 18-4 0 12Z" fill="#d9839b" stroke="none"/>';
 if(state.emotion==='silly'){eyes='<path d="m49 77 12 7-12 6m45-13 12 7-12 6"/>';mouth='<path d="M69 101q9 15 18 0"/><path d="M76 106v6q8 10 10-4" fill="#e6a0b2"/>';}
 if(state.emotion==='surprise')mouth='<ellipse cx="78" cy="106" rx="5" ry="7" fill="#99737b"/>';
 const mask=kind==='panda'?'<path d="M31 83q12-34 39-6l-6 23q-28 10-33-17Zm56-6q28-28 39 6-5 27-33 17Z" fill="#fff0d7" stroke="none"/>':'';
 let hat='';if(state.hat==='bow')hat='<path d="M103 46c-24-25-24 21-1 6 27 22 27-25 2-6Z" fill="#eaa4b7"/><circle cx="104" cy="50" r="5" fill="#f4cbd6"/>';
 if(state.hat==='flower')hat='<g transform="translate(99 28) scale(.7)">'+paths.flower+'</g>';
 if(state.hat==='crown')hat='<path d="m51 49-5-24 18 12 14-21 14 21 17-12-5 24Z" fill="#f5d183"/><circle cx="78" cy="39" r="4" fill="#e5a1b4"/>';
 return svg(`<g class="avatar">${headOnly?'':'<ellipse cx="78" cy="195" rx="44" ry="8" fill="#674e5420" stroke="none"/>'+tail+'<path class="leg-left" d="M57 174v14q-18 12 3 12h10l3-28" fill="'+color+'"/><path class="leg-right" d="M87 172l3 28h12q17-1 0-12v-14" fill="'+color+'"/>'+'<path class="arm-left" d="M48 132q-18 3-20 26c3 10 16 7 22-8" fill="'+color+'"/><path class="arm-right" d="M108 132q19 3 21 26c-4 10-17 7-22-8" fill="'+color+'"/>'+'<path d="M48 126q30-14 60 0l4 48q-34 18-68 0Z" fill="'+state.outfit+'"/><path d="M64 127q14 13 28 0" stroke="#fff8"/><path d="m78 141 4 8 9 1-7 6 2 9-8-5-8 5 2-9-7-6 9-1Z" fill="#fff3d9" stroke="none"/>'}<g class="head">${ears}<path d="M24 78c0-50 108-50 108 0 0 29-22 48-54 48S24 108 24 78Z" fill="${color}"/>${mask}<ellipse cx="40" cy="99" rx="10" ry="6" fill="${inner}" opacity=".6" stroke="none"/><ellipse cx="116" cy="99" rx="10" ry="6" fill="${inner}" opacity=".6" stroke="none"/><g class="eyes">${eyes}</g><path d="M73 94q5-4 10 0-5 8-10 0Z" fill="#ab7f87" stroke="none"/><g class="mouth">${mouth}</g>${hat}</g></g>`,headOnly?'14 14 128 120':'0 0 156 207');
}
const rect=(x,y,w,h,c,r=0,stroke='#c3a391',sw=3)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${r}" fill="${c}" stroke="${stroke}" stroke-width="${sw}"/>`;
const ellipse=(x,y,rx,ry,c)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" stroke="none"/>`;
const use=(name,x,y,size=48)=>`<g transform="translate(${x} ${y}) scale(${size/48})">${paths[name]}</g>`;
function plant(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})"><path d="M0 0v-90" stroke="#8f9e7c" stroke-width="5"/><path d="M0-55q-60-50-44-2 12 18 44 2M0-35q57-66 47-15-8 28-47 15M0-76q-23-54 4-48 27 13-4 48" fill="#a3ba8c" stroke="#899f79" stroke-width="2"/><path d="m-25-3 6 44h38l7-44Z" fill="#d6a991" stroke="#b08a7b" stroke-width="3"/>${rect(-29,-8,59,13,'#e5bba5',5)}</g>`;}
function windowArt(x,y,w=230,h=230){return `<g>${rect(x-9,y-9,w+18,h+18,'#fdf2de',w/2,'#d0b29e',4)}${rect(x,y,w,h,'#d5e7dc',w/2,'#dec4ac',3)}<path d="M${x+12} ${y+h*.7}q55-48 96-14t${w-119} 0v${h*.27}H${x+12}Z" fill="#b8ceac" stroke="none"/>${ellipse(x+w*.7,y+h*.24,22,22,'#fff2c4')}<path d="M${x+w/2} ${y}v${h}M${x} ${y+h*.56}h${w}" stroke="#fdf2de" stroke-width="9"/>${rect(x-19,y+h,w+38,15,'#f9ebd7',6)}</g>`;}
function floor(){let s=rect(0,450,1280,270,'#dfbea0',0,'none');for(let y=452;y<720;y+=57){s+=`<path d="M0 ${y}h1280" stroke="#ceaa90" stroke-width="2"/>`;for(let x=(y%2)*180;x<1280;x+=260)s+=`<path d="M${x} ${y}v57" stroke="#ceaa90" stroke-width="2"/>`;}return s;}
function wall(base='#f3e4d5'){let s=rect(0,0,1280,450,base,0,'none');for(let x=0;x<1280;x+=86)s+=rect(x,0,42,447,'#ffffff16',0,'none');return s+rect(0,431,1280,23,'#f9efdf',0,'#d5b8a4',2)+floor();}
function home(){return wall()+`${windowArt(515,166,238,232)}
<path d="M485 163q-24 110-12 214l57-4q-35-134 4-210m198 0q37 142 3 210l66 4q10-114-17-214" fill="#c7b5cb" stroke="#ad96b4" stroke-width="3"/>
<path d="M466 156h342" stroke="#ab8a7c" stroke-width="7"/>
${rect(65,224,244,214,'#eed6b7',20)}${rect(82,244,211,160,'#f9e9d2',12)}<path d="M88 303h199M88 361h199" stroke="#cfad92" stroke-width="6"/>
${rect(99,265,24,34,'#c2b1d4',3)}${rect(128,252,17,47,'#a1b9a1',3)}${rect(151,261,22,38,'#e5b2b4',3)}${use('star',218,254,38)}
${use('snack',107,320,37)}${rect(199,317,60,38,'#e4b5bc',8)}<path d="M226 320v30" stroke="#fbe8e0" stroke-width="6"/>
${rect(107,375,46,27,'#a2c2b9',8)}${rect(189,371,73,33,'#cbb7d6',8)}${use('heart',211,378,22)}
${ellipse(587,559,269,78,'#bbcca5')}${ellipse(587,559,237,64,'#c9d8b4')}<ellipse cx="587" cy="559" rx="212" ry="53" stroke="#f3ead1" stroke-width="3" stroke-dasharray="7 9"/>
${rect(312,365,217,104,'#c6b0cc',31,'#ad92b9',3)}${rect(317,418,217,74,'#b99fc4',22,'#a890b2',3)}${rect(302,405,40,96,'#cdb8d2',18,'#a890b2',3)}${rect(504,405,39,96,'#cdb8d2',18,'#a890b2',3)}${rect(331,489,17,20,'#b38c79',4)}${rect(504,489,17,20,'#b38c79',4)}${rect(351,383,65,55,'#eee0cb',14,'#d1bbaa',2)}${use('flower',361,389,42)}${rect(431,384,56,54,'#e5bac3',14,'#c79dab',2)}
${rect(916,303,273,208,'#e8caae',20,'#bb967e',4)}${rect(924,332,257,170,'#fdf0d8',13,'#d6b8a1',2)}${rect(935,343,104,63,'#fffaf0',19,'#dfc9b5',2)}${rect(1051,343,114,63,'#fffaf0',19,'#dfc9b5',2)}${rect(925,409,257,111,'#a9c4c1',16,'#8baaa6',3)}<path d="M941 426h224m-224 15h224" stroke="#d2e1d5" stroke-width="3" stroke-dasharray="9 7"/>${use('moon',1060,453,43)}${rect(916,513,17,27,'#b38c79',4)}${rect(1172,513,17,27,'#b38c79',4)}
${rect(839,236,74,137,'#f9e3be',37,'#c3a18b',3)}${ellipse(876,273,20,20,'#efd18e')}${use('star',863,260,26)}<path d="M876 374v108m-24 0h48" stroke="#b3977f" stroke-width="5"/>
${plant(82,477,.8)}${plant(1222,484,.67)}${use('ball',681,556,55)}
${rect(982,168,134,95,'#fff4df',14,'#c2a28d',4)}${ellipse(1049,213,29,28,'#e7c5cb')}${use('heart',1033,196,33)}
<path d="M536 162q89 75 181 0" stroke="#ba9c8a" stroke-width="2"/>${use('star',555,188,22)}${use('star',612,202,22)}${use('star',670,188,22)}
<g transform="translate(45 569)">${ellipse(35,38,34,12,'#bea18e')}${use('snack',8,0,49)}</g>`;}
function cafe(){let tiles='';for(let y=455;y<720;y+=54)for(let x=0;x<1280;x+=64)tiles+=rect(x,y,64,54,((x/64+y)%2)?'#efdac0':'#f9e8d1',0,'#e4c7ae',1);return wall('#efe4ce')+tiles+`
${windowArt(87,191,216,213)}${windowArt(986,191,213,213)}
<path d="M62 172h1160v50q-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0-40 42-80 0Z" fill="#db9fac" stroke="#c18b96" stroke-width="3"/>
${rect(372,224,526,186,'#d0b49b',12)}${rect(392,240,489,134,'#fff0d7',9)}<path d="M397 308h478" stroke="#c7a387" stroke-width="7"/>
${[414,474,536,604,667,728,795,841].map((x,i)=>rect(x,264,29,39,['#b7c8a5','#d7b1c8','#e5ba90'][i%3],7)+rect(x-2,261,33,7,'#f2dbc0',3)).join('')}
${[421,501,585,671,767,833].map((x,i)=>use(i%2?'snack':'berry',x,328,35)).join('')}
${rect(346,369,577,141,'#e1b0a8',14,'#bd9289',3)}${rect(334,367,601,25,'#f9e9d6',10,'#c7a187',3)}${rect(373,410,156,72,'#eec8be',10,'#d1a299',2)}${rect(548,410,155,72,'#eec8be',10,'#d1a299',2)}${rect(722,410,170,72,'#eec8be',10,'#d1a299',2)}${use('heart',430,430,33)}${use('snack',609,427,38)}${use('heart',790,430,33)}
${rect(400,285,159,80,'#d9e3d666',18,'#b2b9a7',3)}${use('snack',423,319,39)}${use('snack',485,319,39)}${rect(395,356,170,11,'#ebd0b1',3)}
${rect(721,304,113,61,'#a9c1b7',10,'#879f94',3)}${rect(733,315,37,27,'#697e74',4)}<circle cx="809" cy="326" r="9" fill="#f9e2ba"/><path d="M786 324v23h13" stroke-width="5"/>${rect(783,345,25,18,'#fff4dc',5)}
${ellipse(160,565,92,24,'#d6b99a')}${rect(149,488,21,102,'#c19a7f',7)}${ellipse(160,478,103,37,'#e2bea0')}${ellipse(160,471,103,33,'#fbe7c3')}${use('snack',116,425,50)}${use('water',185,436,34)}
${ellipse(1090,565,99,24,'#d6b99a')}${rect(1080,481,22,105,'#c19a7f',6)}${ellipse(1090,475,112,36,'#dfb797')}${ellipse(1090,468,112,31,'#fbe7c3')}${use('snack',1034,422,51)}${use('flower',1105,407,55)}
${rect(51,519,51,65,'#b7c6a5',11)}${rect(223,518,53,65,'#b7c6a5',11)}${rect(1192,516,53,65,'#b7c6a5',11)}
${rect(580,104,120,53,'#fff4df',17,'#cfb398',3)}<text x="640" y="125" text-anchor="middle" fill="#b18c7e" font-family="Verdana" font-size="10" letter-spacing="2" stroke="none">FRESHLY BAKED</text><text x="640" y="146" text-anchor="middle" fill="#946d74" font-family="Georgia" font-size="20" stroke="none">with love</text>
${plant(949,461,.57)}${use('berry',288,567,39)}`;}
function garden(){let flowers='';for(let i=0;i<22;i++){const x=(i*193+43)%1280,y=500+(i*37)%178;flowers+=use(i%3?'flower':'leaf',x,y,16+(i%3)*7);}return rect(0,0,1280,720,'#dcebdc',0,'none')+`
${ellipse(1000,170,67,67,'#f9e9b6')}${ellipse(350,220,330,156,'#c4d8b3')}${ellipse(1002,298,413,158,'#b9d0a3')}
<path d="M0 353q320-87 620 3t660-10v374H0Z" fill="#b4c99c" stroke="none"/>
<path d="M1150 390q-369 10-441 139t-451 191h258q300-13 334-174t370-91" fill="#ecdbb5" stroke="#d5c39c" stroke-width="3"/>
${Array.from({length:18},(_,i)=>`<path d="m${i*78+5} 344v-83l16-17 16 17v92" fill="#f6e7c6" stroke="#c5b794" stroke-width="2"/>`).join('')}<path d="M0 291h1280M0 324h1280" stroke="#e3d4b3" stroke-width="13"/>
<path d="M205 391q-13-106 1-210l55 3q-14 125 6 213Z" fill="#b99477" stroke="#9c8068" stroke-width="3"/>
${ellipse(219,187,150,104,'#92b180')}${ellipse(127,207,77,68,'#9dbb88')}${ellipse(318,184,78,68,'#9fbe8b')}${ellipse(213,118,101,66,'#aecb96')}
${rect(142,226,160,149,'#eac7a3',16,'#b68e70',4)}<path d="m127 229 95-66 94 66Z" fill="#c5a8c7" stroke="#a589a8" stroke-width="4"/>${rect(172,265,44,58,'#e3ebd0',20,'#b69478',3)}${rect(232,271,44,101,'#caa588',17,'#ab846b',3)}<path d="M238 381v71m34-72v71m-34-51h35m-35 25h35" stroke="#c4a580" stroke-width="7"/>
<path d="M345 235v182m87-216v218" stroke="#a78d70" stroke-width="5"/>${rect(330,414,119,17,'#ead0a8',8,'#b69576',3)}
${ellipse(999,456,161,74,'#96b49c')}${ellipse(999,449,149,64,'#c2ded5')}${ellipse(1020,445,113,38,'#b2d5cb')}<path d="M909 433q14 5 29 0m28 36q14 5 30 0m44-42q15 5 29 0" stroke="#e9f3dc" stroke-width="3"/>
${ellipse(896,469,40,20,'#cfcea9')}${use('flower',878,429,35)}${ellipse(1090,466,31,15,'#cfcea9')}
${rect(532,392,207,37,'#d7b48f',8,'#b29070',3)}${rect(532,434,207,38,'#d7b48f',8,'#b29070',3)}<path d="M551 478v32m169-32v32" stroke="#a58568" stroke-width="9"/>
${rect(59,489,216,97,'#bd9978',15,'#9f8165',3)}${ellipse(168,493,106,32,'#876d5c')}${ellipse(168,490,93,22,'#a18768')}${use('leaf',139,437,57)}
${plant(1175,413,.8)}${flowers}${use('ball',780,540,57)}
<g transform="translate(1113 554)"><ellipse cx="28" cy="23" rx="43" ry="28" fill="#edddad"/><circle cx="0" cy="1" r="15" fill="#edddad"/><circle cx="53" cy="1" r="15" fill="#edddad"/><path d="M12 21q5 5 10 0m11 0q5 5 10 0"/><path d="M23 31q4 5 9 0"/></g>`;}
export function scenery(room){return svg((room==='home'?home():room==='cafe'?cafe():garden()),'0 0 1280 720');}
export function decorArt(room,owned){let s='';if(owned.includes('rug')&&room==='home')s+=`<ellipse cx="626" cy="610" rx="210" ry="64" fill="#d3b9d9" stroke="#b69cc1" stroke-width="3"/><ellipse cx="626" cy="610" rx="181" ry="48" stroke="#f6e5ef" stroke-width="3"/>${use('star',601,585,50)}`;
 if(owned.includes('lights')){s+='<path d="M0 30q320 240 640 0 320 240 640 0" stroke="#aa9079" stroke-width="3"/>';for(let i=0;i<15;i++){let x=i*88+22,y=35+95*Math.sin((x%640)/640*Math.PI);s+=`<path d="M${x} ${y}v16" stroke="#a78c76"/>${ellipse(x,y+22,9,12,['#f4d795','#e1b3c2','#c3d39f'][i%3])}`;}}
 if(owned.includes('flowers'))s+=plant(827,554,.65)+use('flower',795,448,50)+use('flower',839,460,42);return svg(s,'0 0 1280 720');}
