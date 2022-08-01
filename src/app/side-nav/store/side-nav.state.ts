import { NavHeaderList } from "src/app/shared/models/nav-item.model";

export const SIDE_NAV_STORE_KEY = 'sideNav';

export interface SideNavState {
  navOptions: NavHeaderList[]
}
