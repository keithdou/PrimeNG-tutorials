import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Picture} from '../domain/picture';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import { environment } from '../../environments/environment';

@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  url = environment.serviceUrl;

  getPicturesForSubscription() {
    return this.http.get<any>(this.url + '/pictures?_sort=id&_order=desc');
  }

  getPictures(): Observable<Picture[]>{
    return this.http
      .get<Picture[]>(this.url + '/pictures?_sort=id&_order=desc')
      .do(data =>console.log('All Pictures : ' + JSON.stringify(data)))
      .catch(this.handleError);
  }

  private handleError(error: HttpErrorResponse)
  {
    debugger;
    console.error(error);
    let errorMessage = '';
    errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }
}
