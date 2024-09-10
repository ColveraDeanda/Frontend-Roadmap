/**
 * //* Subjet y BehaviorSubject son tipos especiales de Observables
 * //* Ya que no solo podemos suscribirnos y obtener la data, sino que
 * //* tambien podemos emitir data utilizando next()
 */

import { BehaviorSubject, Subject } from "rxjs";

//! La principal diferencia es que con subjectBehavior podemos asignar un valor inicial.

export interface UserInterface {
  id: string;
  name: string;
}

const user$ = new BehaviorSubject<UserInterface[]>([]);
const subject$ = new Subject<number>();

setTimeout(() => {
  user$.next([{id: '1', name: 'Cristobal'}]);
  subject$.next(1);
}, 2000);

//? Podemos usar .getValue() para obtener el valor actual del Obervable.
user$.subscribe((res) => console.log(res, user$.getValue()));

subject$.subscribe((res) => console.log(res));
