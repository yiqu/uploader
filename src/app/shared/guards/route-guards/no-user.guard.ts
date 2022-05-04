import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable, combineLatest, Subject, of, from } from 'rxjs';
import { map, take, tap, skip } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/global/app.reducer';
import { AuthService } from 'src/app/authentication/auth.service';
import { IVerifiedUser } from '../../models/user.model';

// @Injectable({
//   providedIn: 'root'
// })
// export class NoVerifiedUserGuard implements CanActivate {
//   constructor(public router: Router, public route: ActivatedRoute,
//     public store: Store<AppState>) {
//   }

//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
//     Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {

//     return this.store.select("appAuth").pipe(
//       take(1),
//       map((state: AuthState) => {
//         if (state.verifiedUser) {
//           return true;
//         }
//         return this.router.createUrlTree(['/', 'auth', 'signin']);;;
//       }),
//     );
//   }

// }

@Injectable({
  providedIn: 'root'
})
export class NoVerifiedUserChildrenGuard implements CanActivateChild {
  constructor(public router: Router, public route: ActivatedRoute,
    public as: AuthService) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {

      return this.as.currentUser$.pipe(
        take(1),
        map((user: IVerifiedUser | null | undefined) => {
          if (user) {
            return true;
          }
          return this.router.createUrlTree(['/', 'auth']);
        })
      );
  }

}
