import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dual-input',
  templateUrl: './dual-input.component.html',
  styleUrls: ['./dual-input.component.scss']
})
export class DualInputComponent implements OnInit {
  valueOne = '';
  valueTwo = '';
  @Input() labelOne = '';
  @Input() labelTwo = '';
  @Output() submitted = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  handleSubmit(event) {
    event.preventDefault();
    this.submitted.emit([this.valueOne, this.valueTwo]);
  }
}
