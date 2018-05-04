import {AuthService} from './auth.service';
import {Router} from '@angular/router';
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
        this.router.navigate([redirect]);
      }
    })

  }
  logout(){
    this.authService.logout();
    this.setMessage();
  }
}
