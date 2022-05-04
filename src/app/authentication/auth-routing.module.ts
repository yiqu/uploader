import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthUserAlreadyLoggedInChildrenGuard,
  AuthUserAlreadyLoggedInGuard } from '../shared/guards/route-guards/verified-user.guard';
import { AuthComponent } from './auth.component';
import { AuthSigninComponent } from './signin/signin.component';
import { AuthSignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, canActivateChild: [AuthUserAlreadyLoggedInChildrenGuard],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: AuthSigninComponent },
      { path: 'signup', component: AuthSignupComponent },
  ]}
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes,
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
