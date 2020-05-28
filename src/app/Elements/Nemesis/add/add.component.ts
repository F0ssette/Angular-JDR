import { Router } from '@angular/router';
import { NemesisService } from './../../../Services/nemesis.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  nemesisForm = new FormGroup({
    name: new FormControl()
  });

  constructor(
    private nemesisService: NemesisService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.nemesisForm.value);

    if (this.nemesisForm.valid) {
      this.nemesisService.addNemesis(this.nemesisForm.value)
        .subscribe(Nemesis => {
          this.router.navigate(['/nemesis']);
        })
    }
  }

}
