const fs = require('node:fs');
const cp = require('node:child_process');
const plan = JSON.parse(fs.readFileSync('production/n9-plan.json', 'utf8'));
const progress = JSON.parse(fs.readFileSync('production/n9-progress.json', 'utf8'));
if (progress.status !== 'active' || !progress.authorization.generation) throw Error('Sessió inactiva');
const count = Number(process.argv[2] || 4);
const pending = new Set(progress.pending);
const order = plan.items.slice(0, 100).flatMap(item => [item.id, item.counterpartId]);
const selected = order.filter(id => pending.has(id)).slice(0, count);
const prompts = {};
const agentNames = {NENA: 'school-age girl', NEN: 'school-age boy', NOIA: 'young adult woman', NOI: 'young adult man', DONA: 'adult woman', HOME: 'adult man'};
for (const id of selected) {
  const item = plan.items.find(item => item.id === id);
  const prompt = 'Create ONE finished CACE educational temporal sequence image, wide horizontal composition. ' +
    (item.kind === 'photo' ? 'Synthetic photorealistic studio photography of one real human person with natural skin, fabric and anatomy.' : 'Clean flat 2D illustration of one friendly recognizable anthropomorphic animal, solid colors, clear outlines, no photo texture. Animal performs the human activity using species-appropriate limbs, no extra human limbs.') +
    (item.kind === 'photo' ? ' Actor has ' + ['deep brown skin and short natural curly hair', 'medium brown skin and dark wavy hair', 'fair skin and straight chestnut hair', 'light brown skin and curly dark hair'][item.number % 4] + '. Preserve this identity exactly across panels.' : '') +
    ' Exactly ' + item.composition.frameCount + ' equal panels from LEFT TO RIGHT separated by broad white gutters. Each panel depicts the SAME complete agent at a different moment. Same clothing, facial identity, body proportions, viewpoint, lighting, furniture and exact objects throughout. Every head, foot, hand, tail and object fully within generous white margins. Pure white background and minimal functional props. Agent CACE label in Catalan: ' + item.agent.label +
    (agentNames[item.agent.label] ? ' (' + agentNames[item.agent.label] + ')' : '') +
    '. Continuity anchor: ' + item.continuity.anchor + '. Ordered moments in Catalan: ' +
    item.moments.map(moment => 'PANEL ' + moment.number + ': ' + moment.evidence).join(' ') +
    '. Critical: make the temporal change and physical evidence clear in each moment. Natural limbs, grip, joints, support and reach. Furniture at accessible height. Keep object dimensions relative to hands, body and furniture constant across moments. All covers, lids and page blocks must match their base dimensions and share a physically correct hinge, spine and perspective. Zoom OUT enough for entire bodies and furniture with at least 8 percent clear margin. All book pages and packages blank. NO text, letters, numerals, logos, brands, watermarks, panel labels, arrows, motion lines or speech bubbles. One agent per panel, no additional active character. Illustrate exactly the specified objects and actions.';
  const recordPath = 'production/n9/' + id + '.json';
  if (fs.existsSync(recordPath)) {
    prompts[id] = JSON.parse(fs.readFileSync(recordPath, 'utf8')).prompt;
  } else {
    cp.execFileSync('node', ['scripts/record-n9-production.cjs', 'prepare', id, prompt]);
    prompts[id] = prompt;
  }
}
fs.writeFileSync('output/n9-current-prompts.json', JSON.stringify(prompts, null, 2) + '\n');
console.log(JSON.stringify(prompts));
