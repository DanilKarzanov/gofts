"use strict";
exports.__esModule = true;
exports.Subject = void 0;
var Subject = /** @class */ (function () {
    function Subject() {
        this.observers = new Set();
    }
    Subject.prototype.registerObserver = function (observer) {
        this.observers.add(observer);
    };
    Subject.prototype.removeObserver = function (observer) {
        this.observers["delete"](observer);
    };
    Subject.prototype.notifyObservers = function () {
        var _this = this;
        this.observers.forEach(function (obs) {
            obs.update(_this.temperature, _this.humidity, _this.pressure);
        });
    };
    Subject.prototype.setData = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.notifyObservers();
    };
    return Subject;
}());
exports.Subject = Subject;
