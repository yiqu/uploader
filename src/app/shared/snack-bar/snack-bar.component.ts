import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBarRef, MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';
import { SnackbarActionButton, SnackbarData } from './snack-bar.model';

@Component({
  selector: 'shared-snack-bar',
  templateUrl: 'snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackbarNotificationComponent implements OnInit {

  actionButtons: SnackbarActionButton[] = [];
  snackMessage: string = 'Notification:';
  hasAction: boolean = false;

  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackbarData,
    private progressRef: MatSnackBarRef<SnackbarNotificationComponent>,) {
      this.actionButtons = this.data.actionBtns ? this.data.actionBtns : [];
      this.snackMessage = this.data.message;
      this.hasAction = !!this.data.hasAction;
  }

  ngOnInit() {
  }

  actionBtnClick(btnId: string) {
    switch (btnId) {
      case "Version Refresh": {
        this.progressRef.dismiss();
        window.location.reload();
        break;
      }
      case "Close": {
        this.progressRef.dismiss();
        break;
      }
    }
  }
}
