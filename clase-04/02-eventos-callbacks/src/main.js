import './style.css'

//una funcion que se pasa como argumento a otra funcion
const texto1 = () => {
    console.log('soy el texto 1');
}
console.log(texto1); //referencia de la funcion -> mostrando referencia de la funcion
texto1() //ejecutando la funcion

const prueba = (callback)=>{
    console.log(callback);
    console.log('-------');
    console.log('otra cosa');
    console.log('otra cosa mas');
    callback()
}

prueba(texto1)

//mejor manera para trabajr con los eventos

//addEventListener

console.warn('// ! Callbacks');
console.warn('// ! EVENTOS');

// ! addEventListener()

const btnClick = document.querySelector('#btn-click')
console.log(btnClick)

// btnClick.addEventListener('<tipo-evento>', callback)
btnClick.addEventListener('click', function() {
    console.log('Hicieron click')
})

btnClick.addEventListener('click', function() {
    console.log('Otro evento. Hicieron click!')
})

// https://developer.mozilla.org/en-US/docs/Web/API/Event

function v1() {
    const btnUno = document.querySelector('#btn-1')
    const btnDos = document.querySelector('#btn-2')
    const btnTres = document.querySelector('#btn-3')
    const btnCuatro = document.querySelector('#btn-4')

    console.log(btnUno)
    console.log(btnDos)
    console.log(btnTres)
    console.log(btnCuatro)

    btnUno.addEventListener('click', () => {
        btnUno.style.backgroundColor = 'crimson'
    })
    btnDos.addEventListener('click', () => {
        btnDos.style.backgroundColor = 'gray'
    })
    btnTres.addEventListener('click', () => {
        btnTres.style.backgroundColor = 'lightgreen'
    })
    btnCuatro.addEventListener('click', () => {
        btnCuatro.style.backgroundColor = '#5f85eb'
    })
}

// v1()

function v2() {
    const btnUno = document.querySelector('#btn-1')
    const btnDos = document.querySelector('#btn-2')
    const btnTres = document.querySelector('#btn-3')
    const btnCuatro = document.querySelector('#btn-4')

    console.log(btnUno)
    console.log(btnDos)
    console.log(btnTres)
    console.log(btnCuatro)

    btnUno.addEventListener('click', () => {
        btnUno.style.backgroundColor = 'crimson'
    })
    btnDos.addEventListener('click', () => {
        btnDos.style.backgroundColor = 'gray'
    })
    btnTres.addEventListener('click', () => {
        btnTres.style.backgroundColor = 'lightgreen'
    })
    btnCuatro.addEventListener('click', () => {
        btnCuatro.style.backgroundColor = '#5f85eb'
    })
}

// v2()

function v3() {
    const botones = document.querySelectorAll('div button')
    
    console.log(botones)

    const arrayColores = ['crimson', 'rebeccapurple', 'darkblue', 'darkorange']

    botones.forEach((boton, i) => {
        boton.addEventListener('click', () => {
            boton.style.backgroundColor = arrayColores[i]
        })
    });
}

//v3()

function v4() {

    const botones = document.querySelectorAll('div button')
    //const botones = document.querySelectorAll('div button')
    //console.log(botones)
    const contenedor = document.querySelector('div')
    console.log(contenedor)
    // El addEventListener -> Le entregan al callback un objeto que representa el evento.
    contenedor.addEventListener('click', function(evento) {
    // console.log(evento) // e, evt, event, evento.
    // target dentro del objeto evento representa al elemento que disparo el evento.
    console.log(evento.target)
      //console.log(evento)

    if ( evento.target.localName !== 'div' ) {
        console.log('Hicieron click en algún botón')

        evento.target.style.backgroundColor = evento.target.dataset.color

        /* console.dir(evento.target) */

    } 

    /* if ( evento.target.localName === 'div' ) {
        console.log('Hicieron click en el div')
    } else {
        console.log('Hicieron click en algún botón')
    } */
})

}

v4()

