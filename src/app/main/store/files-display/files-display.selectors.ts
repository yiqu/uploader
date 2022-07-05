import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilesEntityState } from '../files/files.reducer';
import { PhotoData, USER_FILES_STORE_KEY } from '../upload/upload.state';
import { ActionButton, FilesDisplayState, FilesDisplayTab, FilesDisplayTabsState, FILES_DISPLAY_STORE_KEY, Pagination } from './files-display.state';
import * as fromFilesSelectors from '../files/files.selectors';

export const filesDisplayFeatureState = createFeatureSelector<FilesDisplayState>(FILES_DISPLAY_STORE_KEY);

export const getUserFilesDisplayTabs = createSelector(
  filesDisplayFeatureState,
  (state): FilesDisplayTabsState => {
    return {
      selectedTabLabel: state.selectedTabLabel,
      tabs: state.tabs
    };
  }
);

export const getAllTabOptions = createSelector(
  filesDisplayFeatureState,
  (state): FilesDisplayTab[] => {
    return state.tabs;
  }
);

export const getFilesDisplayTableActionBtns = createSelector(
  filesDisplayFeatureState,
  (state): ActionButton[] => {
    return state.actionButtons ?? [];
  }
);

export const getPagination = createSelector(
  filesDisplayFeatureState,
  (state): Pagination => {
    return state.pagination;
  }
);
