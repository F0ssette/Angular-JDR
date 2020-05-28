import { NemesisService } from './../../../Services/nemesis.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  nems = [];

  constructor(
    private nemesisService: NemesisService
  ) { }

  ngOnInit(): void {
    this.getNemesis();
  }

  // Get Nemesis
  getNemesis() {
    this.nemesisService.getNemesis()
    .subscribe(data => {
      this.nems = data;
    })
  }

  // Delete Nemesis
  deleteNemesis(id) {
    this.nemesisService.deleteNemesis(id)
    .subscribe();
    this.nems = this.nems.filter(element => element.id !== id);
  }

}
