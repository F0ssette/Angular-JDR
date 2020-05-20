import { TestBed } from '@angular/core/testing';

import { WeaknessTagService } from './weakness-tag.service';

describe('WeaknessTagService', () => {
  let service: WeaknessTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WeaknessTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
