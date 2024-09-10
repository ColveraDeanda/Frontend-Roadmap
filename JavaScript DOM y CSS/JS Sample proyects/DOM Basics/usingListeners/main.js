const grandParent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');

/* Ejercicio 1.
grandParent.addEventListener('click', e => {
   // console.log(e.target); // target = elemento que estamos usando
    console.log('grandParent');
});

parent.addEventListener('click', e => {
    console.log('parent');
})

child.addEventListener('click', e => {
    console.log('child');
});
*/

// Si se da click al child, se ejecutarán los 3 eventos anteriores por la "fase bubble" por la que pasa el evento. (La fase bubble va de adentro hacia afuera).

//---------------------------------------------------------------------------------------------------------------------------------------
// La "fase de captura" de inicia al momento de cargar el HTML en el orden en el que se encuentra. En el siguiente ejemplo cuando se le da
// click a chiid, se está obteniendo grandParent y parent primero por que tienen la captura: true y al final llega al child.

/* Ejercicio 2
grandParent.addEventListener('click', e => {
    // console.log(e.target); // target = elemento que estamos usando
     console.log('grandParent');
 }, { capture: true });
 
 parent.addEventListener('click', e => {
     console.log('parent');
 }, { capture: true });
 
 child.addEventListener('click', e => {
     console.log('child');
 });
*/


//--------------------------------------------------------------------------------------------------------------------------------------------
// En este ejemplo se puede observar el flujo de la fase Capture y Bubble respetivamente al momento de dar click al child.

/** Ejercicio 3
 grandParent.addEventListener('click', e => {
    console.log('grandParent Capture');
}, { capture: true });

grandParent.addEventListener('click', e => {
    console.log('grandParent Bubble');
});

parent.addEventListener('click', e => {
    console.log('parent Capture');
}, { capture: true });

parent.addEventListener('click', e => {
    console.log('parent Bubble');
    e.stopPropagation(); // Se de tiene el flujo de fase capture y bubble.
});

child.addEventListener('click', e => {
    console.log('child Capture');
}, { capture: true });

child.addEventListener('click', e => {
    console.log('child Bubble');
});
 */


// --------------------------------------------------------------------------------------------------------------------------------------------
// Se puede hacer que el evento solo se ejecute una vez.
grandParent.addEventListener('click', e => {
     console.log('grandParent');
 }, {once: true});

 // Eliminando un evento:
let count = 0;
parent.addEventListener('click', greetings);

function greetings() {
    count += 1;
    console.log('holaa');
    if(count === 5) {
        parent.removeEventListener('click', greetings);
    }
}


















