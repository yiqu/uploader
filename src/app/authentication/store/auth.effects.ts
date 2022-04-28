import { Actions, ofType, createEffect } from '@ngrx/effects';
import firebase from 'firebase/compat/app';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import 'firebase/auth';
import { switchMap, catchError, map, tap, exhaustMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { AuthInfoFromUser, VerifiedUser, InAppAlias, User } from '../../shared/models/user.model';
import { LoginSuccessActionProp, LoginFailureActionProp, AuthVerifiedUserProp } from './auth.models';
import * as AuthUtils from '../../shared/services/firebase.utils';
import * as fromAuthActions from './auth.actions';
import * as fromRouterActions from '../../store/router-related/router-related.actions';
import { AuthService } from '../auth.service';

@Injectable()
export class AuthEffects {

  private usersBaseUrl: string = "users/";

  constructor(public as: AuthService, public actions$: Actions,
    public router: Router, public route: ActivatedRoute,
    private afs: AngularFirestore) {
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
              return fromAuthActions.authLoginFirebaseRequestSuccess();
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
              //this.ts.getSuccess("Your account has been successfully registered.");
              //const user: VerifiedUser = <VerifiedUser>u.user.toJSON();
              console.log("REG!")
              console.log(u)
              const p = new AuthVerifiedUserProp(undefined);
              return fromAuthActions.authUserRegistrationFromEmailSuccess();
            },
            (rej) => {
              console.log(rej)
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
        return firebase.auth().signOut()
        .then(() => {
          return fromAuthActions.authLogoutSuccess({redirect: true});
        });
      }));
  });

  userLoggedout$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLogoutSuccess),
      switchMap((options) => {
        const redirect = options.redirect;
        const urlSegs: string[] = [];
        if (redirect) {
          urlSegs.push("/", "auth");
        }
        //this.ts.getSuccess("You are logged out.");
        return [
          fromRouterActions.redirectWithUrl({url: urlSegs}),
        ];
      }));
  });

  userLoggedInSuccess$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(fromAuthActions.authLoginSuccess),
      switchMap((opts) => {
        let urlToRedirect: string[] = [];
        if (opts.redirect) {
          urlToRedirect = [];
          urlToRedirect.push("/");
        }
        //this.ts.getSuccess("You are logged in.");
        return [
          fromRouterActions.redirectWithUrl({url: urlToRedirect}),
        ];
      })
    );
  });


}
