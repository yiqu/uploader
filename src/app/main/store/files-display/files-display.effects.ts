import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError, take } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { FilesDisplayService } from '../../files-display.service';
import { FileUploadService } from '../../upload.service';
import { tap } from 'rxjs/operators';
import { RouterService } from 'src/app/shared/services/router-service';
import { FilesDisplayTab } from './files-display.state';
import * as fromFilesDisplayActions from './files-display.actions';


@Injectable()
export class FilesDisplayEffects {

  constructor(public actions$: Actions, private fds: FilesDisplayService, private rs: RouterService) {
  }

  updateTabFromRouteParam$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATED),
      concatLatestFrom(() => this.rs.routeData$),
      switchMap((res) => {
        return this.fds.getAllTabOptions$.pipe(
          take(1),
          map((toPass) => {
            return {
              allTabs: toPass,
              currentRouteId: res[1]['id']
            }
          })
        )
      }),
      map((res) => {
        const allTabs: FilesDisplayTab[] = res.allTabs;
        const currentId: string = res.currentRouteId;
        const currentTab: FilesDisplayTab | undefined = allTabs.find((tab: FilesDisplayTab) => {
          return tab.url === currentId;
        });
        return fromFilesDisplayActions.setUserFilesDisplayTabId({ tab: currentTab });
      })
    );
  });

}
