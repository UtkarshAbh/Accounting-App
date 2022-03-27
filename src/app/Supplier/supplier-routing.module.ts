import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CreateSupplierComponent } from './create-supplier/create-supplier.component';
import { SupplierListComponent } from './supplier-list/supplier-list.component';

const routes: Routes = [
    { path: '', component: SupplierListComponent},
    { path: 'create', component: CreateSupplierComponent},
    { path: 'edit/:id', component: CreateSupplierComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupplierRoutingModule { }
