import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFilesReducer from './files.reducer';
import { FILES_STORE_KEY } from './upload.state';
import { FilesEntityState } from './files.reducer';
import * as fromAuthSelectors from '../../authentication/store/auth.selectors';

export const userFilesFeatureState = createFeatureSelector<FilesEntityState>(FILES_STORE_KEY);

export const selectIds = createSelector(
  userFilesFeatureState,
  fromFilesReducer.adapter.getSelectors().selectIds
);

export const selectEntities = createSelector(
  userFilesFeatureState,
  fromFilesReducer.adapter.getSelectors().selectEntities
);

export const selectAll = createSelector(
  userFilesFeatureState,
  fromFilesReducer.adapter.getSelectors().selectAll
);

export const selectTotalCount = createSelector(
  userFilesFeatureState,
  fromFilesReducer.adapter.getSelectors().selectTotal
);

export const isUserFilesApiLoading = createSelector(
  userFilesFeatureState,
  fromAuthSelectors.apiLoading,
  (state, userLoading: boolean | undefined): boolean => {
    return (state.apiWorking) || (!!userLoading);
  }
);

