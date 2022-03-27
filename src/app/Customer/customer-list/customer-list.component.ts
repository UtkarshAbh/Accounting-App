import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/Model/customer.model';
import { CustomerService } from 'src/app/Services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private _customerService: CustomerService,
              private _router: Router) { }

  ngOnInit(): void {
    this._customerService.getCustomers().subscribe(
      (listCustomers) => {this.customers = listCustomers,
      (err: any) => console.log(err)
      }
    )
  }

  editButtonClick(customerId: number) {
    this._router.navigate(['/customer/edit',customerId])
  }

  deleteButtonClick(customerId: number) {
    this._customerService.deleteCustomer(customerId);
  }
}
