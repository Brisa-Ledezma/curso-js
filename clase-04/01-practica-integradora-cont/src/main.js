import './style.css'

    const producto1 = { id: 1, nombre: 'Notebook', precio: 1200, img: 'https://placehold.co/400' } // objeto

    const producto2 = { id: 2, nombre: 'PC', precio: 900, img: 'https://placehold.co/400' } // objeto
    const producto3 = { id: 3, nombre: 'Auriculares', precio: 200, img: 'https://placehold.co/400'} // objeto
    const producto4 = { id: 4, nombre: 'Mouse', precio: 100, img: 'https://placehold.co/400' }
    const producto5 = { id: 5, nombre: 'Monitor', precio: 300, img: 'https://placehold.co/400' }

    // array de objetos (productos)
    const productos = [producto1, producto2, producto3, producto4, producto5] // array

    console.log(productos)

const start = () => {


    // Recorro el array de objetos y voy mostrar objeto por objeto
    for (const producto of productos) {
        console.log(producto);
        // De cada producto, extraigo cada clave
        for (const clave in producto) {       
            console.log(clave, ' : ', producto[clave]);
        }
    }
    const contenedor = document.getElementById('contenedor');
    console.log(contenedor);

    productos.forEach(producto=>{
        console.log(producto);
        //creaamos un elemento dinamicamente
        const card = document.createElement ('div');
        console.log(card);
        //agregamos una clase
        card.classList.add('card');

        //inyectamos dentro de la card el  contenido
        const imagen = document.createElement('img');
        const titulo = document.createElement('h3');
        const precio = document.createElement('p');
        const button = document.createElement('button');
        
        imagen.src = producto.img
        imagen.alt = producto.nombre
        
        card.innerHTML=`
        <img src="${producto.img}" alt= "${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <p> precio:$${producto.precio}</p>
        <button class = "btn">agregar</button>
        `
        //console.log(card);

        contenedor.appendChild(card);
        
        console.log(document.getElementsByTagName('h3')); 
        console.log(document.querySelectorAll('h3'));
    })
}

const start1 = () => {

}
const start2 = () =>{

}
const start3 = () =>{
    
}

 document.addEventListener('DOMContentLoaded', start)
