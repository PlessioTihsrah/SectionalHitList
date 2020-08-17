import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report-card-expansion',
  templateUrl: './report-card-expansion.component.html',
  styleUrls: ['./report-card-expansion.component.scss'],
})
export class ReportCardExpansionComponent implements OnInit {
  @Input() cgpa: number;
  @Input() cp: [];
  @Input() marks: number;
  @Input() total: number;
  @Input() semester: number;
  @Input() semesterRecord: any;
  datasets = [];
  labels = [];
  constructor() {}

  ngOnInit(): void {
    const data = [];
    const labels = [];
    for (const key in this.semesterRecord) {
      if (this.semesterRecord.hasOwnProperty(key)) {
        const { code, internalMarks, externalMarks } = this.semesterRecord[key];
        labels.push(code);
        data.push(internalMarks + externalMarks);
      }
    }
    this.labels = labels;
    this.datasets = [
      {
        label: 'Marks',
        data,
        backgroundColor: [
          '#488f31',
          '#759a3c',
          '#99a54e',
          '#bab064',
          '#d5bc7e',
          '#edc99a',
          '#e9b180',
          '#e5986b',
          '#e17d5c',
          '#dc5f54',
          '#d43d51',
        ],
      },
    ];
  }
  formatCP() {
    if (this.cp) {
      return this.cp.join(',');
    } else {
      return 'NA';
    }
  }
}
