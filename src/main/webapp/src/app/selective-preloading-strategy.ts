import {PreloadingStrategy} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Route} from '@angular/router/src/config';
import 'rxjs/add/observable/of';

export class SelectivePreloadingStrategy implements PreloadingStrategy{
  preloadedModule : string[] = [];
  preload(route: Route, load: () => Observable<any>): Observable<any>{
    if(route.data && route.data['preload'] === true){
      // console.log('Preloaded: ' + route.path);
      this.preloadedModule.push(route.path);
      return load();
    }else {
      return Observable.of(null);
    }
  }
}
