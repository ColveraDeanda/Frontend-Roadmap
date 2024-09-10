import { useRef, useState } from "react";

enum Operadores {
    sumar,
    resta,
    multiplicar,
    dividir,
  }

export const useCalculadora = () => {
    const [lastNumber, setLastNumber] = useState('0');
    const [number, setNumber] = useState('0');

    const ultimaOperacion = useRef<Operadores>();

    const clean = () => {
        setNumber('0');
        setLastNumber('0');
    };

    const addNumberOrOperator = (numOperator: string) => {
        let check = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '-'];
        let notAllowed = ['/', 'x', '+'];
        let dotFilter = [...number].filter(elem => elem === '.');

        if (number === '0' && numOperator === '0') {
            return;
        }
        if (check.includes(numOperator) && number[0] === '0' && number[1] != '.') {
            setNumber(numOperator);
            return;
        }
        if (
            number[0] === '0' &&
            number[1] !== '.' &&
            notAllowed.includes(numOperator)
        ) {
            return;
        }
        if (dotFilter.length > 0 && numOperator === '.') {
            return;
        }

        setNumber(number + numOperator);
    };

    const setNegativeOrPositiveNumber = () => {
        let num = Number(number);
        num = num * -1;
        setNumber(String(num));
    };

    const deleteLastNumber = () => {
        if (number.length === 1 || (number.length === 2 && number[0] === '-')) {
            setNumber('0');
        } else {
            setNumber(number.slice(0, -1));
        }
    };

    const cambiarNumeroPorAnterior = () => {
        if (number.endsWith('.')) {
            setLastNumber(number.slice(0, -1));
        } else {
            setLastNumber(number);
        }
        setNumber('0');
    };

    const btnDividir = () => {
        cambiarNumeroPorAnterior();
        setLastNumber(`${number}/`);
        ultimaOperacion.current = Operadores.dividir;
    };

    const btnMultiplicar = () => {
        cambiarNumeroPorAnterior();
        setLastNumber(`${number}x`);
        ultimaOperacion.current = Operadores.multiplicar;
    };

    const btnRestar = () => {
        cambiarNumeroPorAnterior();
        setLastNumber(`${number}-`);
        ultimaOperacion.current = Operadores.resta;
    };

    const btnSumar = () => {
        cambiarNumeroPorAnterior();
        setLastNumber(`${number}+`);
        ultimaOperacion.current = Operadores.sumar;
    };

    const calc = () => {

        console.log('lastNumber:' + lastNumber);
        if(lastNumber.length === 1) return;
        
        let numberWithoutSym = lastNumber.slice(0, -1);

        const num1 = Number(number);
        const num2 = Number(numberWithoutSym);

        console.log(num1, num2);
        

        console.log(ultimaOperacion.current);
        
        switch (ultimaOperacion.current) {
            case Operadores.sumar:
                setNumber(`${num1 + num2}`);
                setLastNumber(`${num2} + ${num1}`);
                break;
            case Operadores.resta:
                setNumber(`${num2 - num1}`);
                setLastNumber(`${num2} - ${num1}`);
                break;
            case Operadores.multiplicar:
                setNumber(`${num1 * num2}`);
                setLastNumber(`${num2} * ${num1}`);
                break;
            case Operadores.dividir:
                if (num1 !== 0 && num2 !== 0) {
                    setNumber(`${num2 / num1}`); // * resultado
                    setLastNumber(`${num2} / ${num1}`);
                }

                break;
        }
    };

    // Se puede retornar un objeto literal o un array.
    return {
        lastNumber,
        number,
        clean,
        setNegativeOrPositiveNumber,
        deleteLastNumber,
        btnDividir,
        addNumberOrOperator,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        calc
    }


    //! Se pueden pasar múltiples métodos a travéz de la misma propiedad.
};
