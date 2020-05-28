import { Router, ActivatedRoute } from '@angular/router';
import { ImprovementService } from './../../../Services/improvement.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  improvement;
  id: number;

  improvementForm: FormGroup;

  constructor(
    private improvementService: ImprovementService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getImprovementDetail(this.id);

    this.improvementForm = new FormGroup({
      name: new FormControl(),
      details: new FormControl()
    });
  }

  // Get the Improvement 
  getImprovementDetail(id: number) {
    this.improvementService.getImprovementDetail(id)
    .subscribe( data => {
      this.improvementForm.patchValue({
        name: data.name,
        details: data.details
      });
    });
  }

  // Edit the Improvement
  onSubmit() {
    console.log(this.improvementForm.value);
    this.improvementService.editImprovement(this.improvementForm.value, this.id)
    .subscribe(Improvement => {
      this.router.navigate(['/improvement']);
    });
  }

}
