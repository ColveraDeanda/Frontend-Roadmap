import { useCounter, useFetch } from "../hooks";
import { LoadingQuote, Quote } from "./";

const MultipleCustomHooks = () => {
  //* Cuando el componente MultipleCustomHooks se renderiza / monta, monta el custom hook y nos retorna la data con los valores
  //* de su estado inicial del custom hook.

  //* Cuando se modifica el estado del custom hook, hace que se renderice el componente MultipleCustomHooks otra vez, con los nuevos valores
  //* del estado.
  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://api.breakingbadquotes.xyz/v1/quotes/${counter}`
  );

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {isLoading ? <LoadingQuote /> : <Quote {...data[0]} />}

      <button
        className="btn btn-primary text-end"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next
      </button>
    </>
  );
};

export default MultipleCustomHooks;
