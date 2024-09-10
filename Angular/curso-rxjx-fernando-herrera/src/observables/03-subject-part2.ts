import { Observable, Observer, Subject } from 'rxjs';

//* Creacion de mi observer:
const observer: Observer<any> = {
    next: value => console.log('Value: ' + value),
    error: error => console.warn(error),
    complete: () => console.info('Obervable completado desde un observer'),
};

const interval$ = new Observable<number>(suscriber => {

    const intervalID = setInterval(() => {
        suscriber.next(Math.random());
    }, 1000)

    return () => {
        clearInterval(intervalID);
        console.log('Observable Completado')
    }
});

//? Caracteristicas del Subject:
/**  Un Subject es un tipo especial de Observable / Observer.
 * - Casteo multiple: Se refiere a que muchas suscripciones van a estar sujetas 
 *   a este mismo Subject y servira para distribuir la misma informacion a todos
 *   los lugares en los que se esten suscritos.
 * - Tambien es un Observer. Esto servira para mandarlo como argumento al subscribe.
 * - Tambien se pueden manejar next, error y complete. 
 */
const subject$ = new Subject();
const subscription = interval$.subscribe(subject$); //* Le estamos diciendo que las emisiones de este obervable esten sujetas 
                                                    //* al subject.

//! La data emitida sera la misma gracias al Subject.
subject$.subscribe(observer);
subject$.subscribe(observer);

//* Modificando el flujo de datos del observable FUERA del observable.
/* En este ejemplo, el Subject nos esta permitiendo transformar un COLD
   Observable en un HOT Observable. */
setTimeout(() => {
    subject$.next(10);
    subject$.complete(); // Aun con este linea, no se esta ejecutando el return del Observable.
    subscription.unsubscribe(); //* Solo asi se ejecutara el return del Observable 
                                //* para evitar memory leaks.
}, 3500);

///////////////////////////////////////////////////////////////////////////////////////
//? IMPORTANTE:
//* COLD Observable:
/** Cuando la data es producida por el Observable en si mismo, se le llama
 *  Cold Obserbable. 
 */

//* HOT Observable:
/** Pero cuando la data es producida FUERA del Observable, es llamado:
 *  HOT Observable.
 */