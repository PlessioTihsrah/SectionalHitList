import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges
} from '@angular/core';

@Component({
  selector: 'app-sort-switches',
  templateUrl: './sort-switches.component.html',
  styleUrls: ['./sort-switches.component.scss']
})
export class SortSwitchesComponent implements OnInit {
  @Input() sortBy: string;
  @Output() changeSort = new EventEmitter<string>();
  constructor() {}

  handleChange(term: string) {
    this.changeSort.emit(term);
  }
  ngOnInit(): void {}
}
