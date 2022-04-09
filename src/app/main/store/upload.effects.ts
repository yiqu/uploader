import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, take, filter } from 'rxjs/operators';
import { Update } from '@ngrx/entity';
import { throwError, timer } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';
import { Action } from '@ngrx/store';
import * as fromUploadActions from './upload.actions';



@Injectable()
export class FileUploadEffects {

  constructor(public actions$: Actions) {
  }

  attachFileForUpload$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.attachFile),
      map((fileAttached) => {
        const file: File = fileAttached.file;
        const fileId: string = fileAttached.fileId;
        console.log(fileId)
        return fromUploadActions.uploadFileStart({ fileId: fileId, file: file });
      })
    );
  }, {dispatch: true});

  uploadFileStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.uploadFileStart),
      mergeMap((fileData) => {
        const fileId = fileData.fileId;
        const file = fileData.file;
        return timer(0, 500).pipe(
          take(10),
          map((res) => {
            const prog = (res+1) * 10;
            return fromUploadActions.uploadFileUpdateProgress({ fileId, progress: prog });
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
