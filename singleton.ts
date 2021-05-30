class Singleton {
    private static instance:Singleton;
    private field:number;

    private constructor(){
        this.field = Math.random()
     }

    public static getInstance(){
        if(!Singleton.instance){
            Singleton.instance = new Singleton()
        }

        return Singleton.instance;
    }

    getNumber() : number{
        return this.field;
    }
}

function main(){
    const s1 = Singleton.getInstance();
    const s2 = Singleton.getInstance();

    if (s1 === s2) {
        console.log('Singleton works, both variables contain the same instance.',s1.getNumber(), s2.getNumber());
    } else {
        console.log('Singleton failed, variables contain different instances.');
    }
}

main();