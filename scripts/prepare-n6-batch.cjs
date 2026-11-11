const fs=require('node:fs');
const cp=require('node:child_process');
const plan=require('../production/n6-plan.json');
const progress=JSON.parse(fs.readFileSync('production/n6-progress.json','utf8'));
if(progress.status!=='active'||Date.now()>=Date.parse(progress.generationCutoff))throw Error('Sessió aturada o tall de generació assolit');
const explicit=process.argv.slice(2);
const order=[];
for(let i=0;i<34;i++)for(const offset of [0,100,34,134,67,167]){
 const n=i+offset+1;
 if((offset===34||offset===134||offset===67||offset===167)&&i>=33)continue;
 if(n<=200&&!order.includes(n))order.push(n);
}
const selected=explicit.length?explicit.map(id=>plan.items.find(x=>x.id===id)):order.map(n=>plan.items[n-1]).filter(x=>!fs.existsSync(`production/n6/${x.id}.json`)).slice(0,12);
const jobs=selected.map(x=>{
 if(!x)throw Error('Id absent');
 const ages={NEN:'boy aged 7',NENA:'girl aged 7',NOI:'tall teenage boy aged 17',NOIA:'tall teenage girl aged 17',DONA:'adult woman aged 40',HOME:'adult man aged 40'};
 const humans=x.roles.filter(r=>['agent','recipient'].includes(r.role)&&ages[r.label]);
 const age=humans.length?'Human appearance: '+humans.map(r=>`${r.role} ${r.label} is a ${ages[r.label]}`).join('; ')+'. Correct age proportions.':'NO HUMAN FIGURES.';
 const prompt=`Use case: scientific-educational. Create ONE ${x.kind==='photo'?'synthetic photorealistic studio educational photograph, natural human anatomy and real textures':'flat children’s educational illustration, crisp shapes and simple solid colors'}. CACE N6: ${x.labels.join(' + ')}. Semantic focus: ${x.informationType}. ${age} Exact scene: ${x.visualDescription} Pure white seamless background. WIDE SHOT, camera far away: entire people or animals INCLUDING FEET, every target object and ALL furniture legs fully in frame. Scale the complete composition small to fit the CENTRAL 65 percent of the canvas; leave a WHITE BORDER at least 12 percent wide on ALL FOUR sides. Never crop lower legs or desk legs. One action in one instant, no sequence or collage. Only essential support. Friendly school material. Absolutely NO text, letters, numerals, brands, logos, watermark, arrows or speech bubbles, including clothing and books. Humans wear ordinary clothes. Hands/paws make clear functional contact. ${x.informationType==='lloc'?'Include the necessary small complete setting specified, isolated on white.':'No identifiable room or landscape.'}`;
 const finalPrompt=prompt+' Exactly the named living participants, no spectators, no family group, no additional people or animals. Vary human skin and hair naturally: '+['light skin, straight dark hair','medium brown skin, curly black hair','dark brown skin, short curly hair','olive skin, wavy brown hair'][Math.floor((x.number-1)/2)%4]+'. Do not add plants, carpets or decorative accessories not required by the scene.';
 cp.execFileSync(process.execPath,['scripts/record-n6-production.cjs','prepare',x.id,finalPrompt]);return {id:x.id,prompt:finalPrompt};
});
fs.writeFileSync('output/n6-next-jobs.json',JSON.stringify(jobs,null,2)+'\n');
console.log(jobs.map(x=>x.id).join(' '));
