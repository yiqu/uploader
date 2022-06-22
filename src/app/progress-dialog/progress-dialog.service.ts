import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ProgressDisplayDialog } from './progress-dialog.component';
import { ProgressData } from './progress-dialog.state';
import { take } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProgressDialogService {

  displayRef?: MatDialogRef<ProgressDisplayDialog>;

  constructor(public dialog: MatDialog) {
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

    this.displayRef.afterClosed().pipe(
      take(1)
    ).subscribe((res) => {
      console.log(res)
    });

    return this.displayRef;
  }
}
