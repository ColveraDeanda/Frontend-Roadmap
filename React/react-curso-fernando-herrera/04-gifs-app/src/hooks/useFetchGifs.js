/**
 * * Un Custom hook no es mas que una funcion que va a retornar algo
 * * El custom hook tendra tambien su estado. Si el estado llega a ser modificado (setImages), se aplicara una re-renderizacion.
 */

import { useEffect, useState } from "react";
import getGifs from '../helpers/getGifs';

const useFetchGifs = (category) => {

  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages); //* Le pasamos el arreglo de objetos. Entonces images tendra los objetos que ocupamos
    setIsLoading(false);
  };

  /**
   ** useEffect es un hook para ejecutar efectos secundarios.
   ** Por ejemplo, cuando alguna variable de estado cambie, disparar el efecto.
   ** o cuando el componente se renderiza por primera vez, disparar el efecto.
   */

  //* En este caso solo quiero ejecutar la peticion http solo 1 vez cuando el componente de inicializa.
  useEffect(() => {
    getImages();
  }, []); //! Si lo dejo vacio, solamente se ejecutara la primera vez cuando el componente de construye.

  return {
    images,
    isLoading,
  };
};

export default useFetchGifs;
