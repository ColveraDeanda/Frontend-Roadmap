import { Component, EventEmitter, Input, Output, OnInit, OnDestroy } from '@angular/core';
import { BehaviorSubject, Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searh-box',
  templateUrl: './searh-box.component.html',
  styleUrls: ['./searh-box.component.css']
})
export class SearhBoxComponent implements OnInit, OnDestroy {

  private debouncer = new Subject<string>();

  // Servira para realizar la desuscripcion deel Oservable.
  private debouncerSuscription?: Subscription;

  /* Nota: los metodos de http (get, put, delete...), no es necesario
     desuscribirse, ya que eso lo hace de manera automatica.

     Caualquier otro subject, u observable creado, sera necesario
     desuscribirse para evitar una figa en memoria.*/


  @Input()
  placeholder = '';

  @Input()
  initialValue = '';

  @Output()
  public onDebounce = new EventEmitter<string>();

  constructor(){}


  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
    .pipe(
      debounceTime(500) // El debounceTime funciona como una barrera.
      // Espera a que el tiempo termine y luego emite los valores mas recientes.
      )
      .subscribe(value => {
        this.onDebounce.emit(value);
      })
    }

    //Debounce = Esperar a que el usuario deje de escribir para lanzar
    //           la peticion.

    ngOnDestroy(): void {
      // Es recomendable desuscribirse, a partir de la suscription.
      this.debouncerSuscription?.unsubscribe();
    }

    onKeyPress(searchTerm: string) {
      this.debouncer.next(searchTerm);
  }


}
