/* Filter sera de ayuda para filtrar nuestro stream y solo obtener
la data en el subscribe si la condicion en filter es true. */

import { Observable, of, filter} from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
  age: number;
  isActive: boolean;
}

const getActiveUsers = (users$: Observable<UserInterface[]>): Observable<UserInterface[]> => {
  return users$
    .pipe(
      filter(users => users.every(user => user.isActive))
    )
}

const users$ = of([{id: '1', name: 'Cristobal', age: 25, isActive: true}])

getActiveUsers(users$).subscribe(activerUsers => {
  console.log(activerUsers);
});

