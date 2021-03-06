import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Rutas } from '../../app/rute';
/*
  Generated class for the Sponsors provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Patrocinadores {

  constructor(
    public http: Http,
    public rutas: Rutas
  ) {
  }

  patrocinadoresGet(){
    var url = this.rutas.sponsorsGet();
    var response = this.http.get(url).map(res => res.json());
    console.log("patrocinadores.provider.js");
    return response;
  }

}
