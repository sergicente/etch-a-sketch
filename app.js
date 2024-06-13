//Variables

const contenedor = document.getElementById('container');
const boton12 = document.getElementById('boton12');
const boton24 = document.getElementById('boton24');
const botonn48 = document.getElementById('boton48');
const botonNegro = document.getElementById('botonNegro');
const botonColor = document.getElementById('botonColor');
const botonBorrar = document.getElementById('botonBorrar');
let tamanoActual;
let trazo = 'negro';


//Eventos

boton12.addEventListener('click', ()=> {
    boton12.classList.add('botonActivado');
    boton24.classList.remove('botonActivado');
    boton48.classList.remove('botonActivado');
    crearCuadricula(12)
});
boton24.addEventListener('click', ()=> {
    boton12.classList.remove('botonActivado');
    boton24.classList.add('botonActivado');
    boton48.classList.remove('botonActivado');
    crearCuadricula(24)
});
boton48.addEventListener('click', ()=> {
    boton12.classList.remove('botonActivado');
    boton24.classList.remove('botonActivado');
    boton48.classList.add('botonActivado');
    crearCuadricula(48)
});
botonNegro.addEventListener('click', ()=> {
    botonNegro.classList.add('botonActivado');
    botonColor.classList.remove('botonActivado');
    trazo='negro';
});
botonColor.addEventListener('click', ()=> {
    botonColor.classList.add('botonActivado');
    botonNegro.classList.remove('botonActivado');
    trazo='color';
});
botonBorrar.addEventListener('click', ()=> crearCuadricula(tamanoActual))



//Inicio del programa

crearCuadricula(12);








//Funciones

function crearCuadricula(c){
    contenedor.innerHTML = '';
    let cuadrados = c;
    tamanoActual= cuadrados;
    let tamano = 600/cuadrados;
    for (let i = 1; i <= cuadrados*cuadrados; i++) {
        const pixel = document.createElement('DIV');
        pixel.classList.add('grid-item');
        pixel.style.width = `${tamano}px`;
        pixel.style.height = `${tamano}px`;
        pixel.style.backgroundColor = '#F6FEAA';
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