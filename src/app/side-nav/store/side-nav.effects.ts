import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { CRUDMode } from 'src/app/shared/models/general.model';
import { NavHeader, NavHeaderLink } from 'src/app/shared/models/nav-item.model';
import * as fromAuthActions from '../../authentication/store/auth.actions';
import * as fromSideNavActions from './side-nav.actions';
import { LEFT_NAV_KEYS } from './side-nav.state';


@Injectable()
export class SideNavEffects {

  constructor(public actions$: Actions) {
  }

  addLogOutOptionOnUserLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLoginSuccess),
      map(() => {
        return fromSideNavActions.updateSideNavOptions({ crud: CRUDMode.CREATE, options: {
          header: new NavHeader(LEFT_NAV_KEYS.HELP_AND_SETTINGS_PARENT),
          links: [
            new NavHeaderLink(LEFT_NAV_KEYS.LOG_OUT, "logout", ["/", "auth", 'logout'])
          ]
        }});
      })
    );
  });

  addFileHistoryOptionOnUserLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLoginSuccess),
      map(() => {
        return fromSideNavActions.updateSideNavOptions({ crud: CRUDMode.CREATE, options: {
          header: new NavHeader(LEFT_NAV_KEYS.UPLOAD_PARENT),
          links: [
            new NavHeaderLink(LEFT_NAV_KEYS.MY_FILES, "history", ["/", "home", "history"])
          ]
        }});
      })
    );
  });

  removeSignInOptionOnUserLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLoginSuccess),
      map(() => {
        return fromSideNavActions.updateSideNavOptions({ crud: CRUDMode.DELETE, options: {
          header: new NavHeader(LEFT_NAV_KEYS.HELP_AND_SETTINGS_PARENT),
          links: [
            new NavHeaderLink(LEFT_NAV_KEYS.SIGN_IN, "", []),
          ]
        }});
      })
    );
  });

  removeFileHistoryOptionOnUserLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLogoutSuccess),
      map(() => {
        return fromSideNavActions.updateSideNavOptions({ crud: CRUDMode.DELETE, options: {
          header: new NavHeader(LEFT_NAV_KEYS.UPLOAD_PARENT),
          links: [
            new NavHeaderLink(LEFT_NAV_KEYS.MY_FILES, "", []),
          ]
        }});
      })
    );
  });

  removeLogoutOptionOnUserLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLogoutSuccess),
      map(() => {
        return fromSideNavActions.updateSideNavOptions({ crud: CRUDMode.DELETE, options: {
          header: new NavHeader(LEFT_NAV_KEYS.HELP_AND_SETTINGS_PARENT),
          links: [
            new NavHeaderLink(LEFT_NAV_KEYS.LOG_OUT, "", []),
          ]
        }});
      })
    );
  });

  addLoginOptionOnUserLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLogoutSuccess),
      map(() => {
        return fromSideNavActions.updateSideNavOptions({ crud: CRUDMode.CREATE, options: {
          header: new NavHeader(LEFT_NAV_KEYS.HELP_AND_SETTINGS_PARENT),
          links: [
            new NavHeaderLink(LEFT_NAV_KEYS.SIGN_IN, "login", ["/", "auth", 'signin']),
          ]
        }});
      })
    );
  });

}


export const sideNavEffect = [
  SideNavEffects
]
