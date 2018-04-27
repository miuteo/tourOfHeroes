import { Component, OnInit } from '@angular/core';
import {Hero} from 'app/Hero';
import {HeroService} from '../hero.service';

import {Observable} from 'rxjs/Rx';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes.slice(0,4));

    // function foo() {
    //   console.log('Hello');
    //   return 42;
    // }
    //
    // let x = foo.call(null);
    // console.log(x);
    // let y = foo.call(null); // same as foo()
    // console.log(y);
    //


    // let foo2: Observable<any> = Observable.create( (observer)=> {
    //   console.log('Hello');
    //   observer.next(42);
    //   observer.next(43);
    //   observer.next(new Hero());
    //   // setTimeout(() => {
    //   //   observer.next(10000); // happens asynchronously
    //   //   observer.complete();
    //   //
    //   // }, 3000);
    //   observer.complete();
    //
    //   observer.next(45);
    // });
    // console.log('before');
    //
    // foo2.subscribe( (x) => {
    //   console.log(x);
    // });
    // foo2.subscribe( (x) => {
    //   console.log(x);
    // });
    // // foo2.nex
    //
    // console.log('after1');

  }

}
