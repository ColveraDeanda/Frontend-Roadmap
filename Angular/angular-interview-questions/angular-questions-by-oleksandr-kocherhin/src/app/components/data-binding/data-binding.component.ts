import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
})
export class DataBindingComponent {

  //* Al cargar el valor inicial se aplica one way data binding
  value = 'Initial Value';
  secondValue = 'Second Value';

  constructor(){}

  //* Al disparar el evento y modificar la variable desde la template,
  //* se aplica two way data binding.
  changeValue(event: Event){
    this.value = (event.target as HTMLInputElement).value;
  }




}
