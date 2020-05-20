import { TestBed } from '@angular/core/testing';

import { StoryTagService } from './story-tag.service';

describe('StoryTagService', () => {
  let service: StoryTagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StoryTagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
