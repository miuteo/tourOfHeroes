import {Resolve, Router} from '@angular/router';
import {Crisis, CrisisService} from './crisis.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/map';

@Injectable()
export class CrisisDetailResolver implements Resolve<Crisis>{
  constructor(private crisisService: CrisisService,
              private router: Router){}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Crisis>{
    let id = route.paramMap.get('id');

    return this.crisisService.getCrisis(id).take(1)
      .map((crisis: Crisis)=>{
        if(crisis)
          return crisis;
        this.router.navigate(['crisis-center']);
        return null;
      });

  }

}
