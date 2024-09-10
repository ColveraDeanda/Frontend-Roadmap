import React, { Component, useEffect, useState } from 'react'
import { useRef } from 'react';

export class DidMountClass extends Component {

    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    componentDidMount() {
        console.log('Comportamiento antes de que el componente se renderice. (class)');
    }

    handleClick = () => {
        this.setState(prevState => ({
            number: prevState.number + 1
        }));
    }

    render() {
        return (
            <div>
                <h1>DidMount Class {this.state.number}</h1>
                <button onClick={this.handleClick}>Click me</button>
            </div>
        )
    }
}


export const DidMountHook = () => {

    const [number, setNumber] = useState(0);
    const myH1 = useRef();
    const button = useRef();

    const handleClick = () => {
        setNumber(number + 1);
    }

    // Se ponen los [] vacíos para realizar un comportamiento igual al de componentDidMount()
    useEffect(() => {
        console.log('Comportamiento antes de que el componente se renderice. (hook)');
        console.log(`Referencia de mi H1`);
        console.log(myH1);
        console.log(button);
    }, []); // ? [] corchetes vacíos, solo se ejecutará una vez.

    useEffect(() => {
        console.log('Use Effect siempre que se renderice...');
    });

    return (
        <div>
            <h1 ref={myH1}>DidMount Hook {number}</h1>
            <button ref={button} onClick={handleClick}>Click me!</button>
        </div>
    );
}



