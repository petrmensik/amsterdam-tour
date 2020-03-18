import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { compact, get } from 'lodash';
import {
  IEstablishment,
  LangService,
  IMedium,
  GeoDistService,
  EventService,
  IEvent,
  IGeoCoordinate,
  MomentService,
} from '@amst/core';
import { map, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'amst-venue-detail-modal',
  templateUrl: './venue-detail-modal.component.html',
  styleUrls: ['./venue-detail-modal.component.scss'],
})
export class VenueDetailModalComponent implements OnInit, OnDestroy {
  @Input() venue: IEstablishment;
  venueImages: IMedium[] = [];
  closeEvents: IEvent[];
  closeEventsFiltered: IEvent[];

  private currentLocale: string;
  private readonly IMG_EXT = ['.jpg', '.jpeg', '.png'];
  private searchChanged = new Subject<string>();
  private searchSubscription: Subscription;

  constructor(
    private activeModal: NgbActiveModal,
    private langService: LangService,
    private geoDistService: GeoDistService,
    private eventService: EventService,
    private momentService: MomentService,
  ) { }

  ngOnInit(): void {
    this.currentLocale = this.langService.getCurrentLocalization();
    this.venueImages = (this.venue.media || [])
      .filter(img => this.IMG_EXT.some(ext => img.url.endsWith(ext)))
      .sort((a: IMedium) => a.main ? -1 : 1);

    this.searchSubscription = this.searchChanged.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      map(search => search.toLowerCase()),
    ).subscribe(search => this.updateEvents(search));
  }

  ngOnDestroy() {
    if (!this.searchSubscription.closed) {
      this.searchSubscription.unsubscribe();
    }
  }

  closeModal() {
    this.activeModal.dismiss();
  }

  urlLabel(url: string) {
    const urlName: string = url.replace(/http(s?):\/\//, '');
    return urlName.substring(0, urlName.indexOf('/') === -1 ? urlName.length : urlName.indexOf('/'));
  }

  get fullDescription(): string[] {
    return [
      get(this.venue, ['details', this.currentLocale, 'calendarsummary']),
      get(this.venue, ['details', this.currentLocale, 'shortdescription']),
    ].filter(desc => !!desc);
  }

  get longDescription(): string {
    return get(this.venue, ['details', this.currentLocale, 'longdescription'], '').replace(/h[1-6]>/g, 'h6>');
  }

  tabChange(ev: 'basic' | 'description' | 'events') {
    if (ev === 'events' && !this.closeEvents) {
      const venueCoordinates: IGeoCoordinate = this.geoDistService.getCoordinatesFromLocation(this.venue.location);
      this.eventService.getAllEvents().pipe(
        map((events: IEvent[]) => events.map(event => ({
          ...event,
          distanceToVenue: this.geoDistService.getDistance(
            venueCoordinates,
            this.geoDistService.getCoordinatesFromLocation(event.location),
          ),
        }))),
        map((events: IEvent[]) => {
          return events
            .filter(event => this.isEventClose(event))
            .sort((a, b) => a.distanceToVenue < b.distanceToVenue ? -1 : 1);
        }),
      ).subscribe(
        (events: IEvent[]) => this.closeEvents = events,
      );
    }
  }

  onSearchChange(search: string) {
    this.searchChanged.next(search.toLowerCase());
  }

  get getEvents() {
    return this.closeEventsFiltered || this.closeEvents;
  }

  private isEventClose(event: IEvent): boolean {
    return event.distanceToVenue < 1000;
  }

  private updateEvents(search: string) {
    this.closeEventsFiltered = this.closeEvents.filter(
      (event: IEvent) =>
        !search ||
        event.title.toLowerCase().includes(search) ||
        event.location?.city?.toLowerCase().includes(search) ||
        this.momentService.parseDate(event.dates.startdate)?.get('year').toString().includes(search) ||
        this.momentService.parseDate(event.dates.startdate)?.get('month').toString().includes(search),
    );
  }
}
