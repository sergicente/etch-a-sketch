//Variables

const contenedor = document.getElementById('container');
const boton12 = document.getElementById('boton12');
const boton24 = document.getElementById('boton24');
const boton48 = document.getElementById('boton48');
const botonNegro = document.getElementById('botonNegro');
let trazo = 'negro';


//Eventos

boton12.addEventListener('click', ()=> crearCuadricula(12));
boton24.addEventListener('click', ()=> crearCuadricula(24));
boton48.addEventListener('click', ()=> crearCuadricula(48));
boton96.addEventListener('click', ()=> crearCuadricula(96));
botonNegro.addEventListener('click', ()=> trazo='negro');
botonColor.addEventListener('click', ()=> trazo='color');



//Inicio del programa

crearCuadricula(32);








//Funciones

function crearCuadricula(c){
    contenedor.innerHTML = '';
    let cuadrados = c;
    let tamano = 400/cuadrados;
    tamano = 400/cuadrados;
    for (let i = 1; i <= cuadrados*cuadrados; i++) {
        const pixel = document.createElement('DIV');
        pixel.classList.add('grid-item');
        pixel.style.width = `${tamano}px`;
        pixel.style.height = `${tamano}px`;
        contenedor.appendChild(pixel);
        pixel.addEventListener('mouseover', ()=>{
            pixel.style.backgroundColor = color();
        })
}
}

function color() {
    if(trazo=='negro'){
        console.log('negro')
        return '#000';
    }
    if(trazo=='color'){
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
          color += letters[Math.floor(Math.random() * 16)];
        }
        console.log('color')
        return color;
    }


  }