import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent {

  /* ViewChild es parecido a un querySelector. Sera de ayuda para seleccionar un elemento HTML.
     En este caso, quiero que mi variable sea una referencia directa al input con # txtInputTag*/
  //* ViewChild - Sirve para hacer referencia a un elemento HTML.
  //* ViewChildren - Sirve para hacer referencia a multiples elementos HTML. Regresara un arreglo de elementos.
  @ViewChild('txtInputTag')
  public tagInput!: ElementRef<HTMLInputElement>;

  constructor(private gifsService: GifsService){}

  searchTag() {
    const newTag = this.tagInput.nativeElement.value;
    this.gifsService.searchTag(newTag);

    this.tagInput.nativeElement.value = '';
  }

}
