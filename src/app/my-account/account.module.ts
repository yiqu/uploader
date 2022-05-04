import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { MyAccountRoutingModule } from './account-routing.module';
import { MyAccountComponent } from './account.component';
import { MyAccountCoreComponent } from './core/core.component';

@NgModule({
  imports: [
    SharedBudleModule,
    MyAccountRoutingModule
  ],

  exports: [],

  declarations: [
    MyAccountComponent,
    MyAccountCoreComponent
  ],

  providers: [],
})
export class MyAccountModule { }
