import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { CVComponent } from './cv/cv.component';
import { SettingsComponent } from './settings/settings.component';
import { ErrorComponent } from './error/error.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },

  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'report',
    loadChildren: () =>
      import('./report/report.module').then((m) => m.ReportModule),
  },
  {
    path: 'showdown',
    loadChildren: () =>
      import('./showdown/showdown.module').then((m) => m.ShowdownModule),
  },
  {
    path: 'planning',
    loadChildren: () =>
      import('./planning/planning.module').then((m) => m.PlanningModule),
  },
  {
    path: 'cv',
    component: CVComponent,
  },
  { path: 'settings', component: SettingsComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
