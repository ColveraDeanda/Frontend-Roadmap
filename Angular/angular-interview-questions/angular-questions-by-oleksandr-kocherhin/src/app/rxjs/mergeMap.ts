/**
 * //* Lo que hara mergeMap es que cada item que le pasemos lo convertira en un Observable.
 * //* Despues, todos los inner Observables son aplanados para devolver un solo Observable
 * //* Notas:
 *    //* - No cancela ningun observable en ningun momento.
 *    //* - No espera al observable anterior.
 */

//? mergeMap: Maps each value to an Observable, then flattens all of these inner Observables
//! Es lo mismo que flatMap, solo que flatMap ya esta deprecated.

/** Imagina que tienes un observable que emite valores a lo largo del tiempo, y por cada valor quieres realizar
 *  una operación que también devuelve un observable. MergeMap te permite hacer esto de manera concisa. */

import { delay, from, mergeMap, of } from "rxjs";

from([0, 1, 2, 3, 4])
  .pipe(
    mergeMap((item) => of(item).pipe(delay(500)))
  )
  .subscribe({
      next: (res) => console.log(res),
      error: () => { },
      complete: () => console.log('Completed')
    }
  )
