import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { SettingsService } from './settings.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  data: any;
  constructor(
    private dataService: DataService,
    private setting: SettingsService
  ) {
    this.dataService.fetchData();
  }
  ngOnInit() {
    this.data = !!this.dataService.verifyData();
    this.dataService.listenToChange().subscribe((res) => {
      this.data = res;
    });
  }
}
