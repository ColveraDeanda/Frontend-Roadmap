import React, {useContext} from 'react';

/**
 * ? Use Contexto: En vez de usar props, se pasan propiedades a travéz de un contexto dónde el padre es el provider. Y proveerá de esa misma información a sus children.
 */

const miContexto = React.createContext(null);

const UseContextComponent = () => {

    const simpleObj = {
        name: 'Cristobal',
        age: 24,
        busy: true
    }

  return (
    <div>
        <miContexto.Provider value={simpleObj}>
                {/* Todo lo que está dentro puede leer los datos del contexto (simpleObj)*/}
                <Componente1></Componente1>
        </miContexto.Provider>
    </div>
  )
}

const Componente1 = () => {
    console.log('Some logic here...');

    return (
        <div>
            <AnotherComponent/>
        </div>
    )
}

const AnotherComponent = () => {
    // ! De esta manera se puede pasar data de un componente a otro sin usar props. 
    const obj = useContext(miContexto);
    console.log(obj);
    return (
        <div></div>
    )
}

export default UseContextComponent;