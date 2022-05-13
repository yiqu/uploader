import { createAction, props } from "@ngrx/store";
import { IVerifiedUser } from "src/app/shared/models/user.model";
import { PhotoData } from "./upload.state";

const GET_USER_FILES_START: string = '[Upload/API] Get user files start';
const GET_USER_FILES_SUCCESS: string = '[Upload/API] Get user files successful';
const GET_USER_FILES_FAILURE: string = '[Upload/API] Get user files failed';

const NO_USER_LOGGED_IN: string = '[Upload/API] User is not logged in to fetch files';

export const getUserFilesStart = createAction(
  GET_USER_FILES_START,
  props<{user: IVerifiedUser | null | undefined}>()
)

export const getUserFilesSuccess = createAction(
  GET_USER_FILES_SUCCESS,
  props<{files: PhotoData[]}>()
)

export const getUserFilesFailed = createAction(
  GET_USER_FILES_FAILURE,
  props<{errMsg: string}>()
)

export const noUserLoggedInFetchFiles = createAction(
  NO_USER_LOGGED_IN
)
