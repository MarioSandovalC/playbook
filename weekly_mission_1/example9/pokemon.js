class Pokemon{
    constructor(name){
        this.name = name;
    }
    sayHello(name){
        console.log(`¡Mi Pokemon ${this.name} te saluda!`)
    }
    sayMessage(message){
        console.log(`¡Mi pokemon ${this.name} te saluda ${message}`)
    }
}

module.exports = Pokemon