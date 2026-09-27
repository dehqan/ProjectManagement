const { chromium } = require('playwright');
(async()=>{
  const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});
  const p=await b.newPage({viewport:{width:1440,height:900},deviceScaleFactor:2});
  for (const f of process.argv.slice(2)){
    await p.goto('file://'+process.cwd()+'/screens/'+f+'.html');
    await p.evaluate(()=>document.fonts.ready); await p.waitForTimeout(300);
    await p.screenshot({path:'img/'+f+'.png'});
    console.log('ok',f);
  }
  await b.close();
})();
