import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-showdown-card',
  templateUrl: './showdown-card.component.html',
  styleUrls: ['./showdown-card.component.scss']
})
export class ShowdownCardComponent implements OnInit, OnChanges {
  @Input() user1;
  @Input() user2;
  data = [];
  labels = [];
  term = 'marks';
  constructor() {}
  ngOnChanges() {
    this.generateData(this.term);
  }
  ngOnInit(): void {
    const labels = [];
    for (let i = 0; i < this.user1.marks.length; i++) {
      labels.push(`Sem ${i + 1}`);
    }
    this.labels = labels;
    this.generateData('marks');
  }
  generateData(term: string) {
    this.term = term;
    if (term === 'cp') {
      const user1Data = [];
      const user2Data = [];
      for (let i = 0; i < this.user1.marks.length; i++) {
        user1Data.push(this.user1.cp[i] ? this.user1.cp[i].length : 0);
        user2Data.push(this.user2.cp[i] ? this.user2.cp[i].length : 0);
      }
      this.data = [
        { data: user1Data, label: this.user1.name },
        { data: user2Data, label: this.user2.name }
      ];
    } else {
      this.data = [
        { data: this.user1[term], label: this.user1.name },
        { data: this.user2[term], label: this.user2.name }
      ];
    }
  }
}
