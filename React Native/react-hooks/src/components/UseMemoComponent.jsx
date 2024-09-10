import React, {useMemo} from 'react';

/* // ! useMemo = Servirá para optimizar el performance de la aplicación.
   * useMemo es un hook de React que permite optimizar la performance de tu 
   * aplicación al memorizar el resultado de una función. Esto significa que 
   * la función solo se ejecutará nuevamente si alguno de sus argumentos 
   * ha cambiado.
*/ 

const complexFunction = (a,b) => {
    return a * b;
}

const UseMemoComponent = () => {

    const change = true;
    // * useMemo memorizará el resultado de la función y solo se volverá a ejecutar si uno de sus args a cambiado.
    const memorizedValue = useMemo(() => complexFunction(2,4), [change]);
    // !  De esta manera, evitas tener que volver a calcular un valor que ya ha sido calculado previamente.
    
  return (
    <div>{memorizedValue}</div>
  )
}

export default UseMemoComponent