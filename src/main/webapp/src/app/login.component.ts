import {AuthService} from './auth.service';
import {NavigationExtras, Router} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  template: `
    <h2>Login</h2>
    <p>{{message}}</p>
    <p>
      <button (click)="login()" *ngIf="!authService.isLoggedIn">Login</button>
      <button (click)="logout()" *ngIf="authService.isLoggedIn">Logout</button>
    </p>
  `
})
export class LoginComponent{
  message: string;

  constructor(public authService: AuthService, public router: Router){
    this.setMessage();
  }

  setMessage() {
    this.message = 'Logged ' + (this.authService.isLoggedIn? 'in' : 'out');
  }

  login() {
    this.message = 'Trying to log in..';
    this.authService.login().subscribe(value => {
      this.setMessage();
      if(this.authService.isLoggedIn){
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/crisis-center/';
        let navigationExtras: NavigationExtras = {
          queryParamsHandling: 'preserve',
          preserveFragment: true
        };
        this.router.navigate([redirect],navigationExtras);
      }
    })

  }
  logout(){
    this.authService.logout();
    this.setMessage();
  }
}
