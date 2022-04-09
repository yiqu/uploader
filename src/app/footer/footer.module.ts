import { NgModule } from '@angular/core';
import { SharedBudleModule } from '../shared/shared.module';
import { AppFooterComponent } from './footer.component';

@NgModule({
  imports: [
    SharedBudleModule
  ],

  exports: [
    AppFooterComponent
  ],

  declarations: [
    AppFooterComponent
  ],

  providers: [],
})
export class FooterModule { }
