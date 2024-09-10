import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchResponse } from '../interfaces/gifs.interface';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  public gifList: Gif[] = [];

  private _tagsHistory: string[] = [];
  private apiKey: string = 'MhGb2wBOy22bVcDZ3VVvubjbFP4nnUP5';
  private serviceUrl: string = 'https://api.giphy.com/v1/gifs'

  constructor(private http: HttpClient) {
    this.loadLocalStorage();
  }

  get tagsHistory() {
    //* Se hace copia para romper con la referencia del arreglo original.
    return [...this._tagsHistory];
  }

  private organizeHistory(tag: string) {
    tag = tag.toLowerCase();

    //* En caso de que se ingrese un elemento que ya existe, se elimina ese elemento.
    if(this._tagsHistory.includes(tag)) {
      this._tagsHistory = this._tagsHistory.filter(oldTag => oldTag !== tag);
    }
    this._tagsHistory.unshift(tag);
    this._tagsHistory = this.tagsHistory.splice(0, 10); //* splice retornara los elementos eliminados.

    this.saveLocalStorage();
  }

  private saveLocalStorage(): void {
    localStorage.setItem('history', JSON.stringify(this._tagsHistory));
  }

  private loadLocalStorage() {
    if(!localStorage.getItem('history')) return;

    this._tagsHistory = JSON.parse(localStorage.getItem('history')!);
    const [firstTagHistory] = this.tagsHistory;
    this.searchTag(firstTagHistory);
  }

  searchTag(tag: string) {
    if(tag.length === 0) return;
    this.organizeHistory(tag);

    const params = new HttpParams()
     .set('api_key', this.apiKey)
     .set('limit', 10)
     .set('q', tag)

     //* params: params, se reemplaza solo con params.
    this.http.get<SearchResponse>(`${this.serviceUrl}/search`, {params})
      .subscribe( resp => {
        this.gifList = resp.data;
      })
  }
}
