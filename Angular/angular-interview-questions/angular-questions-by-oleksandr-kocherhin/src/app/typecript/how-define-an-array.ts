//* How to define Typescript array?

//* => Q1: How to define an array in Typescript? Show all ways
const firstArray: string[] = ['1', '2', '3'];  //! Recommended
const secondArray: Array<number> = [1,2,3,4,5];

//* => Q2: How to define an array of numbers and strings?
const arr: string | number = '23';
const arrWithNumbersAndString: (string | number)[] = [];
// Esta es una mala practica porque puede hacer mas complicado validar
//la data.
