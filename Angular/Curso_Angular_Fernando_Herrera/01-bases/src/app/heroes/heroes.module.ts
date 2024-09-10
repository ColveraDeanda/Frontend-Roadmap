import { NgModule } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  imports: [CommonModule],
  exports: [HeroComponent, ListComponent], //* Se puede exportar todo lo que sea necesario.
  declarations: [HeroComponent, ListComponent],
  providers: [],
})
export class HeroesModule { }
