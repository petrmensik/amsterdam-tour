import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root',
})
export class MomentService {
  private readonly DEF_FORMAT = 'DD-MM-YYYY';

  constructor() { }

  initLocale(locale: string): void {
    moment.locale(locale);
  }

  parseDate = (date: string, customFormat?: string): moment.Moment => !date ?
    null : moment(date, customFormat || this.DEF_FORMAT)
}
