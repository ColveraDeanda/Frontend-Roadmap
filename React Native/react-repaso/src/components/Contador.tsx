import ContadorHook from '../hooks/ContadorHook';

const Contador = () => {

    // * Cuando se haga muy extenso el código, hacer un hook para dividir la lógica y el código.
    // * Nota: Se le pueden pasar parámetros al hook para que procese bien todo. (En caso de ser necesario).
    const { counter, acum } = ContadorHook(30);

    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={acum}>+</button>
        </div>
    )
}

export default Contador;