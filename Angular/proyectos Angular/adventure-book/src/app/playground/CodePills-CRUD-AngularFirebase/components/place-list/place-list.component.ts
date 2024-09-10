import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import Place from '../../interfaces/place.interface';
import { PlacesService } from '../../services/places.service';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-place-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './place-list.component.html',
  styleUrl: './place-list.component.css'
})
export class PlaceListComponent implements OnInit {

  places: Place[] = [];
  placesService: any = inject(PlacesService);

  constructor(){}

  ngOnInit(): void {
    this.placesService.getPlaces().subscribe((places: Place[]) => {
      this.places = places;
    });
  }

  onClickDelete(place: Place) {
    this.placesService.deletePlace(place);
  }

}
