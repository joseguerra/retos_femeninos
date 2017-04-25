import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { Http } from '@angular/http';
import { Sponsors } from '../sponsors/sponsors.provider';
import { OradoresDetallePage } from '../oradores-detalle/oradores-detalle';
import { Oradores } from './oradores.provider';

/*
  Generated class for the Oradores page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-oradores',
  templateUrl: 'oradores.html'
})
export class OradoresPage {

  oradores_items: any;
  sponsors_items: any;
  oradoresDetallePage =  OradoresDetallePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http:Http, private oradores: Oradores, private sponsors: Sponsors, public loadingCtrl :LoadingController) {

    let loading = this.loadingCtrl.create({});

    loading.present();

    this.oradores.oradoresGet().subscribe(

      data => {
        this.oradores_items= data.data;
      },
      err => {
        console.log(err);
      },
      () => {
        loading.dismiss();
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


  onclick(id){
    this.navCtrl.push(this.oradoresDetallePage, {'id':id});
  }


  ionViewDidLoad() {

    console.log('ionViewDidLoad OradoresPage');
  }

}
