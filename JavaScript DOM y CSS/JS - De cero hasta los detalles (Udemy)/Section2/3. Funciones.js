let a = 10;

// * Al ejecutar la función, primero va a buscar si existe 'a' dentro de la función. Si no, buscará esa variable en un entorno global. 
function getNumber() {
   // let a = 15;
    return a;
}
console.log(getNumber());

// ! Todas las funciones regresan un valor, si no está retornando nada, será undefined.
function voidFunction() { }
let func = voidFunction();
console.log(func);

