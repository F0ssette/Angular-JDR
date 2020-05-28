import { ImprovementService } from './../../../Services/improvement.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  improvements = [];

  constructor(
    private improvementService: ImprovementService
  ) { }

  ngOnInit(): void {
    this.getImprovement();
  }

  // Get Improvement
  getImprovement() {
    this.improvementService.getImprovement()
      .subscribe(data => {
        this.improvements = data;
      })
  }

  // Delete Improvement
  deleteImprovement(id) {
    this.improvementService.deleteImprovement(id)
      .subscribe();
    this.improvements = this.improvements.filter(element => element.id !== id);
  }

}
