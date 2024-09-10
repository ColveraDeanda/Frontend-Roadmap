// * JSON * //
/* JSON standard for JavaScript Object Notation. Es un formato basicamente de String que ayudará a 
poder transmitir la data del lado de clinte al servidor.
 - Para transmitir data al server, necesita ser serialized using JSON.stringify(). (se convierte en string)
 - Cuando el JSON llega al servidor necesita ser deserialized y convertirlo en JS Object para poder manipularlo
   usando JSON.parse()
*/

//* Ejemplo usando JSON.stringify (JS Object a JSON)
const persona = {
    nombre: "Juan",
    edad: 25,
    casado: false,
    hobbies: ["leer", "correr", "ver películas"]
};
const personaString = JSON.stringify(persona);
console.log(personaString); // Objeto JSON

//* Ejemplo usando JSON.parse (JSON a JS Object)
const personaString2 = '{"nombre":"Juan","edad":25,"casado":false,"hobbies":["leer","correr","ver películas"]}';
const persona2 = JSON.parse(personaString);
console.log(persona2);

//* Formas para recorrer un objeto:
for(let prop in persona2) {
    console.log(persona2[prop])
}

// * Recorriendo objeto js usando Object.entries. (key-value dentro de un arreglo).
console.log(Object.entries(persona2));





