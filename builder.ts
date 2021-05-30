interface Builder {
    reset: () => any;
    buildVCard: () => any;
    buildMicro: ()=> any;
    buildRam:() => any;
}

class PcGamer {
    
    public name: string;
    public ram: string;
    public micro: string;
    public vCard: string;
    public rgb: boolean;
    public periferics: string;
    
    constructor (){}

    setVcard(vCard: string){
        this.vCard= vCard;
    }

    setMicro(micro: string){
        this.micro= micro;
    }

    setRam(ram:string){
        this.ram = ram;
    }
}

class PcGamerBuilder implements Builder{
    
    public pc: PcGamer;
    constructor(){
        this.pc = this.reset();
    }

    public reset(): PcGamer {
        return new PcGamer();
    }

    buildVCard(): void {
        this.pc.setVcard('true g')
    }

    buildMicro(): void {
        this.pc.setMicro('un micro g')
    }

    buildRam(): void {
        this.pc.setRam('una ram g')
    }
}
