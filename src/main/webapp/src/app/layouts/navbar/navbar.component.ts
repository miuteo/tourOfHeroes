import {Component} from '@angular/core';

@Component({
  template: `<nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/crisis-center" routerLinkActive="active">Crisis Center</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a [routerLink]="[{ outlets: {popupTeo:['compose']} }]">Contact</a>
  </nav>`,
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent{

}
