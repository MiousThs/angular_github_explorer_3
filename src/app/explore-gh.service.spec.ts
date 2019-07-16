import { TestBed } from '@angular/core/testing';

import { ExploreGhService } from './explore-gh.service';

describe('ExploreGhService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExploreGhService = TestBed.get(ExploreGhService);
    expect(service).toBeTruthy();
  });
});
