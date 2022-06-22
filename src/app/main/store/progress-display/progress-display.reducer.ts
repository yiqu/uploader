import { createReducer, on } from '@ngrx/store';
import { UploadProgressState } from './progress-display.state';

/**
 * Progress Display Initial State
 */
const inititalState: UploadProgressState = {
  isSnackbarShown: true,
  progressDialogDisplay: undefined
}

export const uploadProgressDisplayReducer = createReducer(
  inititalState,

)
