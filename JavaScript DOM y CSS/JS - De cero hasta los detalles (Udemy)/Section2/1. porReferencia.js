let a = 10;
let b = a; // * b tendrá su propio valor en memoria. Si se modifica a, b no será afectado ya que es independiente.
a = 15;
console.log(a, b);

// * Lo anterior no se da igual al manejar OBJETOS:
let c = {
    nombre: 'Maria'
}
// ! Al igualar objetos, siempre se pasa por referencia. Es decir, d estará apuntando al mismo espacio de memoria que c.
let d = c;
d.nombre = 'Cristobal';
console.log(c , d);

// ! Al igualar arreglos, también se está pasando por referencia. Para evitar problemas, se crea una copia.
let arr = [1,2,3,4];
let arr2 = arr;
arr2.push(10);
console.log(arr, arr2);