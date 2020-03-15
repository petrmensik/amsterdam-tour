import { TestBed } from '@angular/core/testing';
import { ErrorHandler } from '@angular/core';

import { LangService } from '../lang/lang.service';
import { NotificationService } from '../notification/notification.service';
import { ErrorHandlerService } from './error-handler.service';
import { of } from 'rxjs';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: ErrorHandler },
        {
          provide: LangService,
          useValue: {
            getInstant: key => `translated_${key}`,
            get: key => of(`translated_${key}`),
          },
        },
        {
          provide: NotificationService,
          useValue: {
            error: notification => true,
          },
        },
      ],
    });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
