import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainComponent } from './main.component';
import { HomeComponent } from './all/all.component';
import { HomeHistoryComponent } from './history/history.component';
import { HomeHistoryTableViewComponent } from './history/table/table.component';
import { HomeHistoryGalleriaViewComponent } from './history/galleria/galleria.component';

export const routes: Routes = [
  { path: "", component: MainComponent,
    children: [
      { path: '', redirectTo: 'upload', pathMatch: 'full' },
      { path: 'upload', component:  HomeComponent,
        data: {
          pageTitle: 'Upload Files'
        }
      },
      { path: 'history', component:  HomeHistoryComponent,
        data: {
          pageTitle: 'My Files'
        },
        children: [
          { path: '', redirectTo: 'table', pathMatch: 'full' },
          { path: 'table', component:  HomeHistoryTableViewComponent,
            data: {
              pageTitle: 'Table View',
              id: 'table'
            }
          },
          { path: 'galleria', component:  HomeHistoryGalleriaViewComponent,
            data: {
              pageTitle: 'Galleria View',
              id: 'galleria'
            }
          },
        ]
      },
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
export class MainRoutingModule {}
