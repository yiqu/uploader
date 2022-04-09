import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AppMetaDataState, APP_META_DATA_STATE } from './meta.state';

export const selectMetaDataFeatureState = createFeatureSelector<AppMetaDataState>(APP_META_DATA_STATE);

export const getVersion = createSelector(
  selectMetaDataFeatureState,
  (state): string => {
    return state.version;
  }
);
