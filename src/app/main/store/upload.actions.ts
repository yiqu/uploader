import { createAction, props } from "@ngrx/store";
import { UploadTask } from "src/app/shared/services/storage.service";

const ATTACH_FILE: string = '[Upload/UI] attach a file';

const UPLOAD_FILE_START: string = '[Upload/API] Upload file start';
const UPLOAD_FILE_UPDATE_PROGRESS: string = '[Upload/API] Upload file progress update';
const UPLOAD_FILE_SUCCESS: string = '[Upload/API] Upload file successful';
const UPLOAD_FILE_FAILED: string = '[Upload/API] Upload file failed';

const GET_DOWNLOAD_URL_START: string = '[Upload/API] Get download url for file start';
const GET_DOWNLOAD_URL_SUCCESS: string = '[Upload/API] Get download url for file successful';
const GET_DOWNLOAD_URL_FAILED: string = '[Upload/API] Get download url for file failed';


export const attachFile = createAction(
  ATTACH_FILE,
  props<{fileId: string, file: File}>()
)

export const uploadFileStart = createAction(
  UPLOAD_FILE_START,
  props<{fileId: string, file: File}>()
)

export const uploadFileSuccess = createAction(
  UPLOAD_FILE_SUCCESS,
  props<{fileId: string}>()
)

export const uploadFileFailure = createAction(
  UPLOAD_FILE_FAILED,
  props<{errMsg: string}>()
)

export const uploadFileUpdateProgress = createAction(
  UPLOAD_FILE_UPDATE_PROGRESS,
  props<{fileId: string, progress?: number | undefined, downloadUrl?: string}>()
)

export const getDownloadUrlStart = createAction(
  GET_DOWNLOAD_URL_START,
  props<{ref: UploadTask, fileId: string}>()
)

export const getDownloadUrlSuccess = createAction(
  GET_DOWNLOAD_URL_SUCCESS,
  props<{urlString: string, fileId: string}>()
)

export const getDownloadUrlFailure = createAction(
  GET_DOWNLOAD_URL_FAILED,
  props<{errMsg: string}>()
)
