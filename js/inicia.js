import anime from "./anime.js";

let NUMCUADRADOS = 20;
let MAXDESPLAZAMIENTO = 1000;

function * generador() {
    while(true){
        yield Math.floor(Math.random() * MAXDESPLAZAMIENTO);
    }
};

const gen = generador();
  
function moverCuadrado(){

    let elem = document.getElementById("idContenedor");
    while(elem.hasChildNodes()) elem.removeChild(elem.firstChild);
    for (let i=0; i< NUMCUADRADOS; i++) {
        let nodo = document.createElement("div");
        nodo.className = "cuadrado"
        elem.appendChild(nodo);
    }
    
    anime.timeline({
        targets: '.cuadrado',
        delay: 400,
        duration: 2000,
        endDelay: 400
    }).add({
        targets: '.cuadrado',
        translateX: function() {
            return gen.next().value;
        }
    }).add({
        translateX: 0,
        complete: moverCuadrado
    });
}

moverCuadrado();