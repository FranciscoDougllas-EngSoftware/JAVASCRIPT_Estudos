class Character{
    life = 1;
    maxLife = 1;
    attack = 0;
    defense = 0;

    constructor(name){
        this.name = name;

    }
    get life(){
        return this._life;
    }
    set life(newLife){
        this._life = newLife < 0 ? 0 : newLife;
        this._life = newLife > this.maxLife ? this.maxLife : newLife;
    }
}

class Knight extends Character{
    constructor(name){
        super(name);
        this.life = 100;
        this.attack = 10;
        this.defense = 8;
        this.maxLife = this.life;
    }
}

class Sorcerer extends Character{
    constructor(name){
        super(name);
        this.life = 80;
        this.attack = 15;
        this.defense = 3;
        this.maxLife = this.life;
    }
}

class LittleMonster extends Character{
    constructor(){
        super('Little Monster');
        this.life = 50;
        this.attack = 5;
        this.defense = 2;
        this.maxLife = this.life;
    }
}

class BigMonster extends Character{
    constructor(){
        super('Big Monster');
        this.life = 120;
        this.attack = 18;
        this.defense = 6;
        this.maxLife = this.life;
    }
}

class Stage{
    constructor(fighter1, fighter2, fighter1El, fighter2El){
        this.fighter1El = fighter1El;
        this.fighter2El = fighter2El;
        this.fighter1 = fighter1;
        this.fighter2 = fighter2;
    }
    start(){
        this.update;

        //Todo Evento do Botao de Ataque
        
    }
    updade(){
        this.fighter1El.querySelector('.name').innerHTML = this.fighter1.name;
        let f1Pct = (this.fighter1.life / this.fighter1.maxLife) * 100;
        this.fighter1El.querySelector('.bar').style.width = `${f1Pct}%`;

        this.fighter2El.querySelector('.name').innerHTML = this.fighter2.name;
        let f2Pct = (this.fighter2.life / this.fighter2.maxLife) * 100;
        this.fighter2El.querySelector('.bar').style.width = `${f2Pct}%`;

    }
}