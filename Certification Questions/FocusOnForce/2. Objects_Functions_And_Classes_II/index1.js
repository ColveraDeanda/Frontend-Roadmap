/* INFORMACIÓN IMPORTANTE DE MODULES: */
/* A module is a file containing code with its own top-level scope. JavaScript modules allow code to 
   be structured and separated into different files that can include variables, functions, and/or 
   classes that are logically related, allowing for modular code development.

   In order to access features in a module from another module, they must be explicitly exported. 
   Exports are of two types, namely, named and default exports, but a module supports only one default export.

   The module that needs to access exported features from another module must import them using the 
   import directive. Once imported, the module features are read-only but retain a live binding to 
   the module, meaning they are updated if the value changes in the source module that exported them.
   Both imports and exports can be renamed.
 */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/** Un módulo es un archivo que contiene código que puede ser importado o exportado por otros archivos. 
 *  Los módulos se utilizan para organizar el código en piezas reutilizables y separadas que pueden ser 
 *  compartidas entre diferentes partes de una aplicación.
 */

//* Para trabajar con módulos en una página HTML, se necesita usar la sig. línea:
//* De ésta forma, se habilitarán las características de los módulos como import y export.
<script type="module" src="./mi-modulo.js"></script>

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Es posible exporta lo que sea, desde una simple función individualmente:
export function add(num1, num2) {
    return num1 + num2;
}

//* O exportar varias funciones al mismo tiempo:
function add2(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
export {add2, subtract};

//* Si se va a utilizar export default, solo es posible hacerlo 1 vez por archivo:
export default class Animal {
    constructor() { }
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////
export function multitply(x, y) {
    return x * y;
}
//* Para importar la función anterior sería:
import { multitply } from './modules/helper.js';

//////////////////////////////////////////////////////////////////////////////////////////////////////////
function multitply2(x, y) {
    return x * y;
}
function divide(x, y) {
    return x / y;
}
const SERVER_IP = '122.344.455.456';
export { multitply2, divide, SERVER_IP };

//* Para importar el código anterior sería:
import { multitply2, divide, SERVER_IP } from './modules/helper.js';
//* También se podria importar todo a la vez:
import * as utilities from './modules/helper.js';
utilities.multitply2();
utilities.divide();

//////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Podemos renombrar y utilizando 'as' tanto para exportar como importar ('as' es opcional):
function saveFunc() { }
function openFunc() { }
export { saveFunc as save, openFunc as open };
import { save as saveFile, open as openFile } from './utilities.js';

/*This example shows how to use the ‘export from’ syntax to import features from multiple modules and re-export them to allow importing them in the main.js file from the same module.*/ /*utilities.js*/function saveFunc() {// Implementation here}function openFunc() {// Implementation here}export { saveFunc as save, openFunc as open };/*parent-module.js*/export { save as saveFile, open as openFile } from'./utilities.js';/*index.js*/import { saveFile, openFile } from'../modules/parent-module.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* Este ejemplo muestra cómo utilizar la sintaxis 'export from' para importar características de múltiples 
 módulos y reexportarlas para permitir su importación en el archivo main.js desde el mismo módulo. */
/* //*This can be used for 'aggregating' the features in a single module */

/* En utilities.js */
function saveFunc() {
    // Implementación aquí
  }
  
function openFunc() {
    // Implementación aquí
}
  
export { saveFunc as save, openFunc as open };
  
/* En parent-module.js. Se importa aquí, y nuevamente de exporta */
export { save as saveFile, open as openFile } from './utilities.js';
  
/* En index.js, importamos las funciones saveFile y openFile desde parent-module.js para utilizarlas en nuestro código. */
import { saveFile, openFile } from '../modules/parent-module.js';

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* This example shows how to load a module dynamically when a button is clicked on the page and access 
the module object's exports for a specific use case. */

const btn = document.getElementById("btn-convert");
let blob;

btn.addEventListener("click", loadModule);

function loadModule() {
  import("../modules/utilities.js")
    .then((module) => {
      blob = module.convert(file); // 'file' has been defined earlier in the code.
    });
}

/* Este código utiliza la sintaxis de módulos de JavaScript para cargar un módulo dinámicamente cuando se 
   hace clic en un botón en una página web. La función loadModule se ejecuta cuando se hace clic en el 
   botón, y utiliza la función import para cargar el módulo utilities.js.
 */

/* Al cargar los módulos de forma dinámica solo cuando se necesitan, se puede reducir significativamente 
   el tiempo de carga inicial de la aplicación y mejorar la experiencia del usuario.
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// ! Key Points (module = import / export):
/**
   The value of an imported feature is read-only. Although it cannot be modified, its properties can be 
   changed similar to const.

   Features are imported as live bindings. If the value of an imported feature changes in the source module, 
   it is updated in the target module.

   Module imports are moved or hoisted to the beginning of the current scope. This means that a module can 
   be imported anywhere in the module.

   When importing a feature from a module, a single dot (.) means the current directory, 
   and two dots (..) means the parent directory.
 */

