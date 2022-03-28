import { TestBed } from '@angular/core/testing';

import { UserCredentialsService } from './user-credentials.service';

describe('UserCredentialsService', () => {
  let service: UserCredentialsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserCredentialsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
