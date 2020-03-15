import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';
import { FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { faListAlt, faMap } from '@fortawesome/free-regular-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'amst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly DEF_LOCALE = 'en';

  constructor(
    private translateSetvice: TranslateService,
    private faLibrary: FaIconLibrary,
    private faConfig: FaConfig,
  ) {
    this.faLibrary.addIcons(faListAlt, faGithub, faMap);
    this.faConfig.defaultPrefix = 'far';
    this.faConfig.fixedWidth = true;

    this.translateSetvice.setDefaultLang(this.DEF_LOCALE);
    moment.locale(this.DEF_LOCALE);
    this.translateSetvice.use(this.DEF_LOCALE);
  }
}
