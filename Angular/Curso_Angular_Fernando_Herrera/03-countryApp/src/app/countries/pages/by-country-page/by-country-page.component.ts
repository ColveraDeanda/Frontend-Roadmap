import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  countries: Country[] = [];
  isLoading = false;
  initialValue = '';

  constructor(private countryService: CountryService){}

  ngOnInit(): void {
    this.countries = this.countryService.cacheStore.byCountries.countries;
    this.initialValue = this.countryService.cacheStore.byCountries.term;
  }



  searchByCountry(term: string) {
    this.isLoading = true;
    this.countryService.searchCountry(term).subscribe((countries) => {
      this.countries = countries;
      this.isLoading = false;
    })
  }

}