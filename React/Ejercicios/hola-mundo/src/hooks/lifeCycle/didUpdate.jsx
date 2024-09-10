import React, { Component, useEffect } from 'react'

export class DidUpdateClass extends Component {

    componentDidUpdate() {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado.');
    }

    render() {
        return (
            <div>
                didUpdate (class).
            </div>
        )
    }
}

export const DidUpdateHook = () => {

    useEffect(() => {
        console.log('Comportamiento cuando el componente recibe nuevos props o cambio en su estado privado.');
    });

    return (
        <div>
            didUpdate (hook).
        </div>
    );
}



