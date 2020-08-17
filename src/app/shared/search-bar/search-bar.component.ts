import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() label = '';
  @Output() submitted = new EventEmitter<string>();
  value = '';

  constructor() {}

  ngOnInit(): void {}
  handleSubmit(event) {
    event.preventDefault();
    this.submitted.emit(this.value);
  }
}
