/* //* BROWSER APIs:
Los browser APIs son un conjunto de funciones que permiten a los desarrolladores extendar la funcionalidad
de la página web. Por ejemplo, responder a eventos del usuario, gestionar almacenamento local, hacer 
animaciones, etc.. 

Existen 7 browser APIs:
        1. DOM API: Sirve para manipular la estructura, estilos y contenido de una página web.
        2. Fetch API: Sirve para hacer requests a un servidor.
        3. History API: Sirve para navegar y manipular el browser history.
        4. Geolocation API: Sirve para obtner ubicación del dispositivo.
        5. Canvas API: Sirve para dibujar gráficos 2D.
        6. URL API: Sirve para manipular una URL.
        7. Web Storage: Sirve para almacenar data en session storage y local storage.
*/

//* URL API: Se puede extraer data de la URL, así como modificar o eliminar los parámetros.
const urlString = 'http://example.com:3000/path/page?name=Adam&age=31#profile';
const urlObject = new URL(urlString);
urlObject
const wholeURL = new URLSearchParams(urlString);
console.log(wholeURL);
const searchURL = new URLSearchParams(urlString.search);
console.log(searchURL);

//* Ejemplo de data que se puede extraer y modificar de la URL:
urlObject.protocol = 'https';
console.log(urlObject.href); 
console.log(urlObject.hostname, urlObject.port, urlObject.pathname);

//* Agregar un nuevo patrón de búsqueda:
searchURL.append('gender', 'male');
urlObject.search = searchURL.toString();
console.log(urlObject.href);

//* Modificar un parámetro de búsqueda existente
searchURL.set('age', 24);
urlObject.search = searchURL.toString();
console.log(urlObject.href); 

// Eliminar un parámetro de búsqueda
searchURL.delete('gender');
urlObject.search = searchURL.toString();
console.log(urlObject.href); 

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo de DOM API:
let count = 0;
const handleClick = (event) => {
    const value = document.getElementById('value');
    value.innerHTML = ++count;
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo de Fetch API:
const request = async () => {
    try {
        const url = 'https://jsonplaceholder.typicode.com/users/7';
        // Invoke the fetch() method using the specified url and the 'GET' method.
        const response = await fetch(url, { method: 'GET' });
        // ! Nota: Fetch retornará una promesa.
        // Use the json() method to get the parsed data from the response.
        const data = await response.json();
        console.log(data);
        let string = '';
        for (key in data) {
            string += `${key} => ${JSON.stringify(data[key])}<br/>`;
        }
        document.getElementById('data').innerHTML = string;
    } catch (error) {
        document.getElementById('data').innerHTML = error;
    }
}
request();

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo de Geolocation API:
let locationElement = document.getElementById('location');

// These are options to be passed to the getCurrentPosition() method.
const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
};

// This is the callback function that is invoked when the getCurrentPosition() method is successful.
const handleSuccess = (position) => {
    console.log(position);
    const result = position.coords; // Save the coordinates of the location.
    let message = 'You are at :<br/>' +
        `Latitude : ${result.latitude}<br/>` +
        `Longitude: ${result.longitude}<br/>` +
        `+/- ${result.accuracy} meters.`;
    locationElement.innerHTML = message;
}

// This is the callback function that is invoked when the getCurrentPosition() method returns an error.
const handleError = (error) => {
    console.warn(`ERROR(${error.code}): ${error.message}`);
}

// This is the event handler function that is invoked when button is clicked.
const getLocation = () => {
    // Check to see if Geolocation API is supported by the browser.
    if (navigator.geolocation) {
        // Call the getCurrentPosition() method with three parameters:
        // success callback function, error callback function, and options (optional)
        navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
    } else {
        locationElement.innerHTML = 'Sorry, this browser does not support Geolocation.';
    }
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* History API: (Navegar, remplazar y agregar elementos al history).
// The 'popstate' event is called when user clicks the back and forward buttons on a browser or
// after the .forward(), .back() and .go() methods are invoked
window.onpopstate = function (event) {
    console.log(document.location);
    document.getElementById('message').innerHTML = `You are here: ${document.location}, state: ${JSON.stringify(event.state)}`;
}

const backward = () => {
    // Navigate backward one step in the history stack or use history.go(-1)
    history.back();
}

const forward = () => {
    // Navigate forward one step in the history stack or use history.go(1)
    history.forward();
}

// Replace the top page of history stack with this page by calling the replaceState() method of the history object
const replace = () => {
    history.replaceState(
        { page: 3 }, // a JavaScript object that represents the state of a page
        "Page 3", // the page title
        "?page=3" // the page URL which replaces the top of the history stack
    );
}

// Push a page to the history stack by calling the pushState() method of the history object
const push = (state, title, url) => {
    history.pushState(
        state, // a JavaScript object that represents the state of a page
        title, // the page title
        url // the page URL that is added to the history stack
    );
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Canvas API:
const canvas = document.getElementById('myCanvas'); // Get the canvas element.
let ctx = canvas.getContext('2d'); // Get the canvas drawing context.

ctx.strokeStyle = 'green'; // Set the color.
ctx.lineWidth = 10; // Set the line width.
ctx.strokeRect(10, 10, 150, 100);

ctx.strokeStyle = 'blue'; // Change the color.
ctx.lineWidth = 5; // Change the line width.
ctx.strokeRect(50, 100, 50, 150); // Render a blue rectangle at a new position.

ctx.strokeStyle = 'red'; // Change the color.
ctx.lineWidth = 15; // Change the line width.
ctx.strokeRect(120, 50, 150, 200); // Render a red rectangle at a new position.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Web Storage API: 
/* El web storage sirve para almacenar datos en el navegador. Existen 2 tipos de almacenamiento:
    1. LocalStorage: Lo que se guarde en local storage, persistirá incluso si se cierra el navegador.
    2. SessionStorage: Solo se podrá guardar información dentro de la misma sesión. Si se llega a cerrar
                       el navegador, los datos se eliminarán.
*/

//* Guardar item: (key => value).
localStorage.setItem('nombre', 'Juan');
localStorage.setItem('empresa', 'Deloitte');

//* Obtener item:
const nombre = localStorage.getItem('nombre');
const empresa = localStorage.getItem('empresa');
console.log(nombre, empresa);

//* Remover item:
localStorage.removeItem('Empresa');

//* Eliminar todos los elementos:
localStorage.clear();

// ! Nota: sessionStorage usa los mismos métodos.
sessionStorage.setItem('apellido', 'Pérez');
const apellido = sessionStorage.getItem('apellido');
console.log(apellido); 
















