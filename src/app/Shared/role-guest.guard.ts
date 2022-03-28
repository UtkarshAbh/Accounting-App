import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuestGuard implements CanActivate {

  constructor(private route: Router){}
  canActivate(){
    let role = localStorage.getItem('userType');
    if (role == 'guest' || role == 'admin') {
      return true;
    }
    this.route.navigate(['/login'])
    return false;
  }
  
}
