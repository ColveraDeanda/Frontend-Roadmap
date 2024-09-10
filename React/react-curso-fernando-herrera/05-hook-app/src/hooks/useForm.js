import { useState } from "react";

const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { value, name } = target; // name = 'username' || 'email' || 'password'
    setFormState({
      ...formState, //* Hacemos referencia al estado actual de las propiedades.
      [name]: value, //* Para hacer uso de nuestra variable name de manera dinamica, se usan corchetes.
    });
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };

  return {
    ...formState,
    onInputChange,
    onResetForm
  };
};

export default useForm;
