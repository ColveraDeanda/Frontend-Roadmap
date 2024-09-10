import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './greeting.css';

// rccp-> para generar el snippet. (Componente de clase)

// Componente tipo clase
class Greeting extends Component {

    // props (propiedades) = información que le pasamos al componente
    constructor(props){
        super(props);
        this.state = { // state = información privada del componente
            age: 24
        };
        /** Los componentes tienen un estado inmutado. Cambiar una propiedad del state generará una
         *  nueva renderización. Ésto solo se puede hacer con setState.
         */
    }

    render() {
        return ( // Solo se puede renderizar un elemento.
            <div className='container'>
                <h4>
                    Hola {this.props.name} desde Greeting class ! - {this.props.number}
                </h4>
                <h3>
                    Edad: {this.state.age}
                </h3>
                <button className='btn btn-birthday' onClick={this.birthday}>Birthday</button>
                <button className='btn less-age' onClick={this.handleLessAge}>Less Age</button>
            </div>
        );
    }

    // setState generará un nuevo estado.
    birthday = () => {
        this.setState((prevState) => (
            {
                age: prevState.age + 1
            }
        ));
    }

    handleLessAge = () => {
        this.setState((prevState) => (
            {
                age: prevState.age - 1
            }
        ));
    }


}

// propTypes = Definir el tipo de variable que se está pasando. En TS ésto no 
// es necsario.
Greeting.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number,
};


export default Greeting;

