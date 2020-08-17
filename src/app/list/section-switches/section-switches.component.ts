import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-section-switches',
  templateUrl: './section-switches.component.html',
  styleUrls: ['./section-switches.component.scss']
})
export class SectionSwitchesComponent implements OnInit {
  @Input() sections: any;
  @Output() changeSection = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {}

  handleSection(section: string) {
    this.changeSection.emit(section);
  }
}
