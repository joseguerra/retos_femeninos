import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sponsors } from '../sponsors/sponsors.provider';
import { OrganizadorasPage } from '../organizadoras/organizadoras';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SocialSharing } from 'ionic-native';
import {SafeResourceUrl, DomSanitizer} from '@angular/platform-browser';

/*
  Generated class for the Informacion page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html'
})
export class InformacionPage {

  api_url = 'http://dimmexico.co/api/';
  url: SafeResourceUrl;
  informacion:any;
  sponsors_items:any;
  organizadorasPage = OrganizadorasPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, private sponsors: Sponsors, sanitizer: DomSanitizer) {

    this.url = sanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/BFug-YP-hos');

    this.http.get( this.api_url + 'metadata').map(res => res.json()).subscribe(informacion => {
           console.log( informacion.data );
           this.informacion=informacion.data;
         }, (error)=> {
            console.log('error',error);
    });

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
      message: this.informacion.acerca_de_description, // not supported on some apps (Facebook, Instagram)
      subject: this.informacion.acerca_de_titulo, // fi. for email
      files: ['http://dimmexico.co/images/' + this.informacion.acerca_de_imagen], // an array of filenames either locally or remotely
      //url: 'https://www.website.com/foo/#bar?a=b',
      chooserTitle: this.informacion.acerca_de_titulo // Android only, you can override the default share sheet title
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
    console.log('ionViewDidLoad InformacionPage');
  }

}
