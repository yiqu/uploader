import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogConfirmComponent } from './confirm-dialog/dialog.component';
import { MaterialModuleBundle } from './material-bundle';
import { PipeBundleModule } from './pipes/pipe-bundle.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { EnterEscapeKeyEventDirective } from './directives/enter-escape.directive.ts/enter-escape.directive';
import { NgxKeyeventModule } from 'ngx-keyevent';
import { ZorroModuleBundle } from './zorro-bundle.module';
import { SharedDropMenuComponent } from './components/drop-menu/drop-menu.component';
import { LoadingBarCssComponent } from './components/loading-bar-css/loading-bar-css.component';
import { PhotoRecordDisplayComponent } from './components/photo-record-display/photo-record-display.component';
import { PrimengModuleBundle } from './primeng-bundle.module';
import { SnackbarNotificationComponent } from './snack-bar/snack-bar.component';

@NgModule({
  declarations: [
    DialogConfirmComponent,
    EnterEscapeKeyEventDirective,
    SharedDropMenuComponent,
    LoadingBarCssComponent,
    SnackbarNotificationComponent,
    PhotoRecordDisplayComponent
  ],

  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModuleBundle,
    PrimengModuleBundle,
    ZorroModuleBundle,
    PipeBundleModule,
    FlexLayoutModule,
    MatIconModule,
    NgxKeyeventModule
  ],

  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModuleBundle,
    PrimengModuleBundle,
    ZorroModuleBundle,
    PipeBundleModule,
    DialogConfirmComponent,
    EnterEscapeKeyEventDirective,
    NgxKeyeventModule,
    SharedDropMenuComponent,
    LoadingBarCssComponent,
    SnackbarNotificationComponent,
    PhotoRecordDisplayComponent
  ],

  providers: [
  ],
})
export class SharedBudleModule { }
