import { createAction, props } from '@ngrx/store';

const SET_APP_VERSION_START: string = "[App/Version] Set app version start";
const SET_APP_VERSION_SUCCESS: string = "[App/Version] Set app version successful";
const SET_APP_VERSION_FAILED: string = "[App/Version] Set app version failed";

export const setAppVersionStart = createAction(
  SET_APP_VERSION_START,
)

export const setAppVersionFailed = createAction(
  SET_APP_VERSION_FAILED,
  props<{errMsg: string}>()
)


export const setAppVersionSuccess = createAction(
  SET_APP_VERSION_SUCCESS,
  props<{version: string}>()
)
