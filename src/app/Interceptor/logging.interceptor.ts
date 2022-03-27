import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable()
export class LoggingInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const startTime = (new Date()).getTime();
    return next.handle(request)
      .pipe(
        map(event => {
          const endTime = (new Date()).getTime();
          const timeTaken = startTime - endTime;
          console.log(event.type.valueOf() + " Succeded in " + timeTaken+" in milliseconds")
          return event;
        }
        ));
  }
}
