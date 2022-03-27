import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { Sales } from '../Model/sales.model';

@Injectable({
  providedIn: 'root'
})
export class SalesService {
  constructor(private httpClient: HttpClient) { }

  baseUrl = 'http://localhost:3000/sales';

  getSales(): Observable<Sales[]> {
    return this.httpClient.get<Sales[]>(this.baseUrl).pipe(catchError(this.handleError));
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


  getSale(id: number): Observable<Sales> {
    return this.httpClient.get<Sales>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }

  addSales(supplier: Sales): Observable<Sales> {
    return this.httpClient.post<Sales>(this.baseUrl, supplier, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  updateSales(supplier: Sales): Observable<void> {
    return this.httpClient.put<void>(`${this.baseUrl}/${supplier.id}`, supplier, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }).pipe(catchError(this.handleError));
  }

  deleteSales(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${this.baseUrl}/${id}`).pipe(catchError(this.handleError));
  }
}
