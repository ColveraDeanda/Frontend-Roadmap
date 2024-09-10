//* void and unknown in Typescript:

//* => Q1: What is void type? Write an example.
/* Se usa para especificar que una funcion no retornara nada */
const doSomething = (): void =>  {
  console.log('do something');
}

//* => Q2: What is unknown type? Write an example.
/* Es recomendable usar unknow cuando no sabemos que tipo de dato
   es una variable. Esto se hace en vez de usar any. Al usar any
   estamos deshabilitando completamente typescript. */
const vAny: any = 10;
const vUnknow: unknown = 10;

let s1: string = vAny; // En este caso no marcara error.
let s2: string = vUnknow as string; // En este caso marcara un error si no usamos type assertion.

/** Conclusion:
 * Si no sabemos el tipo de dato de una variable, usar unknown en vez de any.
 * Al usar any estamos desactivando typescript. Y en caso de que ocupemos usar nuestra
 * variable unknown, podemos convertirla a un tipo de dato especifico usando
 * type assertion, por lo que es mucho mas seguro que any.
 */



