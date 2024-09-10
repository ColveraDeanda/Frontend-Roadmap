import { Component } from '@angular/core';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent {

  roomName: string = 'Cristobal Room 01';
  roomsAvailable: number = 10

  // Styles
  colorBlue: string = 'blue';
  fontWeight: string = 'bold';
  colorViolet: string = 'color: blueviolet;'

  getFontSize() {
    return 'setFontSize';
  }

}
