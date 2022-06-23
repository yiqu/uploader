import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, take, filter, finalize } from 'rxjs/operators';
import { ProgressSnackbarService } from 'src/app/progress-snackbar/progress-snackbar.service';
import { FileUploadService } from '../../upload.service';
import * as fromUploadActions from '../upload/upload.actions';
import * as fromProgressDisplayActions from './progress-display.actions';


@Injectable()
export class UploadProgressDisplayEffects {

  constructor(public actions$: Actions, public pss: ProgressSnackbarService, public fs: FileUploadService) {
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


}



export const uploadProgressDisplayEffects = [
  UploadProgressDisplayEffects
]
