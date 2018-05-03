import {Component, OnInit} from '@angular/core';
import {Crisis, CrisisService} from './crisis.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute,ParamMap} from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  template: `
    <ul class="items">
      <li *ngFor="let crisis of crises$ | async"
          [class.selected]="crisis.id === selectedId">
        <a [routerLink]="[crisis.id]">
          <span class="badge">{{ crisis.id }}</span>{{ crisis.name }}
        </a>
      </li>
    </ul>

    <router-outlet></router-outlet>
  `
})
export class CrisisListComponent implements OnInit{
  selectedId: number;
  crises$: Observable<Crisis[]>;
  constructor(private crisisService: CrisisService,
              private route: ActivatedRoute){

  }

  ngOnInit(){
    this.crises$ = this.route.paramMap
      .switchMap( (params: ParamMap)=>{
        this.selectedId = +params.get('id');
        return this.crisisService.getCrises();
    });
  }
}
