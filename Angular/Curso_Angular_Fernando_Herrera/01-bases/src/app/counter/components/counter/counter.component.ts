import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  styleUrls: ['./counter.component.css'],
  template: `
  <div class="container">
    <hr>
      <h3 class="title">Counter: {{ counter }}</h3>
      <section id="buttons">
        <button (click)="decreaseBy(1)">-1</button>
        <button (click)="reset()">Reset</button>
        <button (click)="increaseBy(1)">+1</button>
      </section>
    <hr>
  </div>
  `
})
export class CounterComponent {

  public counter: number = 0;

  constructor(){}

  increaseBy(value: number) {
    this.counter += value
  }

  decreaseBy(value: number) {
    this.counter -= value;
  }

  reset() {
    this.counter = 0;
  }

}


