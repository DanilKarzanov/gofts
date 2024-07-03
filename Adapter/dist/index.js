"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SquareBrickAdapter_1 = require("./SquareBrickAdapter");
var RoundHole = /** @class */ (function () {
    function RoundHole() {
        this.radius = 2;
    }
    RoundHole.prototype.getRadius = function () {
        return this.radius;
    };
    RoundHole.prototype.fits = function (figure) {
        return this.radius >= figure.getRadius();
    };
    return RoundHole;
}());
var main = function () {
    var roundHole = new RoundHole();
    var roundBrick = new SquareBrickAdapter_1.RoundBrick();
    var squareBrick = new SquareBrickAdapter_1.SquareBrick();
    var squareBrickAdapter = new SquareBrickAdapter_1.SquareBrickAdapter(squareBrick);
    console.log(roundHole.fits(roundBrick));
    console.log(roundHole.fits(squareBrickAdapter));
};
main();
