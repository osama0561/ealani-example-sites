const { chromium } = require('/opt/hermes/node_modules/playwright');
const fs = require('fs');
(async()=>{
  const browser = await chromium.launch({executablePath:'/opt/data/playwright-browsers/chromium-1228/chrome-linux64/chrome', args:['--no-sandbox']});
  const pages=['/','/filter-car-services/','/touch-levantine-salon/','/black-stores/'];
  let ok=true;
  for (const p of pages) {
    const page = await browser.newPage({viewport:{width:1440,height:1100}});
    const errors=[];
    page.on('console', msg=>{ if(['error','warning'].includes(msg.type())) errors.push(`${msg.type()}: ${msg.text()}`); });
    page.on('pageerror', err=>errors.push('pageerror: '+err.message));
    const res = await page.goto('http://127.0.0.1:8095'+p, {waitUntil:'networkidle'});
    const title=await page.title();
    const text=await page.locator('body').innerText();
    await page.screenshot({path:`/tmp/ealani-${p==='/'?'index':p.split('/').filter(Boolean)[0]}.png`, fullPage:false});
    console.log(`${p} ${res.status()} ${title} unofficial=${/غير رسمي|غير رسمية/.test(text)} errors=${errors.length}`);
    if(res.status()!==200 || !/غير رسمي|غير رسمية/.test(text) || errors.length){ ok=false; console.log(errors.join('\n')); }
    await page.close();
  }
  await browser.close();
  process.exit(ok?0:1);
})();
