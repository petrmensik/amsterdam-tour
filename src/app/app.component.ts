import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'amst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly DEF_LOCALE = 'en';

  constructor(
    private translateSetvice: TranslateService,
  ) {
    this.translateSetvice.setDefaultLang(this.DEF_LOCALE);
    moment.locale(this.DEF_LOCALE);
    this.translateSetvice.use(this.DEF_LOCALE);
  }
}
