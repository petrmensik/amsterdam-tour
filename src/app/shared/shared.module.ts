import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { httpLoaderFactory } from '@amst/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

import { MenuComponent } from './components/menu/menu.component';
import { PaginationSlicePipe } from './pipes/pagination-slice/pagination-slice.pipe';
import { GetYearPipe } from './pipes/get-year/get-year.pipe';
import { DomainOnlyPipe } from './pipes/domain-only/domain-only.pipe';
import { ToNumberPipe } from './pipes/to-number/to-number.pipe';


@NgModule({
  declarations: [
    MenuComponent,
    PaginationSlicePipe,
    GetYearPipe,
    DomainOnlyPipe,
    ToNumberPipe,
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
    AgmCoreModule.forRoot({
      apiKey: '',
    }),
  ],
  exports: [
    FlexLayoutModule,
    MenuComponent,
    FontAwesomeModule,
    TranslateModule,
    NgbModule,
    PaginationSlicePipe,
    GetYearPipe,
    DomainOnlyPipe,
    ToNumberPipe,
    AgmCoreModule,
  ],
})
export class SharedModule { }
