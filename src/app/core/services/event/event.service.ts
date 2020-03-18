import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEvent } from '@amst/core';
import { map, publishReplay, refCount } from 'rxjs/operators';
import { compact, get, sortedUniq } from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private readonly EVENTS_JSON = '/assets/data/events-data.json';
  private cachedEvents: Observable<IEvent[]>;

  constructor(
    private http: HttpClient,
  ) { }

  getAllEvents(): Observable<IEvent[]> {
    return this.getEventCall();
  }

  private getEventCall(): Observable<IEvent[]> {
    if (!this.cachedEvents) {
      this.cachedEvents = this.http.get<IEvent[]>(this.EVENTS_JSON).pipe(
        publishReplay(1),
        refCount(),
      );
    }
    return this.cachedEvents;
  }
}
