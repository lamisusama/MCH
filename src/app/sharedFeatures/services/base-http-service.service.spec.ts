import { TestBed } from '@angular/core/testing';

import { BaseHttpServiceService } from './base-http-service.service';

describe('BaseHttpServiceService', () => {
  let service: BaseHttpServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BaseHttpServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
