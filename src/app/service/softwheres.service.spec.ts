import { TestBed } from '@angular/core/testing';

import { SoftwheresService } from './softwheres.service';

describe('SoftwheresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoftwheresService = TestBed.get(SoftwheresService);
    expect(service).toBeTruthy();
  });
});
