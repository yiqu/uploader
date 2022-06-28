import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../global/app.reducer';
import * as fromRouterSelectors from './router.selectors';


@Injectable({
  providedIn: 'root'
})
export class RouterService {

  routeParam$: Observable<Params> = this.store.select(fromRouterSelectors.selectRouteParams);

  constructor(private store: Store<AppState>) {

  }

}
