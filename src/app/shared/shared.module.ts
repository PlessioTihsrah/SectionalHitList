import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { IgxInputGroupModule, IgxButtonModule } from 'igniteui-angular';
import { DualInputComponent } from './dual-input/dual-input.component';

@NgModule({
  declarations: [SearchBarComponent, DualInputComponent],
  imports: [CommonModule, IgxInputGroupModule, IgxButtonModule],
  exports: [SearchBarComponent, DualInputComponent]
})
export class SharedModule {}
