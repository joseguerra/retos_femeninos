import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { InAppBrowser } from 'ionic-native';
import { Sponsors } from '../sponsors/sponsors.provider';

/*
  Generated class for the Redes page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-redes',
  templateUrl: 'redes.html'
})
export class RedesPage {

  sponsors_items: any;
  haveData: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private sponsors: Sponsors, public platform: Platform) {

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad RedesPage');
  }


  launch(url) {

      let browser = new InAppBrowser(url, '_system');

  }

  launchFacebook(){
    var url;
    var options = "location: yes" ;

    if (this.platform.is('android') ) {
				url = "https://www.facebook.com/n/?https://www.facebook.com/retos.femeninos/";
        console.log('Open facebook browser (' + url + ')');
		} else {
			console.log('Open facebook browser (' + url + ')');
			url = 'https://www.facebook.com/456816674402638';
		}
    let browser = new InAppBrowser(url, '_system');
  }
}
