//* Es posible usar !! para obtener su equivalente booleano.
console.log(!!'1');
console.log(!![1]);
console.log(!!1);
console.log(!!{});
console.log(!![]);

console.log(!!'');
console.log(!!0);
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Loose equality = converts one or both sides and then performs the final equality comparison.
console.log(Boolean('1' == 1));
console.log(Boolean(1 == ['1', '2'])); //* Cuando se compara un número (1) con una matriz (['1']), JavaScript convierte automáticamente la matriz a una cadena, concatenando los elementos de la matriz separados por comas
console.log(Boolean(1 == [1]));
console.log(Boolean(1 == 1));
console.log(Boolean([1] == [1])); //* Si son dos arreglos en diferente espacio en memoria, dará false
console.log(Boolean({} == {})); //* Si son dos objetos en diferente espacio en memoria, dará false

// Strict equality = is used to compare two operands, if they have the same value and the same type, then they are considered equal.
console.log(Boolean('1' === 1));
console.log(Boolean(1 === ['1']));
console.log(Boolean(1 === [1]));
console.log(Boolean(1 === 1));
console.log(Boolean([1] === [1]));
console.log(Boolean({} === {}));

// Special case:
console.log(undefined === null)
