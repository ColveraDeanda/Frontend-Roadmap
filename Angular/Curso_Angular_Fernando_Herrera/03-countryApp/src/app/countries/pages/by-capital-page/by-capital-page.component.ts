import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  countries: Country[] = [];
  isLoading = false;
  initialValue: string = '';

  constructor(private countryService: CountryService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCapital.countries;
    this.initialValue = this.countryService.cacheStore.byCapital.term;
  }

  searchByCapital(term: string) {

    this.isLoading = true;

    this.countryService.searchCapital(term).subscribe((countries => {
      this.countries = countries;
      this.isLoading = false;
    }))
  }

}
