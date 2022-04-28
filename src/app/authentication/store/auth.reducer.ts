import { AuthState } from "./auth.models";
import { createReducer, on } from '@ngrx/store';
import * as AuthActions from './auth.actions';

/**
 * Auth Initial State
 *
 * User state inital: UNDEFINED. after fetch if not logged in: null
 */
const inititalState: AuthState = {
  verifiedUser: undefined,
  loading: false,
  error: false,
  errorMsg: undefined
}

export const authReducer = createReducer(
  inititalState,
  // Login start
  on(AuthActions.authLoginStart, (state, { authInfo }) => {
    return {
      ...state,
    }
  }),
  // Firebase auth valueChanges logged in with a user
  on(AuthActions.authLoginSuccess, (state, { verifiedUser }) => {
    const u = verifiedUser;
    return {
      ...state,
      loading: false,
      verifiedUser: u,
      error: false,
    }
  }),
  // Login done
  on(AuthActions.authLoginFirebaseRequestSuccess, (state) => {
    return {
      ...state,
    }
  }),

  on(AuthActions.authLoginFailure, (state, { errorMsg }) => {
    return {
      ...state,
      loading: false,
      verifiedUser: null,
      error: true,
      errorMsg: errorMsg
    }
  }),

  on(AuthActions.authLogoutStart, (state) => {
    return {
      ...state,
      verifiedUser: null,
      loading: true,
    }
  }),

  on(AuthActions.authLogoutSuccess, (state) => {
    return {
      ...state,
      loading: false,
      verifiedUser: null,
      error: false,
    }
  }),

  on(AuthActions.authUserRegistrationFromEmailStart, (state, { userEmail, password, saveSession }) => {
    return {
      ...state,
      loading: true,
      verifiedUser: null,
      error: false,
      signUpCreds: {
        password,
        saveSession,
        userEmail
      }
    }
  }),

  on(AuthActions.authUserRegistrationFromEmailSuccess, (state) => {
    return {
      ...state,
      loading: false,
      verifiedUser: null,
      error: false,
    }
  }),

  on(AuthActions.authUserRegistrationFromEmailFailure, (state, { errorMsg }) => {
    return {
      ...state,
      loading: false,
      verifiedUser: null,
      error: true,
      errorMsg: errorMsg
    }
  }),

  on(AuthActions.authAddNewRegisteredUserToDatabase, (state, { user }) => {
    return {
      ...state,
      loading: true,
      verifiedUser: user,
      error: false,
    }
  }),

  on(AuthActions.authAddNewRegisteredUserToDbFail, (state) => {
    return {
      ...state,
      loading: false,
      verifiedUser: null,
      error: true,
      errorMsg: "Error occured trying to add new user to Firebase"
    }
  }),

  on(AuthActions.authAddNewRegisteredUserToDbSuccess, (state) => {
    return {
      ...state,
      loading: false,
      error: false,
    }
  }),

  on(AuthActions.authClearErrorsByUser, (state) => {
    return {
      ...state,
      error: false,
    }
  }),

  on(AuthActions.authThrowErrorMessageByUser, (state, { errorMsg }) => {
    let msg: string = "Error occured.";
    if (errorMsg) {
      msg = errorMsg;
    }
    return {
      ...state,
      loading: false,
      error: true,
      errorMsg: msg
    }
  }),


)
