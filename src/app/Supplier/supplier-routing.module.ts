import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuestGuard } from '../Shared/role-guest.guard';
import { RoleGuard } from '../Shared/role.guard';

import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';

const routes: Routes = [
    { path: '', component: SupplierListComponent, canActivate:[RoleGuestGuard]},
    { path: 'create', component: CreateSupplierComponent,canActivate:[RoleGuard]},
    { path: 'edit/:id', component: CreateSupplierComponent,canActivate:[RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
