import { copyFileSync } from 'fs';
const src = 'C:\\Users\\Computer Care\\.gemini\\antigravity\\brain\\d3b9c3dc-1b71-4baa-a11e-c87f59d251c8\\hero_girl_1778567815441.png';
const dest = 'src\\assets\\images\\hero-girl.png';
copyFileSync(src, dest);
console.log('Copied hero-girl.png successfully!');
