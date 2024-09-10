import { Observable } from "rxjs";

//* Cold Observable: El valor que se declara y emite dentro
//* del Observable en si
const coldObservable = new Observable((observer) => {
  observer.next(Math.random());
});

//* Cada suscripcion tendra un valor diferente ya que es Cold Observable
coldObservable.subscribe((res) => console.log(res));
coldObservable.subscribe((res) => console.log(res));


////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////
//* Hot Observable: El valor que se declara fuera del Observable
//* y se emite
const random = Math.random();
const hotObservable = new Observable((observer) => {
  observer.next(random);
});

//* Cada suscripcion sera la misma ya que es un hot Observable.
hotObservable.subscribe((res) => console.log(res));
hotObservable.subscribe((res) => console.log(res));
