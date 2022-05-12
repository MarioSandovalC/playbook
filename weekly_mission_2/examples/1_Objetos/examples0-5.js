const coche ={
    name: 'Tsuru 3',
    nickName: function(nick){
        console.log(`A mi ${this.name} le dicen ${nick}`)
    }
};

coche.nickName('Run Run');