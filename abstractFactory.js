var GamerHeadset = /** @class */ (function () {
    function GamerHeadset() {
    }
    GamerHeadset.prototype.makeStuff = function () {
        return 'create a gamer headset';
    };
    return GamerHeadset;
}());
var OfficeHeadset = /** @class */ (function () {
    function OfficeHeadset() {
    }
    OfficeHeadset.prototype.makeStuff = function () {
        return 'create a office headset';
    };
    return OfficeHeadset;
}());
var GamerChair = /** @class */ (function () {
    function GamerChair() {
    }
    GamerChair.prototype.makeStuff = function () {
        return 'create a gamer chair';
    };
    return GamerChair;
}());
var OficceChair = /** @class */ (function () {
    function OficceChair(armSupport) {
        this.armSupport = armSupport;
    }
    OficceChair.prototype.makeStuff = function () {
        return 'create a office chair' + (this.armSupport ? 'with arm support' : '');
    };
    return OficceChair;
}());
var gamerFactory = /** @class */ (function () {
    function gamerFactory() {
    }
    gamerFactory.prototype.createChair = function () {
        return new GamerChair();
    };
    gamerFactory.prototype.createHeadset = function () {
        return new GamerHeadset();
    };
    return gamerFactory;
}());
var officeFactory = /** @class */ (function () {
    function officeFactory() {
    }
    officeFactory.prototype.createChair = function () {
        return new OficceChair(true);
    };
    officeFactory.prototype.createHeadset = function () {
        return new OfficeHeadset();
    };
    return officeFactory;
}());
var App = /** @class */ (function () {
    function App(factory) {
        this.factory = factory;
    }
    App.prototype.createChair = function () {
        this.chair = this.factory.createChair();
        return this.chair.makeStuff();
    };
    App.prototype.createHeadset = function () {
        this.headset = this.factory.createHeadset();
        return this.headset.makeStuff();
    };
    return App;
}());
function main(type) {
    var factory;
    if (type.toLocaleLowerCase() === 'gamer') {
        factory = new gamerFactory();
    }
    else {
        factory = new officeFactory();
    }
    var app = new App(factory);
    console.log(app.createChair(), app.createHeadset());
}
main('office');
