import { Component, OnInit, Input } from '@angular/core';
import { IEstablishment, EstablishmentService } from '@amst/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { VenueDetailModalComponent } from '../venue-detail-modal/venue-detail-modal.component';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { mergeMap, filter } from 'rxjs/operators';
import { AgmInfoWindow } from '@agm/core';

@Component({
  selector: 'amst-venue-map',
  templateUrl: './venue-map.component.html',
  styleUrls: ['./venue-map.component.scss'],
})
export class VenueMapComponent implements OnInit {
  @Input() establishments: IEstablishment[];

  filteredEstablishments: IEstablishment[];

  private filteredCities: string[] = [];
  private filteredSubstring = '';
  private openedInfo: AgmInfoWindow;

  amstCenter: { lat: number, lng: number, zoom: number } = {
    lat: 52.3667,
    lng: 4.8945,
    zoom: 10,
  };

  constructor(
    private ngbModal: NgbModal,
    private router: Router,
    private activeRouter: ActivatedRoute,
    private establishmentService: EstablishmentService,
  ) { }

  ngOnInit(): void {
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

  filterDataByString(search: string) {
    this.closeInfoWindow();
    this.filteredSubstring = search;
    this.filteredEstablishments = this.getUpdatedView();
  }

  filterDataByCity(cities: string[]) {
    this.closeInfoWindow();
    this.filteredCities = cities;
    this.filteredEstablishments = this.getUpdatedView();
  }

  openDetail(venueId: string) {
    this.navigateToVenue(venueId);
  }
  
  clickedMarker(establishment: IEstablishment, info: AgmInfoWindow) {
    this.closeInfoWindow();
    this.amstCenter.lat = parseFloat(establishment.location.latitude.replace(/,/g, '.'));
    this.amstCenter.lng = parseFloat(establishment.location.longitude.replace(/,/g, '.'));
    this.openedInfo = info;
  }

  closeInfoWindow() {
    if (this.openedInfo) {
      this.openedInfo.close();
      delete this.openedInfo;
    }
  }

  private getUpdatedView(): IEstablishment[] {
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
      ['/', 'venues', 'map'],
      {
        relativeTo: this.activeRouter,
        queryParams: id ? { open: id } : null,
        queryParamsHandling: '',
      });
  }
}
