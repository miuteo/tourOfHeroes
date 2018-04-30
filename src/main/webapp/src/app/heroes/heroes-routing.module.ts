import {RouterModule, Routes} from '@angular/router';
import {HeroesComponent} from './heroes.component';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {NgModule} from '@angular/core';

const heroesRoutes: Routes = [
  {path: 'heroes', component: HeroesComponent},
  {path: 'detail/:id', component: HeroDetailComponent}
]


@NgModule({
  imports:[
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [RouterModule]
})
export class HeroesRoutingModule{

}
