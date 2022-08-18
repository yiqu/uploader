import { MatSnackBarConfig } from "@angular/material/snack-bar";

export interface SnackbarData {
  message: string;
  hasAction?: boolean;
  actionBtns?: SnackbarActionButton[];
}

export interface SharedSnackbarServiceData {
  snackData: SnackbarData;
  configData?: MatSnackBarConfig;
}

export interface SnackbarActionButton {
  display: string;
  id: string;
}
