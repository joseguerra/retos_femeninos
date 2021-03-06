"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
require('rxjs/add/operator/map');
/*
  Generated class for the Sponsors provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var Sponsors = (function () {
    function Sponsors(http, rutas) {
        this.http = http;
        this.rutas = rutas;
    }
    Sponsors.prototype.sponsorsGet = function () {
        this.http.get(this.rutas.sponsorsGet()).map(function (res) { return res.json(); }).subscribe(function (data) {
            return data;
        });
    };
    Sponsors = __decorate([
        core_1.Injectable()
    ], Sponsors);
    return Sponsors;
}());
console.log("sponsor.provider.js");
exports.Sponsors = Sponsors;
