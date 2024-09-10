import { useState } from "react";

const CounterApp = () => {
  const [countState, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30,
  });

  const {counter1, counter2, counter3} = countState;

  return (
    <>
      <h1>Counter: {counter1}</h1>
      <h1>Counter: {counter2}</h1>
      <h1>Counter: {counter3}</h1>
      <hr />

      <button
        className="btn btn-primary"
        onClick={() =>
          setCounter({ //* Al momento de setear, se le pasan los elementos del objeto.
            ...countState,
            counter1: counter1 + 1,
          })
        }
      >
        Counter1 +1
      </button>
    </>
  );
};

export default CounterApp;
