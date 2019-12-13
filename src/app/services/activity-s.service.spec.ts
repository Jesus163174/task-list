import { TestBed } from '@angular/core/testing';

import { ActivitySService } from './activity-s.service';

describe('ActivitySService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActivitySService = TestBed.get(ActivitySService);
    expect(service).toBeTruthy();
  });
});
