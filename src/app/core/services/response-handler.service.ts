import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';

// Response handler required for the Response interface
import { ServiceResponse } from '../interfaces/response.interface';

@Injectable()
export class ResponseHandler {

  constructor(
    private http: HttpClient
  ) { }

  public makeRequest<T>(type: string, url: string, body?: object, observe?: boolean): Observable<T> {
    const responseBody = body ? body : {};
    const observeResponse = observe ? { observe: 'response' } : {};
    return this.http[type](url, responseBody, observeResponse)
      .map((response: ServiceResponse) => {
        return response;
      })
      .catch((errorResponse: HttpErrorResponse) => {
        console.log(errorResponse);
        return Observable.throw(errorResponse);
      });
  }
}
