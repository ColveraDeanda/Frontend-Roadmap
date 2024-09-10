import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../model/contact';
import ComponentB from './componentB';


const ComponentA = ( {contact} ) => {
    return (
        <div>
            <h3>Nombre: {contact.name}</h3>
            <h3>Apellido: {contact.surname}</h3>
            <h3>Correo: {contact.email}</h3>
            <ComponentB connectState={contact.connected} />
            
        </div>
    );
};


ComponentA.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ComponentA;
