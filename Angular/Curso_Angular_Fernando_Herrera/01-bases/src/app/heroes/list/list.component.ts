import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  public heroes: string[] = ['Spoderman', 'Thor', 'Ironman', 'Superman', 'Cyborg'];
  public lastHeroRemoved?: string = '';

  removeLastHero() {
    this.lastHeroRemoved = this.heroes.pop();
  }

  reset() {
    this.heroes = ['Spoderman', 'Thor', 'Ironman', 'Superman', 'Cyborg'];
    this.lastHeroRemoved = undefined;
  }
}
