import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import {ResultPage} from '../result/result.component';
import {TasksService} from '../../providers/tasks-service';
import { NavController,AlertController,LoadingController,MenuController } from 'ionic-angular';
import {Sala} from './sala.provider';

@Component({
  selector: 'page-sala',
  templateUrl: 'sala.html'
})

export class SalaPage {

  items: any;
  condicion: boolean = false;
  answer: number;
  name: string;
  trivia: string;
  id_trivia: number;
  model = { options: 'two' };

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private  menu: MenuController,
    public sala: Sala,
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
    this.navCtrl.push(ResultPage);
  }
}
