"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var result_1 = require('../result/result');
var SalaPage = (function () {
    function SalaPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var item = this.navParams.get('id');
        console.log(item);
        this.items = [
            { "sala": "Sala 1", "id": 1 },
            { "sala": "Sala 2", "id": 2 }
        ];
    }
    SalaPage.prototype.itemSelected = function (id) {
        console.log(id);
    };
    SalaPage.prototype.onclick = function (id) {
        this.navCtrl.push(result_1.ResultPage, {
            id: 1
        });
    };
    SalaPage = __decorate([
        core_1.Component({
            selector: 'page-sala',
            templateUrl: 'sala.html'
        })
    ], SalaPage);
    return SalaPage;
}());
exports.SalaPage = SalaPage;
