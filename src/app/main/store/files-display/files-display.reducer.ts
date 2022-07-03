import { createReducer, on } from '@ngrx/store';
import { FilesDisplayState } from './files-display.state';
import * as fromFilesDisplayTabActions from './files-display.actions';

const DEFAULT_BUTTON_LIST = [
  {
    id: 'refresh',
    label: 'Refresh',
    icon: 'refresh'
  }
]

const DEFAULT_TAB_LIST = [
  {
    label: 'Table',
    url: 'table',
    icon: 'table_view'
  }, {
    label: 'Galleria',
    url: 'galleria',
    icon: 'photo_library'
  }
]

const inititalState: FilesDisplayState = {
  tabs: DEFAULT_TAB_LIST,
  selectedTabLabel: 'Table',
  actionButtons: DEFAULT_BUTTON_LIST,
  pagination: {
    countPerPage: 30,
    currentPage: 0,
    totalCount: 0
  },
  queryParams: {}
}

export const filesDisplayReducer = createReducer(
  inititalState,

  on(fromFilesDisplayTabActions.setUserFilesDisplayTabId, (state, { tab }) => {
    const tabId = 0;
    return {
      ...state,
      selectedTabLabel: tab?.label ?? state.selectedTabLabel
    };
  }),

  on(fromFilesDisplayTabActions.setCurrentTablePage, (state, { currentPage }) => {
    const tabId = 0;
    return {
      ...state,
      pagination: {
        ...state.pagination,
        currentPage: currentPage
      }
    };
  }),

  on(fromFilesDisplayTabActions.setDisplayCountPerPage, (state, { count }) => {
    const tabId = 0;
    return {
      ...state,
      pagination: {
        ...state.pagination,
        countPerPage: count
      }
    };
  }),

  on(fromFilesDisplayTabActions.setTotalCount, (state, { total }) => {
    const tabId = 0;
    return {
      ...state,
      pagination: {
        ...state.pagination,
        totalCount: total
      }
    };
  }),
)
