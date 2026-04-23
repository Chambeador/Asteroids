const asteroides = {
  lista: [],

  crear(x, y) {
    const centroX = 750;  
    const centroY = 350;
    const angulo = Math.atan2(centroY - y, centroX - x);

    this.lista.push({
      x: x,
      y: y,
      velocidad_x: Math.cos(angulo) * 2,
      velocidad_y: Math.sin(angulo) * 2,
      tamaño: 40
    });
  },

  crearAsteroide(ancho, alto){
    let borde = Math.random() * 4;
    let x,y;
    if(borde < 1) {
      x = Math.random()*ancho; y = 0;
    }
    if(borde >= 1 && borde < 2) {
      x = Math.random()*ancho; y = alto;
    }
    if(borde >= 2 && borde < 3) {
      x = 0; y = Math.random()*alto;
    }
    if(borde >= 3 && borde < 4) {
      x = ancho; y = Math.random()*alto;
    }
    this.crear(x,y);
  },


   distancia(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.sqrt(dx * dx + dy * dy);
  },

  colisionBalas() {

    let radio_bala = 5;

      for (const b of balas.lista) {
          for (const a of this.lista) {
              if (this.distancia(b, a) < a.tamaño + radio_bala) {
                  b.vida = 0;
                  a.muerto = true;
              }
          }
      }
  },

  colisionEntreAsteroides() {

      for(let i = 0; i < this.lista.length; i++){
          for(let j = i + 1; j < this.lista.length; j++){
              let a = this.lista[i];
              let b = this.lista[j];
              
              if (this.distancia(a, b) < a.tamaño + b.tamaño) {
                  a.muerto = true;
                  b.muerto = true;
              }
          }
      }
  },

  verificarColisiones() {
      this.colisionBalas();
      this.colisionEntreAsteroides();
      this.lista = this.lista.filter(a => !a.muerto);
  },


  actualizar(ancho, alto) {
    for (const a of this.lista) {
      a.x += a.velocidad_x;
      a.y += a.velocidad_y;
      if (a.x < 0) a.x = ancho;
      if (a.x > ancho) a.x = 0;
      if (a.y < 0) a.y = alto;
      if (a.y > alto) a.y = 0;
    }
  }
};