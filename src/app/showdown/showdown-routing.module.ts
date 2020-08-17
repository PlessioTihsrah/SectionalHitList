import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShowdownComponent } from './showdown.component';

const routes: Routes = [{ path: '', component: ShowdownComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShowdownRoutingModule { }
