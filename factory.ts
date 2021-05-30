interface transport {
    delivery: () => string;
}

abstract class Creator{
    public abstract factoryMethod():transport;

    public deliverTransport(): string {
        const anyTransport = this.factoryMethod();
        return `Creator: The same creator's code has just worked with ${anyTransport.delivery()}`;
    }
}


class carCreator extends Creator {

    public factoryMethod(): transport {
        return new car();
    }
}

class boatCreator extends Creator {

    public factoryMethod(): transport {
        return new boat();
    }
}



class car implements transport {
    public delivery(): string {
        return '{Result of the car}';
    }
}


class boat implements transport {
    public delivery(): string {
        return '{Result of the boat}';
    }
}
function clientCode(creator: Creator) {
    // ...
    console.log('Client: I\'m not aware of the creator\'s class, but it still works.');
    console.log(creator.deliverTransport());
    // ...
}

console.log('App: Launched with the ConcreteCreator1.');
clientCode(new carCreator());
console.log('');

console.log('App: Launched with the ConcreteCreator2.');
clientCode(new boatCreator());