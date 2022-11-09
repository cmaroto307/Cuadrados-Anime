import anime from "./anime.js";

let NUMCUADRADOS = 20;
let RANGO1 = 300;
let RANGO2 = 400;
let RANGO3 = 1000;

function * generador() {
    while(true){
        yield Math.floor(Math.random() * RANGO1);
        yield Math.floor(Math.random() * RANGO2);
        yield Math.floor(Math.random() * RANGO3);
    }
};

const gen = generador();
let elem = document.getElementById("idContenedor");
while(elem.hasChildNodes()) elem.removeChild(elem.firstChild);
for (let i=0; i< NUMCUADRADOS; i++) {
    let nodo = document.createElement("div");
    nodo.className = "cuadrado"
    elem.appendChild(nodo);
}
  
function moverCuadrado(){
    
    anime.timeline({
        targets: '.cuadrado',
        delay: 400,
        duration: 2000,
        endDelay: 400
    }).add({
        translateX: function() {
            return gen.next().value;
        }
    }).add({
        translateX: 0,
        complete: moverCuadrado
    });
}

moverCuadrado();