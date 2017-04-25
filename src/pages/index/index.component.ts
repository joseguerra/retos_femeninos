import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Nav,NavController,AlertController,LoadingController,MenuController } from 'ionic-angular';
import { RegisterPage } from '../register/register.component';
import { DashboardPage } from '../dashboard/dashboard.component';
import { Index } from './index.provider';
import { Facebook } from 'ionic-native';
import { TasksService } from '../../providers/tasks-service';
import { InAppBrowser } from 'ionic-native';

@Component({
  selector: 'page-index',
  templateUrl: 'index.html'
})

export class IndexPage {
  email: string;
  password: string;
  todo: any;
  constructor(public navCtrl: NavController,
              public nav: Nav,
              public index: Index,
              public loadingCtrl: LoadingController,
              public alertCtrl: AlertController,
              private formBuilder: FormBuilder,
              private  menu: MenuController,
              public tasksService:TasksService
  ) {

    //this.menu.enable(false);
    this.todo = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.compose([Validators.minLength(6),Validators.maxLength(12), Validators.required])],
    });
  }

  onclick(){
    this.navCtrl.push(RegisterPage);
  }

  launch(url) {

      let browser = new InAppBrowser(url, '_blank');

  }
  
  onLogin(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();
    this.index.login(this.email,this.password).subscribe(
      data => {
          this.tasksService.create(data.data.token,data.data.name).then((data) => {
              loading.dismiss();
              this.nav.setRoot(DashboardPage);
          })
      },
      err => {
        if(err.status == 404){
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Combinacion incorrecta',
            buttons: ['OK']
          });
          alert.present();
        }
        else{
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
  }

  facebookLogin(){
    Facebook.login(['email']).then((response) =>{
      let token = response.authResponse.accessToken;
      let userID = response.authResponse.userID;
        Facebook.getLoginStatus().then((response) => {
            if(response.status == "connected") {
                Facebook.api('/' + response.authResponse.userID + '?fields=id,name,email',[]).then((response) => {
                    let loading = this.loadingCtrl.create({
                      content: 'Please wait...'
                    });
                    loading.present();
                    this.index.facebookRegister(token,response.name,response.email,userID).subscribe(
                      data => {
                          this.tasksService.create(token,response.name).then(() => {
                              loading.dismiss();
                              this.nav.setRoot(DashboardPage);
                          })
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
                },(error) =>{
                    alert(error);
                }
                );
            }
            else {
                alert('Not logged in');
            }
        })

      }, (error) => {
        console.log("nuevo error");
            alert(error);
        })

  }

}
