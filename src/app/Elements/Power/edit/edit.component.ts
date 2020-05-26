import { Router, ActivatedRoute } from '@angular/router';
import { PowerTagService } from './../../../Services/power-tag.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  power;
  id: number;

  powerForm: FormGroup;

  constructor(
    private powerTagService: PowerTagService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getPowerTagDetail(this.id);

    this.powerForm = new FormGroup({
      name: new FormControl()
    });
  }

  // Get the Power Tag
  getPowerTagDetail(id: number) {
    this.powerTagService.getPowerTagDetail(id)
    .subscribe( data => {
      this.powerForm.patchValue({
        name: data.name
      });
    });
  }

  // Edit the Power Tag
  onSubmit() {
    console.log(this.powerForm.value);
    this.powerTagService.editPowerTag(this.powerForm.value, this.id)
    .subscribe(PowerTag => {
      this.router.navigate(['/power']);
    });
    console.log(this.powerForm.value);
  }

}
