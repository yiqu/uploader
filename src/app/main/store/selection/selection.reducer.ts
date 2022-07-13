import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { PhotoData, TABLE_TOGGLE_ACTION, UploadFile } from '../upload/upload.state';
import * as fromSelectionActions from './selection.actions';


export interface FilesTableSelectionEntityState extends EntityState<PhotoData> {
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

export const inititalState = adapter.getInitialState<Partial<FilesTableSelectionEntityState>>({
  apiWorking: false,
  errMsg: undefined,
  error: false
});


export const filesTableSelectionReducer = createReducer(
  inititalState,

  on(fromSelectionActions.filesTableSelectionToggle, (state, { photo, action }) => {
    if (action === TABLE_TOGGLE_ACTION.ADD) {
      return adapter.addMany(photo, {
        ...state
      });
    } else if (action === TABLE_TOGGLE_ACTION.REMOVE) {
      const keysToRemove: string[] = photo.map((res: PhotoData) => {
        return res.id
      });
      return adapter.removeMany(keysToRemove, {
        ...state
      });
    } else {
      return {
        ...state
      }
    }
  }),

  on(fromSelectionActions.resetTableSelections, (state) => {
    return adapter.removeAll({
      ...state,
      apiWorking: false,
    });
  }),


)

export function filesTableSelectionReducerFunc(state: FilesTableSelectionEntityState | undefined, action: Action) {
  return filesTableSelectionReducer(state, action);
}
