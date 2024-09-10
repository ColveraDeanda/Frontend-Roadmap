import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";

const GifGrid = ({ category }) => {

  const {images, isLoading} = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>

      {/* El loading se podria hacer asi:  */}
      {/* { isLoading ? (<h2>Cargando...</h2>) : null } */}

      {
        isLoading && (<h2>Cargando...</h2>)
      }

      <div className="card-grid">
        {images.map(
          (
            image //* Usando parentesis, estamos haciendo un return implicito.
          ) => (
            <GifItem key={image.id} {...image} /> //* Podemos espacir todas las propiedades de image. Sirve para pasarle muchas props, sin tener que pasarle una por una.
          )
        )}
      </div>
    </>
  );
};

export default GifGrid;
