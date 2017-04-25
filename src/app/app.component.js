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
var sponsors_component_1 = require('../pages/sponsors/sponsors.component');
var dashboard_1 = require('../pages/dashboard/dashboard');
var winner_1 = require('../pages/winner/winner');
var MyApp = (function () {
    function MyApp(platform) {
        this.platform = platform;
        this.rootPage = dashboard_1.DashboardPage;
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Trivia', component: sponsors_component_1.sponsorsPage },
            { title: 'Ganadores', component: winner_1.WinnerPage },
            { title: 'Cerrar sesion', component: winner_1.WinnerPage },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
            ionic_native_1.Splashscreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'app.html'
        })
    ], MyApp);
    return MyApp;
}());
exports.MyApp = MyApp;
