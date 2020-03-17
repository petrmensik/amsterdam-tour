import { ILocation } from './location.interface';
import { IMoment } from './moment.interface';

export interface IEstablishment {
  trcid: string;
  title: string;
  details: IDetailMap;
  types: IType[];
  location: ILocation;
  urls: string[];
  media: IMedium[];
  dates?: IDates;
  lastupdated: string;
  eigenschappen?: any;
  quickSearch?: string;
}

export interface IDetail {
  language: string;
  title: string;
  calendarsummary: string;
  shortdescription: string;
  longdescription: string;
}

export interface IDetailMap {
  [countryCode: string]: IDetail;
}

export interface IMedium {
  url: string;
  main: string;
}

export interface IDates {
  startdate?: string;
  enddate?: string;
  startMoment?: IMoment;
  endMoment?: IMoment;
}

interface IType {
  type: string;
  catid: string;
}