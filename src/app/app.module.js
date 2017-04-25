"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
//Components
var app_component_1 = require('./app.component');
var sponsors_component_1 = require('../pages/sponsors/sponsors.component');
var city_component_1 = require('../pages/city/city.component');
var cine_component_1 = require('../pages/cine/cine.component');
var result_1 = require('../pages/result/result');
var sala_component_1 = require('../pages/sala/sala.component');
var summary_1 = require('../pages/summary/summary');
var dashboard_1 = require('../pages/dashboard/dashboard');
var index_1 = require('../pages/index/index');
var register_1 = require('../pages/register/register');
var trivia_1 = require('../pages/trivia/trivia');
var final_1 = require('../pages/final/final');
var winner_1 = require('../pages/winner/winner');
//Providers
var rute_1 = require('../app/rute');
var sponsors_provider_1 = require('../pages/sponsors/sponsors.provider');
var cine_provider_1 = require('../pages/cine/cine.provider');
var city_provider_1 = require('../pages/city/city.provider');
var sala_provider_1 = require('../pages/sala/sala.provider');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                sponsors_component_1.sponsorsPage,
                city_component_1.CityPage,
                cine_component_1.CinePage,
                result_1.ResultPage,
                sala_component_1.SalaPage,
                summary_1.SummaryPage,
                dashboard_1.DashboardPage,
                index_1.IndexPage,
                register_1.RegisterPage,
                trivia_1.TriviaPage,
                final_1.FinalPage,
                winner_1.WinnerPage,
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp)
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                sponsors_component_1.sponsorsPage,
                city_component_1.CityPage,
                cine_component_1.CinePage,
                result_1.ResultPage,
                sala_component_1.SalaPage,
                summary_1.SummaryPage,
                dashboard_1.DashboardPage,
                index_1.IndexPage,
                register_1.RegisterPage,
                trivia_1.TriviaPage,
                final_1.FinalPage,
                winner_1.WinnerPage,
            ],
            providers: [rute_1.Rutas, sponsors_provider_1.Sponsors, cine_provider_1.Cine, city_provider_1.City, sala_provider_1.Sala, ionic_native_1.Facebook, { provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
