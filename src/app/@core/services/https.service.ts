
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HttpsService {

  constructor(private http: HttpClient) { }

  private createHeaders(headers?): HttpHeaders {
    // setting headers
    let requestHeaders = {};
    requestHeaders['Content-Type'] = 'application/json';
    if (headers) {
      requestHeaders = Object.assign({}, requestHeaders, headers);
    }
    const httpHeaders = new HttpHeaders(requestHeaders);
    return httpHeaders;
  }

  public post(url, body, headers?) {
    //this.loader.updateCounter(1);
    const options = { headers: this.createHeaders(headers) };
    return this.http.post(url, body, options)
      .map(res => {
        return this.extractData(res);
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

  /**
 * Response data extract
 * @param {Response} res
 * return response data Oject
 */
  extractData(res: any) {
    //this.loader.updateCounter(-1);
    const body = res;
    return body || {};
  }

  /**
   * Handle error after http call
   * @param {any} error
   * return Observable error object;
   */
  handleError(error: any) {
    //this.loader.updateCounter(-1);
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    const errorBody = error._body ? JSON.parse(error._body) : { errorCode: null };
    return Observable.throw(errorBody);
  }

  /**
   * Get data from get request
   * @param url
   * @param headers
   */
  public get(url, headers?) {
    // loader starts
    //this.loader.updateCounter(1);
    const options = { headers: this.createHeaders(headers) };
    console.log(url,options);
    return this.http.get(url, options)
      .map(res => {
        return this.extractData(res);
      })
      .catch(err => {
        return this.handleError(err);
      });
  }

}
