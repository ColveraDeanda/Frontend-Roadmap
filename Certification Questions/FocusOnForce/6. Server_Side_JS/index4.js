/* NPM tiene 3 diferentes componentes:
   - website
   - CLI
   - registry

   Comandos:
   npm outdated: Sirve para checar si algún paquete está desactualizado.
   npm update: Para actualizar un paquete. Se puede usar la flag -g.

   Package.json:
   Contiene información como nombre, descripción, versón. Se incluyen las package dependencie y 
   development dependencies.

   Nota: No todos los node.js modules son packages. Un módulo puede ser un js file or a folder with a 
   package.json file.
*/

//* Semantinc versioning:
/* Cuando sale un package por primera vez, la versión que debe tener es 1.0.0 para el 'first release'.
   - Para un patch release como un bug fix, el 3er número es incrementado: 1.0.1.
   - Para un minor release (new features), el 2do número es incrementado y el 3ro se pone en cero: 1.1.0.
   - Para un major release (breaks backward compatibility), 1er número de cambia y el resto se pone en cero:
     2.0.0
*/

//* Versioning Operators:
/**
 * Se usa para específicar que actualizaciones una dependencia puede aceptar.
 */
"dependencies": {
    "lodash": ">=2.3.0 <3.2.0", // Cualquier número de versión desde 2.3.0 hasta 3.2.0 (sin incluir 3.2.0) es aceptable.
    "chalk": "~2.2.0", // Cualquier número de versión desde 2.2.0 hasta 2.3.0 (sin incluir 2.3.0) es aceptable. 2.2.1, 2.2.2, 2.2.3, etc.
    "express": "^3.16.0", // Cualquier número de versión desde 3.16.0 hasta 4.0.0 (sin incluir 4.0.0) es aceptable.
    "moment": "1.x" // Cualquier número de versión que comience con 1 (pero no 2, como 2.0.1) es aceptable.
  }








