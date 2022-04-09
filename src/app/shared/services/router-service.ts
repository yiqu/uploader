import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/global/app.reducer';
import * as fromRouterSelectors from '../../store/router/router.selectors';



@Injectable({
  providedIn: 'root'
})
export class RouterService {

  routeParams$ = this.store.select(fromRouterSelectors.selectRouteParams);
  currentRoute$ = this.store.select(fromRouterSelectors.selectCurrentRoute);
  queryParams$ = this.store.select(fromRouterSelectors.selectQueryParams);
  routeData$ = this.store.select(fromRouterSelectors.selectRouteData);

  nestedRouteParams$ = this.store.select(fromRouterSelectors.selectRouteNestedParams);

  constructor(public store: Store<AppState>) {
  }



}
