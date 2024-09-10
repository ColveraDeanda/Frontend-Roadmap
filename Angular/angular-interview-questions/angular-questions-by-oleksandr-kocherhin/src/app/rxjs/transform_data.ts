//* How to transform data in RxJS?

import { Observable, map} from "rxjs";

/* Q1: You get such UserInterface. Define a function normalizeUsers which
gets a parameter users$ which is an observable of UserInterface array
and returns back an array of names as an observable. */
export interface UserInterface {
  id: string;
  name: string;
  age: number
}

const normalizeUsers = (
  users$: Observable<UserInterface[]>
  ): Observable<string[]> => {
    return users$.pipe(
      map(users => users.map(user => user.name))
  )
}

//* Map en rxjs => Se manipula el stream, el cual va en el parametro.

//* map en js => Se mapean o acceden a cada uno de los elementos de un array.
//* y devuelve un nuevo array.
