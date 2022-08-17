import { ErrorHandler, Injectable } from "@angular/core";

const chunkFailedMessage: RegExp = /Loading chunk [\d]+ failed/;
const chunkFailedPreText: string = 'ChunkLoadError: Loading chunk';

@Injectable()
export class GlobalErrorHandler extends ErrorHandler {
  constructor() {
    super();
  }

  override handleError(error: any): void {
    console.log("Error occured:");
    if (error.message) {
      // if lazy load chunk error
      if ((error.message + '').includes(chunkFailedPreText)) {
        if (confirm("New version available. Load New Version?")) {
          window.location.reload();
        }
      }
    }
    super.handleError(error);
  }

}
