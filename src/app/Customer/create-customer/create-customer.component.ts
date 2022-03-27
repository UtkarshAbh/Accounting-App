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

  customerForm: FormGroup = this.fb.group({
    name: [''],
    dateOfBirth: [''],
    gender: [''],
    address: [''],
    phoneNumber: [''],
    email: [''],
    profession: [''],
    product: [''],
    productCategory: ['']
  });

  // dateOfBirth = new Date().setFullYear(1995, 11, 11);

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
  pageTitle: string = '';

  validationMessages: { [index: string]: any } = {
    'name': {
      'required': 'Name is a required field.'
    },
    'dateOfBirth': { 'required': 'Date of Birth is a required field.' },
    'gender': { 'required': 'Gender is a required field.' },
    'address': { 'required': 'Address is a required field.' },
    'phoneNumber': { 'required': 'Phone Number is a required field.' },
    'email': { 'required': 'Email is a required field.' },
    'profession': { 'required': 'Profession is a required field.' },
    'product': { 'required': 'Product is a required field.' },
    'productCategory': { 'required': 'Product Category is a required field.' }
  }

  formErrors: { [index: string]: any } = {
    'name': '',
    'dateOfBirth': '',
    'gender': '',
    'address': '',
    'phoneNumber': '',
    'email': '',
    'profession': '',
    'product': '',
    'productCategory': ''
  }

  constructor(private fb: FormBuilder,
    private _route: ActivatedRoute,
    private _customerService: CustomerService,
    private _router: Router) { }

  ngOnInit(): void {
    this.customerForm = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      profession: ['', Validators.required],
      product: ['', Validators.required],
      productCategory: ['', Validators.required]
    });

    this.customerForm.valueChanges.subscribe((value: any) => {
      this.logValidationErrors(this.customerForm);
    });

    this._route.paramMap.subscribe(params => {
      const customerId = params.get('id');
      if (customerId) {
        this.pageTitle = "Edit Customer";
        this.getCustomer(+customerId);
      } else {
        this.pageTitle = "Create Customer";
        this.customer = {
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
      }
    })
  }

  getCustomer(id: number) {
    this._customerService.getCustomer(id).subscribe(
      (customer: Customer) => {
        this.editCustomer(customer),
        this.customer = customer;
      },
      (err: any) => console.log(err)
    );
  }

  editCustomer(customer: Customer) {
    this.customerForm.patchValue({
      name: customer.name,
      dateOfBirth: customer.dateOfBirth,
      gender: customer.gender,
      address: customer.address,
      phoneNumber: customer.phoneNumber,
      email: customer.email,
      profession: customer.profession,
      product: customer.product,
      productCategory: customer.productCategory
    })
  }


  logValidationErrors(group: FormGroup = this.customerForm): void {
    Object.keys(group.controls).forEach((key: string) => {
      const abstractControl = group.get(key);
      this.formErrors[key] = '';
      if (abstractControl && !abstractControl.valid && (abstractControl.touched || abstractControl.dirty)) {
        const messages = this.validationMessages[key];

        for (const errorKey in abstractControl.errors) {
          if (errorKey) {
            this.formErrors[key] += messages[errorKey] + ' ';
          }
        };
      }
    })
  }

  onSubmit(): void {
    this.mapFormVlauesToCustomerModel();
    if (this.customer.id) {
      this._customerService.updateCustomer(this.customer).subscribe(
        () => {
          this._router.navigate(['/customer']),
          (err: any) => console.log(err)
        });
    } else {
      this._customerService.addCustomer(this.customer).subscribe(
        () => {
          this._router.navigate(['/customer']),
          (err: any) => console.log(err)
        });
    }
  }
  mapFormVlauesToCustomerModel() {
    this.customer.name = this.customerForm.value.name;
    this.customer.dateOfBirth = this.customerForm.value.dateOfBirth;
    this.customer.gender = this.customerForm.value.gender;
    this.customer.address = this.customerForm.value.address;
    this.customer.phoneNumber = this.customerForm.value.phoneNumber;
    this.customer.email = this.customerForm.value.email;
    this.customer.profession = this.customerForm.value.profession;
    this.customer.product = this.customerForm.value.product;
    this.customer.productCategory = this.customerForm.value.productCategory;
  }
}

