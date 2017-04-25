import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Rutas} from '../../app/rute';
/*
  Generated class for the Dashboard provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Dashboard {

  constructor(public http: Http,public rutas: Rutas) {
  }

  trivias(token){

    var url = this.rutas.trivias(token);
    var response = this.http.get(url).map(res => res.json());
    return response;

  }
}
