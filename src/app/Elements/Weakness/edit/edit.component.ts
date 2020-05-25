import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { WeaknessTagService } from './../../../Services/weakness-tag.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  weakness;
  id: number;

  weaknessForm: FormGroup;

  constructor(
    private weaknessTagService: WeaknessTagService,
    private router: Router,
    private route: ActivatedRoute,
    private http: HttpClient
  ) {
    this.route.params
    .subscribe(params => this.id = params.id);
  }
  
  ngOnInit(): void {
    this.getWeaknessTagDetail(this.id);

    this.weaknessForm = new FormGroup({
      name: new FormControl()
    });
  }

  // Get the WeaknessTag
  getWeaknessTagDetail(id: number) {
    this.weaknessTagService.getWeaknessTagDetail(id)
    .subscribe( data => {
      this.weaknessForm.patchValue({
        name: data.name
      });
    });
  }

  // Edit the WeaknessTag
  onSubmit() {
    console.log(this.weaknessForm.value);
    this.weaknessTagService.editWeaknessTag(this.weaknessForm.value, this.id)
    .subscribe(WeaknessTag => {
      this.router.navigate(['/weakness']);
    });
    console.log(this.weaknessForm.value);
  }

}
