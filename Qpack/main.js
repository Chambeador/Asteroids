const header = document.querySelector('.header');
const estatica = document.querySelector('.estatica');
const dinamica = document.querySelector('.dinamica');

const agregar = document.querySelector('.agregar');
const comprimir = document.querySelector('.comprimir');
const guardar = document.querySelector('.guardar');

const entrada = document.querySelector('.entrada');
const proceso = document.querySelector('.proceso');
const resultado = document.querySelector('.resultado');


// header estatica dinamica
// agregar comprimir guardar
// entrada procesando resultado


let tabla_d = [];
let tabla_e = [
    "method GET",
    "_path /",
    "accept-language es"
];

mostrar_e();

function mostrar_e(){
    let texto = "";
    let tam = tabla_e.length;
    for(let i = 0; i < tam; i++){
        texto += tabla_e[i]+"\n";
    }
    estatica.value = texto;
}

function mostrar_dinamica(){
    let texto = "";
    let tam = tabla_d.length;
    for(let i = 0; i < tam; i++){
        texto+= tabla_d[i]+"\n";
    }
    dinamica.value = texto;
}



guardar.onclick = function(){
    let textoE = estatica.value.split("\n");
    tabla_e = [];
    let tam = textoE.length;
    for(let i = 0; i < tam; i++){
        let linea = textoE[i].trim();
        if(linea == "") continue;
        tabla_e.push(linea);
    }
    mostrar_e();
}

agregar.onclick = function(){
    let textoH = header.value.trim();
    if(textoH == "") return;

    entrada.innerText = textoH;
    proceso.innerText = "";
    resultado.innerText = "";

    header.value = "";
}

comprimir.onclick = function(){
    let texto = entrada.innerText.trim();
    if(texto == "") return;
    proceso.innerHTML = "Comprimiendo ............. un ratito";

    setTimeout(function(){
        let comprimido = comprimir_h(texto);
        resultado.innerText = comprimido;
        proceso.innerText = "Listo";
        mostrar_dinamica();
    }, 1500);
}



function comprimir_h(texto){
    let textos = texto.split("\n");
    let resultado = "";
    let tam = textos.length;
    for(let i = 0; i < tam; i++){
        let head = textos[i].trim();
        if(head == "") continue;

        let posicion = tabla_e.indexOf(head);
        if(posicion != -1){
            resultado += posicion +"\n";
            continue;
        }

        //tabla dinamica ahora

        posicion = tabla_d.indexOf(head);
        if(posicion != -1){
            resultado += (100+posicion)+"\n";
            continue;
        }

        resultado += head + "\n";
        tabla_d.push(head);
    }
    return resultado;
}