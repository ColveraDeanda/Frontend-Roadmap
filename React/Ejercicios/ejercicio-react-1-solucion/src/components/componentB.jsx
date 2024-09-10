import React, {useState} from 'react';
import PropTypes from 'prop-types';


const ComponentB = ( connectedState ) => {

    const [state, setState] = useState(connectedState);

    const changeState = () => {
        setState(!state);
    }

    return (
        <div>
        {/* No poner condicional state === true ?.. solo poner state ?*/}
            <h3>Estado de conexión: {state ? 'Contacto En Línea' : 'Contacto No Disponible'}</h3>
            <button onClick={changeState}>{state ? 'Desconectarse' : 'Conectarse'}</button>
        </div>
    );
};


ComponentB.propTypes = {
    connectedState: PropTypes.bool,
};


export default ComponentB;
