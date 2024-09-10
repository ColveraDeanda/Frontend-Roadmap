import React, {useState} from 'react';


const UseStateComponent = () => {

/*
* useState es un hook de React que se utiliza para manejar el estado local en un componente.
* Permite mantener un valor en el componente que puede ser actualizado por el componente, y 
* provoca un re-render del componente cuando cambia el valor
*/

   const [counter, setCounter] = useState(0);

  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default UseStateComponent;
