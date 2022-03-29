import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer.model';
import { CustomerService } from 'src/app/Services/customer.service';
import { confirm } from 'devextreme/ui/dialog'
import { HttpClientModule, HttpParams } from '@angular/common/http';
import { Row } from "devextreme/ui/data_grid"
import { DxDataGridComponent } from 'devextreme-angular/ui/data-grid';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {


  customers: Customer[] = [];
  customer: Customer = {
    name: '',
    id: 0,
    dateOfBirth: new Date,
    gender: '',
    address: '',
    phoneNumber: 0,
    email: '',
    profession: '',
    product: '',
    productCategory: ''
  }

  constructor(private _customerService: CustomerService,
    private _router: Router, private http: HttpClientModule) { }

  ngOnInit(): void {
    this._customerService.getCustomers().subscribe(
      (listCustomers) => {
        this.customers = listCustomers,
        (err: any) => console.log(err)
      }
    )
  }

  toggleAuth() {
    if (localStorage.getItem('userType') == 'admin') {
      return true;
    }
    return false;
  }

  updatedRow(e: any) {
    e.cancel= true;
    const customerData = Object.assign({}, <Customer>e.data);
    this.customer = customerData;
    this._customerService.updateCustomer(this.customer)

    console.log(typeof e.data)
  }

  updateRow(e: any) {
    const isCanceled = new Promise((resolve, reject) => {
      const promptPromise = confirm("Are you sure?", "Confirm changes");
      promptPromise.then((dialogResult) => {
        if (dialogResult) {
          // this._customerService.updateCustomer()
          console.log(e.changes)
          return resolve(true);
        } else {
          return reject(true)
        }
      });
    });
    e.cancel = isCanceled;
  }

}
