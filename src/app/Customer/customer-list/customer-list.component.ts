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
              private _router: Router) { }

  ngOnInit(): void {
    this._customerService.getCustomers().subscribe(
      (listCustomers) => {this.customers = listCustomers,
      (err: any) => console.log(err)
      }
    )
  }


  toggleAuth(){
    if(localStorage.getItem('userType')== 'admin'){
      return true;
    }
    return false;
  }


//  save(rowData: {id: number}, e:any) {
   
//    this.customer = (e.component.find((cus: Customer) => cus.id == id))
//    this._customerService.updateCustomer(this.customer).subscribe(data => console.log(data))
//  }

}
