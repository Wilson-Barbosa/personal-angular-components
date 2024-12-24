import { TestBed } from '@angular/core/testing';

import { AngularProgressBarService } from './angular-progress-bar.service';

describe('AngularProgressBarService', () => {
  let service: AngularProgressBarService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AngularProgressBarService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
