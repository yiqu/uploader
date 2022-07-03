import { createAction, props } from "@ngrx/store";
import { FilesDisplayTab } from "./files-display.state";

const SET_USER_FILES_DISPLAY_TAB_ID: string = '[User Files Display/UI] Set user files display tab id';
const SET_PAGE: string = '[User Files Display/Table] Set page';
const SET_COUNT_PER_PAGE: string = '[User Files Display/Table] Set display count per page';
const SET_TOTAL_COUNT: string = '[User Files Display/Table] Set total count';


export const setUserFilesDisplayTabId = createAction(
  SET_USER_FILES_DISPLAY_TAB_ID,
  props<{ tab?: FilesDisplayTab }>()
)

export const setCurrentTablePage = createAction(
  SET_PAGE,
  props<{ currentPage: number }>()
)

export const setDisplayCountPerPage = createAction(
  SET_COUNT_PER_PAGE,
  props<{ count: number }>()
)

export const setTotalCount = createAction(
  SET_TOTAL_COUNT,
  props<{ total: number }>()
)
