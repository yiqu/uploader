import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MyAccountCoreComponent } from './core/core.component';
import { MyAccountComponent } from './account.component';
import { NoVerifiedUserChildrenGuard } from '../shared/guards/route-guards/no-user.guard';

export const routes: Routes = [
  { path: "", component: MyAccountComponent, canActivateChild: [NoVerifiedUserChildrenGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: MyAccountCoreComponent,
        data: {
          pageTitle: 'My Account'
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
