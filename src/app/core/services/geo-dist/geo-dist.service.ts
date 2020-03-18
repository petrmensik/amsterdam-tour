import { Injectable } from '@angular/core';
import * as geodist from 'geodist';
import { IGeoCoordinate } from '@amst/core';
import { ILocation } from '@amst/core/models/location.interface';

@Injectable({
  providedIn: 'root',
})
export class GeoDistService {

  constructor() { }

  getCoordinatesFromLocation(loc: ILocation): IGeoCoordinate {
    return {
      lat: parseFloat(loc.latitude.replace(/,/g, '.')),
      lon: parseFloat(loc.longitude.replace(/,/g, '.')),
    };
  }

  getDistance(start: IGeoCoordinate, end: IGeoCoordinate): number {
    return geodist(start, end, { unit: 'meters' });
  }
}
