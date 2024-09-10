import { Observable, Observer } from 'rxjs';

//* Creacion de un obervable:
/**
 * - Se usa new Obervable para crear un observable. 
 * - El parametro del obervable es subscriber sirve para emitir la data
   cuando se realice una suscripcion.
   - En otras palabras, el parametro subscriber va a notificar a las
   suscripciones de las emisiones.
   - <string>: Le estamos diciendo que el flujo de informacion del Observable sera string. Tipo de dato string.
 */
const obs$ = new Observable<string>(subscriber => {
    subscriber.next('Hola'); // next va a emitir la data a las suscripciones.
    subscriber.next('Mundo');

    // Forzar error
    // const a = undefined;
    // a.name = 'Cristobal'; // Marcara error ya que a esta undefined.

    subscriber.complete(); // Le estamos diciendo que nuestro Observable a completado sus emisiones.

    subscriber.next('Otro value'); // Como ya se completo el observable, ya no emitira mas informacion.
});

//* Se realiza la suscripcion al obervable.
// obs$.subscribe(resp => console.log(resp));

//* La siguiente linea haria lo mismo:
// obs$.subscribe(console.log);

//* Creacion de mi observer:
const observer: Observer<any> = {
    next: value => console.log(value),
    error: error => console.warn(error),
    complete: () => console.info('Obervable completado desde un observer'),
};

//! Existen diferentes maneras de usar los parametros de un subscribe.
/* Pasandole 3 callbacks a un subscribe ya esta deprecated. En vez de eso,
   se le puede pasar un observer: */
//* La funcion subscribe tiene 3 callbacks como parametro:
obs$.subscribe(
    value => console.log('Value: ' + value), // emisiones del observable.
    error => console.warn(error), // erroes del observable.
    () => console.log('Obervable completado...') // Se ejecuta cuando se completa el obervable
);

//* Usando subscribe pasandole un observer:
obs$.subscribe(observer);








