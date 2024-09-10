import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GastosComponent } from './components/gastos/gastos.component';

// Componentes
import { IngresarPresupuestoComponent } from './components/ingresar-presupuesto/ingresar-presupuesto.component';

const routes: Routes = [
  {path: '', redirectTo: '/ingrearPresupuesto', pathMatch: 'full'},
  {path: 'ingrearPresupuesto', component: IngresarPresupuestoComponent},
  {path: 'gastos', component: GastosComponent},
  {path: '**', redirectTo: '/ingrearPresupuesto', pathMatch: 'full'} // ! Ésta línea debe estar al último
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
