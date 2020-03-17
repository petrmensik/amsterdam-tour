import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './pages/venue/venue.component';

const routes: Routes = [
  { path: '', component: VenueComponent },
  { path: ':venueId', component: VenueComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenueRouting { }
