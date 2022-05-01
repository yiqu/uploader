import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { AuthState } from 'src/app/authentication/store/auth.models';
import { authReducer } from 'src/app/authentication/store/auth.reducer';
import { USER_AUTH_STATE } from 'src/app/authentication/store/auth.state';
import { topNavReducer } from 'src/app/top-nav/store/top-nav.reducer';
import { TopNavState, TOP_NAV_STATE } from 'src/app/top-nav/store/top-nav.state';
import { appMetaDataReducer } from '../meta/meta.reducer';
import { AppMetaDataState, APP_META_DATA_STATE } from '../meta/meta.state';
import { pageTitleReducer } from '../page-title/page-title.reducer';
import { PAGE_TITLE_STATE_ID, PageTitleState } from '../page-title/page-title.state';
import { ROUTER_STATE } from '../router/router.state';


export interface AppState {
  [ROUTER_STATE]?: RouterReducerState<any>;
  [APP_META_DATA_STATE]: AppMetaDataState;
  [PAGE_TITLE_STATE_ID]: PageTitleState;
  [USER_AUTH_STATE]: AuthState;
  [TOP_NAV_STATE]: TopNavState;
}


export const appReducers: ActionReducerMap<AppState> = {
  [ROUTER_STATE]: routerReducer,
  [APP_META_DATA_STATE]: appMetaDataReducer,
  [PAGE_TITLE_STATE_ID]: pageTitleReducer,
  [USER_AUTH_STATE]: authReducer,
  [TOP_NAV_STATE]: topNavReducer
}
