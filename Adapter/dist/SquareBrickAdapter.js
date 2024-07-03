"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SquareBrickAdapter = exports.SquareBrick = exports.RoundBrick = void 0;
var RoundBrick = /** @class */ (function () {
    function RoundBrick() {
        this.radius = 1.8;
    }
    RoundBrick.prototype.getRadius = function () {
        return this.radius;
    };
    return RoundBrick;
}());
exports.RoundBrick = RoundBrick;
var SquareBrick = /** @class */ (function () {
    function SquareBrick() {
        this.width = 1;
    }
    SquareBrick.prototype.getWidth = function () {
        return this.width;
    };
    return SquareBrick;
}());
exports.SquareBrick = SquareBrick;
var SquareBrickAdapter = /** @class */ (function (_super) {
    __extends(SquareBrickAdapter, _super);
    function SquareBrickAdapter(adaptee) {
        var _this = _super.call(this) || this;
        _this.adaptee = adaptee;
        return _this;
    }
    SquareBrickAdapter.prototype.utilFunc = function (width) {
        return width * Math.sqrt(2) / 2;
    };
    SquareBrickAdapter.prototype.getRadius = function () {
        return this.utilFunc(this.adaptee.getWidth());
    };
    return SquareBrickAdapter;
}(RoundBrick));
exports.SquareBrickAdapter = SquareBrickAdapter;
