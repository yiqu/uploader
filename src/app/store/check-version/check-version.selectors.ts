import {createFeatureSelector, createSelector} from '@ngrx/store';
import { AppVersionCheckState, APP_VERSION_CHECK_STATE } from './check-version.state';

export const selectVersionCheckFeatureState = createFeatureSelector<AppVersionCheckState>(APP_VERSION_CHECK_STATE);

export const getIsOutdated = createSelector(
  selectVersionCheckFeatureState,
  (state): boolean => {
    return state.isOutdated;
  }
);
