"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var sala_1 = require('../sala/sala');
var CinePage = (function () {
    function CinePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var item = this.navParams.get('id');
        console.log(item);
        this.items = [
            { "cine": "Cinex", "id": 1 },
            { "cine": "Cines Unidos", "id": 2 }
        ];
    }
    CinePage.prototype.itemSelected = function (id) {
        console.log(id);
    };
    CinePage.prototype.onclick = function (id) {
        this.navCtrl.push(sala_1.SalaPage, {
            id: 1
        });
    };
    CinePage = __decorate([
        core_1.Component({
            selector: 'page-cine',
            templateUrl: 'cine.html'
        })
    ], CinePage);
    return CinePage;
}());
exports.CinePage = CinePage;
