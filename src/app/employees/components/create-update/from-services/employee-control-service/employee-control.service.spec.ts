import { TestBed } from '@angular/core/testing';

import { EmployeeControlService } from './employee-control.service';

describe('EmployeeControlService', () => {
  let service: EmployeeControlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeControlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
