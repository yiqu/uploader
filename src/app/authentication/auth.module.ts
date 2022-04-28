import { NgModule } from '@angular/core';
import { AuthComponent } from './auth.component';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthSignupComponent } from './signup/signup.component';
import { AuthSigninComponent } from './signin/signin.component';
import { LoadingModule } from '../shared/loading/loading.module';
import { SharedBudleModule } from '../shared/shared.module';


@NgModule({
  imports: [
    SharedBudleModule,
    LoadingModule,
    AuthRoutingModule
  ],

  exports: [

  ],

  declarations: [
    AuthComponent,
    AuthSigninComponent,
    AuthSignupComponent
  ],

  providers: [

  ],

})
export class AuthModule { }
