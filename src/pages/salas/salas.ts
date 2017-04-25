import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, LoadingController, Platform } from 'ionic-angular';
import { Geolocation } from 'ionic-native';
import { Salas } from './salas.provider';
import { InAppBrowser } from 'ionic-native';

declare var google;

/*
  Generated class for the Salas page.
  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-salas',
  templateUrl: 'salas.html'
})
export class SalasPage {

  salas_items: any;

  position = null;

  @ViewChild('map') mapElement: ElementRef;
  map: any;

  constructor(public navCtrl: NavController, public salas: Salas, public loadingCtrl :LoadingController, public platform: Platform) {


    let loading = this.loadingCtrl.create({});
    loading.present();

    Geolocation.getCurrentPosition().then((position) => {

      this.position = position;

      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      let mapOptions = {
        center: latLng,
        zoom: 14,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }

      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

      let mymarker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
        icon: { url : 'assets/img/donde-estoy-mapa.png' },
      });

      //let content = "<h4>Mi ubicación</h4>";

      //this.addInfoWindow(mymarker, content);

      this.salas.salasGet().subscribe(

        data => {
          this.addMarker( data.data );
        },
        err => {
          console.log(err);
        },
        () => {
          loading.dismiss();
        }
      );

    }, (err) => {
      console.log(err);
    });

  }

  addMarker( salas ){

    var i = 0;

    var markerBounds = new google.maps.LatLngBounds();

    for (i = 0; i < salas.length; i++){

      var lat = salas[i]['latlong'].split(',')[0];
      var lon = salas[i]['latlong'].split(',')[1];

      var randomPoint = new google.maps.LatLng( lat, lon);
      markerBounds.extend(randomPoint);

      console.log(lat + ' - ' + lon );

      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: new google.maps.LatLng(lat, lon),
        icon: { url : 'assets/img/donde-estoy-cine-mapa.png' },
      });

      if (this.platform.is('ios'))
        var link = "maps://?q="+salas[i]['latlong'];
      else
        var link = "geo:0,0?q="+salas[i]['latlong'];

      let content = "<p><span class='OpenSansItalic' style='font-size: 1.6rem;'>"+salas[i]['place']+"</span><br><span  style='font-size: 1.4rem;' class='OpenSansLightitalic'>"+salas[i]['area']+"</span></p><button ion-button='' round class='item-button button button-md button-default button-default-md button-home background-rosa' icon-left onclick='javascript:window.open(\""+link+"\", \"_system\")'> <span class='button-inner'>Cómo llego</span></button>";

      this.addInfoWindow(marker, content);

    };

  }


  navigateTo(latlong){

    var geoUrl = null;
		var from = '';

    if ( this.position )
			from = "saddr=" + this.position.latitude + "," + this.position.longitude + "&";

		if (this.platform.is('ios'))
			geoUrl = "maps:" + from + "daddr=" + latlong ;
		else
			geoUrl = "http://maps.google.com/maps?" + from + "daddr=" + latlong;

    console.log(geoUrl);

    let browser = new InAppBrowser(geoUrl, '_system');

  }

  addInfoWindow(marker, content){

    let infoWindow = new google.maps.InfoWindow({
      content: content
    });

    google.maps.event.addListener(marker, 'click', () => {
      infoWindow.open(this.map, marker);
    });

  }

}
