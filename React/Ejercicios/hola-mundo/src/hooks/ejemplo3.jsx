import React, {useState, useContext} from 'react';

/**
 * ? Use Contexto: En vez de usar props, se pasan propiedades a travéz de un contexto dónde el padre es el provider. Y proveerá de esa misma información a sus children.
 */


const miContexto = React.createContext(null);

const MiComponenteConContexto = () => {

    const estadoInicial = {
        token: 'RFCLOI54',
        sesion: 1
    }

    // Creamos el estado de este componente
    const [sessionData, setSessioData] = useState(estadoInicial);

    function actualizarSesion() {
        setSessioData(
            {
                token: 'NUEVO TOKEN: 242343',
                sesion: sessionData.sesion + 1
            }
        );
    }

    return (
        <div>
            <miContexto.Provider value={sessionData}>
                {/* Todo lo que está dentro puede leer los datos del contexto (sessionData).
                Ademas si se actualiza los componentes de aquí, también lo actualizan. */}
                <Componente1></Componente1>
                <button onClick={actualizarSesion}>Actualizar sesión</button>
            </miContexto.Provider>
        </div>
    );
}

/**
 * 
 * @returns Componente 1
 * Puede hacer uso de un contexto que va a tener un valor que recibe desde el padre.
 */
const Componente1 = () => {

    // Ya que el componente 1 está dentro de miContexto.Provider, ahora componete 1 tiene acceso al contexto
    // mediante el hook useContext()
    const state = useContext(miContexto);

    return (
        <div>
            <h1>El token es: {state.token}</h1>
            <Componente2></Componente2>
        </div>
    );
}

const Componente2 = () => {

    // Ya que el componente 2 está dentro de miContexto.Provider, ahora componete 1 tiene acceso al contexto
    const state = useContext(miContexto);

    return (
        <div>
            <h2>La sesión es: {state.sesion} </h2>
        </div>
    );
}

export default MiComponenteConContexto;

