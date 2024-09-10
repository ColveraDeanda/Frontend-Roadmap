//* Node.js CLI
/* node.js ofrece comandos que pueden ser de ayuda para:
   - Runtime options.
   - Debugging commands.
   - multiple ways of executing scripts.
*/

//* Node Command:
/* Para correr un file con node, se usa: node script.js. (Se le pueden agregar parámetros y manipularlos
     con ayuda de process.argv). Si solo se usa node se entrará a REPL mode (Read Evaluate Print Loop).
*/

//* REPL (Read Evaluate Print Loop)
/* Permite escribir código javascript a travéz de la terminal. Soporta comandos especiales como:
   - .break: Abort further input. Es lo mismo que darle Ctrl + C. 
   - .clear: Resetea el REPL context a un objeto vacío.
   - .exit: Hace que el REPL se cierre.
   - .help: Muestra los comandos disponibles.
   - .save: Guarda la sesión actual del REPL.
   - .load: Carga un archivo específico en la sesión actual del REPL. 
   - .edit: Se usa para entrar a modo editor (Ctrl + D to finish) (Ctrl + C to cancel).
*/

//* Debugging Commands
/* con el comando: node inspect script.js puede ser usado para debuggear Javascript en un aplicación Node.JS.
   dentro del modo debugger se puede usar setBreakPoint() para establecer breakPoints. También se puede usar
   watch('expression') para observar una expresión. 
   Los comandos que se usan para navegar en el código son:
       - count or c: continue execution
       - next or n: next line.
       - step or s: step into a function.
       - out or o: step out a function.
       - pause: Para pausar.
*/

//* npm commands:
/*  - npm init: Sirve para crear un package json file.
    - npm install: Sirve para instalar todas las dependencias o un paquete en específico.
    - npm update: Sirve para actualizar todas las dependencias o un paquete en específico.
    - npm run: Sirve para correr un comando de 'scrips' del package.json. (npm run build).
    - npm start: Sirve para ejecutar el comando que se encuentre en 'start' property dentro de 'scripts'
                 del package.json
*/

/* Al querer usar -g flag quiere decir que la dependencia estará a nivel global (npm install -g mongoose).
   Al usar --save-dev será una dependencia de desarrollo: npm i --save-dev lodash.
*/

//* Comandos adicionales:
/* - node --version: Para checar la versión de node.js.
   - node --eval: Sirve para evaluar un código específico.
   - node --check: Sirve para checar la sintaxys del código son ejecutarlo.
   - node --help: Desplegará los comandos disponibles.
*/


 