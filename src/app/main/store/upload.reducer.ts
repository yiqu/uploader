import { EntityState, createEntityAdapter, Update } from '@ngrx/entity';
import { createReducer, on, Action } from '@ngrx/store';
import { UploadFile } from './upload.state';
import * as fromUploadActions from './upload.actions';


export interface FileUploadEntityState extends EntityState<UploadFile> {
  uploading: boolean;
}

export function selectId(file: UploadFile) {
  return file.id!;
}
export function comparator(a: UploadFile, b: UploadFile) {
  if (a.attachDate && b.attachDate) {
    return a.attachDate < b.attachDate ? 1 : -1;
  }
  return 1;
}
export const adapter = createEntityAdapter<UploadFile>({
  selectId: selectId,
  sortComparer: comparator
})

export const inititalState = adapter.getInitialState<Partial<FileUploadEntityState>>({
  uploading: false
});


export const fileUploadEntityReducer = createReducer(
  inititalState,

  on(fromUploadActions.uploadFileStart, (state, { file, fileId }) => {
    const fileToAdd: UploadFile = {
      attachDate: new Date().getTime(),
      dateModified: file.lastModified,
      file: file,
      fileName: file.name,
      fileSize: file.size,
      id: fileId,
      completed: false,
      progress: 0,
      downloadUrl: undefined
    };
    return adapter.addOne(fileToAdd, {
      ...state,
      uploading: true
    });
  }),

  on(fromUploadActions.uploadFileUpdateProgress, (state, { fileId, progress, downloadUrl }) => {
    const updatedProgress: Update<UploadFile> = {
      id: fileId,
      changes: {
        progress: progress ?? state.entities[fileId]?.progress,
        downloadUrl: downloadUrl ?? state.entities[fileId]?.downloadUrl,
      }
    };
    return adapter.updateOne(updatedProgress, {
      ...state,
      uploading: true
    });
  }),

  on(fromUploadActions.uploadFileSuccess, (state, { fileId }) => {
    const updatedProgress: Update<UploadFile> = {
      id: fileId,
      changes: {
        completed: true,
        completedDate: new Date().getTime()
      }
    };
    return adapter.updateOne(updatedProgress, {
      ...state,
      uploading: false
    });
  }),



)

export function fileUploadEntityReducerFunc(state: FileUploadEntityState | undefined, action: Action) {
  return fileUploadEntityReducer(state, action);
}
