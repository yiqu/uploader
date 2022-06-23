import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarRef, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { ProgressData } from '../progress-dialog/progress-dialog.state';
import { AppState } from '../store/global/app.reducer';
import { SharedProgressSnackbarComponent } from './progress-snackbar.component';
import * as fromProgressDisplayActions from '../main/store/progress-display/progress-display.actions';


@Injectable({
  providedIn: 'root'
})
export class ProgressSnackbarService {

  private defaultHorizontalPosition: MatSnackBarHorizontalPosition = 'center';
  private defaultVerticalPosition: MatSnackBarVerticalPosition = 'bottom';

  public currentSnackbarRef?: MatSnackBarRef<SharedProgressSnackbarComponent>;

  constructor(private snackBar: MatSnackBar, private store: Store<AppState>) {
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

  public closeProgressSnackbar(): void {
    this.currentSnackbarRef?.dismiss();
  }

  public dispatchCloseSnackbar() {
    this.store.dispatch(fromProgressDisplayActions.toggleUploadProgressSnackbar({ status: false }));
  }

}
