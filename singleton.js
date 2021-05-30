var Singleton = /** @class */ (function () {
    function Singleton() {
        this.field = Math.random();
    }
    Singleton.getInstance = function () {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    };
    Singleton.prototype.getNumber = function () {
        return this.field;
    };
    return Singleton;
}());
function main() {
    var s1 = Singleton.getInstance();
    var s2 = Singleton.getInstance();
    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.', s1.getNumber(), s2.getNumber());
    }
    else {
        console.log('Singleton failed, variables contain different instances.');
    }
}
main();
