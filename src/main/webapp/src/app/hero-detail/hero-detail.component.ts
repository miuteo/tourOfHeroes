import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../Hero';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {HeroService} from '../hero.service';
import { Location } from '@angular/common';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  // @Input()
  hero$: Observable<Hero>;
  constructor(  private route: ActivatedRoute,
                private router: Router,
                private heroService: HeroService,
                private location: Location) { }

  ngOnInit() {
    this.getHero();
  }

  getHero(): void{
      // const id = +this.route.snapshot.paramMap.get('id');
      // this.heroService.getHero(id)
      //   .subscribe(hero => this.hero = hero);
    this.hero$ = this.route.paramMap
      .switchMap((params: ParamMap)=>
          this.heroService.getHero(params.get('id')));
  }
  goBack(): void {
    this.location.back();
  }

  save(hero: Hero): void {
    this.heroService.updateHero(hero)
      .subscribe( );
  }

}
