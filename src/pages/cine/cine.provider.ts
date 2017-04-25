import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Rutas} from '../../app/rute';

/*
  Generated class for the Cine provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Cine {

  constructor(public http: Http, public rutas: Rutas) {
  }

  placesGet(city_id){
    var url = this.rutas.placesGet();
    var response = this.http.get(url+'?city_id='+city_id).map(res => res.json());
    return response;

  }

}
