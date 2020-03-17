import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@amst/shared';
import { VenueRouting } from './venue-routing';
import { VenueComponent } from './pages/venue/venue.component';
import { VenueListComponent } from './components/venue-list/venue-list.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { VenueListActionBarComponent } from './components/venue-list-action-bar/venue-list-action-bar.component';
import { VenueDetailModalComponent } from './components/venue-detail-modal/venue-detail-modal.component';

@NgModule({
  declarations: [
    VenueComponent,
    VenueListComponent,
    VenueListActionBarComponent,
    VenueDetailModalComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    VenueRouting,
    NgbModule,
  ],
  entryComponents: [
    VenueDetailModalComponent,
  ],
})
export class VenueModule { }
