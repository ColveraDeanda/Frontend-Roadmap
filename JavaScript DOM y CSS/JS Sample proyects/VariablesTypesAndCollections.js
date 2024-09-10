'use strict'
console.log('hola');

// Variable = Is a reference to a Storage location.

// Variables globales: Global variables thatexistanywherein thecodeoutsideofa function block.
let globalVar = 'global here';

// Variables locales: Local variables thatare justaccesible insidea function block.
function myMethod() {
    let localVar = true
}

// The name of a variable is called an identifier.

function myMethod2() {
    let num = 1;
    if(num === 1) {
        var anotherVar = true;
        let anotherVar2 = true;
        const MY_CONST = 'México';
    }
    anotherVar
    // anotherVar2: No se puede acceder ya que "let" respeta el bloque.
    // MY_CONST: No se puede acceder ya que "const" respeta el bloque.
    
}
myMethod2();

/* Hoisting: Calling variables before its declaration.
   We can use strict mode to help us avoid hoisting by adding ‘use strict’ at the top of our js code. */

// Tipos de datos primitivos:
let myString = 'hola';
let myNumber = 1998;
let bigNumber = 234234324324324234324n; // BigInt
let is_boolean = true;
let varUndefined;
let myNullVar = null;
Symbol("desc") // A symbol represents a unique and immutable value.

/*
There’s only one complex data type in JavaScript called Object. 
Any value that’s not primitive is considered to be an Object.
*/

// Se puede declarar un objeto de esta forma: (incluso se pueden acceder al wrapper object de tipos de datos primitivos).
// En este caso, se están creando un objeto String, un objeto Number y un objeto Boolean.
let myObj = new Object({a: '1', b: '2', c: '3'});
let myNewObjString = new String('HOLA');
let myNewObjNumber = new Number(1998);
let myNewObjBoolean = new Boolean(true);
console.log(myObj, myNewObjString, myNewObjNumber, myNewObjBoolean);

// Cuando se usan los métodos sin la palabra clave new, solo se crean varibles primitivas
let usingNumber = Number("4545");
let usingString = String(567575);
let usingBoolean = Boolean(false);
console.log(typeof usingNumber, typeof usingString, usingBoolean);


// Checar sección de New Date()





