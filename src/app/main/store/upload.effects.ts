import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, take, filter, finalize } from 'rxjs/operators';
import { Update } from '@ngrx/entity';
import { concat, merge, Observable, of, throwError, timer } from 'rxjs';
import { FirebasePromiseError } from 'src/app/shared/models/firebase.model';
import { Action } from '@ngrx/store';
import * as fromUploadActions from './upload.actions';
import { FileUploadService } from '../upload.service';
import { AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { UploadTask } from 'src/app/shared/services/storage.service';
import { UploadTaskResult } from './upload.state';



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

        const taskRef: UploadTask = this.us.uploadFile(file, fileName);
        let arr = [
          taskRef.task.percentageChanges().pipe(
            map((percent) => {
              return {
                fileId,
                percent
              };
            }),
            finalize(() => {
              console.log('Upload done')
            })
          ),
          taskRef.ref.getDownloadURL().pipe(
            map((url) => {
              return {
                fileId,
                url
              };
            }),
            finalize(() => {
              console.log('Fetch URL done')
            })
          )
        ];
        const percentAndUrl: Observable<UploadTaskResult> = concat(...arr);
        return percentAndUrl.pipe(
          map((res) => {
            if (res.url) {
              return fromUploadActions.uploadFileUpdateProgress({ fileId, downloadUrl: res.url });
            } else if (res.percent !== null || res.percent !== undefined) {
              return fromUploadActions.uploadFileUpdateProgress({ fileId, progress: res.percent });
            } else {
              return fromUploadActions.uploadFileUpdateProgress({ fileId });
            }
          }),
          catchError((err) => {
            console.error("Upload Error!" + err);
            return of(fromUploadActions.uploadFileFailure({ errMsg: err }));
          }),
          finalize(() => {
            console.log("url and upload done")
          })
        );
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

  // startGetDownloadUrl$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(fromUploadActions.uploadFileSuccess),
  //     map((res) => {
  //       return fromUploadActions.getDownloadUrlStart({ ref: res.taskRef, fileId: res.fileId });
  //     })
  //   );
  // });

  // getDownloadUrlSuccess$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(fromUploadActions.getDownloadUrlStart),
  //     mergeMap((res) => {
  //       return res.ref.ref.getDownloadURL().pipe(
  //         map((url) => {
  //           console.log(url, res.fileId)
  //           return fromUploadActions.getDownloadUrlSuccess({ urlString: url, fileId: res.fileId });
  //         })
  //       )
  //     })
  //   );
  // });


}



export const fileUploadEntityEffect = [
  FileUploadEffects
]
