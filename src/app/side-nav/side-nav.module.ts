import { NgModule } from '@angular/core';
import { SideNavComponent } from './side-nav.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModuleBundle } from '../shared/material-bundle';
import { SharedBudleModule } from '../shared/shared.module';

@NgModule({
  imports: [
    MaterialModuleBundle,
    FormsModule,
    CommonModule,
    RouterModule,
    SharedBudleModule
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
