import { Injectable } from "@angular/core";
import { catchError, filter, map, switchMap, tap } from "rxjs/operators";
import { Actions, ofType, createEffect, concatLatestFrom, OnInitEffects } from '@ngrx/effects';
import { Action } from "@ngrx/store";
import { HttpService, versionUrl } from "src/app/shared/services/http.service";
import { of } from "rxjs";
import { RouterService } from "src/app/shared/services/router-service";
import * as fromPageTitleActions from './page-title.actions';
import { Data } from "@angular/router";
import { ROUTER_NAVIGATED } from "@ngrx/router-store";
import { TitleService } from "src/app/shared/services/title.service";

@Injectable()
export class PageTitleEffect implements OnInitEffects {

  constructor(public actions$: Actions, private rs: RouterService, private ts: TitleService) {
  }

  ngrxOnInitEffects(): Action {
    return fromPageTitleActions.setPageTitle({});
  }

  updatePageTitle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      concatLatestFrom(() => this.rs.routeData$),
      map((data: [Action, Data]) => {
        const routeData: Data = data[1];
        return fromPageTitleActions.setPageTitle({ mainTitle: routeData['pageTitle'] });
      })
    );
  });

  setPageTitleText$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromPageTitleActions.setPageTitle),
      concatLatestFrom(() => this.ts.getPageTitle$),
      tap((res) => {
        this.ts.setTitle(res[1]);
      })
    );
  }, {dispatch: false});

}


export const pageTitleEffect = [
  PageTitleEffect,
]
