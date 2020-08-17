import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../settings.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  lastUpdated = '';
  theme = '';
  constructor(private settingService: SettingsService) {
    this.lastUpdated = this.settingService.getLastUpdated();
    this.theme = this.settingService.getTheme();
  }
  setTheme(theme: string) {
    this.theme = theme;
    this.settingService.setTheme(theme);
  }
  updateData() {
    this.settingService.updateDataOnServer();
  }
  ngOnInit(): void {}
}
