import { NgModule } from '@angular/core';
import { NzBackTopModule } from 'ng-zorro-antd/back-top';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzAlertModule } from 'ng-zorro-antd/alert';
@NgModule({
  exports: [
    NzBackTopModule,
    NzMessageModule,
    NzMenuModule,
    NzIconModule,
    NzButtonModule,
    NzAlertModule
  ]
})
export class ZorroModuleBundle {}
