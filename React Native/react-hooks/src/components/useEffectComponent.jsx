import React, { useEffect, useState } from 'react';

/*
   useEffect se puede definir como un efecto secundario del componente. Cuando haya un cambio de estado,
   se ejecutará un bloque de código.
   También servirá para controlar el ciclo de vida del componente.
*/

const UseEffectComponent = () => {

    const [counter, setCount] = useState(0)
    const [counter2, setCount2] = useState(0)


     // ! Caso 1: Ejecutar siempre un bloque de código con cualquier cambio en el State
    // Cada vez que haya un cambio en el estado, se ejecutará aquello dentro del useEffect().
    useEffect(() => {
        console.log('Cambio en el estado del componente.');
    });

    // ! Caso 2: Ejecutar solo cuando cambie el contador 1.
    /* Cada vez que haya un cambio en el contador 1, se ejecutará el useEffect */
    useEffect(() => {
        console.log('Hay cambios con el contador 1!!!');
    }, [counter]);

    // ! Caso 3: Ejecutar solo 1 vez cuando se monte el componente.
    /* Cada vez que se monte el componente, se ejecutará solo 1 vez */
    useEffect(() => {
        console.warn('Ésto solo se ejecutará 1 sola vez')
    }, []);

    // ! Caso 4: Ejecutar solo cuando se desmonte el componente
    /* Cada vez que se desmonte el componente, se ejecutará */
    useEffect(() => {
        return () => {
            console.warn('Clean up');
        }
    }, []);


    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCount(counter + 1)}>Click me</button>
            <hr></hr>
            <p>{counter2}</p>
            <button onClick={() => setCount2(counter2 + 1)}>Click me</button>
        </div>
    )
}

export default UseEffectComponent;