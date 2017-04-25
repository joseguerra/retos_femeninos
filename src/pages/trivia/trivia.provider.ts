import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Rutas} from '../../app/rute';
/*
  Generated class for the Trivia provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Trivia {

  constructor(public http: Http,public rutas: Rutas) {
  }

  questions(id){
    var url = this.rutas.questions(id);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  store(params){
    var url = this.rutas.store();
    var response = this.http.post(url,params).map(res => res.json());
    return response;
  }

}
