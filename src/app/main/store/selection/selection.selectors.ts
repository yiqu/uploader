import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilesTableSelectionEntityState } from './selection.reducer';
import { TABLE_SELECTION_STORE_KEY } from './selection.state';
import * as fromSelectionReducer from './selection.reducer';
import * as fromFilesSelectors from '../files/files.selectors';
import { PhotoData } from '../upload/upload.state';
import { PhotoTableData } from '../files/files.state';
import { ActionButton } from '../files-display/files-display.state';
import { DEFAULT_BUTTON_LIST, WHEN_HAS_SELECTED_BUTTON_LIST } from '../files-display/files-display.reducer';


export const filesTableSelectionFeatureState = createFeatureSelector<FilesTableSelectionEntityState>(TABLE_SELECTION_STORE_KEY);

export const selectIds = createSelector(
  filesTableSelectionFeatureState,
  fromSelectionReducer.adapter.getSelectors().selectIds
);

export const selectEntities = createSelector(
  filesTableSelectionFeatureState,
  fromSelectionReducer.adapter.getSelectors().selectEntities
);

export const selectAll = createSelector(
  filesTableSelectionFeatureState,
  fromSelectionReducer.adapter.getSelectors().selectAll
);

export const selectTotalCount = createSelector(
  filesTableSelectionFeatureState,
  fromSelectionReducer.adapter.getSelectors().selectTotal
);

export const hasSelectedOnCurrentPage = createSelector(
  selectAll,
  fromFilesSelectors.getUserPhotoTableData,
  (totalSelected: PhotoData[], currentTableData: PhotoTableData): boolean => {

    const hasSelectedOnCurrentPage: boolean = totalSelected.some((selected: PhotoData) => {
      const match = currentTableData.columnData.find((res: PhotoData) => {
        return selected.id === res.id;
      });
      return !!match;
    });
    return hasSelectedOnCurrentPage;
  }
);

export const getFilesDisplayTableActionBtns = createSelector(
  selectAll,
  hasSelectedOnCurrentPage,
  (totalSelected: PhotoData[], hasAnySelectedOnCurrentPage: boolean): ActionButton[] => {
    const btnList: ActionButton[] = [];
    btnList.push(...DEFAULT_BUTTON_LIST);

    if (totalSelected.length > 0 && hasAnySelectedOnCurrentPage) {
      btnList.unshift(...WHEN_HAS_SELECTED_BUTTON_LIST);
    }
    return btnList;
  }
);

export const getLastClearSelectionsTime = createSelector(
  filesTableSelectionFeatureState,
  (state): number => {
    return state.lastClearSelectionsTime;
  }
);
