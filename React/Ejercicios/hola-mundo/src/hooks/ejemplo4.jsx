import React from 'react';

/**
 * * Ejemplo para entender el uso de props.children
 */

const Ejemplo4 = ( {nombre, children} ) => {
    return (
        <div>
            <h3>Ejemplo de Children props</h3>
            <h2>Nombre: {nombre}</h2>
            {/* children: pintar los elementos que estén entre la apertura
            y cierre desde el componente de orden superior. */}
            {console.log(children)}
            {children}
        </div>
    );
}

export default Ejemplo4;
