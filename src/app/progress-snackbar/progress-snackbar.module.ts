import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { SharedProgressSnackbarComponent } from './progress-snackbar.component';

@NgModule({
  imports: [
    SharedBudleModule
  ],

  exports: [
    SharedProgressSnackbarComponent
  ],

  declarations: [
    SharedProgressSnackbarComponent
  ],

  providers: [],
})
export class ProgressSnackbarModule { }
