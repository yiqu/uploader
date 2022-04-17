import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, take, filter, finalize } from 'rxjs/operators';
import { Update } from '@ngrx/entity';
import { of, throwError, timer } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';
import { Action } from '@ngrx/store';
import * as fromUploadActions from './upload.actions';
import { FileUploadService } from '../upload.service';



@Injectable()
export class FileUploadEffects {

  constructor(public actions$: Actions, private us: FileUploadService) {
  }

  attachFileForUpload$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.attachFile),
      map((fileAttached) => {
        const file: File = fileAttached.file;
        const fileId: string = fileAttached.fileId;
        return fromUploadActions.uploadFileStart({ fileId: fileId, file: file });
      })
    );
  }, { dispatch: true });

  uploadFileStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.uploadFileStart),
      mergeMap((fileData) => {
        const fileId = fileData.fileId;
        const file = fileData.file;
        const fileName = file.name ?? ('File-name-' + new Date().getTime());
        return this.us.uploadFile(file, fileName).pipe(
          map((progress) => {
            return fromUploadActions.uploadFileUpdateProgress({ fileId, progress: progress });
          }),
          catchError((err) => {
            console.error("Upload Error!" + err);
            return of(fromUploadActions.uploadFileFailure({ errMsg: err }));
          }),
          finalize(() => {
            console.log('done')
          })
        )
      })
    );
  });

  uploadFileFinished$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.uploadFileUpdateProgress),
      filter((progress) => {
        return progress.progress === 100;
      }),
      map((res) => {
        const fileId = res.fileId;
        return fromUploadActions.uploadFileSuccess({ fileId });
      })
    );
  });


}



export const fileUploadEntityEffect = [
  FileUploadEffects
]
