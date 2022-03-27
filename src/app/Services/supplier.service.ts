import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Supplier } from '../Model/supplier.model';

@Injectable({
  providedIn: 'root'
})
export class SupplierService {

  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/suppliers';

  getSuppliers(): Observable<Supplier[]> {
    return this.httpClient.get<Supplier[]>(this.baseUrl).pipe(catchError(this.handleError));
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


  getSupplier(id: number): Observable<Supplier> {
    return this.httpClient.get<Supplier>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }

  addSupplier(supplier: Supplier): Observable<Supplier> {
    return this.httpClient.post<Supplier>(this.baseUrl, supplier, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  updateSupplier(supplier: Supplier): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${supplier.id}`, supplier, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  deleteSupplier(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }
}
