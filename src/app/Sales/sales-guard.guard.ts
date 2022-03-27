import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../Services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SalesGuardGuard implements CanActivate {
  constructor(private _authService: AuthService,
    private _router: Router) { }
  canActivate() {
    if (this._authService.isUserAuthorized) {
      return true;
    } else {
      // window.alert('Permission denied')
      this._router.navigate(['**'])
      return false;
    }
  }
}
