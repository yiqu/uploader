import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
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
import { PhotoData, UploadTaskResult } from './upload.state';
import { FirebaseDocObsAndId } from 'src/app/shared/models/general.model';
import { AuthService } from '../../authentication/auth.service';


@Injectable()
export class FileUploadEffects {

  constructor(public actions$: Actions, private us: FileUploadService, private as: AuthService) {
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
  });

  uploadFileStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.uploadFileStart),
      mergeMap((fileData) => {
        const fileId = fileData.fileId;
        const file = fileData.file;
        const fileName = file.name ?? ('File-name-' + new Date().getTime());
        const uploadDate: number = new Date().getTime();

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
              console.log('Upload done');
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
              console.log('Fetch URL done');
            })
          )
        ];
        const percentAndUrl: Observable<UploadTaskResult> = concat(...arr);
        return percentAndUrl.pipe(
          map((res) => {
            const percent = res.percent ?? (res.url ? 100 : res.percent);
            return fromUploadActions.uploadFileUpdateProgress({ fileId, fileSize: fileData.file.size,
              uploadDate: uploadDate, downloadUrl: res.url, progress: percent });
          }),
          catchError((err) => {
            console.error("Upload Error!" + err);
            return of(fromUploadActions.uploadFileFailure({ errMsg: err }));
          }),
          finalize(() => {
            console.log("Upload and URL done");
          })
        );
      })
    );
  });

  uploadFileFinished$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.uploadFileUpdateProgress),
      filter((progress) => {
        if (progress.downloadUrl && progress.progress === 100) {
          return true;
        }
        return false;
      }),
      map((res) => {
        const fileId: string = res.fileId;
        const downloadUrl: string = res.downloadUrl!;
        const fileSize: number = res.fileSize;
        const uploadDate: number = res.uploadDate;
        return fromUploadActions.uploadFileSuccess({ fileId, fileSize, uploadDate, downloadUrl });
      })
    );
  });

  updateUserPhotoDatabaseAfterUploadSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.uploadFileSuccess),
      map((data) => {
        const photoData: PhotoData = {
          id: data.fileId,
          dateUploaded: data.uploadDate,
          fileName: data.fileId,
          fileSize: data.fileSize,
          photoUrl: data.downloadUrl
        };
        return fromUploadActions.updateUserDBWithPhotoStart({ photoData });
      })
    );
  });

  updateUserPhotoDatabase$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.updateUserDBWithPhotoStart),
      concatLatestFrom(() => this.as.currentUser$),
      filter((user) => {
        const userName = user[1]?.email;
        if (userName) {
          return true;
        }
        return false;
      }),
      mergeMap((data) => {
        const userEmail: string = data[1]?.email!;
        const restOperation: FirebaseDocObsAndId = this.us.addPhotoUrl(data[0].photoData, userEmail);
        const obs$: Promise<void> = restOperation.operationObs;
        const id: string = data[0].photoData.id;
        return obs$.then(
          (res) => {
            const photoDataWithId = {
              ...data[0].photoData,
              id: id
            }
            return fromUploadActions.updateUserDBWithPhotoSuccess({
              photoData: photoDataWithId
            });
          }
        ).catch((err) => {
          return fromUploadActions.updateUserDBWithPhotoFailure({ errMsg: err });
        })
      })
    );
  });


}



export const fileUploadEntityEffect = [
  FileUploadEffects
]
