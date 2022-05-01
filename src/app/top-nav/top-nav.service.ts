import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MenuItem } from '../shared/models/nav-item.model';
import { AppState } from '../store/global/app.reducer';
import * as fromTopNavSelectors from './store/top-nav.selectors';

@Injectable({
  providedIn: 'root'
})
export class TopNavService {

  userMenuOptions$: Observable<MenuItem[]> = this.store.select(fromTopNavSelectors.getUserMenuOptions);

  constructor(public store: Store<AppState>) {
  }

}
