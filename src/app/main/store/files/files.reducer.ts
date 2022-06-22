import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { PhotoData, UploadFile } from '../upload/upload.state';
import * as fromFilesActions from './files.actions';


export interface FilesEntityState extends EntityState<PhotoData> {
  apiWorking: boolean;
  error: boolean;
  errMsg: string;
}

export function selectId(file: PhotoData) {
  return file.id!;
}

export function comparator(a: PhotoData, b: PhotoData) {
  if (a.dateUploaded && b.dateUploaded) {
    return a.dateUploaded < b.dateUploaded ? 1 : -1;
  }
  return 1;
}

export const adapter = createEntityAdapter<PhotoData>({
  selectId: selectId,
  sortComparer: comparator
})

export const inititalState = adapter.getInitialState<Partial<FilesEntityState>>({
  apiWorking: false,
  errMsg: undefined,
  error: false
});


export const filesEntityReducer = createReducer(
  inititalState,

  on(fromFilesActions.getUserFilesStart, (state) => {
    return {
      ...state,
      apiWorking: true
    };
  }),

  on(fromFilesActions.getUserFilesSuccess, (state, { files }) => {
    return adapter.setAll(files, {
      ...state,
      apiWorking: false
    });
  }),

  on(fromFilesActions.noUserLoggedInFetchFiles, (state) => {
    return adapter.removeAll({
      ...state,
      apiWorking: false
    });
  })

)

export function filesEntityReducerFunc(state: FilesEntityState | undefined, action: Action) {
  return filesEntityReducer(state, action);
}
