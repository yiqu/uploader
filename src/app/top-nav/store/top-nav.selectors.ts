import {createFeatureSelector, createSelector} from '@ngrx/store';
import { MenuItem } from 'src/app/shared/models/nav-item.model';
import { MENU_OPTION_SIGN_IN_ID, MENU_OPTION_SIGN_OUT_ID, TopNavState, TOP_NAV_STATE } from './top-nav.state';
import * as fromAuthSelectors from '../../authentication/store/auth.selectors';
import { IVerifiedUser } from 'src/app/shared/models/user.model';

export const topNavFeatureState = createFeatureSelector<TopNavState>(TOP_NAV_STATE);

export const getUserMenuOptions = createSelector(
  topNavFeatureState,
  (state): MenuItem[] => {
    return state.menuOptions;
  }
);

export const getUserMenuOptionsDisplay = createSelector(
  getUserMenuOptions,
  fromAuthSelectors.apiLoading,
  fromAuthSelectors.getUser,
  (state: MenuItem[], authLoading: boolean | undefined,
    currentUser: IVerifiedUser | null | undefined): MenuItem[] => {
      let menuOptions: MenuItem[] = [];

      if (currentUser) {
        menuOptions.push(
          new MenuItem("logout", "Log out", MENU_OPTION_SIGN_OUT_ID, false)
        );
      } else {
        menuOptions.push(
          new MenuItem("record_voice_over", "Sign in", MENU_OPTION_SIGN_IN_ID, false)
        );
      }
      menuOptions.forEach((opt, index) => {
        menuOptions[index].disabled = !!authLoading;
      });
      return menuOptions;
  }
);

