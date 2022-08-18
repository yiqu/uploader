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
    console.log("Error occured:");
    if (error) {
      // if lazy load chunk error
      if ((error?.message + '').includes(chunkFailedPreText)) {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      } else {
        this.sbs.openSnackbar({
          snackData: {
            message: 'New version available. Load New Version?',
            hasAction: true,
            actionBtns: [{
              display: 'Yes', id: 'close'
            }]
          },
          configData: {
            verticalPosition: 'top',
            duration: 0
          }
        });
      }
    }
    super.handleError(error);
  }

}
