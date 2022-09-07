import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyAccountCoreComponent } from './core/core.component';
import { MyAccountComponent } from './account.component';
import { UserHasToExistChildrenGuard } from '../shared/guards/route-guards/no-user.guard';
import { MyAccountVersionTestComponent } from './version-test/version-test.component';

export const routes: Routes = [
  { path: "", component: MyAccountComponent, canActivateChild: [UserHasToExistChildrenGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MyAccountCoreComponent,
        data: {
          pageTitle: 'My Account'
        }
      },
      { path: 'version', component: MyAccountVersionTestComponent,
        data: {
          pageTitle: 'Version Test'
        }
      }
    ],
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(
      routes
    )
  ],
  exports: [
    RouterModule
  ]
})
export class MyAccountRoutingModule {}
