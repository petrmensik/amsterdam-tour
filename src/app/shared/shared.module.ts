import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';``

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  exports: [
    FlexLayoutModule,
    MenuComponent,
    FontAwesomeModule,
  ],
})
export class SharedModule { }
