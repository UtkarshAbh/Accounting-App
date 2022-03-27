import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { LoginComponent } from './Home/login/login.component';
import { PagNotFoundComponent } from './page-not-found/page-not-found.component';
import { SalesComponent } from './Sales/sales.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch:'full'},
  { path: 'customer',  loadChildren: () => import('./Customer/customer.module').then(mod => mod.CustomerModule)},
  { path: 'supplier',  loadChildren: () => import('./Supplier/supplier.module').then(mod => mod.SupplierModule)},
  { path: 'sales',  loadChildren: () => import('./Sales/sales-module.module').then(mod => mod.SalesModuleModule)},
  { path: '**', component: PagNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
