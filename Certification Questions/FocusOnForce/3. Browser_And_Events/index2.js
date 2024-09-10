/* Document Object Model (DOM), representa la estructura y contenido de un documento HTML como objetos 
y nodos. Gracias al DOM podemos accesar a la estructura, style y content de una página web.
  Existen 6 DOM data types:
  - Document = root document object de la página.
  - Node = Cada nodo puede ser un elemento HTML, un atributo, un fragmento de texto o cualquier otro tipo de objeto que se encuentre en el árbol de nodos del DOM.
  - Element = Un elemento representa un nodo de tipo 'element'. Por ejemplo <table>, <h1> elements.
  - NodeList = Array de elementos, querySelectorAll() retornará un nodeList.
  - Attribute = Propiedades de los elementos HTML.
  - NamedNodeMap = Array de elementos que pueden ser accesados by name or index.

Para obtener la referencia de un elemento HTML y manipularla, existen:
 - getElementById
 - querySelector.
 - querySelectorAll.

Algunos DOM manipulation methods:
 - appendChild
 - setAttribute

Algunas properties del DOM:
 - innerHTML
 - style
*/

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* El objeto global 'window' representa todo lo que se muestra en una página web. 
//* window tiene métodos para interactuar con la misma.

function setVariables() {
    let maxVisitors = 1000; // set local variable.
    window.minVisitors = 25 // set a global variable.
}

let [userId, timeStamp] = [15, 1600034];
let state = { id: userId, ts: timeStamp };
let url = "?id=" + userId + "&ts=" + timeStamp;
window.history.pushState(state, '', url); // Se agrega una página al historial.

setVariables();
console.log('this === window', this === window); //* this hace referencia al objeto global window.
console.log('minVisitors', minVisitors); //* minVisitors ya es parte del objeto global. Con esto, ya se puee usar como otra variable.
console.log('this.minVisitors', this.minVisitors);
// console.log('maxVisitors', maxVisitors); // maxVisitors is not defined

/* Nota: El objeto window.history se utiliza para interactuar con el historial del usuario.
Proporciona métodos para navegar hacia atrás y adelante en el historial, agregar nuevas páginas al historial 
y reemplazar la página actual en el historial con una nueva página.
*/

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//*DOM tree: Es una representación gráfica de como los nodos interactúan entre sí, dentro de un documento HTML.
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const msg = document.getElementById('message');
msg.innerHTML = '<span>Good morning</span>';
//* propiedades del DOM element:
console.log(msg.tagName); // DIV
console.log(msg.innerHTML); // <span>Good morning</span>
console.log(msg.classList); // array de elementos dentro de class
console.log(msg.getAttribute('id')); // se puede obtener el value de cualquier propiedad.
console.log(msg.getBoundingClientRect()); // size and position

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Retreiving DOM elements:
/* querySelector: Devolverá el primer nodo que haga match. Retornará null si no encuentra nada.
   querySelectorAll: Devolverá un nodeList con todos los elementos que hagan match. Retornará un nodeList
                     vacío si no encuentra nada.
   getElementsByClassName = Devolverá un nodeList de todos los elementos que hagan match con la clase.
   getElementsByTagName = Devolverá un nodeList de todos los elementos que hagan match con el tag.
*/
const paragraphs = document.querySelectorAll('p');
for (const paragraph of paragraphs) {
    paragraph.style.color = 'red';
}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Crear elemento e insertarlo en la DOM:
// Opción 1:
const h1 = document.createElement('h1');
h1.innerHTML = 'This h1 was created within JS';
document.body.insertBefore(h1, document.getElementById('content')); // Se inserta antes de un elemento.

// Opción 2:
const p = document.createElement('p');
p.innerHTML = 'Parrafo creado desde JS';
document.getElementById('content').appendChild(p); // Se inserta al final, dentro de un elemento.

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//* Modificar un elemento HTML desde su propiedad:
const ans = document.getElementById('answer');
const cols = ans.getAttribute('cols');
if(cols <= 20) {
    ans.setAttribute('cols', '60');
}


