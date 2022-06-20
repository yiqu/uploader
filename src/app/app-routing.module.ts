import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './404/404.component';
import { NetworkAwarePreloadStrategy } from './shared/preload-strategies/preload-network';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule),
    data: {
      pageTitle: 'Home'
    }
  },
  { path: 'my-account',
    loadChildren: () => import('./my-account/account.module').then(m => m.MyAccountModule),
    data: {
      pageTitle: 'My Account'
    }
  },
  { path: '**', component: NotFoundComponent,
    data: {
      pageTitle: 'Not Found'
    }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,
      {
        preloadingStrategy: NetworkAwarePreloadStrategy,
      }
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
