import { useState } from "react";
//* Antes:
// import AddCategory from "./components/AddCategory";
// import GifGrid from "./components/GifGrid";

//* Despues:
import { AddCategory, GifGrid} from './components';

const GifExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const addCategory = (value) => {
    console.log(value);
    if (categories.includes(value)) return;
    setCategories([value, ...categories]);
    // setCategories((cat) => [...cat, 'Valorant']); //* 2da forma de hacerlo.
  };

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        onNewCategory={(value) => addCategory(value)}
      />

      {/* Listado de Gif */}
      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      
    </>
  );
};

export default GifExpertApp;
