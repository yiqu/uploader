import { createReducer, on } from '@ngrx/store';
import { FilesDisplayState } from './files-display.state';
import * as fromFilesDisplayTabActions from './files-display.actions';

export const DEFAULT_BUTTON_LIST = [
  {
    id: 'refresh',
    label: 'Refresh',
    icon: 'refresh'
  }
]

export const WHEN_HAS_SELECTED_BUTTON_LIST = [
  {
    id: 'delete',
    label: 'Delete',
    icon: 'delete'
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
    totalCount: 0,
    totalPages: 0
  },
  queryParams: {}
}

export const filesDisplayReducer = createReducer(
  inititalState,

  on(fromFilesDisplayTabActions.setUserFilesDisplayTabId, (state, { tab }) => {
    return {
      ...state,
      selectedTabLabel: tab?.label ?? state.selectedTabLabel
    };
  }),

  on(fromFilesDisplayTabActions.setCurrentTablePage, (state, { currentPage }) => {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        currentPage: currentPage
      }
    };
  }),

  on(fromFilesDisplayTabActions.setDisplayCountPerPage, (state, { count }) => {
    return {
      ...state,
      pagination: {
        ...state.pagination,
        countPerPage: count
      }
    };
  }),

  on(fromFilesDisplayTabActions.setTotalCount, (state, { total }) => {
    const totalPages: number = Math.ceil(total / 30);

    return {
      ...state,
      pagination: {
        ...state.pagination,
        totalCount: total,
        totalPages
      }
    };
  }),
)
