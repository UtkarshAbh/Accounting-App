import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Supplier } from 'src/app/Model/supplier.model';
import { SupplierService } from 'src/app/Services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.css']
})
export class SupplierListComponent implements OnInit {

  suppliers: Supplier[] = [];

  constructor(private _supplierService: SupplierService,
              private _router: Router) { }

  ngOnInit(): void {
    this._supplierService.getSuppliers().subscribe(
      (listSuppliers) => {this.suppliers = listSuppliers,
      (err: any) => console.log(err)
      }
    )
  }

  editButtonClick(supplierId: number) {
    this._router.navigate(['/supplier/edit',supplierId])
  }

  deleteButtonClick(supplierId: number) {
    this._supplierService.deleteSupplier(supplierId);
  }

 
}


