import { Injectable } from '@angular/core';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Customer } from '../Model/customer.model';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/customers';

  getCustomers(): Observable<Customer[]> {
    return this.httpClient.get<Customer[]>(this.baseUrl).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent
    ) {
      console.log('Client Side Erorr : ', errorResponse.error.message);
    } else {
      console.log('Server Side Error : ', errorResponse);
    }
    return throwError(() => new Error('There is a problem with the service. We are notified and working on it. Please try later.'));
  }


  getCustomer(id: number): Observable<Customer> {
    return this.httpClient.get<Customer>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.baseUrl, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  updateCustomer(customer: Customer): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${customer.id}`, customer, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  deleteCustomer(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }
}


