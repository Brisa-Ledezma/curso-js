import './style.css'

//nos permite acceder archivos 
//gestionamos tiempo de espera, de procesamiento, de lectura

/* -------------------------------------------- */
console.warn('/* Comunicación asincrónica con AJAX */')
/* -------------------------------------------- */

/* --------------------------------------------------- */
/* Comunicación asincrónica con AJAX                   */
/* AJAX: Asyncronous JavaScript and XML                */
/* Un objeto llama XMLHttpRequest (Con eso trabajamos) */
/* --------------------------------------------------- */

// ----> 

// ! XML (Archivo de texto plano)
// * Nos permite transmitir información de manera estandar y liviana del backend al frontend por ejemplo

// https://es.wikipedia.org/wiki/Extensible_Markup_Language

// ! JSON (Archivo de texto plano)
// * JavaScript Object Notation
// * Nos permite transmitir información de manera estandar y liviano del backend al frontend por ejemplo

// https://es.wikipedia.org/wiki/JSON

// ! PROTOCOLO HTTP

// https://reparartuordenador.com/como-funciona-el-protocolo-http

// ! Métodos (verbos) HTTP

// Además de los métodos disponibles en los formularios (GET y POST)
// ABM (acronimo) -> ALTA, BAJA, MODIFICACIÓN
// CRUD (acronimo) -> C:CREATE | R:READ | U:UPDATE | D:DELETE
// M.HTTP ->          POST     | GET    | PUT      | DELETE

// https://developer.mozilla.org/es/docs/Web/HTTP/Methods

// https://www.atatus.com/glossary/content/images/2021/07/CRUD.jpeg

// ! Status HTTP
// Es la respuesta que nos va a entregar el backend. El resultado de la comunicación.

// * Respuesta informativas (100-199)
// * Respuesta satisfactorias (200-299)
// * Redirecciones (300-399)
// * Errores de clientes (400-499)
// * y errores de los servidores (500-599)

// https://developer.mozilla.org/es/docs/Web/HTTP/Status
// https://http.cat/
// https://httpstatusdogs.com/
// https://www.youtube.com/shorts/TtYLv8COtJk

// ! Headers HTTP
// Dentro del protocolo HTTP los archivos va a tener una cabecera de petición y una cabecera de respuesta

// https://developer.mozilla.org/es/docs/Web/HTTP/Headers

// API Productos

// GET -> CRUD -> R:READ -> http://localhost:8080/productos
// POST -> CRUD -> C:CREATE -> http://localhost:8080/productos + el nuevo producto
// PUT -> CRUD -> U:UPDATE -> http://localhost:8080/productos/id + el producto editado
// DELETE -> CRUD -> D:DELETE -> http://localhost:8080/productos/id

// ! Secuencial -> Sincronico - bloqueante
/* console.log('Inicio')
for (let index = 0; index < 1e9; index++) { } // 1.000.000.000
for (let index = 0; index < 1e10; index++) { } // 10.000.000.000
console.log('Fin') */

// Hilos de procesamiento. 

// ! No Secuencial -> Asincronicos -> No bloqueante

/* console.log("Inicio");
/* console.log("Inicio"); */

// BOM -> API del Navegador
//setTimeout(() => {}
/* setTimeout(() => {
  console.log("Tarea Asíncrona"); // Esta tarea asincronica se ejecuta en otro hilo (Como si fuera en otro hilo)
}, 8000);
}, 8000); */

// setTimeout(cb, mili)

/* console.log("Fin"); */

/* Para resolver la situación que tenemos con Javascript vamos a utilizar las API WEB */

/* WEB API -> dentro del objeto window (XMLHttpRequest) -> callbacks -> axios */
// https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest_API

// ----> Callback Hell -> Piramide de la perdición.

/* WEB API -> dentro del objeto window (fetch) -> Promise -> promesas -> azucar sintactica */
// https://developer.mozilla.org/es/docs/Web/API/Fetch_API

// Promesas (Promises)

// https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Using_promises

/* -------------------------------------------- */
console.warn('/* Promesas */')
/* -------------------------------------------- */

//Una promesa es un objeto que representa un valor que puede estar disponible ahora, en el futuro o nunca. 


// Una promesa tiene tres estados:

// Pendiente (pending): está en proceso.
// Se cumplió (fulfilled): se resolvió exitosamente.
// No se Cumplió -> Rechazada (rejected): ocurrió un error.
// ---------------------------
// Promise(cb) <--- una función pasada como argumento de otra
// resolve y reject son referencias de funciones
// resolve -> Se usa cuando quiero que se cumpla la promesa
// reject -> Se usa cuando quiero que no se cumpla promesa

//setTimeout(cb, mili)

console.log("Fin");

//const miPromesa = new Promise(() => {})

// ! Promesa que siempre se cumple
/*
const miPromesa = new Promise((resolve, reject) => {
    resolve('Se cumplió') // Gracias a que uso el resolve, la promesa siempre se va a cumplir
}) 

// ! Promesa que siempre se cumple
const miPromesa = new Promise((resolve, reject) => {
    reject('No se cumplió') // Nunca se va cumplir
}) 

const miPromesa = new Promise((resolve, reject) => {
  const fueAlCumple = false

  if (fueAlCumple) {
    resolve('Todo salio bien -> Se cumplió')
  } else {
    reject('Algo salió mal -> No se cumplió')
  }
})
console.log(miPromesa)*/
// console.log(miPromesa)
//   /*                 'Luis' , true
/* function vinoAlCumple(persona, vino) {

    const miPromesa = new Promise((resolve, reject) => {

      if ( vino ) {
        const obj = { nombre: persona, mensaje: 'Vino a mi cumple (Cumplió)' }
        resolve(obj)
      } else {
        const obj = { nombre: persona, mensaje: 'No vino a mi cumple (No Cumplió)'}
        reject(obj)
      }

    })

    return miPromesa

}

// const promesaDevuelta = vinoAlCumple('Luis', true)
const promesaDevuelta = vinoAlCumple('Ana', false)
console.log(promesaDevuelta) */
//setInterval() -> se va a ejecutar algo cada cierto tiempo
//setInterval(() => {
//  console.log('me ejecuto cada 2 seg.');
//  console.log(new Date())
//}, 2000); //1 seg -> son 1000 milisegundos

//setTimeout() -> se va a ejecutar algo lugo de cierto tiempo
//setTimeout(() => {
//  console.log('pasaron 5 segundos');
//},5000);

//claerInterval | claerTimeOut | interrrumpen el set interval y setyimeout

/* 
const promesaFetch = fetch('http://localhost:8080/productos/')

console.log(promesaFetch)

promesaFetch //gestionamos las promesas con then y catch
  .then((data) => {
    console.log(data) // <--- esto es lo que nos devolvió el fetch <--- en el caso de que la promesa se cumple
    const promesa = data.json() // <--- Objeto que representa una respuesta HTTP
    return promesa
  }) // Promesa se cumple
  .then((productos) => {
    console.log(productos)
  })
  .catch((error) => {
    console.error(error)
  }) // Promesa no se cumple
// ! GET ALL -> TODOS LOS PRODUCTOS

const getAll = () => {
  const promesaFetch = fetch('http://localhost:8080/productos/')

  console.log(promesaFetch)

  promesaFetch
    .then((data) => {
      console.log(data) // <--- esto es lo que nos devolvió el fetch <--- en el caso de que la promesa se cumple
      const promesa = data.json() // <--- Objeto que representa una respuesta HTTP
      return promesa
    }) // Promesa se cumple
    .then((productos) => {
      console.log(productos)
    })
    .catch((error) => {
      console.error(error)
    }) // Promesa no se cumple
}
// getAll() */

// ! GET ONE -> UN SOLO PRODUCTO

const url = import.meta.env.VITE_ENDPOINT_PRODUCTOS

const getOne = (url, id) => {

  const urlUnProducto = url + id
  //console.log(urlUnProducto)

  const objPromesa = fetch(urlUnProducto) // Es una promesa que me devuelve el objeto response

  objPromesa
    .then((res) => {
    /* .then((res) => {
      //console.log(res)
      // Cualquier cosa que haga que vos tengas una promesa dentro del then() va necesario que en ese retornes.
      const promesaJSON = res.json()
      return promesaJSON
    })
    }) */
    //.then((res) => res.json())
    //.then((producto) => {
      //console.log(producto) // Voy a tener el producto con id 3
    })


}

getOne(url, 3)
// getOne(url, 3)

// Variables de entorno ->https://vite.dev/guide/env-and-mode

// CRUD 
//const urlUsuarios = import.meta.env.VITE_ENDPOINT_USUARIOS

// C:CREATE

const createUser = (url, nuevoUsuario) => {

  //console.log(url)
  //console.log(nuevoUsuario)

  // Objeto de configuración de la petición
  const options = {
    method: 'POST', // Por defecto es GET
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(nuevoUsuario) // convertir un obj de js en un string (Lo necestia el protocolo http)
  }

  const promesaRespuesta = fetch(url, options) // por defecto fetch hace peticiones con el verbo GET

  promesaRespuesta
    .then((res)=> {

      if ( !res.ok ) {
        throw new Error('Ocurrió un error')
      }

      const promesaJSON = res.json()
      return promesaJSON
    })
    .then((data)=> {
      console.log(data) // Producto creado con ID -> EL ID LO CREA EL BACKEND
    })
    .catch((err)=> {
      console.error(err)
    })

}

const objNuevoUsuario = { 
  nombre: "Pedro Sanchez", 
  email: "pedro.sanchez@example.com" 
}

createUser(urlUsuarios, objNuevoUsuario)

// R:READ

const urlUsuarios = import.meta.env.VITE_ENDPOINT_USUARIOS
console.log(urlUsuarios)

const getOneUser = (url, id) => {

  //console.log(url)
  //console.log(id)
  const urlUnUsuario = url + id
  console.log(urlUnUsuario);

  const respuestaPromesa = fetch(urlUnUsuario)

  //console.log(respuestaPromesa) // pedding
  respuestaPromesa
    .then((res) => {
      //console.log(res)
      if( !res.ok ) {
        //console.log('Salió todo mal')
        //return Promise.reject('Error: Algo salió mal')
        throw new Error('No se pudo cargar (Creando error)')
      } 
      //debugger
      console.log(res)
      const promesaJSON = res.json()
      return promesaJSON
    })
    .then(data => {
      console.log(data) // El producto con el ID -> 4
    })
    .catch((err) => {
      console.log(err);
    })

}

getOneUser(urlUsuarios, 4)

// U:UPDATE
// D:DELETE

