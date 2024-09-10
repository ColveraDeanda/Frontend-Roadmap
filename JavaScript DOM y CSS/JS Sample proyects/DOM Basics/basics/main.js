//----------------------------------------------------------------------------------------------------------------------------------------
// InnerHTML: interpreta el contenido como HTML.
// TextContent: lo trata como texto plano.
 
const container = document.querySelector('#container');
let html = `
<div class="test-container">
<div class="box">
    <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
    </ul>
</div>
</div>
`;
container.textContent = html;  // Texto plano.
container.innerHTML += html; // Interpretación HTML.

// ---------------------------------------------------------------------------------------------------------------------------------------
// AGREGAR CONTENIDO AL HTML:
const body = document.body;
const div = document.createElement('div');
div.innerHTML = '<h3>div creado con append...</h3>';

// Agregando elementos al HTML  
body.append('Insertando texto con Append.'); // Append = Va a insertar los nodos despues del ultimo nodo que encuentre. AppendChild solo acepta nodos y no acepta múltiples parámetros.
body.append(div);

// -----------------------------------------------------------------------------------------------------------------------------------------
// Diferencias entre textContent e innerText.
const container2 = document.querySelector('#container-2');
console.log(container2.innerText); // innerText respeta el contenido que estamos tratando de obtener de manera correcta.
console.log(container2.textContent); // Por otro lado, textContent no respeta lo que estamos tratando de obtener, ya que trae los espacios etc.
// Lo único que cambia uno de otro es la forma en como se obtiene el contenido.

//-------------------------------------------------------------------------------------------------------------------------------------------
// Eliminando elementos
const spanBye = document.querySelector('#bye');
const spanHi = document.querySelector('#hi');

spanBye.remove(); // Se elimina el elemento completamente del HTML.
container2.append(spanBye); // Se puedo regresar el elemento de esta manera.

container2.removeChild(spanHi); // removeChild hace prácticamente lo mismo.
container2.append(spanHi);

//------------------------------------------------------------------------------------------------------------------------------------------
// Obteniendo el value de las propiedades HTML.
const title = spanHi.getAttribute('title'); 
const dataId = spanHi.getAttribute('data-id'); 
const id = spanHi.id; // Se puede utilizar el método getAtribute ó directamente se puede acceder a la propiedad.
console.log('Título: ' +  title, '| id: ' + dataId);
console.log(id);

spanBye.setAttribute('id', 'adios'); 
spanBye.title = 'Flower'; // para modificar igualmente se puede usar el método setAttribute ó se puede acceder a la propiedad

spanBye.removeAttribute('title');

//-------------------------------------------------------------------------------------------------------------------------------------------
// Usando propiedad data (manipulación de data-sets)
const myText = document.querySelector('#my-text');
console.log(myText.dataset); // Obtener todos los data de un elemento HTML.
console.log('data-test: ' + myText.dataset.test);

myText.dataset.number = '12345678';
console.log(myText.dataset);

//-------------------------------------------------------------------------------------------------------------------------------------------
// Usando classList (manipulación de clases).
const container3 = document.querySelector('#container-3');
container3.classList.add('new-class');
container3.classList.remove('style1');
container3.classList.toggle('new-class2') // Si encuentra esa clase, la elimina. Si no la encuentra, la agrega.
container3.classList.toggle('new-class-3', true); // true = automaticamente agrega la clase, false = automaticamente elimina la clase.


// ------------------------------------------------------------------------------------------------------------------------------------------
// Con la style propert se puede acceder a cualquier propiedad css y modificarla.
spanBye.style.color = 'red';
spanBye.style.backgroundColor = 'black';
spanBye.style.padding = "10px";
spanBye.style.fontSize = "20px";
spanBye.style.border = "3px solid blue"


// Acceso a children y parents
const containerMaster = document.querySelector('#container-master');
const parents = containerMaster.children;
const children3 = parents[1].children.child3;
const children4 = parents[1].children.child4;
console.log(children3);
console.log(children4);

const parentAgain = children4.parentElement;
console.log(parentAgain);

const con = children3.closest('#container-master');
console.log(con);
con.style.border = '3px solid black';


children4.innerHTML = 'holaaaaa';
const p = document.createElement('p');
p.textContent = 'Este es un parrafo...';

const p1 = document.createElement('p');
p1.textContent = 'Este es un parrafo...';

children4.append(p);
children3.append(p1)





