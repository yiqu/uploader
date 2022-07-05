export const FILES_DISPLAY_STORE_KEY: string = 'filesDisplayTabs';

export interface FilesDisplayState {
  tabs: FilesDisplayTab[];
  selectedTabLabel: string;
  actionButtons: ActionButton[];
  queryParams?: QueryParam;
  pagination: Pagination;
}

export interface FilesDisplayTab {
  label: string;
  url: string;
  icon: string;
}

export interface FilesDisplayTabsState {
  tabs: FilesDisplayTab[];
  selectedTabLabel: string;
}

export interface ActionButton {
  id: string;
  label: string;
  icon: string;
}

export interface QueryParam {
  [key: string]: any;
}

export interface Pagination {
  currentPage: number;
  countPerPage: number;
  totalCount: number;
  totalPages: number;
}
