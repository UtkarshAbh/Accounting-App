import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoleGuestGuard } from '../Shared/role-guest.guard';
import { RoleGuard } from '../Shared/role.guard';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';

const routes: Routes = [
    { path: '', component: CustomerListComponent, canActivate:[RoleGuestGuard]},
    { path: 'create', component: CreateCustomerComponent,canActivate:[RoleGuard]},
    { path: 'edit/:id', component: CreateCustomerComponent, canActivate:[RoleGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
