import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  /* template: `
    <h1>Hello world from inline template</h1>
  `, */
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  /* styles: (inline styles)
    `h1: { color: red; }`
  ] */
})
export class AppComponent {
  title = 'hotel-inventory-app';
}
