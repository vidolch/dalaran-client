import { TestBed, inject } from '@angular/core/testing';

import { JsonmockService } from './jsonmock.service';

describe('JsonmockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonmockService]
    });
  });

  it('should be created', inject([JsonmockService], (service: JsonmockService) => {
    expect(service).toBeTruthy();
  }));
});
