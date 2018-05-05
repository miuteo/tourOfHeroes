import {NgModule} from '@angular/core';
import {AdminDashboardComponent} from './admin-dashboard.component';
import {AdminRoutingModule} from './admin-routing.module';
import {AdminComponent} from './admin.component';
import {ManageCrisesComponent} from './manage-crises.component';
import {ManageHeroesComponent} from './manage-heroes.component';
import {AuthGuard} from '../auth-guard.service';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent
  ],
  providers: [AuthGuard],
  imports:[AdminRoutingModule,CommonModule]
})
export class AdminModule{}
