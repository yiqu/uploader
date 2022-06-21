import { Observable } from "rxjs";
import { FilesUploadingStatus, UploadFile } from "../main/store/upload.state";

export interface ProgressData {
  fileStatus: Observable<UploadFile[]>;
  uploadingsAndTotalFiles: Observable<FilesUploadingStatus>;
  isFilesUploadFinished: Observable<boolean>;
}
