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
export class News {

  constructor(
    public http: Http,
    public rutas: Rutas
  ) {
  }

  newsGet(){
    var url = this.rutas.newsGet();
    var response = this.http.get(url).map(res => res.json());
    console.log("patrocinadores.provider.js");
    return response;
  }

}
