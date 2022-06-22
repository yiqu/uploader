import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ProgressData } from '../progress-dialog/progress-dialog.state';
import { SharedProgressSnackbarComponent } from './progress-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class ProgressSnackbarService {

  private defaultHorizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private defaultVerticalPosition: MatSnackBarVerticalPosition = 'bottom';

  public currentSnackbarRef?: MatSnackBarRef<SharedProgressSnackbarComponent>;

  constructor(private snackBar: MatSnackBar) {
  }

  public getProgressSnackbar(progressData: ProgressData): MatSnackBarRef<SharedProgressSnackbarComponent> {
    this.currentSnackbarRef?.dismiss();
    this.currentSnackbarRef = this.snackBar.openFromComponent(SharedProgressSnackbarComponent,
      {
        horizontalPosition: this.defaultHorizontalPosition,
        verticalPosition: this.defaultVerticalPosition,
        duration: 0,
        panelClass: 'progress-snackbar',
        data: progressData
      }
    );
    return this.currentSnackbarRef;
  }

}
