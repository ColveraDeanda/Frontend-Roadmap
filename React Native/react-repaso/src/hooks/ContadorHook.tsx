import { useState } from "react";


const ContadorHook = ( valorInicial: number = 100 ) => {

    const [counter, setCounter] = useState(valorInicial);

    const acum = () => {
        setCounter(counter + 1)
    }

    // Se puede retornar como objeto literal ó como arreglo, es lo mismo.

    return {
        counter, 
        acum
    }
}

export default ContadorHook