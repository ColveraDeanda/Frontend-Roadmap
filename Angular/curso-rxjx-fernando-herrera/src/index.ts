import { interval, timer } from 'rxjs';

//* El interval sera async por defecto.
//* Una vez que pase el intervalo que le definimos. Empezara a emitir valores
//* a partir del numero 0.
//* Una vez que empieza a emitir data, sera de manera infinita.

/**
 * En el caso de timer lo que hace es realizar una emision en el tiempo
 * especificado e inmediatamente se completa.
 */

const observer = {
    next: value => console.log('Next: ', value),
    complete: () => console.log('COMPLETED')
}

const interval$ = interval(2000);
const timer$ = timer(2000);

// interval$.subscribe(observer);
timer$.subscribe(observer);



