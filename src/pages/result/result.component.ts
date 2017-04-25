import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController,MenuController,LoadingController } from 'ionic-angular';
import {TriviaPage} from '../trivia/trivia.component';
import {TasksService} from '../../providers/tasks-service';
import { CityPage } from '../city/city.component';

@Component({
  selector: 'page-result',
  templateUrl: 'result.html'
})

export class ResultPage {
  city: string;
  cine: string;
  sala: string;
  name: string;
  id_trivia: number;
  trivia: string;
  namepictureSponsors: string;

  constructor(
    public navCtrl: NavController,
    public storage: Storage,
    public loadingCtrl: LoadingController,
    private  menu: MenuController,
    public tasksService: TasksService
  ) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.tasksService.getToken().then((data) => {

      this.name = data.rows.item(0).name;

      storage.get('namepictureSponsors').then((val) => {
        this.namepictureSponsors = val;
      })

      storage.get('trivia').then((val) => {
        this.trivia = val;
      });
      
      storage.get('id_trivia').then((val) => {
        this.id_trivia = val;
      })

      storage.get('City').then((val) => {
        this.city = val;
      })

      storage.get('cine').then((val) => {
        this.cine = val;
      })

      storage.get('sala').then((val) => {
        console.log(val);
        this.sala = val;
      })

      loading.dismiss();
    })
  }

  ionViewWillEnter(){
    this.menu.enable(false);
  }

  onclick(){
    this.navCtrl.push(TriviaPage);
  }

  onSponsors(){
    this.navCtrl.push(CityPage);
  }

}
