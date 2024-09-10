import {of} from 'rxjs';

//* of: Convertira una secuencia de valores en un observable.
//* Los valores pueden ser de cualquier tipo de dato.
// const obs$ = of<number[]>(1,2,3,4,5,6);
// const obs$ = of<number[]>(...[1,2,3,4,5],6,7);
const obs$ = of<any>([1,2], {a: 1, b: 2}, function(){}, true);

obs$.subscribe(
    next => console.log('value: ' + next),
    null,
    () => console.log('Completado')
);


