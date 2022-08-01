import { createAction, Action, on, createReducer } from "@ngrx/store"
import { NavHeader, NavHeaderLink, NavHeaderList } from "src/app/shared/models/nav-item.model"
import { SideNavState } from "./side-nav.state"

const initialState: SideNavState = {
  navOptions: [
    new NavHeaderList(new NavHeader("Upload"), [
      new NavHeaderLink("Upload", "upload", ["/", "home", "upload"]),
      new NavHeaderLink("My Files", "history", ["/", "home", "history"]),
    ]),
    new NavHeaderList(new NavHeader("Account"), [
      new NavHeaderLink("My Account", "account_circle", ["/", "my-account"]),
      new NavHeaderLink("Sign in", "account_circle", ["/", "auth", 'signin']),
    ])
  ]
}

export const sideNavReducer = createReducer(
  initialState,

)
