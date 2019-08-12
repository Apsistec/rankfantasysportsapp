import { TestBed } from '@angular/core/testing';

import { InterceptorService } from './core/services/interceptor.service';

describe('InterceptorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptorService = TestBed.get(InterceptorService);
    expect(service).toBeTruthy();
  });
});
