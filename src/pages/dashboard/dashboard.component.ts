import { Component } from '@angular/core';
import { CityPage } from '../city/city.component';
import { RootPage } from '../root/root';
import { NavController,MenuController,AlertController,LoadingController } from 'ionic-angular';
import { Dashboard } from './dashboard.provider';
import { Storage } from '@ionic/storage';
import { TasksService } from '../../providers/tasks-service';

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html'
})


export class DashboardPage {

  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private menu: MenuController,
    public dashboard: Dashboard,
    public storage: Storage,
    public tasksService: TasksService
  ) {}

  ionViewWillEnter(){
    this.menu.enable(true);
    this.trivia();
  }

  trivia(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();


    this.tasksService.getToken().then((data) => {

      this.dashboard.trivias(data.rows.item(0).token).subscribe(
        data => {

            loading.dismissAll();
            this.storage.set('id_trivia', data.data.id);
            this.storage.set('trivia', data.data.title);
            let alert = this.alertCtrl.create({
              title: 'Participá y Ganá',
              subTitle: 'Ya esta disponible una nueva trivia, te deseamos mucha suerte!',
              buttons: [{
                text: 'Comenzar',
                handler: () => {
                  this.navCtrl.push(CityPage);
                }
              }]
            });
            alert.present();

        },
        err => {
          if(err.status == 404){

            console.log(err);
            console.log(err._body);
            loading.dismissAll();

            var response = JSON.parse(err._body);

            let alert = this.alertCtrl.create({
                  title: 'No hay trivias activas',
                  subTitle:  response.message, //'La trivia se activará el día 8 de Marzo.',
                  buttons: [{
                  text: 'Ok',
                  handler: () => {
                    //this.navCtrl.push(RootPage);
                    this.navCtrl.setRoot(RootPage);
                  }
                }]
            });
            alert.present();

          }else {

            loading.dismiss();
            let alert = this.alertCtrl.create({
              title: 'Lo sentimos',
              subTitle: 'Pruebe mas tarde',
              buttons: ['OK']
            });
            alert.present();
          }
        }
      );
    })
  }

}
