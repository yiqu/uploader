import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressDisplayDialog } from './progress-dialog.component';
import { ProgressData } from './progress-dialog.state';
import { take } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from '../store/global/app.reducer';
import * as fromProgressDisplayActions from '../main/store/progress-display/progress-display.actions';


@Injectable({
  providedIn: 'root'
})
export class ProgressDialogService {

  displayRef?: MatDialogRef<ProgressDisplayDialog>;

  constructor(public dialog: MatDialog, private store: Store<AppState>) {
  }

  openDialog(progressData: ProgressData): MatDialogRef<ProgressDisplayDialog> {
    this.displayRef?.close();
    this.displayRef = this.dialog.open(ProgressDisplayDialog, {
      minWidth: 'calc(100% - 50rem)',
      height: 'calc(100% - 10rem)',
      panelClass: 'progress-dialog-display',
      data: progressData,
      autoFocus: false
    });
    return this.displayRef;
  }

  closeDialog(): void {
    this.displayRef?.close();
  }

  dispatchCloseDialog() {
    this.store.dispatch(fromProgressDisplayActions.toggleUploadProgressDialog({ status: false }));
  }
}
