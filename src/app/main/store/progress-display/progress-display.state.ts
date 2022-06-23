import { DialogAction } from "src/app/progress-dialog/progress-dialog.state";

export const UPLOAD_PROGRESS_DISPLAY_STORE_KEY: string = 'uploadProgressDialogSnackbar';

export interface UploadProgressState {
  progressDialogDisplay?: boolean;
  progressSnackbarDisplay: boolean;
}
