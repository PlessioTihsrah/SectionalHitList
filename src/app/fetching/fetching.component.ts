import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-fetching',
  templateUrl: './fetching.component.html',
  styleUrls: ['./fetching.component.scss'],
})
export class FetchingComponent implements OnInit, OnDestroy {
  timer = 0;
  interval = null;
  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.timer = this.timer + 1;
      if (this.timer >= 30) {
        clearInterval(this.interval);
      }
    }, 500);
  }
  ngOnDestroy() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
