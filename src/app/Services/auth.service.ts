import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { User } from '../Model/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _httpclient: HttpClient) { }

  baseUrl = 'http://localhost:3000/login';

  get isUserAuthorized() {
    return true;
  }

  // isUserAuthorized() {
  //   return this._httpclient.get<User[]>(this.baseUrl).pipe(catchError(this.handleError))
  // }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent
    ) {
      console.log('Client Side Erorr : ', errorResponse.error.message);
    } else {
      console.log('Server Side Error : ', errorResponse);
    }
    return throwError(() => new Error('There is a problem with the service. We are notified and working on it. Please try later.'));
  }
}
