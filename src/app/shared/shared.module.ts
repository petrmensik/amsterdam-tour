import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { httpLoaderFactory } from '@amst/core';
import { RouterModule } from '@angular/router';

import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FontAwesomeModule,
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
  ],
})
export class SharedModule { }
