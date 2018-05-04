import {RouterModule, Routes} from '@angular/router';
import {CrisisCenterComponent} from './crisis-center.component';
import {NgModule} from '@angular/core';
import {CrisisCenterHomeComponent} from './crisis-center-home.component';
import {CrisisListComponent} from './crisis-list.component';
import {CrisisDetailComponent} from './crisis-detail.component';
import {CanDeactivateGuard} from '../can-deactivate-guard.service';

const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: '',
            component: CrisisCenterHomeComponent
          },
          {
            path: ':id',
            component: CrisisDetailComponent,
            canDeactivate: [CanDeactivateGuard]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(crisisCenterRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule{}
