import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

export const versionUrl: string = 'https://raw.githubusercontent.com/yiqu/uploader/master/package.json';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
  }

  public get<T>(url: string, opts?: any): Observable<T> {
    return this.http.get<T>(url, {
      observe: 'body',
    }).pipe(
      catchError((err) => {
        console.error(err);
        return throwError(err);
      })
    );
  }

}
