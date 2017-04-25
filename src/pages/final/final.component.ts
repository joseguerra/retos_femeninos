import { Component } from '@angular/core';
import { Nav,MenuController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {RootPage} from '../root/root';
import {Rutas} from '../../app/rute';
@Component({
  selector: 'page-final',
  templateUrl: 'final.html'
})
export class FinalPage {
  items: any;
  image: string;
  segundos: number;
  length: number;
  points: number;
  pictureSponsors: string;
  constructor(
    public nav: Nav,
    public rutas: Rutas,
    private  menu: MenuController,
    public storage: Storage,
  ) {
    this.image = rutas.imageGet();
    storage.get('pictureSponsors').then((val) => {
      this.pictureSponsors = val;
      this.storage.get('segundos').then((segundos) => {
        this.segundos = segundos;
        storage.get('length').then((length) => {
          this.length = length;
          storage.get('points').then((points) => {
            this.points = points;
          })
        })
      })
    })

  }

  toRoot(){
    this.nav.setRoot(RootPage);
  }

  ionViewWillEnter(){
    this.menu.enable(true);
  }

  onclick(){
    this.nav.setRoot(RootPage);
  }

}
