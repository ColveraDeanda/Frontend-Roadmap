/* Node.JS es un runtime envirionment del back-end. Se puede ejecutar código JS fuera del navegador. 
Con Node.js se pueden hacer:
    - Páginas web dinámicas.
    - real time apps (chat apps)
    - single-page-apps.
    - APIs and microservices.

Con node.js se puede construir un servidor web con el módulo http, en donde se pueden hacer request get, post,
etc. Node.js tiene módules como fs que permiten trabajar con el file system. Con node.js se pueden instalar
paquetes npm (Node Package Manager), son de gran ayuda para cubrir requerimientos específicos. 

Main Features:
- Node.js usa V8 JavaScript engine.
- A 'single non-blocking process' es utilizado para correr la app de node.js.
- Soporta los estandares de ECMAScript.
- Es posible instalar paquetes open source desde NPM.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const http = require('http');
const port1 = 3000;

// Use http.createServer() to create a new instance of http.Server
const server1 = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Welcome!');
});

// Use server.listen() to start the server listening for connections.
server1.listen(port1, () => {
  console.log(`Server running at port ${port1}`);
});


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const http = require('http');
const port2 = 3000;

const server2 = http.createServer(async (req, res) => {
  if (req.url === '/users' && req.method === 'GET') {
    // Get the data, typically from a database.
    const data = getUsers();
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(data);
  }
});

function getUsers() {
  return 'Ashley, John, and Olivia';
}

// Use server.listen() to start the server listening for connections.
server2.listen(port2, () => {
  console.log(`Server running at port ${port2}`);
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo de Outbound get request:
const http = require('http');

const options = {
  hostname: 'jsonplaceholder.typicode.com',
  path: '/todos/1',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, res => {
  console.log(`statusCode: ${res.statusCode}`);

  //* Si obtiene data en la response, se ejecuta e imprime
  res.on('data', d => {
    process.stdout.write(d); //* Imprimir datos en consola sin saltos de línea adicionales.
  });
});

req.on('error', error => {
  console.error(error);
});

req.end();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Reading & Writing a file de manera Asíncrona con el módule fs => File System.

const fs = require('fs');
const content = '{"name": "John", "salary": 75000, "position": "HR Specialist"}';

// The readFile() method is a non-blocking method that reads a file asynchronously.
fs.readFile('./user.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  // Output the data returned from the file.
  console.log(data);

  // Replace the content of the file with the value of 'content' using the writeFile() asynchronous method.
  fs.writeFile('./user.json', content, err => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Content Replaced!');
  });
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Reading & Writing a file de manera Síncrona con el módule fs => File System.

const fs = require('fs');
const content1 = '{"name": "Ashley", "salary": 90000, "position": "HR Specialist"}';

//* The readFileSync() method is a blocking method that reads a file synchronously.
let data;
try {
  data = fs.readFileSync('./user.json', 'utf-8');
} catch (error) {
  console.error(error);
}
console.log(data); // Output the data returned from the file.

//* The writeFileSync() method is a blocking method that writes to a file synchronously.
try {
  fs.writeFileSync('./user.json', content1);
  console.log('Content Replaced!');
} catch (error) {
  console.error(error);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* This example shows how to emit and handle events in Node.js.
//* Creando un custom event:

const EventEmitter = require('events');
const object = new EventEmitter();

// Add an event listener.
object.addListener('spark', () => {
   console.log(`Let there be light!`);
});

// Emit the event.
console.log('Emitting the event...');
object.emit('spark'); // Se dispara el evento.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/* NodeJS usa global object, en vez de window object como normalmente de usa en un navagador. global
   tiene muchos métodos y propiedades útiles.
   - console object provee métodos como console.log para escribir outputs en cualquier Stream nodejs.
   - process object proporciona información de los procesos de Node.JS. Por ejemplo process.env se usa 
     para acceder a las envirionment variables.
   - Timers: Se pueden usar setTimeOut() setInternal() setImmediate().
   - WebAssambly object proporciona funcionalidad webAssambly. Se usa para ejecutar código en diferentes
     lenguajes en la web.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
firstName = 'Joe'; // A global variable can be set implicitly.
global.lastName = 'Smith'; // A global variable can be set explicitly using 'global'.

// When the var, let or const keyword is used, the variable is scoped to the module.
var position = 'IT Director';
const company = 'Cosmic Solutions';
let salary = 200000;

console.log(`Global Name: ${global.firstName}${global.lastName}`);

//* Trying to access a non-global variable using 'global' returns undefined.
console.log(`Global Position: ${global.position}`);
console.log(`Global Company: ${global.company}`);
console.log(`Global Salary: ${global.salary}`);
console.log('----------------------------------');

//* A global variable can be accessed without using 'global'.
console.log(`Global Name: ${firstName}${lastName}`);
console.log(`Module Position: ${position}`);
console.log(`Module Company: ${company}`);
console.log(`Module Salary: ${salary}`);

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Para instalar algún paquete node: npm install <nombre del paquete>

