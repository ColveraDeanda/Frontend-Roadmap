/**
 * * A developer is testing a function that receives a date object and then returns a date object that is one month earlier. 
 * * it is important that the function returns a date object. when the test is run, it indicates that the function is working 
 * * correctly. however, this is a false negative. if she test using the month of February, the test will fail. what mistake was 
 * * made when writing the test ? 
 */

function getMonthEarlier(date) {
    return new Date(date.setMonth(date.getMonth() === 1 ? 11 : date.getMonth() - 1));
}

//* She has created a unit test in the test file using 'testIt' and 'assert' functions. She tests for a date object and
//* the correct date.

function testIt(desc, func) {
    try {
        func();
        console.info({results: 'Successful!', message: desc});
    } catch(error) {
        console.info({results: 'Failed!', message: desc});
        console.error(err);
    }
}

function assert(isTrue) {
    if(!isTrue) throw new Error();
}

testIt('Return date object one month earlier', function() {
    assert(getMonthEarlier(new Date('October 10, 2020')) instanceof Date);
    assert(getMonthEarlier(new Date('October 10, 2020')).getMonth === 8);
    assert(getMonthEarlier(new Date('February 10, 2020')).getMonth === 0); //! Se testea la condicion faltante.
});

//* R = The test does not include the check for one of the two outcomes of the ternary operator. 
/**
 * * Cuando ocurre un falso negativo quiere decir que el test indica que todo esta bien, pero aun el codigo esta incorrecto.
 * * CUANDO SE HACE EL TEST ES IMPORTANTE TESTEAR TODOS LOS POSIBLES ESCENARIOS QUE PUEDE PASAR EN EL CODIGO. Si no se hace esto
 * * ocurrirá un false negative. 
 */
