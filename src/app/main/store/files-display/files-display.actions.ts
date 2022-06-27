import { createAction, props } from "@ngrx/store";
import { FilesDisplayTab } from "./files-display.state";

const SET_USER_FILES_DISPLAY_TAB_ID: string = '[User Files Display/UI] Set user files display tab id';

export const setUserFilesDisplayTabId = createAction(
  SET_USER_FILES_DISPLAY_TAB_ID,
  props<{ tab: FilesDisplayTab }>()
)

