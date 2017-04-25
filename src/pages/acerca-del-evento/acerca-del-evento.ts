import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
//import { Geolocation } from 'ionic-native';
import { InformacionPage } from '../informacion/informacion';
import { OradoresPage } from '../oradores/oradores';
import { PatrocinadoresPage } from '../patrocinadores/patrocinadores';
import { SalasPage } from '../salas/salas';
import { BoletosPage } from '../boletos/boletos';
import { RedesPage } from '../redes/redes';
import { Sponsors } from '../sponsors/sponsors.provider';
import { InAppBrowser } from 'ionic-native';

declare var google;

/*
  Generated class for the AcercaDelEvento page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-acerca-del-evento',
  templateUrl: 'acerca-del-evento.html'
})
export class AcercaDelEventoPage {

  sponsors_items = Array;

  informacionPage = InformacionPage;
  oradoresPage = OradoresPage;
  haveData:boolean = false;

  patrocinadoresPage = PatrocinadoresPage;
  salasPage = SalasPage;
  boletosPage = BoletosPage;
  redesPage = RedesPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sponsors: Sponsors, public loadingCtrl: LoadingController, private alertCtrl: AlertController) {

    this.sponsors.sponsorsGet().subscribe(
      data => {
        this.sponsors_items = data.data;
        this.haveData=true;
      },
      err => {
        this.presentAlert();
        console.log(err);
      },
      () => {
      }
    );

  }

  clickSalas(){

    let loader = this.loadingCtrl.create({
          content: "Verificando su GPS..."
        });

    loader.present();

    navigator.geolocation.getCurrentPosition(

          // Success callback.
          (position: Position) => {

            loader.dismiss();
            this.navCtrl.push(this.salasPage);

          },
          // Error callback.
          (error: PositionError) => {

            loader.dismiss();
            this.presentAlert();
          },
          {timeout:6000}
      );
  }

  launch(url) {

      let browser = new InAppBrowser(url, '_blank');

  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Atención',
      subTitle: 'Debe activar su GPS para acceder a esta sección',
      buttons: ['Volver']
    });
    alert.present();
  }

  presentAlertError() {
    let alert = this.alertCtrl.create({
      title: 'Atención',
      subTitle: 'No pudimos detectar su ubicación, intente desde un lugar abierto',
      buttons: ['Volver']
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcercaDelEventoPage');
  }

}
