//* Formas para crear un objeto:
// Object() constuctor
let user1 = new Object();
user1.name = 'Jam';

// Object literal
let user2 = {
    name: 'Mary Jane',
    age: 30,
    admin: true
}

// Object.create() method
let user3 = Object.create({});
user3.name = 'Isabel';

///////////////////////////////////////////////////////////////////////////////////////////////////
// Se puede acceder a con notación de punto o corchete.
console.log(user1.name);
console.log(user1['name']);
delete user2.age // delete keyborad para eliminar propidades de un objeto
console.log(user2);

//* Recorrer un objeto:
for (let prop in user2) {
    console.log(prop);
    console.log(user2[prop]);
}

console.log(Object.entries(user2));
//* Métodos para extraer las keys:
console.log(Object.keys(user2));
console.log(Object.getOwnPropertyNames(user2));

///////////////////////////////////////////////////////////////////////////////////////////////////
//* Para declarar un método dentro de un objeto, hay 2 formas:
let user4 = {
    greeting(greet) {
        console.log(`${greet}!`);
    },
    greeting2: function (greet) {
        console.log(`${greet}!`);
    }
}
user4.greeting('Hola');
user4.greeting2('Hola');

///////////////////////////////////////////////////////////////////////////////////////////////////
let user5 = {
    firstName: 'Mary',
    lastName: 'Smith',
    greeting() {
        // 'this' en este caso, es el objeto actual.
        console.log(`${this.firstName}, ${this.lastName}`);
    }
}
user5.greeting();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* 'get' se utiliza para obtener el valor de una propiedad de un objeto de una manera controlada.
//* 'set' se utiliza para establecer el valor de una propiedad de un objeto.
const persona = {
    nombre: 'Juan',
    edad: 30,
    get nombreCompleto() {
        return this.nombre;
    },
    set changeName(newName) {
        this.nombre = newName
    }
};

console.log(persona.nombreCompleto); //* Se accede al get sin los paréntesis.
persona.changeName = 'Cristobal';
console.log(persona.nombreCompleto);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function passPrimitive(name) {
    name = 'Jerry';
}
let person = 'Tom';
passPrimitive(person)
console.log(person); // En el caso de varialbes, tendrán su propio espacio en memoria.

// Para objetos y arreglos se está haciendo referencia al mismo espacio en memoria.
function passObject(settings) {
    settings.on = true;
}
let conf = {
    device: 'Microwave',
    on: false
}
passObject(conf);
console.log(conf);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Métodos static para Objetos //

// Assign: para hacer una copia de un objeto con distinto espacio en memoria.
let scores = {
    quiz: 'Quiz 1',
    scores: [80, 78, 67, 90]
};
let copyScores = Object.assign({}, scores) //* Copy the values of all of the enumerable own properties from one or more source objects to a target object 
copyScores.scores = [];
console.log(scores);
console.log(copyScores);

// hasOwnProperty: Para saber si mi obj tiene alguna propiedad específica.
let meetingRoom = {
    canReserve: true,
    capacity: 10
}
console.log(meetingRoom.hasOwnProperty('canReserve'));

// freeze: se utiliza para hacer que un objeto sea inmutable, 
//         lo que significa que las propiedades del objeto no se pueden modificar, agregar o eliminar
const user6 = { role: 'guest' };
Object.freeze(user6);
user6.role = 'admin';
console.log(user6);

/* preventExtensions: para evitar que se agreguen nuevas propiedades a un objeto existente. 
                      Una vez que un objeto se ha convertido en no extensible, ya no se pueden agregar nuevas 
                      propiedades, aunque todavía se pueden modificar o eliminar las propiedades existentes. */
const user7 = { role: 'guest' };
Object.preventExtensions(user7);
user7.hola = 'hola' //* Ésta línea será ignorada
console.log(user7);

// defineProperty:  se utiliza para agregar una nueva propiedad a un objeto existente 
// o modificar una propiedad existente en un objeto = Object.defineProperty(obj, prop, descriptor)
Object.defineProperty(user2, 'isStudent', {value: 34});

/* El método Object.seal() se utiliza para hacer que un objeto sea "sellado", lo que significa 
que las propiedades existentes del objeto se pueden modificar, pero no se pueden agregar o eliminar 
nuevas propiedades. */
const user8 = {role: 'admin'};
console.log(user8);
Object.seal(user8);
delete user8.role; // Ésta línea es ignorada ya que user8 está sellado.
console.log(user8);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//** Herencia a travéz del prototipo ** //
/* Un objeto puede heredar propiedades y métodos mediante su prototipo.
 * En el ejemplo de abajo, boardRoom se crea mediante Object.create(), lo que significa que meetingRooms
 * se convierte en el prototipo de boardRoom.
 * Object.create() es una forma de heredar propiedades y métodos a otro objeto mediante el prototipo.
 */
let meetingRooms = {
    reservable() {
        if(this.hasOwnProperty('canReserve')) {
            return this.canReserve;
        } else {
            return false;
        }
    },
    location: 'mainBuilding'
};

let boardRoom = Object.create(meetingRooms)
boardRoom.canReserve = true;
boardRoom.capacity = 10;
boardRoom.location = 'saletlite'; // Se sobreescribe location.
console.log(boardRoom);
console.log(boardRoom.reservable());

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// En una función constructora se debe usar 'this' para establecer propiedades.
function Animal(name) {
    this.name = name;
}
let cat = new Animal('Kitty');
let dog = new Animal('Puppy');

// * hello() está en el prototipo de Animal, ambos objetos: cat y dog heredan el método y pueden llamarlo.
Animal.prototype.hello = function () {
    console.log(`Hello, my name is ${this.name}`);
}
cat.hello();
dog.hello();





