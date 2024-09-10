import React, {useState} from 'react';

const Ejemplo1 = () => {

    const countInicial = 0;

    const personInicial = {
        nombre: 'Cristobal',
        email: 'cris@gmail.com'
    };

    /**
     * Queremos que el count y person sean parte de estado del componente para así poder gestionar su cambio
     * a travéz de el hook useState. Y se puedan rederizar los cambios.
     */

    const [count, setCount] = useState(countInicial);
    const [person, setPerson] = useState(personInicial);

    /**
     * *Función para actualizar el estado privado del contador.
     */ 
    function incrementarContador() {
        // ? Se incrementa en uno el contador.
        setCount(count + 1);
    }

    /**
     * Función para actualizar el estado de persona en el componente.
     */
    function actualizarPersona() {
        setPerson({
            nombre: 'Pepe',
            email: 'hola@gmail.com'
        });


    }

    return (
        <div>
            <h1>*** Ejemplo de useState ***</h1>
            <h2>Contador: {count}</h2>
            <h2>Persona:</h2>
            <h3>Nombre: {person.nombre}</h3>
            <h3>Email: {person.email}</h3>

            {/* Bloque de botones para actualizar el estado */}
            <button onClick={incrementarContador}>Incrementar contador</button>
            <button onClick={actualizarPersona}>Actualizar persona</button>
        </div>
    );
};


export default Ejemplo1;

