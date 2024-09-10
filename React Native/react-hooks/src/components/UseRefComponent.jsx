import React, { useRef } from 'react';

// ! UseRef servirá para hacer referencia a un elemento de la DOM.
// * Es la forma de hacer getElementById, y tener el elemento haciendo referencia. 


const UseRefComponent = () => {

    const inputRef = useRef();

    const handleClick = () => {
        if(inputRef.current.value !== '') {
            console.log(inputRef.current.value);
        }
    }

    return (
        <div>
            <input type='text' ref={inputRef}></input>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}

export default UseRefComponent