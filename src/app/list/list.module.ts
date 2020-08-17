import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';
import {
  IgxSwitchModule,
  IgxLayoutModule,
  IgxCardModule,
  IgxIconModule,
  IgxToastModule,
  IgxButtonModule
} from 'igniteui-angular';
import { SectionSwitchesComponent } from './section-switches/section-switches.component';
import { SemesterSwitchesComponent } from './semester-switches/semester-switches.component';
import { SortSwitchesComponent } from './sort-switches/sort-switches.component';
import { ListCardComponent } from './list-card/list-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ListComponent,
    SectionSwitchesComponent,
    SemesterSwitchesComponent,
    SortSwitchesComponent,
    ListCardComponent
  ],
  imports: [
    CommonModule,
    ListRoutingModule,
    IgxSwitchModule,
    IgxLayoutModule,
    IgxCardModule,
    IgxIconModule,
    IgxToastModule,
    IgxButtonModule,
    SharedModule
  ]
})
export class ListModule {}
