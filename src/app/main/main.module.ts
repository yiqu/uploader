import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { HomeComponent } from './all/all.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { fileUploadEntityEffect } from './store/upload.effects';
import { fileUploadEntityReducerFunc } from './store/upload.reducer';
import { UPLOAD_FILE_STORE_KEY } from './store/upload.state';
import { UploadItemComponent } from './upload-item/upload-item.component';

@NgModule({
  imports: [
    SharedBudleModule,
    LoadingModule,
    PipeBundleModule,
    StoreModule.forFeature(UPLOAD_FILE_STORE_KEY, fileUploadEntityReducerFunc),
    EffectsModule.forFeature(fileUploadEntityEffect),
    MainRoutingModule
  ],

  exports: [
  ],

  declarations: [
    MainComponent,
    HomeComponent,
    UploadItemComponent
  ],

  providers: [],
})
export class MainModule { }
