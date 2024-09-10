/* La coerción en JavaScript se refiere a la conversión automática que realiza el lenguaje de un 
tipo de dato a otro.  existen dos tipos de coerción en JavaScript: la coerción implícita 
(realizada automáticamente por el lenguaje) y la coerción explícita (realizada por el programador a 
través de funciones como parseInt() o Number()).
*/

const str = 'Time: ';
const time = 25;
console.log(str + time);

//*Dentro de un contexto boleano entre string y number, se trata de convertir el string a un número.
console.log(str == 5);

if(str && time) {
    console.log('String and number coerced to Boolean...');
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const bool = true;
const str2 = '5';

//En este caso, js convierte str2 a número. Haciendo coerción.
console.log(5 == '5');

console.log(bool > 0);
console.log(str2 <= 2);

console.log(bool + 4);
//* Igualmnete para cálculos entre un string y number, se trata de convertir el string a un número.
console.log(str2 - 2);

//*Key point: Tanto en un contexto booleano y operaciones matematicas, js hace coerción de string a number.

// Converción a number con +
console.log(+bool);
console.log(+str2);

console.log(str2 & bool); // ?


/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
if(!null) {
    console.log('String: ' + null);
    console.log(null - 5); // null lo toma como 0.
}

if(!undefined) {
    console.log('String: ' + undefined);
}

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Coerción en objeto:
let obj = {
    product: 'consulting',
    price: 50
};
if(obj) {
    console.log(obj.product);
}
console.log('Object:' + obj);

const obj2 = {
    price: 100,
    valueOf() {
        return this.price
    }
};
console.log(obj2 * 1);
console.log(obj2 * 5);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* String coercion:
console.log(String(5));
console.log(String(-10.15))
console.log(String(true))
console.log(String(false))
console.log(String(null))
console.log(String(undefined))
console.log(String(Symbol('name')))
console.log(String([]));
console.log(String([1,2,4]))
console.log(String({}));
console.log(String({a:15, b: 50}));

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
Boolean(5)
Boolean([])
Boolean({})
Boolean('Hola mundo')
Boolean(new Date())
Boolean(Symbol())
Boolean('0')
Boolean('false')
Boolean(Infinity);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function convertBool(obj,prop) {
    return obj[prop] = Boolean(obj[prop]);
}
let boardRoom= {
    capacity: 40,
    reservable: 0
}
console.log(convertBool(boardRoom, "reservable"));
console.log(boardRoom);

//////////////////////////////////////////////////////////////////////////////////////////
console.log(Number(true));
console.log(Number(false));
console.log(Number(null));
console.log(Number(undefined));
//console.log(Number(Symbol())); Error
// * Para un string, primero se quitan los espacios y si está vacío regresará 0.
console.log(Number(""));
console.log(Number(" 15 "));
console.log(Number("-10.14"));
console.log(Number("\t"));
console.log(Number("A"));