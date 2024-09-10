//*? Q1: What is SPA?
/* //* Es una applicacion web que carga una unica pagina html una vez. Y
   //* actualiza su contenido dinamicamente cuando el usuario interactua
   //* con la applicacion.

   Todo sin necesidad de recargar la pagina

*/

//? Q2: How it is difference to server side rendering?
//* En una SPA, la logica se ejecuta del lado del cliente.
//* en SSR la parte del procesado y renderizado ocurre en el servidor.
//* Tambien SSR es de gran ayuda para cuestiones de SEO y tiempo de carga inicial.

//? Q3: What are pros and cons of SPA?
/**
 * //* Ventaja:
 *    - Experiencia de usuario fluida.
 *
 * //* Desventaja:
 *    - Tiempo de carga inicial.
 *    - SEO: Tienen problemas en la optimizacion de motores de busqueda.
 */

//? Q1: What are Angular pros and cons?
//* Pros:
/** 1. Angular ofrece muchas cosas Out of the box como: Routing, animations, services.
 *  2. Se usa Typescript por defecto. Esto hace la app mas segura.
 *  3. Angular trabaja mucho con observables, es decir, permite trabajar y hacer la app reactiva.
 *  4. Tiene Dependency Injection.
 */

//* Cons:
/** 1. Puede ser dificil empezar con Angular debido a typescript y rxjs. */

//? Q2: How it is compared to React?
//* React no tiene cosas como routing o dependency injection.
/* Puede ser mucho mas facil empezar con React */

//? Q1: How does Angular work from files perspective? In what file it starts
//?     loading, what files are loaded next?
/**
 * //* 1. Todo empieza con angular.json donde se especifica como debe cargarse el proyecto.
 * //*    angular.json mandar a llamar main.ts.
 * //* 2. main.ts sera el entry point y cargara el modulo principal.
 * //* 3. El modulo principal definira cual componente debe cargarse primero.
 * //* 4. El componente principal cargara la template.
 */

//? Q1: How you can share your data between 2 different components?
//* 1. Usando @Input() y @Output.
//* 2. Se puede usar un service para compartir la data con behaviorSubject.
//* 3. Usando NGRX que es lo mismo a Redux para el state managment.

//? What ways of binding in Angular do you know?
//* - One way data binding: La variable definida en ts, se vera reflejada en el template.
//* - Two data binding: Si una variable cambia en el template, se modificara en el .ts y viceversa.
// todo: [See example on data-binding-component].

//? What is HTML in Angular?
/* HTML and Angular Templates son muy similares. Una angular template solo es
   una simtaxis especial que usa angular.  */

//? What are services in Angular?
//* Los servicios en angular ayudan a tener metodos y logica que despues podremos compartir a travez de DI
//* en algun componente.

//? How to make HTTP Request in Angular?
/* Q1: You have an interface User with id, name age. Create a UsersService and getUsers method which makes a get request to
       http://localhost:3004/users and returns a users stream.
   Q2: Write the code to get this data in component.
 todo [See example on UsersService]
*/





