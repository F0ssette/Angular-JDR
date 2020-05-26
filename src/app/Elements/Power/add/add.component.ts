import { Router } from '@angular/router';
import { PowerTagService } from './../../../Services/power-tag.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  powerForm = new FormGroup({
    name: new FormControl()
  });

  constructor(
    private powerTagService: PowerTagService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  onSubmit(): void {
    console.log(this.powerForm.value);

    if(this.powerForm.valid) {
      this.powerTagService.addPowerTag(this.powerForm.value)
      .subscribe(powerTag => {
        this.router.navigate(['/power']);
      })
    }
  }

}
