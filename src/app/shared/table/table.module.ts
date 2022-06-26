import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared.module';
import { TableSelectableComponent } from './selectable/table-selectable.component';

@NgModule({
  imports: [
    SharedBudleModule
  ],

  exports: [
    TableSelectableComponent
  ],

  declarations: [
    TableSelectableComponent
  ],

  providers: [

  ],
})
export class SharedTableModule { }
