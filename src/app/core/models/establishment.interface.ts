import { ILocation } from './location.interface';

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
  startdate: string;
  enddate: string;
}

interface IType {
  type: string;
  catid: string;
}
