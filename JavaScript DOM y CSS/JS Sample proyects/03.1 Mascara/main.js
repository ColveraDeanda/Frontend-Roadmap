'use strict';

const inputs = Array.from(document.querySelector('.card').children);
inputs.shift();

const formatNumber = '####-####-####-####';
const formatDate = '##/##';
const formatCVV = '###';

let cardNumberArr = [];
let cardDateArr = [];
let cardCVVArr = [];


inputs.forEach(input => {
    input.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') return;
        e.preventDefault();

        let id = e.target.id;

        if (id === 'inputCard') {
            handleInput(formatNumber, e.key, cardNumberArr);
            inputCard.value = cardNumberArr.join('');
        } else if (id === 'inputDate') {
            handleInput(formatDate, e.key, cardDateArr);
            inputDate.value = cardDateArr.join('');
        } else {
            handleInput(formatCVV, e.key, cardCVVArr);
            inputCVV.value = cardCVVArr.join('');
        }
    });
});



function handleInput(format, key, arr) {
    let numbersAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let symbolsAllowed = ['-', '/'];

    // Se elimina un elemento en caso de un backspace
    if (key === 'Backspace' && arr.length > 0) {
        arr.pop();
        return;
    }

    // Se valida si la key está en numbersAllowed y se valida si aún no se ha llegado al max de elem que el arreglo puede tener.
    if (!numbersAllowed.includes(key) || arr.length + 1 > format.length) {
        return;
    }

    arr.push(symbolsAllowed.includes(format[arr.length]) ? format[arr.length] : key);
    // Se busca si en el último elem tiene simbolo, y se agrega la key.
    if(symbolsAllowed.includes(arr[arr.length - 1])) { 
        arr.push(key);
    }
    
}

