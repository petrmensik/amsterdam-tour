import { async, TestBed } from '@angular/core/testing';

import { LangService } from './lang.service';
import { TranslateService } from '@ngx-translate/core';
import { has, get } from 'lodash';
import { of } from 'rxjs';

describe('LangService', () => {
  let translateServiceSpy: any;
  let service: LangService;
  const mockTranslation = {
    translation: {
      key: 'test translation',
    },
  };
  const EXISTING_KEY = 'translation.key';
  const NONEXISTING_KEY = 'translation.missing-key';

  function getMockTranslation(key: string) {
    return has(mockTranslation, key.split('.')) ? get(mockTranslation, key.split('.')) : key;
  }

  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      {
        provide: TranslateService,
        useValue: {
          instant: (key: string) => getMockTranslation(key),
          get: (key: string) => of(getMockTranslation(key)),
        },
      },
    ],
  }));

  beforeEach(() => {
    service = TestBed.inject(LangService);
    translateServiceSpy = TestBed.inject(TranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('get localized string', () => {
    it('should return false for not existing translation', () => {
      expect(service.isTranslationAvailable('translation.not-existing-key')).toBe(false);
    });

    it('should return true for existing translation', () => {
      expect(service.isTranslationAvailable('translation.key')).toBe(true);
    });

    it('should return translated string', () => {
      expect(service.getInstant(EXISTING_KEY)).toBe(mockTranslation.translation.key);
    });

    it('should return key for missing translations', () => {
      expect(service.getInstant(NONEXISTING_KEY)).toBe(NONEXISTING_KEY);
    });
  });

  describe('get localized string asynchronously', () => {
    it('should return translated string', async(() => {
      service.get(EXISTING_KEY).subscribe((data) => {
        expect(data).toBe(mockTranslation.translation.key);
      });
    }));

    it('should return key for missing translations', async(() => {
      service.get(NONEXISTING_KEY).subscribe((data) => {
        expect(data).toBe(NONEXISTING_KEY);
      });
    }));
  });
});
