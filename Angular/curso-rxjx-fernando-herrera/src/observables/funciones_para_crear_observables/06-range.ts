import { asyncScheduler, observeOn, range } from 'rxjs';

//* Por defecto, el inicio del range es 0. 
//* El 2do parametro definira el numero de emisiones que se haran, a partir del 1er parametro.

//* Por defecto, el comportamiento es sincrono. Cambiaria a async si se usa asyncScheduler.
const obs1$ = range(5) // Emisiones del 0 - 4. (sync)
const obs2$ = range(5, 10).pipe(observeOn(asyncScheduler)) // Emisiones del 5 - 14 (async).

console.log('INICIO 1er Observable');
obs1$.subscribe(console.log);
console.log('FIN');

console.log('INICIO 2do Observable');
obs2$.subscribe(console.log);
console.log('FIN');
