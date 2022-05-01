import { MenuItem } from "src/app/shared/models/nav-item.model";

export const TOP_NAV_STATE = 'topNav';

export interface TopNavState {
  menuOptions: MenuItem[]
}
