import { createAction, props } from "@ngrx/store";
import { IVerifiedUser } from "src/app/shared/models/user.model";
import { UploadTask } from "src/app/shared/services/storage.service";
import { PhotoData } from "./upload.state";

const ATTACH_FILE: string = '[Upload/UI] attach a file';
const CLEAN_UP_ATTACHED: string = '[Upload/UI] Remove all attached files';

const UPLOAD_FILE_START: string = '[Upload/API] Upload file start';
const UPLOAD_FILE_UPDATE_PROGRESS: string = '[Upload/API] Upload file progress update';
const UPLOAD_FILE_SUCCESS: string = '[Upload/API] Upload file successful';
const UPLOAD_FILE_FAILED: string = '[Upload/API] Upload file failed';

const UPDATE_PHOTO_DB_FOR_USER_START: string = '[Upload/API] Update new photo in user DB start';
const UPDATE_PHOTO_DB_FOR_USER_SUCCESS: string = '[Upload/API] Update new photo in user DB successful';
const UPDATE_PHOTO_DB_FOR_USER_FAILED: string = '[Upload/API] Update new photo in user DB failed';


export const attachFile = createAction(
  ATTACH_FILE,
  props<{fileId: string, file: File}>()
)

export const cleanUpAttachedFiles = createAction(
  CLEAN_UP_ATTACHED
)

export const uploadFileStart = createAction(
  UPLOAD_FILE_START,
  props<{fileId: string, file: File}>()
)

export const uploadFileSuccess = createAction(
  UPLOAD_FILE_SUCCESS,
  props<{fileId: string, fileSize: number, uploadDate: number, downloadUrl: string}>()
)

export const uploadFileFailure = createAction(
  UPLOAD_FILE_FAILED,
  props<{errMsg: string}>()
)

export const uploadFileUpdateProgress = createAction(
  UPLOAD_FILE_UPDATE_PROGRESS,
  props<{ fileId: string, fileSize: number, uploadDate: number, progress?: number | undefined,
    downloadUrl?: string }>()
)

export const updateUserDBWithPhotoStart = createAction(
  UPDATE_PHOTO_DB_FOR_USER_START,
  props<{photoData: PhotoData}>()
)

export const updateUserDBWithPhotoSuccess = createAction(
  UPDATE_PHOTO_DB_FOR_USER_SUCCESS,
  props<{photoData: PhotoData}>()
)

export const updateUserDBWithPhotoFailure = createAction(
  UPDATE_PHOTO_DB_FOR_USER_FAILED,
  props<{errMsg: string}>()
)
