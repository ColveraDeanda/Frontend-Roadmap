import { useState } from "react"


const AddCategory = ( { onNewCategory } ) => {

  const [inputValue, setInputValue] = useState('');

  /**
   ** En este caso, cada vez que el input cambia, (es decir, el dom cambia), quiero guardar esa variable en mi
   ** componente. Para hacer eso correctamente, necesito guardar ese valor en mi variable de estado.
   */
  const onInputChange = (event) => {
    setInputValue(event.target.value);
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if(inputValue.trim().length <= 1) return;

    onNewCategory(inputValue.trim()) //* Emitimos la data.
    setInputValue('');
  }

  return (
    //* Cuando le de enter al input, se va a disparar el evento onSubmit
    <form onSubmit={(event) => onSubmit(event)}>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

export default AddCategory