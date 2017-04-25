import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {WinnerPage} from '../winner/winner.component';
import { NavController,AlertController,LoadingController,MenuController } from 'ionic-angular';
import { Cine } from '../cine/cine.provider';

@Component({
  selector: 'page-cineWinners',
  templateUrl: 'cineWinners.html'
})
export class CineWinnersPage {

  condicion: boolean = false;
  items: any;
  title: string;
  answer: number;
  model = { options: 'two' };
  idCity:number;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private menu: MenuController,
    public cine: Cine
  ) {

    storage.get('conference').then((val) => {
      this.title = val;
    })

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    storage.get('idCity').then((val) => {
      this.idCity = val;
      console.log('idcity ==>>' + val);


      this.cine.placesGet(this.idCity).subscribe(

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

    this.cine.placesGet(this.idCity).subscribe(
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
  }

  onclick(id,cine){
    this.storage.set('idCine', id);
    this.storage.set('cine', cine);
    this.navCtrl.push(WinnerPage);
  }

}
