import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DxButtonModule, DxFormModule, DxSelectBoxModule, DxTabsModule, DxTextBoxModule, DxValidatorModule } from 'devextreme-angular';

import { AppRoutingModule } from './app-routing.module';

import { CustomerService } from './Services/customer.service';
import { SupplierService } from './Services/supplier.service';
import { SalesService } from './Services/sales.service';

import { HeadersInterceptor } from './Interceptor/headers.interceptor';
import { LoggingInterceptor } from './Interceptor/logging.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { PagNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './Home/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagNotFoundComponent,
    LoginComponent,
 
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    DxTabsModule,
    DxSelectBoxModule,
    DxValidatorModule,
    DxButtonModule,
    DxTextBoxModule,
    DxFormModule
  ],

  providers: [CustomerService,SupplierService,SalesService,
    {provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
