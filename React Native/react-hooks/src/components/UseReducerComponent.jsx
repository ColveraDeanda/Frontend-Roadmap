import React, { useReducer } from 'react'

// ! useReducer permite manipular los estados de manera global en la aplicacion. 
// !A diferencia de useState que solo se puede manipular el estado de forma local.
// ? Cuando se tiene una lógica compleja en la aplicación, es preferible usar useReducer.
/*
  * useReducer recibe dos argumentos:
    1. Una función reductora: es una función que recibe dos argumentos, el estado actual y una acción, 
    y devuelve un nuevo estado. Esta función es la encargada de manejar todas las actualizaciones del 
    estado en nuestra aplicación.
    2. Un estado inicial: es el valor con el que queremos inicializar el estado en nuestra aplicación.

  * useReducer devuelve 2 valores:
    1. El estado actual: es el valor del estado de nuestra aplicación en un momento dado.
    2. Una función dispatch: es la función que utilizaremos para enviar acciones a la función reductora. 
       Al enviar una acción, esta función ejecutará la función reductora y actualizará el estado.
*/

const initialState = { count: 0 };

// * Se crea la función reducer, encargada de manejar las actualizaciones en el state.
function reducer(state, action) { // state = tendrá el estado actual
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}


const UseReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <h3>Count: {state.count}</h3>
            {/* //* en dispatch se pone la action que va a disparar */}
            <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
            <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
        </div>
    )
}

export default UseReducerComponent;