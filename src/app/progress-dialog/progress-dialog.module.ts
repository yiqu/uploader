import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { SharedBudleModule } from '../shared/shared.module';
import { ProgressDisplayDialog } from './progress-dialog.component';


@NgModule({
  imports: [
    SharedBudleModule,
  ],

  exports: [

  ],

  declarations: [
    ProgressDisplayDialog
  ],

  providers: [

  ],
})
export class ProgressDialogModule { }
