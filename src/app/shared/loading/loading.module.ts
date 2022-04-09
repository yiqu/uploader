import { NgModule } from '@angular/core';

import { LoadingComponent } from './loading.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModuleBundle } from '../material-bundle';
import { LoadingBarComponent } from '../loading-bar/loading-bar.component';
import { LoadingProgressComponent } from '../loading-spinner/loading-spinner.component';
import { ProgressBarComponent } from '../progress-bar/progress-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MaterialModuleBundle
  ],

  exports: [
    LoadingComponent,
    LoadingBarComponent,
    LoadingProgressComponent,
    ProgressBarComponent
  ],

  declarations: [
    LoadingComponent,
    LoadingBarComponent,
    LoadingProgressComponent,
    ProgressBarComponent
  ],

  providers: [

  ],
})
export class LoadingModule { }
