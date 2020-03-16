import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEstablishment } from '@amst/core';
import { map } from 'rxjs/operators';
import { compact, get } from 'lodash';

import { LangService } from '../lang/lang.service';
import { IDetail } from '@amst/core/models/establishment.interface';
import { MomentService } from '../moment/moment.service';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  private readonly ESTABLISHMENTS_JSON = '/assets/data/establishment-data.json';

  constructor(
    private http: HttpClient,
    private langService: LangService,
    private momentService: MomentService,
  ) { }

  getAllEstablishments(): Observable<IEstablishment[]> {
    return this.http.get<IEstablishment[]>(this.ESTABLISHMENTS_JSON).pipe(
      map((ests: IEstablishment[]) => {
        return ests.map((est: IEstablishment) => (
          {
            ...est,
            dates: {
              startMoment: this.momentService.parseDate(est.dates?.startdate),
              endMoment: this.momentService.parseDate(est.dates?.enddate),
            },
            quickSearch: this.buildQuickSearch(est),
          }));
      }),
    );
  }

  private buildQuickSearch(establishment: IEstablishment) {
    const currentLocale: string = this.langService.getCurrentLocalization();
    const localizedDetails: Partial<IDetail> = get(establishment, ['details', currentLocale], {});
    return compact([
      localizedDetails.title || establishment.title,
      establishment.location?.city,
      establishment.location?.adress,
      this.momentService.parseDate(establishment.dates?.startdate)?.get('year').toString(),
    ]).map(str => typeof(str) === 'string' ? str.toLowerCase() : str).join('\n');
  }
}
