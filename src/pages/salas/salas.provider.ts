import { Injectable  } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import { Rutas } from '../../app/rute';
import { Geolocation } from 'ionic-native';
//import { Geoposition } from 'ionic-native';

/*
  Generated class for the Sponsors provider.
  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

@Injectable()
export class Salas {

  public watch: any;
  public lat: number = 0;
  public lng: number = 0;

  constructor(
    public http: Http,
    public rutas: Rutas,
    //public zone: NgZone
  ) {
  }

  salasGet(){
    var url = this.rutas.salasGet();
    var response = this.http.get(url).map(res => res.json());
    console.log("orators.provider.js");
    return response;
  }

  startTracking() {
    // Foreground Tracking

      let options = {
        //frequency: 3000,
        enableHighAccuracy: true
      };

      this.watch = Geolocation.getCurrentPosition(options).then((position)=>{
      //this.watch = Geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {

        console.log(position);

        // Run update inside of Angular's zone
        //this.zone.run(() => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        //});

      });
  }


}
