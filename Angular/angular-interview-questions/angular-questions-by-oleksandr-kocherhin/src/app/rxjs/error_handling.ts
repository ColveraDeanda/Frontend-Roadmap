import { Observable, catchError, map, of } from "rxjs";

export interface UserInterface {
  id: string;
  name: string;
  age: number;
}

//* Para manejar el error en un metodo que retorna un Observable, se puede
//* usar el operador catchError de rxjs

const normalizeUsers = (
  user$: Observable<UserInterface[]>
): Observable<string[]> => {
  return user$
    .pipe(
      map(users => users.map(user => user.name)),
      catchError((err) => { //* Controlamos el error
        console.log('err', err);
        return of([]);
      })
    );
};

const users$ = of([{id: '1', name: 'foo', age: 25}]);

normalizeUsers(users$).subscribe({
  next: (res) => {
    console.log(res);
  },
  error: (err) => { //* Desde la suscripcion, asi de pueden manejar los errores.
    console.error(err); //* Se usa en caso de que no podamos modificar la funcion que esta emitiendo el Observable.
  },
  complete: () => {
    console.log('Complete');
  }
});
