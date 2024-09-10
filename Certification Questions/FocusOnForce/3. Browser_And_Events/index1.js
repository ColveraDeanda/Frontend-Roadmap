/* //* BROWSER AND EVENTS */
/*
Un evento es una action específica para ejecutar un bloque de código. Existen muchos eventos como:
mouse events, keyboard events, form events and resorce events.

Event Handlers: Son de ayuda para manipular los eventos. Existen 2 formas:
1. addEventListener: An event listener can be attached to an element to handle a particular event. 
                     It allows attaching multiple event handlers to an element.
2. An onevent handler, such as onclick, can also be used to assign a single event handler to a particular 
   element.

Event propagation: Es la forma en como se propagan los eventos:
1. Bubbling.
2. Capturing.
*/

//* Event Trigger: Es la interacción que tiene el usuario para que suceda algo.
//* Event Interface: Cada evento que ocurre es representado por un objeto basado en Event Interface.
                  //* el cual provee de muchos métodos útiles.
//* Examples: click, select, keydown, submit, focus, load, etc.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Creación de un custom Event:
const loginEvent = new CustomEvent('login', {
   detail: {
      validUser: true
   }
});
document.dispatchEvent(loginEvent);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* OneEvent handler: Cuando el usuario presione el botón, se ejecutará el evento onclick:
function loginUser() {
   console.log('Login in...');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Uso de addEventListener: Se puede manejar múltiples eventos utilizando addEventListener en un solo elemento.
const logginButton = document.getElementById('loggin-button');
logginButton.addEventListener('click', function(event) {
   loginUser(event);
});
logginButton.addEventListener('mouseover', (event) => {
   event.target.style.color = 'blue';
});
logginButton.addEventListener('mouseleave', (event) => {
   event.target.style.color = 'red';
})

//* Nota: addEventListener es mucho más flexible que oneEvent handler ya que se puede acceder al target,
//*       tiene un objeto options para establecer parámetros, se puede poner más de un evento en algún elemento
//*       y se puede controlar bubbling y capturing.


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Haciendo uso de algunas event properties:
function onClickItem(event) {
   let text = event.target.textContent;
   console.log(`Coordinates: ${event.clientX}, ${event.clientY}`);
   console.log('Captured text: ' + text);
}
document.querySelector('ol').addEventListener('click', onClickItem);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* También es posible asignar un evento de la siguiente manera:
document.getElementById('pass').onchange = function(event) {
   let pass = document.getElementById('pass').value;
   console.log(this.id); // ! Cuando se invoca el evento, this será el elemento al que hace referencia.
   console.log(pass);
}
//* Non elements objects like: window, document and XMLHttpRequest soportan el uso de un Event Handler.

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Event propagation:
/* Cuando un evento es disparado en un elemento que tiene algún o algunos elementos padres,
ocurren 2 fases diferentes: capturing y bubbling
//* Captuting: Propagación de afuera hacia adentro.
//* Bubbling: Propagación de adentro hacia afuera.
*/
//* Por defecto, la propagación es bubbling.
document.getElementById('outer').addEventListener('click', () => {
   console.log('Outer Div');
}, false); //! useCapture parameter se setea en false. 
           //! si se pone en true, quiere decir que hará bubbling.
document.getElementById('inner').addEventListener('click', (e) => {
   e.stopPropagation(); // Se detiene la propagación...
   console.log('Inner Div');
}, false); //! useCapture parameter se setea en false. (valor por defecto).

/* //* Existe 1 método para prevenir propagación:
         stopPropagation = Detendrá la propagación.
*/

//* Otro método importante es preventDefault(): Éste método se utiliza para prevenir el comportamiento
//* predeterminado de un evento en un elemento HTML





