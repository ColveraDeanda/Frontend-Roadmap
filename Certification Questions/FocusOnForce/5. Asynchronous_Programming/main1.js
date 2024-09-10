//* Asynchronous Programming:
/* Permite ejecutar código sin bloquearlo, es usado cuando la respuesta a una operación no está disponible
   de inmediato. Código asíncrono es usado con callbacks y promises. 
   - Un callback es una función que será pasado como argumento a otra función. 
   - Una promesa es un objeto que representa una operación resulta o fallida. Esto se determina con sus 
     parámetros (resolve and reject). Then() se utiliza cuando la promesa es resuelta. En caso de que 
     sea rechazada, se usará un catch(). Se pueden concatenar múltiples then() cuando se tienen múltiples
     opereraciones asíncronas.
   - Existe la sintaxys async await para trabajar con promesas. La palabra clave async se pone en la función
     y await se agrega en la operación asíncrona que retornará una promesa. 
*/

//* Ejemplo de callback:
// No se sabe en qué momento se ejecutará este evento. En ese caso se puede considerar una operación asíncrona.
document.querySelector('#complete').addEventListener('click', (e) => {
    console.log('Button was clicked.');
});
console.log('Initial code was finished...');

//* Ejemplo 2:
/* Cuando se terminan de ejecutar las operaciones síncronas, JS verífica la cola de eventos (queue),
   y si la función está lista para ejecutarse, se ejecutará console.log('Timer has finished').
*/
setTimeout(() => {
    console.log('Timer has finished 1');
}, 0);
console.log('Code has finished executing');

// ! Nota importante:
/* JavaScript siempre ejecutará todas las operaciones síncronas primero y solo comenzará a ejecutar las 
tareas asíncronas de la cola de eventos en el mismo orden en el que fueron agregadas. Entonces 
una vez que haya terminado con las tareas síncronas, procederá con todos los procesos asíncronos (callbacks
y promesas).
*/

//* Ejemplo 3:
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
xhr.onload = function () {
    let todo = JSON.parse(xhr.responseText);
    console.log(todo);
}
xhr.send(null);
console.log('Ejemplo 3 finalizado...')

/* Nested callbacks = callback hell: Callback hell es cuando se tiene varios o muchos callbacks uno 
tras otro, y hacen realmente difícil entender el código.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Con el uso de then concatenados, es más fácil leer el código.
//* Uso de fetch: fetch() retornará una promesa:
console.warn('Uso de fetch');
fetch('https://jsonplaceholder.typicode.com/todos/2')
    .then(res => res.json()) // json() retornará una promesa.
    .then(todo => console.log(todo))
    .catch(err => console.log('Ha pasado algo:' + err));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Creación de un método que retornará una promesa:
function time(time) {
    return new Promise((resolve, reject) => {
        if(isNaN(time)) reject('Enter a number');
        let secs = time * 1000;
        setTimeout(() => {
            resolve('Promesa resuelta después de ' + time);
        }, secs)
    });
};
time('f')
    .then(res => console.log(res))
    .catch(err => console.log(err));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Promise chaining: Múltiles promesas anidadas:
fetch('https://swapi.dev/api')
    .then(res => res.json())
    .then(url => {
        return fetch(url.people);
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Promise Static Methods:
const promise1 = new Promise((resolve, reject) => 
  setTimeout(resolve, 1000, 'promise one')
);

const promise2 = new Promise((resolve, reject) => 
  setTimeout(resolve, 2000, 'promise two')
);

const promise3 = new Promise((resolve, reject) => 
  setTimeout(resolve, 1500, 'promise three')
);

const promise4 = new Promise((resolve, reject) => 
  setTimeout(reject, 500, 'promise four error')
);

//* all: Acepta un array de promesas y devolverá un array de promesas solo cuando TODAS las promesa se resuelvan.
Promise.all([promise1, promise2, promise3])
  .then(valueArray => console.log('Primeras 3 promesas resueltas: ', valueArray))
  .catch(err => console.log(err))

//* allSettled: Acepta array de promesa y devolverá el status de cada promesa.
Promise.allSettled([promise1, promise2, promise3, promise4])
  .then(valueArray => console.log('Primeras 3 promesas resueltas: ', valueArray));

//* race: Devolverá la primera promesa que se cumpla ó rechace del array de promesas. 
Promise.race([promise1, promise2, promise3, promise4])
  .then(valueArray => console.log('Race completada: ', valueArray))
  .catch(err => console.log('Race ha fallado: ', err));

//* any: Devolverá solamente la primera promesa que se cumpla. Devolvera AggregateError solo si todas 
//* las promesas fallan.
Promise.any([promise1, promise2, promise3, promise4])
  .then(valueArray => console.log('Any promise: ' + valueArray));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* La sintaxys async await hace más fácil trabajar con promesas: solo requiere async y await keywords.
async function getTodo(id) {
    try {
        let url = 'https://jsonplaceholder.typicode.com/todos/' + id;
        let res = await fetch(url); // await promise to resolve.
        let results = await res.json(); // await promise to resolve.
        console.log(results);
    } catch(err) {
        console.log(err);
    }
}
getTodo(4);


//* Ejemplo 2 con async await:
async function getData() {
    try {
        let resp1 = await fetch('https://swapi.dev/api');
        let urls = await resp1.json();
        let resp2 = await fetch(urls.people);
        let results = resp2.json();
        console.log(results);
    } catch (err) {
        console.log(err);
    }
}
getData();