let valor = 5;
const nombre = 'John';

if(true) {
    //* let y const respetan el scope en el que se esta trabajando.
    const nombre = 'Cristobal';
    let valor = 10;
    console.log(valor); // 10
    console.log(nombre);
}