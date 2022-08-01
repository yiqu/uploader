import { createAction, props } from "@ngrx/store";
import { CRUDMode } from "src/app/shared/models/general.model";
import { NavHeaderList } from "src/app/shared/models/nav-item.model";

const UPDATE_SIDE_NAV_OPTIONS: string = '[Side Nav/UI] Update side navigation options';


export const updateSideNavOptions = createAction(
  UPDATE_SIDE_NAV_OPTIONS,
  props<{crud: CRUDMode, options: NavHeaderList[]}>()
)
