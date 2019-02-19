
class Engine {
    type: string;

    constructor(type) {
        this.type = type;
    }

    start() {
        console.log(this.type + ' engine started..');
    }
}

function startEngine(e: Engine) {
    e.start();
}

let e = new Engine('Honda');
startEngine(e);

let e2 = new Engine('Maruti');
startEngine(e2);