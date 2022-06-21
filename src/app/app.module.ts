import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBudleModule } from './shared/shared.module';
import { TopNavModule } from './top-nav/top-nav.module';
import { FooterModule } from './footer/footer.module';
import { NotFoundComponentModule } from './404/404.module';
import { AccountBookFill, AlertFill, AppstoreOutline ,
  ProjectFill, ContainerFill, ProjectOutline, ContainerOutline} from '@ant-design/icons-angular/icons';
import { IconDefinition } from '@ant-design/icons-angular';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { appReducers } from './store/global/app.reducer';
import { metaReducers } from './store/global/meta-reducer';
import { appEffects } from './store/global/app.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HttpClientModule } from '@angular/common/http';
import { ROUTER_STATE } from './store/router/router.state';
import { MAT_RIPPLE_GLOBAL_OPTIONS, RippleGlobalOptions } from '@angular/material/core';
import { SideNavModule } from './side-nav/side-nav.module';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { AngularFireStorageModule, BUCKET } from '@angular/fire/compat/storage';
import { AngularFireModule } from '@angular/fire/compat';
import { AuthModule } from './authentication/auth.module';
import { NzConfig, NZ_CONFIG } from 'ng-zorro-antd/core/config';
import { SharedProgressSnackbarComponent } from './progress-snackbar/progress-snackbar.component';
import { ProgressSnackbarModule } from './progress-snackbar/progress-snackbar.module';
import { ProgressDialogModule } from './progress-dialog/progress-dialog.module';


const icons: IconDefinition[] = [ AppstoreOutline, ProjectFill, ContainerFill,
  ProjectOutline, ContainerOutline ];

const globalRippleConfig: RippleGlobalOptions = {
  disabled: true,
  animation: {
    enterDuration: 0,
    exitDuration: 0
  }
};

const ngZorroConfig: NzConfig = {
  message: {
    nzTop: 1
  },
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    SharedBudleModule,
    TopNavModule,
    SideNavModule,
    FooterModule,
    NotFoundComponentModule,
    NzIconModule.forRoot(icons),
    StoreModule.forRoot(appReducers, {
      metaReducers: metaReducers,
      runtimeChecks: {
        strictActionImmutability: true,
        strictStateImmutability: true,
        strictActionTypeUniqueness: true
      }
    }),
    EffectsModule.forRoot(appEffects),
    StoreDevtoolsModule.instrument({
      maxAge: 45,
      logOnly: environment.production
    }),
    StoreRouterConnectingModule.forRoot({
      stateKey: ROUTER_STATE,
      routerState: RouterState.Minimal
    }),
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore()),
    //provideStorage(() => getStorage()),
    AngularFireStorageModule,
    AuthModule,
    ProgressSnackbarModule,
    ProgressDialogModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: MAT_RIPPLE_GLOBAL_OPTIONS,
      useValue: globalRippleConfig
    },
    { provide: NZ_CONFIG,
      useValue: ngZorroConfig
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
