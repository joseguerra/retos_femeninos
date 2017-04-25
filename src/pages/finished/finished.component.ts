import { Component } from '@angular/core';
import { NavController,MenuController,AlertController,LoadingController } from 'ionic-angular';
import {Finished} from './finished.provider';
import { Storage } from '@ionic/storage';
import {CityWinnersPage} from '../cityWinners/cityWinners.component';
import {RootPage} from '../root/root';
@Component({
  selector: 'page-finished',
  templateUrl: 'finished.html'
})
export class FinishedPage {
  next: boolean = false;
  back: boolean = false;
  items: any;
  message: string;
  answer: number;
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private  menu: MenuController,
    public finished:Finished,
    public storage: Storage
  ) {
  }

  ionViewWillEnter(){
    this.menu.enable(true);
    this.conference();
  }

  conference(){
        let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
      this.finished.finished().subscribe(
        data => {
          if(data.data.length==0){            
            this.back = true;
          }
          if(data.data.length){               
            this.next = true;
          }
          this.items = data.data;
          loading.dismissAll();  
          
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

  doRefresh(refresher){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });    
    loading.present();
    this.finished.finished().subscribe(
      data => {
        if(data.data.length==0)
          this.back = true;          
        if(data.data.length)
          this.next = true;
        this.items = data.data;
        if (refresher != 0)
          refresher.complete();

        loading.dismissAll();        
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

  onclick(){
    this.storage.set('conference', this.answer);
    this.navCtrl.push(CityWinnersPage);
  }

    volver(){      
    this.navCtrl.push(RootPage);
  }

}
