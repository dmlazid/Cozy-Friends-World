export const FRIENDS = [
 {id:'mochi',name:'Mochi',kind:'bunny',color:'#f9dfd2',inner:'#eda6af',shirt:'#ae9be2',bio:'A little daydreamer who loves strawberry cake.'},
 {id:'pip',name:'Pip',kind:'panda',color:'#df9570',inner:'#995d50',shirt:'#91bba0',bio:'A curious gardener with a very fluffy tail.'},
 {id:'luna',name:'Luna',kind:'cat',color:'#d5cfee',inner:'#aa98ce',shirt:'#efb273',bio:'A tiny explorer who puts stars on everything.'},
 {id:'boba',name:'Boba',kind:'bear',color:'#bd9278',inner:'#dfb6a0',shirt:'#93b7d5',bio:'A gentle baker, always ready for a big hug.'}
];
export const ROOMS = ['home','cafe','garden'];
export const OUTFITS = ['#ae9be2','#91bba0','#efb273','#93b7d5','#ed96b0','#f1cb76'];
export const HATS = ['none','bow','flower','crown'];
export const ACTIONS = {feed:{hunger:28,fun:3},sleep:{energy:32},wash:{clean:35,fun:4},play:{fun:28,energy:-5},hug:{fun:12}};
export const QUESTS = [{id:'feed',label:'Share a tasty snack',icon:'snack'},{id:'wash',label:'Make a splash',icon:'water'},{id:'play',label:'Play together',icon:'heart'},{id:'sleep',label:'Take a cozy nap',icon:'moon'},{id:'garden',label:'Grow a little happiness',icon:'leaf'},{id:'bubbles',label:'Catch 8 bubbles',icon:'bubbles'}];
export function freshState(){return {version:1,coins:30,xp:0,selected:'mochi',room:'home',muted:false,started:false,decor:[],questDone:[],questsClaimed:false,plant:{stage:0,readyAt:0},friends:FRIENDS.map((f,i)=>({id:f.id,hunger:68,energy:75,clean:62,fun:72,outfit:f.shirt,hat:'none',emotion:'happy',positions:Object.fromEntries(ROOMS.map(r=>[r,{x:355+i*195,y:565+(i%2)*18}]))}))};}
const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
export function restore(raw){
 const s=freshState();try{const p=JSON.parse(raw);if(!p||p.version!==1)return s;
 for(const k of ['coins','xp'])if(Number.isFinite(p[k]))s[k]=clamp(Math.floor(p[k]),0,999999);
 if(ROOMS.includes(p.room))s.room=p.room;if(FRIENDS.some(f=>f.id===p.selected))s.selected=p.selected;
 s.muted=p.muted===true;s.started=p.started===true;s.decor=Array.isArray(p.decor)?[...new Set(p.decor.filter(v=>['rug','lights','flowers'].includes(v)))]:[];
 s.questDone=Array.isArray(p.questDone)?[...new Set(p.questDone.filter(v=>QUESTS.some(q=>q.id===v)))]:[];s.questsClaimed=p.questsClaimed===true&&s.questDone.length===QUESTS.length;
 if(p.plant&&[0,1,2].includes(p.plant.stage))s.plant={stage:p.plant.stage,readyAt:Number.isFinite(p.plant.readyAt)?clamp(p.plant.readyAt,0,Date.now()+30000):0};
 for(const f of s.friends){const old=Array.isArray(p.friends)?p.friends.find(v=>v&&v.id===f.id):null;if(!old)continue;
 for(const k of ['hunger','energy','clean','fun'])if(Number.isFinite(old[k]))f[k]=clamp(old[k],0,100);
 if(OUTFITS.includes(old.outfit))f.outfit=old.outfit;if(HATS.includes(old.hat))f.hat=old.hat;
 if(['happy','love','silly','sad','sleepy','surprise'].includes(old.emotion))f.emotion=old.emotion;
 for(const r of ROOMS){const pos=old.positions?.[r];if(pos&&Number.isFinite(pos.x)&&Number.isFinite(pos.y))f.positions[r]={x:clamp(pos.x,90,1190),y:clamp(pos.y,400,610)};}}
 }catch{}return s;
}
export function doAction(s,id,action){const f=s.friends.find(v=>v.id===id);if(!f||!ACTIONS[action])return false;
 let gain=0;for(const [key,n]of Object.entries(ACTIONS[action])){const before=f[key];f[key]=clamp(before+n,0,100);if(n>0)gain+=f[key]-before;}
 if(gain>2){s.coins+=1;s.xp+=3;}if(QUESTS.some(q=>q.id===action)&&!s.questDone.includes(action))s.questDone.push(action);return true;}
export function completeQuest(s,id){if(QUESTS.some(q=>q.id===id)&&!s.questDone.includes(id))s.questDone.push(id);}
export function claimQuests(s){if(s.questsClaimed||s.questDone.length!==QUESTS.length)return false;s.questsClaimed=true;s.coins+=40;s.xp+=30;return true;}
export function purchase(s,id){const prices={rug:20,lights:35,flowers:25};if(!prices[id]||s.decor.includes(id)||s.coins<prices[id])return false;s.coins-=prices[id];s.decor.push(id);return true;}
export function moveFriend(s,id,x,y){const f=s.friends.find(v=>v.id===id);if(f)f.positions[s.room]={x:clamp(x,90,1190),y:clamp(y,400,610)};}
export function tickNeeds(s){for(const f of s.friends){f.hunger=Math.max(10,f.hunger-.35);f.energy=Math.max(10,f.energy-.22);f.clean=Math.max(10,f.clean-.18);f.fun=Math.max(10,f.fun-.25);}}
