const fs=require('node:fs');
const list=JSON.parse(fs.readFileSync('production/n7-anatomy-review.json')).replacements;
const jobs=list.map(id=>JSON.parse(fs.readFileSync('production/n7-anatomy/'+id+'.json')));
const ready=jobs.filter(j=>j.status==='pending'&&(!(Number(j.id.slice(-3))%2===0&&list.includes('n7-'+String(Number(j.id.slice(-3))-1).padStart(3,'0')))||jobs.find(p=>p.id==='n7-'+String(Number(j.id.slice(-3))-1).padStart(3,'0')).status==='accepted')).slice(0,4);
for(const j of ready){
 const n=Number(j.id.slice(-3)),p=jobs.find(x=>x.id==='n7-'+String(n-1).padStart(3,'0'));
 if(n%2===0&&p?.status==='accepted'){
  const r=JSON.parse(fs.readFileSync('production/n7/'+j.id+'.json'));const c=r.construction;
  j.referenceFile=p.file;
  j.prompt='EDIT this corrected partner photo. Preserve the SAME anatomically normal person, natural arm lengths, full body, generous margins, objects, material and background. Change ONLY pose and contact to touch the OTHER selected object: '+c.labels.join(' + ')+'. The '+c.contrast.targetSpecifier.label+' candidate now receives the sole physical contact, '+c.contrast.distractor.specifier.label+' candidate stays untouched. Keep elbow naturally bent and hand within normal close reach. Reposition person nearer selected object rather than stretching an arm. Keep colors and patterns of BOTH objects exactly unchanged. No text or cropping. Two arms, realistic joints and proportions. Full agent and ALL furniture legs inside white canvas with white margin below feet and legs.';
  fs.writeFileSync('production/n7-anatomy/'+j.id+'.json',JSON.stringify(j,null,2)+'\n');
 }
 else if(n%2===0&&!p){
  const r=JSON.parse(fs.readFileSync('production/n7/'+j.id+'.json')),c=r.construction;
  j.referenceFile='output/production/n7/n7-'+String(n-1).padStart(3,'0')+'/image.png';
  j.prompt='EDIT target photo. Preserve SAME person identity, age, clothing, two objects and furniture. Correct anatomy and change action to '+c.labels.join(' + ')+'. Reposition whole person into a deep comfortable SQUAT on LEFT side of furniture, both knees visibly bent, hips LOW near heels, both shoes on floor. Normal proportioned human torso and limbs, normal upper arms and forearms; elbow naturally BENT and close to torso. Active fingertip makes a SHORT reachable contact with ONLY the LOWER '+c.roles.find(x=>x.role==='patient').label+' UNDER the '+c.roles.find(x=>x.role==='anchor').label+'. Upper object stays ON furniture, lower object stays on FLOOR UNDER SAME furniture. Objects keep exact original shape size color pattern material and remain fully readable. Do NOT extend an arm to reach from standing; bend the legs and lower whole body instead. Unused hand on own thigh away from both objects. Natural wrists, normal hands and fingers; no distorted limbs. Single photoreal studio image. Full body, ALL feet and furniture legs with generous empty white margins. Pure white background. No text, logos, arrows or extra objects.';
  fs.writeFileSync('production/n7-anatomy/'+j.id+'.json',JSON.stringify(j,null,2)+'\n');
 }
}
fs.writeFileSync('output/n7-anatomy-jobs.json',JSON.stringify(ready,null,2));console.log(ready.map(x=>x.id).join(' '));
