import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Rutas} from '../../app/rute';
/*
  Generated class for the Index provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Index {

  constructor(public http: Http,public rutas: Rutas) {
  }

  login(email,password){
    let params = { email: email, password:password };

    var url = this.rutas.login();
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    var response = this.http.post(url,params).map(res => res.json());
    return response;

  }

  facebookRegister(token,name,email,facebook_user_id){
    let params = { token:token, name:name, email: email, facebook_user_id:facebook_user_id };

    var url = this.rutas.facebookRegister();
    //let headers = new Headers({ 'Content-Type': 'application/json' });
    var response = this.http.post(url,params).map(res => res.json());
    return response;

  }

}
