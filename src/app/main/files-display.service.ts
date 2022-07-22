import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store/global/app.reducer';
import * as fromFilesDisplaySelectors from './store/files-display/files-display.selectors';
import { ActionButton, FilesDisplayState, FilesDisplayTab, FilesDisplayTabsState, Pagination } from './store/files-display/files-display.state';
import * as fromFilesDisplayTabActions from './store/files-display/files-display.actions';
import { PhotoData, PhotoDataRowSelect } from './store/upload/upload.state';
import * as fromFilesSelectionActions from './store/selection/selection.actions';
import * as fromFileSelectionSelectors from './store/selection/selection.selectors';


@Injectable({
  providedIn: 'root'
})
export class FilesDisplayService {

  getUserDisplayTabs$: Observable<FilesDisplayTabsState> = this.store.select(fromFilesDisplaySelectors.getUserFilesDisplayTabs);
  getAllTabOptions$: Observable<FilesDisplayTab[]> = this.store.select(fromFilesDisplaySelectors.getAllTabOptions);
  getFilesDisplayTableActionBtns$: Observable<ActionButton[]> = this.store.select(fromFileSelectionSelectors.getFilesDisplayTableActionBtns);
  getTablePagination$: Observable<Pagination> = this.store.select(fromFilesDisplaySelectors.getPagination);
  getTableSelected$: Observable<PhotoData[]> = this.store.select(fromFileSelectionSelectors.selectAll);
  hasAnySelectedOnCurrentTablePage$: Observable<boolean> = this.store.select(fromFileSelectionSelectors.hasSelectedOnCurrentPage);

  constructor(private store: Store<AppState>) {
  }

  setUserFilesDisplayTab(tab?: FilesDisplayTab): void {
    this.store.dispatch(fromFilesDisplayTabActions.setUserFilesDisplayTabId({ tab }))
  }

  setCurrentPage(currentPage: number): void {
    this.store.dispatch(fromFilesDisplayTabActions.setCurrentTablePage({ currentPage }));
  }

  setDisplayCountPerPage(count: number): void {
    this.store.dispatch(fromFilesDisplayTabActions.setDisplayCountPerPage({ count }));
  }

  setTotalCount(total: number): void {
    this.store.dispatch(fromFilesDisplayTabActions.setTotalCount({ total }));
  }

  toggleFilesTableSelections(selectionData: PhotoDataRowSelect): void {
    this.store.dispatch(fromFilesSelectionActions.filesTableSelectionToggle(selectionData));
  }

  resetFilesTableSelections(): void {
    this.store.dispatch(fromFilesSelectionActions.resetTableSelections());
  }


}
