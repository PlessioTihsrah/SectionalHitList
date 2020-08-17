import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.scss']
})
export class PlanningComponent implements OnInit {
  predicted = null;
  constructor(private dataStore: DataService) {}
  handleSubmit(values) {
    const data = this.dataStore.getDataByRoll(+values[0]);
    if (data && values[1] > 0 && values[1] <= 100) {
      const { marks, total } = data;
      const len = marks.length;
      let gainedPercentage = 0;
      for (let i = 0; i < len; i++) {
        gainedPercentage += (100 * marks[i]) / total[i] / 8;
      }
      this.predicted = (values[1] - gainedPercentage) * (8 / (8 - len));
    }
  }
  ngOnInit(): void {}
}
