import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { ProgressDialogService } from '../progress-dialog/progress-dialog.service';
import { ProgressData } from '../progress-dialog/progress-dialog.state';
import { ProgressSnackbarService } from './progress-snackbar.service';

@Component({
  selector: 'app-shared-progress-snackbar',
  templateUrl: 'progress-snackbar.component.html',
  styleUrls: ['./progress-snackbar.component.scss']
})
export class SharedProgressSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: ProgressData,
    private progressRef: MatSnackBarRef<SharedProgressSnackbarComponent>,
    private ps: ProgressSnackbarService, private ds: ProgressDialogService) {
  }

  ngOnInit() {
  }

  onMaximizeClick(): void {
    this.ds.dispatchToggleDialog(true);
  }

  onCloseSnackbarClick(): void {
    this.ps.dispatchToggleSnackbar(false);
  }
}
