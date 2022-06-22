import { Component, Inject, OnInit} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogAction, DialogCloseData, ProgressData } from './progress-dialog.state';

@Component({
  selector: 'progress-dialog-display',
  templateUrl: 'progress-dialog.component.html',
  styleUrls: ['./progress-dialog.component.scss']
})
export class ProgressDisplayDialog implements OnInit {

  minimize = DialogAction.MINIMIZE;
  close = DialogAction.CLOSE;

  constructor(
    public dialogRef: MatDialogRef<ProgressDisplayDialog>, @Inject(MAT_DIALOG_DATA) public data: ProgressData) {
  }

  ngOnInit(): void {
  }

  onDialogClose(dialogAction: DialogAction) {
    const closeData: DialogCloseData = {
      action: dialogAction
    };
    this.dialogRef.close(closeData);
  }
}
