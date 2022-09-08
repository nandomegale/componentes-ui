import { TestBed } from '@angular/core/testing';

import { MinhaLibService } from './minha-lib.service';

describe('MinhaLibService', () => {
  let service: MinhaLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinhaLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
