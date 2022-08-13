import { createAction, Action, on, createReducer } from "@ngrx/store"
import * as fromVersionCheckActions from './check-version.actions';
import { AppVersionCheckState } from "./check-version.state";

const initialState: AppVersionCheckState = {
  version: undefined,
  isOutdated: false,
  checkDuration: -1,
  lastCheckDate: 0
}

export const appVersionCheckReducer = createReducer(
  initialState,

  on(fromVersionCheckActions.startVersionCheckTimer, (state, { duration }) => {
    return {
      ...state,
      checkDuration: duration
    }
  }),

  on(fromVersionCheckActions.versionCheckSuccess, (state, { version }) => {
    const currentVersion: string | undefined = state.version;
    const changed: boolean = currentVersion ? (currentVersion !== version) : (false);
    return {
      ...state,
      lastCheckDate: new Date().getTime(),
      version,
      isOutdated: changed
    }
  }),


)
