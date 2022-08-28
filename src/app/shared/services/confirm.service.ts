import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Observable, of, take } from 'rxjs';
import { DialogConfirmComponent } from '../confirm-dialog/dialog.component';

/**
 * Async modal dialog service
 * DialogService makes this app easier to test by faking this service.
 * TODO: better modal implementation that doesn't use window.confirm
 */
@Injectable({
  providedIn: 'root',
})
export class WindoConfirmService {

  public dialogRefSingleton: MatDialogRef<DialogConfirmComponent, any> | undefined;

  constructor(public dialog: MatDialog) {
  }

  /**
   * Ask user to confirm an action. `message` explains the action and choices.
   * Returns observable resolving to `true`=confirm or `false`=cancel
   */
  confirm(message?: string): Observable<boolean> {
    const confirmation = window.confirm(message || 'Is it OK?');

    return of(confirmation).pipe(
      take(1)
    );
  }

  getDialogConfirm(title?: string, confirmMessage?: string): Observable<any> {
    const data: ConfirmDialogData = {
      actionName: confirmMessage ?? 'proceed?',
      title: title ?? 'Confirmation'
    };
    this.dialogRefSingleton = this.dialog.open(DialogConfirmComponent, {
      data: data,
      autoFocus: false
    });
    return this.dialogRefSingleton.afterClosed();
  }
}

export interface ConfirmDialogData {
  actionName?: string;
  title?: string;
}
