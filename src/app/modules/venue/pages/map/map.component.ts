import { Component, OnInit } from '@angular/core';
import { EstablishmentService, IEstablishment } from '@amst/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'amst-map',
  templateUrl: './map.component.html',
})
export class MapComponent implements OnInit {

  establishments$: Observable<IEstablishment[]>;

  constructor(
    private establishmentService: EstablishmentService,
  ) { }
  
  ngOnInit(): void {
    this.establishments$ = this.establishmentService.getAllEstablishments();
  }

}
