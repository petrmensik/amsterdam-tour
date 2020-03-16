import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@amst/shared';
import { VenueRouting } from './venue-routing';
import { VenueComponent } from './pages/venue/venue.component';
import { VenueListComponent } from './components/venue-list/venue-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [VenueComponent, VenueListComponent],
  imports: [
    CommonModule,
    SharedModule,
    VenueRouting,
    NgbModule,
  ],
})
export class VenueModule { }
