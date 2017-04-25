import { Component } from '@angular/core';
import {Validators, FormBuilder } from '@angular/forms';
import { NavController,AlertController,LoadingController  } from 'ionic-angular';
import {IndexPage} from '../index/index.component';
import {Register} from './register.provider';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  nombre: string;
  password: string;
  email: string;
  todo: any;
  constructor(
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public alertCtrl: AlertController,
    private formBuilder: FormBuilder,
    public register:Register
  ) {
    this.todo = this.formBuilder.group({
      nombre: ['', Validators.required],
      email: ['', Validators.required,],
      password: ['', Validators.compose([Validators.minLength(6),Validators.maxLength(12), Validators.required])],
    });
  }

  onclick() {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.register.register(this.nombre,this.password,this.email).subscribe(
      data => {
        loading.dismissAll();
        let alert = this.alertCtrl.create({
          title: 'Ya estas Registrado',
          subTitle: 'Por favor chequea tu correo. Gracias!',
          buttons: [{
          text: 'Ok',            
          handler: () => {
            this.navCtrl.push(IndexPage);
          }
        }]
        });
        alert.present();   
      },
      err => {
        
        if(err.status == 400){          
          loading.dismiss();
          let alert = this.alertCtrl.create({
            title: 'Error',
            subTitle: 'Su email es invalido o ya ha sido tomado',
            buttons: ['OK']
          });
          alert.present();
        }
        else if(err.status == 404){
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

}
