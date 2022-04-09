export const APP_META_DATA_STATE = 'appMetaData';

export interface AppMetaDataState {
  version: string;
}

export interface PackageJson {
  name: string;
  version: string;
}
