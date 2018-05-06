import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {PageNotFoundComponent} from './PageNotFoundComponent';
import {ComposeMessageComponent} from './compose-mesage.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {AuthGuard} from './auth-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // {path: 'heroes', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '',component: NavbarComponent,outlet: 'nav'},
  {
    path: 'compose',
    component: ComposeMessageComponent,
    outlet: 'popupTeo'
  },
  {
    path: 'admin',
    loadChildren: 'app/admin/admin.module#AdminModule',
    canLoad: [AuthGuard]
  },
  // {path: 'detail/:id', component: HeroDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }


