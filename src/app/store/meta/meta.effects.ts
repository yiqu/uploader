import { Injectable } from "@angular/core";
import { catchError, filter, map, switchMap } from "rxjs/operators";
import * as fromMetaActions from './meta.actions';
import { Actions, ofType, createEffect, concatLatestFrom, OnInitEffects } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { HttpService, versionUrl } from "src/app/shared/services/http.service";
import { of } from "rxjs";
import { PackageJson } from "./meta.state";

@Injectable()
export class AppMetaDataEffect implements OnInitEffects {

  constructor(public actions$: Actions, private http: HttpService) {
  }

  ngrxOnInitEffects(): Action {
    return fromMetaActions.setAppVersionStart();
  }

  setAppVersion$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromMetaActions.setAppVersionStart),
      switchMap(() => {
        return this.http.get<PackageJson>(versionUrl).pipe(
          map((res: PackageJson) => {
            return fromMetaActions.setAppVersionSuccess({ version: res.version });
          }),
          catchError((err) => {
            return of(fromMetaActions.setAppVersionFailed({errMsg: err}));
          })
        )
      })
    );
  });

}


export const appMetaDataEffect = [
  AppMetaDataEffect,
]
