const { chromium } = require('playwright');
(async()=>{const b=await chromium.launch({executablePath:'/opt/pw-browsers/chromium'});const p=await b.newPage();
await p.goto('file://'+process.cwd()+'/proposal.html',{waitUntil:'networkidle'});await p.evaluate(()=>document.fonts.ready);
await p.pdf({path:'proposal.pdf',format:'A4',printBackground:true,preferCSSPageSize:true});
await p.setViewportSize({width:794,height:1123});
await b.close();})();
