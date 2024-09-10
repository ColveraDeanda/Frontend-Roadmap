import { useRef } from "react";

const FocusScreen = () => {
  //* useRef servirá para hacer referencia a un elemento
  const inputRef = useRef();

  const handleClick = () => {
    console.log(inputRef.current);

    //* En vez de hacer esto:
    //   document.querySelector('input').select()
    
    //* Se hace lo mismo usando la referencia:
    inputRef.current.select();
  };

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre"
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={() => handleClick()}>
        Set Focus
      </button>
    </>
  );
};

export default FocusScreen;
