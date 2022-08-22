import { ErrorHandler, Injectable } from "@angular/core";
import { SnackbarNotificationService } from "../shared/snack-bar/snack-bar.service";

const chunkFailedMessage: RegExp = /Loading chunk [\d]+ failed/;
const chunkFailedPreText: string = 'ChunkLoadError: Loading chunk';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor(private sbs: SnackbarNotificationService) {
    super();
  }

  override handleError(error: any): void {
    if (error) {
      // if lazy load chunk error
      if ((error?.message + '').includes(chunkFailedPreText)) {
        this.sbs.openSnackbar({
          snackData: {
            message: 'New version available. Load new version?',
            hasAction: true,
            actionBtns: [
              {
                display: 'Version Refresh', id: 'refresh'
              },
              {
                display: 'Close', id: 'close'
              }
            ]
          },
          configData: {
            verticalPosition: 'top',
            duration: 0,
            horizontalPosition: 'start'
          }
        })
      }
    }
    super.handleError(error);
  }

}
