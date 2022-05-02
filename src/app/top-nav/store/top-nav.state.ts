import { MenuItem } from "src/app/shared/models/nav-item.model";

export const TOP_NAV_STATE = 'topNav';

export const MENU_OPTION_SIGN_IN_ID = 'signin';
export const MENU_OPTION_SIGN_OUT_ID = 'signout';


export interface TopNavState {
  menuOptions: MenuItem[]
}
