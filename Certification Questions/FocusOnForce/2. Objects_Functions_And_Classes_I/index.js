/**
 * Functions are firts class (treated as values).
 * They can act as higher order functions (receive functions as arguments or return functions). 
 */

//* Key point: Es posible manipular una función como si fuera otro value. Por ejem:
function sum(num1, num2) {
    return num1 + num2;
};
const arr = [20, 30, sum];
let result = arr[2](arr[0], arr[1]);
console.log(result);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function fib(num1, num2) {
    let num3 = function () { // Función sin nombre = función anónima.
        return num1 + num2;
    }(); // Función inmediatamente invocada (IIFE) "Immediately Invoked Function Expression".
    return [num1, num2, num3];
}
const arr1 = fib(0, 1);
console.log(arr1);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Nota: Investigar el uso de this en JS.

//* Map:
const nums = [1, 2, 3, 4, 5, 6];
const newNums = nums.map(num => num * 2);
console.log(newNums);

//* Highn Order function que retorna una función.
const multitplyBy10 = function (num) {
    return num1 => num1 * num;
};
const multitply = multitplyBy10(10)
console.log(multitply(5));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* En el caso de disparar un evento, (addEventListener) éste regresará un callback, es decir una función.
La cual solo será ejecutada una vez que se dé click. Es por ello que es asíncrono por que no se va a 
ejecutar hasta que se presione el botón. */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Formas de declarar un función: ///
sayHiDeclaration(); // Se está haciendo hoisting y se va a ejecutar en el caso de declaration
//sayHiExpression(); // Para la función de expresión marcara un error de que no puede inicialiarse antes.

//* Function declaration:
function sayHiDeclaration() {
    console.log(1 + 2);
}
//* Function Expression:
let sayHiExpression = function () {
    console.log(1 + 2);
};

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* CLOSURE */
/** Un closure es una función que tiene acceso a las variables de su ámbito exterior, 
 *  incluso después de que esa función haya terminado de ejecutarse
 */

//* Ejemplo de closure 1:
//* Se tiene acceso a scores[] debido al closure (investigar concepto más a fondo).
function createScoreFunction() {
    scores = [];
    return function (score) {
        scores.push(score);
        console.log(scores.length);
    }
}
const addScore = createScoreFunction()
addScore(3)
addScore(7)

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** La función innerFunction "recuerda" el valor de message en el ámbito exterior, 
 *  incluso después de que outerFunction haya terminado de ejecutarse.
 */
//* Ejemplo de closure 2:
function outerFunction() {
    const message = "Hola, soy una variable en el ámbito exterior.";
    function innerFunction() {
        console.log(message);
    }
    return innerFunction;
}

//* myFunction es lo que retorna la función.
const myFunction = outerFunction();
myFunction(); // Salida: "Hola, soy una variable en el ámbito exterior."

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// APPLY, CALL, BIND.

//* Los métodos call, apply y bind se utilizan para cambiar el valor de this en una función.

/**
 * Call: Este método se utiliza para invocar una función con un valor específico de this. La sintaxis es la siguiente:
 *       functionName.call(thisValue, arg1, arg2, ...):
 *          - functionName es el nombre de la función que se va a llamar.
            - thisValue es el valor que se va a utilizar como 'this' dentro de la función.
            - arg1, arg2, etc. son los argumentos que se pasan a la función.

    Apply: Este método es similar a call, pero los argumentos se pasan como un array. La sintaxis es la siguiente:
         functionName.apply(thisValue, [arg1, arg2, ...]);

    Bind: Este método se utiliza para crear una nueva función con un valor específico de this.
         const newFunction = functionName.bind(thisValue, arg1, arg2, ...);
 */
let objGreet = {
    morningGreet(punc) {
        console.log(`Good morning ${this.firstName}${punc}`);
    },
    eveningGreet(punc) {
        console.log(`Good evening ${this.firstName}${punc}`);
    }
}
let user1 = {
    firstName: 'Mary'
}
let user2 = {
    firstName: 'Sam'
}

//* Estos métodos servirán para cambiar el valor de this.
objGreet.morningGreet.call(user1, '!');
objGreet.eveningGreet.apply(user2, ['?'])
objGreet.morningGreet.bind(user1, '.')();


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* FUNCIÓN GENERADOR *//
/** Una función generador es una función especial que va a devlover una secuencia de valores. 
 *  En otras palabras, es una función que tiene la capacidad de pausar su ejecución y luego 
 *  reanudarla más tarde, devolviendo un valor cada vez que se llama.
 */

function* miGenerador() {
    yield 1;
    yield 2;
    yield 3;
}
const myGen = miGenerador()
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());
console.log(myGen.next());

function* fibonacciSeq() {
    let start1 = 0; start2 = 1, cnt = 2;
    const sequence = [start1, start2];
    while (cnt <= 100) {
        let newNum = start1 + start2;
        start1 = start2;
        start2 = newNum;
        cnt++;
        sequence.push(newNum);
        //* La palabra clave "yield" se utiliza en funciones de generador para generar un valor que puede ser 
        //* recuperado cada vez que la función se llama.
        yield sequence;
    }
}

const fib100 = fibonacciSeq();
console.log(fib100.next());
console.log(fib100.next());
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* ITERADORES *//
//*  los iteradores son objetos que proporcionan una secuencia de valores utilizando el protocolo de iteración *//
// This example uses an iterator to set up a factorial sequence that is progressive. An upper limit is provided. Each time'next()' is used, a new number and its factorial are displayed.
function progressiveFactorial(upperLimit) {
    let factorial = 1, num = 1;
    const factorialIterator = {
        // This is the iterator object.   
        next() {
            // next method is required for iterator object.
            if (num <= upperLimit) {
                num++;
                factorial = factorial * num;
                return { value: { number: num, factorial }, done: false };
                // return value when more numbers in the sequence are available.     
            }
            return { value: { number: num, factorial }, done: true }; // return value when all numbers have been displayed.   
        }
    };
    return factorialIterator;
    // return the iterator object.
};
let factorial10 = progressiveFactorial(10); // Iterator created with upper limit of 10.
factorial10.next(); // Iterates once, so the number is 2.
console.log(factorial10.next());




