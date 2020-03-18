import { TestBed } from '@angular/core/testing';

import { GeoDistService } from './geo-dist.service';

describe('GeoDistService', () => {
  let service: GeoDistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoDistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
