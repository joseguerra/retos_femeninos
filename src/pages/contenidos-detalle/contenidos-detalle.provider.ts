import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Rutas } from '../../app/rute';
import { InAppBrowser } from 'ionic-native';

/*
  Generated class for the Sponsors provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

declare var window: any;

@Injectable()
export class ContenidosDetalle {

  constructor(
    public http: Http,
    public rutas: Rutas
  ) {
    window.open = (url, target?, opts?) => new InAppBrowser(url, target, opts);
  }

  contenidosDetalleGet(id){
    var url = this.rutas.contenidosGet();
    var response = this.http.get(url + id).map(res => res.json());
    console.log("contenidos.provider.js");
    return response;
  }

  launch(url) {
      let browser = new InAppBrowser(url, '_blank');
  }

}
