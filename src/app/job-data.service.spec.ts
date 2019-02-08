import { TestBed } from '@angular/core/testing';

import { JobDataService } from './job-data.service';

describe('JobDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JobDataService = TestBed.get(JobDataService);
    expect(service).toBeTruthy();
  });
});
