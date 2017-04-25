import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,AlertController,LoadingController,MenuController } from 'ionic-angular';
import { CityPage } from '../city/city.component';
import { Sponsors } from './sponsors.provider';
import {TasksService} from '../../providers/tasks-service';
import { Rutas } from '../../app/rute';

@Component({
  selector: 'page-sponsors',
  templateUrl: 'sponsors.html'
})

export class sponsorsPage {

  items: any;
  image: string;
  condicion: boolean = false;
  answer: number;
  name: string;
  trivia: string;
  id_trivia: number;
  model = { options: 'two' , name: 'prueba' };

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public rutas: Rutas,
    private  menu: MenuController,
    private sponsors: Sponsors,
    public tasksService: TasksService
    ) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.image = rutas.imageGet();
    this.tasksService.getToken().then((data) => {
      storage.get('id_trivia').then((val) => {
        this.id_trivia = val;
      });

      storage.get('trivia').then((val) => {
        this.trivia = val;
      });

        this.name = data.rows.item(0).name;
        this.sponsors.sponsorsGet().subscribe(
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
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    this.image = this.rutas.imageGet();

    this.sponsors.sponsorsGet().subscribe(
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

  onclick(id,picture,name){
    this.storage.set('idSponsors', id);
    this.storage.set('pictureSponsors', picture);
    this.storage.set('namepictureSponsors', name);
    this.navCtrl.push(CityPage);
  }

}
