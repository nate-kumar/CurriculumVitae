import { TestBed } from '@angular/core/testing';

import { DateUtilityService } from './date-utility.service';

describe('DateUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateUtilityService = TestBed.get(DateUtilityService);
    expect(service).toBeTruthy();
  });
});
