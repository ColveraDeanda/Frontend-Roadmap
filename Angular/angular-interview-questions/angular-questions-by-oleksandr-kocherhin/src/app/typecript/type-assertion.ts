//* Type assertion in Typescript:

//* =>  Q1: What is type assertion?
/* Type Assertion: Es una forma de decirle al compilador que confies que un valor tiene un tipo de dato especifico  */
/* Al usar type assertion estamos asumiendo la responsabilidad de que cierto valor va a tener un tipo de dato especifico. */

//* => Q2: How to fix this code?

//! Using type assertion:
const getItem1 = (item: number | undefined) => {
  return (item as number).toString(); //* Tratar de evitar esto ya que es mala practica.
}

const getItem5 = (item: number | undefined) => {
  return (<number>item).toString(); //* Tratar de evitar esto ya que es mala practica.
}


//! Correct solutions:
//? Solution 1:
const getItem2 = (item?: number): string => {
  return item?.toString() ?? 'Undefined Item';
}

//? Solution 2:
const getItem3 = (item?: number): string => {
  if(!item) return 'Undefined Item';
  return item.toString();
}
