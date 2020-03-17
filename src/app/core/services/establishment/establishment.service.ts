import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEstablishment } from '@amst/core';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { compact, get, sortedUniq } from 'lodash';

import { LangService } from '../lang/lang.service';
import { IDetail } from '@amst/core/models/establishment.interface';
import { MomentService } from '../moment/moment.service';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  private readonly ESTABLISHMENTS_JSON = '/assets/data/establishment-data.json';
  private cachedEstablishments: Observable<IEstablishment[]>;

  constructor(
    private http: HttpClient,
    private langService: LangService,
    private momentService: MomentService,
  ) { }

  getAllEstablishments(): Observable<IEstablishment[]> {
    return this.getEstablishmentCall().pipe(
      map((ests: IEstablishment[]) => {
        return ests
          .sort((a: IEstablishment, b: IEstablishment) => a.title.localeCompare(b.title))
          .map((est: IEstablishment) => (
            {
              ...est,
              dates: {
                startMoment: this.momentService.parseDate(est.dates?.startdate),
                endMoment: this.momentService.parseDate(est.dates?.enddate),
              },
              quickSearch: this.buildQuickSearch(est),
            }),
          );
      }),
    );
  }

  getAvailableCities() {
    return this.getEstablishmentCall().pipe(
      map((establishments: IEstablishment[]) => {
        return sortedUniq(establishments
          .filter(ests => !!ests.location?.city)
          .map(est => est.location.city)
          .sort((a: string, b: string) => a.localeCompare(b)),
        );
      }),
    );
  }

  private getEstablishmentCall(): Observable<IEstablishment[]> {
    if (!this.cachedEstablishments) {
      this.cachedEstablishments = this.http.get<IEstablishment[]>(this.ESTABLISHMENTS_JSON).pipe(
        publishReplay(1),
        refCount(),
      );
    }
    return this.cachedEstablishments;
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
