import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesGuardGuard } from './sales-guard.guard';

import { SalesUpdateComponent } from './sales-update.component';
import { SalesComponent } from './sales.component';

const routes: Routes = [
    { path: '', component: SalesComponent, canActivate:[SalesGuardGuard]},
    { path: 'edit', component: SalesUpdateComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
