import { TestBed } from '@angular/core/testing';

import { OpinionsApiService } from './opinions-api.service';

describe('OpinionsApiService', () => {
  let service: OpinionsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OpinionsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
