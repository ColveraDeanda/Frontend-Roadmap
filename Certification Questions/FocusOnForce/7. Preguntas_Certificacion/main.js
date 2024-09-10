// todos los siguientes retornan `false`:
Boolean(false)
Boolean(0)
Boolean(-0)
Boolean(0n)
Boolean("")
Boolean('')
Boolean(``)
Boolean(null)
Boolean(undefined)
Boolean(NaN)

// ! cualquier otro valor retorna `true`
Boolean(true)
Boolean([])
Boolean({})
Boolean('Hola mundo')
Boolean(new Date())

/* En los contextos en que un valor booleano es lo esperado, y se utiliza en su lugar un valor
que diferente tipo, JavaScript lo fuerza de manera implícita a comportarse como booleano. */

/**
 * *The ReferenceError object represents an error when a variable that doesn't exist (or hasn't yet been 
 * *initialized) in the current scope is referenced.
 */

/**
 * * El objeto TypeError representa un error cuando una operación no puede ser completada, típicamente 
 * * (pero no exclusivamente) cuando un valor no es del tipo esperado.:
 *   * Un TypeError puede ser lanzado cuando: Un operando o argumento pasado a una función es incompatible 
 *   * con el tipo esperado por el operador o función.
 *   * Cuando se intenta modificar un valor que no puede ser alterado.
 *   * Cuando se intenta usar un valor de una forma inapropiada.
 */

// TODO: Checar video de Midu donde 'JS Weird'...

// *Ejercicio 1:
const one = null || {} || null;
const two = '' || '' || 0;
const three = 0 || [] || true
console.log(one, two, three) 

// *Ejercicio 2:
const myPromise = () => Promise.resolve('I have resolved!');
function firstFunction() {
    myPromise().then(res => console.log('first'+ res));
    console.log('first');
}
async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
}
firstFunction();
secondFunction();

// *Ejercicio 3:
function compareMembers(person1, person2 = person) {
    if(person1 !== person2) {
        console.log('Not the same!');
    } else {
        console.log('They are the same!');
    }
}
const person = {name: 'Nikhil'};
compareMembers(person);

// * Ejercicio 4:
const colorConfig = {
    red: true,
    blue: false,
    green: true,
    black: true,
    yellow: false
};
const colors = ['pink', 'red', 'blue'];
//console.log(colorConfig.colors[1]); // ! TypeError

// * Ejercicio 5:
let name = 'Nikhil';
function getName() {
    //console.log(name); // ! ReferenceError
    let name = 'Karkra';
}
getName();

// * Ejercicio 6:
console.log(`${(x => x)('i love')} to program`);
// ? este código define una función anónima que toma un argumento y lo devuelve sin modificar.

// * Ejercicio 7:
function sumValues(x, y, z) {
    return x + y + z;
}
console.log(sumValues(...[1,2,3]));

// * Ejercicio 9: Identify data type
const num = 123.4566;
console.log(typeof num);
// * Ejercicio 10: What´s the output ?
let output = true + 13 + '200' + null;
console.log(output);

// * Ejercicio 11: What´s the output ?
const box = {x: 10, y:20};
Object.freeze(box);
const shape = box;
shape.x = 100; // ? El objeto estará congelado y no podrá ser cambiado.
console.log(shape); 

// * Ejercicio 12: Find the output
console.log(typeof null); // ! El resultado será object ya que así lo maneja JS desde sus inicios.

// * Ejercicio 13: "which method is use to call function after fixed time interval only once in js"
   // ? Answer: setTimeout

// * Ejercicio 14: Find the output.
console.log(0 === -0);

// * Ejercicio 15: 
setTimeout(() => {
    console.log('1');
}, 0)
console.log('2');
new Promise((resolve, reject) => {
    resolve('3');
}).then(() => {
    console.log('3');
})
console.log('4');
// ! Orden de ejecución ==> 2,4,3,1

// * Ejercicio 16: Find the output.
const dessert = {type: 'pie'};
dessert.type = 'pudding';
console.log(dessert.type);

// * Ejercicio 17: Find Output
console.log(0 && hi); //? si los 2 son true, devuelve el 2do valor. Si uno es false, devuelve el valor falso..

//* Ejercicio 18: Which statement sets the Person constructor as the parent of the Student constructor
//*               in the prototype chain.

//* R = Student.prototype = new Person();

//* Ejercicio 19: What is the result of running this code ?
//* R = 30, referenceError.
sum(10, 20);

//diff(10, 20);
function sum(x , y) {
    console.log(x + y);
}

let diff = function(x, y) {
    console.log(x - y);
}

//* Ejercicio 20: Result of running this code ? 
for(let i = 0; i < 5; i++) {
    console.log(i)
}

//* Ejercicio 21: output ?
let k = 100;
console.log(k++)
console.log(k);
console.log(++k);

//* Ejercicio 22: 
let obj = {
    a: 1,
    b: 2,
    c: 3
}
console.log(Object.keys(obj));

//* Ejercicio 23: value of length ?
var a = ['dog', 'cat', 'hen'];
a[100] = 'fox';
console.log(a.length);


