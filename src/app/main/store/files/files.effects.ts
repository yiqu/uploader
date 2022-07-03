import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { FileUploadService } from '../../upload.service';
import { PhotoData } from '../upload/upload.state';
import * as fromFilesActions from './files.actions';
import * as fromUploadActions from '../upload/upload.actions';
import { Action } from '@ngrx/store';
import { IVerifiedUser } from 'src/app/shared/models/user.model';
import { getFirebaseErrorMsg } from 'src/app/shared/services/firebase.utils';
import * as fromFilesDisplayTabActions from '../files-display/files-display.actions';


@Injectable()
export class FilesEffects {

  constructor(public actions$: Actions, private us: FileUploadService, private as: AuthService) {
  }

  getUserFiles$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[fromFilesActions.getUserFilesStart, fromUploadActions.updateUserDBWithPhotoSuccess]),
      concatLatestFrom(() => this.as.currentUser$),
      map((u) => {
        const currentUser: IVerifiedUser | null | undefined = u[1];
        return currentUser;
      }),
      switchMap((user) => {
        return iif(
          () => {
            return !!user;
          },
          this.us.getUserPhotos<PhotoData>(user?.email!).pipe(
            switchMap((res) => {
              return [
                fromFilesDisplayTabActions.setTotalCount({ total: res.length }),
                fromFilesActions.getUserFilesSuccess({ files: res })
              ];
            }),
            catchError((err) => {
              return of(fromFilesActions.getUserFilesFailed({ errMsg: getFirebaseErrorMsg(err) }))
            })
          ),
          of(fromFilesActions.noUserLoggedInFetchFiles())
        )
      })
    );
  });

  userChange$ = createEffect(() => {
    return this.as.currentUser$.pipe(
      distinctUntilChanged((a: IVerifiedUser | null | undefined, b: IVerifiedUser | null | undefined) => {
        return a?.email === b?.email;
      }),
      switchMap((user: IVerifiedUser | null | undefined) => {
        return of(fromFilesActions.getUserFilesStart({ user }));
      })
    )
  });

}
