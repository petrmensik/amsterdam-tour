import { Component, OnInit, Input } from '@angular/core';
import { IEstablishment, IMoment } from '@amst/core';

@Component({
  selector: 'amst-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss']
})
export class VenueListComponent implements OnInit {
  @Input() establishments: IEstablishment[];

  filteredEstablishments: IEstablishment[];

  private filteredCities: string[] = [];
  private filteredSubstring = '';

  collectionSize: number;
  page = 1;
  venuesPerPage: number;

  VENUE_COLS: string[] = [
    'title',
    'city',
    'zipcode',
    'adress',
    'start-year',
  ];

  constructor() { }

  ngOnInit(): void {
    this.venuesPerPage = this.getPageSizeFromViewport();
    console.log('can get', this.getPageSizeFromViewport());
  }

  get getEstablishments() {
    return this.filteredEstablishments || this.establishments;
  }

  getStartYear(startDate: IMoment): string {
    return startDate ? startDate.get('year').toString() : '';
  }

  filterDataByString(search: string) {
    this.filteredSubstring = search;
    this.filteredEstablishments = this.getUpdatedView();
  }

  filterDataByCity(cities: string[]) {
    this.filteredCities = cities;
    this.filteredEstablishments = this.getUpdatedView();
  }

  private getUpdatedView(): IEstablishment[] {
    this.page = 1;
    return this.establishments.filter(
      (est: IEstablishment) => this.isCitySelected(est) && this.isSearchMatch(est),
    );
  }

  private isCitySelected(est: IEstablishment): boolean {
    return !this.filteredCities.length || this.filteredCities.includes(est.location?.city);
  }

  private isSearchMatch(est: IEstablishment): boolean {
    return est.quickSearch.includes(this.filteredSubstring);
  }

  private getPageSizeFromViewport(): number {
    return Math.floor((window.innerHeight - 300) / 50) || 1;
  }
}
