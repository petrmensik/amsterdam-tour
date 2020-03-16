import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { httpLoaderFactory } from '@amst/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { MenuComponent } from './components/menu/menu.component';
import { PaginationSlicePipe } from './pipes/pagination-slice/pagination-slice.pipe';

@NgModule({
  declarations: [
    MenuComponent,
    PaginationSlicePipe,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
    NgbModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    RouterModule,
  ],
  exports: [
    FlexLayoutModule,
    MenuComponent,
    FontAwesomeModule,
    TranslateModule,
    NgbModule,
    PaginationSlicePipe,
  ],
})
export class SharedModule { }
