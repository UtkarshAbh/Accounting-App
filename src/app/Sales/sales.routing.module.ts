import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuestGuard } from '../Shared/role-guest.guard';

import { SalesComponent } from './sales.component';

const routes: Routes = [
    { path: '', component: SalesComponent, canActivate:[RoleGuestGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesRoutingModule { }
