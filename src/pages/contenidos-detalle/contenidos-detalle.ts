import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContenidosDetalle } from './contenidos-detalle.provider';
import { Sponsors } from '../sponsors/sponsors.provider';
import { SocialSharing } from 'ionic-native';

/*
  Generated class for the ContenidosDetalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contenidos-detalle',
  templateUrl: 'contenidos-detalle.html'
})
export class ContenidosDetallePage {

  contenido:any;
  sponsors_items: any;
  patrocinador_name : null;

  constructor(public navCtrl: NavController, public navParams: NavParams, public contenidosDetalle:ContenidosDetalle, private sponsors: Sponsors) {

    this.patrocinador_name = navParams.get('patrocinador_name');

    this.contenidosDetalle.contenidosDetalleGet(navParams.get('id')).subscribe(
      data => {
        this.contenido = data.data;
      },
      err => {
        console.log(err);
      }
    );

    this.sponsors.sponsorsGet().subscribe(
      data => {
        this.sponsors_items = data.data;
      },
      err => {
        console.log(err);
      }
    );

  }

  openShare(){

    console.log("Share completed ");

    var options = {
      message: this.contenido.description, // not supported on some apps (Facebook, Instagram)
      subject: this.contenido.title, // fi. for email
      files: ['http://dimmexico.co/images/' + this.contenido.picture], // an array of filenames either locally or remotely
      //url: 'https://www.website.com/foo/#bar?a=b',
      chooserTitle: this.contenido.acerca_de_titulo // Android only, you can override the default share sheet title
    }

    var onSuccess = function(result) {
      console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
      console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    }

    var onError = function(msg) {
      console.log("Sharing failed with message: " + msg);
    }

    SocialSharing.shareWithOptions(options)  ;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenidosDetallePage');
  }

}
