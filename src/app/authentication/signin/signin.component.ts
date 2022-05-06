import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthInfoFromUser, IAuthInfo } from '../../shared/models/user.model';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import * as fu from '../../shared/form.utils';
import { AuthService } from '../auth.service';


@Component({
  selector: 'app-auth-signin',
  templateUrl: 'signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class AuthSigninComponent implements OnInit, OnDestroy {

  signInTitle: string = "Sign in with your Uploader Account";
  avartarImgSrc: string = "assets/img/uploader.png";
  signFg: FormGroup;
  compDest$: Subject<void> = new Subject<void>();
  passwordVisible: boolean = false;

  get idFc(): FormControl {
    return <FormControl>this.signFg.get("id");
  }

  get passwordFc(): FormControl {
    return <FormControl>this.signFg.get("password");
  }

  constructor(public fb: FormBuilder, public as: AuthService) {
    let id: string | null = null;
    let pw: string | null = null;
    if (!environment.production) {
      id = "t1@test.com";
      pw = "123456";
    }
    this.signFg = this.fb.group({
      id: fu.createFormControl(id, false, [Validators.required, Validators.email]),
      password: fu.createFormControl(pw, false),
      saveSession: fu.createFormControl(true, false)
    });
  }

  ngOnInit() {
    this.as.clearErrors();

    this.signFg.valueChanges.pipe(
      takeUntil(this.compDest$)
    ).subscribe((val) => {
      this.as.clearErrors();
    });
  }

  onSignInClick() {
    if (this.passwordFc.value && this.passwordFc.value.trim()!=="") {
      const auth: AuthInfoFromUser = new AuthInfoFromUser(this.signFg.value.id, this.signFg.value.password,
        this.signFg.value.saveSession);
      this.signIn(auth);
    } else {
      this.as.throwErrorMessage("Enter a password.")
    }
  }

  signIn(a: AuthInfoFromUser) {
    this.as.userLogin(a);
  }

  onPasswordVisToggle() {
    this.passwordVisible = !this.passwordVisible;
  }

  ngOnDestroy() {
    this.compDest$.next();
    this.compDest$.complete();
  }
}
