import { TestBed } from '@angular/core/testing';

import { DataErrorMessageService } from './data-error-message.service';

describe('DataerrormessageService', () => {
  let service: DataErrorMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataErrorMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
