import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilesTableSelectionEntityState } from './selection.reducer';
import { TABLE_SELECTION_STORE_KEY } from './selection.state';
import * as fromSelectionReducer from './selection.reducer';

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

