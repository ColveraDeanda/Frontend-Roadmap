import React, {useState, useRef, useEffect} from 'react';

/**
 * * useEffect(): Sirve para controlar los cambios de nuestro componente. Se usa para el ciclo de vida del componente.
 * * useRef(): Sirve para refenciar elementos dentro de la vista.
 */

const Ejemplo2 = () => {

    const [contador1, setContador1] = useState(0);
    const [contador2, setContador2] = useState(0);

    // Crear una referencia con useRef() para asociar una varibable con un elemento del DOM. del componente
    const myRef = useRef();
    console.log('Este es la referencia del elemento H4:');
    console.log(myRef);

    const incrementar1 = () => {
        setContador1(contador1 + 1);
    }

    const incrementar2 = () => {
        setContador2(contador2 + 1);
    }

    // ? Caso 1: Ejecutar siempre un bloque de código.
    // Cada vez que haya un cambio en el estado, se ejecutará aquello dentro del useEffect().
    /* useEffect(() => {
        console.log('Cambio en el estado del componente.');
        console.log('Mostrando Referencia a elemento del DOM.');
        console.log(myRef);
    })  */


    // ? Caso 2: Ejecutar solo cuando cambie el contador 1.
    /* Cada vez que haya un cambio en el contador 1, se ejecutará el useEffect */
    useEffect(() => {
        console.log('Hay cambios con el contador 1!!!');
    }, [contador1]);

    





    return (
        <div>
            <h3>*** Ejemplo de useState(), useRef() y useEffect()</h3>
            <h4>Contador 1: {contador1}</h4>
            <h4>Contador 2: {contador2}</h4>
            {/* Elemento referenciado */}
            <h4 ref={myRef}>
                Ejemplo de elemento referenciado
            </h4>
            <div>
                <button onClick={incrementar1}>Aumentar contador 1</button>
                <button onClick={incrementar2}>Aumentar contador 2</button>
            </div>
        </div>
    );
}

export default Ejemplo2;
