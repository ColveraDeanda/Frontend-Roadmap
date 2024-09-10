import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'lazy-image',
  templateUrl: './lazy-image.component.html',
})
export class LazyImageComponent implements OnInit {

  public hasLoad: boolean = false;

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  ngOnInit(): void {
    if(!this.url) return;


  }

  // Cuando la imagen cargue, se ejecutara este metodo.
  onLoad() {
    this.hasLoad = true;
  }

}
