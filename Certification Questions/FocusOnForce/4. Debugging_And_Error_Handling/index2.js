// ***** DEBUGGING  ****** //
/* 
Aparte del uso de console.logs, una forma de debuggear es usando la
pestaña source para establecer breakpoints y observar el comportamiento
de las variables a lo largo del programa en la parte de 'Watch'.
Chrome Dev tools para Debuggear: 
 - Resume.
 - Step into next function call.
 - Step over next function call.
 - Step out of current function.  
*/

//* NOTA
/*En caso de que no esté mostrando por consola el console.error, warn o info, ésto puede ser debido a 
que no está activado en los 'defaul levels' de la pestaña console. 
*/ 

//* Preserve log:
//* En la pestaña console, en settings, está la opción 'preserve log'. ´Con ésta opción, los mensajes 
//* del log se mantendrán ahí, a pesar de actualizar ó navegar a otra página.

// ? Aditional console methods.
// This example shows how to use various methods of the console object.
console.log('Starting timer...');

console.group('Timer Group'); //* group agrupa un bloque de código y le da identación.

console.time('myTimer'); //* Inicia temporizador de fragmento de código
console.log('Logging timer...');
console.timeLog('myTimer'); //* Registra el tiempo transcurrido desde que se inica console.time().
console.log('Ending timer...');
console.timeEnd('myTimer'); //* Termina temporizador y lo muestra en consola.

console.groupEnd('Timer Group');
const users = [
  { user: 'Jon', title: 'IT Analyst' },
  { user: 'Ashley', title: 'HR Specialist' },
];

console.log('Logging table...');
console.table(users); //* Despliega data con formato de tabla.

//* Assert mostrará un error en caso de que la condición sea false.
console.assert(users[0].title === 'HR Analyst', 'The first user is not an HR Analyst');

//* Notas a considerar al Debuggear desde el navegador:
/* - Ésto se hace desde la pestaña sources en dónde podemos ver el código, establecer breakpoints 
     manualmente, ésta la sección de 'Scope' para ir viendo las variables tanto locales y globales.
     Y la sección Watch, si queremos observar alguna variable en específico.
     También podemos usar la palabra clave 'debugger' dentro del código, para establecer algún breakpoint.
     En caso de que se tengan varios breakpoints, al darle click en 'resume', saltará de breakpoint a breakpoint.
*/ 
//* Tipos de breakpoints: 
/* 1. Line-of-Code: Permite pausar la ejecución del código en una línea específica.
   2. DOM Change: Pausa el código en dónde hay cambios en el DOM node ó sus children.
   3. XHR/Fetch: Pausa el código en la request que contiene el String.
   4. Event Listener: Pausa el código cuando un evento se dispara.
   5. Exception: Pausa el código que avienta una excepción.
   6. Function: Pausa el código cuando una función es llamada.
*/

//* DOM Change breakpoint:
/* Para hacer esto, desde 'Elements' se puede dar click derecho al elemento HTML que se desea hacer un
breakpoint, seleccionar 'break on' y permitirá 3 opciones para hacer un breakpoint para la DOM:
    - Subtree modification.
    - Attribute modifications.
    - Node Removal.
*/

//* XHR/Fetch breakpoint:
/* Para hacer esto, es necesario pasarle el string (URL) donde se va a hacer la request en la sección XHR/Fetch
   breakpoints. Teniendo eso, se establecerá un breakpoint cuando se haga una petición a esa URL.
   Nota: Se puede pausar para cualquier fetch del programa con la opción 'Any Fetch', ó se puede pusar 
   una URL específica.
*/
fetch('https://jsonplaceholder.typicode.com/todos/')
.then(res => res.json())
.then(data => console.log(data));

//* Event Listener breakpoints: 
/* Para hacer esto, se tiene que seleccionar manualmente el evento ó eventos que queremos que se pausen cuando 
   se dispare. Eso se encuentra en la sección de EventListener Breakpoint.
*/
document.getElementById('myButton').addEventListener('click', (e) => {
    console.log(e.target);
})

//* Exception breakpoint:
/* Para establecer un exception breakpint, se tiene que activar la opción 'Pause on uncaught exception'
   que se encuentra dentro de la sección 'Breakpoints'.
*/
const date = '03/27/2023';
//console.log(date.getSeconds());

//* Function breakpoint:
/* Para hacer ésto, es necesario hacerlo desde la consola, y poner => debug(methodNameHere). De ésta forma,
   al momento de llamar a la función por consola, empezará a debuggearla. Para desactivar ésta opción se 
   usa => undebug(methodNameHere).
*/
function getConsoleMessages() {
  console.log('Mensaje 1');
  console.log('Mensaje 2');
  console.log('Mensaje 3');
}

function getConsoleMessages2() {
  console.log('Mensaje 1');
  console.log('Mensaje 2');
  console.log('Mensaje 3');
}

getConsoleMessages();
getConsoleMessages2();

//*?  Stepping through Code:
/* 1. Resume: Permite continuar con la ejecución del código.
   2. Step into next function call: Allows stepping through the execution of the next function, one line at a time.
   3. Step over next function call: Allows executing the next function without stepping into it.
   4. Step out of current function: Allows stepping out of the current function.
   5. Step: Permite navegar a la siguiente línea. 
*/ 






 