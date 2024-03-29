import { createAction, Action, on, createReducer } from "@ngrx/store"
import { MenuItem } from "src/app/shared/models/nav-item.model"
import { MENU_OPTION_SIGN_IN_ID, TopNavState } from "./top-nav.state"

const initialState: TopNavState = {
  menuOptions: [
    new MenuItem("record_voice_over", "Sign in", MENU_OPTION_SIGN_IN_ID, false)
  ]
}

export const topNavReducer = createReducer(
  initialState,

)
