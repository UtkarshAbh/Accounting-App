import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sales } from '../Model/sales.model';
import { SalesService } from '../Services/sales.service';


@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {

  sales: Sales[] = [];
  events: Array<string> = [];
  // value: number = 0;

  constructor(private salesService: SalesService,
              private _router: Router) { }

  ngOnInit(): void {
    this.salesService.getSales().subscribe(
      (listSales) => {this.sales = listSales,
      (err: any) => console.log(err)
      }
    )
  }

  editButtonClick(salesId: number) {
    this._router.navigate(['/editSales',salesId])
  }

  deleteButtonClick(salesId: number) {
    this.salesService.deleteSales(salesId);
  }

  logEvent(User: string) {
    this.events.unshift(User);
  }

  clearEvents() {
    this.events = [];
  }

  netValue() {
    this.sales.forEach((data) => {
      return (+data.price)*(+data.quantity)
    } )
  }

  calculateSalesAmount(rowData: { price: number; quantity: number; }) {
    return (+rowData.price) * (+rowData.quantity);
}
}
