"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var register_1 = require('../register/register');
var sponsors_component_1 = require('../sponsors/sponsors.component');
var IndexPage = (function () {
    function IndexPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    IndexPage.prototype.onclick = function () {
        this.navCtrl.push(register_1.RegisterPage, {
            id: 1
        });
    };
    IndexPage.prototype.onLogin = function () {
        this.navCtrl.push(sponsors_component_1.sponsorsPage, {
            id: 1
        });
    };
    IndexPage = __decorate([
        core_1.Component({
            selector: 'page-index',
            templateUrl: 'index.html'
        })
    ], IndexPage);
    return IndexPage;
}());
exports.IndexPage = IndexPage;
