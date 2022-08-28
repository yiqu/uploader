import { Component, OnInit, OnDestroy, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogData } from '../services/confirm.service';

@Component({
  selector: 'app-shared-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogConfirmComponent implements OnInit, OnDestroy {

  constructor(
    public dialogRef: MatDialogRef<DialogConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: ConfirmDialogData) {

    }

  ngOnInit() {

  }

  onNoClick(): void {
    this.dialogRef.close(false);
  }

  onYesClick() {
    this.dialogRef.close(true);
  }

  ngOnDestroy() {

  }
}
