import { Injectable } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/auth';
import { AngularFirestore, AngularFirestoreDocument,
  AngularFirestoreCollection } from '@angular/fire/compat/firestore';
import { VerifiedUser, AuthInfoFromUser, IVerifiedUser } from '../shared/models/user.model';
import { defer, delay, filter, Observable, Subject, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import * as AuthActions from './store/auth.actions';
import { UserRegistrationFromEmailActionProp } from './store/auth.models';
import { AppState } from '../store/global/app.reducer';
import * as fromAuthSelectors from './store/auth.selectors';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiLoading$: Observable<boolean | undefined> = this.store.select(fromAuthSelectors.apiLoading);
  errorMsg$: Observable<string | undefined> = this.store.select(fromAuthSelectors.apiErrorMessage);
  errorOccured$: Observable<boolean | undefined> = this.store.select(fromAuthSelectors.apiError);
  currentUser$: Observable<IVerifiedUser | null | undefined> = this.store.select(fromAuthSelectors.getUser).pipe(
    filter((user: IVerifiedUser | null | undefined) => {
      if (user === undefined) {
        return false;
      }
      return true;
    })
  );
  currentUserRaw$: Observable<IVerifiedUser | null | undefined> = this.store.select(fromAuthSelectors.getUser);

  shouldRedirectBeforeAttemptLogin: boolean = false;

  constructor(private afs: AngularFirestore, public store: Store<AppState>) {
    this.setFirebaseAuthWorking();

    firebase.auth().onAuthStateChanged(
      (user: firebase.User | null) => {
        console.log("AUTH:", user ? user.toJSON() : user);
        if (user) {
          const currentUser: IVerifiedUser = {
            displayName: user.displayName ?? '<display>',
            email: user.email ?? '<email>'
          };
          this.setUserLoginSuccess(currentUser, this.shouldRedirectBeforeAttemptLogin ? ['/'] : null);
        } else {
          this.unsetVerifiedUser(this.shouldRedirectBeforeAttemptLogin ? ['/'] : null);
        }
        this.shouldRedirectBeforeAttemptLogin = true;
      },
      (err) => {
        console.error("Error occured in firebase auth state change trigger.")
      },
      () => {
        console.info("Firebase auth state change completed.")
      }
    );
  }

  onUserLogout(): Observable<void> {
    return defer(() => {
      return firebase.auth().signOut();
    });
  }

  registerUser(authInfo: AuthInfoFromUser): void {
    const p = new UserRegistrationFromEmailActionProp(authInfo.id, authInfo.password, authInfo.saveSession);
    this.store.dispatch(AuthActions.authUserRegistrationFromEmailStart(p));
  }

  userLogin(authInfo: AuthInfoFromUser): void {
    this.store.dispatch(AuthActions.authLoginStart({ authInfo: authInfo }));
  }

  userLogout() {
    this.store.dispatch(AuthActions.authLogoutStart());
  }

  signoutUserSuccess() {
    this.store.dispatch(AuthActions.authLogoutSuccess({ redirect: ['/', 'auth'] }));
  }

  clearErrors() {
    this.store.dispatch(AuthActions.authClearErrorsByUser());
  }

  throwErrorMessage(msg: string) {
    this.store.dispatch(AuthActions.authThrowErrorMessageByUser({ errorMsg: msg }));
  }

  setUserLoginSuccess(user: IVerifiedUser, redirect: string[] | null) {
    this.store.dispatch(AuthActions.authLoginSuccess({ user: user, redirect: redirect }));
  }

  unsetVerifiedUser(redirect: string[] | null) {
    this.store.dispatch(AuthActions.authLogoutSuccess({ redirect }));
  }

  setFirebaseAuthWorking() {
    this.store.dispatch(AuthActions.setFirebaseAuthWorking({}));
  }

}
