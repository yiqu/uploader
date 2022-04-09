import { Injectable } from "@angular/core";
import { Actions, concatLatestFrom, createEffect, ofType } from "@ngrx/effects";
import { ROUTER_NAVIGATION } from "@ngrx/router-store";
import { filter, map, switchMap, tap } from "rxjs/operators";
import { RouterService } from "src/app/shared/services/router-service";
import { environment } from "src/environments/environment";

@Injectable()
export class AppGlobalRouterEffects {

  constructor(public actions$: Actions, private rs: RouterService) {
  }

  routeParams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.routeParams$),
      tap((res) => {
      })
    );
  }, {dispatch: false});

  currentRoute$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.currentRoute$),
      tap((res) => {
      })
    );
  }, {dispatch: false});

  queryParams$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.queryParams$),
      tap((res) => {
      })
    );
  }, {dispatch: false});

  routeData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.routeData$),
      tap((res) => {
      })
    );
  }, {dispatch: false});

  nestedRouteData$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      concatLatestFrom(() => this.rs.nestedRouteParams$),
      tap((res) => {
      })
    );
  }, {dispatch: false});
}

