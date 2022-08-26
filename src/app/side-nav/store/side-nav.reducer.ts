import { createAction, Action, on, createReducer } from "@ngrx/store"
import { NavHeader, NavHeaderLink, NavHeaderList } from "src/app/shared/models/nav-item.model"
import { LEFT_NAV_KEYS, SideNavState } from "./side-nav.state"
import * as fromSideNavActions from './side-nav.actions';
import { CRUDMode } from "src/app/shared/models/general.model";


const initialState: SideNavState = {
  navOptions: [
    new NavHeaderList(new NavHeader(LEFT_NAV_KEYS.UPLOAD_PARENT), [
      new NavHeaderLink(LEFT_NAV_KEYS.UPLOAD, "upload", ["/", "home", "upload"])
    ]),
    new NavHeaderList(new NavHeader(LEFT_NAV_KEYS.HELP_AND_SETTINGS_PARENT), [
      new NavHeaderLink(LEFT_NAV_KEYS.MY_ACCOUNT, "account_circle", ["/", "my-account"]),
      new NavHeaderLink(LEFT_NAV_KEYS.SIGN_IN, "login", ["/", "auth", 'signin']),
    ])
  ]
}

export const sideNavReducer = createReducer(
  initialState,

  on(fromSideNavActions.updateSideNavOptions, (state, { crud, options }) => {
    const currentOptions: NavHeaderList[] = JSON.parse(JSON.stringify(state.navOptions));
    const resultOptions: NavHeaderList[] = JSON.parse(JSON.stringify(state.navOptions));
    const incomingOptionParent: number = state.navOptions.findIndex((res: NavHeaderList) => {
      return options.header.display === res.header.display;
    });

    if (incomingOptionParent > -1) {
      const incomingOptionIndex: number = state.navOptions[incomingOptionParent].links.findIndex((res) => {
        return options.links[0].display ===  res.display;
      });

      if (crud === CRUDMode.CREATE) {
        if (incomingOptionIndex < 0) {
          currentOptions[incomingOptionParent].links.push(...options.links);
        }
      } else if (crud === CRUDMode.DELETE) {
        if (incomingOptionIndex > -1) {
          currentOptions[incomingOptionParent].links.splice(incomingOptionIndex, 1);
        }
      }
    }

    return {
      ...state,
      navOptions: currentOptions
    }
  })
)
