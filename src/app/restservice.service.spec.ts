import { TestBed, inject } from '@angular/core/testing';

import { RestService } from './restservice.service';

describe('RestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RestService]
    });
  });

  it('should be created', inject([RestService], (service: RestService<any>) => {
    expect(service).toBeTruthy();
  }));
});
