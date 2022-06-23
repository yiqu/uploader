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
    private ps: ProgressSnackbarService) {
  }

  ngOnInit() {
  }

  onMaximizeClick(): void {
    // this.pds.openDialog({
    //   fileStatus: this.data.fileStatus,
    //   isFilesUploadFinished: this.data.isFilesUploadFinished,
    //   uploadingsAndTotalFiles: this.data.uploadingsAndTotalFiles
    // });
  }

  onCloseSnackbarClick(): void {
    this.ps.dispatchCloseSnackbar();
  }
}
