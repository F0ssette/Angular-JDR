import { Router } from '@angular/router';
import { ImprovementService } from './../../../Services/improvement.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  improvementForm = new FormGroup({
    name: new FormControl(),
    details: new FormControl()
  });

  constructor(
    private improvementService: ImprovementService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.improvementForm.value);

    if (this.improvementForm.valid) {
      this.improvementService.addImprovement(this.improvementForm.value)
        .subscribe(Improvement => {
          this.router.navigate(['/improvement']);
        })
    }
  }

}
