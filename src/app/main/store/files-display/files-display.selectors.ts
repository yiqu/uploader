import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilesDisplayState, FilesDisplayTab, FILES_DISPLAY_STORE_KEY } from './files-display.state';

export const filesDisplayFeatureState = createFeatureSelector<FilesDisplayState>(FILES_DISPLAY_STORE_KEY);


export const getUserFilesDisplayTabs = createSelector(
  filesDisplayFeatureState,
  (state): FilesDisplayState => {
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

