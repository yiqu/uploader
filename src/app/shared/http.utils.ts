import { HttpParams } from '@angular/common/http';

export function prepareUrlParams(params?: object): HttpParams {
  let httpParams: HttpParams = new HttpParams();
  if (params) {
    Object.keys(params).forEach((item) => {
      const value = params[item];
      httpParams = httpParams.set(item, value);
    });
  }
  return httpParams;
}
