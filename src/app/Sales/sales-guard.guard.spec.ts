import { TestBed } from '@angular/core/testing';

import { SalesGuardGuard } from './sales-guard.guard';

describe('SalesGuardGuard', () => {
  let guard: SalesGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(SalesGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
