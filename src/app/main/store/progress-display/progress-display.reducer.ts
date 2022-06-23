import { createReducer, on } from '@ngrx/store';
import { UploadProgressState } from './progress-display.state';
import * as fromProgressDisplayActions from './progress-display.actions';


/**
 * Progress Display Initial State
 */
const inititalState: UploadProgressState = {
  progressSnackbarDisplay: false,
  progressDialogDisplay: false
}

export const uploadProgressDisplayReducer = createReducer(
  inititalState,

  on(fromProgressDisplayActions.toggleUploadProgressSnackbar, (state, { status }) => {
    return {
      ...state,
      progressSnackbarDisplay: status
    };
  }),

  on(fromProgressDisplayActions.toggleUploadProgressDialog, (state, { status }) => {
    return {
      ...state,
      progressDialogDisplay: status
    };
  }),
)
