import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { OnInitEffects } from "@ngrx/effects";
import { tap, concatMap, switchMap, map, mergeMap, catchError, exhaustMap, take, filter, finalize } from 'rxjs/operators';


@Injectable()
export class UploadProgressDisplayEffects {

  constructor(public actions$: Actions) {
  }


}



export const uploadProgressDisplayEffects = [
  UploadProgressDisplayEffects
]
