import {svg,icon,character} from './art.mjs';
import {INGREDIENTS,RECIPES} from './play-model.mjs';
const r=(x,y,w,h,c,rad=14)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rad}" fill="${c}" stroke="#aa827d" stroke-width="3"/>`;
const e=(x,y,rx,ry,c)=>`<ellipse cx="${x}" cy="${y}" rx="${rx}" ry="${ry}" fill="${c}" stroke="none"/>`;
const inner=s=>s.replace(/^<svg[^>]*>/,'').replace(/<\/svg>$/,'');
export function propArt(kind,color='#bb9cdd',recipe){
 let b='';const c=color;
 if(kind==='flour')b='<path d="m12 8 3 8-6 25h31l-6-25 3-8Z" fill="#f5e4bd"/><path d="M14 12h20"/><ellipse cx="24" cy="29" rx="9" ry="10" fill="#d8bf90"/><path d="M24 35V23m0 7-5-4m5 1 5-4"/>';
 else if(kind==='milk')b='<path d="m15 3 18 0 5 10v31H10V13Z" fill="#fff9e7"/><path d="M10 14h28v23H10Z" fill="#a5cedd"/><path d="m15 3 5 10h18m-18 0v31"/><path d="M28 20s-5 6-5 9a5 5 0 0 0 10 0c0-3-5-9-5-9Z" fill="#fff7e6" stroke="none"/>';
 else if(kind==='egg')b='<path d="M24 4C13 4 7 24 7 31c0 19 34 19 34 0C41 24 35 4 24 4Z" fill="#f5dfbc"/><path d="M15 26q2-11 7-13" stroke="#fff8e9" stroke-width="4"/>';
 else if(kind==='tomato'||kind==='apple')b=`<path d="M24 13C-3-3-4 43 19 43h10c24 0 21-46-5-30Z" fill="${kind==='tomato'?'#e88b7a':'#e8a2a0'}"/><path d="M24 16V5m0 5q15-12 14 0Z" fill="#98bb87"/><path d="m12 22-1 7" stroke="#ffe9cc" stroke-width="3"/>`;
 else if(kind==='cheese')b='<path d="m8 18 22-14 13 31-34 9Z" fill="#f1cf76"/><path d="m8 18 27 9 8 8m-8-8L30 4"/><circle cx="20" cy="29" r="3" fill="#d7ad57" stroke="none"/><circle cx="28" cy="35" r="3" fill="#d7ad57" stroke="none"/>';
 else if(kind==='carrot')b='<path d="M12 14c-8 12 4 24 26 30-2-23-13-39-26-30Z" fill="#eaaa71"/><path d="m13 15-9-9m13 6L16 2m0 21 7-3m-3 12 7-3" stroke="#9bb581" stroke-width="3"/>';
 else if(kind==='teddy')b=`<circle cx="13" cy="11" r="8" fill="${c}"/><circle cx="35" cy="11" r="8" fill="${c}"/><ellipse cx="24" cy="33" rx="13" ry="13" fill="${c}"/><ellipse cx="24" cy="17" rx="17" ry="14" fill="${c}"/><circle cx="18" cy="15" r="2" fill="#675260"/><circle cx="30" cy="15" r="2" fill="#675260"/><ellipse cx="24" cy="22" rx="6" ry="5" fill="#fff0d6"/><path d="M22 20h4l-2 3Z" fill="#675260"/><circle cx="11" cy="37" r="7" fill="${c}"/><circle cx="37" cy="37" r="7" fill="${c}"/>`;
 else if(kind==='book')b=`<path d="M4 7q13-4 20 2 8-6 20-2v33q-12-5-20 1-9-6-20-1Z" fill="${c}"/><path d="M24 9v32M9 16h8m-8 6h8m14-6h7m-7 6h7" stroke="#fff0d6"/><path d="m34 28 2 3 4 1-3 2v4l-3-2-3 2v-4l-3-2 4-1Z" fill="#f4d08b" stroke="none"/>`;
 else if(kind==='pillow')b=`<path d="M5 8q19 5 38 0-5 16 0 32-19-5-38 0 5-16 0-32Z" fill="${c}"/><path d="m24 15 3 6 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1Z" fill="#fff0d6" stroke="none"/>`;
 else if(kind==='block')b=`<path d="m4 12 19-10 21 10v28l-20 7L4 37Z" fill="${c}"/><path d="m4 12 20 9 20-9M24 21v26"/><path d="m30 24 8-3v10l-8 3Z" fill="#ffe7ad" stroke="none"/>`;
 else if(kind==='mug')b=`<path d="M32 17h5c13 0 9 18-3 18" fill="none" stroke-width="5"/><path d="M6 14h29v21c0 13-29 13-29 0Z" fill="${c}"/><ellipse cx="20.5" cy="14" rx="14.5" ry="5" fill="#b4927e"/><path d="M16 7q-5-4 0-6m10 6q-5-4 0-6" stroke="#c4aaa0"/>`;
 else if(kind==='rug')b=`<ellipse cx="24" cy="28" rx="23" ry="14" fill="${c}"/><ellipse cx="24" cy="28" rx="17" ry="10" stroke="#fff1d9"/><path d="m24 21 3 5 6 2-6 2-3 5-3-5-6-2 6-2Z" fill="#fff1d9" stroke="none"/>`;
 else if(kind==='chair')b=`${r(7,3,34,29,c,8)}<path d="M9 32v14m30-14v14" stroke-width="5"/>${r(4,28,40,10,c,5)}<path d="M14 10h20" stroke="#fff6"/>`;
 else if(kind==='table')b=`<path d="M9 24v21m30-21v21" stroke="#ae8a71" stroke-width="6"/><ellipse cx="24" cy="20" rx="23" ry="11" fill="${c}"/><ellipse cx="24" cy="17" rx="23" ry="10" fill="${c}"/>`;
 else if(kind==='dish'){
 const recipeColor=RECIPES.find(r=>r.id===recipe)?.color||'#c8b5dc';b='<ellipse cx="24" cy="36" rx="23" ry="9" fill="#fff1d7"/>';
 if(['smoothie','applemilk'].includes(recipe))b+=`<path d="m12 9 4 34h18l4-34Z" fill="${recipeColor}"/><path d="m27 27 3-24 9-2" stroke="#99bca4" stroke-width="4"/><path d="M13 12h24"/>`;
 else if(['cake','carrotcake'].includes(recipe))b+=`<path d="M8 19h32v17H8Z" fill="${recipeColor}"/><path d="M8 19q2-7 8-3 3-8 9-2 5-6 15 5v6q-6 6-12 0-5 8-9 0-5 6-11 0Z" fill="#fff4df"/><circle cx="24" cy="12" r="5" fill="#e59aab"/>`;
 else if(recipe==='pizza')b+=`<ellipse cx="24" cy="27" rx="21" ry="13" fill="#e5ba83"/><ellipse cx="24" cy="25" rx="17" ry="9" fill="#eece83"/><circle cx="16" cy="25" r="3" fill="#df8e7e"/><circle cx="29" cy="23" r="3" fill="#df8e7e"/><path d="m22 29 2-4m11 2-3 3" stroke="#93b681"/>`;
 else if(recipe==='pancakes')b+=[32,27,22].map(y=>`<ellipse cx="24" cy="${y}" rx="18" ry="7" fill="#e9bc80"/>`).join('')+'<path d="M15 20q6-5 17 0l-1 6-9-2-3 7Z" fill="#c49a70" stroke="none"/><path d="m21 16 9 1-2 5-9-1Z" fill="#f9dfa3"/>';
 else b+=`<path d="M5 24h38q-2 21-19 18Q7 44 5 24Z" fill="${recipeColor}"/><ellipse cx="24" cy="24" rx="19" ry="7" fill="#d5cd98"/><circle cx="17" cy="23" r="4" fill="#e49582"/><circle cx="28" cy="24" r="4" fill="#a5ba85"/>`;
 }else return icon(kind);
 return svg(b);
}
function backdrop(color){let b=r(0,0,1280,465,color,0)+r(0,450,1280,270,'#e8ceac',0);for(let y=470;y<720;y+=60)b+=`<path d="M0 ${y}h1280" stroke="#d7b996"/>`;return b;}
export function roomArt(room){let b='';if(room==='kitchen'){
 b=backdrop('#f5e5cf')+r(95,148,227,365,'#b9d6c8',30)+r(108,162,201,124,'#dcebdd',21)+r(108,299,201,198,'#c9e1d2',20)+'<path d="M287 196v41m0 97v55" stroke="#759b91" stroke-width="9"/>'+r(381,193,430,42,'#dab69a',9)+r(376,346,518,183,'#e1a6ac',13)+r(362,337,550,23,'#fff2dc',9)+r(394,371,131,141,'#f0c3bc',9)+r(542,371,155,141,'#f0c3bc',9)+r(713,371,161,141,'#f0c3bc',9)+'<path d="M454 393h18m133 0h18m151 0h18" stroke="#b98987" stroke-width="6"/>'+r(933,190,244,215,'#f7eed6',80)+r(947,203,215,188,'#c6e3df',78)+'<path d="M1054 204v188m-103-80h206" stroke="#fff0d9" stroke-width="8"/>'+r(389,114,384,59,'#fef3dc',20)+'<text x="581" y="151" text-anchor="middle" fill="#b98187" font-size="24" font-family="Trebuchet MS" stroke="none">Little chefs, big imaginations</text>';
 b+=r(995,457,210,39,'#edc5a0',14)+'<path d="M1016 495v96m168-96v96" stroke="#c19b7e" stroke-width="12"/>';
 for(const [x,c]of [[417,'#d1b7dd'],[496,'#a9c9ab'],[575,'#e8bc8c'],[654,'#dbb2c5'],[733,'#bccbd8']])b+=r(x,248,45,86,c,10)+r(x-3,244,51,13,'#f8e5c2',4);
 b+='<path d="M700 303v-24q0-28 25-22v30" stroke="#95b6b1" stroke-width="9"/><ellipse cx="712" cy="329" rx="50" ry="8" fill="#afc7bd"/>';
 }else{
 b=backdrop('#e5dced')+r(75,169,254,267,'#f4dabc',30)+r(94,187,216,229,'#d5e7df',90)+'<path d="M200 189v223M100 306h205" stroke="#fff6df" stroke-width="8"/>';
 b+=r(954,212,247,247,'#debda0',18)+r(970,231,214,209,'#f9e6c9',10)+'<path d="M975 303h204m-204 68h204" stroke="#c39e83" stroke-width="7"/>';
 for(const [x,y,c]of [[987,253,'#c6b0db'],[1030,249,'#dbadbc'],[1100,244,'#9dc8b3'],[1006,324,'#c3d691'],[1077,323,'#e2bf8c']])b+=r(x,y,32,43,c,5);
 b+='<path d="m347 471 145-288 149 288Z" fill="#f4d2ac" stroke="#c2a18c" stroke-width="4"/><path d="m398 471 95-195 93 195Z" fill="#c4add9" stroke="#ad91c3" stroke-width="3"/><path d="m492 184 15-29" stroke="#af8d76" stroke-width="6"/>'+r(735,202,158,175,'#fff2db',16)+'<path d="M754 295q31-106 82 0" stroke="#e4a0ad" stroke-width="15" fill="none"/><path d="M764 295q25-79 63 0" stroke="#e9c881" stroke-width="12" fill="none"/><path d="M778 295q15-44 36 0" stroke="#a8c6af" stroke-width="10" fill="none"/>';
 b+=e(648,570,314,77,'#c3cdb7')+e(648,570,278,61,'#d4dfc8')+r(74,478,191,98,'#bb9bd5',20)+r(68,471,203,25,'#d5bee6',8)+'<path d="m164 507 8 15 17 3-12 12 2 17-15-9-15 9 2-17-12-12 17-3Z" fill="#f6df9e" stroke="none"/>';
 }
 return svg(b,'0 0 1280 720');
}
export function kitchenStation(w){let b=r(611,449,290,99,'#dfb18d',14)+r(598,434,319,24,'#fff0d7',10);b+='<ellipse cx="749" cy="429" rx="92" ry="17" fill="#b99eaa"/><path d="M670 368h159l-11 55q-64 34-138 0Z" fill="#b9b0d5" stroke="#9688b4" stroke-width="4"/><ellipse cx="750" cy="368" rx="79" ry="18" fill="#ece0cd" stroke="#9688b4" stroke-width="4"/><path d="M672 380h-19v27h25m149-27h19v27h-26" stroke="#9688b4" stroke-width="6" fill="none"/>';
 const items=w.cooking?['water','star','water']:w.pot;items.forEach((k,i)=>{b+=`<g transform="translate(${692+i*28} 345) scale(.6)">${inner(propArt(k))}</g>`;});
 if(w.cooking)b+='<g class="steam"><path d="M711 345q-20-25 0-46m35 38q-20-25 0-46m35 54q-20-25 0-46" stroke="#fff9" stroke-width="8" fill="none"/></g>';
 return svg(b,'0 0 1280 720');
export function mapArt(){return svg(`<rect width="1000" height="500" rx="35" fill="#d8ead4" stroke="none"/><path d="M-30 396Q120 236 302 370T620 337 1030 390" stroke="#f9eccb" stroke-width="65" fill="none"/><path d="M196 88q120 182 293 265m18-290q-39 183 64 245m295-128L691 365" stroke="#f9eccb" stroke-width="40" fill="none"/>${e(895,420,107,59,'#aad4d9')}${Array.from({length:14},(_,i)=>{const x=(i*227+60)%970,y=(i*59+37)%420;return `<g transform="translate(${x} ${y}) scale(.6)">${inner(icon('garden'))}</g>`;}).join('')}`,'0 0 1000 500');}
