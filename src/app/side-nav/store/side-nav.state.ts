import { NavHeaderList } from "src/app/shared/models/nav-item.model";

export const SIDE_NAV_STORE_KEY = 'sideNav';

export const HELP_AND_SETTINGS: string = '';

export enum LEFT_NAV_KEYS {
  UPLOAD_PARENT = "Upload",
  HELP_AND_SETTINGS_PARENT = "Help & Settings",
  UPLOAD = "Upload",
  MY_FILES = "My files",
  MY_ACCOUNT = "My account",
  SIGN_IN = "Sign in",
  SIGN_UP = "Sign up",
  LOG_OUT = "Log out"
}


export interface SideNavState {
  navOptions: NavHeaderList[]
}
