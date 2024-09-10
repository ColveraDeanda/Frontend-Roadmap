import { Observable, Observer } from 'rxjs';

//* Creacion de mi observer:
const observer: Observer<any> = {
    next: value => console.log('Value: ' + value),
    error: error => console.warn(error),
    complete: () => console.info('Obervable completado desde un observer'),
};

/* En este ejemplo se esta usando un return en el observable para detener
   el intervalo que se esta ejecutando cuando se llame el metodo unsuscribe().
   Usando un return estamos evitando fugas/leaks de memoria.
*/
const intervalo$ = new Observable<number>(subscriber => {
    let count = 0;

    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
        // console.log(count);
    }, 1000);

    setTimeout(() => {
    //! Si se ejecuta completed(), se ejecutara el return. Y el unsuscribe() ya no se toma en cuenta.
        subscriber.complete();
    }, 2500);

    /* El return del observable se ejecutara cuando se ejecute unsubscribe() o 
       igualmente se ejecutara cuando se ejecute complete(). */
    return () => {
        clearInterval(interval);
        console.log('INTERVALO DESTRUIDO');
    }
});

//* Un subscribe retornara una Subscription.
const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

//* Lo siguiente sera de ayuda para encadenar suscripciones a la suscripcion original:
subscription1.add(subscription2);
subscription2.add(subscription3);

//* Unsuscribe servira para cancelar la suscripcion.
setTimeout(() => {
    //* Si ya se completo el observable, no se ejecutara el unsubscribe().
    //* Pero al usar add() cambia un poco por que solo el observable original (1ro) se completara.
    subscription1.unsubscribe(); //! Como use add() limpiara los intervalos simultaneamente.
    console.log('UNSUBSCRIBE COMPLETED')
}, 3000);

/*
Con el codigo anterior, usando add() lo que hara es que todos los observables se estan desuscribiendo,
pero solo el primero va a completar.
*/






