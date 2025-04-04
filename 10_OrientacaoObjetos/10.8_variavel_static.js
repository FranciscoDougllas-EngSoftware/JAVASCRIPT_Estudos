// Variável e método estático
class Person {
    static hands = 2; // variável estática
    age = 0;

    constructor(name) {
        this.name = name;
    }

    static sayHi() {
        console.log(`Oi, eu sou ${this.name} e tenho ${this.hands} mãos`);
    }
}

let p1 = new Person('Lucas');
let p2 = new Person('João');

// Acessando o método estático diretamente pela classe
Person.sayHi(); // Oi, eu sou uma pessoa e tenho 2 mãos