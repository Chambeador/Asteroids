navesita.x = canvas.width / 2;
navesita.y = canvas.height / 2;

const teclas = {};
document.addEventListener('keydown', e => { teclas[e.key] = 1; });
document.addEventListener('keyup',   e => { teclas[e.key] = 0; });

function gameLoop() {
  if (teclas['ArrowLeft'])  navesita.angulo -= navesita.velocidadGiro;
  if (teclas['ArrowRight']) navesita.angulo += navesita.velocidadGiro;
  if (teclas[' '])          balas.disparar();

  if (navesita.colisiona()) {
    setTimeout(() => window.location.href = 'inicio.html', 500);
    return;
}


  balas.actualizar();
  asteroides.actualizar(canvas.width, canvas.height);
  asteroides.verificarColisiones();

  dibujar();
  requestAnimationFrame(gameLoop);
}


function generarAsteroides(){
    asteroides.crearAsteroide(canvas.width, canvas.height);
    setTimeout(generarAsteroides, 2000);
}

generarAsteroides();
requestAnimationFrame(gameLoop);