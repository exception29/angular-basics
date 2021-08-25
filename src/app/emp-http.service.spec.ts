import { TestBed } from '@angular/core/testing';

import { EmpHttpService } from './emp-http.service';

describe('EmpHttpService', () => {
  let service: EmpHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
