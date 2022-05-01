import { createAction, props } from "@ngrx/store";
import { MenuItem } from "src/app/shared/models/nav-item.model";

const UPDATE_USER_MENU_OPTIONS: string = '[Top Nav/UI] Update user menu options';


export const updateUserMenuOptions = createAction(
  UPDATE_USER_MENU_OPTIONS,
  props<{options: MenuItem[]}>()
)
