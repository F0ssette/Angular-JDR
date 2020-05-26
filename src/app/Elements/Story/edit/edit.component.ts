import { Router, ActivatedRoute } from '@angular/router';
import { StoryTagService } from './../../../Services/story-tag.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  story;
  id: number;

  storyForm: FormGroup;

  constructor(
    private storyTagService: StoryTagService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getStoryTagDetail(this.id);

    this.storyForm = new FormGroup({
      name: new FormControl()
    });
  }

  // Get the Story Tag
  getStoryTagDetail(id: number) {
    this.storyTagService.getStoryTagDetail(id)
    .subscribe( data => {
      this.storyForm.patchValue({
        name: data.name
      });
    });
  }

  // Edit the Story Tag
  onSubmit() {
    console.log(this.storyForm.value);
    this.storyTagService.editStoryTag(this.storyForm.value, this.id)
    .subscribe(StoryTag => {
      this.router.navigate(['/story']);
    });
    console.log(this.storyForm.value);
  }

}
