import { createAction, Action, on, createReducer } from "@ngrx/store"
import { AppMetaDataState } from "./meta.state";
import * as fromMetaDataActions from './meta.actions';

const initialState: AppMetaDataState = {
  version: 'N/A'
}

export const appMetaDataReducer = createReducer(
  initialState,

  on(fromMetaDataActions.setAppVersionSuccess, (state, { version }) => {
    return {
      ...state,
      version
    }
  }),
)
