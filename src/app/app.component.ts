import { Component, ViewChild } from '@angular/core';
import { Nav, Platform,AlertController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { RootPage } from '../pages/root/root';
import { IndexPage } from '../pages/index/index.component';
import { FinishedPage } from '../pages/finished/finished.component';
import { InformacionPage } from '../pages/informacion/informacion';
import { OradoresPage } from '../pages/oradores/oradores';
import { PatrocinadoresPage } from '../pages/patrocinadores/patrocinadores';
import { SalasPage } from '../pages/salas/salas';
import { RedesPage } from '../pages/redes/redes';
import {TasksService} from '../providers/tasks-service';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = RootPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,public alertCtrl: AlertController,public tasksService:TasksService) {



    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.initializeApp();
      StatusBar.styleDefault();
      //Splashscreen.hide();
    });



    // used for an example of ngFor and navigation
    this.pages = [

      { title: 'Inicio', component: RootPage },
      { title: 'Información', component: InformacionPage },
      { title: 'Oradores', component: OradoresPage },
      //{ title: 'Trivia', component: sponsorsPage },
      { title: 'Patrocinadores', component: PatrocinadoresPage },
      //{ title: 'Salas Cinépolis', component: SalasPage },
      { title: 'Redes Sociales', component: RedesPage },
      //{ title: 'Ganadores', component: FinishedPage },

    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();

      this.tasksService.openDataBase().then(() => this.tasksService.createTable())
      Splashscreen.hide();

    });
  }

  close() {

    let alert = this.alertCtrl.create({
      title: 'Desea cerrar sesión ? ',
      buttons: [
        {
          text: 'Cerrar',
          handler: data => {
            this.nav.setRoot(IndexPage);
          }
        },
        {
          text: 'Cancelar',
          handler: data => {
            console.log('Cancel');
          }
        }
      ]
    });

    alert.present();
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
