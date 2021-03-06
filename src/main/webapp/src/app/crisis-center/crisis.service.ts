import 'rxjs/add/operator/map'
import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';


export class Crisis {
  constructor(public id: number, public name: string) { }
}

const CRISES = [
  new Crisis(1, 'Dragon Burning Cities'),
  new Crisis(2, 'Sky Rains Great White Sharks'),
  new Crisis(3, 'Giant Asteroid Heading For Earth'),
  new Crisis(4, 'Procrastinators Meeting Delayed Again'),
];

@Injectable()
export class CrisisService{
  static nextCrisisId = 100;

  private crises$: BehaviorSubject<Crisis[]> = new BehaviorSubject<Crisis[]>(CRISES);

  getCrises(){ return this.crises$; }

  getCrisis(id: number | string): Observable<Crisis>{
    // console.log(`getCrisis:am fost apelat cu id=${id}`);
    return this.getCrises()
      // .delay(3000)
      .map(crises => crises.find(crisis => crisis.id === +id));
  }

  addCrisis(name: string){
    name = name.trim();
    if(name){
      let crisis = new Crisis(CrisisService.nextCrisisId++, name);
      CRISES.push(crisis);
      this.crises$.next(CRISES);
    }
  }
}
