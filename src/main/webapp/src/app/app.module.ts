import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here


import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import {HeroService} from './hero.service';
import { MessagesComponent } from './messages/messages.component';
import {MessageService} from './message.service';
import { AppRoutingModule } from './/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import {HttpClientModule} from '@angular/common/http';
import {HeroSearchComponent} from './hero-search/hero-search.component';
import {PageNotFoundComponent} from './PageNotFoundComponent';
import {HeroesModule} from 'app/heroes/heroes.module';
import {CrisisCenterModule} from './crisis-center/crisis-center.module';
import {ComposeMessageComponent} from './compose-mesage.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    PageNotFoundComponent,
    ComposeMessageComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HeroService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
