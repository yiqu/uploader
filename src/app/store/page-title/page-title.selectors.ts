import {createFeatureSelector, createSelector} from '@ngrx/store';
import { PageTitleState, PAGE_TITLE_STATE_ID } from './page-title.state';

export const selectPageTitleFeatureState = createFeatureSelector<PageTitleState>(PAGE_TITLE_STATE_ID);

export const getPageTitle = createSelector(
  selectPageTitleFeatureState,
  (state): string => {
    return state.titleDisplay;
  }
);
