import { Component, OnInit, Input } from '@angular/core';
import { IEstablishment } from '@amst/core';

@Component({
  selector: 'amst-venue-list',
  templateUrl: './venue-list.component.html',
  styleUrls: ['./venue-list.component.scss']
})
export class VenueListComponent implements OnInit {
  @Input() establishments: IEstablishment[];

  collectionSize: number;
  page = 1;
  VENUES_PER_PAGE = 10;

  constructor() { }

  ngOnInit(): void {
    
  }

}
