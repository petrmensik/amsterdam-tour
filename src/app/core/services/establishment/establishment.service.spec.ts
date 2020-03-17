import { TestBed } from '@angular/core/testing';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';
import * as moment from 'moment';

import { LangService } from '../lang/lang.service';
import { MomentService } from '../moment/moment.service';

import { EstablishmentService } from './establishment.service';

describe('EstablishmentService', () => {
  let httpMock: HttpTestingController;
  let service: EstablishmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        {
          provide: LangService,
          useValue: {
            getCurrentLocalization: () => 'en',
          },
        },
        {
          provide: MomentService,
          useValue: {
            parseDate: () => moment(),
          },
        },
      ],
    });
  });

  beforeEach(() => {
    service = TestBed.inject(EstablishmentService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
