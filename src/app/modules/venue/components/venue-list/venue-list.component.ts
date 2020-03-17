import { Component, OnInit, Input } from '@angular/core';
import { IEstablishment, IMoment, EstablishmentService } from '@amst/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VenueDetailModalComponent } from '../venue-detail-modal/venue-detail-modal.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { mergeMap, filter } from 'rxjs/operators';

@Component({
  selector: 'amst-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss'],
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

  constructor(
    private ngbModal: NgbModal,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private establishmentService: EstablishmentService,
  ) { }

  ngOnInit(): void {
    this.venuesPerPage = this.getPageSizeFromViewport();

    this.activeRouter.queryParams.pipe(
      filter((params: Params) => !!params.open),
      mergeMap((param: Params) => this.establishmentService.getEstablishmentById(param.open)),
    ).subscribe(
      est => this.openModalWithVenue(est),
    );
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

  openDetail(venueId: string) {
    this.navigateToVenue(venueId);
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

  private openModalWithVenue(venue: IEstablishment) {
    if (venue) {
      const modRef: NgbModalRef = this.ngbModal.open(VenueDetailModalComponent);
      modRef.componentInstance.venue = venue;
      modRef.result.then(
        () => this.navigateToVenue(),
        () => this.navigateToVenue(),
      );
    }
  }

  private navigateToVenue(id?: string) {
    this.router.navigate(
      ['/', 'venue'],
      {
        relativeTo: this.activeRouter,
        queryParams: id ? { open: id } : null,
        queryParamsHandling: '',
      });
  }
}
