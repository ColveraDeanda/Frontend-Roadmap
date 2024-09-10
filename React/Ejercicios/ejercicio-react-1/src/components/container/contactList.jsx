import React from 'react';
import ContactComponent from '../pure/contact';
import { Contact } from '../../model/contact';


const ContactListComponent = () => {

    const contactOffline = new Contact('Verónica', 'Ruiz', 'vero@gmail.com', false);
    const contactOnline = new Contact('Cristobal', 'Olvera', 'colvera@gmail.com', true);

    return (
        <div>
            <div><h3>Listado de contactos:</h3></div>
            <div>
                <ContactComponent contact={contactOffline}></ContactComponent>
                <ContactComponent contact={contactOnline}></ContactComponent>
            </div>
        </div>
    );
};


export default ContactListComponent;
