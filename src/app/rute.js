"use strict";
var Rutas = (function () {
    function Rutas() {
        this.urlbase = "http://dimmexico.co/api/";
    }
    Rutas.prototype.sponsorsGet = function () {
        return this.urlbase + "sponsors/";
    };
    return Rutas;
}());
exports.Rutas = Rutas;
