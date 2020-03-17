import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from '@amst/core';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly EVENTS_JSON = '/assets/data/events-data.json';

  constructor(
    private http: HttpClient,
  ) { }

  getAllEstablishments(): Observable<IEvent[]> {
    return this.http.get<IEvent[]>(this.EVENTS_JSON);
  }
}
