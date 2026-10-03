const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
const personalities={
 mochi:{gestures:['gesture-wave','gesture-look','gesture-stretch'],words:['Hi hi!','So cozy!','Come play!']},
 pip:{gestures:['gesture-hop','gesture-dance','gesture-wave'],words:['Wheee!','Again!','Catch me!']},
 luna:{gestures:['gesture-look','gesture-wave','gesture-proud'],words:['What is that?','A little story?','Hello!']},
 boba:{gestures:['gesture-dance','gesture-hop','gesture-stretch'],words:['Yay!','Dance time!','Hehe!']}
};
const active=new WeakMap();let socialLock=0,lastStep=0;
const prefersReduced=matchMedia('(prefers-reduced-motion: reduce)');
function available(el){return el&&!el.matches('.dragging,.walking,.busy,.sleeping,.resting,.playing')&&!active.has(el);}
function friendId(el){return el?.dataset.friend||'';}
function personality(el){return personalities[friendId(el)]||personalities.mochi;}
function clearGesture(el){const cls=active.get(el);if(cls)el.classList.remove(cls);active.delete(el);}
function gesture(el,cls,duration=1500){if(!available(el)||prefersReduced.matches)return;active.set(el,cls);el.classList.add(cls);setTimeout(()=>clearGesture(el),duration);}
function bubble(el,text){if(!el||el.querySelector('.life-bubble'))return;const b=document.createElement('span');b.className='life-bubble';b.setAttribute('aria-hidden','true');b.textContent=text;el.appendChild(b);setTimeout(()=>b.remove(),1500);}
function coords(el){return {x:parseFloat(el.style.left)||0,y:parseFloat(el.style.top)||0};}
function maybeSocial(){const now=Date.now();if(now<socialLock)return false;const chars=$$('.character').filter(available);if(chars.length<2)return false;
 for(let tries=0;tries<5;tries++){const a=chars[Math.floor(Math.random()*chars.length)],b=chars[Math.floor(Math.random()*chars.length)];if(!a||!b||a===b)continue;const pa=coords(a),pb=coords(b);if(Math.hypot(pa.x-pb.x,pa.y-pb.y)>250)continue;
  socialLock=now+6500;gesture(a,'gesture-chat',1700);gesture(b,'gesture-chat',1700);bubble(a,personality(a).words[Math.floor(Math.random()*personality(a).words.length)]);setTimeout(()=>bubble(b,personality(b).words[Math.floor(Math.random()*personality(b).words.length)]),260);return true;
 }
 return false;
}
function idleMoment(){if(document.hidden||prefersReduced.matches||!$('#modal-layer')?.classList.contains('hidden'))return;if(maybeSocial())return;const chars=$$('.character').filter(available);if(!chars.length)return;const el=chars[Math.floor(Math.random()*chars.length)],p=personality(el);let choices=[...p.gestures];if(el.querySelector('.held-object'))choices=['gesture-proud','gesture-look','gesture-wave'];gesture(el,choices[Math.floor(Math.random()*choices.length)],1350+Math.random()*650);}
function footsteps(t){if(prefersReduced.matches||t-lastStep<300)return;const walkers=$$('.character.walking');if(!walkers.length)return;lastStep=t;for(const el of walkers){const p=coords(el),dust=document.createElement('span');dust.className='step-puff';dust.style.left=(p.x-8)+'px';dust.style.top=(p.y-10)+'px';dust.textContent=Math.random()>.5?'·':'•';$('#particles')?.appendChild(dust);setTimeout(()=>dust.remove(),650);}}
function animate(t){footsteps(t);requestAnimationFrame(animate);}requestAnimationFrame(animate);
setInterval(idleMoment,2400);
const observer=new MutationObserver(()=>{$$('.character').forEach(el=>{el.dataset.personality=friendId(el);});});
observer.observe(document.documentElement,{subtree:true,childList:true});
document.addEventListener('pointerup',e=>{const el=e.target.closest?.('.character');if(!el||el.matches('.dragging,.walking,.busy'))return;setTimeout(()=>{if(available(el))gesture(el,'gesture-tap',700);},80);},{passive:true});
