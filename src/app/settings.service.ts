import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  lastUpdated;
  theme = JSON.parse(localStorage.getItem('theme')) || 'Automatic';
  constructor(private http: HttpClient) {
    this.applyTheme();
    this.http
      .get('https://sectionalhitlist.firebaseio.com/lastUpdated.json')
      .subscribe((res: string) => (this.lastUpdated = res));
  }

  getLastUpdated() {
    return this.lastUpdated;
  }
  getTheme() {
    return this.theme;
  }
  applyTheme() {
    document.body.classList.remove('light-theme');
    document.body.classList.remove('dark-theme');
    if (this.theme === 'Automatic') {
      const hours = new Date().getHours();
      if (hours < 18 && hours >= 6) {
        document.body.classList.add('light-theme');
      } else {
        document.body.classList.add('dark-theme');
      }
    } else if (this.theme === 'Light') {
      document.body.classList.add('light-theme');
    } else {
      document.body.classList.add('dark-theme');
    }
  }
  setTheme(theme: string) {
    this.theme = theme;
    localStorage.setItem('theme', JSON.stringify(theme));
    this.applyTheme();
  }
  updateDataOnServer() {
    this.http
      .get('https://sectionalhitlist.herokuapp.com/')
      .subscribe((res) => {
        alert('Data will be updated soon. Refresh page after 2 minutes');
        setTimeout(() => {
          window.location.reload()
        }, 2*60*1000)
        }
      )
  }
}
