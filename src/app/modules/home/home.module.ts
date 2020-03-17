import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HomeRouting } from './home-routing';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    HomeRouting,
  ],
})
export class HomeModule { }
