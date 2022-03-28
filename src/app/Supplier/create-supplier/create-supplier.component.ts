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

  supplier: Supplier = {
    id: 0,
    name: '',
    address: '',
    phoneNumber: 0,
    email: '',
    productCategory: ''
  }

  form_fieldDataChanged (e:any) {
    this.supplier = e.component.option("formData");
}

  constructor(private fb: FormBuilder,
    private _route: ActivatedRoute,
    private _supplierService: SupplierService,
    private _router: Router) { }

  ngOnInit(): void {
    // this.supplierForm = this.fb.group({
    //   name: ['', Validators.required],
    //   address: ['', Validators.required],
    //   phoneNumber: ['', Validators.required],
    //   email: ['', Validators.required],
    //   productCategory: ['', Validators.required]
    // });

    // this.supplierForm.valueChanges.subscribe((value: any) => {
    //   this.logValidationErrors(this.supplierForm);
    // });

    // this._route.paramMap.subscribe(params => {
    //   const customerId = params.get('id');
    //   if (customerId) {
    //     this.pageTitle = "Edit Supplier";
    //     this.getSupplier(+customerId);
    //   } else {
    //     this.pageTitle = "Create Supplier";
    //     this.supplier = {
    //       id: 0,
    //       name: '',
    //       address: '',
    //       phoneNumber: 0,
    //       email: '',
    //       productCategory: ''
    //     }
    //   }
    // })
  }

  submitButtonOptions = {
    text: "Save",
    useSubmitBehavior: true
  }
  
  handleSubmit(e:any){
    e.preventDefault();
    console.log(this.supplier)
    if(this.supplier.id === 0){
      this._supplierService.addSupplier(this.supplier).subscribe(data => console.log(data));
      this._router.navigate(['supplier'])
    } else {
      this._supplierService.updateSupplier(this.supplier).subscribe(data => console.log(data));
      this._router.navigate(['supplier'])
    }
  }

}
