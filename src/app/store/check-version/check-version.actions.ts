import { createAction, props } from '@ngrx/store';

const VERSION_CHECK_TIMER_START: string = "[App/Version/Check] Start check timer";
const VERSION_CHECK_SUCCESS: string = "[App/Version/Check] Version check successful";
const SHOW_OUTDATED_ALERT: string = "[App/Version/Check] Show version is outdated";

export const startVersionCheckTimer = createAction(
  VERSION_CHECK_TIMER_START,
  props<{duration: number}>()
)

export const versionCheckSuccess = createAction(
  VERSION_CHECK_SUCCESS,
  props<{version: string}>()
)

export const showVersionIsOutdated = createAction(
  SHOW_OUTDATED_ALERT,
  props<{version: string}>()
)
