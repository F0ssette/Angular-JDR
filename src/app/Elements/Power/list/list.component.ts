import { PowerTagService } from './../../../Services/power-tag.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  powerTags = [];

  constructor(
    private powerTagService: PowerTagService
  ) { }

  ngOnInit(): void {
    this.getPowerTag();
  }

  // Get Power Tag
  getPowerTag() {
    this.powerTagService.getPowerTag()
      .subscribe(data => {
        this.powerTags = data;
      })
  }

  // Delete Power Tag
  deletePowerTag(id) {
    this.powerTagService.deletePowerTag(id)
      .subscribe();
    this.powerTags = this.powerTags.filter(element => element.id !== id);
  }

}
