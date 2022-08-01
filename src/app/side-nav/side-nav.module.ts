import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModuleBundle } from '../shared/material-bundle';
import { SharedBudleModule } from '../shared/shared.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { SIDE_NAV_STORE_KEY } from './store/side-nav.state';
import { sideNavReducer } from './store/side-nav.reducer';
import { sideNavEffect } from './store/side-nav.effects';

@NgModule({
  imports: [
    MaterialModuleBundle,
    FormsModule,
    CommonModule,
    RouterModule,
    SharedBudleModule,
    StoreModule.forFeature(SIDE_NAV_STORE_KEY, sideNavReducer),
    EffectsModule.forFeature(sideNavEffect)
  ],

  exports: [
    SideNavComponent
  ],

  declarations: [
    SideNavComponent
  ],

  providers: [

  ],
})
export class SideNavModule { }
