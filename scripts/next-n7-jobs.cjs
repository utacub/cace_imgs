const fs=require('node:fs'),cp=require('node:child_process'),p=require('../production/n7-plan.json');
function ready(){return p.items.filter(x=>fs.existsSync(`production/n7/${x.id}.json`)).filter(x=>{const r=JSON.parse(fs.readFileSync(`production/n7/${x.id}.json`,'utf8'));return !r.reviewed&&(x.number%2===1||fs.existsSync(`production/n7/${x.counterpartId}.json`)&&JSON.parse(fs.readFileSync(`production/n7/${x.counterpartId}.json`,'utf8')).reviewed);}).sort((a,b)=>((a.number-1)%100)*2+(a.number>100?1:0)-(((b.number-1)%100)*2+(b.number>100?1:0)));}
for(let n=0;ready().length<4&&n<2;n++)cp.execFileSync(process.execPath,['scripts/prepare-n7-batch.cjs']);
const selected=ready().slice(0,4),jobs=[];
for(const x of selected){
 const file=`production/n7/${x.id}.json`;let r=JSON.parse(fs.readFileSync(file,'utf8'));
 if(x.number%2===0&&!r.referenceFile){cp.execFileSync(process.execPath,['scripts/prepare-n7-pair-edit.cjs',x.id]);r=JSON.parse(fs.readFileSync(file,'utf8'));}
 if(!r.contactRuleAdded){r.prompt+=' Mandatory contact rule: active hand/paw has unambiguous physical contact with ONLY selected candidate. UNUSED hand/paw stays BEHIND BACK or visibly against own body, never near distractor. Keep both candidates fully readable, identical other than the specified contrast.';r.contactRuleAdded=true;fs.writeFileSync(file,JSON.stringify(r,null,2)+'\n');}
 jobs.push({id:x.id,prompt:r.prompt,referenceFile:r.referenceFile});
}
fs.writeFileSync('output/n7-ready-jobs.json',JSON.stringify(jobs,null,2)+'\n');console.log(jobs.map(x=>x.id).join(' '));
