import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { SharedProgressSnackbarComponent } from './progress-snackbar.component';

@Injectable({
  providedIn: 'root'
})
export class ProgressSnackbarService {

  private defaultHorizontalPosition: MatSnackBarHorizontalPosition = 'right';
  private defaultVerticalPosition: MatSnackBarVerticalPosition = 'bottom';

  public currentSnackbarRef?: MatSnackBarRef<SharedProgressSnackbarComponent>;

  constructor(private snackBar: MatSnackBar) {
  }

  public getProgressSnackbar(progressData: any): MatSnackBarRef<SharedProgressSnackbarComponent> {
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
