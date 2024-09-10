import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  public name: string = 'Cristobal';
  public age: number = 25;

  constructor(){}

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero() {
    this.name = 'Spoderman';
  }

  changeAge() {
    this.age = 15;
  }

  resetData() {
    this.name = 'Cristobal';
    this.age = 25;
  }

}
