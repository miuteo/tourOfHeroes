import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class DialogService{
  confirm(message?: string): Observable<boolean>{
      const confirmation = window.confirm(message || 'It is ok?');
      return Observable.of(confirmation);
  }
}
