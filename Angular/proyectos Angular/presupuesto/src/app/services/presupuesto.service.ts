import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {

  presupuesto: number;
  restante: number;
  // ? Para pasar info de un componente hermano a otro hermano, se usa ésta variable que retornará un Observable.
  private gastos$ = new Subject<any>();

  constructor() {
    this.presupuesto = 0;
    this.restante = 0;
  }

  agregarGasto(gasto: any) {
    this.restante = this.restante - gasto.cantidad; // Sirve para hacer la validación en ingresarGasto.
    this.gastos$.next(gasto); // Sirve para pasarle la información de gasto al hermano.
  }

  // ? Los componentes que se suscriban a éste método, éstaran escuchando los cambios costantemente.
  getGastos(): Observable<any> {
    return this.gastos$.asObservable();
  }


}
