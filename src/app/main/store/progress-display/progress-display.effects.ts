import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { of } from 'rxjs';
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, take, filter, finalize } from 'rxjs/operators';
import { ProgressDialogService } from 'src/app/progress-dialog/progress-dialog.service';
import { DialogAction, DialogCloseData } from 'src/app/progress-dialog/progress-dialog.state';
import { ProgressSnackbarService } from 'src/app/progress-snackbar/progress-snackbar.service';
import { FileUploadService } from '../../upload.service';
import * as fromUploadActions from '../upload/upload.actions';
import * as fromProgressDisplayActions from './progress-display.actions';


@Injectable()
export class UploadProgressDisplayEffects {

  constructor(public actions$: Actions, public pss: ProgressSnackbarService, public fs: FileUploadService,
    private pds: ProgressDialogService) {
  }

  showSnackbarOnFileUploadStart$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromUploadActions.uploadFileStart),
      map(() => {
        return fromProgressDisplayActions.toggleUploadProgressSnackbar({ status: true });
      }));
  });

  toggleProgressSnackbar$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProgressDisplayActions.toggleUploadProgressSnackbar),
      tap((status) => {
        if (status.status) {
          this.pss.getProgressSnackbar({
            fileStatus: this.fs.filesUploadingAll$,
            isFilesUploadFinished: this.fs.isFilesUploadFinished$,
            uploadingsAndTotalFiles: this.fs.uploadingsAndTotalFiles$
          });
        } else {
          this.pss.closeProgressSnackbar();
        }
      }));
  }, { dispatch: false});

  toggleProgressDialog$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromProgressDisplayActions.toggleUploadProgressDialog),
      switchMap((status) => {
        if (status.status) {
          const dialogRef = this.pds.openDialog({
            fileStatus: this.fs.filesUploadingAll$,
            isFilesUploadFinished: this.fs.isFilesUploadFinished$,
            uploadingsAndTotalFiles: this.fs.uploadingsAndTotalFiles$
          });
          return dialogRef.afterClosed().pipe(
            map((data: DialogCloseData) => {
              return data;
            })
          );
        } else {
          this.pds.closeDialog();
          return of(false);
        }
      }),
      filter((ref) => {
        return ref !== false;
      }),
      map((action) => {
        const act: DialogCloseData = action ? JSON.parse(JSON.stringify(action)) : undefined;
        if (act?.action === DialogAction.CLOSE) {
          return fromProgressDisplayActions.toggleUploadProgressSnackbar({ status: false });
        }
        return fromProgressDisplayActions.hideProgressDialogMinimizeOrClickout();
      })
    );
  });


}



export const uploadProgressDisplayEffects = [
  UploadProgressDisplayEffects
]
