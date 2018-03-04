import { TestBed, inject } from '@angular/core/testing';

import { ResponseHandler } from './response-handler.service';

describe('ResponseHandler.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ResponseHandler]
    });
  });

  it('should be created', inject([ResponseHandler], (service: ResponseHandler) => {
    expect(service).toBeTruthy();
  }));
});
