import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { NavHeaderList } from '../shared/models/nav-item.model';
import { AppState } from '../store/global/app.reducer';
import * as fromSideNavSelectors from './store/side-nav.selectors';



@Injectable({
  providedIn: 'root'
})
export class SideNavigationService {

  sideNavOptions$: Observable<NavHeaderList[]> = this.store.select(fromSideNavSelectors.getSideNavOptions);

  constructor(private store: Store<AppState>) {
  }

}
