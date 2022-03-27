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

  constructor(private salesService: SalesService,
    private _router: Router) { }

  ngOnInit(): void {
    this.salesService.getSales().subscribe(
      (listSales) => {
        this.sales = listSales,
        (err: any) => console.log(err)
      }
    )
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

  calculateSalesAmount(rowData: { price: number; quantity: number; }) {
    return (+rowData.price) * (+rowData.quantity);
  }

  toggleAuth() {
    if (localStorage.getItem('userType') == 'admin') {
      return true;
    }
    return false;
  }
  
}
