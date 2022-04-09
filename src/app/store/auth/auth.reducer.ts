import { createAction, Action, on, createReducer } from "@ngrx/store"
import { AuthState } from "./auth.state";


const initialState: AuthState = {
  user: undefined
}

export const authReducer = createReducer(
  initialState,
)
