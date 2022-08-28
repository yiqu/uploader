import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute, ActivatedRouteSnapshot,
  RouterStateSnapshot, UrlTree, CanActivateChild } from '@angular/router';
import { Observable, combineLatest, Subject, of, from } from 'rxjs';
import { map, take, tap, skip } from 'rxjs/operators';
import { AuthService } from 'src/app/authentication/auth.service';
import { WindoConfirmService } from '../../services/confirm.service';

@Injectable({
  providedIn: 'root'
})
export class CanNavigateToLogoutGuard implements CanActivate {
  constructor(public router: Router, public route: ActivatedRoute,
    public cs: WindoConfirmService, public as: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<boolean | UrlTree> | Promise<boolean> | boolean | UrlTree {
      return this.cs.getDialogConfirm('Logout', 'logout of Uploader?').pipe(
        take(1),
        map((res: boolean) => {
          if (res) {
            return true;
          }
          return false;
        })
      );
  }

}

