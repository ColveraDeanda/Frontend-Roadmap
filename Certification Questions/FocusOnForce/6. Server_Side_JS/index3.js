//* Module in node.js:
/* Es un package donde se comprimen un conjunto de funciones.
   Existen 3 tipos de módules:
        - Core: Están definidos dentro de Node.js por lo que NO necsitan ser instalados.
        - Local: Son creados por el developer locally. Pueden ser packaged y distribuidos via npm.
        - Third-party: Open source modules que necesitan ser instalados para su uso. Para usarlos de usa require()
*/

//* Nota: Node.js usa Common.js para el manejo de módulos.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo de named export:

// se le agrega al objeto exports una propiedad adicional 'user'.

// helper.js:
const user = {
    name: 'John Smith',
    email: 'jsmith@gmail.com',
    title: 'Sales Director'
};
exports.user = user;

// Para importarlo sería:
// script.js:
const helper = require('./helper.js') // file que se quiere importar.
const myUser = helper.user;

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Ejemplo de default export:
// helper.js:
class User {
    constructor(name, email, title) {
        this.name = name;
        this.email = email;
        this.title = title;
    }
    displayDetails() {
        console.log('Details...')
    }
}
module.exports = User;

// Para importarlo sería:
const UserFile = require('./helper.js') // file que se quiere importar.
const user2 = new UserFile('ccc', 'ccc', 'vvv');
console.log(user2.displayDetails);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Core modules más importantes de Node.JS:
/* 1. http/https: Sirve para crear un web server, y manipular las requests.
   2. fs: Sirve para interactuar con el file system. Leer/editar files.
   3. path: Provee de métodos para trabajar con paths.
   4. url: Provee de métodos para el manejo de la URL.
   5. events: Sirve para trabajar con eventos. (Emit and handle events).
   6. util: Provee de utilidades y métodos para manejar una API interna.
   7. querystring: Sirve para parsear o manipular una URL query string.
   8. assert: Provee métodos para testing.
   9. proces: Sirve para obtener información de algún proceso Nodejs.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo de path module:
const path = require('path');

const file = './public/img/logo.png';
const directory = path.dirname(file);
console.log(directory) // ./public/img (Directory del file).
const last = path.basename(file);
console.log(last) // logo.png (última porción del file).

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo de util module:
// Comprobar si la función es síncrona o asíncrona:
const util = require('util');

async function fetchData() {
}

const isAsync = util.types.isAsyncFunction(fetchData);
const message = `The fetchData function is ${isAsync ? 'asynchronous' : 'synchronous'}.`;
console.log(message); // The fetchData function is asynchronous.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo de local module (default export):
// helper.js
function getCurrentDate() {
    const now = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const currentDate = `${months[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`;
    return currentDate;
}
module.exports = getCurrentDate;

// script.js
const getCurrentDate = require('./helper.js');
const currentDate = getCurrentDate();
console.log(`The current date is ${currentDate}.`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Popular third-party modules:
/* Lodash: Hace que sea más fácil trabajar con objetos, arrays, numbers, strings etc.
   React: JS library para desarrollar intefaces mediante componentes.
   Express: Permite construir un servidor web con ayuda de rutas.
   Axios: HTTP client para hacer requests desde el navegador y nodeJS.
   webpack: Sirve para hacer un bundle de JS modules.
   chalk: Sirve para estilizar los mensajes por consola.
   moment: sirve para parsear, validar, o desplegar data.
   jest: Testing framework para hacer testing.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo usando un helper y express:

//index.js
const express = require('express');
const helper = require('./helper.js');

const app = express();
const port = 3000;

app.get('/employees', async (req, res) => {
  const data = await helper.getDataFromDatabase();
  res.send(data);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});

//helper.js
const arr = [
    { name: 'John', title: 'Manager' },
    { name: 'Sarah', title: 'Developer' },
    { name: 'Mike', title: 'Designer' }
  ];
  
const getDataFromDatabase = function() {
    return new Promise((resolve, reject) => {
        resolve(arr);
    });
}
module.exports = { getDataFromDatabase };
  
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo usando otras librerías:

const moment = require('moment');
const chalk = require('chalk');

const date = moment().add('14', 'days').format('MMMM Do, YYYY');
const styledDate = chalk.blue.bgYellowBright.bold(date);

console.log(`Fourteen days from now, the date will be ${styledDate}.`);
// El resultado de output será un backgound amarillo con letras azules.