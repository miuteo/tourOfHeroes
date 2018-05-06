import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';
import {SelectivePreloadingStrategy} from '../selective-preloading-strategy';

@Component({template:`
    <p>Dashboard</p>
    <p>Session ID: {{sessionId | async}}</p>
    <a id="anchor"></a>
    <p>Token: {{ anchor }}</p>
    Preloaded Modules
    <ul>
      <li *ngFor="let module of preloadedModule">{{ module }}</li>
    </ul>
  `})
export class AdminDashboardComponent implements OnInit,AfterViewChecked{
  sessionId: Observable<string>;
  anchor: string;
  preloadedModule: string[];
  constructor(private route: ActivatedRoute,
              private selectivePreloadingStrategy: SelectivePreloadingStrategy){
    this.preloadedModule = this.selectivePreloadingStrategy.preloadedModule;
  }

  ngOnInit(): void{
    this.sessionId = this.route.queryParamMap.map(params=>params.get('session_id')||'None');
    // this.token = this.route.fragment.map(fragment => fragment || 'None');
    this.route.fragment.map(fragment => fragment || 'None')
      .subscribe( value => this.anchor=value);
  }
  ngAfterViewChecked(): void {
    try {

          document.querySelector('#' + this.anchor).scrollIntoView({behavior: 'smooth'});
          // window.location.hash = "";

    } catch (e) { }
  }


}
