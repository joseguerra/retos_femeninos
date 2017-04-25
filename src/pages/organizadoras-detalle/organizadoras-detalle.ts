import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { InformacionPage } from '../informacion/informacion';

import { OrganizadorasDetalle } from './organizadoras-detalle.provider';
import { Sponsors } from '../sponsors/sponsors.provider';


/*
  Generated class for the OrganizadorasDetalle page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organizadoras-detalle',
  templateUrl: 'organizadoras-detalle.html'
})
export class OrganizadorasDetallePage {

  organizador:any;
  sponsors_items: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public organizadorasDetalle:OrganizadorasDetalle, private sponsors: Sponsors ) {

    this.organizadorasDetalle.organizadorasDetalleGet(navParams.get('id')).subscribe(
      data => {
        this.organizador = data.data;
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
      },
      () => {
      }
    );

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizadorasDetallePage');
  }

  backInformacion(){

    this.navCtrl.setRoot(InformacionPage);
  }
}
