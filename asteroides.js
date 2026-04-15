const asteroides = {
  lista: [],

  crear(x, y) {
    const angulo = Math.random() * Math.PI * 2;
    this.lista.push({
      x: x,
      y: y,
      velocidad_x: Math.sin(angulo)*2,
      velocidad_y: -Math.cos(angulo)*2,
      tamaño: 40
    });
  },

  actualizar(){
    for (const a of this.lista) {
        a.x += a.velocidad_x;
        a.y += a.velocidad_y;
        if (a.x < 0) a.x = canvas.width;
        if (a.x > canvas.width) a.x = 0;
        if (a.y < 0) a.y = canvas.height;
        if (a.y > canvas.height) a.y = 0;
    }
  },

    dibujar() {
    lapiz.fillStyle = '#494a9cff';
        for (const a of this.lista) {
            lapiz.beginPath();
            lapiz.arc(a.x, a.y, a.tamaño, 0, Math.PI * 2);
            lapiz.fill();
        }
    }
};