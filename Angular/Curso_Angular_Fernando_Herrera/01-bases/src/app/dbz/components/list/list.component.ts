import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  //* Con Input() le estamos diciendo que este componente puede recibir una property desde el padre.
  @Input() characterList: Character[] = [];

  onDeleteCharacter(id?: string) {
    if(!id) return
    this.onDelete.emit(id);
  }
}
