import { createReducer, on } from '@ngrx/store';
import { FilesDisplayState } from './files-display.state';
import * as fromFilesDisplayTabActions from './files-display.actions';


const inititalState: FilesDisplayState = {
  tabs: [{
    label: 'Table',
    url: 'table'
  }, {
    label: 'Galleria',
    url: 'galleria'
  }],
  selectedTabId: 0,
  selectedTabLabel: 'Table'
}

export const filesDisplayReducer = createReducer(
  inititalState,

  on(fromFilesDisplayTabActions.setUserFilesDisplayTabId, (state, { tab }) => {
    const tabId = 0;
    return {
      ...state,
      selectedTabLabel: tab.label
    };
  }),
)
