//* let y const respetan el block scope. var no lo respeta
{
    let a = 1;
    const b = 2;
    var c = 10;
}
console.log(c);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* En el caso de const, siempre debe tener un valor.
let fontFamily;
var fontSize;
console.log(fontFamily, fontSize)
// const fontKerning; // Syntax Error = 'const' declarations must be initialized.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo de una variable global = variable que está delcarada fuera de una función.
let name = 'astro';
function printName() {
    changeName();
    console.log(name);
}
function changeName() {
   name = 'Codey';
}
printName();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo de hoisting: La función tiene referencia a la variabe, a pesar de estar declarada después. 
function printAge() {
    console.log(age);
}
printAge()
// let age; can not access variable before inizialization. Lo mismo pasa con const.
var age;  // undefined.


function printAge() {
    console.log(age);
}
printAge()
var age;  
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo de creación de un objeto literal:
var animal = {
    type: 'dog',
    sound: function() {console.log('Woof');}
}
animal.sound();

//* Ejemplo de creación de objeto a travéz de un constructor:
var animal2 = new Object();
animal2.type = 'dog';
animal2.sound = function() {
    console.log('Woof');
}
animal2.sound();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Lo mismo pasa con arrays. Se pueden hacer de 2 formas:
let arr1 = [1,2,3,4,5];
let arr2 = new Array(1,2,4,5,5);
console.log(arr1);
console.log(arr2);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* The Symbol data type allows creating a unique identifier. 
//* A Symbol value can be created by invoking the Symbol function.
// Initialize a Symbol variable.
let name3 = Symbol();
// A string can be passed to the function as its description.
let label = Symbol('label');
// Symbol variables are unique. The following code creates two unique symbols.
let field1 = Symbol('field');
let field2 = Symbol('field');
// The conditions below evaluate to false.
console.log(field1 == field2);
console.log(Symbol('field') == Symbol('field'));

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Array static methods:
console.log(Array.from('123'));
console.log(Array.of('May', 'December'));
console.log(Array.isArray(arr1));

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                            /* SET AND MAP */
/* A Set object is used to store unique values of any type. */
let decades = [1990, 1990, 2000, 2010, 1990, 2000, 2020];
//* En este ejemplo se crea un Set a partir de un array:
let uniqueDecades = new Set(decades);
console.log(uniqueDecades);
uniqueDecades.add(1998)
console.log(uniqueDecades);

/* A Map object is used to store key-value pairs of data. */
let quizScores = new Map();
quizScores.set('quiz1', [100, 90, 80, 95, 60]);
quizScores.set('quiz2', [75, 85, 90, 80, 55]);
quizScores.set('quiz3', [65, 60, 45, 75, 50]);
console.log(quizScores);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Array destructuring example:
const dimensions = [45,565, 60];
let [height, width, length] = dimensions;
console.log(height, width, length);

//* Object destructuring example:
const exam = {
    score: 34,
    duration: 115,
    cert: 'JS1'
}
const { score, duration, cert } = exam;
console.log(score, duration, cert);


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// * Ejercicio:
let numEmployees = 0;
const maxEmployees = 50;
let nameE = '';
let salary = null;
let address = {
    number: null,
    street: null,
    city: null,
    state: null,
    zip: null,
    country: 'United States'
}
let active;
let retrieved = false;





















