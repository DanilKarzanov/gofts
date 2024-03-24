"use strict";
exports.__esModule = true;
exports.Observer = void 0;
var Observer = /** @class */ (function () {
    function Observer(subject) {
        this.subject = subject;
        this.subject.registerObserver(this);
    }
    Observer.prototype.update = function (temperature, humidity, pressure) {
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.display();
    };
    Observer.prototype.display = function () {
        console.log("Temperature is - %d", this.temperature);
        console.log("Humidity is - %d", this.humidity);
        console.log("Pressure is - %d", this.pressure);
    };
    return Observer;
}());
exports.Observer = Observer;
