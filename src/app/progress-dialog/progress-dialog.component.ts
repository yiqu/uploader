import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ProgressData } from './progress-dialog.state';

@Component({
  selector: 'progress-dialog-display',
  templateUrl: 'progress-dialog.component.html',
  styleUrls: ['./progress-dialog.component.scss']
})
export class ProgressDisplayDialog implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProgressDisplayDialog>, @Inject(MAT_DIALOG_DATA) public data: ProgressData) {
  }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
