import React, {useState} from "react";
import PropTypes from "prop-types";

// rfc-> para generar el snippet. (Componente de función)


const GreetingF = (props) => {

    // Se utiliza un hook para definir el state (useState)
    const [age, setAge] = useState(24);

    const birthday = () => {
        setAge(age + 1);
    }

    const handleLessAge = () => {
        setAge(age - 1);
    }

    return (
        <div className="container">
            <h4>
                Hola {props.name} desde GreetingF (componente funcional) ! - {props.number}
            </h4>
            <h2>Edad: { age }</h2>
            
            <button className="btn btn-birthday" onClick={birthday}>
                Birthday
            </button>
            <button className="btn less-age" onClick={handleLessAge}>
                Less Age
            </button>
            
        </div>
    );
};

GreetingF.propTypes = {
    name: PropTypes.string,
    number: PropTypes.number
};

export default GreetingF;
