import { concatMap, delay, from, of } from "rxjs";

/**
 * //* concatMap lo que hace es convertir cada item en un Observable pero
 * //* espera por el observable anterior a completar.
 *
 * //* Para por el 1er item, concatMap lo convierte en obervable y lo emite
 * //* Luego pasa el 2do item, se convierte en Observable y se emite.
 * //* Hace todo este proceso esperando al observable anterior a completar.
 */

//* concatMap espera a que el Observable anterior termine y ejecuta el siguiente.

from([0, 1, 2, 3, 4])
  .pipe(
    concatMap((item) => of(item).pipe(delay(500)))
  )
  .subscribe({
      next: (res) => console.log(res),
      error: () => { },
      complete: () => console.log('Completed')
    }
  )

  //* Ejemplo de uso:
  /* Supongamos que tenemos una peticion http y tenemos que esperar a esa response
     para poder ejecutar otra llamada http. Seria un escenario para usar concatMap. */

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

of({ id: '1', name: 'Cristobal' }, { id: '2', name: 'Juan' })
      .pipe(
        concatMap((user) => of(user).pipe(delay(3000)))
      )
      .subscribe({
        next: (res) => console.log(res),
        error: () => { },
        complete: () => console.log('Complete')
      })
