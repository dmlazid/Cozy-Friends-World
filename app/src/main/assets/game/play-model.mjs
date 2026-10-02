export const INGREDIENTS = {
 flour:{name:'Flour',color:'#f6e5bc'},milk:{name:'Milk',color:'#cce8ef'},egg:{name:'Egg',color:'#f8d9a8'},
 berry:{name:'Strawberry',color:'#ef91a4'},apple:{name:'Apple',color:'#dc8c88'},tomato:{name:'Tomato',color:'#e57e76'},cheese:{name:'Cheese',color:'#f7ce72'},carrot:{name:'Carrot',color:'#f0aa70'}
};
export const RECIPES=[
 {id:'pancakes',name:'Fluffy pancakes',ingredients:['flour','milk','egg'],color:'#e7b97b'},
 {id:'pizza',name:'Little garden pizza',ingredients:['flour','tomato','cheese'],color:'#f2bd70'},
 {id:'cake',name:'Berry cloud cake',ingredients:['flour','egg','berry'],color:'#eeabc5'},
 {id:'smoothie',name:'Strawberry smoothie',ingredients:['milk','berry'],color:'#edb0c5'},
 {id:'salad',name:'Rainbow salad',ingredients:['carrot','tomato'],color:'#b5cf8c'},
 {id:'omelet',name:'Cheesy omelet',ingredients:['egg','cheese'],color:'#efd080'},
 {id:'fruit',name:'Happy fruit bowl',ingredients:['apple','berry'],color:'#e9a1a4'},
 {id:'sandwich',name:'Tiny cheese sandwich',ingredients:['flour','cheese'],color:'#eac98d'},
 {id:'carrotcake',name:'Carrot picnic cake',ingredients:['flour','carrot','egg'],color:'#e9af7e'},
 {id:'applemilk',name:'Apple milkshake',ingredients:['apple','milk'],color:'#eadcb2'}
];
export const PALETTES=['sunshine','rose','mint','lavender'];
export const PROP_COLORS=['#bb9cdd','#f2a3bb','#9fcdb4','#eab777','#96bfdb','#eed485'];
export const TOYS={teddy:'Teddy bear',ball:'Bouncy ball',book:'Story book',pillow:'Soft pillow',block:'Building block',mug:'Tea cup',flower:'Flower pot',rug:'Round rug',chair:'Little chair',table:'Tea table'};
const rooms=['home','cafe','garden','kitchen','playroom'];
export function newObject(world,kind,room,x,y,extra={}){
 if(!rooms.includes(room)||world.objects.filter(o=>o.room===room&&!o.heldBy).length>=28)return null;
 const o={id:'thing-'+world.nextId++,kind,room,x,y,color:PROP_COLORS[world.nextId%PROP_COLORS.length],heldBy:null,...extra};world.objects.push(o);return o;
}
export function freshWorld(){const w={living:true,nextId:1,objects:[],styles:Object.fromEntries(rooms.map(r=>[r,{palette:'sunshine',night:false}])),containers:{fridge:false,pantry:false,toybox:false,bookshelf:false},pot:[],cooking:null,discovered:[],edit:false};
 for(const [r,k,x,y]of [['home','teddy',190,542],['home','book',281,585],['home','pillow',473,535],['cafe','mug',192,463],['cafe','flower',1125,440],['garden','ball',799,592],['garden','flower',312,593],['kitchen','mug',1072,535],['kitchen','flour',440,330],['kitchen','milk',512,330],['kitchen','egg',580,330],['playroom','teddy',282,540],['playroom','ball',890,538],['playroom','block',1063,560],['playroom','book',467,585],['playroom','chair',1135,597]])newObject(w,k,r,x,y);
 return w;
}
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
export function restoreWorld(p){const w=freshWorld();if(!p||typeof p!=='object')return w;w.living=p.living!==false;
 if(Array.isArray(p.objects)){w.objects=[];const seen=new Set(),held=new Set();for(const o of p.objects.slice(0,140)){if(!o||typeof o.id!=='string'||!/^thing-\d+$/.test(o.id)||seen.has(o.id)||!rooms.includes(o.room)||!(o.kind in INGREDIENTS||o.kind in TOYS||o.kind==='dish')||!Number.isFinite(o.x)||!Number.isFinite(o.y))continue;
 seen.add(o.id);const owner=['mochi','pip','luna','boba'].includes(o.heldBy)&&!held.has(o.heldBy)?o.heldBy:null;if(owner)held.add(owner);
 w.objects.push({id:o.id,kind:o.kind,room:o.room,x:clamp(o.x,40,1240),y:clamp(o.y,200,650),color:PROP_COLORS.includes(o.color)?o.color:PROP_COLORS[0],heldBy:owner,...(o.kind==='dish'?{recipe:RECIPES.some(r=>r.id===o.recipe)?o.recipe:'surprise'}:{})});}
 w.nextId=Math.max(1,...w.objects.map(o=>Number(o.id.slice(6))+1));}
 for(const r of rooms){if(PALETTES.includes(p.styles?.[r]?.palette))w.styles[r].palette=p.styles[r].palette;w.styles[r].night=p.styles?.[r]?.night===true;}
 if(p.containers&&typeof p.containers==='object')for(const key of ['fridge','pantry','toybox','bookshelf'])w.containers[key]=p.containers[key]===true;
 w.pot=Array.isArray(p.pot)?p.pot.filter(k=>k in INGREDIENTS).slice(0,4):[];
 if(p.cooking&&Number.isFinite(p.cooking.readyAt)&&typeof p.cooking.recipe==='string')w.cooking={recipe:RECIPES.some(r=>r.id===p.cooking.recipe)?p.cooking.recipe:'surprise',readyAt:clamp(p.cooking.readyAt,0,Date.now()+4000)};
 w.discovered=Array.isArray(p.discovered)?[...new Set(p.discovered.filter(id=>RECIPES.some(r=>r.id===id)))]:[];return w;
}
export function recipeFor(items){const key=[...new Set(items)].sort().join(',');return RECIPES.find(r=>[...r.ingredients].sort().join(',')===key)||{id:'surprise',name:'My own happy bowl',ingredients:[...items],color:'#c9b5dc'};}
export function addToPot(w,id){if(w.cooking||w.pot.length>=4)return false;const i=w.objects.findIndex(o=>o.id===id&&o.kind in INGREDIENTS);if(i<0)return false;w.pot.push(w.objects[i].kind);w.objects.splice(i,1);return true;}
export function cook(w,now=Date.now()){if(w.pot.length<2||w.cooking)return false;w.cooking={recipe:recipeFor(w.pot).id,readyAt:now+3500};w.pot=[];return true;}
export function serve(w,now=Date.now()){if(!w.cooking||now<w.cooking.readyAt)return null;const recipe=w.cooking.recipe;const dish=newObject(w,'dish','kitchen',847,482,{recipe});if(!dish)return null;if(recipe!=='surprise'&&!w.discovered.includes(recipe))w.discovered.push(recipe);w.cooking=null;return dish;}
export function giveObject(w,id,friend){const o=w.objects.find(o=>o.id===id);if(!o)return false;const prev=w.objects.find(o=>o.heldBy===friend);if(prev){prev.heldBy=null;prev.x=o.x+65;prev.y=590;}o.heldBy=friend;return true;}
export function moveObject(w,id,room,x,y){const o=w.objects.find(o=>o.id===id);if(!o)return false;o.room=room;o.x=clamp(x,40,1240);o.y=clamp(y,200,650);o.heldBy=null;return true;}
export function eatObject(w,id){const i=w.objects.findIndex(o=>o.id===id&&(o.kind in INGREDIENTS||o.kind==='dish'||o.kind==='mug'));if(i<0)return false;w.objects.splice(i,1);return true;}
