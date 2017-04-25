import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {CinePage} from '../cine/cine.component';
import {City} from './city.provider';
import {TasksService} from '../../providers/tasks-service';
import { NavController,AlertController,LoadingController,MenuController } from 'ionic-angular';

@Component({
  selector: 'page-city',
  templateUrl: 'city.html'
})

export class CityPage {

  condicion: boolean = false;
  ciudades: any;
  items: any;
  answer: number;
  name: string;
  trivia: string;
  id_trivia: number;
  model = { options: 'two' };
  searchQuery: string = '';

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private  menu: MenuController,
    public city: City,
    public tasksService: TasksService
  ) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    this.tasksService.getToken().then((data) => {

      storage.get('id_trivia').then((val) => {
        this.id_trivia = val;
      });

      storage.get('trivia').then((val) => {
        this.trivia = val;
      });

      this.name = data.rows.item(0).name;

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
    })

  }

  ionViewWillEnter(){
    this.menu.enable(false);
  }

  doRefresh(refresher){
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

  onclick(id, city){
    console.log('city id ' + id );
    this.storage.set('idCity', id);
    this.storage.set('City', city);
    this.navCtrl.push(CinePage);
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
