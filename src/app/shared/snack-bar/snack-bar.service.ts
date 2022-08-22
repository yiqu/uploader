import { Direction } from '@angular/cdk/bidi/public-api';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { SnackbarNotificationComponent } from './snack-bar.component';
import { SharedSnackbarServiceData } from './snack-bar.model';

@Injectable({
  providedIn: 'root'
})
export class SnackbarNotificationService {

  private snackRef?: MatSnackBarRef<SnackbarNotificationComponent>;

  get snackbarRef(): MatSnackBarRef<SnackbarNotificationComponent> | undefined {
    return this.snackRef;
  }

  constructor(private snackBar: MatSnackBar) {
  }

  openSnackbar(sbData: SharedSnackbarServiceData): MatSnackBarRef<SnackbarNotificationComponent> {
    this.closeAll();
    this.snackRef = this.snackBar.openFromComponent(SnackbarNotificationComponent, {
      duration: sbData.configData?.duration,
      data: sbData.snackData,
      direction: sbData.configData?.direction ?? 'ltr',
      horizontalPosition: sbData.configData?.horizontalPosition ?? 'center',
      verticalPosition: sbData.configData?.verticalPosition ?? 'bottom'
    });

    return this.snackRef;
  }

  closeAll() {
    this.snackRef?.dismiss();
  }

}
