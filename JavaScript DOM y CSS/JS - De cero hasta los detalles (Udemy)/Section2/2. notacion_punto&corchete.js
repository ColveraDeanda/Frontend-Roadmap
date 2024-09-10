let persona = {
    nombre: 'Juan',
    apellido: 'Herrera',
    edad: 25,
    direccion: {
        pais: 'Mexico',
        ciudad: 'Queretaro',
        edificio: {
            0: 'Edificio cool',
            1: '444-9999-98'
        }
    }
}

// * Nota: En caso de querer acceder a una propiedad que no existe, devolverá undefined
console.log(persona.direccion2);

persona['direccion'].edificio[2] = 'otro dato';
delete persona['direccion'].edificio[2];

let direccion = 'direccion';
console.log(persona[direccion].edificio);

