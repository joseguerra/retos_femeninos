"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var trivia_1 = require('../trivia/trivia');
var ResultPage = (function () {
    function ResultPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        var item = this.navParams.get('id');
        console.log(item);
        this.image = "./assets/hsbc-holdings-plc-logo.png";
    }
    ResultPage.prototype.itemSelected = function (id) {
        console.log(id);
    };
    ResultPage.prototype.onclick = function () {
        this.navCtrl.push(trivia_1.TriviaPage);
    };
    ResultPage = __decorate([
        core_1.Component({
            selector: 'page-result',
            templateUrl: 'result.html'
        })
    ], ResultPage);
    return ResultPage;
}());
exports.ResultPage = ResultPage;
