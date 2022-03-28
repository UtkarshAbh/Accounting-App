import { Component } from '@angular/core';
import { DxTabsModule, DxSelectBoxModule } from 'devextreme-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Accounting-App';
  //   tabs = [
  //     {routerLink:"home", text: 'Home'},
  //     {routerLink:"customer", text: 'Customer'},
  //     {routerLink:"customer/create", text: 'Create Customer'},
  //     {routerLink:"supplier", text: 'Supplier'},
  //     {routerLink:"supplier/create", text: 'Create Supplier'},
  //     {routerLink:"sales", text: 'Sales'},
  //     {routerLink:"login", text: 'Login'},
  //     {routerLink:"logout", text: 'Logout'},
  // ];
  // tabContent: string = this.tabs[0].routerLink

  //   selectTab(e:any) {
  //     this.tabContent = this.tabs[e.index].routerLink;
  //   }

  loggedIn() {
    return localStorage.getItem('userType');
  }

  onLogout() {
    localStorage.clear()
  }

  toggleAuth(){
    if(localStorage.getItem('userType')){
      return true;
    }
    return false;
  }
}
