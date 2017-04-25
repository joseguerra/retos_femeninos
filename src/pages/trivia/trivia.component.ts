import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Nav,AlertController,LoadingController,MenuController  } from 'ionic-angular';
import {FinalPage} from '../final/final.component';
import {Trivia} from './trivia.provider';
import {Rutas} from '../../app/rute';
import {trivia} from './class';
import {TasksService} from '../../providers/tasks-service';


@Component({
  selector: 'page-trivia',
  templateUrl: 'trivia.html'
})

export class TriviaPage {
  items: any;
  image: string;
  pictureSponsors: string;
  question: string;
  questionId: number;
  segundos: number;
  object: any[] = [];
  answer: number = 0;
  name: string;
  id_trivia: number;
  trivia_name: string;
  final: trivia;


  constructor(
    public nav: Nav,
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    public storage: Storage,
    public rutas: Rutas,
    private  menu: MenuController,
    public trivia:Trivia,
    public tasksService:TasksService
  ) {
    this.segundos = 0;
    setInterval(() => this.segundos++,1000);
    this.image = rutas.imageGet();
    storage.get('pictureSponsors').then((val) => {
      this.pictureSponsors = val;
    })

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    this.tasksService.getToken().then((data) => {
      storage.get('id_trivia').then((val) => {
        this.id_trivia = val;
      })

      storage.get('trivia').then((val) => {
        this.trivia_name = val;
      })

      this.name = data.rows.item(0).name;

      storage.get('id_trivia').then((id_trivia) => {
        this.trivia.questions(id_trivia).subscribe(
          data => {
            if (data.message == "Questions retrieved successfully") {
              storage.set('length', data.data.length);
              storage.set('i', 0);
              this.question = data.data[0].question;
              this.questionId = data.data[0].id;
              this.items = data.data[0].answers;

              loading.dismiss();
            }
            else {
              loading.dismiss();
            }
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
    this.segundos = 0;
    this.object = [];
  }

  nextTrivia(){
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    this.storage.get('id_trivia').then((id_trivia) => {
      this.trivia.questions(id_trivia).subscribe(
        data => {
          if (data.message == "Questions retrieved successfully") {
            this.storage.get('i').then((i) => {
              this.question = data.data[i].question;
              this.questionId = data.data[i].id;
              this.items = data.data[i].answers;
              loading.dismiss();
            })
          }
          else {
            loading.dismiss();
          }
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



  onclick(){
    //var  cadena = "question["+this.questionId+"]";
    //var obj[cadena] = this.answer;
    //this.object[cadena] = this.answer;
    //this.object.push(obj);
    //console.log(this.object);

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    console.log('siguiente');

    this.storage.get('length').then((length) => {
      this.storage.get('i').then((i) => {
        var prueba = 0;
        prueba = 1+i;

        this.storage.set('i', prueba);
        this.object.push({"question": this.questionId, "answer": this.answer});

        if(prueba<length){
          this.answer = 0;

          this.nextTrivia();
          loading.dismiss();
        }
        else{
          this.storage.set('segundos', this.segundos);
          console.log(this.object);
          this.storage.get('idSponsors').then((idSponsors) => {
            this.storage.get('idCine').then((idCine) => {
              this.storage.get('id_trivia').then((id_trivia) => {
                this.tasksService.getToken().then((data) => {
                  this.final = {
                    time: this.segundos,
                    sponsor_id: idSponsors,
                    token:data.rows.item(0).token,
                    trivia_id: id_trivia,
                    place_id: idCine,
                    question: this.object
                  };

                  console.log(this.final);

                  loading.dismiss();

                  this.trivia.store(this.final).subscribe(
                    data => {
                      this.storage.set('points', data.data.points);
                      loading.dismiss();
                      this.nav.setRoot(FinalPage);
                    },
                    err => {
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
            })
          })
        }

      })


    })

  }

}
