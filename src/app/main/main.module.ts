import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { HomeComponent } from './all/all.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FilesEffects } from './store/files.effects';
import { filesEntityReducerFunc } from './store/files.reducer';
import { fileUploadEntityEffect } from './store/upload.effects';
import { fileUploadEntityReducerFunc } from './store/upload.reducer';
import { FILES_STORE_KEY, UPLOAD_FILE_STORE_KEY } from './store/upload.state';
import { UploadItemComponent } from './upload-item/upload-item.component';
import { HomeWelcomeBoxComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    SharedBudleModule,
    LoadingModule,
    PipeBundleModule,
    StoreModule.forFeature(UPLOAD_FILE_STORE_KEY, fileUploadEntityReducerFunc),
    StoreModule.forFeature(FILES_STORE_KEY, filesEntityReducerFunc),
    EffectsModule.forFeature(fileUploadEntityEffect),
    EffectsModule.forFeature([FilesEffects]),
    AngularFireStorageModule,
    MainRoutingModule
  ],

  exports: [
  ],

  declarations: [
    MainComponent,
    HomeComponent,
    HomeWelcomeBoxComponent,
    UploadItemComponent
  ],

  providers: [],
})
export class MainModule { }
