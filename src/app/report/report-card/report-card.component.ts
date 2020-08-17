import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-report-card',
  templateUrl: './report-card.component.html',
  styleUrls: ['./report-card.component.scss'],
})
export class ReportCardComponent implements OnInit, OnChanges {
  @Input() data;
  graphData: any;
  constructor() {}
  alternateImage = false;
  ngOnInit(): void {
    this.generateGraphData();
  }
  ngOnChanges() {
    this.generateGraphData();
  }
  getWebpImage() {
    const image =
      this.alternateImage && this.data.id ? this.data.id : this.data.roll;
    return `https://firebasestorage.googleapis.com/v0/b/sectionalhitlist.appspot.com/o/images%2F${image}.webp?alt=media`;
  }
  getJpegImage() {
    const image =
      this.alternateImage && this.data.id ? this.data.id : this.data.roll;
    return `https://firebasestorage.googleapis.com/v0/b/sectionalhitlist.appspot.com/o/images%2F${image}.jpg?alt=media`;
  }
  toggle() {
    this.alternateImage = !this.alternateImage;
  }
  sum(arr: [number]) {
    let total = 0;
    arr.forEach((n) => (total += n));
    return total;
  }
  calculateCP() {
    let cp = [];
    this.data.cp.forEach((c) => {
      if (c) {
        cp = [...cp, ...c];
      }
    });
    return cp;
  }
  generateGraphData() {
    const { marks, cp, total, cgpa } = this.data;
    const labels = [];
    const percentageData = [];
    const cpData = [];
    const cgpaData = [];
    for (let i = 0; i < this.data.marks.length; i++) {
      labels.push('Sem ' + (i + 1));
      percentageData.push((100 * marks[i]) / total[i]);
      cgpaData.push(cgpa[i] * 10);
      cpData.push(cp[i] ? cp[i].length * 1 : 0);
    }
    this.graphData = {
      labels,
      data: [
        { data: percentageData, label: 'Percentage' },
        { data: cpData, label: 'Backlogs' },
        { data: cgpaData, label: 'CGPA (Scaled to 100)' },
      ],
    };
  }
}
