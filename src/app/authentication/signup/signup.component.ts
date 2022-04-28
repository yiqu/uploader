import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import * as fu from '../../shared/form.utils';
import { AuthInfoFromUser, IAuthInfo, VerifiedUser } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { ErrorStateMatcher } from '@angular/material/core';
import * as em from '../../shared/error-matchers/error-state.matcher';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { AuthService } from '../auth.service';
import { AppState } from 'src/app/store/global/app.reducer';
import { trimmedStringMinCountValidator } from 'src/app/shared/form-validators/general-form.validator';


@Component({
  selector: 'app-auth-signup',
  templateUrl: 'signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class AuthSignupComponent implements OnInit, OnDestroy {

  matcher: ErrorStateMatcher = new em.AfterActionsErrorStateMatcher();
  signInTitle: string = "Create your Uploader Account.";
  avartarImgSrc: string = "assets/img/uploader.png";
  signFg: FormGroup;
  compDest$: Subject<void> = new Subject<void>();

  get emailFc(): FormControl {
    return <FormControl>this.signFg.get("email");
  }

  get passwordFc(): FormControl {
    return <FormControl>this.signFg.get("password");
  }

  get repasswordFc(): FormControl {
    return <FormControl>this.signFg.get("repassword");
  }

  constructor(public fb: FormBuilder, public as: AuthService, public router: Router,
    private store: Store<AppState>) {

      let id: string | null = null;
      let pw: string | null = null;

      if (!environment.production) {
        id = "t@test.com";
        pw = "123456";
      }

      this.signFg = this.fb.group({
        email: fu.createFormControl(id, false, [Validators.required, Validators.email]),
        password: fu.createFormControl(pw, false, [Validators.required, trimmedStringMinCountValidator(5)]),
        repassword: fu.createFormControl(pw, false, [Validators.required])
      });
  }

  ngOnInit() {
    this.as.clearErrors();

    this.signFg.valueChanges.pipe(
      takeUntil(this.compDest$)
    ).subscribe((val) => {
      if (this.passwordFc.value !== this.repasswordFc.value) {
        this.repasswordFc.setErrors({"passwordDoesNotMatch": true});
      } else {
        this.repasswordFc.setErrors(null);
      }
    });
  }

  onSignupClick() {
    const res = this.signFg.value;
    const auth: AuthInfoFromUser = new AuthInfoFromUser(res.email, res.password, true);
    this.signup(auth);
  }

  signup(a: AuthInfoFromUser) {
    this.as.registerUser(a);
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }

}
