import { Router, ActivatedRoute } from '@angular/router';
import { NemesisService } from './../../../Services/nemesis.service';
import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {

  nemesis;
  id: number;

  nemesisForm: FormGroup;

  constructor(
    private nemesisService: NemesisService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit(): void {
    this.getNemesisDetail(this.id);

    this.nemesisForm = new FormGroup({
      name: new FormControl()
    });
  }

  // Get the Nemesis 
  getNemesisDetail(id: number) {
    this.nemesisService.getNemesisDetail(id)
    .subscribe( data => {
      this.nemesisForm.patchValue({
        name: data.name
      });
    });
  }

  // Edit the Nemesis
  onSubmit() {
    console.log(this.nemesisForm.value);
    this.nemesisService.editNemesis(this.nemesisForm.value, this.id)
    .subscribe(Nemesis => {
      this.router.navigate(['/nemesis']);
    });
  }

}
