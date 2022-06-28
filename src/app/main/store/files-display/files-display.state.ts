export const FILES_DISPLAY_STORE_KEY: string = 'filesDisplayTabs';

export interface FilesDisplayState {
  tabs: FilesDisplayTab[];
  selectedTabLabel: string;
}

export interface FilesDisplayTab {
  label: string;
  url: string;
  icon: string;
}
