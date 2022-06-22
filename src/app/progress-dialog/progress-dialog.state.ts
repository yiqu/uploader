import { Observable } from "rxjs";
import { FilesUploadingStatus, UploadFile } from "../main/store/upload/upload.state";

export enum DialogAction {
  MINIMIZE = 'minimize',
  MAXIMIZE = 'maximize',
  CLOSE = 'close'
}

export interface ProgressData {
  fileStatus: Observable<UploadFile[]>;
  uploadingsAndTotalFiles: Observable<FilesUploadingStatus>;
  isFilesUploadFinished: Observable<boolean>;
}

export interface DialogCloseData {
  action: DialogAction;
}

