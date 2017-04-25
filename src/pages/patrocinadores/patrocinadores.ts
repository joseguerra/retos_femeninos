import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ContenidosDetallePage } from '../contenidos-detalle/contenidos-detalle';
import { Patrocinadores } from './patrocinadores.provider';

/*
  Generated class for the Patrocinadores page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-patrocinadores',
  templateUrl: 'patrocinadores.html'
})
export class PatrocinadoresPage {

  ContenidosDetallePage =  ContenidosDetallePage;
  patrocinadores_items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private patrocinadores: Patrocinadores) {

    this.patrocinadores.patrocinadoresGet().subscribe(
      data => {
        this.patrocinadores_items = data.data;
      },
      err => {
        console.log(err);
      }
    );
  }

  onclick(id, name){
    this.navCtrl.push(this.ContenidosDetallePage, {'id':id, 'name':name});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PatrocinadoresPage');
  }

}
