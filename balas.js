const balas = {
  lista: [],
  velocidad: 10,
  tiempo_espera: 0,

  disparar() {
    if (this.tiempo_espera > 0) return;
    const px = navesita.x + Math.sin(navesita.angulo)*20;
    const py = navesita.y - Math.cos(navesita.angulo)*20;
    this.lista.push({
      x: px, y: py,
      velocidad_x:  Math.sin(navesita.angulo)*this.velocidad,
      velocidad_y: -Math.cos(navesita.angulo)*this.velocidad,
      vida: 80
    });
    this.tiempo_espera = 10;
  },

  actualizar() {
    if (this.tiempo_espera > 0) this.tiempo_espera--;
    for (const b of this.lista) { 
        b.x += b.velocidad_x;
        b.y += b.velocidad_y;
        b.vida--; 
    }
    this.lista = this.lista.filter(b => b.vida > 0);
  },

  dibujar() {
    lapiz.fillStyle = 'rgba(0, 255, 13, 1)';
    for (const b of this.lista) {
      lapiz.beginPath();
      lapiz.arc(b.x, b.y, 5, 0, Math.PI * 2); 
      lapiz.fill();
    }
  }
};