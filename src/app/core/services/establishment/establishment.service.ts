import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEstablishment } from '@amst/core';

@Injectable({
  providedIn: 'root',
})
export class EstablishmentService {
  private readonly ESTABLISHMENTS_JSON = '/assets/data/establishment-data.json';

  constructor(
    private http: HttpClient,
  ) { }

  getAllEstablishments(): Observable<IEstablishment[]> {
    return this.http.get<IEstablishment[]>(this.ESTABLISHMENTS_JSON);
  }
}
