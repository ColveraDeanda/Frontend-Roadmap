import PropTypes from "prop-types";
import { useState } from 'react';

const CounterApp = ({ value }) => {

  //! Cuando cambia el estado (setCounter), todo el codigo del componente se vuelve a ejecutar.
  const [ counter, setCounter ] = useState(value);

  const handleAdd = () => {
    // value = 1000; // Para hacer que esto funcione, necesitamos decirle a react que hubo un cambio en el estado y se ocupa renderizacion.
    // console.log(event);
    setCounter(counter + 1 );

    // Si no tengo acceso a la variable counter, se puede hacer referencia:
    setCounter((c) => c + 1);
  };

  const handleSubstract = () => setCounter(counter - 1);
  
  const reset = () => setCounter(value);

  return (
    <>
      <h1>CounterApp</h1>

      <h3>Counter: {counter}</h3>
      {/* Al evento onClick, se le puede pasar una funcion anónima */}
      <button onClick={ handleAdd }>+1</button>

      <button onClick={ handleSubstract }>-1</button>

      <button onClick={ reset }>Reset</button>


    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
