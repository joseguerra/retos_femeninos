import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Organizadoras } from './organizadoras.provider';
import { OrganizadorasDetallePage } from '../organizadoras-detalle/organizadoras-detalle';
import { Sponsors } from '../sponsors/sponsors.provider';

/*
  Generated class for the Organizadoras page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-organizadoras',
  templateUrl: 'organizadoras.html'
})
export class OrganizadorasPage {

  sponsors_items= Array;
  organizadoras_items: any;
  organizadorasDetallePage = OrganizadorasDetallePage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sponsors: Sponsors , private organizadoras: Organizadoras, public loadingCtrl :LoadingController) {

    let loading = this.loadingCtrl.create({});

    loading.present();

    this.organizadoras.organizadorasGet().subscribe(

      data => {
        this.organizadoras_items= data.data;
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
    this.navCtrl.push(this.organizadorasDetallePage, {'id':id});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrganizadorasPage');
  }

}
