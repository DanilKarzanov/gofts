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
var Beverage = /** @class */ (function () {
    function Beverage() {
    }
    return Beverage;
}());
var CondimentDecorator = /** @class */ (function (_super) {
    __extends(CondimentDecorator, _super);
    function CondimentDecorator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CondimentDecorator;
}(Beverage));
var Espresso = /** @class */ (function (_super) {
    __extends(Espresso, _super);
    function Espresso() {
        var _this = _super.call(this) || this;
        _this.description = "Espresso";
        return _this;
    }
    Espresso.prototype.getDescription = function () {
        return this.description;
    };
    Espresso.prototype.cost = function () {
        return 1.99;
    };
    return Espresso;
}(Beverage));
var HouseBlend = /** @class */ (function (_super) {
    __extends(HouseBlend, _super);
    function HouseBlend() {
        var _this = _super.call(this) || this;
        _this.description = "House Blend";
        return _this;
    }
    HouseBlend.prototype.getDescription = function () {
        return this.description;
    };
    HouseBlend.prototype.cost = function () {
        return 0.89;
    };
    return HouseBlend;
}(Beverage));
var Soy = /** @class */ (function (_super) {
    __extends(Soy, _super);
    function Soy(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Soy.prototype.getDescription = function () {
        return this.beverage.getDescription() + "Soy";
    };
    Soy.prototype.cost = function () {
        return this.beverage.cost() + 0.15;
    };
    return Soy;
}(CondimentDecorator));
var Milk = /** @class */ (function (_super) {
    __extends(Milk, _super);
    function Milk(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Milk.prototype.getDescription = function () {
        return this.beverage.getDescription() + "Milk";
    };
    Milk.prototype.cost = function () {
        return this.beverage.cost() + 0.10;
    };
    return Milk;
}(CondimentDecorator));
var Whip = /** @class */ (function (_super) {
    __extends(Whip, _super);
    function Whip(beverage) {
        var _this = _super.call(this) || this;
        _this.beverage = beverage;
        return _this;
    }
    Whip.prototype.getDescription = function () {
        return this.beverage.getDescription() + "Whip";
    };
    Whip.prototype.cost = function () {
        return this.beverage.cost() + 0.10;
    };
    return Whip;
}(CondimentDecorator));
var main = function () {
    var espresso = new Espresso();
    console.log(espresso.getDescription() + " " + espresso.cost());
    var espressoSoy = new Soy(espresso);
    console.log(espressoSoy.getDescription() + " " + espressoSoy.cost());
    var espressoSoyWhip = new Whip(espressoSoy);
    console.log(espressoSoyWhip.getDescription() + " " + espressoSoyWhip.cost());
};
main();
