import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/Services/customer.service';
import { Customer } from 'src/app/Model/customer.model';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

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

  form_fieldDataChanged(e: any) {
    this.customer = e.component.option("formData");
  }

  constructor(private fb: FormBuilder,
    private _route: ActivatedRoute,
    private _customerService: CustomerService,
    private _router: Router) { }

  ngOnInit(): void {
  }

  submitButtonOptions = {
    text: "Save",
    useSubmitBehavior: true
  }

  handleSubmit(e: any) {
    e.preventDefault();
    console.log(this.customer)
    if (this.customer.id === 0) {
      this._customerService.addCustomer(this.customer).subscribe(data => console.log(data));
      this._router.navigate(['customer'])
    } else {
      this._customerService.updateCustomer(this.customer).subscribe(data => console.log(data));
      this._router.navigate(['customer'])
    }
  }
}

