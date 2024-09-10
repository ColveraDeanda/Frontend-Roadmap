import React, {useState} from 'react';

// Definir estilos en constantes.
const loggedStyle = {
    color: 'blue'
};
const unloggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
};

const GreetingStyled = ( { name } ) => {

    const [logged, setLogged] = useState(false);

    const greetingUser = () => (<p>Éstas logeado, Hola {name}!!</p>);
    const pleaseLogin = () => (<p>No estás logeado, Logeate ya !!</p>);


    return ( // validación ternarioa para asignar unos estilos u otros.
        <div style={logged ? loggedStyle : unloggedStyle}>
            {/* Renderizado condicional */}
            { logged ? 
                greetingUser()
                :
                pleaseLogin()
            }

            <button onClick={() => {
                console.log('Cambiando el estado de logged');
                setLogged(!logged);
            }}>
                { logged ? 'Logout' : 'Login' }  {/* Funcion anónima para cambiar el state boleano */}
            </button>
        </div>
    );
};



export default GreetingStyled;
