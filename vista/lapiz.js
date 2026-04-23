const canvas = document.getElementById("canva");

const lapiz  = canvas.getContext('2d');
canvas.width  = 1500;
canvas.height = 700;

function dibujarFondo() {
  lapiz.fillStyle = '#000';
  lapiz.fillRect(0, 0, canvas.width, canvas.height);
}

function dibujarNave() {
  lapiz.save();
  lapiz.translate(navesita.x, navesita.y);
  lapiz.rotate(navesita.angulo);
  lapiz.fillStyle = '#f00';
  lapiz.font = '48px monospace';
  lapiz.textAlign = 'center';
  lapiz.textBaseline = 'middle';
  lapiz.fillText('A', 0, 0);
  lapiz.restore();
}

function dibujarAsteroides() {
  lapiz.fillStyle = '#494a9cff';
  for (const a of asteroides.lista) {
    lapiz.beginPath();
    lapiz.arc(a.x, a.y, a.tamaño, 0, Math.PI * 2);
    lapiz.fill();
  }
}

function dibujarBalas() {
  lapiz.fillStyle = 'rgba(255, 217, 0, 1)';
  for (const b of balas.lista) {
    lapiz.beginPath();
    lapiz.arc(b.x, b.y, 5, 0, Math.PI * 2);
    lapiz.fill();
  }
}

function dibujar() {
  dibujarFondo();
  dibujarAsteroides();
  dibujarNave();
  dibujarBalas();
}