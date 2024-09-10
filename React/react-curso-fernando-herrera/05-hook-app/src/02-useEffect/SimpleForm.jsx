import { useEffect, useState } from "react";
import Message from "./message";

const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "iStriker",
    email: "",
  });

  const { username, email } = formState;

  const onInputChange = ( {target} ) => {
    const {value, name} = target; // name = 'username' || 'email'
    setFormState({
        ...formState, //* Hacemos referencia al estado actual de las propiedades.
        [name]: value //* Para hacer uso de nuestra variable name de manera dinamica, se usan corchetes.
    })
  }

  useEffect(() => {
  }, [formState]); //* Cada vez que el estado del formulario cambie, se ejecutara el useEffect.

  useEffect(() => {
  }, [email]); //* Solo se ejecutara cuando el email sea modificado.


  return (
    <>
      <h1>Formularia simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="colvera@google.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />

        {
            (username === 'iStriker') && <Message/>
        }
    </>
  );
};

export default SimpleForm;
