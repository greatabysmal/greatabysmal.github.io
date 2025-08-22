// tiny typewriter for the hero prompt
(function(){
const el = document.querySelector('.cmd');
if(!el) return;
const txt = el.dataset.type || '';
let i = 0; const speed = 45;
function tick(){
el.textContent = txt.slice(0, i++) + (i % 2 ? '▌' : ' ');
if(i <= txt.length) requestAnimationFrame(()=>setTimeout(tick, speed));
}
tick();
})();


// set year
document.getElementById('year').textContent = new Date().getFullYear();


// graceful media fallbacks for demo covers
for (const m of document.querySelectorAll('.media.ph')){
const f = m.getAttribute('data-fallback');
if(!f) continue;
const img = new Image();
img.src = 'assets/' + f;
img.onload = () => { m.style.background = `center/cover no-repeat url(${img.src})`; };
}


// keyboard: ESC to top
document.addEventListener('keydown', (e)=>{
if(e.key === 'Escape') window.scrollTo({top:0, behavior:'smooth'});
});
