import { createAction, props } from "@ngrx/store";
import { PhotoDataRowSelect } from "../upload/upload.state";

const FILES_TABLE_SELECTION_TOGGLE: string = '[User Files Table/API] Toggle selected files';
const RESET_TABLE_SELECTION: string = '[Upload/API] Reset all selected files';


export const filesTableSelectionToggle = createAction(
  FILES_TABLE_SELECTION_TOGGLE,
  props<PhotoDataRowSelect>()
)

export const resetTableSelections = createAction(
  RESET_TABLE_SELECTION
)

