import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {CineWinnersPage} from '../cineWinners/cineWinners.component';
import {CityWinners} from './cityWinners.provider';
import { NavController, NavParams,AlertController,LoadingController,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-cityWinners',
  templateUrl: 'cityWinners.html'
})
export class CityWinnersPage {
  items: any;
  title: string;
  condicion: boolean = false;
  answer: number;
  model = { options: 'two' };
  ciudades: any;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public navParams: NavParams,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private  menu: MenuController,
    public city: CityWinners
  ) {
    storage.get('conference').then((val) => {
      this.title = val;
    })
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.city.cityGet().subscribe(
      data => {
        if(data.data.length==0)
          this.condicion = true;
        if(data.data.length)
          this.condicion = false;
          this.ciudades = data.data;
          loading.dismiss();
          this.initializeItems();
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
    this.city.cityGet().subscribe(
      data => {
        if(data.data.length==0)
          this.condicion = true;
        if(data.data.length)
          this.condicion = false;
        this.items = data.data;
        if (refresher != 0)
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

  onclick(id,city){
    this.storage.set('idCity', id);
    this.storage.set('City', city);
    this.navCtrl.push(CineWinnersPage);
  }

  initializeItems() {
    console.log('initializeItems');
    this.items = this.ciudades;
  }

  getItems(ev: any) {
    console.log(ev);
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.city.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
 
}
