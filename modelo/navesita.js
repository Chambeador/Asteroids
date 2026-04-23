const navesita = {
  x: 750,
  y: 350,
  angulo: Math.PI / 2,
  velocidadGiro: 0.07,

  distancia(a) {
    const dx = this.x - a.x;
    const dy = this.y - a.y;
    return Math.sqrt(dx * dx + dy * dy);
  },


  colisiona(){
    let radio_nave = 20;
        for (const a of asteroides.lista) {
            if (this.distancia(a) < a.tamaño + radio_nave){
                 return true;
            }
        }
        return false;
    }
};