import { NgModule } from '@angular/core';
import { CounterComponent } from './components/counter/counter.component';
/**
 * Se creo counter.module.ts para agrupar y encapsular todos los componentes
 * que esten dentro de la carpeta counter.
 * En este ejemplo como queremos usar CounterComponent afuera del scope
 * de la carpeta counter, entonces se exporta para usarlo en otro lado.
 */

//* En una app Angular en siempre recomendable tener varios modulos
//* (todos los que hagan falta).
@NgModule({
  imports: [],
  exports: [CounterComponent],
  declarations: [CounterComponent],
  providers: [],
})
export class CounterModule { }
