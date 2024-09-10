import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-listar-gasto',
  templateUrl: './listar-gasto.component.html',
  styleUrls: ['./listar-gasto.component.css']
})
export class ListarGastoComponent implements OnInit, OnDestroy {

  subscription: Subscription;
  presupuesto: number;
  restante: number;
  listGastos: any[] = [];

  constructor(private _presupuestoService: PresupuestoService) {
    this.presupuesto = 0;
    this.restante = 0;

    // ? El subscribe estará escuchando cambios constantemente.
    this.subscription = this._presupuestoService.getGastos().subscribe(data => {
      this.restante = this.restante - data.cantidad;
      this.listGastos.push(data); // data = { nombre="", cantidad=0 }
      console.log(data);
    });
  }

  ngOnInit(): void {
    this.presupuesto = this._presupuestoService.presupuesto;
    this.restante = this._presupuestoService.restante;
  }

  ngOnDestroy(): void {
    console.log('Componente destruido...');
    this.subscription.unsubscribe();
  }


  aplicarColorRestante() {
    if(this.presupuesto / 4 > this.restante) { // > 75%
      return 'alert alert-danger';
    } else if(this.presupuesto / 2 > this.restante) {
      return 'alert alert-warning'; // > 50%
    } else {
      return 'alert alert-secondary';
    }
  }

}
