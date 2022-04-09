import {createFeatureSelector, createSelector} from '@ngrx/store';
import { FileUploadEntityState } from './upload.reducer';
import { UPLOAD_FILE_STORE_KEY } from './upload.state';
import * as fromUploadReducer from './upload.reducer';


export const uploadFileFeatureState = createFeatureSelector<FileUploadEntityState>(UPLOAD_FILE_STORE_KEY);

export const selectIds = createSelector(
  uploadFileFeatureState,
  fromUploadReducer.adapter.getSelectors().selectIds
);

export const selectEntities = createSelector(
  uploadFileFeatureState,
  fromUploadReducer.adapter.getSelectors().selectEntities
);

export const selectAll = createSelector(
  uploadFileFeatureState,
  fromUploadReducer.adapter.getSelectors().selectAll
);

export const selectTotalCount = createSelector(
  uploadFileFeatureState,
  fromUploadReducer.adapter.getSelectors().selectTotal
);

export const isUploadFileLoading = createSelector(
  uploadFileFeatureState,
  (state): boolean => {
    return state.uploading;
  }
);
