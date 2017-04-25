import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Sponsors } from '../sponsors/sponsors.provider';
import { Contenidos } from './contenidos.provider';
import { ContenidosDetallePage } from '../contenidos-detalle/contenidos-detalle';
/*
  Generated class for the Contenidos page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-contenidos',
  templateUrl: 'contenidos.html'
})
export class ContenidosPage {

  contenidos_items: any;
  sponsors_items: any;
  contenidosDetallePage =  ContenidosDetallePage;
  patrocinador_name = null;

  constructor(public navCtrl: NavController, public navParams: NavParams, private contenidos: Contenidos, private sponsors: Sponsors) {

    this.patrocinador_name = navParams.get('name');

    console.log(this.patrocinador_name);

    this.contenidos.contenidosGet(navParams.get('id')).subscribe(
      data => {
        this.contenidos_items = data.data;
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


  onclick(id, patrocinador_name){
    this.navCtrl.push(this.contenidosDetallePage, {'id':id, 'patrocinador_name': patrocinador_name});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContenidosPage');
  }

}
