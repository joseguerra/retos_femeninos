import { Component, ViewChild} from '@angular/core';
import { Nav,NavController, NavParams, Slides, AlertController, LoadingController } from 'ionic-angular';
import { AcercaDelEventoPage } from '../acerca-del-evento/acerca-del-evento';
import { DashboardPage } from '../dashboard/dashboard.component';
import { Sponsors } from '../sponsors/sponsors.provider';
import { News } from '../root/news.provider';
import { IndexPage } from '../index/index.component';
import { FinishedPage } from '../finished/finished.component';
import { TasksService } from '../../providers/tasks-service';
//import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { InAppBrowser } from 'ionic-native';

import {WinnerPage} from '../winner/winner.component';

@Component({
  selector: 'page-root',
  templateUrl: 'root.html'
})

export class RootPage {

  indexPage = IndexPage;
  finishedPage = FinishedPage;

  sponsors_items: any;
  acercaDelEventoPage = AcercaDelEventoPage;
  dashboardPage = DashboardPage;
  winnerPage = WinnerPage;

  news_items: any;
  haveData:boolean = false;
  haveSponsors:boolean = false;

  @ViewChild('mySlider') slider:Slides;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sponsors: Sponsors, private news: News, public loadingCtrl :LoadingController,public nav: Nav, public alertCtrl: AlertController, public tasksService:TasksService) {

    //this.nav.setRoot(RootPage);

    let loading = this.loadingCtrl.create({});

    loading.present();

    this.news.newsGet().subscribe(
      data => {
        this.news_items = data.data;
      },
      err => {
        console.log(err);
        loading.dismiss();
        let alert = this.alertCtrl.create({
          title: 'Sin conexión',
          subTitle: 'Se requiere conexión a internet para continuar.',
          buttons: [{
            text: 'Reintentar',
            handler: () => {
              this.navCtrl.setRoot(RootPage);
            }
          }]
        });
        alert.present();

      },
      () => {
        loading.dismiss();
        this.haveSponsors=true;
      }
    );

    this.sponsors.sponsorsGet().subscribe(
      data => {
        this.sponsors_items = data.data;
        this.haveData=true;
      },
      err => {
        console.log(err);
      },
      () => {
      }
    );
  }

  launch(url) {
      let browser = new InAppBrowser(url, '_blank');
  }

  onclick(){
    this.tasksService.getAll().then((data) => {
      if(data.rows.length){
        this.nav.setRoot(DashboardPage);
      }
       else{
         this.nav.setRoot(IndexPage);
       }
    })

  }



}
