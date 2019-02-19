var Engine = (function () {
    function Engine(type) {
        this.type = type;
    }
    Engine.prototype.start = function () {
        console.log(this.type + ' engine started..');
    };
    return Engine;
}());
function startEngine(e) {
    e.start();
}
var e = new Engine('Honda');
startEngine(e);
var e2 = new Engine('Maruti');
startEngine(e2);
