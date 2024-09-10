/**
 * * Ejemplo de componente de tipo clase que dispone de los métodos 
 * * de ciclo de vida.
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';


class LifeCycleExample extends Component {

    // El constructor siempre servirá para la inicialización de variables.
    constructor(props) {
        super(props);
        console.log('Iniciando constructor...');
    }

    // ? Se llama cuando el componente es montado.
    componentDidMount() {
        console.log('DidMount: Se llama justo al montaje del componente. Antes de renderizarlo.');
    }

    // ? Controlará si el componente debe actualizarse o no. returna true or false.
    shouldComponentUpdate(nextProps, nextState) {
        /* return true / false; */
    }

    // ? Se llama justo después de actualizarse.
    componentDidUpdate() {
        console.log('Justo después de actualizarse.');
    }

    componentWillUnmount(){
        console.log('Justo antes de desaparecer el componente.');
    }

    
    render() {
        return (
            <div>
                
            </div>
        );
    }
}


LifeCycleExample.propTypes = {

};


export default LifeCycleExample;
