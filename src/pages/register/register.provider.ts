import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import {Rutas} from '../../app/rute';

/*
  Generated class for the Register provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Register {

  constructor(
    public http: Http,
    public rutas: Rutas
  ) {
  }

  register(name,password,email){
    let params = { name: name, email: email, password:password };
    console.log(params);

    var url = this.rutas.register();
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    var response = this.http.post(url,params).map(res => res.json());
    return response;

  }


}
