import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/global/app.reducer';
import * as fromMetaSelectors from '../../store/meta/meta.selectors';

@Injectable({
  providedIn: 'root'
})
export class AppMetaService {

  public getAppVersion$: Observable<string> = this.store.select(fromMetaSelectors.getVersion);

  constructor(private store: Store<AppState>) {

  }

}
