import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController, NavParams,AlertController,LoadingController,MenuController } from 'ionic-angular';
import {sponsorsPage} from '../sponsors/sponsors.component';
import {Rutas} from '../../app/rute';
import {Winner} from './winner.provider';
@Component({
  selector: 'page-winner',
  templateUrl: 'winner.html'
})
export class WinnerPage {
  items: any;
  image: string;
  title: string;
  cine: string;
  city: string;
  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public rutas: Rutas,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private  menu: MenuController,
    public winner:Winner
  ) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    storage.get('idCine').then((val) => {
      this.winner.winners(val).subscribe(
        data => {
          this.items = data.data[0].winners;
          loading.dismiss();
        },
        err => {
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Lo sentimos',
            subTitle: 'Aún no se computaron los ganadores de este sitio',
            buttons: ['OK']
          });
          alert.present();
        }
      );
    })
  }

  ionViewWillEnter(){
    this.menu.enable(true);
  }


  doRefresh(refresher) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.storage.get('idCine').then((val) => {
      console.log(val);
      this.winner.winners(7).subscribe(
        data => {
          this.items = data.data.winners;
          loading.dismiss();
          if(refresher!=0)
            refresher.complete();
        },
        err => {
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Lo sentimos',
            subTitle: 'Aún no se computaron los ganadores de este sitio',
            buttons: ['OK']
          });
          alert.present();
        }
      );
    })


  }

  onclick(){
    this.navCtrl.push(sponsorsPage);
  }

}
