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
    }, 3000)

    return () => {
        clearInterval(intervalID);
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
interval$.subscribe(subject$); //* Le estamos diciendo que las emisiones de este obervable esten sujetas 
                               //* al subject.

//! La data emitida sera la misma gracias al Subject.
subject$.subscribe(random => console.log('subscribe 1: ' + random));
subject$.subscribe(random => console.log('subscribe 2: ' + random));


//* Ejemplo de uso del Subject en Angular:
/**
 * Utilizo mucho el Subject con Angular para suscribir diferentes componentes y que estén 
 * atentos a el valor emitido. Por ejemplo, tengo un navbar, un sidebar y breadcrumbs y 
 * cada componente necesita estar pendientes del mismo valor para cambiar sus propiedades.
 */