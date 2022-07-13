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
import { FILES_DISPLAY_STORE_KEY } from './store/files-display/files-display.state';
import { filesDisplayReducer } from './store/files-display/files-display.reducer';
import { FilesDisplayEffects } from './store/files-display/files-display.effects';
import { HomeHistoryTableViewComponent } from './history/table/table.component';
import { HomeHistoryGalleriaViewComponent } from './history/galleria/galleria.component';
import { TABLE_SELECTION_STORE_KEY } from './store/selection/selection.state';
import { filesTableSelectionReducer } from './store/selection/selection.reducer';

@NgModule({
  imports: [
    SharedBudleModule,
    SharedTableModule,
    LoadingModule,
    PipeBundleModule,
    StoreModule.forFeature(UPLOAD_FILE_STORE_KEY, fileUploadEntityReducerFunc),
    StoreModule.forFeature(USER_FILES_STORE_KEY, filesEntityReducerFunc),
    StoreModule.forFeature(UPLOAD_PROGRESS_DISPLAY_STORE_KEY, uploadProgressDisplayReducer),
    StoreModule.forFeature(FILES_DISPLAY_STORE_KEY, filesDisplayReducer),
    StoreModule.forFeature(TABLE_SELECTION_STORE_KEY, filesTableSelectionReducer),
    EffectsModule.forFeature(fileUploadEntityEffect),
    EffectsModule.forFeature([FilesEffects]),
    EffectsModule.forFeature(uploadProgressDisplayEffects),
    EffectsModule.forFeature([FilesDisplayEffects]),
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
    HomeHistoryComponent,
    HomeHistoryTableViewComponent,
    HomeHistoryGalleriaViewComponent
  ],

  providers: [],
})
export class MainModule { }
