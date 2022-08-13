import { Injectable } from "@angular/core";
import { catchError, exhaustMap, filter, map, switchMap } from "rxjs/operators";
import { Actions, ofType, createEffect, concatLatestFrom, OnInitEffects } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { HttpService, versionUrl } from "src/app/shared/services/http.service";
import { interval, of, timer, tap } from "rxjs";
import * as fromCheckVersionActions from './check-version.actions';
import { PackageJson } from "../meta/meta.state";
import { AppVersionCheckeService } from "./check-version.service";
import { HttpParams } from "@angular/common/http";
import { ZorroToasterService } from "src/app/shared/services/toaster-zorro.service";

const DURATION_CHECK: number = 60_000;

@Injectable()
export class AppVersionCheckEffects implements OnInitEffects {

  constructor(public actions$: Actions, private http: HttpService, private cvs: AppVersionCheckeService,
    private ts: ZorroToasterService) {
  }

  ngrxOnInitEffects(): Action {
    return fromCheckVersionActions.startVersionCheckTimer({ duration: DURATION_CHECK });
  }

  startVersionCheckTimer$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCheckVersionActions.startVersionCheckTimer),
      exhaustMap((duration) => {
        return timer(0, duration.duration).pipe(
          switchMap((dur) => {
            let params = new HttpParams();
            params = params.append("time", new Date().getTime());
            const httpOptions = {
              headers: { 'Content-Type': 'application/json' },
              params
            };
            return this.http.get<PackageJson>(versionUrl).pipe(
              map((data) => {
                return fromCheckVersionActions.versionCheckSuccess({ version: data.version });
              })
            )
          })
        )
      })
    );
  });

  checkIfOutdated$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCheckVersionActions.versionCheckSuccess),
      concatLatestFrom(() => this.cvs.getIsOutdated$),
      filter((res) => {
        const isOutdated: boolean = res[1];
        return isOutdated;
      }),
      map((data) => {
        return fromCheckVersionActions.showVersionIsOutdated({ version: data[0].version });
      })
    );
  });

  showAlert$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromCheckVersionActions.showVersionIsOutdated),
      tap((version) => {
        this.ts.openSingletonToastPersist('warning', 'Newer version is available ' + '(' + version.version + ') ,' +
          ' please refresh the page.');
      })
    );
  }, { dispatch: false });


}


export const appVersionCheckEffects = [
  AppVersionCheckEffects,
]
