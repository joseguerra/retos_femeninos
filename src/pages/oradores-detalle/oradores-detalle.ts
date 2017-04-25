import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from 'ionic-native';
import { OradoresDetalle } from './oradores-detalle.provider';
import { Sponsors } from '../sponsors/sponsors.provider';

/*
  Generated class for the OradoresDetalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oradores-detalle',
  templateUrl: 'oradores-detalle.html'
})
export class OradoresDetallePage {

  orador:any;
  sponsors_items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public params:NavParams, public oradoresDetalle:OradoresDetalle, private sponsors: Sponsors ) {

    this.oradoresDetalle.oradoresDetalleGet(navParams.get('id')).subscribe(
      data => {
        this.orador = data.data;
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
      message: this.orador.description, // not supported on some apps (Facebook, Instagram)
      subject: this.orador.title, // fi. for email
      files: ['http://dimmexico.co/images/' + this.orador.picture], // an array of filenames either locally or remotely
      //url: 'https://www.website.com/foo/#bar?a=b',
      chooserTitle: this.orador.acerca_de_titulo // Android only, you can override the default share sheet title
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
    console.log('ionViewDidLoad OradoresDetallePage');
  }

}
