import { createFeatureSelector, createSelector } from '@ngrx/store';
import { NavHeaderList } from 'src/app/shared/models/nav-item.model';
import { SideNavState, SIDE_NAV_STORE_KEY } from './side-nav.state';

export const sideNavigationFeatureState = createFeatureSelector<SideNavState>(SIDE_NAV_STORE_KEY);

export const getSideNavOptions = createSelector(
  sideNavigationFeatureState,
  (state): NavHeaderList[] => {
    return state.navOptions;
  }
);


