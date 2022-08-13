export const APP_VERSION_CHECK_STATE = 'appVersionCheck';

export interface AppVersionCheckState {
  version?: string;
  isOutdated: boolean;
  checkDuration: number;
  lastCheckDate: number;
}

