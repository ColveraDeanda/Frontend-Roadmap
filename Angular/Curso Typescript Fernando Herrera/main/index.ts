const age: number = 25;
let food: string | number = 'Taco';
const isHigh: boolean = true;

const skills: (string | number)[] = ['Fly', 'Raio laser', 12];
const myHps: number[] = [1, 2, 3, 4, 5, 6];

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Las interfaces son de gran ayuda para designar un tipo de dato a un objeto
interface Characters {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string;
    showHp: () => void;
}

const striker: Characters = {
    name: "iStrikerbot",
    hp: 100,
    skills: ['Power', 'Strength'],
    showHp: function (): void {
        console.log("Function not implemented.");
    }
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Funciones en ts:
function multiply(firtNumber: number, second?: number, base: number = 10): number {
    return firtNumber * base;
}
const multyplyNumber = multiply(5);

function healCharacter(character: Characters, healamount: number) {
    character.hp += healamount;
}
healCharacter(striker, 400);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Desestructuracion: 
interface AudioPlayerDetails {
    author: string;
    year: number;
}
interface AudioPlayer {
    audioVolume: string;
    songDuration: number;
    song: string,
    details: AudioPlayerDetails;
}
const audioPlayer: AudioPlayer = {
    audioVolume: "max",
    songDuration: 100,
    song: "Song",
    details: {
        author: "Yo",
        year: 2023,
    }
}
const audioVolume: string = 'Otro volumen';

//* Renombrar la variable al momento de desestructurar.
//* Tambien se ve como desestructurar un objeto (details) dentro del objeto AudioPlayer.
const { audioVolume: anotherAudioVolume, details: { author, year } } = audioPlayer;
console.log(anotherAudioVolume);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Desestructuracion de arreglos:
const [p1, , p3 = 'Valor no definido']: string[] = ['Goku', 'Vegeta', 'Gohan'];
// Se puede ignorar algun elemento dejandolo en blanco. 
//Tambien, se puede poner un valor por defecto aqui (p3).
console.log(p1 || 'Valor no definido');
console.log(p3);//* En caso de que p3 no exista, tendra su valor por defecto.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejercicio de desestructuracion:
interface Product {
    description: string;
    price: number;
}
const phone: Product = {
    description: "Nokia",
    price: 4000
}
const tablet: Product = {
    description: "iPad",
    price: 6500
}

interface TaxCalculationOptions {
    tax: number;
    products: Product[];
}

function taxCalculation(options: TaxCalculationOptions): [number, number] { //se pudo haber puesto number[] de igual forma, pero con una tupla queda mejor en este caso
    const { tax, products } = options;
    let total = 0;
    products.forEach(({ price }) => {
        total += price;
    })

    return [total, total * tax];
}

const shoppingCart: Product[] = [phone, tablet];
const tax: number = 0.15

const [total, totalWithTax] = taxCalculation({
    products: shoppingCart,
    tax // En vez de tener tax: tax, se puede reducir a solo tax.
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Uso de class:
export class Person {
    public name: string;
    public address: string;

    constructor() {
        this.name = 'Cristobal';
        this.address = 'Address';
    }
}
const miPersona = new Person(); // El resultado es un objeto de tipo Person, con la propiedad name y address.

//* Otra forma de hacerlo es la siguiente:
class Person2 {
    constructor(
        private name: string, 
        private address: string = 'No Address'
    ){}
}
const person2 = new Person2('Cristobal'); // Me creara mi objeto de tipo Person2 con las propiedades seteadas.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Extendiendo de una clase:
class Hero extends Person2 {
    constructor(age: number, realName: string) {
        super(realName); // super hace referencia al constructor padre.
    }
}
const hero = new Hero(30, 'Goose'); // Se creara un objeto tipo Person2 que tenga age, realName y name que viene del padre.
                                    // Igualmente se tendra la propiedad address que tiene un valor por defecto.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Otra forma de hacer esto es 'inyectando' la clase directamente en el constructor.
class Student {

    constructor(
        public alterEgo: string, 
        public age: number, 
        public person: Person2, // De esta forma si se modifica person: Person2, no me afectara la clase, solo 
                                // el lugar en donde se esta haciendo la instancia.
    ) {}
}
const person = new Person2('Cristobal');
const student = new Student('', 0, person);
console.log(student);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Genericos: Los genericos son aquellas funciones que aceptaran cualquier tipo de dato, y se ejecutara
//* cierta logica con ese tipo de dato, sin tener que usar any. (EVITAR any A TODA COSTA).
function whatsMyType<T>(argument: T): T {
    return argument;
}
const myString = whatsMyType<string>('Hola');
const myNumber = whatsMyType<number>(12);
const myArr = whatsMyType<number[]>([1,2,3,4]);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Opcional chaining.
interface Passenger {
    name: string;
    children?: string[];
}

const passenger1: Passenger = {
    name: 'Fernando'
}
const passenger2: Passenger = {
    name: 'Alessa',
    children: ['Bulmosa', 'Veronica']
}

function printChildren({name, children}: Passenger) {
    const howManyChildren = children?.length || 0; // tambien esta el operador ! que sera para decirle explicitamente que no sera undefined.
    console.log(name, howManyChildren)
}

printChildren(passenger1) // Fernando, 0
printChildren(passenger2) // Alessa, 2


/////////////////////////////////////////////////////////////
interface UserInterface {
    id: string;
    name: string;
    age: number;
    getMessage: () => string;
}

 const user: UserInterface = {
     id: 'abc',
     name: 'Cristobal',
     age: 25,
     getMessage: function() {
        return `Hi ${this.name}`;
     }
 }

 const userFunction = (user: UserInterface) => user.getMessage();
 console.log(userFunction);
 














