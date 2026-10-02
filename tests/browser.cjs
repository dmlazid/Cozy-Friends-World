const {chromium}=require('playwright');
const assert=require('node:assert/strict');
const fs=require('node:fs');
(async()=>{
 fs.mkdirSync('test-results',{recursive:true});
 const browser=await chromium.launch({headless:true});
 const page=await browser.newPage({viewport:{width:1280,height:900}});
 const errors=[];page.on('pageerror',e=>errors.push(String(e)));
 const read=()=>page.evaluate(()=>JSON.parse(localStorage.getItem('cozy-friends-world-v1')));
 try{
 await page.goto('http://127.0.0.1:8080');await page.locator('#start-button').click();
 assert.equal(await page.locator('.character').count(),4);
 await page.screenshot({path:'test-results/home.png'});
 await page.locator('[data-select="pip"]').click();
 const before=(await read()).friends[1].hunger;
 await page.locator('[data-item="snack"]').click();
 assert.ok((await read()).friends[1].hunger>before,'feeding selected friend');
 await page.locator('#dress-button').click();await page.locator('[data-hat="flower"]').click();await page.locator('[data-color="#ed96b0"]').click();await page.locator('.modal-close').click();
 assert.equal((await read()).friends[1].hat,'flower');
 const b=await page.locator('#friend-pip').boundingBox();await page.mouse.move(b.x+b.width/2,b.y+b.height/2);await page.mouse.down();await page.mouse.move(b.x+b.width/2+70,b.y+b.height/2+20,{steps:8});await page.mouse.up();
 assert.ok((await read()).friends[1].positions.home.x>550,'dragging friend');
 await page.locator('[data-room="cafe"]').click();assert.equal((await read()).room,'cafe');await page.screenshot({path:'test-results/cafe.png'});
 await page.locator('[data-room="garden"]').click();await page.locator('[data-zone="garden"]').click();assert.equal((await read()).plant.stage,1);
 await page.screenshot({path:'test-results/garden.png'});
 await page.waitForTimeout(15500);await page.locator('[data-zone="garden"]').click();assert.ok((await read()).questDone.includes('garden'),'harvesting berries');
 await page.locator('#shop-button').click();await page.locator('[data-buy="rug"]').click();await page.locator('.modal-close').click();assert.ok((await read()).decor.includes('rug'));
 await page.reload();assert.equal((await read()).friends[1].outfit,'#ed96b0');assert.equal((await read()).room,'garden');
 await page.locator('#minigame-button').click();await page.locator('#bubble-start').click();const deadline=Date.now()+22000;let pops=0;
 while(Date.now()<deadline){if(await page.locator('#back-world').count())break;const bubble=page.locator('.bubble').first();if(await bubble.count()){try{await bubble.click({timeout:700,force:true});pops++;}catch{}}await page.waitForTimeout(110);}
 assert.ok(pops>=8);assert.ok((await read()).questDone.includes('bubbles'));await page.locator('#back-world').click();
 await page.locator('[data-room="home"]').click();
 for(const [name,width,height]of [['phone',844,390],['small-phone',740,360],['portrait',390,844]]){
 await page.setViewportSize({width,height});await page.waitForTimeout(150);await page.screenshot({path:`test-results/${name}.png`});
 assert.ok(await page.locator('#minigame-button').isVisible());
 await page.locator('[data-select="luna"]').click();assert.equal((await read()).selected,'luna');
 }
 assert.deepEqual(errors,[]);console.log('PASS: onboarding, care, drag, wardrobe, rooms, growing, shop, save/reload, timed game, three screen sizes.');
 }catch(e){await page.screenshot({path:'test-results/failure.png'});throw e;}finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1)});
