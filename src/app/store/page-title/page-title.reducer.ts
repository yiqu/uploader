import { createAction, Action, on, createReducer } from "@ngrx/store"
import { environment } from "src/environments/environment.prod"
import { PageTitleState } from "./page-title.state"
import * as fromPageTitleActions from './page-title.actions';

const initialState: PageTitleState = {
  mainTitle: environment.appTitle,
  subTitle: undefined,
  titleDisplay: environment.appTitle
}

export const pageTitleReducer = createReducer(
  initialState,

  on(fromPageTitleActions.setPageTitle, (state, { mainTitle, subTitle }) => {
    let titleResult = environment.appTitle;
    const appTitle = environment.appTitle ?? 'Angular App';

    // Set main title text
    let firstSegmentText = '';
    if (mainTitle) {
      firstSegmentText = mainTitle + ' | ';
    }

    // Set sub text
    let subText = '';
    if (subTitle && subTitle.length > 0) {
      subText = subTitle.join(' | ');
    };
    if (subText) {
      subText = subText + '| ';
    }

    titleResult = subText + firstSegmentText + appTitle;
    return {
      ...state,
      mainTitle,
      subTitle,
      titleDisplay: titleResult
    }
  })

)
