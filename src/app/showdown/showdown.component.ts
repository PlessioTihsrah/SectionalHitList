import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-showdown',
  templateUrl: './showdown.component.html',
  styleUrls: ['./showdown.component.scss']
})
export class ShowdownComponent implements OnInit {
  constructor(private dataStore: DataService) {}
  user1 = null;
  user2 = null;
  ngOnInit(): void {}
  handleSubmit(users) {
    if (users[0] !== users[1]) {
      this.user1 = this.dataStore.getDataByRoll(+users[0]);
      this.user2 = this.dataStore.getDataByRoll(+users[1]);
    }
  }
}
