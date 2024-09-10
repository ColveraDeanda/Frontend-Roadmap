//* Hay 2 formas de crear un array. De la forma tradicional o con el constructor Array.
let products = ['ASCV', 'RFGV', 'RFLNJ'];
let products1 = new Array('QAS', 'ERWEREWR', 'EQWEQEE');
console.log(products)
console.log(products1)

//* Formas para iterar un array:
//* 1. for normal
for (let i = 0; i < products.length; i++) {
    console.log(products[i]);
}

//* 2. for in
for(const index in products) {
    console.log(products[index]);
}

//* 3. for of - Para evitar uso del index y una forma simplificada.
for(const product of products) {
    console.log(product);
}

//* for Each - se usa un callback donde se itera cada elemento. (ojo - no se mutará el arreglo).
//* The typical use case is to execute side effects.
let modifiedProducts = [];
products.forEach((product, index) => {
    let p = `${index + 1}. - ${product}`;
    modifiedProducts.push(p)
});
modifiedProducts

modifiedProducts.push('another')
modifiedProducts.unshift('First') //* Ingresa un nuevo elemento al principio del arreglo.

modifiedProducts.pop();
modifiedProducts.shift(); //* Elimina el 1er elemento.

modifiedProducts.splice(0 , 1 ,'New element');
modifiedProducts

//* Es posible hace una copia del array con slice.
let arrayCopy = modifiedProducts.slice();

//* Saber si existe un valor en un array.
console.log(`Exists: ${modifiedProducts.includes('New element')}`);

//* Encontrar algún index:
let words = ['a', 'b', 'c', 'd', 'e', 'c', 'g', 'h'];
//* primer índice en donde se encuentre el elemento
console.log(words.indexOf('c')); 
//* último índice en donde se encuentre el elemento.
console.log(words.lastIndexOf('c')); 

//* find y findIndex regresarán el 1er elemento que cumpla una condición.
let fruits = [
    {name: 'Apple', qty: 40},
    {name: 'Banana', qty: 5},
    {name: 'Mango', qty: 10},
];
let myProduct = fruits.find((elem, index, array) => elem.qty <= 10);
let myProductIndex = fruits.findIndex((elem, index, array) => elem.qty <= 10);
console.log(myProduct, myProductIndex);

//* Array to String:
let wordsString = words.join(' | ');
console.log(wordsString);

//*** ADVANCED FUNCTIONS ***/

//* Convert each element into a student Object.
let students = ['Kate', 'Lucy', 'Sheldon', 'Barry'];
let studentsArray = students.map((elem,index, array) => {
    return {
        id: index,
        name: elem
    };
});
console.log(studentsArray);

//* Find total of an array. Reduce = reduce un array a un single value.
let sprinters = [1,4,6,4,5,7];
let totalSprinters = sprinters.reduce((acc, value) => acc + value, 0);
console.log(totalSprinters);

// Filtrando un array: Filtrará todos los elementos que cumplan la condición y creará un nuevo array.
let vegetables = [
    {name: 'Apple', price: 40},
    {name: 'Banana', price: 5},
    {name: 'Mango', price: 100},
    {name: 'Mango', price: 50},
    {name: 'Mango', price: 180},
];
let vegetablesFilter = vegetables.filter((value, index, array) => {
    return value.price >= 50
})
console.log(vegetablesFilter)

/* REST Y SPREAD OPERATOR */
//TODO: El rest operator sirve para agrupar varios elementos.
function orderNumbers(...numbers) {
    return numbers.sort((a,b) => a - b);
}
console.log(orderNumbers(4,1,7,9,3,5))

//TODO: El spread operator se utiliza para expandir un objeto iterable en varios elementos
let arr1 = [345345,4353454,345345,2234432,23423234];
let arr2 = [1, 2, ...arr1, 3];
console.log(arr2)

/*El método every() en JavaScript se utiliza para verificar si todos los elementos de un arreglo 
cumplen con una determinada condición. Si todos los elementos cumplen con la condición, entonces every() 
devuelve true */ 
const numeros = [2, 4, 6, 8];
console.log(numeros.every(numero => numero % 2 === 0));

/**
 *  El método some() en JavaScript es una función que se utiliza para determinar si al menos uno de los 
 *  elementos de un arreglo cumple con una condición específica.
 */
const numbers2 = [1, 3, 10, 7];
console.log(numbers2.some((number) => number % 2 === 0));

/**
 * El método flat se utilza para aplanar un array, es decir, para convertir un array
 * de varias dimensiones en un array de una sola dimensión. El valor por defecto es 1:
*/
let array5 = [[1, 2], [3, 4]];
console.log(array5.flat())
const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(arr3.flat(2));
const arr6 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr6.flat(Infinity));


/**
 * Métodos a investigar:
 * 5. padStart, padEnd
 */








