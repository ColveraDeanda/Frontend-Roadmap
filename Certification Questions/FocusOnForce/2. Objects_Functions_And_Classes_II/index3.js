//* ANALYZE THE VARIABLE SCOPE AND THE EXECUTION FLOW **/

/* TIPOS DE SCOPE EN JS:
   - Global Scope: Tienen un alcance global y son accesibles desde cualquier parte del código.
   - Function Scope: Las variables declaradas dentro de una función solo son accesibles dentro de esa 
                     función y no son visibles fuera de el.
   - Block Scope: Las variables declaradas con let y const tienen un alcance limitado al bloque de código 
                  en el que se declaran.
*/

/* Execution Flow: Se refiere al orden de ejecución de codigo js, tanto sync como async con la ayuda de
                   call stack, message queue and event loop.
 */

/* Execution context: Es el ambiente en donde se está ejecutando el código. Existen 2 tipos de execution
                      context: 1. Global execution context, 2. function execution context,
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Function scope, todo lo que esté declarado dentro de una function js, solo se podrá acceder dentro de la misma.
function descryptData(data) {
    var key = 'AVBFEOL2345';
}
descryptData();
//console.log(key); key is not defined.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Global Scope:
var applicationName = 'Complaint portal';
function logger() {
    console.log(applicationName);
}
logger();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Function Scope:
function power(x, n) {
    var value;
    if (n == 1) {
        value = x;
    } else {
        value = x * power(x, n - 1);
    }
    return value;
}
console.log(power(2, 10));
//console.log(value); // Value is not defined.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Block scope: let y const respetarán el block scope solamente.
function showBlockScope() {
    if (true) {
        let blockScopedVariable = "Soy una variable de alcance de bloque";
        console.log(blockScopedVariable);
    }
    // acceder a la variable fuera del bloque
    console.log(blockScopedVariable);
}
showBlockScope();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Hoisting: Hoisting solo es posible en variables con var, y en funciones con 'function' definition.
var book1 = {
    name: "Harry Potter",
    ISBN: '9781234567897'
};

// Invoke printBook function before defining it
printBook(book1);

// Pass book2 variable before defining it
printBook(book2);
console.log(book2)

// Pass book3 variable without defining it
//printBook(book3); // book3 does not exist.

// Function definition for printBook function
function printBook(book) {
    if (book) {
        console.log("Book => " + book.name);
    } else {
        console.log("Book => Not found");
    }
}

var book2 = {
    name: "Jane Eyre",
    ISBN: '9781264537264'
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Closure: Es cuando se tienen nested functions y la inner function tendrá acceso al entorno de 
            la outer function.
*/
function divisor(x) {
    return function (y) {
        return y / x;
    }
}
let divideBy6 = divisor(6);
let divideBy10 = divisor(10);

console.log(divideBy6(57));
console.log(divideBy10(1000));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Execution flow: Call stack, Message queue and Event loop.
//! Call Stack:
/* Call Stack (Pila de llamadas): Es una estructura de datos LIFO (último en entrar, primero en salir) 
que se utiliza para almacenar la información sobre las funciones que se están ejecutando en un programa. 
Cuando una función se llama, se coloca en la parte superior de la pila. Cuando una función termina, 
se elimina de la pila y se devuelve el control a la función que está debajo en la pila.
*/
//! Message queue:
/* Message Queue (Cola de mensajes): Es una estructura de datos FIFO (primero en entrar, primero en salir) 
donde se almacenan las tareas asíncronas, como eventos de usuario, temporizadores y llamadas a funciones 
asíncronas. Cuando una tarea asíncrona está lista para ejecutarse, se coloca en la cola de mensajes.
*/
//! Event loop:
/* Event Loop: Es el mecanismo que coordina la ejecución entre Call Stack y la Message queue. 
El Event Loop se ejecuta constantemente y verifica si Call Stack está vacía. Si Call Stack 
está vacía y hay tareas en la Message queue, el Event loop mueve la primera tarea de Message 
queue a la Call Stack  para su ejecución.
*/
/* console.log(new Date());
setTimeout(() => {
    console.log('Refreshing');
}, 5000);
console.log('Landing Page'); */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Execution context: Es el ambiente en donde se está ejecutando el código. Existen 2 tipos de execution
                      context: 1. Global execution context, 2. function execution context,
*/
//! Global execution context creation:
/* 1. Global object is created.
   2. 'this' object is created.
   3. Memory space for variables and functions is created.
   3. Variables are assigned a default value of 'undefined' and functions declarations are placed 
      in memory (hoisting).
*/

//! Function execution context creation:
/* 1. 'Arguments' object is created and assigned function arguments.
   2. 'this' object is created.
   3. Memory space for variables and functions is created. 
   4. Variables are assigned a default value of 'undefined' and functions declarations are placed 
      in memory (hoisting).
   5. Argument variables are created and assigned with values.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Control flow example:
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        // Si el número es impar, salta al siguiente número del ciclo
        continue;
    }
    if (i > 6) {
        // Si el número es mayor que 6, rompe el ciclo
        break;
    }
    console.log(i);
}

//* Browser and events => empezar con ese, 1er vídeo




