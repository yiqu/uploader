import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/global/app.reducer';
import * as fromFilesDisplaySelectors from './store/files-display/files-display.selectors';
import { FilesDisplayState, FilesDisplayTab } from './store/files-display/files-display.state';
import * as fromFilesDisplayTabActions from './store/files-display/files-display.actions';


@Injectable({
  providedIn: 'root'
})
export class FilesDisplayService {

  getUserDisplayTabs$: Observable<FilesDisplayState> = this.store.select(fromFilesDisplaySelectors.getUserFilesDisplayTabs);


  constructor(private store: Store<AppState>) {
  }

  setUserFilesDisplayTab(tab: FilesDisplayTab) {
    this.store.dispatch(fromFilesDisplayTabActions.setUserFilesDisplayTabId({ tab }))
  }
}
