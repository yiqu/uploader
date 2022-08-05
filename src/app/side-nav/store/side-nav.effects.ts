import { Injectable } from '@angular/core';
import { OnInitEffects } from "@ngrx/effects";
import { Actions, ofType, createEffect, concatLatestFrom } from '@ngrx/effects';
import { map, switchMap, iif, of, mergeMap, EMPTY, distinctUntilChanged, catchError } from 'rxjs';
import { AuthService } from 'src/app/authentication/auth.service';
import { CRUDMode } from 'src/app/shared/models/general.model';
import { NavHeader, NavHeaderLink } from 'src/app/shared/models/nav-item.model';
import * as fromAuthActions from '../../authentication/store/auth.actions';
import * as fromSideNavActions from './side-nav.actions';


@Injectable()
export class SideNavEffects {

  constructor(public actions$: Actions) {
  }

  addLogOutOptionOnUserLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLoginSuccess),
      map(() => {
        return fromSideNavActions.updateSideNavOptions({ crud: CRUDMode.CREATE, options: {
          header: new NavHeader("Account"),
          links: [
            new NavHeaderLink("Log out", "logout", ["/", "auth", 'logout'])
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
          header: new NavHeader("Upload"),
          links: [
            new NavHeaderLink("My Files", "history", ["/", "home", "history"])
          ]
        }});
      })
    );
  });

  removeLogInOptionOnUserLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLoginSuccess),
      map(() => {
        return fromSideNavActions.updateSideNavOptions({ crud: CRUDMode.DELETE, options: {
          header: new NavHeader("Account"),
          links: [
            new NavHeaderLink("Sign in", "", []),
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
          header: new NavHeader("Upload"),
          links: [
            new NavHeaderLink("My Files", "", []),
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
          header: new NavHeader("Account"),
          links: [
            new NavHeaderLink("Log out", "", []),
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
          header: new NavHeader("Account"),
          links: [
            new NavHeaderLink("Sign in", "", []),
          ]
        }});
      })
    );
  });

}


export const sideNavEffect = [
  SideNavEffects
]
