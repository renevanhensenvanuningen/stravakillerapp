import { TestBed } from '@angular/core/testing';

import { StravaserviceService } from './stravaservice.service';

describe('StravaserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StravaserviceService = TestBed.get(StravaserviceService);
    expect(service).toBeTruthy();
  });
});
