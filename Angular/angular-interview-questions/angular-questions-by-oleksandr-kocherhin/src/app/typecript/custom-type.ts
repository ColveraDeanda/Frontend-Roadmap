export interface UserInterface {
  id: string;
  name: string;
  surname: string;
  age: number;
}

//! type es de gran ayuda para hacer el código más legible y mantenible.
//* Al igual que una interface, type servirá para asignarle un tipo de dato a un valor.

//? Ejemplo 1:
export type Region = 'Africa' | 'Americas' | 'Asia' | 'Europe' | 'Oceania';

//? Ejemplo: 2
//* Pick servirá para crear un tipo de dato usando las propiedades de una interface
type UserFullNameType =  Pick<UserInterface, 'name' | 'surname'>;
let user: UserFullNameType = { name: 'John', surname: 'Doe' };
//* En este caso UserFullNameType, debe ser forsozamente un objeto que tenga name y surname.

//? Ejemplo: 3
type UserPost =  Omit<UserInterface, 'id'>;
const userPost: UserPost = {name: 'Cristobal', surname: 'Olvera', age: 25}

//* Conclusión:
/* En resumen, Pick y Omit son utilidades de TypeScript que facilitan la creación de nuevos tipos basados
   en tipos existentes al seleccionar o excluir propiedades específicas. */

