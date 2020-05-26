import { StoryTagService } from './../../../Services/story-tag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  storyTags = [];

  constructor(
    private storyTagService: StoryTagService
  ) { }

  ngOnInit(): void {
    this.getStoryTag();
  }

  // Get Story Tag
  getStoryTag() {
    this.storyTagService.getStoryTag()
      .subscribe(data => {
        this.storyTags = data;
      })
  }

  // Delete Story Tag
  deleteStoryTag(id) {
    this.storyTagService.deleteStoryTag(id)
      .subscribe();
    this.storyTags = this.storyTags.filter(element => element.id !== id);
  }

}
