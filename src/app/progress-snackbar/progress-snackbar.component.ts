import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shared-progress-snackbar',
  templateUrl: 'progress-snackbar.component.html',
  styleUrls: ['./progress-snackbar.component.scss']
})
export class SharedProgressSnackbarComponent implements OnInit {

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: any,
    private progressRef: MatSnackBarRef<SharedProgressSnackbarComponent>) {
  }

  ngOnInit() {
  }
}
