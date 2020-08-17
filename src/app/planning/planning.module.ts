import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanningRoutingModule } from './planning-routing.module';
import { PlanningComponent } from './planning.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PlanningComponent],
  imports: [CommonModule, PlanningRoutingModule, SharedModule]
})
export class PlanningModule {}
