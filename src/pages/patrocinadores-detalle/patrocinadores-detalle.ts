import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
//import { PatrocinadoresDetalle } from './patrocinadores-detalle.provider';

/*
  Generated class for the PatrocinadoresDetalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-patrocinadores-detalle',
  templateUrl: 'patrocinadores-detalle.html'
})
export class PatrocinadoresDetallePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatrocinadoresDetallePage');
  }

}
