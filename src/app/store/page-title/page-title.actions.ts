import { createAction, props } from "@ngrx/store";

const SET_PAGE_TITLE: string = '[Page Title/UI] Set page title';
const SET_MAIN_PAGE_TITLE: string = '[Page Title/UI] Set main page title';


export const setPageTitle = createAction(
  SET_PAGE_TITLE,
  props<{mainTitle?: string, subTitle?: string[]}>()
)

export const setMainPageTitle = createAction(
  SET_MAIN_PAGE_TITLE,
  props<{mainTitle: string}>()
)
