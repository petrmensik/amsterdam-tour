import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@amst/shared';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRouting } from './home-routing';

@NgModule({
  declarations: [
    HomePageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    HomeRouting,
  ],
})
export class HomeModule { }
