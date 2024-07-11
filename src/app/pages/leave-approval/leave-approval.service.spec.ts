import { TestBed } from '@angular/core/testing';

import { LeaveApplicationService } from './leave-approval.service';

describe('LeaveApprovalService', () => {
  let service: LeaveApplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LeaveApplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
