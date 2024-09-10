import React, { Component, useEffect } from 'react';

export class WillUnMountClass extends Component {

    componentWillUnmount() {
        console.log('Comportamiento antes de que el componente desaparezca.');
    }

    render() {
        return (
            <div>
                <h1>Will UnMount Class</h1>
            </div>
        );
    }
}



export function WillUnMountHook() {

    // El return se ejecutará cuando el componente desaparezca.
    useEffect(() => {
        return () => {
            console.log('Comportamiento antes de que el componente desaparezca.');
        };
    }, []); // ? [] vacío: Cuando solo se ejecute una vez.

    return (
        <div>
            <h1>Will UnMount Class</h1>
        </div>
    )
}


