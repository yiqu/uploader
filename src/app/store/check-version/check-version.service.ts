import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../global/app.reducer';
import * as fromCheckVersionSelectors from './check-version.selectors';


@Injectable({
  providedIn: 'root'
})
export class AppVersionCheckeService {

  getIsOutdated$: Observable<boolean> = this.store.select(fromCheckVersionSelectors.getIsOutdated);

  constructor(public store: Store<AppState>) {
  }

}
