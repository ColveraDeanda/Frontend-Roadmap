// **** DECORADORES **** //
/** Es una forma de agregar un comportamiento adicional a una función existente sin tener que
 *  modificar un código original.
 */
function displayName(name) {
    console.log(name);
}
function displayNameDecorator(fn) {
    return function (name) { // De este forma podemos manipular el parámetro de la función original.
        const str = `Welcome to the hotel, ${name}!`;
        fn(str);
    }
}
const customerName = displayNameDecorator(displayName);
customerName('John Wayne');

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo 2:
var data;
// Decorator function to handle errors
function errorHandlerDecorator(fn) {
    return function (...args) {
        try {
            console.log('Trying function: ' + fn.name);
            fn(...args); // Se invoca la función con sus posibles parámetros.
        } catch (err) {
            console.log(err);
        }
    }
}

function parse(str) {
    let obj = JSON.parse(str);
    console.log(obj);
    return obj;
}
function getUser() {
    data.user = localStorage.getItem('user');
}
let parseFn = errorHandlerDecorator(parse);
let getUserFn = errorHandlerDecorator(getUser);

parseFn('/={}');
getUserFn();

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo 3:
// función decoradora para imprimir logs a la función:
function log(obj, fn) {
    return function () {
        console.log('Execution of:' + fn.name);
        console.time('fn'); // time y timeEnd servirán para medir el tiempo en un bloque de código.
        let val = fn.call(obj); //* Cuando se tenga que llamal al método, se tiene que 'bindear' con el objeto que se está trabajando.
        console.timeEnd('fn');
        return val;
    }
}
// class declaration:
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // método a decorar:
    getUser() {
        return `[${this.name}][${this.age}]`;
    }
}
let obj = new User('James', 24);
let getUser2 = log(obj, obj.getUser); // Se decora el método de la clase
console.log(getUser2());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo 4: Usando sintaxis @ para decorar un método:
// Decorator function:
/**
 * 
 * @param {con target, se tiene acceso al objeto (como propiedades).} target 
 * @param {nombre del método que se está decorando} name 
 * @param {descriptor.value contendrá el método que queremos invocar} descriptor 
 * @returns 
 */
function methodLogger(target, name, descriptor) {
    console.log(`Class: ${target.constructor.name} Method: ${name}`);
    let fn = descriptor.value;
    descriptor.value = () => {
        console.log(`${name} function started`);
        return fn();
    }
    return descriptor;
}

class Human {
    constructor(name) {
        this.name = name;
    }

    // Decorando class method:
    /* @methodLogger
    save(name) {
        localStorage.setItem('name', name);
        return 'Successful';
    } */
}
let human = new Human('Sam');
//console.log(human.save());

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo 4: Usando sintaxis @ para decorar una class:
//* En este caso, solo puede recibir un parámetro = target.
// ! Se puede utilizar para modificar el constructor de la clase:
function generateIdDecorator(target) {
    console.log(`${target.name} class constructor modified`);
    return function (date, type, value) {
        this.date = date;
        this.type = type;
        this.value = value;
        // Se agrega una nueva propiedad gracias al decorador:
        this.id = 123123;
    }
}

/* @generateIdDecorator
class Transaction {
    constructor(date, type, value) {
        this.date = date;
        this.type = type;
        this.value = value;
    }
} */
//let transaction = new Transaction(new Date(), 'Internal', 50000);
//console.log(transaction); // El objeto contendrá la nueva propiedad.


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// *Uso de getOwnPropertyDescriptor:
/* El método Object.getOwnPropertyDescriptor() se utiliza para obtener la descripción 
   (value, writable, enumerable, configurable) de una propiedad específica de un objeto. 
 */
class Delivery {
    constructor(id, date, destination) {
        this.id = id;
        this.date = date;
        this.destination = destination;
    }
}
let delivery = new Delivery('LX232', new Date(), 'DXB');
let descriptor = Object.getOwnPropertyDescriptor(delivery, 'destination');
console.log(descriptor);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** A decorator can be used to modify the attributes of the property descriptor that is received as a 
 *  parameter. For example, it can be used to make a class method read only by setting the value of 
 *  the writable attribute to false.
 */
function readOnlyDecorator(target, name, descriptor) {
    console.log(`[Class=${target.constructor.name}] [Method=${name}]`);
    descriptor.writable = false; //* Se está decorando un método, por lo que tenemos acceso al descriptor para manipular el método.
    return descriptor;
}
class Product {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    // Decorated class method
    @readOnlyDecorator
    getProduct() {
        return `[ID=${this.id}] [Name=${this.name}]`;
    }
}
let product = new Product("YK232", "Apples");

// Trying to overwrite "getProduct" method
/* Se intenta sobrescribir el método getProduct() con una función vacía. Sin embargo, debido al 
   decorador de solo lectura, la sobrescritura falla
*/
product.getProduct = () => { };
console.log(product.getProduct()); // Output: [ID=YK232] [Name=Apples]

