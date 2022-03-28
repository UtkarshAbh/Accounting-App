import { TestBed } from '@angular/core/testing';

import { RoleGuestGuard } from './role-guest.guard';

describe('RoleGuestGuard', () => {
  let guard: RoleGuestGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RoleGuestGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
