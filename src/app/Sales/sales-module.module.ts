import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DxDataGridModule } from 'devextreme-angular/ui/data-grid';
import { SalesRoutingModule } from './sales.routing.module';
import { SalesComponent } from './sales.component';
import { SalesUpdateComponent } from './sales-update.component';



@NgModule({
  declarations: [
    SalesComponent,
    SalesUpdateComponent
  ],
  imports: [
    CommonModule,
    SalesRoutingModule,
    DxDataGridModule
  ]
})
export class SalesModuleModule { }
