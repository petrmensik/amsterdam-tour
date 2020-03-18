import { ILocation } from './location.interface';

export interface IEvent {
  trcid: string;
  title: string;
  details: IEventDetailMap;
  types: IEventType[];
  location: ILocation;
  urls: string[];
  media: IEventMedium[];
  dates: IEventDates;
  lastupdated: string;
  eigenschappen?: any;
  distanceToVenue?: number;
}

export interface IEventDetail {
  language: string;
  title: string;
  calendarsummary: string;
  shortdescription: string;
  longdescription: string;
}

export interface IEventDetailMap {
  [countryCode: string]: IEventDetail;
}

export interface IEventMedium {
  url: string;
  main: string;
}

export interface IEventDates {
  singles: string[];
  startdate: string;
  enddate: string;
}

interface IEventType {
  type: string;
  catid: string;
}
