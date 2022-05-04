import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable, combineLatest, Subject, of, from } from 'rxjs';
import { map, take, tap, skip } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { IVerifiedUser } from '../../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthUserAlreadyLoggedInGuard implements CanActivate {
  constructor(public router: Router, public route: ActivatedRoute,
    public as: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {

    return this.as.currentUser$.pipe(
      take(1),
      map((user: IVerifiedUser | null | undefined) => {
        if (user) {
          return this.router.createUrlTree(['/', 'my-account']);
        }
        return true;
      })
    );
  }

}

@Injectable({
  providedIn: 'root'
})
export class AuthUserAlreadyLoggedInChildrenGuard implements CanActivateChild {
  constructor(public router: Router, public route: ActivatedRoute,
    public as: AuthService) {
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {

      return this.as.currentUser$.pipe(
        take(1),
        map((user: IVerifiedUser | null | undefined) => {
          if (user) {
            return this.router.createUrlTree(['/', 'my-account']);
          }
          return true;
        })
      );
  }

}
