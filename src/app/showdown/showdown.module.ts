import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShowdownRoutingModule } from './showdown-routing.module';
import { ShowdownComponent } from './showdown.component';
import { SharedModule } from '../shared/shared.module';
import { ShowdownCardComponent } from './showdown-card/showdown-card.component';
import { ChartsModule } from 'ng2-charts';
import { IgxSelectModule } from 'igniteui-angular';

@NgModule({
  declarations: [ShowdownComponent, ShowdownCardComponent],
  imports: [
    CommonModule,
    ShowdownRoutingModule,
    SharedModule,
    ChartsModule,
    IgxSelectModule
  ]
})
export class ShowdownModule {}
