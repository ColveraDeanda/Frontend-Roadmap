/**
 * //* SwitchMap cancelará todos los observables anteriores y solo se emitirá el último.
 *
 */

import { delay, from, of, switchMap } from "rxjs";

//* Se usa swichMap para cancelar previos observables y solo emitor el ultimo.
from([0, 1, 2, 3, 4])
  .pipe(
    switchMap((item) => of(item).pipe(delay(500)))
  )
  .subscribe({
      next: (res) => console.log(res),
      error: () => { },
      complete: () => console.log('Completed')
    }
  )






