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
var Creator = /** @class */ (function () {
    function Creator() {
    }
    Creator.prototype.someOperation = function () {
        var anyTransport = this.factoryMethod();
        return "Creator: The same creator's code has just worked with " + anyTransport.delivery();
    };
    return Creator;
}());
var carCreator = /** @class */ (function (_super) {
    __extends(carCreator, _super);
    function carCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    carCreator.prototype.factoryMethod = function () {
        return new car();
    };
    return carCreator;
}(Creator));
var boatCreator = /** @class */ (function (_super) {
    __extends(boatCreator, _super);
    function boatCreator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    boatCreator.prototype.factoryMethod = function () {
        return new car();
    };
    return boatCreator;
}(Creator));
var car = /** @class */ (function () {
    function car() {
    }
    car.prototype.delivery = function () {
        return '{Result of the car}';
    };
    return car;
}());
var boat = /** @class */ (function () {
    function boat() {
    }
    boat.prototype.delivery = function () {
        return '{Result of the boat}';
    };
    return boat;
}());
function clientCode(creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.someOperation());
    // ...
}
console.log('App: Launched with the ConcreteCreator1.');
clientCode(new carCreator());
console.log('');
console.log('App: Launched with the ConcreteCreator2.');
clientCode(new boatCreator());
