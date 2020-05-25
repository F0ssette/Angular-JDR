import { WeaknessTagService } from './../../../Services/weakness-tag.service';
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
    this.weaknessTagService.getWeaknessTag()
      .subscribe(data => {
        this.weaknessTags = data;
      })
  }

  // Delete WeaknessTag
  deleteWeaknessTag(id) {
    this.weaknessTagService.deleteWeaknessTag(id)
      .subscribe();
      this.weaknessTags = this.weaknessTags.filter(element => element.id !==id);
  }

}
