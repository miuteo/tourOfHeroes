import {Router} from '@angular/router';
import {Component} from '@angular/core';

@Component({
  template:`
  <h3>Contact Crisis Center</h3>
    <div *ngIf="details">
      {{ details}}
    </div>
    <div>
      <div>
        <label>Message: </label>
      </div>
      <div>
        <textarea [(ngModel)]="message" rows="10" cols="35" [disabled]="sending"></textarea>
      </div>
    </div>
    <p *ngIf="!sending">
        <button (click)="send()">Send</button>
        <button (click)="cancel()">Cancel</button>
    </p>
  `
})
export class ComposeMessageComponent{
  details: string;
  message: string;
  sending: boolean = false;

  constructor(private router: Router){

  }

  send(){
    this.sending = true;
    this.details = 'Sending Message';

    setTimeout(() =>{
      this.sending = false;
      this.closePopup();
    },1000)
  }

  cancel(){
    this.closePopup();
  }

  closePopup(){
    this.router.navigate([{outlets: {popupTeo: null}}]);
  }
}
