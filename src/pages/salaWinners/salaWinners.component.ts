import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {WinnerPage} from '../winner/winner.component';

import { Nav,AlertController,LoadingController,MenuController } from 'ionic-angular';
import {SalaWinners} from './salaWinners.provider';
@Component({
  selector: 'page-SalaWinners',
  templateUrl: 'SalaWinners.html'
})
export class SalaWinnersPage {
  condicion: boolean = false;
  items: any;
  title: string;
  answer: number;
  model = { options: 'two' };
  constructor(
    public nav: Nav,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private  menu: MenuController,
    public sala: SalaWinners
  ) {
    storage.get('conference').then((val) => {
      this.title = val;
    })
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    storage.get('idCine').then((val) => {
      this.sala.roomsGet(val).subscribe(
        data => {
          if(data.data.length==0)
            this.condicion = true;
          if(data.data.length)
            this.condicion = false;
          this.items = data.data;
          loading.dismiss();
        },
        err => {
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Lo sentimos',
            subTitle: 'Pruebe mas tarde',
            buttons: ['OK']
          });
          alert.present();
        }
      );
    })

  }

  ionViewWillEnter(){
    this.menu.enable(false);
    
  }

  doRefresh(refresher){
    this.storage.get('conference').then((val) => {
      this.title = val;
    })
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.storage.get('idCine').then((val) => {
      this.sala.roomsGet(val).subscribe(
        data => {
          if(data.data.length==0)
            this.condicion = true;
          if(data.data.length)
            this.condicion = false;
          this.items = data.data;
          if(refresher!=0)
            refresher.complete();
          loading.dismiss();
        },
        err => {
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Lo sentimos',
            subTitle: 'Pruebe mas tarde',
            buttons: ['OK']
          });
          alert.present();
        }
      );
    })
  }

  onclick(id,sala){
    this.storage.set('idSala', id);
    this.storage.set('sala', sala);
    this.nav.setRoot(WinnerPage);
  }
}
