import {createFeatureSelector, createSelector} from '@ngrx/store';
import { MenuItem } from 'src/app/shared/models/nav-item.model';
import { TopNavState, TOP_NAV_STATE } from './top-nav.state';

export const topNavFeatureState = createFeatureSelector<TopNavState>(TOP_NAV_STATE);

export const getUserMenuOptions = createSelector(
  topNavFeatureState,
  (state): MenuItem[] => {
    return state.menuOptions;
  }
);
