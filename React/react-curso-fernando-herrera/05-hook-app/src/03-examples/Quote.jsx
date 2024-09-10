import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { useLayoutEffect } from "react";

/**
 * * useEffect vs useLayoutEffect
 * ? Key point: La diferencia esta en su momento de ejecucion.
 * * useEffect: Se va a ejecutar despues de que se monta el componente y el navegador pinta los cambios.
 * * useLayoutEffect: Se ejecuta antes de que el navegador pinta los cambios. Se usa para medir o manipular el DOM inmediatamente despues
 * * de que el componente se monta y antes de que el navegador pinte los cambios.
 * 
 * En resumen, useLayoutEffect se usa aquí para asegurarse de que se obtengan las dimensiones del elemento justo después de que 
 * el componente se ha montado en el DOM, y antes de que el navegador actualice la pantalla.
 */

const Quote = ({ author, quote }) => {
  const pRef = useRef();
  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const { height, width } = pRef.current.getBoundingClientRect() //* Devuelve las medidas del elemento (width. height.. etc).
    setBoxSize({height, width})
  }, []);

  return (
    <>
      <blockquote className="blockquote text-end" style={{ display: "flex" }}>
        <p ref={pRef} className="mb-1">
          {quote}
        </p>
        <footer className="blockquote-footer">{author}</footer>
      </blockquote>

      <code>{JSON.stringify(boxSize)}</code>
    </>
  );
};

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Quote;
