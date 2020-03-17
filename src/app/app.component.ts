import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FaIconLibrary, FaConfig } from '@fortawesome/angular-fontawesome';
import { faListAlt, faMap, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import { faBicycle, faSearchLocation, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { MomentService } from '@amst/core';

@Component({
  selector: 'amst-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  private readonly DEF_LOCALE = 'en';

  constructor(
    private translateSetvice: TranslateService,
    private momentService: MomentService,
    private faLibrary: FaIconLibrary,
    private faConfig: FaConfig,
  ) {
    this.faLibrary.addIcons(
      faBicycle,
      faListAlt,
      faGithub,
      faMap,
      faCalendarAlt,
      faSearchLocation,
      faSearch,
    );
    this.faConfig.defaultPrefix = 'far';
    this.faConfig.fixedWidth = true;

    this.translateSetvice.setDefaultLang(this.DEF_LOCALE);
    this.momentService.initLocale(this.DEF_LOCALE);
    this.translateSetvice.use(this.DEF_LOCALE);
  }
}
