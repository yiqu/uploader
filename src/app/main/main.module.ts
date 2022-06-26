import { NgModule } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { LoadingModule } from '../shared/loading/loading.module';
import { PipeBundleModule } from '../shared/pipes/pipe-bundle.module';
import { SharedBudleModule } from '../shared/shared.module';
import { HomeComponent } from './all/all.component';
import { HomeHistoryComponent } from './history/history.component';
import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { FilesEffects } from './store/files/files.effects';
import { filesEntityReducerFunc } from './store/files/files.reducer';
import { fileUploadEntityEffect } from './store/upload/upload.effects';
import { fileUploadEntityReducerFunc } from './store/upload/upload.reducer';
import { USER_FILES_STORE_KEY, UPLOAD_FILE_STORE_KEY } from './store/upload/upload.state';
import { UPLOAD_PROGRESS_DISPLAY_STORE_KEY } from './store/progress-display/progress-display.state';
import { uploadProgressDisplayReducer } from './store/progress-display/progress-display.reducer';
import { UploadItemComponent } from './upload-item/upload-item.component';
import { HomeWelcomeRecentUploadsComponent } from './welcome/recent-uploads/recent-uploads.component';
import { HomeWelcomeBoxComponent } from './welcome/welcome.component';
import { uploadProgressDisplayEffects } from './store/progress-display/progress-display.effects';
import { SharedTableModule } from '../shared/table/table.module';

@NgModule({
  imports: [
    SharedBudleModule,
    SharedTableModule,
    LoadingModule,
    PipeBundleModule,
    StoreModule.forFeature(UPLOAD_FILE_STORE_KEY, fileUploadEntityReducerFunc),
    StoreModule.forFeature(USER_FILES_STORE_KEY, filesEntityReducerFunc),
    StoreModule.forFeature(UPLOAD_PROGRESS_DISPLAY_STORE_KEY, uploadProgressDisplayReducer),
    EffectsModule.forFeature(fileUploadEntityEffect),
    EffectsModule.forFeature([FilesEffects]),
    EffectsModule.forFeature(uploadProgressDisplayEffects),
    AngularFireStorageModule,
    MainRoutingModule
  ],

  exports: [
  ],

  declarations: [
    MainComponent,
    HomeComponent,
    HomeWelcomeBoxComponent,
    HomeWelcomeRecentUploadsComponent,
    UploadItemComponent,
    HomeHistoryComponent
  ],

  providers: [],
})
export class MainModule { }
