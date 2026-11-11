const fs=require('node:fs');
const cp=require('node:child_process');
const decisions=JSON.parse(fs.readFileSync(process.argv[2],'utf8'));
for(const d of decisions){
 const rec=JSON.parse(fs.readFileSync(`production/n6/${d.id}.json`,'utf8'));
 if(d.action==='accept')cp.execFileSync(process.execPath,['scripts/record-n6-production.cjs','accept',d.id,d.source,d.review],{stdio:'inherit'});
 else {
  const prompt=rec.prompt.replace(/Age mapping is mandatory:[\s\S]*?Exact scene:/,'Exact scene:').replace(/Mandatory age mapping:[\s\S]*?Include feet,/,'Include feet,')+' CORRECTION REQUIRED: '+d.correction+' Exactly the target living participants only. No bystanders or extra family. Include feet, full furniture legs and all objects, scale the whole composition to the central 65 percent, leave at least a 12 percent empty white border on all FOUR sides. Wide distant view, never crop.';
  cp.execFileSync(process.execPath,['scripts/record-n6-production.cjs','retry',d.id,d.source,d.review,prompt],{stdio:'inherit'});
 }
}
const retry=decisions.filter(x=>x.action==='retry').map(d=>{const r=JSON.parse(fs.readFileSync(`production/n6/${d.id}.json`,'utf8'));return {id:d.id,prompt:r.prompt}});
fs.writeFileSync('output/n6-retry-jobs.json',JSON.stringify(retry,null,2)+'\n');
