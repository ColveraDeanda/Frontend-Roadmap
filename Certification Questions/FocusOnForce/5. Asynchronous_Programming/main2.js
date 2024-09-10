/* Ya que JS es single thread, solo es posible ejecutar 1 tarea a la vez. JS no espera por tareas
asincronas para completar y sigue ejecutando las tareas sincronas en el call stack, y cuando termina,
el event loop checa si hay algo pendiente en el message queue, si es así, empuja esa tarea al call stack
para su ejecucuín y sigue el mismo proceso hasta finalizar todas las tareas asincronas.
*/

//* Conceptos clave:
/* Call Stack: El call stack es el encargado de ejecutar las funciones/tareas 1 a la vez. Una vez que
               la tarea es ejecutada y completada, se elimina del call stack.
   Heap: Objetos que son creados durante el runtime son guardados en el heap. It is a term used to describe 
         a large region of memory in the running machine.
   Queue: Es donde estarán los callbacks esperando a ser empujados al call stack para su ejecución.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* El siguiente código demuestra que JS es single thread (solo ejecuta un proceso a la vez):
document.getElementById('button').addEventListener('click', function (e) {
    console.log('button clicked');
});

function freeze(duration) {
    console.log(`Freeze browser for ${duration} seconds.`);
    let start = Math.floor(Date.now() / 1000);
    while ((Math.floor(Date.now() / 1000) - start) < duration) {
        // loop ...
    }
    console.log(`The browser froze for ${duration} seconds.`);
}
//freeze(5)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo para visualizar que es lo que se ejecuta primero:
function ejemplo1() {
    console.log('Turn on the faucet');
    setTimeout(() => {
        console.log('Wash your hands');
    }, 0);
    console.log('Turn off the faucet');
}
//ejemplo1();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo 2:
function ejemplo2() {
    let diff = Math.floor(Date.now() / 1000);
    console.log('Started at 0 seconds');

    setTimeout(() => {
        let t = Math.floor(Date.now() / 1000) - diff;
        console.log(`processed at ${t} seconds`);
    }, 1000);

    setTimeout(() => {
        let t = Math.floor(Date.now() / 1000) - diff;
        console.log(`processed at ${t} seconds`);
    }, 1000);

    //* Debido al while, el navegador se congelará por 3 segundos y después continuará los procesos pendientes.
    let start = Math.floor(Date.now() / 1000);
    while ((Math.floor(Date.now() / 1000) - start) < 3) {
        // loop...
    }
}
//ejemplo2();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// En este ejemplo primero ejecutará el 1er y 3er console.log y finalmente ejecutará el console.log que se
// encuentra en el callback.
function ejemplo3() {
    console.log('Check status of link.');

    var xhr = new XMLHttpRequest();
    xhr.addEventListener("load", function () {
        console.log(`Status code is ${this.status}.`);
    });
    xhr.open("GET", "http://www.example.org/");
    xhr.send();

    console.log('Request has been sent.');
}
//ejemplo3();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function ejemplo4() {
    function feedback() {
        console.log('Please wait for your request to complete.');
    }

    function getNameById(uid) {
        console.log(`Retrieving name of user with ID ${uid}.`);

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("load", function () {
            let name = this.response.data.first_name + ' ' + this.response.data.last_name;

            setTimeout(() => {
                console.log(`Name of the user is ${name}.`); // log name of user
            }, 0);

            console.log('Name of the user has been retrieved.');
        });

        xhr.responseType = "json";
        xhr.open("GET", "https://reqres.in/api/users/" + uid);
        xhr.send();

        feedback();
    }
    getNameById(2);
}
//ejemplo4();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* MonitorEvents:
/* Es una función disponible en la consola para monitorear los eventos de un elemento HTML específico.
   Esto es de gran ayuda para monitorear algún o algunos eventos desde consola directamente.
*/
let myButton = document.getElementById('button');
//* Poner lo siguiente en consola para monitorear:
    // 1. monitorEvents(myButton, 'click')
    // 2. monitorEvents(myButton, ['click', 'mouseover']);
    // 3. monitorEvents(myButton, 'mouse') (disparará todos los eventos asociados con mouse).
    //* Shortcut:
    // 4. monitorEvents($0, 'click') //? $0 se refiere al elemento, ésto se obtiene dándole click al elemento desde el navegador.
//* Poner en consola para desmonitorear ==> unmonitorEvents(myButton, 'click');









