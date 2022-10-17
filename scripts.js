String.prototype.replaceAt=function(index, character) { return this.substring(0, index) + character + this.substring(index+character.length); } 


const palabras = ['programa', 'perro', 'comunicacion', 'estrella'];

const palabra = palabras [ Math.Floor(Math.random()*palabras.legth) ]


let palabraConGuiones = palabra.replace(/./g, "_ ");
let contadorFallos = 0,
document.querySelector('#output').innerHTML = palabraConGuiones;
document.querySelector('#calcular').addEventListener('click', ´(

    const letra = document.querySelector('#letra').value;
    let haFallado = true;

    for(const i in palabra){
        if(letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.replaceAt(i*2,letra);
            haFallado = false;
        }
    }

    if(haFallado){
       contadorFallos++; 
       document.querySelector('#ahorcado').syle.
       backgroudPosition = (307*contadorFallos) +'px'

    }
    

    document.querySelector('#output').innerHTML = palabraConGuiones;

));