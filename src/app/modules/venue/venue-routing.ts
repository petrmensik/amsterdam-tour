import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VenueComponent } from './pages/venue/venue.component';
import { MapComponent } from './pages/map/map.component';

const routes: Routes = [
  { path: 'list', component: VenueComponent },
  { path: 'map', component: MapComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VenueRouting { }
