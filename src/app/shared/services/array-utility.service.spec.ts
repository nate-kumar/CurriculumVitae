import { TestBed } from '@angular/core/testing';

import { ArrayUtilityService } from './array-utility.service';

describe('ArrayUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArrayUtilityService = TestBed.get(ArrayUtilityService);
    expect(service).toBeTruthy();
  });
});
