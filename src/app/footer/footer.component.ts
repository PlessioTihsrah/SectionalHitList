import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  buttons = [
    { url: 'list', icon: 'reorder', name: 'List' },
    { url: 'report', icon: 'account_box', name: 'Report' },
    { url: 'showdown', icon: 'people', name: 'Showdown' },
    { url: 'planning', icon: 'bar_chart', name: 'Planning' },
    { url: 'cv', icon: 'assignment_turned_in', name: 'CV Maker' },
    { url: 'settings', icon: 'settings', name: 'Settings  ' }
  ];
  constructor() {}

  ngOnInit(): void {}
}
