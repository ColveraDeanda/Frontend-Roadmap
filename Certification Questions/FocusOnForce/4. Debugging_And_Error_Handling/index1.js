// Handling Errors: Existen 8 tipos de errores en JS.
/* Errores JS, también llamados exceptions son lanzados en cuanto se encuentra algún problema. Ésto puede
   hacer que la aplicación falle y requiere a proper handling.
   - try catch: Para prevenir errores se usa try catch, en dónde también se puede usar finally.
   - Una excepción genera un Error Object.
   - Se pueden crear custom excepcions usando 'throw' keyboard.
*/

// ! TIPOS DE ERRORES:
//* 1. Error: Representa un runtime error. Puede ser usado para crear custom error.
//* 2. ReferenceError: Variable que aún no ha sido declarada.
//* 3. SyntaxError: Error de sintaxis. (falta de un paréntesis, etc...).
//* 4. TypeError: Este error se produce cuando se intenta realizar una operación en un tipo de dato incorrecto o incompatible.
//* 5. EvalError: Es cuando ocurre un error en la función eval().
//* 6. InternalError: Representa un error interno, por ejemplo recursión excesiva. 
//* 7. RangeError: Representa un error cuando un número sobrepasa un rango válido.
//* 8. URIError: Este error ocurre cuando se utilizan funciones como encodeURI() o decodeURI() con parámetros incorrectos.

// Ejemplo de error de syntaxis:
//console.log(${myVar})

// Ejemplo de ReferenceError:
try {
    console.log(company)
} catch (e) {
    console.log(e)
} finally {
    console.warn('1. Finally executed...');
}

//! Nota: Finally: Se ejecutará siempre el bloque de código finally, se dispare el error o nó.

// Ejemplo de typeError:
//* Será un typeError por que está esperando un object, y se le está pasando un string.
try {
    function getDayOfWeek(date) {
        let days = ['Sun', 'Mon', 'Tue'];
        return days[date.getDay()];
    }
    const theDay = getDayOfWeek('2015-10-10');
} catch (e) {
    console.log(e);
} finally {
    console.warn('2. Finally executed...');
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Ejemplo de try catch anidado:
//* Si fallan varios try, se ejecutarán los respectivos catch.
const scores = [23, 45, 56, 43, 78];
function handleRecording(data) {
    try {
        myObject.recordScores();
    } catch (e) {
        try {
            console.log('1. Ha ocurrido un error');
            recordScores();
        } catch {
            console.log('2. Ha ocurrido otro error');
        }

    }
}
handleRecording(scores);

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* Console API = Provee de métodos para debuggear en consola:
// 1. console.log.
// 2. console.error.
// 3. console.info.
console.log('Console.log');
console.info('Console.info');
console.warn('Console.warn');
console.error('Console.error');

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//* User defined exception. O en otras palabras, lanzando un custom error:
const finalScores = [100, 40, 65, 95, -70, 90];
function checkScoresArray(scores) {
  scores.forEach(function(elem) {
    if (elem === '') {
      throw 'Array contains an empty score.';
    }
    if (isNaN(elem)) {
      throw 'Array contains a score that is not a number.';
    }
    if (elem < 0) {
      throw 'Array contains score that is less than zero.';
    }
  });
}

try {
  checkScoresArray(finalScores);
} catch (e) {
  console.error(e);
}

//* Validando que el error de catch es una instancia de TypeError:
let testFunction;
function invokeFunction(fn) {
    try {
        fn()
    } catch (err) {
        if (err instanceof TypeError) { //* El error es una instancia de TypeError.
            console.log(err);
            console.log(err.message);
            console.log(err.name);
        } else {
            console.log(err);
        }
    }
}
invokeFunction(testFunction);

