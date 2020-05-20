import { WeaknessTagService } from './../../../Services/weakness-tag.service';
import { WeaknessTag } from './../../../Models/weaknessTag.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  weaknessTags = [];

  constructor(
    private weaknessTagService: WeaknessTagService
  ) { }

  ngOnInit(): void {
    this.getWeaknessTag();
  }

  getWeaknessTag() {
    this.weaknessTagService.getWeaknessTags()
    .subscribe(data => {
      this.weaknessTags = data;
    })
  }

}
