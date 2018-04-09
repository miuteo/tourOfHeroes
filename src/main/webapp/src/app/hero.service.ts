import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators'
import { MessageService } from './message.service';
import {HttpClient} from '@angular/common/http';
import {pipe} from 'rxjs/Rx';

@Injectable()
export class HeroService {
  private heroesUrl = 'api/heroes';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

    public log(message: string): void{
      this.messageService.add(`HeroService: ${message}`);
    }

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.heroesUrl)
      .pipe(
        tap(heroes => this.log(`fetched heroes`))
        // catchError(this.handleError('getHeroes', []))
      );
  }

  getHero(id: number): Observable<Hero> {
    //TODO
    this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(HEROES.find(hero => hero.id === id ));
  }



}
