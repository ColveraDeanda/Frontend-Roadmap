import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-add-dbz-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent {

  // Para pasarle la informacion al componente padre, se tendra que emitir un evento
  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: 'Holas',
    power: 0
  }

  emitCharacter() {
    if (this.character.name.length === 0) { return; }
    this.onNewCharacter.emit(this.character);
    this.character = {name: '', power: 0}
  }



}
