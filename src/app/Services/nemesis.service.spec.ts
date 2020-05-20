import { TestBed } from '@angular/core/testing';

import { NemesisService } from './nemesis.service';

describe('NemesisService', () => {
  let service: NemesisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NemesisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
