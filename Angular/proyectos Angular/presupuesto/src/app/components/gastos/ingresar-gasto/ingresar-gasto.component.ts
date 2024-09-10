import { Component, OnInit } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent implements OnInit {

  nombreGasto: string;
  cantidad: number;
  formularioIncorrecto: boolean;
  textIncorrecto: string;


  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formularioIncorrecto = false;
    this.textIncorrecto = '';
  }

  ngOnInit(): void {

  }

  agregarGasto() {

    if(this._presupuestoService.restante === 0) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Se ha terminado todo el presupuesto. Da amsiedad :(..';
      return;
    }

    if(this.cantidad > this._presupuestoService.restante) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Cantidad ingresada es mayor que el restante';
      return;
    }

    if(this.nombreGasto === '' || this.cantidad <= 0) {
      this.formularioIncorrecto = true;
      this.textIncorrecto = 'Nombre gasto o cantidad incorrecta';
    } else {
      // Creación de objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      };

      // Enviamos el objeto a los suscriptores vía subject.
      this._presupuestoService.agregarGasto(GASTO);

      this.formularioIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }



  }

}
