import { Injectable } from '@angular/core';
import {Hero} from './Hero';
import {HEROES} from './mock-heroes';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {catchError, tap} from 'rxjs/operators'
import { MessageService } from './message.service';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {pipe} from 'rxjs/Rx';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

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
        tap(heroes => this.log(`fetched heroes`)),
        catchError(this.handleError('getHeroes', [{id:1,name:"Teo error"}]))
      );
  }

  // getHero(id: number): Observable<Hero> {
  //   //TODO
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id ));
  // }
  /** GET hero by id. Will 404 if id not found */
  getHero(id: number): Observable<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Hero>(url).pipe(
      tap(_ => this.log(`fetched hero id=${id}`)),
      catchError(this.handleError<Hero>(`getHero id=${id}`))
    );
  }

  updateHero(hero: Hero): Observable<any>{
    return this.http.put(this.heroesUrl, hero, httpOptions)
      .pipe(
        tap(_ => this.log(`updated hero id=${hero.id}`)),
        catchError(this.handleError<any>('updateHero'))
      )
  }
  createHero(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl,hero,httpOptions)
      .pipe(
        tap(createdHero => this.log(`created hero  w/ id=${createdHero.id} and name=${createdHero.name}`)),
        catchError(this.handleError<Hero>(`create hero`,hero))
      );
  }
  deleteHero (hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero: hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url,httpOptions)
      .pipe(
        tap(_ => this.log(`deleted hero id=${id}`)),
        catchError(this.handleError<Hero>('deleteHero'))
      );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
