const canvas = document.getElementById("canva");
const lapiz  = canvas.getContext('2d');
canvas.width  = 1500;
canvas.height = 700;

const navesita = {
  x: canvas.width/2,
  y: canvas.height/2, 
  angulo: Math.PI/2,
  velocidadGiro: 0.07 
};


const teclas = {};
document.addEventListener('keydown', e => { teclas[e.key] = 1; });
document.addEventListener('keyup',   e => { teclas[e.key] = 0; });

function dibujar() {
  lapiz.fillStyle = '#000';
  lapiz.fillRect(0, 0, canvas.width, canvas.height);
  lapiz.save();

  asteroides.dibujar();
  
  lapiz.translate(navesita.x, navesita.y);
  lapiz.rotate(navesita.angulo);  

  lapiz.fillStyle = '#f00';
  lapiz.font = '48px monospace';
  lapiz.textAlign = 'center';
  lapiz.textBaseline = 'middle';
  lapiz.fillText('A', 0, 0);
  lapiz.restore();
  balas.dibujar();
}

asteroides.crear(200, 200);
asteroides.crear(600, 300);
asteroides.crear(1000, 100);


function gameLoop() {
  if (teclas['ArrowLeft'])  navesita.angulo -= navesita.velocidadGiro;
  if (teclas['ArrowRight']) navesita.angulo += navesita.velocidadGiro;
  if (teclas[' '])          balas.disparar();  
  balas.actualizar();  
  asteroides.actualizar();
  dibujar();
  requestAnimationFrame(gameLoop);
}

 requestAnimationFrame(gameLoop);