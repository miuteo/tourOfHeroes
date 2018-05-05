import {Component, OnInit} from '@angular/core';
import {Crisis, CrisisService} from './crisis.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {DialogService} from '../dialog.service';

@Component({
  template: `
    <div *ngIf="crisis">
      <h3>{{ editName}}</h3>
      <div>
        <label>Name:</label>
        <input [(ngModel)] = "editName" placeholder="name">
      </div> 
    <p>
      <button (click)="save()">Save</button>
      <button (click)="cancel()">Cancel</button>
    </p>
    </div>
  `
})
export class CrisisDetailComponent implements OnInit{
  crisis: Crisis;
  // crisis$: Observable<Crisis>;
  editName: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: CrisisService,
              private dialogService: DialogService){

  }
  ngOnInit(){


    // let id = this.route.snapshot.paramMap.get('id');
    // console.log(`id from snapshot ${id}`)
    // this.service.getCrisis(id).subscribe((crisis: Crisis)=>{
    //   this.crisis = crisis;
    //   this.editName = this.crisis.name;
    // });

    // this.crisis$ =


      // this.route.paramMap
      // .switchMap((paramMap: ParamMap)=>{
      //   return this.service.getCrisis(paramMap.get('id'))
      // }).subscribe((crisis: Crisis)=>{
      // this.crisis = crisis;
      // this.editName = crisis.name;
      //     });
    this.route.data
      .subscribe((data: {crisis: Crisis}) =>{
        this.editName = data.crisis.name;
        this.crisis = data.crisis;
      });




    // this.crisis$.subscribe((crisis: Crisis)=>{
    //                                         this.crisis = crisis;
    //                                         this.editName = crisis.name;

  }
  cancel(){
    this.goToCrises();
  }

  save(){
    this.crisis.name = this.editName;
    this.goToCrises();

  }

  goToCrises(){
    this.router.navigate(['../',{id: this.crisis.id}],{relativeTo: this.route});
  }

  canDeactivate(): boolean | Observable<boolean>{
    if(!this.editName || this.editName === this.crisis.name)
      return true;

    return this.dialogService.confirm('Discard changes?');
  }

}
