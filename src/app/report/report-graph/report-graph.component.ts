import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'app-report-graph',
  templateUrl: './report-graph.component.html',
  styleUrls: ['./report-graph.component.scss']
})
export class ReportGraphComponent implements OnInit {
  @Input() graphData: any;
  constructor() {}

  ngOnInit(): void {}
}
