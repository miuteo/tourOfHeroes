import {CanActivate, CanActivateChild, NavigationExtras, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/do';
import {AuthService} from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate,CanActivateChild{
  constructor(private authService: AuthService,private router: Router){

  }

  isLoggedIn: boolean = false;
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
      // console.log(`route= ${state.url}`);
      // return Observable.of(true).delay(1000)
      //   .do(val => {
      //     console.log('AuthGuard#canActivate called');
      //     this.isLoggedIn = true;
      //
      //   })
    let url: string = state.url;
    return this.checkLogin(url);
  }
  logout(): void {
    this.isLoggedIn = false;
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){
      return this.canActivate(childRoute, state);
  }

  checkLogin(url: string): boolean{
      if(this.authService.isLoggedIn){return true;}


      this.authService.redirectUrl = url;

      let sessionID = 12345;
      let navigationExtra: NavigationExtras = {
        queryParams: {'session_id': sessionID},
        fragment: 'anchor'
      };
      this.router.navigate(['/login'],navigationExtra);
      return false;
  }
}
