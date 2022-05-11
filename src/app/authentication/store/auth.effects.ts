import { Actions, ofType, createEffect } from '@ngrx/effects';
import firebase from 'firebase/compat/app';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import 'firebase/auth';
import { switchMap, catchError, map, tap, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthInfoFromUser, VerifiedUser, InAppAlias, User, IVerifiedUser } from '../../shared/models/user.model';
import { LoginSuccessActionProp, LoginFailureActionProp, AuthVerifiedUserProp } from './auth.models';
import * as AuthUtils from '../../shared/services/firebase.utils';
import * as fromAuthActions from './auth.actions';
import * as fromRouterActions from '../../store/router-related/router-related.actions';
import { AuthService } from '../auth.service';
import { ZorroToasterService } from 'src/app/shared/services/toaster-zorro.service';

@Injectable()
export class AuthEffects {

  constructor(public as: AuthService, public actions$: Actions,
    public router: Router, public route: ActivatedRoute,
    private afs: AngularFirestore, private ts: ZorroToasterService) {
  }

  userLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLoginStart),
      switchMap((authInfo) => {
        const userInfo: AuthInfoFromUser = authInfo.authInfo;
        const sessionType: string = userInfo.saveSession ?
          firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;

        return firebase.auth().setPersistence(sessionType)
          .then(() => {
            return firebase.auth().signInWithEmailAndPassword(userInfo.id, userInfo.password);
          })
          .then(
            (u: firebase.auth.UserCredential) => {
              const currentUser: IVerifiedUser = {
                displayName: u.user?.displayName ?? '<display>',
                email: u.user?.email ?? '<email>'
              };
              return fromAuthActions.authLoginSuccess({ user: currentUser, redirect: ['/'] });
            },
            (rej) => {
              const authErrMsg = AuthUtils.getFirebaseErrorMsg(rej);
              const prop = new LoginFailureActionProp(authErrMsg);
              return fromAuthActions.authLoginFailure(prop);
            }
          )
      })
    )
  });

  userRegistration$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authUserRegistrationFromEmailStart),
      exhaustMap((registerInfo) => {
        const sessionType: string = registerInfo.saveSession ?
        firebase.auth.Auth.Persistence.LOCAL : firebase.auth.Auth.Persistence.SESSION;

        return firebase.auth().setPersistence(sessionType)
          .then(() => {
            return firebase.auth().createUserWithEmailAndPassword(registerInfo.userEmail, registerInfo.password);
          })
          .then(
            (u: firebase.auth.UserCredential) => {
              const currentUser: IVerifiedUser = {
                displayName: u.user?.displayName ?? '<display>',
                email: u.user?.email ?? '<email>'
              };
              return fromAuthActions.authUserRegistrationFromEmailSuccess({ user: currentUser });
            },
            (rej) => {
              const authErrMsg = AuthUtils.getFirebaseErrorMsg(rej);
              const prop = new LoginFailureActionProp(authErrMsg);
              return fromAuthActions.authUserRegistrationFromEmailFailure(prop);
            }
          );

      }));
  });

  userLogout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLogoutStart),
      switchMap(() => {
        return this.as.onUserLogout().pipe(
          map(() => {
            return fromAuthActions.authLogoutSuccess({ redirect: ['/'] });
          })
        );
      })
    );
  });

  userLoggedoutRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLogoutSuccess),
      switchMap((options) => {
        const redirect = options.redirect;
        let urlSegs: string[] = [];
        if (redirect) {
          urlSegs = redirect;
        }
        return [
          fromRouterActions.redirectWithUrl({url: urlSegs}),
        ];
      }));
  });

  userLoggedInSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(...[fromAuthActions.authLoginSuccess]),
      tap((data) => {
        const email: string = data.user.email;
        this.ts.openSingletonToast('success', 'Welcome to Uploader, ' + email + '!');
      }),
      switchMap((opts) => {
        let urlToRedirect: string[] = [];
        if (opts.redirect && opts.redirect.length > 0) {
          urlToRedirect = [...opts.redirect];
        }
        return [
          fromRouterActions.redirectWithUrl({ url: urlToRedirect }),
        ];
      })
    );
  });


}
