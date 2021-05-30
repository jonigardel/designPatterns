interface Chair{
    makeStuff: () => string;
}

interface Headset{
    makeStuff: ()=> string;
}

interface AbstractFactory{
    createChair:() => Chair;
    createHeadset: () => Headset
}

class GamerHeadset implements Headset{
    makeStuff(){
        return 'create a gamer headset';
    }
}

class OfficeHeadset implements Headset{
    makeStuff(){
        return 'create a office headset'; 
    }
}

class GamerChair implements Chair {

    makeStuff(){
        return 'create a gamer chair';
    }
}

class OficceChair implements Chair{
    armSupport: boolean;
    constructor(armSupport:boolean){
        this.armSupport = armSupport;
    }

    makeStuff(){
        return 'create a office chair ' + (this.armSupport ? 'with arm support' : '');
    }
}

class gamerFactory implements AbstractFactory {
    createChair(){
        return new GamerChair();
    }
    createHeadset(){
        return new GamerHeadset();
    }
}

class officeFactory implements AbstractFactory {
    createChair(){
        return new OficceChair(true);
    }

    createHeadset (){
        return new OfficeHeadset();
    }
}

class App {
    private factory: AbstractFactory;
    private chair: Chair;
    private headset: Headset;
    
    constructor (factory) {
        this.factory = factory;
    }

    createChair(){
        this.chair = this.factory.createChair();
        return this.chair.makeStuff();
    }
    createHeadset(){
        this.headset = this.factory.createHeadset();
        return this.headset.makeStuff();
    }
}

function main(type:string){
    let factory:AbstractFactory;
    if(type.toLocaleLowerCase() === 'gamer'){
        factory = new gamerFactory();
    } else {
        factory = new officeFactory();
    }

    const app =  new App(factory);
    console.log(app.createChair(),app.createHeadset());
}

main('office');