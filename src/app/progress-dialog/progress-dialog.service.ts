import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressDisplayDialog } from './progress-dialog.component';
import { ProgressData } from './progress-dialog.state';

@Injectable({
  providedIn: 'root'
})
export class ProgressDialogService {

  displayRef?: MatDialogRef<ProgressDisplayDialog>;

  constructor(public dialog: MatDialog) {
  }

  openDialog(progressData: ProgressData): MatDialogRef<ProgressDisplayDialog> {
    this.displayRef = this.dialog.open(ProgressDisplayDialog, {
      minWidth: '450px',
      minHeight: '250px',
      maxHeight: '50%',
      panelClass: 'progress-dialog-display',
      data: progressData
    });
    return this.displayRef;
  }
}
