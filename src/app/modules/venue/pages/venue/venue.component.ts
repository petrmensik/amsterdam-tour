import { Component, OnInit } from '@angular/core';
import { EstablishmentService, IEstablishment } from '@amst/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'amst-venue',
  templateUrl: './venue.component.html',
  styleUrls: ['./venue.component.scss'],
})
export class VenueComponent implements OnInit {

  establishments$: Observable<IEstablishment[]>;

  constructor(
    private establishmentService: EstablishmentService,
  ) { }

  ngOnInit(): void {
    this.establishments$ = this.establishmentService.getAllEstablishments();
  }

}
