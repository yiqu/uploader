import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFilesReducer from './files.reducer';
import { PhotoData, USER_FILES_STORE_KEY } from '../upload/upload.state';
import { FilesEntityState } from './files.reducer';
import * as fromAuthSelectors from '../../../authentication/store/auth.selectors';
import { PhotoTableData } from './files.state';

export const userFilesFeatureState = createFeatureSelector<FilesEntityState>(USER_FILES_STORE_KEY);

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

export const isFilesFirstTimeLoading = createSelector(
  userFilesFeatureState,
  (state): boolean => {
    return state.firstTimeLoading;
  }
);

export const isUserFilesApiLoading = createSelector(
  userFilesFeatureState,
  fromAuthSelectors.apiLoading,
  isFilesFirstTimeLoading,
  (state, userLoading: boolean | undefined, firstTimeLoading: boolean): boolean => {
    return ((state.apiWorking) || (!!userLoading)) && firstTimeLoading;
  }
);

export const isUserFilesApiWorking = createSelector(
  userFilesFeatureState,
  (state): boolean => {
    return state.apiWorking;
  }
);

export const getRecentUserUploads = createSelector(
  selectAll,
  (state: PhotoData[]): PhotoData[] => {
    if (state && state.length > 0) {
      const allFiles: PhotoData[] = [...state];
      allFiles.sort((fileA, fileB) => {
        return fileA.dateUploaded > fileB.dateUploaded ? -1 : 1;
      });
      const recentFiles: PhotoData[] = allFiles.slice(0, 5);
      return recentFiles;
    }
    return [];
  }
);


export const getUserPhotoTableData = createSelector(
  isUserFilesApiLoading,
  selectAll,
  (apiLoading: boolean, allFilesData: PhotoData[]): PhotoTableData => {
    let columnIds: string[] = ['photoUrl', 'fileName', 'fileSize', 'dateUploaded'];
    let columnData: PhotoData[] = [...allFilesData];

    return {
      apiLoading: apiLoading,
      columnData,
      columnIds
    };
  }
);
