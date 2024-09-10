'use strict';

const inputCard = document.querySelector('#inputCard');
const inputDate = document.querySelector('#inputDate');
const inputCVV = document.querySelector('#inputCVV');

const formatNumber = '####-####-####-####';
const formatDate = '##/##';
const formatCVV = '###';

const current = '';
let cardNumberArr = [];
let cardDateArr = [];
let cardCVVArr = [];

// Card Number
inputCard.addEventListener('keydown', (e) => {
    if(e.key === 'Tab') return;
    e.preventDefault();

    handleInput(formatNumber, e.key, cardNumberArr);
    inputCard.value = cardNumberArr.join('');
});

// Date
inputDate.addEventListener('keydown', (e) => {
    if(e.key === 'Tab') return;
    e.preventDefault();

    handleInput(formatDate, e.key, cardDateArr);
    inputDate.value = cardDateArr.join('');
});

// CVV
inputCVV.addEventListener('keydown', (e) => {
    if(e.key === 'Tab') return;
    e.preventDefault();

    handleInput(formatCVV, e.key, cardCVVArr);
    inputCVV.value = cardCVVArr.join('');
});



function handleInput(format, key, arr) {
    let numbersAllowed = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

    // Se elimina un elemento en caso de un backspace
    if(key === 'Backspace' && arr.length > 0) {
        arr.pop();
        return;
    }
 
    // Se valida si la key está en numbersAllowed y se valida si aún no se ha llegado al max de elem que el arreglo puede tener.
    if(numbersAllowed.includes(key) && arr.length + 1 <= format.length) { 
        let index = arr.length;
        if(format[index] === '-' || format[index] === '/') {
            arr.push(format[index], key);
        } else {
            arr.push(key);
        }
    }
}

