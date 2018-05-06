import { NgModule } from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {PageNotFoundComponent} from './PageNotFoundComponent';
import {ComposeMessageComponent} from './compose-mesage.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {AuthGuard} from './auth-guard.service';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {SelectivePreloadingStrategy} from './selective-preloading-strategy';

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
  {
    path: 'crisis-center',
    loadChildren: 'app/crisis-center/crisis-center.module#CrisisCenterModule',
    data: { preload: true }
  },
  // {path: 'detail/:id', component: HeroDetailComponent},
  {path: '**', component: PageNotFoundComponent}
];
@NgModule({
  exports: [ RouterModule ],
  imports: [RouterModule.forRoot(routes,
    {
      // preloadingStrategy: PreloadAllModules
      preloadingStrategy: SelectivePreloadingStrategy
    })]
})
export class AppRoutingModule { }


