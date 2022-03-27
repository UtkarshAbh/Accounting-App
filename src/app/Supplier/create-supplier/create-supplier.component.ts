import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Supplier } from 'src/app/Model/supplier.model';
import { SupplierService } from 'src/app/Services/supplier.service';

@Component({
  selector: 'app-create-supplier',
  templateUrl: './create-supplier.component.html',
  styleUrls: ['./create-supplier.component.css']
})
export class CreateSupplierComponent implements OnInit {

  pageTitle: string = '';
  supplierForm: FormGroup = this.fb.group({
    name: ['',],
    address: [''],
    phoneNumber: [''],
    email: [''],
    productCategory: ['']
  });

  // You can create the Form widget using the following code.
  // Read more at https://js.devexpress.com/Documentation/Guide/Widgets/Common/Advanced/3rd-Party_Frameworks_Integration_API/#Create_and_Configure_a_Widget.

  supplier: Supplier = {
    id: 0,
    name: '',
    address: '',
    phoneNumber: 0,
    email: '',
    productCategory: ''
  }

  validationMessages: { [index: string]: any } = {
    'name': {
      'required': 'Name is a required field.'
    },
    'address': { 'required': 'Address is a required field.' },
    'phoneNumber': { 'required': 'Phone Number is a required field.' },
    'email': { 'required': 'Email is a required field.' },
    'productCategory': { 'required': 'Product Category is a required field.' }
  }

  formErrors: { [index: string]: any } = {
    'name': '',
    'address': '',
    'phoneNumber': '',
    'email': '',
    'productCategory': ''
  }

  constructor(private fb: FormBuilder,
    private _route: ActivatedRoute,
    private _supplierService: SupplierService,
    private _router: Router) { }

  ngOnInit(): void {
    this.supplierForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', Validators.required],
      productCategory: ['', Validators.required]
    });

    this.supplierForm.valueChanges.subscribe((value: any) => {
      this.logValidationErrors(this.supplierForm);
    });

    this._route.paramMap.subscribe(params => {
      const customerId = params.get('id');
      if (customerId) {
        this.pageTitle = "Edit Supplier";
        this.getSupplier(+customerId);
      } else {
        this.pageTitle = "Create Supplier";
        this.supplier = {
          id: 0,
          name: '',
          address: '',
          phoneNumber: 0,
          email: '',
          productCategory: ''
        }
      }
    })
  }

  getSupplier(id: number) {
    this._supplierService.getSupplier(id).subscribe(
      (supplier: Supplier) => {
        this.editSupplier(supplier),
        (err: any) => console.log(err)
      }
    );
  }

  editSupplier(supplier: Supplier) {
    this.supplierForm.patchValue({
      name: supplier.name,
      address: supplier.address,
      phoneNumber: supplier.phoneNumber,
      email: supplier.email,
      productCategory: supplier.productCategory
    })
  }


  logValidationErrors(group: FormGroup = this.supplierForm): void {
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
    this.mapFormVlauesToSupplierModel();
    if (this.supplier.id) {
      this._supplierService.updateSupplier(this.supplier).subscribe(
        () => {
          this._router.navigate(['/supplier']),
            (err: any) => console.log(err)
        });
    } else {
      this._supplierService.addSupplier(this.supplier).subscribe(
        () => {
          this._router.navigate(['/supplier']),
            (err: any) => console.log(err)
        });
    }
  }
  mapFormVlauesToSupplierModel() {
    this.supplier.name = this.supplierForm.value.name;
    this.supplier.address = this.supplierForm.value.address;
    this.supplier.phoneNumber = this.supplierForm.value.phoneNumber;
    this.supplier.email = this.supplierForm.value.email;
    this.supplier.productCategory = this.supplierForm.value.productCategory;
  }

  submitButtonOptions = {
    text: "Submit the Form",
    useSubmitBehavior: true
  }

}
