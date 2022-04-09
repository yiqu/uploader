import { createAction, props } from "@ngrx/store";

const ATTACH_FILE: string = '[Upload/UI] attach a file';

const UPLOAD_FILE_START: string = '[Upload/API] Upload file start';
const UPLOAD_FILE_SUCCESS: string = '[Upload/API] Upload file successful';
const UPLOAD_FILE_FAILED: string = '[Upload/API] Upload file failed';

const UPLOAD_FILE_UPDATE_PROGRESS: string = '[Upload/API] Upload file progress update';

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
  props<{fileId: string, progress: number}>()
)
