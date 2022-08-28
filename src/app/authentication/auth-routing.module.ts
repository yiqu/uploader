import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CanNavigateToLogoutGuard } from '../shared/guards/logout/can-logout.guard';
import { UserHasToExistChildrenGuard, UserHasToExistGuard } from '../shared/guards/route-guards/no-user.guard';
import { AuthUserAlreadyLoggedInChildrenGuard,
  AuthUserAlreadyLoggedInGuard } from '../shared/guards/route-guards/verified-user.guard';
import { AuthComponent } from './auth.component';
import { AuthSigninComponent } from './signin/signin.component';
import { AuthSignoutComponent } from './signout/signout.component';
import { AuthSignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'auth', component: AuthComponent, canActivateChild: [AuthUserAlreadyLoggedInChildrenGuard],
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      { path: 'signin', component: AuthSigninComponent },
      { path: 'signup', component: AuthSignupComponent },
    ]
  },
  {
    path: 'logout', component: AuthSignoutComponent, canActivate: [UserHasToExistGuard, CanNavigateToLogoutGuard]
  }
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
