//* Cuando se ocupe combinar varios streams combineLatest puede ser
//* una opcion.

import { combineLatest, interval, of } from "rxjs";

/* Cuando cualquiera de los observables que se combinan, emite un valor,
   entonces se emitira el ultimo valor emitido de cada uno  de los observables
   en el subscribe */
const foo$ = interval(1000);
const bar$ = of('bar');
const baz$ = of('baz');
combineLatest([foo$, bar$, baz$]).subscribe(([foo, bar, baz]) => {
  console.log('foo', foo);
  console.log('bar', bar);
  console.log('baz', baz);
});

//* Algo a tomar en cuenta es que combineLatest no va a esperar a algun Observable a completar.



//! NOTA IMPORTANTE A RECORDAR:
/**
 * //* The behavior of concatMap, mergeMap, switchMap and exhaustMap is similar in the sense they are all
 * //* "higher order mapping operators".
 *
 * //* We can simply choose the appropriate operator based on the use case:
   //* If we need to do things in sequence while waiting for completion, then "concatMap" is the right choice.
   //* For doing things in parallel, "mergeMap" is the best option.
   //* In case we need cancellation logic, "switchMap" is the way to go.
   //* For ignoring new Observables while the current one is still ongoing, "exhaustMap" does just that
 */

