import { Router } from '@angular/router';
import { StoryTagService } from './../../../Services/story-tag.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  storyForm = new FormGroup({
    name: new FormControl()
  });

  constructor(
    private storyTagService: StoryTagService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.log(this.storyForm.value);

    if(this.storyForm.valid) {
      this.storyTagService.addStoryTag(this.storyForm.value)
      .subscribe(storyTag => {
        this.router.navigate(['/story']);
      })
    }
  }

}
