"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var cine_1 = require('../cine/cine');
var CityPage = (function () {
    function CityPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var item = this.navParams.get('id');
        console.log(item);
        this.items = [
            { "city": "Buenos aires", "id": 1, "image": "./assets/Jeunesse-Logo.png" },
            { "city": "Cordova", "id": 2, "image": "./assets/hsbc-holdings-plc-logo.png" }
        ];
    }
    CityPage.prototype.itemSelected = function (id) {
        console.log(id);
    };
    CityPage.prototype.onclick = function (id) {
        this.navCtrl.push(cine_1.CinePage, {
            id: 1
        });
    };
    CityPage = __decorate([
        core_1.Component({
            selector: 'page-city',
            templateUrl: 'city.html'
        })
    ], CityPage);
    return CityPage;
}());
exports.CityPage = CityPage;
