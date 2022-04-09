import { StoreModule, ActionReducer, MetaReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { LocalStorageConfig, localStorageSync } from 'ngrx-store-localstorage';


// Log all Actions from ngrx
export function logUserActions(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {

    if (action.type.startsWith("[")) {
      console.log('state:', state);
      console.log('action:', action.type);
    }

    return reducer(state, action);
  };
}

export function logNgRxActions(reducer: ActionReducer<any>): ActionReducer<any> {
  return function(state, action) {

    if (action.type.startsWith("@ngrx")) {
      console.log('state:', state);
      console.log('action:', action.type);
    }

    return reducer(state, action);
  };
}

// create ngrx local storage config
export const localStorageSyncConfig: LocalStorageConfig = {
  keys: [
    {
      //settings: [{showHideLists: ['hiding']}],
      keyName: ['allTabSelections', 'currentSelection']
    }
  ],
  storageKeySerializer: (key) => {
    return 'udemyau-' + key;
  },
  rehydrate: true
};
export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync(localStorageSyncConfig)(reducer);
}

export let metaReducers: MetaReducer<any>[] = [];
//metaReducers.push(localStorageSyncReducer);

