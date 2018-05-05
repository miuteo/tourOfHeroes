import {AfterViewChecked, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({template:`
    <p>Dashboard</p>
    <p>Session ID: {{sessionId | async}}</p>
    <a id="anchor"></a>
    <p>Token: {{ anchor }}</p>
  `})
export class AdminDashboardComponent implements OnInit,AfterViewChecked{
  sessionId: Observable<string>;
  anchor: string;

  constructor(private route: ActivatedRoute){}

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
