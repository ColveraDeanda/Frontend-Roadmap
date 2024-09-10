import { fromEvent } from 'rxjs';

//* fromEvent crea un observable que emite eventos del "tarjet" especificado
//* Sintaxis: fromEvent<T>(target: any, eventName: string

const src1$ = fromEvent<PointerEvent>(document, 'click');
const src2$ = fromEvent<KeyboardEvent>(document, 'keyup');

const observer = {
    next: (value) => console.log('next: ', value),
}

// Se desestructura la respuesta del evento:
src1$.subscribe( ({ x, y }) => {
    console.log(x, y);
});

src2$.subscribe( ({ key }) => {
    console.log(key);
});