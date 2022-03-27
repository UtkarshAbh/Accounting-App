import { NgModule } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';
import { CustomerRoutingModule } from './customer-routing.module';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { DxButtonModule } from 'devextreme-angular/ui/button';
import { DxFormModule } from 'devextreme-angular/ui/form';
import { DxValidatorModule } from 'devextreme-angular/ui/validator';



@NgModule({
  declarations: [
    CustomerListComponent,
    CreateCustomerComponent
  ],
  imports: [
    SharedModule,
    CustomerRoutingModule,
    DxDataGridModule,
    DxFormModule,
    DxValidatorModule,
    DxButtonModule
    ]
})
export class CustomerModule { }
