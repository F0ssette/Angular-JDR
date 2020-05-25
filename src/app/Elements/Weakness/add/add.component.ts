import { WeaknessTag } from './../../../Models/weaknessTag.model';
import { WeaknessTagService } from './../../../Services/weakness-tag.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-weakness',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  weaknessForm = new FormGroup({
    name: new FormControl()
  });

  constructor(
    private weaknessService: WeaknessTagService,
    private router: Router) { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.log(this.weaknessForm.value);

    if (this.weaknessForm.valid) {
      this.weaknessService.addWeaknessTag(this.weaknessForm.value)
        .subscribe(WeaknessTag => {
          this.router.navigate(['/weakness']);
        })
    }
  }

}
