import { createAction, props } from "@ngrx/store";

const TOGGLE_UPLOAD_PROGRESS_SNACKBAR: string = '[Progress Display/UI] Toggle upload progress snackbar';
const TOGGLE_UPLOAD_PROGRESS_DIALOG: string = '[Progress Display/UI] Toggle upload progress dialog';


export const toggleUploadProgressSnackbar = createAction(
  TOGGLE_UPLOAD_PROGRESS_SNACKBAR,
  props<{status: boolean}>()
)

export const toggleUploadProgressDialog = createAction(
  TOGGLE_UPLOAD_PROGRESS_DIALOG,
  props<{status: boolean}>()
)
