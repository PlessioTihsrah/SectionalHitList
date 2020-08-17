import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.scss'],
})
export class ListCardComponent implements OnInit {
  @Input() record;
  @Input() avgCgpa: number;
  @Input() avgMarks: number;
  @Output() toast = new EventEmitter<void>();
  alternateImage = false;
  constructor() {}

  ngOnInit(): void {}
  showToast() {
    this.toast.emit();
  }
  getWebpImage() {
    const image =
      this.alternateImage && this.record.id ? this.record.id : this.record.roll;
    return `https://firebasestorage.googleapis.com/v0/b/sectionalhitlist.appspot.com/o/images%2F${image}.webp?alt=media`;
  }
  getJpegImage() {
    const image =
      this.alternateImage && this.record.id ? this.record.id : this.record.roll;
    return `https://firebasestorage.googleapis.com/v0/b/sectionalhitlist.appspot.com/o/images%2F${image}.jpg?alt=media`;
  }
  toggle() {
    this.alternateImage = !this.alternateImage;
  }
}
