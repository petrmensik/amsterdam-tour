import { Component, OnInit, ViewChild, ElementRef, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { EstablishmentService } from '@amst/core';

@Component({
  selector: 'amst-venue-list-action-bar',
  templateUrl: './venue-list-action-bar.component.html',
  styleUrls: ['./venue-list-action-bar.component.scss']
})
export class VenueListActionBarComponent implements OnInit, OnDestroy {
  @Output() filterData: EventEmitter<string> = new EventEmitter();
  @Output() filterCities: EventEmitter<string[]> = new EventEmitter();

  @ViewChild('cityInput') cityInputEl: ElementRef;
  @ViewChild('search') searchEl: ElementRef;

  private searchChanged = new Subject<string>();
  private searchSubscription: Subscription;

  private availableCities: string[] = [];
  selectedCities: string[] = [];

  constructor(
    private establishmentService: EstablishmentService,
  ) { }

  ngOnInit(): void {
    this.establishmentService.getAvailableCities().subscribe(
      cities => this.availableCities = cities,
    );

    this.searchSubscription = this.searchChanged.pipe(
      debounceTime(250),
      distinctUntilChanged(),
      map(search => search.toLowerCase()),
    ).subscribe(search => this.filterData.emit(search));
  }

  ngOnDestroy() {
    if (!this.searchSubscription.closed) {
      this.searchSubscription.unsubscribe();
    }
  }

  citySearch = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term: string) => {
        return !term ?
          [] :
          this.availableCities.filter(
            city => this.selectedCities.indexOf(city) === -1 && city.toLowerCase().includes(term.toLowerCase()),
          ).slice(0, 10);
      }),
    )

  onSearchChange(search: string) {
    this.searchChanged.next(search);
  }

  close(item: string) {
    this.selectedCities.splice(this.selectedCities.indexOf(item), 1);
    this.cityInputEl.nativeElement.focus();
    this.emitNewCities(this.selectedCities);
  }

  select($ev: { preventDefault: () => void, item: string }) {
    $ev.preventDefault();
    this.selectedCities.push($ev.item);
    this.cityInputEl.nativeElement.value = '';
    this.emitNewCities(this.selectedCities);
  }

  private emitNewCities(cities: string[]) {
    this.filterCities.emit(cities);
  }
}
