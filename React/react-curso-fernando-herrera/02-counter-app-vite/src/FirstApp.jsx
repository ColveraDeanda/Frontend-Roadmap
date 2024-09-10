import PropTypes from 'prop-types';

//* <> </> es un "Fragment". Esto se utiliza para agrupar varios elementos
//* y el fragment no se verá reflejado en el html de la pagina web.

//! Si tenemos una constante, lo recomendable es ponerla arriba de la funcion

const getMessage = () => {
    return 'Message Here';
}

const newMessage = {
    message: 'Hola mundoo',
    title: 'Cristobal'
}

const FirstApp = ( {title, subTitle, myNumber} ) => {


  return (
    <>
      {/* Al momento de imprimir variables, se puede imprimir todo, menos objetos directamente.
      Para eso de usa JSON.stringify() */}
      <code>{JSON.stringify(newMessage)}</code>
      <h1>{newMessage.title}</h1>

      {/* El true no se imprimira */}
      <h2>{true}</h2>

      <h3>{getMessage()}</h3>

      {/* Props */}
      <p>{title} y {subTitle} y {myNumber}</p>

    </>
  );
};

//* Tipo de dato de las props
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    myNumber: PropTypes.number
}

//* Se define un valor por defecto de una prop.
FirstApp.defaultProps = {
    myNumber: 100
}

export default FirstApp;
