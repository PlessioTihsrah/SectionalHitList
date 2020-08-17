import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-semester-switches',
  templateUrl: './semester-switches.component.html',
  styleUrls: ['./semester-switches.component.scss']
})
export class SemesterSwitchesComponent implements OnInit {
  @Input() semesters: number;
  @Output() changeSem = new EventEmitter<number>();
  numbers = [];
  handleChange(i: number) {
    this.changeSem.emit(i);
  }
  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.semesters; i++) {
      this.numbers.push(i);
    }
  }
}
