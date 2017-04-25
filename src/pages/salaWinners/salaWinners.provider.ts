import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Rutas} from '../../app/rute';
/*
  Generated class for the Sala provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SalaWinners {

  constructor(public http: Http,public rutas: Rutas) {
  }

  roomsGet(id){
    var url = this.rutas.roomsGet(id);
    var response = this.http.get(url).map(res => res.json());
    return response;

  }

}
