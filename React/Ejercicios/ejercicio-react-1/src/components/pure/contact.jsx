import React from 'react';
import PropTypes from 'prop-types';
import './contact.css';
import { Contact } from '../../model/contact';


const ContactComponent = ({ contact }) => {
    return (
        <div className='contact'>
            <div>
                <strong>Nombre:</strong> {contact.name} | <strong>Apellido:</strong> {contact.surname}
            </div>
            <div>
               <strong>Correo:</strong> {contact.email} | <strong>Estado de conexión:</strong> {contact.isConnected ? 'Contacto En Línea' : 'Contacto No Disponible'}
            </div>
        </div>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact),
};


export default ContactComponent;
