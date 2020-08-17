import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule } from 'ng2-charts';
import { ReportRoutingModule } from './report-routing.module';
import { ReportComponent } from './report.component';
import { ReportCardComponent } from './report-card/report-card.component';
import { SharedModule } from '../shared/shared.module';
import { IgxCardModule, IgxExpansionPanelModule } from 'igniteui-angular';
import { ReportCardExpansionComponent } from './report-card-expansion/report-card-expansion.component';
import { ReportGraphComponent } from './report-graph/report-graph.component';
@NgModule({
  declarations: [
    ReportComponent,
    ReportCardComponent,
    ReportCardExpansionComponent,
    ReportGraphComponent
  ],
  imports: [
    CommonModule,
    ReportRoutingModule,
    SharedModule,
    IgxCardModule,
    IgxExpansionPanelModule,
    ChartsModule
  ]
})
export class ReportModule {}
