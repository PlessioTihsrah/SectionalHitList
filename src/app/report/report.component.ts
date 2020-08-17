import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  data: any = null;
  constructor(
    private dataService: DataService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(query => {
      if (query.roll) {
        this.handleSubmit(query.roll);
      }
    });
  }
  handleSubmit(roll: string) {
    this.dataService.getFullData(+roll).subscribe(data => this.data = data);
  }
}
