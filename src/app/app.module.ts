import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicImageLoader } from 'ionic-image-loader';
import { Facebook } from 'ionic-native';
import { Storage } from '@ionic/storage';

////////////////////////////////////////////////////////////////////////////////////////
// Components
////////////////////////////////////////////////////////////////////////////////////////

import { MyApp } from './app.component';
import {sponsorsPage} from '../pages/sponsors/sponsors.component';
import {CityPage} from '../pages/city/city.component';
import {CityWinnersPage} from '../pages/cityWinners/cityWinners.component';
import {CinePage} from '../pages/cine/cine.component';
import {CineWinnersPage} from '../pages/cineWinners/cineWinners.component';
import {ResultPage} from '../pages/result/result.component';
import {SalaPage} from '../pages/sala/sala.component';
import {SalaWinnersPage} from '../pages/salaWinners/salaWinners.component';
import {DashboardPage} from '../pages/dashboard/dashboard.component';
import {IndexPage} from '../pages/index/index.component';
import {RegisterPage} from '../pages/register/register.component';
import {TriviaPage} from '../pages/trivia/trivia.component';
import {FinalPage} from '../pages/final/final.component';
import {WinnerPage} from '../pages/winner/winner.component';
import {RootPage} from '../pages/root/root';
import {InformacionPage} from '../pages/informacion/informacion';
import {OradoresPage} from '../pages/oradores/oradores';
import {OradoresDetallePage} from '../pages/oradores-detalle/oradores-detalle';
import {OrganizadorasPage} from '../pages/organizadoras/organizadoras';
import {OrganizadorasDetallePage} from '../pages/organizadoras-detalle/organizadoras-detalle';
import {AcercaDelEventoPage} from '../pages/acerca-del-evento/acerca-del-evento';
import {PatrocinadoresPage} from '../pages/patrocinadores/patrocinadores';
import {PatrocinadoresDetallePage} from '../pages/patrocinadores-detalle/patrocinadores-detalle'
import {SalasPage} from '../pages/salas/salas';
import {BoletosPage} from '../pages/boletos/boletos';
import {RedesPage} from '../pages/redes/redes';
import {FinishedPage} from '../pages/finished/finished.component';
import {ContenidosPage} from '../pages/contenidos/contenidos';
import {ContenidosDetallePage} from '../pages/contenidos-detalle/contenidos-detalle';


////////////////////////////////////////////////////////////////////////////////////////
// Providers
////////////////////////////////////////////////////////////////////////////////////////

import {Rutas} from '../app/rute';
import {Sponsors} from '../pages/sponsors/sponsors.provider';
import {Oradores} from '../pages/oradores/oradores.provider';
import {OradoresDetalle} from '../pages/oradores-detalle/oradores-detalle.provider';
import {Cine} from '../pages/cine/cine.provider';
import {CineWinners} from '../pages/cineWinners/cineWinners.provider';
import {City} from '../pages/city/city.provider';
import {CityWinners} from '../pages/cityWinners/cityWinners.provider';
import {Sala} from '../pages/sala/sala.provider';
import {SalaWinners} from '../pages/salaWinners/salaWinners.provider';
import {Result} from '../pages/result/result.provider';
import {Trivia} from '../pages/trivia/trivia.provider';
import {Final} from '../pages/final/final.provider';
import {Winner} from '../pages/winner/winner.provider';
import {Dashboard} from '../pages/dashboard/dashboard.provider';
import {Index} from '../pages/index/index.provider';
import {Register} from '../pages/register/register.provider';
import {Finished} from '../pages/finished/finished.provider';
import {Patrocinadores} from '../pages/patrocinadores/patrocinadores.provider';
import {Contenidos} from '../pages/contenidos/contenidos.provider';
import {ContenidosDetalle} from '../pages/contenidos-detalle/contenidos-detalle.provider';
import {Salas} from '../pages/salas/salas.provider';
import {News} from '../pages/root/news.provider';
import {TasksService} from '../providers/tasks-service';
import {Organizadoras} from '../pages/organizadoras/organizadoras.provider';
import {OrganizadorasDetalle} from '../pages/organizadoras-detalle/organizadoras-detalle.provider';


//Pipes
import {Seconds} from '../pipes/seconds';
@NgModule({
  declarations: [
    MyApp,
    sponsorsPage,
    CityPage,
    CityWinnersPage,
    CinePage,
    CineWinnersPage,
    ResultPage,
    SalaPage,
    SalaWinnersPage,
    DashboardPage,
    IndexPage,
    RegisterPage,    
    TriviaPage,
    FinalPage,
    WinnerPage,
    RootPage,
    InformacionPage,
    OradoresPage,
    OrganizadorasPage,
    OrganizadorasDetallePage,
    AcercaDelEventoPage,
    PatrocinadoresPage,
    SalasPage,
    BoletosPage,
    RedesPage,
    OradoresDetallePage,
    PatrocinadoresDetallePage,
    FinishedPage,
    Seconds,
    ContenidosPage,
    ContenidosDetallePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp, {
      backButtonText: '',
      iconMode: 'ios',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
      //tabsPlacement: 'bottom',
      pageTransition: 'ios'
      }, {}
    ), FormsModule, IonicImageLoader

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    sponsorsPage,
    CityPage,
    CityWinnersPage,
    CinePage,
    CineWinnersPage,
    ResultPage,
    SalaPage,
    SalaWinnersPage,
    DashboardPage,
    IndexPage,
    RegisterPage,    
    TriviaPage,
    FinalPage,
    WinnerPage,
    RootPage,
    InformacionPage,
    OradoresPage,
    OrganizadorasPage,
    OrganizadorasDetallePage,
    AcercaDelEventoPage,
    PatrocinadoresPage,
    SalasPage,
    BoletosPage,
    RedesPage,
    OradoresDetallePage,
    PatrocinadoresDetallePage,
    FinishedPage,
    ContenidosPage,
    ContenidosDetallePage,
  ],

  providers: [Rutas, Organizadoras, OrganizadorasDetalle, News, Salas, Contenidos, ContenidosDetalle, Patrocinadores, Sponsors, Cine, City, Sala, Oradores, OradoresDetalle, Result, Trivia, Final, Winner, Dashboard, Index, Register, Finished, CityWinners, SalaWinners, CineWinners, Storage, Facebook,TasksService, {provide: ErrorHandler, useClass: IonicErrorHandler}]

})
export class AppModule {}
