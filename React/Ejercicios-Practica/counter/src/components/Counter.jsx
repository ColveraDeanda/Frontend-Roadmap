import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handleAdd = () => {
    setCounter(counter + 1);
  }

  const handleSubstract = () => {
    setCounter(counter - 1);
  }

  return (
    <>
      <div>Hello Counter</div>
      <h1>{counter}</h1>
      <button onClick={handleAdd}>+</button>
      <button onClick={handleSubstract}>-</button>
    </>
  );
};

export default Counter;
